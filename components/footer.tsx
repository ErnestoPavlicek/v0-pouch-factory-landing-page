import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Factory', href: '#process' },
  ],
  products: [
    { name: 'Nicotine Pouches', href: '#services' },
    { name: 'Hemp Pouches', href: '#services' },
    { name: 'Functional Pouches', href: '#services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FDA Disclaimer', href: '#' },
  ],
};

export default function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center text-white">
                <svg width="40" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6C4 6 6 12 4 18H20C20 18 18 12 20 6H4Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">POUCH FACTORY</span>
            </div>
            <p className="text-white/70 mb-6 text-sm">
              Born in Sweden. Made in America.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Tennessee, USA</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:sebastian@pouchfactory.us" className="hover:text-sky-400 transition-colors">
                  sebastian@pouchfactory.us
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-white/70 text-sm mb-4">
              Ready to start your project? Get in touch with our team.
            </p>
            <a href="#contact" className="btn btn-accent text-sm">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="divider my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {currentYear} Pouch Factory Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-white/50">
            <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease. Products containing nicotine
            are intended for adult consumers only. Nicotine is an addictive chemical. Keep out of reach of children.
          </p>
        </div>
      </div>
    </footer>
  );
}
