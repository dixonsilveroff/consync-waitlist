import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-graphite-black text-concrete-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-steel-grey/50 pb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-40 h-12">
                <Image
                  src="/ConSync Logo Transparent.png"
                  alt="ConSync Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-300 max-w-sm font-light leading-relaxed">
              Stop guessing and start controlling your construction projects in Nigeria with data-verified financial milestones.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 font-poppins tracking-wide">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#team" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 font-poppins tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} ConSync. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="italic text-gray-500">Secure. Verified. Built.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
