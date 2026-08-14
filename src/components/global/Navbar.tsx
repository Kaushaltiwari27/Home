'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const navLinks = [
  { num: '01', label: 'Home', href: '/' },
  { num: '02', label: 'The Location', href: '/#location' },
  { num: '03', label: 'The Concept', href: '/#concept' },
  { num: '04', label: 'Residences', href: '/#residences' },
  { num: '05', label: 'Amenities', href: '/#amenities' },
  { num: '06', label: 'The Space', href: '/#space' },
  { num: '07', label: 'Architecture', href: '/#architecture' },
  { num: '08', label: 'Gallery', href: '/#gallery' },
  { num: '09', label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power4.inOut',
      });
      
      gsap.fromTo(
        '.nav-item-inner',
        { y: 150, skewY: 5 },
        { y: 0, skewY: 0, duration: 1, stagger: 0.05, ease: 'power4.out', delay: 0.4 }
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleMouseEnter = (index: number) => {
    gsap.to('.nav-item-link', {
      opacity: (i) => i === index ? 1 : 0.2,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to('.nav-item-link', {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-warm-white pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="flex-1">
            <Link href="/" className="text-xl md:text-2xl font-serif tracking-widest uppercase" data-cursor-text="HOME">
              Alora
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center text-meta opacity-70">
            <span className="mx-2">Marina Alta</span>
            <span>—</span>
            <span className="mx-2">Costa Blanca</span>
          </div>

          <div className="flex-1 flex justify-end">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-meta hover:opacity-70 transition-opacity uppercase flex items-center gap-2"
              data-cursor-text="OPEN"
            >
              <span className="opacity-50">00</span> MENU
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[60] bg-warm-white text-primary-dark flex flex-col justify-between p-6 md:p-12 overflow-hidden"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
      >
        <div className="flex justify-between items-center w-full z-10 relative">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl md:text-2xl font-serif tracking-widest uppercase">
            Alora
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-meta hover:opacity-70 transition-opacity uppercase flex items-center gap-2"
            data-cursor-text="CLOSE"
          >
            <span className="opacity-50">00</span> CLOSE
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center mt-20 md:mt-0 relative z-10 w-full px-4 md:px-24">
          <nav ref={linksRef} className="flex flex-col gap-0 w-full">
            {navLinks.map((link, index) => (
              <div key={link.num} className="overflow-hidden">
                <div className="nav-item-inner transform translate-y-[150%] origin-top-left">
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="nav-item-link flex items-baseline gap-4 md:gap-8 group block w-max py-2 md:py-0"
                    data-cursor-text="VIEW"
                  >
                    <span className="text-xs md:text-sm font-sans tracking-widest uppercase opacity-40 font-light mb-2 md:mb-6">
                      {link.num}
                    </span>
                    <span className="text-huge font-serif uppercase tracking-tighter hover:italic transition-all duration-300 font-light">
                      {link.label}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex justify-between items-end w-full z-10 relative text-meta opacity-50">
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span>Contact Us</span>
              <a href="mailto:info@alora.com" className="hover:opacity-100 transition-opacity lowercase font-sans">info@alora.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <span>Location</span>
              <span className="font-sans">Marina Alta, Spain</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Facebook</a>
          </div>
        </div>
      </div>
    </>
  );
}
