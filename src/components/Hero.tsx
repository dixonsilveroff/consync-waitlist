"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-concrete-white overflow-hidden">
      <div className="absolute inset-0 bg-deep-steel-blue opacity-5"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-graphite-black mb-4 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The future of borderless banking and seamless payments
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-steel-grey max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With access to foreign bank accounts, seamless payments, and competitive exchange rates, ConSync empowers you to expand your financial reach and access new markets like never before.
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex items-center space-x-2 text-steel-grey">
          <span>Scroll</span>
          {/* You can add a scroll down icon here */}
        </div>
      </motion.div>
    </section>
  );
}
