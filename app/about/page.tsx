import type { Metadata } from 'next';
import { Shield, Award, Users, Heart, MapPin, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Fahey's Window Cleaning - a locally owned window cleaning company serving Palm Harbor, FL and Pinellas County. Licensed, insured, and committed to quality.",
  openGraph: {
    title: "About Us | Fahey's Window Cleaning",
    description: 'Locally owned window cleaning company serving Palm Harbor and Pinellas County, FL.',
  },
};

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We don\'t cut corners. Every window gets the attention it deserves for streak-free results.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Licensed and insured for your peace of mind. Your property is protected.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We\'re not happy until you\'re happy.',
  },
  {
    icon: Heart,
    title: 'Locally Owned',
    description: 'We\'re your neighbors. We take pride in serving our Palm Harbor community.',
  },
];

const serviceAreas = [
  { name: 'Palm Harbor', primary: true },
  { name: 'Tarpon Springs', primary: false },
  { name: 'Dunedin', primary: false },
  { name: 'Clearwater', primary: false },
  { name: 'Safety Harbor', primary: false },
  { name: 'Oldsmar', primary: false },
  { name: 'East Lake', primary: false },
  { name: 'Trinity', primary: false },
  { name: 'Sarasota', primary: false },
  { name: 'Crystal Beach', primary: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark), var(--primary))' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="absolute bottom-20 left-10 w-60 h-60 border border-white/20 rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Locally Owned & Operated
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About{' '}
                <span style={{ color: 'var(--accent)' }}>Fahey&apos;s</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                {/* TODO: Replace with actual company story */}
                We&apos;re a locally owned and operated window cleaning company based right 
                here in Palm Harbor, Florida. What started as a commitment to helping 
                our neighbors keep their homes looking great has grown into a trusted 
                service across Pinellas County.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Our Irish roots remind us of the value of hard work, honesty, and 
                treating others the way we&apos;d want to be treated. That&apos;s the Fahey way.
              </p>
            </div>
            
            {/* Placeholder for team/owner photo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl aspect-[4/3] flex items-center justify-center border border-white/20">
              {/* TODO: Replace with actual team photo */}
              <div className="text-center p-8">
                <Users className="w-20 h-20 text-white/40 mx-auto mb-4" />
                <p className="text-white/60">Team photo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              What We Stand For
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              These aren&apos;t just words on a wall—they&apos;re how we run our business every day.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-text text-lg mb-2">{value.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="py-16 sm:py-20 bg-surface scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Service Area
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Serving Pinellas County
              </h2>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                Based in Palm Harbor, we proudly serve customers throughout northern 
                Pinellas County and surrounding areas. If you&apos;re not sure if we 
                service your area, just give us a call—we&apos;re always happy to help.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className={`flex items-center gap-2 ${
                      area.primary ? 'text-primary font-medium' : 'text-text-light'
                    }`}
                  >
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                      area.primary ? 'text-primary' : 'text-text-light/50'
                    }`} />
                    {area.name}
                    {area.primary && (
                      <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full">HQ</span>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-text-light mb-6">
                Don&apos;t see your area listed? Contact us anyway—we may still be able to help!
              </p>
              
              <CTAButton href="/contact" variant="secondary">
                Check Your Area
              </CTAButton>
            </div>
            
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl aspect-square flex items-center justify-center">
              {/* TODO: Replace with actual Google Map embed or service area map */}
              <div className="text-center p-8">
                <MapPin className="w-20 h-20 text-primary/40 mx-auto mb-4" />
                <p className="text-text-light">Interactive map coming soon</p>
                <p className="text-sm text-text-light/70 mt-2">
                  Palm Harbor, FL 34683
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Why Trust Fahey&apos;s?
          </h2>
          <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
            We know you have choices when it comes to window cleaning. Here&apos;s why 
            our customers keep coming back.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-text-light text-sm">Satisfaction Guarantee</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Local</div>
              <p className="text-text-light text-sm">Palm Harbor Owned</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Insured</div>
              <p className="text-text-light text-sm">Fully Licensed & Covered</p>
            </div>
          </div>
          
          {/* Placeholder for testimonial */}
          <div className="bg-surface rounded-xl p-8 max-w-2xl mx-auto">
            {/* TODO: Replace with actual customer testimonial */}
            <p className="text-text-light italic mb-4 text-lg">
              &ldquo;Placeholder testimonial - Customer reviews will be added here once available. 
              This is where a real customer quote would go to build trust.&rdquo;
            </p>
            <p className="text-text font-medium">— Happy Customer</p>
            <p className="text-text-light text-sm">Palm Harbor Homeowner</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Get Your Windows Shining
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience the Fahey difference? Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton isPhone variant="primary">
              Call for Free Quote
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us Online
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}


