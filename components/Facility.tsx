'use client';

import { Shield, CheckCircle, MapPin, Award } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'FDA-Graded Facility',
    description: 'Registered and compliant',
  },
  {
    icon: CheckCircle,
    title: 'GMP Compliant',
    description: 'Certified processes',
  },
  {
    icon: MapPin,
    title: 'Made in Tennessee, USA',
    description: 'Domestic manufacturing',
  },
  {
    icon: Award,
    title: 'Full In-House QA',
    description: 'End-to-end quality control',
  },
];

const capabilities = [
  {
    title: 'Multi-line custom pouch production',
    description: 'Nicotine, Hemp, Functional',
    icon: '🔧',
  },
  {
    title: 'European designed labeling and packaging automation',
    description: 'Precision and efficiency',
    icon: '📦',
  },
  {
    title: 'Cleanroom blending and controlled moisture environment',
    description: 'Optimal product quality',
    icon: '🌡️',
  },
  {
    title: 'Partnership with leading industry suppliers',
    description: 'Premium materials',
    icon: '🤝',
  },
];

export default function Facility() {
  return (
    <section id="process" className="section bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold">
            OUR FACILITY
          </div>
          <h2 className="text-h1 md:text-display-sm font-display mb-4">
            Built for Consistency
          </h2>
          <p className="text-body-lg text-white/80">
            Our state-of-the-art Tennessee facility is engineered for precision and scalability.
            With multiple pouch machines, automated labeling systems, and rigorous in-house QA,
            we deliver consistent quality from pilot batches to full production runs.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="card-glass p-6 text-center hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-sky-400" />
                </div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-white/70">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="text-4xl shrink-0">{capability.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{capability.title}</h3>
                <p className="text-sm text-white/70">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
