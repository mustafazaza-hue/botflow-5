'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import { setLanguage, getLanguage, translations, initLanguage } from '@/utils/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // تهيئة اللغة المحفوظة
    initLanguage();
    const lang = getLanguage();
    setCurrentLang(lang);
    setIsRTL(translations[lang]?.direction === 'rtl');
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setCurrentLang(lang);
    setIsRTL(translations[lang]?.direction === 'rtl');
    window.location.reload(); // إعادة تحميل الصفحة لتطبيق التغييرات
  };

  const t = (key) => {
    return translations[currentLang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};