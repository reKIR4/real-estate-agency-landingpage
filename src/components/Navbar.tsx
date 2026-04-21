"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const navLinks = [
    { label: t.nav.acheter, href: '#acheter' },
    { label: t.nav.louer, href: '#louer' },
    { label: t.nav.vendre, href: '#vendre' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-heading font-bold text-dark">
              Mubawab<span className="text-gold">Luxe</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="text-gray-600 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-gold transition"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{t.nav.switchTo}</span>
            </button>
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noreferrer"
              className="bg-gold hover:bg-gold-hover text-white px-5 py-2.5 rounded-full flex items-center transition-transform hover:scale-105 shadow-md shadow-gold/20 font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              {t.nav.whatsappBtn}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-gray-600 font-medium w-full"
              >
                <Globe className="w-5 h-5" />
                <span>{t.nav.switchTo}</span>
              </button>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gold text-white px-4 py-3 rounded-md flex justify-center items-center shadow-md font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t.nav.whatsappBtn}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
