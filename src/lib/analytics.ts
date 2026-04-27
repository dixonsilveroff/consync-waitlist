export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;
export type AnalyticsConsentStatus = 'granted' | 'denied' | 'unset';

export const ANALYTICS_CONSENT_STORAGE_KEY = 'consync_analytics_consent_v1';
export const ANALYTICS_CONSENT_EVENT = 'consync:analytics-consent-changed';
export const ANALYTICS_CONSENT_OPEN_EVENT = 'consync:analytics-consent-open';

type AnalyticsPayload = {
  event: string;
  timestamp: string;
  properties: AnalyticsProps;
};

export type AnalyticsAdapter = {
  id: string;
  track: (payload: AnalyticsPayload) => void;
};

const adapters = new Map<string, AnalyticsAdapter>();

export function getAnalyticsConsentStatus(): AnalyticsConsentStatus {
  if (typeof window === 'undefined') return 'unset';

  const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
  if (value === 'granted' || value === 'denied') return value;
  return 'unset';
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsentStatus() === 'granted';
}

export function setAnalyticsConsent(status: Exclude<AnalyticsConsentStatus, 'unset'>) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, status);
  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, {
      detail: { status },
    })
  );
}

export function openAnalyticsConsentPrompt() {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_OPEN_EVENT));
}

export function subscribeAnalyticsConsent(listener: (status: AnalyticsConsentStatus) => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<{ status?: AnalyticsConsentStatus }>;
    listener(customEvent.detail?.status ?? getAnalyticsConsentStatus());
  };

  const storageHandler = () => {
    listener(getAnalyticsConsentStatus());
  };

  window.addEventListener(ANALYTICS_CONSENT_EVENT, handler);
  window.addEventListener('storage', storageHandler);

  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_EVENT, handler);
    window.removeEventListener('storage', storageHandler);
  };
}

export function registerAnalyticsAdapter(adapter: AnalyticsAdapter) {
  adapters.set(adapter.id, adapter);
}

export function unregisterAnalyticsAdapter(adapterId: string) {
  adapters.delete(adapterId);
}

export function createDataLayerAnalyticsAdapter(): AnalyticsAdapter {
  return {
    id: 'datalayer',
    track: payload => {
      const win = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
      };

      if (!Array.isArray(win.dataLayer)) return;

      win.dataLayer.push({
        event: payload.event,
        ...payload.properties,
        timestamp: payload.timestamp,
      });
    },
  };
}

export function createPostHogAnalyticsAdapter(capture: (event: string, properties?: Record<string, unknown>) => void): AnalyticsAdapter {
  return {
    id: 'posthog',
    track: payload => {
      capture(payload.event, payload.properties);
    },
  };
}

if (typeof window !== 'undefined') {
  registerAnalyticsAdapter(createDataLayerAnalyticsAdapter());
}

export function trackEvent(event: string, properties: AnalyticsProps = {}) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  const payload: AnalyticsPayload = {
    event,
    properties,
    timestamp: new Date().toISOString(),
  };

  adapters.forEach(adapter => {
    try {
      adapter.track(payload);
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[analytics] Adapter ${adapter.id} failed`, error);
      }
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    console.info('[analytics]', payload);
  }
}
