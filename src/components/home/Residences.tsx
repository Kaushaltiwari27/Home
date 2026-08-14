'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { residencesData } from '@/data/residences';
import { ArrowRight } from 'lucide-react';

export function Residences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = window.innerWidth;
    
    // Calculate the total scroll amount needed
    const xAmount = scrollWidth - clientWidth;

    if (xAmount > 0) {
      const tween = gsap.to(scrollRef.current, {
        x: -xAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${xAmount}`,
          pin: true,
          scrub: 1, // Smooth scrub
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set('.residences-progress', { scaleX: self.progress });
          }
        }
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <section id="residences" ref={containerRef} className="w-full bg-[#111110] text-warm-white overflow-hidden py-24 md:py-0 md:h-[100svh] relative">
      <div className="md:h-full flex flex-col justify-center relative">
        
        {/* Intro */}
        <div className="px-6 md:px-12 mb-16 md:mb-0 md:absolute md:top-24 md:left-0 z-10 w-full max-w-7xl mx-auto md:pointer-events-none">
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            The Residences
          </span>
          <p className="text-xl md:text-4xl font-serif max-w-2xl text-balance italic font-light opacity-90">
            "Twenty-four private residences, each designed around light, space and outdoor living."
          </p>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef} 
          className="flex flex-col md:flex-row gap-8 md:gap-12 px-6 md:px-12 md:h-[60vh] md:w-max md:items-center mt-8 md:mt-16"
        >
          {residencesData.map((residence, index) => (
            <Link 
              key={residence.id} 
              href={`/residences/${residence.id}`}
              className="group relative w-full md:w-[45vw] h-[60vh] md:h-full flex-shrink-0 block overflow-hidden cursor-pointer"
              data-cursor-text="Explore"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={residence.heroImage}
                  alt={residence.name}
                  fill sizes="100vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#111110]/40 transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 transition-opacity duration-500 group-hover:opacity-0">
                <div className="flex justify-between items-start">
                  <span className="text-meta border border-warm-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    0{index + 1}
                  </span>
                  <div className="text-right text-meta flex flex-col gap-1 opacity-80 backdrop-blur-sm bg-[#111110]/20 p-4 rounded-lg border border-warm-white/10">
                    <span>{residence.bedrooms} Bedrooms</span>
                    <span>{residence.area}</span>
                    <span>{residence.terrace}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl md:text-6xl font-serif tracking-tighter">
                    {residence.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
          {/* Add a spacer at the end for desktop to allow scrolling past the last item comfortably */}
          <div className="hidden md:block w-[10vw] flex-shrink-0 h-full" />
        </div>

        {/* Progress Bar Container */}
        <div className="hidden md:block absolute bottom-12 left-12 right-12 z-20">
          <div className="w-full h-[1px] bg-warm-white/20 relative">
            <div className="residences-progress h-[1px] bg-warm-white absolute top-0 left-0 w-full origin-left scale-x-0" />
          </div>
        </div>

      </div>
    </section>
  );
}
