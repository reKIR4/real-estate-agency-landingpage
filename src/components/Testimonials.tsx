"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: "Karim El Fassi",
      role: language === 'fr' ? "Acheteur - Rabat" : "مشتري - الرباط",
      content: language === 'fr' 
        ? "Grâce à MubawabLuxe, j'ai pu trouver l'appartement idéal à Hay Riad. L'équipe a été très professionnelle et m'a accompagné de A à Z."
        : "بفضل مبوب لوكس، تمكنت من العثور على الشقة المثالية في حي الرياض. كان الفريق محترفًا للغاية ورافقني من البداية إلى النهاية.",
      rating: 5
    },
    {
      name: "Nadia Benali",
      role: language === 'fr' ? "Vendeuse - Casablanca" : "بائعة - الدار البيضاء",
      content: language === 'fr'
        ? "Estimation juste et vente rapide de ma villa à Anfa. Je recommande vivement pour leur sérieux et leur réseau d'acheteurs qualifiés."
        : "تقييم عادل وبيع سريع لفيلتي في أنفا. أوصي بهم بشدة لجديتهم وشبكتهم من المشترين المؤهلين.",
      rating: 5
    },
    {
      name: "Mohamed Tazi",
      role: language === 'fr' ? "Investisseur - Marrakech" : "مستثمر - مراكش",
      content: language === 'fr'
        ? "Excellent service ! Ils m'ont déniché un bien exceptionnel à Guéliz avec un très bon rendement locatif. Une agence de confiance."
        : "خدمة ممتازة! لقد وجدوا لي عقارًا استثنائيًا في جليز بعائد إيجاري جيد جدًا. وكالة جديرة بالثقة.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.testimonials.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 rtl:right-auto rtl:left-6" />
              <div className="flex text-gold mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{review.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 rtl:mr-0 rtl:ml-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
