"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
    { num: "02", title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
    { num: "03", title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc }
  ];

  return (
    <section id="vendre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.howItWorks.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gray-100 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white border-4 border-gold rounded-full flex items-center justify-center shadow-lg mb-6 shadow-gold/20">
                <span className="text-2xl font-bold text-gold font-heading">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-gray-500 max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
