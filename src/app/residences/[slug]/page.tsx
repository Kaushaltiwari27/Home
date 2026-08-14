import { residencesData } from '@/data/residences';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return residencesData.map((res) => ({
    slug: res.id,
  }));
}

export default function ResidencePage({ params }: { params: { slug: string } }) {
  const residence = residencesData.find((r) => r.id === params.slug);

  if (!residence) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-background text-primary-dark">
      
      {/* Hero Section */}
      <section className="relative w-full h-[80svh] overflow-hidden">
        <Image 
          src={residence.heroImage}
          alt={residence.name}
          fill sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/30 mix-blend-multiply" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-warm-white pb-12">
          <span className="text-[10px] tracking-widest uppercase opacity-80 mb-4 block">
            Alora Residences
          </span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tight uppercase leading-none mb-8">
            {residence.name}
          </h1>
          
          <div className="flex flex-wrap gap-4 md:gap-12 text-xs md:text-sm font-sans tracking-widest uppercase opacity-90 border-t border-warm-white/30 pt-6 max-w-4xl">
            <span>{residence.bedrooms} Bedrooms</span>
            <span>{residence.area} Interior</span>
            <span>{residence.terrace}</span>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="flex-1">
          <p className="text-xl md:text-3xl font-serif leading-relaxed text-balance italic">
            "{residence.description}"
          </p>
          
          <div className="mt-16 flex flex-col md:flex-row gap-4">
            <Link 
              href="/#contact"
              className="bg-primary-dark text-warm-white px-8 py-4 rounded-full text-xs font-sans tracking-widest uppercase hover:bg-primary-dark/80 transition-colors text-center"
            >
              Book a Call
            </Link>
            <button className="border border-primary-dark/20 px-8 py-4 rounded-full text-xs font-sans tracking-widest uppercase hover:border-primary-dark transition-colors text-center">
              Request Floor Plan
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xs font-sans tracking-widest uppercase opacity-50 mb-8">Features & Specifications</h3>
          <ul className="flex flex-col gap-4">
            {residence.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4 border-b border-primary-dark/10 pb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-lg font-serif">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-warm-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-sans tracking-widest uppercase opacity-50 mb-12">Residence Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residence.gallery.map((img, i) => (
              <div key={i} className={`relative w-full ${i === 0 ? 'h-[60vh]' : 'h-[40vh] md:h-[60vh]'} overflow-hidden rounded-xl`}>
                <Image 
                  src={img}
                  alt={`${residence.name} view ${i + 1}`}
                  fill sizes="100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Placeholder */}
      <section className="py-32 px-6 md:px-12 border-t border-primary-dark/10 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl md:text-5xl font-serif italic mb-6">Explore the layout</h3>
        <p className="text-sm font-sans tracking-widest uppercase opacity-50 mb-12">Floor plans available upon request</p>
        <div className="w-full max-w-4xl h-[40vh] md:h-[60vh] border border-primary-dark/20 flex flex-col items-center justify-center bg-warm-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#171715 1px, transparent 1px), linear-gradient(90deg, #171715 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           <span className="text-xs font-sans tracking-widest uppercase opacity-40 z-10">Restricted Access</span>
        </div>
      </section>

    </div>
  );
}
