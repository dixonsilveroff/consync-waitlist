"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-concrete-white">
      {/* Premium Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blueprint-blue/10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-graphite-black tracking-tight font-poppins leading-[1.1] mb-6">
            The future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blueprint-blue to-highlight-blue">borderless banking</span> <br className="hidden md:block"/> and seamless payments.
          </h1>
          
          <p className="text-lg md:text-xl text-steel-grey max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            With access to foreign bank accounts, seamless payments, and competitive exchange rates, ConSync empowers you to expand your financial reach and access new markets like never before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#waitlist" className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-base font-semibold text-white bg-graphite-black rounded-full shadow-xl hover:bg-blueprint-blue transition-all duration-300 hover:scale-105 active:scale-95">
              Secure Your Spot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="px-8 py-4 w-full sm:w-auto text-base font-semibold text-graphite-black bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-300">
              Discover How It Works
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Graphic Area */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-20 px-4"
      >
        <div className="aspect-[21/9] rounded-2xl bg-white/40 border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] backdrop-blur-xl overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
          {/* Abstract representation of the network/globe from your inspiration */}
          <div className="w-[400px] h-[400px] absolute opacity-10">
            <div className="absolute inset-0 border-[1px] border-blueprint-blue rounded-full rounded-tr-none rotate-45"></div>
            <div className="absolute inset-4 border-[1px] border-blueprint-blue rounded-full rounded-bl-none -rotate-12"></div>
            <div className="absolute inset-8 border-[1px] border-blueprint-blue rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
