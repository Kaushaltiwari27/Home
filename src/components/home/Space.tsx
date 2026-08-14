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
    <section id="space" ref={containerRef} className="w-full bg-warm-white py-40 md:py-64 px-6 md:px-12 text-primary-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Header */}
        <div>
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            The Space
          </span>
          <h2 className="text-huge font-serif tracking-tighter italic font-light leading-none">
            Made for<br />living.
          </h2>
        </div>

        <div ref={imagesRef} className="relative w-full h-[150vh] md:h-[200vh] mt-12 md:mt-32">
          
          {/* Image 1: Main Living (Large) */}
          <div className="absolute top-0 left-0 w-[90%] md:w-[60%] aspect-[4/3] space-img overflow-hidden z-10" data-cursor-text="VIEW">
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
          
          {/* Image 2: Terrace (Tall, overlapping) */}
          <div className="absolute top-[15%] md:top-[20%] right-0 w-[60%] md:w-[35%] aspect-[3/5] space-img overflow-hidden z-20" data-cursor-text="VIEW">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Terrace" 
              fill sizes="100vw"
              className="object-cover scale-[1.2]"
            />
          </div>

          {/* Text block floating */}
          <div className="absolute top-[45%] md:top-[40%] left-[5%] md:left-[10%] w-[80%] md:w-[40%] z-30 bg-warm-white/80 backdrop-blur-sm p-6 md:p-12">
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-balance italic font-light">
              "We designed spaces that flow effortlessly into one another, maximizing natural light and the connection to the outdoors."
            </p>
          </div>

          {/* Image 3: Kitchen (Square-ish, bottom left) */}
          <div className="absolute top-[65%] md:top-[60%] left-[10%] md:left-[5%] w-[70%] md:w-[45%] aspect-square space-img overflow-hidden z-10" data-cursor-text="VIEW">
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

          {/* Image 4: Bathroom (Landscape, bottom right) */}
          <div className="absolute top-[85%] md:top-[75%] right-[5%] md:right-0 w-[85%] md:w-[55%] aspect-[16/9] space-img overflow-hidden z-20" data-cursor-text="VIEW">
            <Image 
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop" 
              alt="Bathroom" 
              fill sizes="100vw"
              className="object-cover scale-[1.2]"
            />
            <div className="absolute top-0 left-0 bg-warm-white px-6 py-4 z-10">
              <span className="text-meta">Private Quarters</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
