"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Home, Store, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PropertyTypes() {
  const { t } = useLanguage();

  const types = [
    { icon: Building2, label: t.propertyTypes.apartments, delay: 0 },
    { icon: Home, label: t.propertyTypes.villas, delay: 0.1 },
    { icon: Store, label: t.propertyTypes.commercial, delay: 0.2 },
    { icon: Trees, label: t.propertyTypes.lands, delay: 0.3 },
  ];

  return (
    <section id="louer" className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: type.delay }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-transparent hover:border-gold hover:shadow-xl bg-gray-50 hover:bg-white transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <type.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-dark text-center group-hover:text-gold transition-colors">{type.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
