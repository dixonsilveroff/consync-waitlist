import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ConSync",
  description: "Privacy Policy for ConSync waitlist and platform services.",
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="flex flex-col min-h-screen bg-concrete-white">
      <Header />
      
      <main className="grow pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-graphite-black font-poppins mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-steel-grey mb-12 uppercase tracking-widest font-semibold">Last Updated: {lastUpdated}</p>
            
            <div className="space-y-10 text-steel-grey font-light leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">1. Introduction</h2>
                <p>
                  Welcome to ConSync ("we," "our," or "us"). We are deeply committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and join our waitlist for our financial control system.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">2. Information We Collect</h2>
                <p className="mb-4">When you join our waitlist, we collect personal and project-related information that you voluntarily provide to us. This serves as a filtering system for serious users and helps us tailor our platform. Collected data includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> Full name, email address, phone number, and current location.</li>
                  <li><strong>Project Context:</strong> Project status, project location, project type, and estimated budget.</li>
                  <li><strong>Readiness & Feedback:</strong> Current management plans, past loss experiences, control gaps, and willingness to use an escrow system.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To manage our waitlist and securely notify you when ConSync early access is available.</li>
                  <li>To understand the specific needs, pain points, and demographics of the diaspora community to improve our platform architecture.</li>
                  <li>To communicate with you regarding updates, features, and relevant news about ConSync's development.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">4. How We Share Your Information</h2>
                <p>
                  We do not sell, rent, or trade your personal information to third parties. We only share your data with trusted, compliant service providers (such as secure database and hosting services like Airtable and Vercel) strictly for the purpose of securely storing waitlist data and facilitating our communications with you. These providers are bound by strict confidentiality and data protection agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">5. Data Security</h2>
                <p>
                  Trust is the core of ConSync. We implement appropriate technical and organizational security measures—including data encryption and secure server environments—designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">6. Your Privacy Rights</h2>
                <p>
                  Depending on your location (such as under the GDPR, CCPA, or NDPR), you may have rights regarding your personal data, including the right to access, correct, or request the deletion of your personal information from our waitlist systems. To exercise these rights, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-graphite-black font-poppins mb-4">7. Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, or if you would like to request the removal of your data from our waitlist, please contact us at: <a href="mailto:support@consync.app" className="text-blueprint-blue font-medium hover:underline transition-all">support@consync.app</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
