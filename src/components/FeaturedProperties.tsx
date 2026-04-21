"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFilter } from '../context/FilterContext';
import { Bed, MapPin, Maximize, MessageCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProperties() {
  const { t } = useLanguage();
  const { city, type, budget, isFiltering, setIsFiltering, setCity, setType, setBudget } = useFilter();

  const resetFilters = () => {
    setCity('');
    setType('');
    setBudget('');
    setIsFiltering(false);
  };

  let displayedProperties = [...t.propertiesList];

  if (isFiltering) {
    if (city) {
      displayedProperties = displayedProperties.filter(p => p.location === city);
    }
    if (type) {
      displayedProperties = displayedProperties.filter(p => p.type === type);
    }
    if (budget) {
      displayedProperties = displayedProperties.filter(p => {
        const price = parseInt(p.price.replace(/\D/g, ''));
        if (budget === t.hero.search.budgets[0]) return price < 1000000;
        if (budget === t.hero.search.budgets[1]) return price >= 1000000 && price <= 3000000;
        if (budget === t.hero.search.budgets[2]) return price > 3000000;
        return true;
      });
    }
  }

  return (
    <section id="acheter" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            {isFiltering ? "Résultats de Recherche" : t.featured.title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4"></div>
          
          {isFiltering && (
            <button 
              onClick={resetFilters}
              className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors bg-red-50 px-4 py-2 rounded-full font-medium"
            >
              <XCircle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {displayedProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Aucun bien trouvé</h3>
            <p className="text-gray-500 mb-6">Essayez de modifier vos critères de recherche.</p>
            <button onClick={resetFilters} className="bg-gold text-white px-6 py-3 rounded-xl font-medium hover:bg-gold-hover transition">
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedProperties.map((property: any, index: number) => (
                <motion.div 
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
                >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 text-sm font-bold rounded-full shadow-md">
                  {property.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                  {property.location}
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">{property.title}</h3>
                
                <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl mb-6">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center text-gray-600">
                      <Bed className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-gold" />
                      <span>{property.bedrooms} {t.featured.bedrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Maximize className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-gold" />
                    <span>{property.surface}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`https://wa.me/212600000000?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20le%20bien%20:%20${property.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#128C7E] hover:bg-[#075E54] text-white py-3 rounded-xl flex items-center justify-center transition-colors shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t.nav.whatsappBtn}
                  </a>
                </div>
              </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
