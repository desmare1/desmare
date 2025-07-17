'use client';

import { useSiteConfig } from '@/hooks/useSiteConfig';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

export default function Collabora() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { contact } = useSiteConfig();

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
    <section className="h-full">
      <Card variant="default" className="h-full">
        <CardHeader className="pb-6">
          <CardTitle className="text-center text-2xl font-bold">
            Vuoi collaborare con noi?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col pt-0">
          <div className="flex flex-grow flex-col items-center justify-center gap-6 text-balance">
            <span className="text-center text-primary">
              Se sei un professionista del settore puoi entrare nella nostra
              rete di collaboratori
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="w-fit">
                <Link href="/collabora">Scopri di più</Link>
              </Button>
              <Button variant="outline" className="w-fit">
                <Link
                  href={`mailto:${contact.email}?subject=Proposta di collaborazione`}
                >
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
