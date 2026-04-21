"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Target, Scale, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.whyUs.expTitle,
      description: t.whyUs.expDesc
    },
    {
      icon: Target,
      title: t.whyUs.salesTitle,
      description: t.whyUs.salesDesc
    },
    {
      icon: Scale,
      title: t.whyUs.legalTitle,
      description: t.whyUs.legalDesc
    },
    {
      icon: Calculator,
      title: t.whyUs.estimateTitle,
      description: t.whyUs.estimateDesc
    }
  ];

  return (
    <section className="py-20 bg-dark text-white relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-gray-400 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
