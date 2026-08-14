'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.fromTo('.arch-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    )
    .fromTo('.arch-blueprint',
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
      '-=0.5'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="architecture" ref={containerRef} className="w-full bg-background py-40 md:py-64 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="w-full arch-text">
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            Architecture
          </span>
          <h2 className="text-huge font-serif tracking-tighter leading-none text-primary-dark font-light">
            Contemporary lines.<br />
            <span className="italic">Mediterranean warmth.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-2">
            <span className="text-meta opacity-50">Architect</span>
            <span className="text-3xl font-serif tracking-tighter">Atelier Norte</span>
          </div>
          <p className="mt-12 text-lg md:text-2xl font-sans text-secondary-dark opacity-80 leading-relaxed max-w-md font-light">
            The architectural vision was to create structures that feel both timeless and deeply rooted in their environment. Clean geometry is softened by natural materials and organic landscaping.
          </p>
        </div>

        <div className="w-full arch-blueprint relative aspect-[4/3] border border-primary-dark/10 p-4 md:p-8 flex items-center justify-center bg-warm-white">
          {/* Faux Blueprint aesthetic */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#171715 1px, transparent 1px), linear-gradient(90deg, #171715 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>
          
          <div className="relative w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture Blueprint style"
              fill sizes="100vw"
              className="object-contain mix-blend-luminosity opacity-80"
              style={{ filter: 'contrast(1.2) grayscale(1)' }}
            />
          </div>
          
          <div className="absolute bottom-4 right-4 text-[10px] tracking-widest uppercase font-mono opacity-40">
            FIG. 01 — ELEVATION
          </div>
        </div>
      </div>
    </section>
  );
}
