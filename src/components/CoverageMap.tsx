"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoverageMap() {
  const { t } = useLanguage();
  
  const cities = t.hero.search.cities;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.coverage.title}</h2>
            <div className="w-24 h-1 bg-gold rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">{t.coverage.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 rtl:space-x-reverse bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gold transition-colors"
                >
                  <MapPin className="w-6 h-6 text-gold" />
                  <span className="font-bold text-dark">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            {/* simple map outline or visual representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md aspect-square bg-gray-50 rounded-full flex items-center justify-center border-4 border-dashed border-gray-200"
            >
              <div className="absolute inset-0 bg-gold/5 rounded-full z-0"></div>
              {/* Representing the map area conceptually with an icon */}
              <div className="w-[60%] h-[60%] opacity-20 text-gold flex items-center justify-center z-10">
                <MapPin className="w-full h-full" />
              </div>
              
              {/* Some decorative pins over the map loosely matching major cities */}
              <div className="absolute top-[30%] left-[45%] bg-gold w-3 h-3 rounded-full shadow-lg z-20 animate-pulse"></div>
              <div className="absolute top-[40%] left-[42%] bg-gold w-3 h-3 rounded-full shadow-lg z-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-[50%] left-[38%] bg-gold w-3 h-3 rounded-full shadow-lg z-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
