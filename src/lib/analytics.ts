export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(event: string, properties: AnalyticsProps = {}) {
  if (typeof window === 'undefined') return;

  const payload = {
    event,
    ...properties,
    timestamp: new Date().toISOString(),
  };

  const win = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    posthog?: { capture?: (name: string, props?: Record<string, unknown>) => void };
  };

  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(payload);
  }

  if (win.posthog?.capture) {
    win.posthog.capture(event, properties);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info('[analytics]', payload);
  }
}
