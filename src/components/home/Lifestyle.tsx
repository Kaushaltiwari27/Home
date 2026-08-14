'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Lifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: true,
        pin: true
      }
    });

    tl.to('.lifestyle-text', { opacity: 0, duration: 1 })
      .to('.lifestyle-overlay', { backgroundColor: 'rgba(23,23,21,0)', duration: 1 }, '<')
      .fromTo(imagesRef.current, 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
      );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
          alt="Alora Lifestyle"
          fill sizes="100vw"
          className="object-cover"
        />
        <div className="lifestyle-overlay absolute inset-0 bg-primary-dark/60 transition-colors" />
      </div>

      <div className="lifestyle-text absolute inset-0 flex items-center justify-center p-6 text-center text-warm-white z-10">
        <h2 className="text-huge font-serif tracking-tighter leading-none text-balance font-light">
          A place to live — <br />
          <span className="italic opacity-80">to return year after year.</span>
        </h2>
      </div>

      {/* Floating secondary images that reveal on scroll */}
      <div ref={imagesRef} className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {/* Top right image */}
          <div className="absolute top-1/4 right-12 md:right-24 w-[40vw] md:w-[25vw] aspect-[4/3] shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" alt="Wellness" fill className="object-cover" />
          </div>
          {/* Bottom left image */}
          <div className="absolute bottom-1/4 left-12 md:left-24 w-[45vw] md:w-[30vw] aspect-[16/9] shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" alt="Pool" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
