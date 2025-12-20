import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Contact Fahey's Window Cleaning for a free quote. Serving Palm Harbor, FL and Pinellas County. Call today or fill out our online form.",
  openGraph: {
    title: "Contact Us | Fahey's Window Cleaning",
    description: 'Get a free window cleaning quote for your home or business in Palm Harbor, FL.',
  },
};

const PHONE_NUMBER = '(727) 278-7045';
const PHONE_HREF = 'tel:+17272787045';
const EMAIL = 'faheyswc@gmail.com';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_NUMBER,
    href: PHONE_HREF,
    description: 'Call us directly for fastest response',
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Palm Harbor, FL 34683',
    href: null,
    description: 'Serving Pinellas County & Sarasota',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat: 8am - 6pm',
    href: null,
    description: 'Closed Sundays',
  },
];

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

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--primary-dark), var(--primary))' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-white/20 rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Response within 24 hours
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your{' '}
              <span style={{ color: 'var(--accent)' }}>Free Quote</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Ready for crystal clear windows? Contact us today for a free, no-obligation 
              estimate. Call now for the fastest response!
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-white text-lg px-6 py-4 rounded-xl font-semibold transition-transform hover:scale-105"
              style={{ color: 'var(--primary)' }}
            >
              <Phone className="w-6 h-6" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes up 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-text mb-2">
                  Request a Quote
                </h2>
                <p className="text-text-light mb-6">
                  Fill out the form below and we&apos;ll get back to you with a quote.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar - Takes up 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-light mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-text font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text font-medium">{item.value}</p>
                        )}
                        <p className="text-sm text-text-light">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer to Call */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Prefer to Talk?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Give us a call for the fastest response. We&apos;re happy to discuss 
                  your project over the phone.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-text mb-3">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white border border-border px-3 py-1.5 rounded-full text-sm text-text-light"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-light mt-3">
                  Don&apos;t see your area? Contact us anyway!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-text mb-2">How much does window cleaning cost?</h3>
              <p className="text-text-light">
                Pricing depends on the number of windows, size of your home or building, 
                and accessibility. Contact us for a free, personalized quote.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-text mb-2">Do I need to be home during the cleaning?</h3>
              <p className="text-text-light">
                For exterior-only cleaning, you don&apos;t need to be home. For interior 
                windows, we&apos;ll need access to your home. We&apos;re happy to work around 
                your schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-text mb-2">How often should I have my windows cleaned?</h3>
              <p className="text-text-light">
                Most residential customers schedule cleaning 2-4 times per year. 
                Commercial properties often prefer monthly or bi-monthly service. 
                We can recommend a schedule based on your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-text mb-2">Are you insured?</h3>
              <p className="text-text-light">
                Yes! We are fully licensed and insured. Your property is protected 
                while we work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


