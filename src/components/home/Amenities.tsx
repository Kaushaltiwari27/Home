'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { amenitiesData } from '@/data/residences';

export function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".amenities-wrapper",
        start: "top top",
        end: `+=${amenitiesData.length * 100}%`,
        pin: true,
        scrub: 1,
      }
    });

    amenitiesData.forEach((_, i) => {
      if (i === 0) return;
      
      // Image reveal from bottom
      tl.fromTo(`.amenity-img-${i}`, 
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' },
        `+=${i - 1}` // sequence timing
      );

      // Text fade in
      tl.fromTo(`.amenity-text-${i}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        `<0.2`
      );
      
      // Previous text fade out
      tl.to(`.amenity-text-${i - 1}`, {
        y: -50, opacity: 0, duration: 0.5, ease: 'power2.in'
      }, `<0`);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="amenities" className="w-full bg-[#111110] text-warm-white">
      
      {/* Intro block */}
      <div className="w-full py-32 md:py-48 px-6 md:px-12 flex flex-col items-center text-center">
        <span className="text-meta opacity-50 block mb-6 md:mb-12">
          The Amenities
        </span>
        <h2 className="text-huge font-serif tracking-tighter leading-none font-light text-balance">
          Everything you need.<br />
          <span className="italic">Nothing you don't.</span>
        </h2>
      </div>

      {/* Pinned Sequence */}
      <div ref={containerRef} className="amenities-wrapper relative w-full h-[100svh] overflow-hidden">
        {amenitiesData.map((amenity, index) => (
          <div 
            key={amenity.id} 
            className={`absolute inset-0 w-full h-full amenity-slide-${index}`}
            style={{ zIndex: index }}
          >
            {/* Image Full Screen */}
            <div className={`absolute inset-0 w-full h-full amenity-img-${index}`} style={index === 0 ? {} : { clipPath: 'inset(100% 0% 0% 0%)' }}>
              <Image 
                src={amenity.image}
                alt={amenity.title}
                fill sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[#111110]/40 mix-blend-multiply" />
            </div>

            {/* Text Overlay */}
            <div 
              className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-end pb-24 md:pb-12 z-10 amenity-text-${index}`}
              style={index === 0 ? {} : { opacity: 0, transform: 'translateY(50px)' }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <span className="text-meta opacity-50">0{index + 1} / 0{amenitiesData.length}</span>
                  <h3 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none font-light">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-xl md:text-2xl font-sans opacity-80 max-w-md font-light">
                  {amenity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
