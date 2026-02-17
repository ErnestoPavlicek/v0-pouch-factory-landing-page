'use client';

import { Award, Users, Zap, Shield } from 'lucide-react';

const stats = [
  { value: '2020', label: 'Founded', icon: Award },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '24/7', label: 'Production Capacity', icon: Zap },
  { value: '100%', label: 'Compliance Rate', icon: Shield },
];

const values = [
  {
    title: 'European Quality Standards',
    description: 'Founded by a Swedish team with deep industry experience, we bring European attention to detail and quality control.',
    icon: '🇸🇪',
  },
  {
    title: 'American Manufacturing Power',
    description: 'Our Tennessee facility combines efficiency, scalability, and regulatory compliance for the U.S. market.',
    icon: '🇺🇸',
  },
  {
    title: 'Unwavering Quality',
    description: 'Every batch undergoes rigorous in-house QA with automated labeling, cleanroom blending, and controlled environments.',
    icon: '✓',
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold">
            WHO WE ARE
          </div>
          <h2 className="text-h1 md:text-display-sm font-display text-navy-900 mb-4">
            Swedish Standards. American Efficiency.
          </h2>
          <p className="text-body-lg text-gray-600">
            Pouch Factory Inc. is a U.S.-based contract manufacturer specializing in pouch products.
            Founded by a Swedish team with deep industry experience, we combine European quality
            standards with American manufacturing power.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow-blue">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card p-8 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-h4 font-display text-navy-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 p-12 rounded-2xl bg-gradient-to-br from-gray-50 to-sky-50 border border-sky-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-h2 font-display text-navy-900 mb-4">
              Our Mission
            </h3>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              To help brands scale faster through reliable production, transparent partnerships,
              and uncompromising quality. We&apos;re committed to building long-term relationships
              with our clients, supporting their growth every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
