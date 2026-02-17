'use client';

import { useRef } from 'react';
import { ArrowRight, Award, CheckCircle2, MapPin, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black pt-20">
      {/* Subtle Grain/Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

      {/* Minimal Background Blob - Very Subtle */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -right-[10%] w-[800px] h-[800px] bg-gray-50 rounded-full blur-[120px] -z-10"
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center flex flex-col items-center"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants} className="mb-10 inline-block">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Made in USA &bull; FDA Graded</span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] mb-8 text-black"
          >
            PREMIUM <br />
            <span className="text-gray-400">POUCH</span> FACTORY.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            White label manufacturing born in Sweden, perfected in Tennessee.
            <span className="text-black block mt-2">Speed, Compliance, and Quality under one roof.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-black text-white text-lg font-bold tracking-wide rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                START YOUR PROJECT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </a>
            <a
              href="#services"
              className="text-black font-semibold border-b-2 border-transparent hover:border-black transition-all pb-1 text-lg"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-gray-100 pt-12"
          >
            {[
              { title: 'FDA REGISTERED', sub: 'Fully Compliant Facility', icon: Shield },
              { title: 'GMP CERTIFIED', sub: 'Rigorous Quality Control', icon: CheckCircle2 },
              { title: 'DOMESTIC', sub: 'Made in Tennessee, USA', icon: MapPin },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <item.icon className="w-8 h-8 text-gray-300 mb-2" />
                <h3 className="font-bold text-lg tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{item.sub}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
