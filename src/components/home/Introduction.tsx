'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { value: '24', label: 'Residences' },
  { value: '2-4', label: 'Bedrooms' },
  { value: '98-246', label: 'Sq Meters' },
  { value: '1', label: 'Location', text: 'Costa Blanca' }
];

export function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textLinesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    // Split text effect manually for heading
    const chars = headingRef.current?.querySelectorAll('.char');
    
    if (chars) {
      tl.fromTo(chars, 
        { y: 150, skewY: 5, opacity: 0 },
        { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
      );
    }

    const lines = textLinesRef.current?.querySelectorAll('.line-inner');
    if (lines) {
      tl.fromTo(lines,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
        '-=0.8'
      );
    }

    tl.fromTo(statsRef.current?.children || [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
      '-=0.5'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full py-40 md:py-64 px-6 md:px-12 bg-background flex flex-col md:flex-row justify-between gap-16 md:gap-8">
      <div className="flex-1 max-w-3xl">
        <h2 
          ref={headingRef}
          className="text-huge font-serif tracking-tighter leading-[0.9] text-primary-dark font-light"
        >
          {/* Manually wrapping words for a pseudo split-text effect without external library */}
          <span className="block overflow-hidden"><span className="char inline-block">A quieter</span></span>
          <span className="block overflow-hidden italic"><span className="char inline-block">way to live.</span></span>
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-end gap-16 md:gap-32 max-w-xl">
        <div ref={textLinesRef} className="text-lg md:text-2xl font-serif text-secondary-dark leading-relaxed font-light flex flex-col">
          <div className="overflow-hidden"><span className="line-inner block">Alora Residences is a boutique collection</span></div>
          <div className="overflow-hidden"><span className="line-inner block">of contemporary homes shaped by Mediterranean</span></div>
          <div className="overflow-hidden"><span className="line-inner block">light, natural materials and a slower</span></div>
          <div className="overflow-hidden"><span className="line-inner block">rhythm of everyday life.</span></div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-dark/20 pt-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-2xl md:text-3xl font-serif text-primary-dark tracking-tighter">
                {stat.text ? stat.text : stat.value}
              </span>
              <span className="text-meta opacity-50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
