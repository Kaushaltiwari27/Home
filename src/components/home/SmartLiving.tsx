'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  'Climate automation',
  'Smart access',
  'Underfloor heating',
  'Energy monitoring',
  'EV charging',
  'Efficient glazing'
];

export function SmartLiving() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = listRef.current?.children;
    if (items) {
      gsap.fromTo(items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-primary-dark text-warm-white py-40 md:py-64 px-6 md:px-12 border-t border-warm-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-32">
        <div className="flex-1">
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-12">
            Smart Living
          </span>
          <h2 className="text-4xl md:text-7xl font-serif tracking-tight leading-[1.1] italic">
            Quiet technology.
          </h2>
          <p className="mt-8 text-lg md:text-xl font-sans opacity-80 leading-relaxed max-w-sm">
            Technology at Alora is designed to be invisible—present when you need it, completely hidden when you don't.
          </p>
        </div>

        <div className="flex-1 flex items-center md:justify-end">
          <ul ref={listRef} className="flex flex-col gap-6 w-full max-w-md">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-6 border-b border-warm-white/10 pb-4">
                <span className="text-xs font-sans tracking-widest uppercase opacity-50">0{i + 1}</span>
                <span className="text-xl md:text-2xl font-serif">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
