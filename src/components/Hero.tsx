"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFilter } from '../context/FilterContext';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();
  const { city, setCity, type, setType, budget, setBudget, setIsFiltering } = useFilter();

  const handleFilterSearch = () => {
    setIsFiltering(true);
    const element = document.getElementById('acheter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/60 z-10"></div>
        {/* Unsplash realism: Moroccan interior or exterior */}
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Morocco Real Estate" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 drop-shadow-lg"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-4 md:p-6 rounded-2xl shadow-xl max-w-5xl flex flex-col md:flex-row gap-4 md:gap-2 items-center"
        >
          {/* City Dropdown */}
          <div className="flex-1 w-full flex border md:border-none border-gray-200 rounded-lg p-2 md:p-0">
            <div className="flex items-center pl-3 pr-2 border-r md:border-r-gray-200 border-transparent rtl:border-r-transparent rtl:border-l rtl:pl-2 rtl:pr-3">
              <MapPin className="text-gold w-5 h-5" />
            </div>
            <select 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-gray-700 py-2 cursor-pointer outline-none"
            >
              <option value="" disabled>{t.hero.search.city}</option>
              {t.hero.search.cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* Type Dropdown */}
          <div className="flex-1 w-full flex border md:border-none border-gray-200 rounded-lg p-2 md:p-0">
            <div className="flex items-center pl-3 pr-2 border-r md:border-r-gray-200 border-transparent rtl:border-r-transparent rtl:border-l rtl:pl-2 rtl:pr-3">
              <Home className="text-gold w-5 h-5" />
            </div>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-gray-700 py-2 cursor-pointer outline-none"
            >
              <option value="" disabled>{t.hero.search.propertyType}</option>
              {t.hero.search.types.map(pt => <option key={pt} value={pt}>{pt}</option>)}
            </select>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* Budget Dropdown */}
          <div className="flex-1 w-full flex border md:border-none border-gray-200 rounded-lg p-2 md:p-0">
            <div className="flex items-center pl-3 pr-2 border-transparent rtl:pl-2 rtl:pr-3">
              <DollarSign className="text-gold w-5 h-5" />
            </div>
            <select 
              value={budget} 
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-gray-700 py-2 cursor-pointer outline-none"
            >
              <option value="" disabled>{t.hero.search.budget}</option>
              {t.hero.search.budgets.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleFilterSearch}
            className="w-full md:w-auto bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all shadow-md shadow-gold/20 font-medium whitespace-nowrap mt-2 md:mt-0"
          >
            <Search className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
            {t.hero.search.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
