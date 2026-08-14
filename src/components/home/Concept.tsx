'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Concept() {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(img1Ref.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: img1Ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to(img2Ref.current, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: img2Ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="concept" ref={containerRef} className="w-full bg-warm-white py-40 md:py-64 px-6 md:px-12 text-primary-dark border-t border-primary-dark/10">
      <div className="max-w-7xl mx-auto">
        
        <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-12">
          The Concept
        </span>
        
        <h2 className="text-4xl md:text-7xl font-serif tracking-tight leading-[1.1] max-w-3xl">
          A community,<br />
          <span className="italic font-light">not a complex.</span>
        </h2>

        <div className="mt-24 md:mt-48 flex flex-col md:flex-row gap-16 md:gap-32 items-center">
          <div className="w-full md:w-3/5 h-[50vh] md:h-[80vh] relative overflow-hidden">
            <Image 
              ref={img1Ref}
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              alt="Alora Concept Architecture"
              fill sizes="100vw"
              className="object-cover scale-[1.3]"
            />
          </div>
          
          <div className="w-full md:w-2/5 flex flex-col gap-12 md:mt-32">
            <p className="text-lg md:text-xl font-sans text-secondary-dark leading-relaxed">
              Every aspect of Alora Residences is designed to foster a sense of belonging while respecting absolute privacy. The layout of the buildings follows the natural topography of the land, creating intimate spaces and expansive views simultaneously.
            </p>
            <div className="flex flex-col gap-4 border-t border-primary-dark/20 pt-8">
              <span className="text-3xl font-serif italic">30</span>
              <span className="text-xs font-sans tracking-widest uppercase opacity-70">Exclusive Residences</span>
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-64 flex flex-col md:flex-row-reverse gap-16 md:gap-32 items-center">
          <div className="w-full md:w-1/2 h-[60vh] md:h-[100vh] relative overflow-hidden">
            <Image 
              ref={img2Ref}
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
              alt="Alora Concept Interior"
              fill sizes="100vw"
              className="object-cover scale-[1.3]"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <h3 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
              Spaces that breathe.
            </h3>
            <p className="text-lg md:text-xl font-sans text-secondary-dark leading-relaxed">
              Interior boundaries dissolve into exterior terraces, capturing the Mediterranean light and prevailing breezes. The distinction between indoor and outdoor living becomes imperceptible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
