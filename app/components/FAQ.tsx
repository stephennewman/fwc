'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How much does window cleaning cost?",
    answer: "Pricing depends on the number of windows, their size, and accessibility. Most residential homes range from $149-$399. We provide free, no-obligation quotes—just give us a call and we'll give you an honest price upfront with no hidden fees."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "Not necessarily! For exterior-only cleaning, you don't need to be home at all. For interior windows, we just need access to your home. Many customers leave a key or garage code. We're fully insured and background-checked for your peace of mind."
  },
  {
    question: "How long does it take to clean my windows?",
    answer: "A typical home takes 1-3 hours depending on the number of windows. We work efficiently without cutting corners. You'll be amazed how quickly we can transform your home's appearance."
  },
  {
    question: "What if it rains after you clean my windows?",
    answer: "Rain actually won't ruin professionally cleaned windows! Rain is mostly pure water—it's the dirt and debris on dirty windows that causes streaks. However, if you're not satisfied for any reason, we'll come back and make it right. That's our guarantee."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We carry full liability insurance and workers' compensation coverage. This protects you and your property. We're happy to provide proof of insurance upon request."
  },
  {
    question: "How often should I have my windows cleaned?",
    answer: "For most Florida homes, we recommend every 3-6 months. Our humid climate, pollen, and salt air (if you're near the coast) can build up quickly. Many customers schedule quarterly cleanings to keep their home looking its best year-round."
  },
  {
    question: "Do you clean screens and tracks too?",
    answer: "Yes! Screen cleaning and track cleaning are included in all our packages. We remove screens, clean them, vacuum out tracks, and wipe down sills. It's a complete window cleaning service, not just the glass."
  },
  {
    question: "Can you remove hard water stains?",
    answer: "Yes, we specialize in hard water stain removal. Florida's mineral-rich water can leave stubborn deposits on glass. We use professional-grade solutions and techniques to restore your windows. Severe staining may require an additional treatment, which we'll discuss upfront."
  },
];

interface FAQProps {
  variant?: 'default' | 'compact' | 'cards';
}

export default function FAQ({ variant = 'default' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (variant === 'compact') {
    return (
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to help you decide.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
    return (
      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Got Questions?
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              WE'VE GOT ANSWERS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default: Accordion style
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our window cleaning services. Can't find your answer? Give us a call!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: 'var(--primary)' }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+17275550123"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Call Us: (727) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}

