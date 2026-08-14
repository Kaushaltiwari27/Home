'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic entrance
    const tl = gsap.timeline();

    tl.to('.hero-image-container', {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 2,
      ease: 'power4.inOut',
      delay: 0.2
    })
    .fromTo('.hero-text-wrap', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: 'power3.out' },
      '-=1.2'
    );

    // Parallax on scroll
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.hero-image', {
      yPercent: 15,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.hero-text-wrap', {
      y: -150,
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom 40%',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="hero-section relative w-full h-[100svh] overflow-hidden bg-background">
      <div 
        className="hero-image-container absolute inset-0 w-full h-full z-0 overflow-hidden"
        style={{ clipPath: 'inset(40% 40% 40% 40%)' }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Alora Residences Villa"
          fill sizes="100vw"
          className="hero-image object-cover object-[50%_30%] scale-[1.1]"
          priority
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6 md:p-12 z-10 text-warm-white pb-24 md:pb-12">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden">
            <h1 className="hero-text-wrap text-5xl md:text-8xl lg:text-[9rem] font-serif tracking-tighter leading-none uppercase font-light">
              Alora<br />Residences
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 overflow-hidden">
            <p className="hero-text-wrap text-xl md:text-3xl font-serif max-w-md text-balance italic font-light">
              "A place to return to."
            </p>
            <div className="hero-text-wrap text-meta flex flex-col gap-1 text-right opacity-80">
              <span>Marina Alta</span>
              <span>Costa Blanca</span>
            </div>
          </div>
        </div>

        <div className="hero-text-wrap absolute bottom-6 md:bottom-12 right-6 md:right-12 flex flex-col items-center gap-4">
          <span className="text-meta writing-vertical-rl rotate-180">
            Scroll to explore
          </span>
          <div className="w-[1px] h-12 bg-warm-white origin-top" />
        </div>
      </div>
    </section>
  );
}
