import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderLetter from "@/components/FounderLetter";
import SystemExplanation from "@/components/SystemExplanation";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FounderLetter />
      <SystemExplanation />
      <WaitlistForm />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
