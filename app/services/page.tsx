import type { Metadata } from 'next';
import { Home as HomeIcon, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export const metadata: Metadata = {
  title: 'Window Cleaning Services',
  description: 'Professional residential and commercial window cleaning services in Palm Harbor, FL. Interior, exterior, screens, and more. Free estimates available.',
  openGraph: {
    title: "Window Cleaning Services | Fahey's Window Cleaning",
    description: 'Professional residential and commercial window cleaning in Palm Harbor and Pinellas County, FL.',
  },
};

const residentialFeatures = [
  'Complete interior and exterior window cleaning',
  'Screen cleaning and reinstallation',
  'Window track and sill cleaning',
  'Hard water stain removal',
  'French doors and skylights',
  'Storm window cleaning',
  'Single and multi-story homes',
  'Flexible scheduling to fit your needs',
];

const commercialFeatures = [
  'Storefronts and retail spaces',
  'Office buildings and complexes',
  'Restaurants and hospitality',
  'Medical and dental offices',
  'Multi-story commercial buildings',
  'Regular maintenance contracts',
  'After-hours service available',
  'Fully insured for commercial work',
];

const processSteps = [
  {
    number: '01',
    title: 'Get a Quote',
    description: 'Call us or fill out our contact form. We\'ll discuss your needs and provide a free estimate.',
  },
  {
    number: '02',
    title: 'Schedule Service',
    description: 'Pick a date and time that works for you. We offer flexible scheduling including weekends.',
  },
  {
    number: '03',
    title: 'We Clean',
    description: 'Our trained professionals arrive on time with all equipment needed for spotless results.',
  },
  {
    number: '04',
    title: 'Enjoy the View',
    description: 'Walk through with us to ensure satisfaction. You\'ll love your crystal clear windows!',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark), var(--primary))' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/20 rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Licensed & Insured
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Window{' '}
              <span style={{ color: 'var(--accent)' }}>Cleaning Services</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              From cozy homes to busy storefronts, we deliver streak-free, sparkling 
              windows throughout Palm Harbor and Pinellas County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton isPhone variant="primary">
                Call for Free Quote
              </CTAButton>
              <CTAButton href="#residential" variant="outline" className="border-white text-white hover:bg-white/10">
                View Services
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section id="residential" className="py-16 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HomeIcon className="w-4 h-4" />
                Residential Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Window Cleaning for Your Home
              </h2>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                Your home deserves to shine. We clean windows inside and out, removing 
                dirt, grime, and hard water stains that block natural light. From small 
                condos to large estates, we treat every home with care.
              </p>
              
              <ul className="space-y-3 mb-8">
                {residentialFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton href="/contact" variant="secondary">
                Get Residential Quote
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
            </div>
            
            {/* Placeholder Image */}
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl aspect-[4/3] flex items-center justify-center order-first lg:order-last">
              {/* TODO: Replace with actual residential photo */}
              <div className="text-center p-8">
                <HomeIcon className="w-20 h-20 text-secondary/40 mx-auto mb-4" />
                <p className="text-text-light">Residential photo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section id="commercial" className="py-16 sm:py-20 bg-surface scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder Image */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl aspect-[4/3] flex items-center justify-center">
              {/* TODO: Replace with actual commercial photo */}
              <div className="text-center p-8">
                <Building2 className="w-20 h-20 text-primary/40 mx-auto mb-4" />
                <p className="text-text-light">Commercial photo coming soon</p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Commercial Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Window Cleaning for Your Business
              </h2>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                First impressions matter. Clean windows tell customers you care about 
                the details. We work with retail stores, offices, restaurants, and more 
                to keep your business looking professional.
              </p>
              
              <ul className="space-y-3 mb-8">
                {commercialFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton href="/contact" variant="secondary">
                Get Commercial Quote
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              How It Works
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Getting your windows cleaned is easy. Here&apos;s our simple four-step process 
              from quote to sparkling clean.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile, last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-text text-lg mb-2">{step.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;ll get back to you 
            within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton isPhone variant="secondary">
              Call Now for Quote
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              Request Online Quote
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}


