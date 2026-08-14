'use client';

export function LocationMap() {
  return (
    <section className="w-full bg-warm-white py-40 md:py-64 px-6 md:px-12 text-primary-dark border-t border-primary-dark/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="w-full">
          <span className="text-meta tracking-widest uppercase opacity-50 block mb-6 md:mb-12">
            Where to find us
          </span>
          <h2 className="text-huge font-serif tracking-tighter leading-none italic mb-12 font-light">
            Marina Alta,<br />
            Costa Blanca.
          </h2>
          
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex justify-between border-b border-primary-dark/20 pb-4">
              <span className="text-sm font-sans tracking-widest uppercase">Airport</span>
              <span className="text-sm font-serif italic">45 min</span>
            </div>
            <div className="flex justify-between border-b border-primary-dark/20 pb-4">
              <span className="text-sm font-sans tracking-widest uppercase">Marina</span>
              <span className="text-sm font-serif italic">12 min</span>
            </div>
            <div className="flex justify-between border-b border-primary-dark/20 pb-4">
              <span className="text-sm font-sans tracking-widest uppercase">Golf</span>
              <span className="text-sm font-serif italic">10 min</span>
            </div>
            <div className="flex justify-between border-b border-primary-dark/20 pb-4">
              <span className="text-sm font-sans tracking-widest uppercase">Old Town</span>
              <span className="text-sm font-serif italic">15 min</span>
            </div>
            <div className="flex justify-between border-b border-primary-dark/20 pb-4">
              <span className="text-sm font-sans tracking-widest uppercase">Beach</span>
              <span className="text-sm font-serif italic">7 min</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-primary-dark/5 p-8 md:p-12 flex items-center justify-center relative aspect-[4/3] border border-primary-dark/10">
          {/* Abstract stylized map representation */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#171715 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
          </div>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
             <div className="w-4 h-4 bg-primary-dark rounded-full mb-4 animate-pulse" />
             <span className="text-xs font-sans tracking-widest uppercase">Alora Residences</span>
             <span className="text-xs font-serif italic opacity-70 mt-2">Marina Alta, Spain</span>
          </div>
        </div>
      </div>
    </section>
  );
}
