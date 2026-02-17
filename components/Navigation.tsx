'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="container-custom">
          <div
            className={`relative flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${isScrolled
              ? 'bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm'
              : 'bg-transparent'
              }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              {/* Logo SVG Icon */}
              <div className="flex items-center justify-center text-black">
                <svg width="40" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6C4 6 6 12 4 18H20C20 18 18 12 20 6H4Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase transition-colors text-black">
                POUCH FACTORY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold tracking-wide uppercase transition-colors text-gray-900 hover:text-amber-600"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-gray-900 transition-colors shadow-lg"
              >
                START PROJECT
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-black hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-black tracking-tight"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-center mt-4"
              >
                START PROJECT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
