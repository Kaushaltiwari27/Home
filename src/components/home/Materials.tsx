'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const materials = [
  {
    name: 'Natural stone',
    desc: 'Locally sourced travertine brings warmth and texture to the primary living areas.',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Warm oak',
    desc: 'Custom oak joinery provides a tactile contrast to the stone surfaces.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Textured plaster',
    desc: 'Traditional Mediterranean lime plaster regulates humidity while offering a soft visual depth.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Brushed metal',
    desc: 'Subtle bronze fixtures add quiet refinement to bathrooms and kitchens.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Soft textiles',
    desc: 'Linen and natural fibers complement the architectural materials.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  }
];

export function Materials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray('.material-item');
    
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-background py-40 md:py-64 px-6 md:px-12 text-primary-dark border-t border-primary-dark/10">
      <div className="max-w-7xl mx-auto">
        <span className="text-meta tracking-widest uppercase opacity-50 block mb-16 md:mb-24">
          Materials & Details
        </span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {materials.map((material, i) => {
            // Create an asymmetrical magazine layout
            const colSpan = i === 0 || i === 3 ? 'md:col-span-7' : 'md:col-span-5';
            const offset = i === 1 ? 'md:mt-32' : i === 4 ? 'md:-mt-24' : '';
            
            return (
              <div key={i} className={`material-item flex flex-col gap-6 ${colSpan} ${offset} mb-16 md:mb-0 px-0 md:px-6`}>
                <div className={`relative w-full ${i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'} overflow-hidden`}>
                  <Image 
                    src={material.img} 
                    alt={material.name} 
                    fill sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-end">
                  <h3 className="text-xl md:text-2xl font-serif italic whitespace-nowrap">
                    {material.name}
                  </h3>
                  <p className="text-sm font-sans opacity-70 max-w-xs text-balance md:text-right">
                    {material.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
