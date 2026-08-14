'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MagneticButton } from '@/components/global/MagneticButton';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="w-full relative min-h-[100svh] flex items-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Alora Contact Background"
          fill sizes="100vw"
          className="object-cover opacity-40 scale-[1.1]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-40 md:py-64 flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="flex-1 text-warm-white">
          <span className="text-meta opacity-50 block mb-6 md:mb-12">
            Contact
          </span>
          <h2 className="text-huge font-serif tracking-tighter leading-none mb-8 font-light">
            Book a<br />call.
          </h2>
          <p className="text-lg md:text-xl font-sans opacity-80 leading-relaxed max-w-sm font-light mt-12">
            Leave your details and our team will contact you within 24 hours to schedule a private viewing or answer any questions.
          </p>
        </div>

        <div className="flex-1 w-full max-w-lg bg-warm-white text-primary-dark p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
              <h3 className="text-3xl md:text-5xl font-serif tracking-tighter mb-4 font-light">Thank you.</h3>
              <p className="text-sm font-sans opacity-80 font-light">
                Your request has been received. Our team will contact you shortly.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-12 text-meta hover:opacity-70 transition-opacity uppercase border-b border-primary-dark/30 pb-1"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="relative pt-6">
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-primary-dark/20 pb-2 outline-none text-sm font-sans placeholder-transparent focus:border-transparent transition-colors z-10 relative"
                />
                <label htmlFor="name" className="absolute left-0 top-6 text-meta opacity-50 transition-all duration-300 peer-focus:-top-2 peer-focus:text-[9px] peer-focus:opacity-100 peer-focus:text-primary-dark peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:opacity-100">
                  Name
                </label>
                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-dark scale-x-0 origin-left transition-transform duration-500 ease-out peer-focus:scale-x-100" />
              </div>

              <div className="relative pt-6">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-primary-dark/20 pb-2 outline-none text-sm font-sans placeholder-transparent focus:border-transparent transition-colors z-10 relative"
                />
                <label htmlFor="email" className="absolute left-0 top-6 text-meta opacity-50 transition-all duration-300 peer-focus:-top-2 peer-focus:text-[9px] peer-focus:opacity-100 peer-focus:text-primary-dark peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:opacity-100">
                  Email
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-dark scale-x-0 origin-left transition-transform duration-500 ease-out peer-focus:scale-x-100" />
              </div>

              <div className="relative pt-6">
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-primary-dark/20 pb-2 outline-none text-sm font-sans placeholder-transparent focus:border-transparent transition-colors z-10 relative"
                />
                <label htmlFor="phone" className="absolute left-0 top-6 text-meta opacity-50 transition-all duration-300 peer-focus:-top-2 peer-focus:text-[9px] peer-focus:opacity-100 peer-focus:text-primary-dark peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:opacity-100">
                  Phone
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-dark scale-x-0 origin-left transition-transform duration-500 ease-out peer-focus:scale-x-100" />
              </div>

              <div className="relative pt-6">
                <textarea 
                  id="message" 
                  rows={2} 
                  required 
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-primary-dark/20 pb-2 outline-none text-sm font-sans placeholder-transparent focus:border-transparent transition-colors z-10 relative resize-none"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-6 text-meta opacity-50 transition-all duration-300 peer-focus:-top-2 peer-focus:text-[9px] peer-focus:opacity-100 peer-focus:text-primary-dark peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:opacity-100">
                  Message
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-dark scale-x-0 origin-left transition-transform duration-500 ease-out peer-focus:scale-x-100" />
              </div>

              <div className="flex items-start gap-4 mt-4">
                <input type="checkbox" id="privacy" required className="accent-primary-dark mt-1" />
                <label htmlFor="privacy" className="text-[10px] font-sans opacity-70 cursor-pointer font-light leading-relaxed">
                  I accept the Privacy Policy and terms of data processing.
                </label>
              </div>

              <div className="mt-4 w-full">
                <MagneticButton className="w-full">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary-dark text-warm-white py-5 rounded-full text-meta tracking-widest uppercase transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </MagneticButton>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
