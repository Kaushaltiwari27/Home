'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // quickTo is much more performant and smooth for cursor tracking
    const xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"});
    const yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find closest interactive element
      const interactive = target.closest('a, button, [data-cursor-text]');
      
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute('data-cursor-text');
        setHoverText(text || '');
        
        gsap.to(cursor, {
          scale: text ? 5 : 3,
          backgroundColor: text ? '#171715' : 'transparent',
          borderWidth: text ? '0px' : '1px',
          duration: 0.4,
          ease: "expo.out"
        });
      } else {
        setIsHovering(false);
        setHoverText('');
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          borderWidth: '1px',
          duration: 0.4,
          ease: "expo.out"
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100] hidden lg:flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 border border-primary-dark mix-blend-difference text-warm-white"
      style={{ willChange: 'transform, width, height, border-width, background-color', borderColor: 'rgba(255,255,255,0.8)' }}
    >
      {isHovering && hoverText && (
        <span className="text-[3px] font-sans uppercase tracking-widest absolute text-warm-white">
          {hoverText}
        </span>
      )}
    </div>
  );
}
