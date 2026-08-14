'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const distances = [
  { label: 'Beach', time: '7 min' },
  { label: 'Golf', time: '10 min' },
  { label: 'Marina', time: '12 min' },
  { label: 'Airport', time: '45 min' }
];

export function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    const elements = contentRef.current?.children;
    if (elements) {
      gsap.fromTo(elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
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
    <section id="location" ref={containerRef} className="w-full bg-primary-dark text-warm-white pb-32">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mt-16 md:mt-32">
        <Image 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
          alt="Marina Alta Coastline"
          fill sizes="100vw"
          className="object-cover scale-[1.2]"
        />
      </div>

      <div className="px-6 md:px-12 pt-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="flex-1">
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-12">
            Real-Life Location
          </span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] text-balance">
            Between the sea, <br />
            the mountains <br />
            and everything <br />
            worth returning to.
          </h2>
        </div>

        <div ref={contentRef} className="flex-1 flex flex-col gap-16 mt-8 md:mt-20">
          <p className="text-lg md:text-xl font-sans opacity-80 leading-relaxed max-w-md">
            Set along the Mediterranean coast, Alora offers easy access to beaches, golf, restaurants, marinas and wellness destinations while remaining removed from the pace of the city.
          </p>

          <div className="flex flex-col gap-6 w-full max-w-md">
            {distances.map((item, index) => (
              <div key={index} className="flex justify-between border-b border-warm-white/20 pb-4">
                <span className="text-sm font-sans tracking-widest uppercase">{item.label}</span>
                <span className="text-sm font-serif italic">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
