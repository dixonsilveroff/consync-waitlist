export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-5xl mx-auto text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-danger/10 border border-danger/20 text-danger font-medium text-sm tracking-wide">
        LET'S FACE IT, THE CURRENT WAY ISN'T WORKING
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-graphite-black leading-[1.1] mb-8 text-balance mx-auto">
        You aren&apos;t building a house in Nigeria. <br className="hidden md:block" />
        <span className="text-primary">You&apos;re funding a black hole.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
        Sending money home via WhatsApp promises and unverified photos isn&apos;t &quot;managing a project&quot;—it&apos;s gambling with your life savings. If you can&apos;t verify the work from where you&apos;re sitting right now, you aren&apos;t in control.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#waitlist" 
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-all shadow-precision hover:shadow-card w-full sm:w-auto"
        >
          Get early access to control your payments
        </a>
      </div>
    </section>
  );
}