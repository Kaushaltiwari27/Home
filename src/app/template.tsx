'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Template({ children }: { children: React.ReactNode }) {
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transitionRef.current) {
      gsap.to(transitionRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.1, // Slight delay to ensure content is ready
      });
    }
  }, []);

  return (
    <>
      <div 
        ref={transitionRef} 
        className="fixed inset-0 z-[70] bg-warm-white flex items-center justify-center origin-top pointer-events-none"
      >
        <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase text-primary-dark opacity-20">
          Alora
        </h1>
      </div>
      {children}
    </>
  );
}
