"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function MobileStickyCta() {
  const [hideCta, setHideCta] = useState(false);

  useEffect(() => {
    const target = document.getElementById("waitlist");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideCta(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hideCta) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <Link
        href="/#waitlist"
        onClick={() => trackEvent('cta_click', { source: 'mobile_sticky_cta' })}
        className="flex w-full items-center justify-center rounded-full bg-graphite-black px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/20 transition-all hover:bg-blueprint-blue"
      >
        Join Waitlist
      </Link>
    </div>
  );
}
