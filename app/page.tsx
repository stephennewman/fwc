import { Home as HomeIcon, Building2, Shield, Clock, Award, MapPin, Phone } from 'lucide-react';
import CTAButton from './components/CTAButton';
import ServiceCard from './components/ServiceCard';

// TODO: Replace with actual phone number
const PHONE_NUMBER = '(727) 555-0123';

const serviceAreas = [
  'Palm Harbor',
  'Tarpon Springs', 
  'Dunedin',
  'Clearwater',
  'Safety Harbor',
  'Oldsmar',
  'East Lake',
  'Trinity',
];

const trustSignals = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully covered for your peace of mind',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On-time, every time',
  },
  {
    icon: Award,
    title: 'Quality Results',
    description: 'Streak-free, sparkling windows',
  },
  {
    icon: MapPin,
    title: 'Locally Owned',
    description: 'Proudly serving Palm Harbor',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark), var(--primary))' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              Serving Palm Harbor & Pinellas County
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Crystal Clear Windows for Your{' '}
              <span style={{ color: 'var(--accent)' }}>Home & Business</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed">
              Professional window cleaning services in Palm Harbor, FL. 
              Residential and commercial. Licensed, insured, and locally owned.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton isPhone variant="primary">
                Call for Free Quote
              </CTAButton>
              <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Request Estimate
              </CTAButton>
            </div>
            
            {/* Phone number display */}
            <p className="mt-6 text-white/70 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Or call us directly: <span className="text-white font-medium">{PHONE_NUMBER}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Our Services
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From single-family homes to office buildings, we deliver spotless windows 
              that let the Florida sunshine in.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Why Choose Fahey&apos;s?
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              We&apos;re not just window cleaners—we&apos;re your neighbors. 
              Trusted by homeowners and businesses across Pinellas County.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-1">{signal.title}</h3>
                <p className="text-text-light text-sm">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
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
                    className="bg-white border border-border px-4 py-2 rounded-full text-sm text-text"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <CTAButton href="/about#service-area" variant="secondary">
                View Full Service Area
              </CTAButton>
            </div>
            
            {/* Placeholder for map or image */}
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">
              {/* TODO: Replace with actual service area map or photo */}
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary/50 mx-auto mb-4" />
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
              Call {PHONE_NUMBER}
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
