'use client';

import { 
  Phone, CheckCircle, ArrowRight, Sun, Home, Heart, 
  DollarSign, Shield, Clock, Sparkles, Eye, Wind,
  AlertTriangle, TrendingUp, Smile, Users, Star,
  ClipboardCheck, Droplets, ThumbsUp, Calendar
} from 'lucide-react';
import Link from 'next/link';
import BeforeAfter from './BeforeAfter';
import FAQ from './FAQ';

// TODO: Replace with actual phone number
const PHONE_NUMBER = '(727) 278-7045';
const PHONE_HREF = 'tel:+1-727-278-7045';

const services = [
  {
    icon: Home,
    title: 'Interior Windows',
    description: 'Crystal clear views from inside your home. We clean glass, frames, and sills.',
  },
  {
    icon: Sun,
    title: 'Exterior Windows',
    description: 'Remove dirt, pollen, hard water stains, and Florida\'s infamous love bugs.',
  },
  {
    icon: Wind,
    title: 'Screen Cleaning',
    description: 'Screens trap dust and allergens. We clean them so you breathe easier.',
  },
  {
    icon: Droplets,
    title: 'Track & Sill Cleaning',
    description: 'Where dirt hides and mold grows. We get into every corner.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Free Quote',
    description: 'Call or request online. We provide a clear, honest estimate—no hidden fees.',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Schedule Service',
    description: 'Pick a time that works for you. We offer flexible scheduling, including weekends.',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Professional Cleaning',
    description: 'Our trained team arrives on time with professional equipment. We work efficiently and respect your home.',
    icon: Sparkles,
  },
  {
    step: 4,
    title: 'Quality Check',
    description: 'We walk through with you to ensure every window meets our high standards. Not satisfied? We\'ll fix it.',
    icon: ClipboardCheck,
  },
];

const problems = [
  {
    icon: DollarSign,
    problem: 'Higher Energy Bills',
    description: 'Dirty windows block up to 40% of natural light, forcing you to use more artificial lighting and making your AC work harder.',
    cost: 'Up to $200/year in wasted energy',
  },
  {
    icon: TrendingUp,
    problem: 'Reduced Home Value',
    description: 'First impressions matter. Dirty windows signal neglect and can reduce your home\'s perceived value by thousands.',
    cost: 'Up to 5% reduction in curb appeal value',
  },
  {
    icon: AlertTriangle,
    problem: 'Permanent Glass Damage',
    description: 'Hard water stains, mineral deposits, and oxidation can permanently etch glass if left untreated.',
    cost: '$300-$800 per window replacement',
  },
  {
    icon: Wind,
    problem: 'Indoor Air Quality Issues',
    description: 'Window tracks harbor mold, dust mites, and allergens that circulate through your home.',
    cost: 'Health impacts + potential remediation costs',
  },
];

const emotionalBenefits = [
  {
    icon: Sun,
    title: 'Let the Sunshine In',
    description: 'Natural light boosts mood, improves sleep, and makes your home feel more spacious and inviting.',
  },
  {
    icon: Heart,
    title: 'Pride in Your Home',
    description: 'There\'s a deep satisfaction in looking through spotless windows. Your home feels cared for.',
  },
  {
    icon: Eye,
    title: 'See the World Clearly',
    description: 'Enjoy your backyard, watch your kids play, or admire Florida\'s beautiful sunsets—without streaks.',
  },
  {
    icon: Smile,
    title: 'Impress Your Guests',
    description: 'Clean windows say "I care about my home." Make a great impression every time someone visits.',
  },
];

const pricingPackages = [
  {
    name: 'Starter',
    subtitle: 'Small Homes',
    description: 'Perfect for apartments, condos, and smaller homes',
    price: 149,
    priceNote: 'Starting at',
    features: [
      'Up to 15 windows',
      'Interior & exterior',
      'Screen cleaning',
      'Track cleaning',
      'Satisfaction guaranteed',
    ],
    popular: false,
  },
  {
    name: 'Essential',
    subtitle: 'Average Homes',
    description: 'Most popular for 3-4 bedroom homes',
    price: 249,
    priceNote: 'Starting at',
    features: [
      'Up to 25 windows',
      'Interior & exterior',
      'Screen cleaning',
      'Track & sill cleaning',
      'Hard water treatment',
      'Satisfaction guaranteed',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    subtitle: 'Large Homes',
    description: 'Comprehensive service for larger properties',
    price: 399,
    priceNote: 'Starting at',
    features: [
      'Up to 40 windows',
      'Interior & exterior',
      'Screen cleaning & repair',
      'Track & sill deep clean',
      'Hard water treatment',
      'Chandelier/skylight access',
      'Priority scheduling',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    quote: "I didn't realize how much I was missing until my windows were clean. It's like getting new glasses—everything is brighter and clearer.",
    author: "Sarah M.",
    location: "Palm Harbor",
  },
  {
    quote: "The team was professional, on time, and thorough. My wife actually cried happy tears when she saw the difference. Worth every penny.",
    author: "Mike & Linda T.",
    location: "Dunedin",
  },
  {
    quote: "I've tried DIY and other services. Fahey's is the only one that gets rid of those stubborn hard water stains. My windows look brand new.",
    author: "James R.",
    location: "Clearwater",
  },
];

export default function HomeValue() {
  return (
    <div className="min-h-screen">
      {/* Hero - Emotional Opening */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark))' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/80 text-lg mb-4">
            When was the last time you really looked through your windows?
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Home Deserves to{' '}
            <span style={{ color: 'var(--accent)' }}>Shine</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional window cleaning isn&apos;t just about clean glass—it&apos;s about 
            bringing more light into your life, protecting your investment, and 
            feeling proud of your home every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Phone className="w-5 h-5" />
              Get Your Free Quote
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" /> 100% Satisfaction Guaranteed
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Same-Week Availability
            </span>
          </div>
        </div>
      </section>

      {/* What We Do - Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Window Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don&apos;t just wipe glass—we restore your windows to their original clarity 
              with attention to every detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--surface)' }}
                >
                  <service.icon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: 'var(--primary)' }}
            >
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Do It - Process */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
              How We Do It
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Stress-Free Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From quote to completion, we make it easy. No surprises, no hassle—just sparkling windows.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="text-center">
                  {/* Icon with number badge wrapper */}
                  <div className="relative inline-block mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div 
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - Problems We Solve */}
      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
              Why It Matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Dirty Windows Cost You More Than You Think
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Neglected windows aren&apos;t just an eyesore—they&apos;re silently draining your wallet 
              and damaging your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div 
                key={problem.problem}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.2)' }}
                  >
                    <problem.icon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{problem.problem}</h3>
                    <p className="text-white/70 text-sm mb-3 leading-relaxed">
                      {problem.description}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                      💸 {problem.cost}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: 'var(--primary)' }}>
            <h3 className="text-2xl font-bold mb-3">
              Regular window cleaning is an investment, not an expense
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              For less than a nice dinner out, you can protect your home, save on energy costs, 
              and enjoy crystal-clear views year-round.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ color: 'var(--primary)' }}
            >
              <Phone className="w-5 h-5" />
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Emotional Benefits - How It Feels */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
              Beyond Clean
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Clean Windows Make You Feel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              It&apos;s not just about the windows—it&apos;s about how you feel when you walk 
              into a sun-filled room with a perfect view.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emotionalBenefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-6"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--surface)' }}
                >
                  <benefit.icon className="w-8 h-8" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After - Interactive Slider */}
      <BeforeAfter variant="slider" />

      {/* FAQ Section */}
      <FAQ variant="default" />

      {/* Testimonials */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
              Transparent Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just clear pricing for sparkling windows.
              Final price depends on window count and condition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPackages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'border-2 shadow-xl' 
                    : 'border border-gray-200'
                }`}
                style={pkg.popular ? { borderColor: 'var(--primary)' } : {}}
              >
                {pkg.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm">{pkg.subtitle}</p>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">{pkg.priceNote}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold" style={{ color: 'var(--primary)' }}>${pkg.price}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm text-center mb-6">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={PHONE_HREF}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 ${
                    pkg.popular
                      ? 'text-white'
                      : 'border-2'
                  }`}
                  style={
                    pkg.popular 
                      ? { backgroundColor: 'var(--primary)' } 
                      : { borderColor: 'var(--primary)', color: 'var(--primary)' }
                  }
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            * Prices are estimates. We&apos;ll provide an exact quote after learning about your specific needs.
            Commercial properties quoted separately.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to See the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of happy homeowners in Palm Harbor who&apos;ve discovered 
            what it feels like to live with crystal-clear windows.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105"
              style={{ color: 'var(--primary)' }}
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Request Quote Online
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm">
            <span>✓ Free estimates</span>
            <span>✓ No obligation</span>
            <span>✓ Same-week service available</span>
            <span>✓ 100% satisfaction guaranteed</span>
          </div>
        </div>
      </section>
    </div>
  );
}

