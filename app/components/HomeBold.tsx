'use client';

import { Phone, ArrowRight, Sparkles, Zap, Shield, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BeforeAfter from './BeforeAfter';
import FAQ from './FAQ';

// TODO: Replace with actual phone number
const PHONE_NUMBER = '(727) 555-0123';
const PHONE_HREF = 'tel:+17275550123';

const words = ['CRYSTAL', 'SPOTLESS', 'PRISTINE', 'BRILLIANT'];

export default function HomeBold() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero - Full Screen with Animated Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 animate-gradient"
          style={{ 
            background: `linear-gradient(-45deg, var(--primary), var(--primary-dark), var(--accent), var(--primary-light))`,
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-white/10 animate-float" style={{ animationDelay: '0.5s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Palm Harbor&apos;s Window Experts</span>
            </div>

            {/* Rotating Word */}
            <div className="mb-4 sm:mb-6 overflow-hidden">
              <span className="text-3xl sm:text-6xl lg:text-8xl font-extrabold text-white/20 block leading-none tracking-tight">
                {words[wordIndex]}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              WINDOWS<br />
              <span className="bg-clip-text text-transparent text-xl sm:text-5xl lg:text-6xl block tracking-tighter sm:tracking-tight" style={{ backgroundImage: `linear-gradient(to right, white, var(--accent))` }}>
                TRANSFORMED
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 sm:mb-10 max-w-xl mx-auto font-light px-2">
              Professional window cleaning that makes your home shine. 
              Bold results. Honest prices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                <Phone className="w-5 h-5" />
                GET FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/services"
                className="glass inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-2xl transition-all hover:bg-white/20"
              >
                SEE SERVICES
              </Link>
            </div>

            {/* Phone Display */}
            <div className="glass-dark inline-flex items-center gap-3 rounded-2xl px-6 py-4">
              <Phone className="w-6 h-6 text-white/60" />
              <span className="text-2xl sm:text-3xl font-bold text-white">{PHONE_NUMBER}</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              WHAT WE DO
            </h2>
            <p className="text-xl text-gray-500">
              Premium services. Exceptional results.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Card - Residential */}
            <div 
              className="md:col-span-2 md:row-span-2 rounded-3xl p-8 sm:p-12 relative overflow-hidden group"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 mb-4">
                  RESIDENTIAL
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Home Window Cleaning
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-md">
                  Interior & exterior cleaning for homes of all sizes. 
                  Screens, tracks, and hard water stains included.
                </p>
                <Link
                  href="/services#residential"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="rounded-3xl p-8 relative overflow-hidden group" style={{ backgroundColor: 'var(--surface)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-sm mb-4" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                COMMERCIAL
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Business Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Storefronts, offices & more.
              </p>
              <Link
                href="/services#commercial"
                className="font-semibold hover:underline"
                style={{ color: 'var(--primary)' }}
              >
                Learn More →
              </Link>
            </div>

            {/* Stats Card */}
            <div className="rounded-3xl p-8 bg-gray-900 text-white">
              <div className="text-5xl font-extrabold mb-2" style={{ color: 'var(--accent)' }}>
                100%
              </div>
              <p className="text-white/60">
                Satisfaction Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different - Big Statement */}
      <section className="py-20 sm:py-32" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                NOT YOUR<br />
                AVERAGE<br />
                <span style={{ color: 'var(--primary)' }}>WINDOW</span><br />
                <span style={{ color: 'var(--accent)' }}>CLEANERS</span>
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { icon: Zap, title: 'Fast Response', desc: 'Same-week service available' },
                { icon: Shield, title: 'Fully Insured', desc: 'Your property is protected' },
                { icon: Star, title: 'Premium Quality', desc: 'Streak-free, guaranteed' },
              ].map((item) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After - Cards Grid */}
      <BeforeAfter variant="cards" />

      {/* FAQ Section - Cards */}
      <FAQ variant="cards" />

      {/* Service Area - Bold Display */}
      <section className="py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              SERVING <span style={{ color: 'var(--accent)' }}>PINELLAS COUNTY</span>
            </h2>
            <p className="text-white/60 text-lg">
              Based in Palm Harbor. Ready to serve you.
            </p>
          </div>
          
          {/* Scrolling Text Effect */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-8 animate-scroll whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {['PALM HARBOR', 'CLEARWATER', 'DUNEDIN', 'TARPON SPRINGS', 'SAFETY HARBOR', 'OLDSMAR', 'TRINITY', 'EAST LAKE'].map((area) => (
                    <span 
                      key={`${i}-${area}`}
                      className="text-4xl sm:text-5xl font-extrabold text-white/10 hover:text-white/30 transition-colors cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section 
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            LET&apos;S MAKE YOUR<br />WINDOWS SHINE
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Free quotes. Fast service. Guaranteed satisfaction.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-4 bg-white px-10 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:scale-105 hover:shadow-2xl"
            style={{ color: 'var(--accent)' }}
          >
            <Phone className="w-8 h-8" />
            {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

