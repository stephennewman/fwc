import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '(727) 278-7045';
const PHONE_HREF = 'tel:+17272787045';
const EMAIL = 'faheyswc@gmail.com';

const serviceAreas = [
  'Palm Harbor',
  'Tarpon Springs',
  'Dunedin',
  'Clearwater',
  'Safety Harbor',
  'Oldsmar',
  'East Lake',
  'Trinity',
  'Sarasota',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* TODO: Replace with white logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">F</span>
              </div>
              <div>
                <span className="font-bold text-lg">Fahey&apos;s</span>
                <span className="text-white/80 text-sm block -mt-1">Window Cleaning</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional window cleaning services for homes and businesses in Palm Harbor, FL and surrounding areas. Locally owned and operated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Palm Harbor, FL 34683</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {/* TODO: Update with actual hours */}
                <span>Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} Fahey&apos;s Window Cleaning. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Serving Pinellas County, FL
          </p>
        </div>
      </div>
    </footer>
  );
}


