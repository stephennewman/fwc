'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  variant?: 'slider' | 'sideBySide' | 'cards';
}

// Real before/after images
const beforeAfterSets = [
  {
    id: 1,
    before: '/images/before-after/befroe_copy.png',
    after: '/images/before-after/afterk_copy.png',
    title: 'Window with Shutters',
    description: 'Hard water stains removed',
  },
  {
    id: 2,
    before: '/images/before-after/IMG_2150.PNG',
    after: '/images/before-after/IMG_2151.PNG',
    title: 'Full Exterior',
    description: 'Complete home transformation',
  },
];

export default function BeforeAfter({ variant = 'slider' }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  if (variant === 'sideBySide') {
    const set = beforeAfterSets[0]; // Close-up set
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
              The Difference is Clear
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Before & After
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformation for yourself. Real results from homes in Palm Harbor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={set.before}
                  alt="Window before cleaning - dirty with water spots"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-full">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={set.after}
                  alt="Window after cleaning - crystal clear"
                  fill
                  className="object-cover"
                />
              </div>
              <div 
                className="absolute top-4 left-4 px-3 py-1 text-white text-sm font-medium rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                After
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Windows stay clean for 6-8 months with our professional technique
          </p>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
    return (
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Homes
            </h2>
            <p className="text-lg text-gray-600">
              Palm Harbor homeowners love their sparkling windows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterSets.map((set) => (
              <div key={set.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={set.before}
                      alt={`${set.title} before cleaning`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-gray-800/80 text-white text-xs font-medium rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={set.after}
                      alt={`${set.title} after cleaning`}
                      fill
                      className="object-cover"
                    />
                    <div 
                      className="absolute top-2 right-2 px-2 py-0.5 text-white text-xs font-medium rounded"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-900">{set.title}</p>
                  <p className="text-gray-500 text-sm">{set.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Our technique keeps windows clean for 6-8 months
          </p>
        </div>
      </section>
    );
  }

  // Default: Interactive slider using the exterior photos
  const set = beforeAfterSets[1]; // Exterior set for slider
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>
            See the Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Drag to Compare
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Slide to see the dramatic transformation professional window cleaning makes.
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none">
          {/* Before Image (full) */}
          <Image
            src={set.before}
            alt="Windows before cleaning"
            fill
            className="object-cover"
            priority
          />

          {/* After Image (clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <Image
              src={set.after}
              alt="Windows after cleaning"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <ArrowLeftRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Invisible slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />

          {/* Labels */}
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-800/80 text-white text-sm font-medium rounded-full">
            Before
          </div>
          <div 
            className="absolute bottom-4 right-4 px-3 py-1 text-white text-sm font-medium rounded-full"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            After
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Windows stay clean for 6-8 months with our professional technique
        </p>
      </div>
    </section>
  );
}
