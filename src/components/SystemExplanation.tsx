"use client";

import { ShieldCheck, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SystemExplanation() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blueprint-blue" />,
      title: 'The Escrow Shield',
      description: 'Your funds stay in a secure, multi-party escrow. The contractor sees the money is there, but they cannot touch it until the work is verified. This eliminates "Payment Lag" for them and "Fraud Risk" for you.',
    },
    {
      icon: <Filter className="h-8 w-8 text-blueprint-blue" />,
      title: 'The Verification Triage',
      description: 'We don\'t take anyone\'s word for it. Every milestone requires a GPS-stamped, timestamped photo that passes our AI and human review before a single Naira is released. If the lintel isn\'t reached, the money doesn\'t move.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blueprint-blue" />,
      title: 'The Inflation Shield',
      description: 'Lock in material prices today. We release procurement funds the moment a project starts so your budget doesn\'t get eaten by Nigeria\'s cement price swings.',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-semibold text-blueprint-blue tracking-widest uppercase mb-3">Core Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-graphite-black font-poppins tracking-tight">
            How ConSync Enforces Reality
          </h3>
          <p className="mt-6 text-lg text-steel-grey font-light">
            We've engineered ConSync from the ground up to protect your interests, securing your capital across borders with military-grade precision.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative p-8 bg-concrete-white rounded-3xl border border-gray-100 hover:border-blueprint-blue/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blueprint-blue/5 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-graphite-black mb-4 font-poppins">{feature.title}</h4>
                <p className="text-steel-grey leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
