"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">{t.contact.title}</h2>
              <div className="w-24 h-1 bg-gold rounded-full mb-10"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone className="w-6 h-6 text-gold group-hover:text-dark" />
                  </div>
                  <span className="text-xl font-medium">+212 6 00 00 00 00</span>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Mail className="w-6 h-6 text-gold group-hover:text-dark" />
                  </div>
                  <span className="text-xl font-medium">{t.contact.email}</span>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                    <MapPin className="w-6 h-6 text-gold group-hover:text-dark" />
                  </div>
                  <span className="text-xl font-medium">{t.contact.address}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-8 md:p-10 rounded-2xl shadow-xl text-center">
              <div className="w-20 h-20 bg-[#128C7E]/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-[#128C7E]" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{t.contact.whatsappCTA}</h3>
              <p className="text-gray-500 mb-8">
                {useLanguage().language === 'fr' 
                  ? "Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions." 
                  : "فريقنا متاح على واتساب للإجابة على جميع أسئلتكم."}
              </p>
              
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-4 rounded-xl flex items-center justify-center transition-all shadow-lg text-lg font-bold"
              >
                <MessageCircle className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2" />
                {t.contact.whatsappCTA}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
