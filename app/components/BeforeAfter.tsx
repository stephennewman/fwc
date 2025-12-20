'use client';

import { useState } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterProps {
  variant?: 'slider' | 'sideBySide' | 'cards';
}

export default function BeforeAfter({ variant = 'slider' }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  if (variant === 'sideBySide') {
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
              See the transformation for yourself. These are real results from homes in Palm Harbor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#e5e5e5' }}
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">😟</span>
                  </div>
                  <p className="text-gray-500 font-medium">Before Photo</p>
                  <p className="text-gray-400 text-sm mt-1">Dirty, streaky windows</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-full">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--primary)' }}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium" style={{ color: 'var(--primary)' }}>After Photo</p>
                  <p className="text-gray-500 text-sm mt-1">Crystal clear, streak-free</p>
                </div>
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
            📸 Real customer photos coming soon
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

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-2">
                  <div 
                    className="aspect-square flex items-center justify-center border-r border-gray-100"
                    style={{ backgroundColor: '#e8e8e8' }}
                  >
                    <span className="text-gray-400 text-xs">Before</span>
                  </div>
                  <div 
                    className="aspect-square flex items-center justify-center"
                    style={{ backgroundColor: 'var(--surface)' }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-900 text-sm">Palm Harbor Residence</p>
                  <p className="text-gray-500 text-xs">Whole home cleaning</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default: Interactive slider
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
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none">
          {/* Before (Left side) */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: '#d4d4d4' }}
          >
            <div className="text-center">
              <span className="text-6xl mb-4 block">🪟</span>
              <p className="text-gray-600 font-medium">Before</p>
              <p className="text-gray-400 text-sm">Dirty & Streaky</p>
            </div>
          </div>

          {/* After (Right side - clips based on slider) */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              backgroundColor: 'var(--surface)',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <div className="text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
              <p className="font-medium" style={{ color: 'var(--primary)' }}>After</p>
              <p className="text-gray-500 text-sm">Crystal Clear</p>
            </div>
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
          📸 Interactive demo — real customer photos coming soon
        </p>
      </div>
    </section>
  );
}


