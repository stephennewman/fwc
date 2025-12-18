'use client';

import { Phone, CheckCircle, Shield, Clock, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import BeforeAfter from './BeforeAfter';
import FAQ from './FAQ';

// TODO: Replace with actual phone number
const PHONE_NUMBER = '(727) 555-0123';
const PHONE_HREF = 'tel:+17275550123';

const services = [
  'Interior & Exterior Windows',
  'Screen Cleaning',
  'Track & Sill Cleaning',
  'Hard Water Stain Removal',
];

const trustPoints = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: 'Same-Week Service' },
  { icon: Star, text: '100% Satisfaction' },
];

const serviceAreas = [
  'Palm Harbor', 'Tarpon Springs', 'Dunedin', 'Clearwater',
  'Safety Harbor', 'Oldsmar', 'East Lake', 'Trinity'
];

export default function HomeClean() {
  return (
    <div className="min-h-screen">
      {/* Hero - Simple and Direct */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--primary)' }}>
            Palm Harbor, Florida
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Professional Window Cleaning
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Clear windows. Fair prices. Reliable service. 
            Serving homes throughout Pinellas County.
          </p>
          
          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 rounded-lg transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
            >
              Request Quote Online
            </Link>
          </div>

          {/* Trust Badges - Inline */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {trustPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-2">
                <point.icon className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Clean Grid */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
            What We Do
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Residential */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Residential
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                    {service}
                  </li>
                ))}
              </ul>
              <Link 
                href="/services#residential"
                className="inline-block mt-6 text-sm font-medium hover:underline"
                style={{ color: 'var(--primary)' }}
              >
                Learn more →
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Commercial
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                  Storefronts & Offices
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                  Regular Maintenance Plans
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                  After-Hours Available
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                  Fully Insured
                </li>
              </ul>
              <Link 
                href="/services#commercial"
                className="inline-block mt-6 text-sm font-medium hover:underline"
                style={{ color: 'var(--primary)' }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Minimal */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-900">Local & Reliable.</strong> We&apos;re based right here in Palm Harbor. 
                  When you call, you talk to us directly—not a call center.
                </p>
                <p>
                  <strong className="text-gray-900">Fair Pricing.</strong> No hidden fees. No surprises. 
                  We quote what we charge.
                </p>
                <p>
                  <strong className="text-gray-900">Quality Work.</strong> We take pride in leaving your 
                  windows spotless. Not satisfied? We&apos;ll make it right.
                </p>
              </div>
            </div>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary)' }}>Local</div>
                <div className="text-sm text-gray-600">Palm Harbor Based</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary)' }}>100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary)' }}>Insured</div>
                <div className="text-sm text-gray-600">Licensed & Covered</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary)' }}>Free</div>
                <div className="text-sm text-gray-600">Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After - Side by Side */}
      <BeforeAfter variant="sideBySide" />

      {/* FAQ Section - Compact */}
      <FAQ variant="compact" />

      {/* Service Area - Simple List */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: 'var(--primary)' }} />
              <span className="font-medium">Serving:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {serviceAreas.map((area, i) => (
                <span key={area}>
                  {area}{i < serviceAreas.length - 1 && <span className="text-gray-300 ml-4">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready for Clean Windows?
          </h2>
          <p className="text-white/80 mb-8">
            Call today for a free, no-obligation quote.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-gray-100"
            style={{ color: 'var(--primary)' }}
          >
            <Phone className="w-5 h-5" />
            {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
}

