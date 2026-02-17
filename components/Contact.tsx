'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
              GET STARTED
            </div>
            <h2 className="text-h1 md:text-display-sm font-display text-navy-900 mb-4">
              Ready to Launch Your Brand?
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Every great product begins with a conversation. Tell us about your brand and
              what you want to build—our team will reach out within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      placeholder=" "
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="floating-input peer"
                    />
                    <label htmlFor="contact-name" className="floating-label peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0">
                      Your name *
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      id="contact-company"
                      placeholder=" "
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="floating-input peer"
                    />
                    <label htmlFor="contact-company" className="floating-label peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0">
                      Your company *
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder=" "
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="floating-input peer"
                    />
                    <label htmlFor="contact-email" className="floating-label peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0">
                      you@company.com *
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      placeholder=" "
                      value={formState.phone}
                      onChange={handleChange}
                      className="floating-input peer"
                    />
                    <label htmlFor="contact-phone" className="floating-label peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0">
                      +1 (555) 000-0000
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    id="contact-message"
                    placeholder=" "
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="floating-input peer resize-none"
                  />
                  <label htmlFor="contact-message" className="floating-label peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0">
                    Tell us about your project... *
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h3 font-display text-navy-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 mb-1">Location</div>
                      <div className="text-gray-600">Tennessee, USA</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 mb-1">Email</div>
                      <a href="mailto:sebastian@pouchfactory.us" className="text-sky-600 hover:underline">
                        sebastian@pouchfactory.us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="card p-6 bg-gradient-to-br from-sky-50 to-navy-50">
                <h4 className="font-semibold text-navy-900 mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">1.</span>
                    We&apos;ll review your project details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">2.</span>
                    Schedule a consultation call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">3.</span>
                    Discuss timeline and pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">4.</span>
                    Begin your production journey
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
