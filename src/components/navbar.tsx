'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center bg-paper/60 backdrop-blur-md transition-all">
      <Link href="/" className="text-2xl font-serif tracking-tighter text-ink">
        Outwrite<span className="text-accent">.</span>
      </Link>

      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`text-[10px] uppercase tracking-[0.3em] font-sans transition-colors ${
              pathname === link.href ? 'text-ink' : 'text-ink/40 hover:text-ink'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}