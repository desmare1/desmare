'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function CTAContatti() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-section md:p-16"
        >
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="section-title mb-6 text-white">
              Pronti a trasformare il tuo progetto?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Contattaci oggi per una consulenza gratuita e scopri come
              De.Sma.Re può offrirti soluzioni sicure, efficienti e sostenibili
              per le tue esigenze di demolizione e recupero materiali.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-white px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/90"
              >
                Richiedi un preventivo
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center">
              {/* <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <div className="w-full h-full bg-white/30"></div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
