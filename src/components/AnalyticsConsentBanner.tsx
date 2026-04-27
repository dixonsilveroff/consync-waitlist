"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAnalyticsConsentStatus, setAnalyticsConsent } from '@/lib/analytics';

export default function AnalyticsConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(getAnalyticsConsentStatus() === 'unset');
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm leading-relaxed text-steel-grey">
          We use privacy-friendly analytics to understand form drop-off, improve onboarding flow, and measure feature impact. Read our{' '}
          <Link href="/privacy" className="font-semibold text-blueprint-blue hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setAnalyticsConsent('denied');
              setIsVisible(false);
            }}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-graphite-black transition-all hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              setAnalyticsConsent('granted');
              setIsVisible(false);
            }}
            className="rounded-full bg-graphite-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blueprint-blue"
          >
            Accept Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
