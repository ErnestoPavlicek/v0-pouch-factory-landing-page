'use client';

import { useState } from 'react';
import { Package, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'co-packaging',
    icon: Package,
    category: 'PMTA-COMPLIANT BRANDS',
    title: 'Co-Packaging',
    shortDescription: 'For established brands with FDA-approved formulas looking for a dependable U.S. production partner.',
    features: [
      'Batch production',
      'Packaging services',
      'Compliance documentation',
    ],
    fullDescription: 'We handle your batches, packaging, and compliance documentation—seamlessly. Perfect for brands that have their formulas locked in and need reliable, scalable production.',
    gradient: 'from-navy-600 to-sky-600',
    iconBg: 'bg-navy-100',
    iconColor: 'text-navy-600',
  },
  {
    id: 'private-label',
    icon: Sparkles,
    category: 'FULL-SERVICE MANUFACTURING',
    title: 'OEM / Private Label',
    shortDescription: 'From concept to finished can. Ready-to-use base formulas, R&D support, and full-service production.',
    features: [
      'R&D support',
      'Base formulas',
      'Full production',
    ],
    fullDescription: 'From concept to finished product. We provide ready-to-use base formulas, R&D support, and complete production services for Nicotine, Hemp, and Functional pouches.',
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
            OUR SERVICES
          </div>
          <h2 className="text-h1 md:text-display-sm font-display text-navy-900 mb-4">
            Flexible Manufacturing Solutions
          </h2>
          <p className="text-body-lg text-gray-600">
            Whether you need co-packaging for your existing formula or full-service
            private label production, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;

            return (
              <div
                key={service.id}
                className={`card card-hover p-8 transition-all duration-500 ${
                  isExpanded ? 'ring-2 ring-sky-500' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Category */}
                <div className="text-xs font-bold text-sky-600 tracking-wider mb-2">
                  {service.category}
                </div>

                {/* Title */}
                <h3 className="text-h3 font-display text-navy-900 mb-4">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 mb-6">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Expandable Section */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in-up">
                    <p className="text-gray-600 mb-6">
                      {service.fullDescription}
                    </p>
                    <a
                      href="#contact"
                      className="btn btn-primary inline-flex items-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                )}

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                  className="mt-4 text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {isExpanded ? 'Show Less' : 'Learn More'}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-hero shadow-large">
            <h3 className="text-h3 text-white mb-4">
              Not sure which service fits your needs?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Let&apos;s talk about your project. We&apos;ll help you determine the best approach
              for your brand and production goals.
            </p>
            <a
              href="#contact"
              className="btn btn-accent"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
