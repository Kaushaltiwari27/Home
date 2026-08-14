'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    const dummyObj = { val: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
      }
    });

    tl.to(dummyObj, {
      val: 100,
      duration: 2,
      ease: 'power3.inOut',
      onUpdate: () => {
        setProgress(Math.floor(dummyObj.val));
      }
    })
    .to('.loader-text', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 0.2
    })
    .to(containerRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 1.5,
      ease: 'power4.inOut'
    }, '-=0.4');

  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#171715] text-warm-white flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="loader-text flex flex-col items-center gap-8 overflow-hidden">
        <span className="text-xl md:text-2xl font-serif tracking-widest uppercase">
          Alora
        </span>
        <div className="text-huge font-serif tracking-tighter font-light leading-none flex items-baseline">
          {progress}<span className="text-2xl md:text-4xl opacity-50 ml-2">%</span>
        </div>
      </div>
    </div>
  );
}
