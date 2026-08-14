'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function MagneticButton({ 
  children, 
  className = '',
  strength = 0.5 
}: { 
  children: React.ReactNode, 
  className?: string,
  strength?: number 
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const container = containerRef.current;
    if (!container) return;

    // We only want to pull the FIRST child (the actual button/link)
    const element = container.firstElementChild as HTMLElement;
    if (!element) return;

    const xTo = gsap.quickTo(element, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(element, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = container.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
    </div>
  );
}
