'use client';

import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const PHONE_HREF = 'tel:+17272787045';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Gradient fade */}
      <div className="h-4 bg-gradient-to-t from-white to-transparent" />
      
      {/* CTA Bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-white font-semibold text-lg transition-all active:scale-95"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          <Phone className="w-5 h-5" />
          Call for Free Quote
        </a>
        <p className="text-center text-xs text-gray-500 mt-2">
          Free estimates • Same-week service
        </p>
      </div>
    </div>
  );
}


