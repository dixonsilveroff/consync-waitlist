import { ShieldCheck, Eye, TrendingDown } from "lucide-react";

export default function SystemExplanation() {
  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "The Escrow Shield",
      description: "Your funds stay in a secure, multi-party escrow. The contractor sees the money is there, but they cannot touch it until the work is verified. This eliminates \"Payment Lag\" for them and \"Fraud Risk\" for you."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "The Verification Triage",
      description: "We don't take anyone's word for it. Every milestone requires a GPS-stamped, timestamped photo that passes our AI and human review before a single Naira is released. If the lintel isn't reached, the money doesn't move."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "The Inflation Shield",
      description: "Lock in material prices today. We release procurement funds the moment a project starts so your budget doesn't get eaten by Nigeria's cement price swings."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-graphite-black mb-4">
          How ConSync Enforces Reality
        </h2>
        <p className="text-lg text-text/70 max-w-2xl mx-auto">
          We combine financial escrow with rigorous physical verification to ensure what you pay for is actually built.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl border border-border shadow-card hover:shadow-precision transition-shadow"
          >
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold text-graphite-black mb-3">
              <span className="text-primary mr-2">{index + 1}.</span>
              {point.title}
            </h3>
            <p className="text-text/80 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}