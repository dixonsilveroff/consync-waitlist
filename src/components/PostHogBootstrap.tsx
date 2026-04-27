"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import { createPostHogAnalyticsAdapter, registerAnalyticsAdapter, trackEvent } from '@/lib/analytics';

let posthogInitialized = false;

export default function PostHogBootstrap() {
  const pathname = usePathname();
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

  useEffect(() => {
    if (!posthogKey || posthogInitialized) return;

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false,
      capture_pageleave: true,
      persistence: 'localStorage+cookie',
      person_profiles: 'identified_only',
    });

    registerAnalyticsAdapter(createPostHogAnalyticsAdapter(posthog.capture.bind(posthog)));
    posthogInitialized = true;
  }, [posthogHost, posthogKey]);

  useEffect(() => {
    if (!posthogKey || !posthogInitialized) return;

    const query = typeof window !== 'undefined' ? window.location.search.replace(/^\?/, '') : '';
    trackEvent('page_view', {
      path: pathname,
      query: query || undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    });
  }, [pathname, posthogKey]);

  return null;
}
