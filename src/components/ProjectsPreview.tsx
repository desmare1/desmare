'use client';

import Image from 'next/image';

// Progetto in evidenza
const featuredProject = {
  title: 'Strip-out nel centro di Terni',
  description:
    'Strip-out nel centro della città di Terni per conto del cliente Superconti.',
  image: '/img/stripout-terni.jpeg',
  category: 'strip-out',
  client: 'Superconti',
  stats: [
    { label: 'Cliente', value: 'Superconti' },
    { label: 'Durata', value: '2 mesi' },
    { label: 'Dove', value: 'Terni' },
  ],
};

export default function ProjectsPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="section-title">L'ultimo progetto De.Sma.Re.</h2>
        </div>

        {/* Project Card */}
        <div className="card relative overflow-hidden transition-all duration-300 hover:shadow-section">
          {/* Grid Layout */}
          <div className="md:grid md:grid-cols-5 md:gap-0">
            {/* Image Section */}
            <div className="group relative h-72 md:col-span-2 md:h-auto">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Category Badge */}
              <div className="absolute left-4 top-4 z-10 md:left-6 md:top-6">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white shadow-button md:px-4 md:py-2">
                  {featuredProject.category === 'demolizione'
                    ? 'Demolizione'
                    : featuredProject.category === 'strip-out'
                      ? 'Strip-out'
                      : featuredProject.category === 'smaltimento'
                        ? 'Smaltimento'
                        : 'Recupero'}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:col-span-3 md:p-8">
              {/* Title Section */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-bold leading-tight text-text md:text-2xl">
                  {featuredProject.title}
                </h3>
                <div className="h-1 w-12 rounded-full bg-primary"></div>
              </div>

              {/* Description */}
              <p className="mb-6 text-balance leading-relaxed text-text-secondary">
                {featuredProject.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {featuredProject.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-ui-border bg-ui-section-bg p-3 text-center transition-all duration-300 hover:shadow-card"
                  >
                    <div className="text-base font-bold text-text md:text-lg">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
