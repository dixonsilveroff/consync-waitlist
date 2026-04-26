import Image from "next/image";

export default function FounderLetter() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          
          {/* Headshot Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden bg-background border border-border flex items-center justify-center relative shadow-precision">
            {/* If there's an actual image: */}
            {/* <Image src="/founder.jpg" alt="Founder" fill className="object-cover" /> */}
            <div className="text-text/40 text-sm font-medium">Founder Image</div>
          </div>
          
          {/* Letter Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-graphite-black mb-6">
              A Letter to the Diaspora Investor
            </h2>
            
            <div className="space-y-4 text-text/90 leading-relaxed">
              <p>
                I am a software engineer and a civil engineering student. I have spent enough time on Nigerian construction sites to know exactly how the &quot;trust deficit&quot; works.
              </p>
              <p>
                Contractors stop work because of payment lags. Clients lose millions because of &quot;Oga&quot; promises that don&apos;t match the reality on the ground.
              </p>
              <p>
                I didn&apos;t build ConSync to be another project management app. <strong>I built it to be a financial control system.</strong>
              </p>
              <p>
                My goal is simple: You should only pay for what has actually been built—verified by data, not just a phone call. We are moving slowly to ensure the tech is as solid as the structures you&apos;re trying to build.
              </p>
              <p className="font-medium pt-2">
                Join the waitlist if you&apos;re ready to stop guessing and start controlling.
              </p>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-heading font-semibold text-lg text-graphite-black">— Vick</p>
                <p className="text-sm text-text/60">Founder, ConSync</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}