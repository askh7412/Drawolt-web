'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'fa' | 'en' | 'ar' | 'de';
export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  isRtl: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('drawolt_theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    }
    return 'light';
  });

  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('drawolt_lang') as Language | null;
      if (savedLang && ['fa', 'en', 'ar', 'de'].includes(savedLang)) return savedLang;
    }
    return 'fa';
  });

  const dir: 'rtl' | 'ltr' = lang === 'fa' || lang === 'ar' ? 'rtl' : 'ltr';
  const isRtl = dir === 'rtl';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('drawolt_theme', theme);
    localStorage.setItem('drawolt_lang', lang);
  }, [theme, lang, dir]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, lang, setLang, dir, isRtl }}>
      <div className={theme === 'dark' ? 'dark' : 'light'} dir={dir}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
