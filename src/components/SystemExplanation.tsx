import { ShieldCheck, TrendingUp, Filter } from 'lucide-react';

export default function SystemExplanation() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blueprint-blue" />,
      title: 'Escrow Shield',
      description: 'Your funds are held in a secure escrow account until all project milestones are met and verified, ensuring your money is 100% safe.',
    },
    {
      icon: <Filter className="h-8 w-8 text-blueprint-blue" />,
      title: 'Verification Triage',
      description: 'Our system rigorously verifies every transaction and milestone, releasing funds only when work is completed to your exact specifications.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blueprint-blue" />,
      title: 'Inflation Shield',
      description: 'Protect your capital from currency devaluation with our stable, asset-backed digital currency, keeping your project budget firmly intact.',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-blueprint-blue tracking-widest uppercase mb-3">Core Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-graphite-black font-poppins tracking-tight">
            Built for total trust and <br className="hidden sm:block"/> undeniable transparency.
          </h3>
          <p className="mt-6 text-lg text-steel-grey font-light">
            We've engineered ConSync from the ground up to protect your interests, securing your capital across borders with military-grade precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-8 bg-concrete-white rounded-3xl border border-gray-100 hover:border-blueprint-blue/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blueprint-blue/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-graphite-black mb-4 font-poppins">{feature.title}</h4>
                <p className="text-steel-grey leading-relaxed font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
