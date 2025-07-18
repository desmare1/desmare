'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function HeroComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add effect to prevent scrolling when component mounts
  useEffect(() => {
    // Save current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <section className="relative flex h-screen flex-col justify-between">
      <div className="container-custom relative z-10 flex-grow py-8 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {' '}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-construction-text sm:text-5xl lg:text-6xl">
              De.Sma.Re
            </h1>

            <h2 className="mb-6 mt-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl">
              Soluzioni professionali per{' '}
              <span className="text-primary">demolizioni</span> e{' '}
              <span className="text-primary">recupero materiali</span>
            </h2>
            <p className="mb-8 max-w-lg text-xl text-text-secondary">
              Affidati a De.Sma.Re per servizi di demolizione, smaltimento e
              recupero rifiuti. La nostra esperienza garantisce sicurezza,
              efficienza e rispetto dell'ambiente.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                Richiedi un preventivo
              </button>
              <button className="btn border border-primary/20 px-8 py-3 text-lg transition-colors hover:bg-primary/5">
                +39 123 456 7890
              </button>
            </div>

            {/* <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <div className="w-full h-full bg-primary/20"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">Valutazione media 4.9/5 dai nostri clienti</p>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl sm:h-64">
                  <Image
                    src="/images/img/demolition-excavator-action.jpg"
                    alt="Servizi di demolizione"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl sm:h-48">
                  <Image
                    src="/images/img/metal-scrap-after-industrial-demolition.jpg"
                    alt="Recupero materiali"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl sm:h-48">
                  <Image
                    src="/images/img/waste-loading-into-dumpster-truck.jpg"
                    alt="Smaltimento rifiuti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl sm:h-64">
                  <Image
                    src="/images/img/construction-site-drone-view-earthmoving.jpg"
                    alt="Attrezzature specializzate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="btn btn-primary align-center flex items-center justify-center text-balance rounded-none py-8 text-center text-4xl font-bold">
        <h3>Sito in costruzione! De.Sma.Re sarà presto online</h3>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
