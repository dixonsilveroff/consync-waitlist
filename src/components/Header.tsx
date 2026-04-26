import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl transition-transform group-hover:scale-105">
                <Image
                  src="/ConSync Logo Transparent.png"
                  alt="ConSync Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-graphite-black tracking-tight font-poppins">ConSync</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="#team" className="px-4 py-2 text-sm font-medium text-steel-grey hover:text-blueprint-blue hover:bg-blueprint-blue/5 rounded-full transition-colors">
              Team
            </Link>
            <Link href="#features" className="px-4 py-2 text-sm font-medium text-steel-grey hover:text-blueprint-blue hover:bg-blueprint-blue/5 rounded-full transition-colors">
              Features
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="#waitlist" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-blueprint-blue hover:bg-highlight-blue shadow-md hover:shadow-lg hover:shadow-blueprint-blue/20 transition-all active:scale-95">
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
