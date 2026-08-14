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

    const sections = gsap.utils.toArray('.amenity-section');
    
    sections.forEach((section: any) => {
      const image = section.querySelector('.amenity-image');
      const text = section.querySelector('.amenity-text');

      gsap.fromTo(image, 
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );

      gsap.to(image, {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.fromTo(text,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="amenities" ref={containerRef} className="w-full bg-background py-40 md:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-48 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            The Amenities
          </span>
          <h2 className="text-huge font-serif tracking-tighter leading-none text-primary-dark font-light">
            Everything you need.<br />
            <span className="italic">Nothing you don't.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-32 md:gap-64">
        {amenitiesData.map((amenity, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={amenity.id} className="amenity-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 px-6 md:px-12 max-w-7xl mx-auto items-center w-full">
              <div className={`w-full relative overflow-hidden group cursor-pointer aspect-[4/5] md:aspect-[3/4] ${isEven ? 'order-1' : 'order-1 md:order-2'}`} data-cursor-text="View">
                <Image 
                  src={amenity.image}
                  alt={amenity.title}
                  fill sizes="100vw"
                  className="amenity-image object-cover scale-[1.2] origin-center"
                />
              </div>
              <div className={`amenity-text flex flex-col gap-8 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                <span className="text-meta opacity-50">
                  0{index + 1}
                </span>
                <h3 className="text-5xl md:text-7xl font-serif tracking-tighter text-primary-dark font-light">
                  {amenity.title}
                </h3>
                <p className="text-lg md:text-2xl font-sans text-secondary-dark opacity-80 leading-relaxed max-w-md font-light">
                  {amenity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
