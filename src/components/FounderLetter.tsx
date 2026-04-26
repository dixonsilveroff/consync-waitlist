import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function FounderLetter() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-concrete-white rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
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
          </div>

          <div className="lg:col-span-7 max-w-2xl">
            <Quote className="w-12 h-12 text-blueprint-blue/20 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-black mb-8 font-poppins tracking-tight">
              A commitment to your financial freedom.
            </h2>
            
            <div className="space-y-6 text-lg text-steel-grey font-light leading-relaxed">
              <p>
                As someone who has navigated the complexities of international finance firsthand, I understand the profound frustrations that come with managing money across borders. The dream of building a home, investing in property, or running a business in a different country often clashes with the harsh reality of inefficient systems and hidden charges.
              </p>
              <p>
                We built ConSync to solve these exact problems. Our mission is to empower the diaspora community by providing a seamless, secure, and transparent financial platform that bridges the gap between countries. Your hard-earned money should work for you, not get lost in a web of intermediaries.
              </p>
              <p>
                ConSync is more than just a payment platform—we're leveraging cutting-edge technology to build a system tailored to the unique needs of individuals operating in a globalized world. Join us on this journey to redefine borderless banking.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-bold text-graphite-black font-poppins text-xl">Dixon Silveroff</p>
              <p className="text-blueprint-blue text-sm uppercase tracking-widest font-semibold mt-1">Founder, ConSync</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
