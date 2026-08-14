'use client';

import Link from 'next/link';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-warm-white py-12 md:py-24 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        
        {/* Brand & Location */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-4xl md:text-6xl font-serif tracking-widest uppercase inline-block">
            Alora
          </Link>
          <div className="text-xs md:text-sm font-sans tracking-widest uppercase opacity-70 flex flex-col gap-1">
            <span>Marina Alta</span>
            <span>Costa Blanca</span>
            <span>Spain</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-xs md:text-sm tracking-widest uppercase">
          <div className="flex flex-col gap-4">
            <h4 className="opacity-40 mb-2">Social</h4>
            <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="opacity-40 mb-2">Legal</h4>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <button 
              onClick={scrollToTop}
              className="text-left md:text-right hover:opacity-70 transition-opacity"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-32 pt-8 border-t border-warm-white/20 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest uppercase opacity-50">
        <p>© 2027 Alora Developments</p>
        <p className="mt-4 md:mt-0">A place to return to.</p>
      </div>
    </footer>
  );
}
