'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Space() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = imagesRef.current?.querySelectorAll('.space-img');
    
    if (images) {
      images.forEach((img) => {
        gsap.fromTo(img, 
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
            }
          }
        );

        // Parallax for image content
        const innerImg = img.querySelector('img');
        if (innerImg) {
          gsap.fromTo(innerImg,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 85%',
              }
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-warm-white py-40 md:py-64 px-6 md:px-12 text-primary-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Header */}
        <div>
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            The Space
          </span>
          <h2 className="text-huge font-serif tracking-tighter italic font-light">
            Made for living.
          </h2>
        </div>

        <div ref={imagesRef} className="flex flex-col gap-24 md:gap-48 relative">
          
          {/* Row 1: Living & Terrace */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-2/3 aspect-[16/9] md:aspect-[4/3] relative space-img overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop" 
                alt="Living Room" 
                fill sizes="100vw"
                className="object-cover scale-[1.2]"
              />
              <div className="absolute bottom-0 left-0 bg-warm-white px-6 py-4 z-10">
                <span className="text-meta">Living Areas</span>
              </div>
            </div>
            
            <div className="w-4/5 md:w-1/3 aspect-[3/4] relative space-img self-end md:self-start md:mt-32 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Terrace" 
                fill sizes="100vw"
                className="object-cover scale-[1.2]"
              />
            </div>
          </div>

          {/* Row 2: Text & Kitchen */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] relative space-img overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
                alt="Kitchen" 
                fill sizes="100vw"
                className="object-cover scale-[1.2]"
              />
              <div className="absolute bottom-0 right-0 bg-warm-white px-6 py-4 z-10">
                <span className="text-meta">Kitchen & Dining</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-balance italic mb-8 font-light">
                "We designed spaces that flow effortlessly into one another, maximizing natural light and the connection to the outdoors."
              </p>
            </div>
          </div>

          {/* Row 3: Bedroom & Bathroom */}
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
            <div className="w-full md:w-7/12 aspect-[4/3] md:aspect-[16/9] relative space-img overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop" 
                alt="Bathroom" 
                fill sizes="100vw"
                className="object-cover scale-[1.2]"
              />
            </div>
            
            <div className="w-full md:w-5/12 aspect-[3/4] relative space-img mt-12 md:mt-48 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Bedroom" 
                fill sizes="100vw"
                className="object-cover scale-[1.2]"
              />
              <div className="absolute bottom-0 left-0 bg-warm-white px-6 py-4 z-10">
                <span className="text-meta">Private Quarters</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
