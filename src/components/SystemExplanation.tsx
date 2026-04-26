import { ShieldCheck, TrendingUp, Filter } from 'lucide-react';

export default function SystemExplanation() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blueprint-blue" />,
      title: 'Escrow Shield',
      description: 'Your funds are held in a secure escrow account until all project milestones are met and verified, ensuring your money is safe.',
    },
    {
      icon: <Filter className="h-10 w-10 text-blueprint-blue" />,
      title: 'Verification Triage',
      description: 'Our system verifies every transaction and milestone, ensuring that funds are released only when work is completed to your satisfaction.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blueprint-blue" />,
      title: 'Inflation Shield',
      description: 'Protect your capital from currency devaluation with our stable, asset-backed digital currency, ensuring your project budget remains intact.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-concrete-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-graphite-black font-poppins">A System Built for Trust and Transparency</h2>
          <p className="mt-4 text-lg text-steel-grey">We've engineered ConSync from the ground up to protect your interests.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-graphite-black mb-2 font-poppins">{feature.title}</h3>
              <p className="text-steel-grey">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
