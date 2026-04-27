"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-concrete-white">
      {/* Premium Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blueprint-blue/10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-growth-green animate-pulse"></span>
            <span className="text-xs font-semibold text-steel-grey uppercase tracking-wider">Early Access Now Open</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-graphite-black tracking-tight font-poppins leading-[1.1] mb-6">
            You aren’t building a house in Nigeria. <br className="hidden md:block"/> You’re <span className="text-transparent bg-clip-text bg-linear-to-r from-blueprint-blue to-highlight-blue">funding a black hole.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-steel-grey max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Sending money home via WhatsApp promises and unverified photos isn't "managing a project"—it's gambling with your life savings. If you can’t verify the work from where you’re sitting right now, you aren’t in control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#waitlist"
              onClick={() => trackEvent('cta_click', { source: 'hero_primary_secure_spot' })}
              className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-base font-semibold text-white bg-graphite-black rounded-full shadow-xl hover:bg-blueprint-blue transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Secure Your Spot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              onClick={() => trackEvent('cta_click', { source: 'hero_secondary_discover_how' })}
              className="px-8 py-4 w-full sm:w-auto text-base font-semibold text-graphite-black bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-300"
            >
              Discover How It Works
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-steel-grey">
              Escrow-first payouts
            </div>
            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-steel-grey">
              Verification before release
            </div>
            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-steel-grey">
              Built for diaspora builders
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
