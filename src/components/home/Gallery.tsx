'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/residences';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import gsap from 'gsap';

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeGallery();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  // Handle slide animation on index change
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.gallery-image-active',
        { opacity: 0.5, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentIndex, isOpen]);

  return (
    <section id="gallery" className="w-full bg-primary-dark py-40 md:py-64 px-6 md:px-12 text-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-meta tracking-widest uppercase opacity-50 block mb-6 md:mb-12">
              Gallery
            </span>
            <h2 className="text-huge font-serif tracking-tighter leading-none font-light">
              Visualizing Alora.
            </h2>
          </div>
          <p className="text-sm font-sans tracking-widest uppercase opacity-50">
            {galleryImages.length} Images
          </p>
        </div>

        {/* Masonry/Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 cursor-pointer">
          {galleryImages.slice(0, 6).map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2 aspect-[4/3] md:aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}
              onClick={() => openGallery(i)}
              data-cursor-text="View"
            >
              <Image 
                src={img} 
                alt={`Gallery ${i}`} 
                fill sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-primary-dark flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8 z-10">
            <span className="text-xs font-sans tracking-widest uppercase opacity-70">
              {currentIndex + 1} / {galleryImages.length}
            </span>
            <button 
              onClick={closeGallery}
              className="hover:opacity-70 transition-opacity p-4 -m-4"
            >
              <X size={24} strokeWidth={1} />
            </button>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative flex items-center justify-center p-4 md:p-12">
            <div className="relative w-full h-full max-w-7xl mx-auto gallery-image-active">
              <Image 
                src={galleryImages[currentIndex]} 
                alt={`Gallery ${currentIndex}`} 
                fill sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Invisible Navigation Halves */}
          <div className="absolute inset-0 z-20 flex">
            <div 
              className="flex-1 cursor-none"
              onClick={prevImage}
              data-cursor-text="PREV"
            />
            <div 
              className="flex-1 cursor-none"
              onClick={nextImage}
              data-cursor-text="NEXT"
            />
          </div>
        </div>
      )}
    </section>
  );
}
