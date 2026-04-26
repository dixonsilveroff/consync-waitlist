import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/ConSync Logo Transparent.png"
                alt="ConSync Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <span className="ml-2 text-xl font-bold text-graphite-black">ConSync</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="#team" className="text-base font-medium text-steel-grey hover:text-blueprint-blue">
              Team
            </Link>
            <Link href="#blog" className="text-base font-medium text-steel-grey hover:text-blueprint-blue">
              Blog
            </Link>
            <Link href="#contact" className="text-base font-medium text-steel-grey hover:text-blueprint-blue">
              Contact us
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="#waitlist" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blueprint-blue hover:bg-highlight-blue">
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
