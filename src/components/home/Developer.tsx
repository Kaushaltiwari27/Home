'use client';

export function Developer() {
  return (
    <section className="w-full bg-background py-32 px-6 md:px-12 text-primary-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16 md:gap-32 border-b border-primary-dark/10 pb-24">
        
        <div className="flex-1">
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            The Developer
          </span>
          <h2 className="text-huge font-serif tracking-tighter leading-none font-light mb-8">
            Alora<br />Developments
          </h2>
          <p className="text-2xl md:text-3xl font-serif italic text-balance font-light opacity-80 max-w-sm mt-8">
            "Creating places designed to remain relevant beyond the moment."
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col gap-8 md:max-w-md">
          <div className="flex justify-between border-b border-primary-dark/10 pb-4">
            <span className="text-meta opacity-50">Developer</span>
            <span className="text-meta">Alora Developments</span>
          </div>
          <div className="flex justify-between border-b border-primary-dark/10 pb-4">
            <span className="text-meta opacity-50">Architect</span>
            <span className="text-meta">Atelier Norte</span>
          </div>
          <div className="flex justify-between border-b border-primary-dark/10 pb-4">
            <span className="text-meta opacity-50">Sales & Marketing</span>
            <span className="text-meta">Vista Property Group</span>
          </div>
          <div className="flex justify-between border-b border-primary-dark/10 pb-4">
            <span className="text-meta opacity-50">Completion</span>
            <span className="text-meta">Q3 2027</span>
          </div>
        </div>

      </div>
    </section>
  );
}
