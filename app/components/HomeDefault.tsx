'use client';

import { Phone, MapPin, CheckCircle, Home as HomeIcon, Building2, Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import CTAButton from './CTAButton';
import BeforeAfter from './BeforeAfter';
import FAQ from './FAQ';

// TODO: Replace with actual phone number
const PHONE_NUMBER = '(727) 278-7045';
const PHONE_HREF = 'tel:+17272787045';

const serviceAreas = [
  'Palm Harbor', 'Tarpon Springs', 'Dunedin', 'Clearwater',
  'Safety Harbor', 'Oldsmar', 'East Lake', 'Trinity'
];

const trustSignals = [
  { icon: Shield, title: 'Licensed & Insured', description: 'Fully covered for your peace of mind' },
  { icon: Clock, title: 'Reliable Service', description: 'On-time, every time' },
  { icon: Award, title: 'Quality Results', description: 'Streak-free, sparkling windows' },
  { icon: Users, title: 'Locally Owned', description: 'Proudly serving Palm Harbor' },
];

export default function HomeDefault() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark), var(--primary))' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-white/5" />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-white/10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Palm Harbor & Pinellas County
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Crystal Clear Windows for Your{' '}
              <span style={{ color: 'var(--accent)' }}>Home & Business</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Professional window cleaning services in Palm Harbor, FL. 
              Residential and commercial. Licensed, insured, and locally owned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton isPhone variant="primary">
                <Phone className="w-5 h-5" />
                Call for Free Quote
              </CTAButton>
              <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Estimate
              </CTAButton>
            </div>

            <p className="text-white/70 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Or call us directly: <span className="font-semibold text-white">{PHONE_NUMBER}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Our Services
            </h2>
            <p className="text-text-light text-lg">
              From single-family homes to office buildings, we deliver spotless windows 
              that let the Florida sunshine in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Residential Window Cleaning"
              description="Keep your home looking its best with professional interior and exterior window cleaning. We handle homes of all sizes throughout Palm Harbor and surrounding areas."
              icon={HomeIcon}
              href="/services#residential"
              features={[
                'Interior & exterior cleaning',
                'Screen cleaning included',
                'Track & sill cleaning',
                'Flexible scheduling',
              ]}
            />
            <ServiceCard
              title="Commercial Window Cleaning"
              description="Make a great impression on customers with crystal clear storefront and office windows. Regular maintenance plans available for businesses."
              icon={Building2}
              href="/services#commercial"
              features={[
                'Storefronts & offices',
                'Multi-story buildings',
                'Maintenance contracts',
                'After-hours service available',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Why Choose Fahey&apos;s?
            </h2>
            <p className="text-text-light text-lg">
              We&apos;re not just window cleaners—we&apos;re your neighbors. 
              Trusted by homeowners and businesses across Pinellas County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                >
                  <signal.icon className="w-7 h-7" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-semibold text-text mb-2">{signal.title}</h3>
                <p className="text-sm text-text-light">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After - Interactive Slider */}
      <BeforeAfter variant="slider" />

      {/* FAQ Section */}
      <FAQ variant="default" />

      {/* Service Area */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                Proudly Serving Palm Harbor & Beyond
              </h2>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                Based in Palm Harbor, we provide professional window cleaning services 
                throughout Pinellas County. Whether you&apos;re in Tarpon Springs, Clearwater, 
                Dunedin, or anywhere in between—we&apos;ve got you covered.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-full text-sm border"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-light)' }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <Link
                href="/about#service-area"
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: 'var(--primary)' }}
              >
                View Full Service Area
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Map Placeholder */}
            <div 
              className="rounded-2xl aspect-video flex items-center justify-center"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--primary)', opacity: 0.5 }} />
                <p className="text-text-light">Service area map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your home or business. 
            We&apos;ll have your windows shining in no time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton isPhone variant="primary">
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

