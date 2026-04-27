"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does escrow actually protect me?",
    answer:
      "Your funds are reserved for your project, but not released until verified milestones are approved. Contractors know the money exists, while you remain in control of disbursement.",
  },
  {
    question: "What counts as a verified milestone?",
    answer:
      "Each stage requires GPS-stamped and timestamped evidence. ConSync combines automated checks and human review before any payout is authorized.",
  },
  {
    question: "What if work quality does not match what was promised?",
    answer:
      "You can hold release on the milestone and request clarification or correction. Funds only move when the evidence aligns with the agreed milestone criteria.",
  },
  {
    question: "How quickly can I onboard once I get access?",
    answer:
      "Most users can complete onboarding in under 30 minutes. We collect core project and payment control details up front so setup is fast and structured.",
  },
  {
    question: "Will this work if I am managing remotely from abroad?",
    answer:
      "Yes. ConSync is built for diaspora-led projects where decision-makers are not physically on site but still need real payment control and proof of progress.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-concrete-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blueprint-blue">
            Before You Join
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-graphite-black md:text-4xl">
            Straight answers to hard questions
          </h2>
          <p className="mt-4 text-lg font-light text-steel-grey">
            We designed this to remove uncertainty, not add another layer of promises.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-graphite-black md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-steel-grey transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="border-t border-gray-100"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-steel-grey md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
