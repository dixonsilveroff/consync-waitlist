import Hero from "@/components/Hero";
import FounderLetter from "@/components/FounderLetter";
import SystemExplanation from "@/components/SystemExplanation";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FounderLetter />
      <SystemExplanation />
      
      <section className="py-20 md:py-32 px-6 bg-background border-t border-border relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-graphite-black mb-4">
            Join the ConSync Waitlist
          </h2>
          <p className="text-lg text-text/80 text-balance max-w-2xl mx-auto">
            We are onboarding a select group of diaspora investors for our closed beta. Apply for early access to control your project payments.
          </p>
        </div>
        
        <div className="relative z-10">
          <WaitlistForm />
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border bg-white text-text/60 text-sm">
        <p>&copy; {new Date().getFullYear()} ConSync. All rights reserved.</p>
      </footer>
    </main>
  );
}