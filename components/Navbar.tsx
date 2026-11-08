'use client';

import React, { useState, useEffect } from 'react';
import { useTheme, Language } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { BrandLogo } from './BrandLogo';
import {
  Sun,
  Moon,
  Globe,
  FileText,
  ShoppingCart,
  Menu,
  X,
  ShieldCheck,
  Cpu,
  BatteryCharging,
  Wrench,
  Building2,
  SlidersHorizontal,
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCatalog: () => void;
  onOpenComparison: () => void;
  comparisonCount: number;
  onOpenDealerPortal?: () => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onOpenCatalog,
  onOpenComparison,
  comparisonCount,
  onOpenDealerPortal,
}: NavbarProps) {
  const { theme, toggleTheme, lang, setLang, dir, isRtl } = useTheme();
  const t = translations[lang];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; name: string; native: string; flag: string }[] = [
    { code: 'fa', name: 'Persian', native: 'فارسی', flag: '🇮🇷' },
    { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇦🇪' },
    { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  ];

  const navLinks = [
    { href: '#products', label: t.nav.products, icon: Wrench },
    {
      href: '#discs',
      label: lang === 'fa' ? 'صفحات برش و سایش (جدید)' : 'Abrasive Discs',
      icon: Cpu,
    },
    { href: '#brushless', label: t.nav.brushlessTech, icon: Cpu },
    { href: '#battery', label: t.nav.batteryEcosystem, icon: BatteryCharging },
    { href: '#advisor', label: t.nav.smartAdvisor, icon: SlidersHorizontal },
    {
      href: '#dealermap',
      label: lang === 'fa' ? 'نقشه عاملیت‌ها' : 'Dealer Map',
      icon: Building2,
    },
    { href: '#warranty', label: t.nav.warranty, icon: ShieldCheck },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 dark:bg-[#0B0F19]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 dark:border-slate-800/60 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Standard Height */}
          <a href="#" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DCB16] rounded-md">
            <BrandLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#9DCB16] transition-colors rounded-md hover:bg-slate-800/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Switches */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Compare Bar Button (if items selected) */}
            {comparisonCount > 0 && (
              <button
                onClick={onOpenComparison}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-slate-800 text-[#9DCB16] border border-[#9DCB16]/40 rounded-md hover:bg-[#9DCB16]/10 transition-colors"
              >
                <span>{t.catalog.btnCompare}</span>
                <span className="w-4 h-4 rounded-full bg-[#9DCB16] text-slate-950 flex items-center justify-center text-[10px] font-black">
                  {comparisonCount}
                </span>
              </button>
            )}

            {/* B2B Dealer Portal Trigger */}
            {onOpenDealerPortal && (
              <button
                onClick={onOpenDealerPortal}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-[#9DCB16] bg-slate-900/90 hover:bg-slate-800 border border-[#9DCB16]/60 rounded-md transition-all shadow-sm hover:shadow-[#9DCB16]/15 group"
                title={lang === 'fa' ? 'ورود به پنل اختصاصی عاملیت و همکاران DRAWOLT' : 'B2B Dealer Price Portal'}
              >
                <Building2 className="w-3.5 h-3.5 text-[#9DCB16] group-hover:scale-110 transition-transform" />
                <span>{lang === 'fa' ? 'پنل همکاران' : 'B2B Portal'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9DCB16] animate-pulse" />
              </button>
            )}

            {/* Catalog Modal Trigger */}
            <button
              onClick={onOpenCatalog}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
              title={t.nav.catalog}
            >
              <FileText className="w-3.5 h-3.5 text-[#9DCB16]" />
              <span>{t.nav.catalog}</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#9DCB16]" />
                <span className="uppercase font-bold tracking-wider">{lang}</span>
              </button>

              {langDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 w-36 py-1 bg-slate-900 border border-slate-700 rounded-md shadow-xl z-50 ${
                    isRtl ? 'left-0' : 'right-0'
                  }`}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left ${
                        lang === l.code ? 'bg-[#9DCB16]/15 text-[#9DCB16] font-bold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.native}</span>
                      </span>
                      {lang === l.code && <span className="text-[10px] text-[#9DCB16]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle (Day / Night) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-300 hover:text-[#9DCB16] bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
              aria-label={t.nav.toggleTheme}
              title={t.nav.toggleTheme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#9DCB16]" /> : <Moon className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Inquiry Cart Icon Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-bold rounded-md transition-transform duration-200 hover:scale-105 shadow-md flex items-center gap-1.5"
              aria-label="Price Inquiry Basket"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-black bg-slate-950 text-[#9DCB16] rounded-full border border-[#9DCB16]">
                  {cartCount}
                </span>
              )}
              <span className="hidden xl:inline text-xs font-black">{t.nav.inquiryCart}</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800/70 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl space-y-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-[#9DCB16] hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#9DCB16]" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            {onOpenDealerPortal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDealerPortal();
                }}
                className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-slate-800 border border-[#9DCB16]/50 rounded-xl text-xs font-bold text-[#9DCB16] hover:bg-slate-800 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#9DCB16]" />
                  <span>{lang === 'fa' ? 'پنل همکاران و ثبت قیمت روز' : 'B2B Dealer Price Portal'}</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] bg-[#9DCB16] text-slate-950 font-black rounded">
                  PORTAL
                </span>
              </button>
            )}

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg"
              >
                <FileText className="w-4 h-4 text-[#9DCB16]" />
                <span>{t.nav.catalog}</span>
              </button>

              {comparisonCount > 0 && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenComparison();
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#9DCB16] bg-slate-800 border border-[#9DCB16]/30 rounded-lg"
                >
                  <span>{t.catalog.btnCompare} ({comparisonCount})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
