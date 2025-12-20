'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const PHONE_NUMBER = '(727) 278-7045';
const PHONE_HREF = 'tel:+1-727-278-7045';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* TODO: Replace with actual logo image */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-primary text-lg">Fahey&apos;s</span>
              <span className="text-text-light text-sm block -mt-1">Window Cleaning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex md:hidden items-center gap-2">
            {/* Tap to call button - mobile */}
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center w-10 h-10 text-white rounded-lg"
              style={{ backgroundColor: 'var(--primary)' }}
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            {/* Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 text-text"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text hover:text-primary hover:bg-surface px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-lg font-medium transition-colors mt-2"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <Phone className="w-4 h-4" />
                Call for Free Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}


