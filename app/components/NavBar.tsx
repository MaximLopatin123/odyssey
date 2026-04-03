'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const links = [
  { label: 'О клубе', href: '#about' },
  { label: 'Услуги', href: '#features' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.85)] backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpeg"
            alt="Одиссей"
            width={36}
            height={36}
            className="rounded-sm object-contain"
          />
          <span className="font-mono text-sm tracking-[0.2em] text-[#f0f0f0] uppercase">
            Одиссей
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-white/50 hover:text-[#00e5cc] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-mono border border-[#00e5cc]/40 text-[#00e5cc] hover:bg-[#00e5cc] hover:text-black transition-all duration-200"
        >
          Играть
        </a>

        {/* Mobile burger — minimal */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => {
            const nav = document.getElementById('mobile-nav');
            if (nav) nav.classList.toggle('hidden');
          }}
          aria-label="Меню"
        >
          <span className="block w-5 h-px bg-[#00e5cc]" />
          <span className="block w-5 h-px bg-[#00e5cc]" />
          <span className="block w-3 h-px bg-[#00e5cc]" />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className="hidden md:hidden bg-[rgba(8,8,8,0.96)] backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm tracking-widest uppercase text-white/60 hover:text-[#00e5cc] transition-colors"
            onClick={() => {
              document.getElementById('mobile-nav')?.classList.add('hidden');
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#pricing"
          className="inline-flex items-center justify-center px-4 py-2 text-xs tracking-widest uppercase font-mono border border-[#00e5cc]/40 text-[#00e5cc] mt-2"
          onClick={() => {
            document.getElementById('mobile-nav')?.classList.add('hidden');
          }}
        >
          Играть
        </a>
      </div>
    </header>
  );
}
