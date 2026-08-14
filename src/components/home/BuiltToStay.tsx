'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const principles = [
  { num: '01', title: 'Natural materials' },
  { num: '02', title: 'Mediterranean light' },
  { num: '03', title: 'Timeless architecture' }
];

export function BuiltToStay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = itemsRef.current?.children;

    if (items) {
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-warm-white py-40 md:py-64 px-6 md:px-12 text-primary-dark border-t border-primary-dark/10">
      <div className="max-w-7xl mx-auto">
        <span className="text-meta tracking-widest uppercase opacity-50 block mb-12">
          Built To Stay
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="w-full">
            <h2 className="text-huge font-serif tracking-tighter leading-none text-balance font-light">
              Architecture that becomes part of the landscape.
            </h2>
            <p className="text-lg md:text-2xl font-sans opacity-80 leading-relaxed mt-12 max-w-md font-light">
              Natural stone, warm timber, textured plaster and abundant greenery create residences that feel contemporary without losing their connection to the Mediterranean.
            </p>
          </div>

          <div ref={itemsRef} className="w-full flex flex-col justify-center gap-12 border-l border-primary-dark/10 pl-8 md:pl-16">
            {principles.map((p, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-meta tracking-widest uppercase opacity-50">{p.num}</span>
                <span className="text-3xl md:text-4xl font-serif italic">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
