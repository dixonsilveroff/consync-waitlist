export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

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
  if (typeof window === 'undefined') return;

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
