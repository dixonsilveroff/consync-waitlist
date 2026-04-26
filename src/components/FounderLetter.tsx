"use client";

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FounderLetter() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-concrete-white rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Image Container with subtle border and shadow */}
              <div className="w-72 h-96 bg-steel-grey/10 rounded-2xl overflow-hidden relative shadow-2xl border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-steel-grey/40 font-poppins text-sm tracking-widest uppercase">
                  Portrait
                </div>
                {/* <Image src="/portrait.jpg" alt="Founder" fill className="object-cover" /> */}
              </div>
              {/* Decorative accent block */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blueprint-blue rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 max-w-2xl"
          >
            <Quote className="w-12 h-12 text-blueprint-blue/20 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-black mb-8 font-poppins tracking-tight">
              A Letter to the Diaspora Investor
            </h2>
            
            <div className="space-y-6 text-lg text-steel-grey font-light leading-relaxed">
              <p>
                I am a software engineer and a civil engineering student. I have spent enough time on Nigerian construction sites to know exactly how the 'trust deficit' works.
              </p>
              <p>
                Contractors stop work because of payment lags. Clients lose millions because of 'Oga' promises that don't match the reality on the ground. I didn't build ConSync to be another project management app. I built it to be a financial control system.
              </p>
              <p>
                My goal is simple: You should only pay for what has actually been built—verified by data, not just a phone call. We are moving slowly to ensure the tech is as solid as the structures you're trying to build. Join the waitlist if you're ready to stop guessing and start controlling.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-bold text-graphite-black font-poppins text-xl">Dixon Silveroff</p>
              <p className="text-blueprint-blue text-sm uppercase tracking-widest font-semibold mt-1">Founder, ConSync</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
