'use client';

import { useState } from 'react';
import Collabora from './Collabora';
import ContactInfo from './ContactInfo';
import CTAContatti from './CTAContatti';
import InviaMessaggio from './InviaMessaggio';
import QuoteRequestModal from './QuoteRequestModal';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      // Reset form state
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);

      // Here you would typically submit to your actual backend
      console.log({ name, email, message });

      // Show success message
      alert('Messaggio inviato con successo!');
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="section-title">Contatti</h1>
          <p className="section-subtitle text-balance">
            Interessato in uno dei <span>servizi</span>? <br />{' '}
            <span>Contattaci</span> per qualsiasi <span>informazione</span> o
            per richiedere un <span>preventivo</span>.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="flex h-full flex-col gap-8">
            <ContactInfo />
            <Collabora />
          </div>
          <div className="h-full">
            <InviaMessaggio />
          </div>
        </div>
        <CTAContatti />

        <QuoteRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
