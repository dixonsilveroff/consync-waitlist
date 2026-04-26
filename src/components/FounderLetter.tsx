import Image from 'next/image';

export default function FounderLetter() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-graphite-black mb-4 font-poppins">A Letter from Our Founder</h2>
            <div className="text-steel-grey space-y-4">
              <p>
                As someone who has navigated the complexities of international finance firsthand, I understand the challenges and frustrations that come with managing money across borders. The dream of building a home, investing in property, or running a business in a different country often clashes with the harsh reality of inefficient banking systems, exorbitant fees, and a lack of transparency.
              </p>
              <p>
                We built ConSync to solve these problems. Our mission is to empower the diaspora community by providing a seamless, secure, and transparent financial platform that bridges the gap between countries. We believe that your hard-earned money should work for you, not get lost in a web of intermediaries and hidden charges.
              </p>
              <p>
                ConSync is more than just a payment platform; it's a commitment to your financial freedom. We're leveraging cutting-edge technology to build a system that is not only efficient but also tailored to the unique needs of individuals and businesses operating in a globalized world. Join us on this journey to redefine borderless banking.
              </p>
              <p className="font-bold">- Dixon Silveroff, Founder of ConSync</p>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for founder's image */}
            <div className="w-64 h-64 bg-steel-grey rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
