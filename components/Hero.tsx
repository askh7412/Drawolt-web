'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { ProductVisual } from './ProductVisual';
import {
  Zap,
  ShieldCheck,
  Layers,
  Cog,
  ArrowRight,
  ArrowLeft,
  SlidersHorizontal,
  FileText,
  CheckCircle2,
  Sparkles,
  Building2,
  Disc,
} from 'lucide-react';

interface HeroProps {
  onOpenCatalog: () => void;
  onOpenWarranty: () => void;
  onOpenDealerPortal?: () => void;
}

export function Hero({ onOpenCatalog, onOpenWarranty, onOpenDealerPortal }: HeroProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];
  const isDark = theme === 'dark';

  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      title: lang === 'fa' ? 'موتور براشلس ۳۲ قطبی' : lang === 'ar' ? 'محرك براشلس بـ ٣٢ قطباً' : lang === 'de' ? '32-Pol Brushless Motor' : '32-Pole Brushless Core',
      desc: lang === 'fa' ? 'آهنربای N52 نئودیمیوم با تحمل ۲۰۰ درجه' : lang === 'ar' ? 'مغناطيس N52 لتحمل درجات الحرارة العالية' : lang === 'de' ? 'N52 Neodym-Magnete bis 200°C' : 'N52 Neodymium rare-earth magnets',
      top: '28%',
      left: '42%',
    },
    {
      id: 2,
      title: lang === 'fa' ? 'سندان فولادی Cr-Mo' : lang === 'ar' ? 'محور دوران من فولاذ Cr-Mo' : lang === 'de' ? 'Cr-Mo Stahlamboss' : 'Cr-Mo Steel Anvil',
      desc: lang === 'fa' ? 'درایو ۱/۲ اینچ با رینگ اصطکاکی ضدلقی' : lang === 'ar' ? 'محرك ١/٢ بوصة مع حلقة تثبيت قوية' : lang === 'de' ? '1/2 Zoll Vierkant mit Friktionsring' : '1/2" anvil with friction O-ring',
      top: '36%',
      left: '74%',
    },
    {
      id: 3,
      title: lang === 'fa' ? 'حلقه ۳ تایی LED هالو' : lang === 'ar' ? 'حلقة إضاءة LED ثلاثية' : lang === 'de' ? '3-fach LED Haloring' : 'Tri-Beam LED Halo',
      desc: lang === 'fa' ? 'نور سفید بدون سایه در فضاهای تاریک سوله' : lang === 'ar' ? 'إضاءة محيطية مانعة للظلال' : lang === 'de' ? 'Schattenfreie Ausleuchtung' : 'Zero-shadow illumination',
      top: '48%',
      left: '70%',
    },
    {
      id: 4,
      title: lang === 'fa' ? 'برد هوشمند ESC ۳۲ بیتی' : lang === 'ar' ? 'لوحة تحكم إلكترونية ESC' : lang === 'de' ? 'Intelligente ESC-Steuerung' : '32-Bit Smart ESC',
      desc: lang === 'fa' ? 'الگوریتم توقف خودکار هنگام باز شدن مهره' : lang === 'ar' ? 'نظام التوقف التلقائي لمنع سقوط الصواميل' : lang === 'de' ? 'Auto-Stop Mutternlöser-Sensor' : 'Nut-Buster auto-stop protection',
      top: '55%',
      left: '46%',
    },
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Ambience & Technical Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#9DCB16]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Engineering Badge & New Arrivals Flash */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9DCB16]/15 border border-[#9DCB16]/40 text-[#7ca010] dark:text-[#9DCB16] text-xs font-bold tracking-wide">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{t.hero.badge}</span>
              </div>

              <a
                href="#discs"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#9DCB16] transition-colors"
              >
                <Disc className="w-3.5 h-3.5 text-[#7ca010] dark:text-[#9DCB16]" />
                <span>{lang === 'fa' ? 'ورود محموله جدید صفحات برش و سایش DRAWOLT' : 'New: Cutting & Abrasive Discs'}</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                {t.hero.titlePrimary}{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ca010] via-[#9DCB16] to-lime-400">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.description}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenCatalog}
                className="px-6 py-3.5 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-[#9DCB16]/20 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 group"
              >
                <span>{t.hero.ctaCatalog}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {onOpenDealerPortal && (
                <button
                  onClick={onOpenDealerPortal}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl border-2 border-[#9DCB16] transition-all duration-200 flex items-center gap-2 shadow-md hover:scale-[1.02]"
                >
                  <Building2 className="w-4 h-4 text-[#9DCB16]" />
                  <span>{lang === 'fa' ? 'پنل همکاران و عاملیت‌ها' : 'B2B Dealer Portal'}</span>
                </button>
              )}

              <a
                href="#advisor"
                className="px-5 py-3.5 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-700/70 hover:border-[#9DCB16]/60 transition-colors flex items-center gap-2 shadow-sm"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#7ca010] dark:text-[#9DCB16]" />
                <span>{t.hero.ctaAdvisor}</span>
              </a>

              <button
                onClick={onOpenWarranty}
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-800 dark:text-[#9DCB16] font-bold text-sm rounded-xl border border-slate-300 dark:border-[#9DCB16]/30 hover:border-[#9DCB16] transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#7ca010] dark:text-[#9DCB16]" />
                <span>{t.hero.ctaWarranty}</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>DIN 3121 Standard</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>ISO 9001:2015</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>CE European Conformity</span>
              </span>
            </div>
          </div>

          {/* Right Column: Flagship Tool Interactive Blueprint */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px] rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 dark:from-[#131B2E]/90 dark:to-[#0B0F19]/90 border border-slate-700/60 dark:border-slate-800 shadow-2xl p-6 overflow-hidden backdrop-blur-sm">
              {/* Top Banner inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9DCB16] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
                    FLAGSHIP MODEL: DW-9820-PRO
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#9DCB16] bg-[#9DCB16]/10 px-2 py-0.5 rounded">
                  980 N.m
                </span>
              </div>

              {/* Tool Visual with Hotspots */}
              <div className="relative py-6 my-2 flex items-center justify-center">
                <ProductVisual type="wrench" voltage="20V" torque="980 N.m" model="DW-9820-PRO" />

                {/* Interactive Hotspots */}
                {hotspots.map((h) => (
                  <div
                    key={h.id}
                    className="absolute z-20"
                    style={{ top: h.top, left: h.left }}
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                      onMouseEnter={() => setActiveHotspot(h.id)}
                      className={`relative flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-black transition-transform duration-200 ${
                        activeHotspot === h.id
                          ? 'bg-[#9DCB16] text-slate-950 scale-125 shadow-[0_0_12px_#9DCB16]'
                          : 'bg-slate-900/90 text-[#9DCB16] border border-[#9DCB16] hover:scale-110'
                      }`}
                      aria-label={h.title}
                    >
                      {h.id}
                      <span className="absolute -inset-1 rounded-full border border-[#9DCB16] animate-ping opacity-30" />
                    </button>

                    {/* Hotspot Popover Tooltip */}
                    {activeHotspot === h.id && (
                      <div
                        className={`absolute z-30 bottom-full mb-2 w-52 p-3 bg-slate-950/95 border border-[#9DCB16]/60 rounded-lg shadow-xl text-xs backdrop-blur-md ${
                          isRtl ? 'right-0' : 'left-0'
                        }`}
                      >
                        <p className="font-bold text-[#9DCB16] flex items-center gap-1 mb-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{h.title}</span>
                        </p>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Quick Specs Strip */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-700/40 text-center">
                <div className="bg-slate-800/40 dark:bg-slate-900/60 p-2 rounded-lg">
                  <span className="block text-[10px] text-slate-400 font-mono">TORQUE</span>
                  <span className="text-xs font-black text-[#9DCB16]">980 N.m</span>
                </div>
                <div className="bg-slate-800/40 dark:bg-slate-900/60 p-2 rounded-lg">
                  <span className="block text-[10px] text-slate-400 font-mono">BATTERY</span>
                  <span className="text-xs font-black text-white">20V Max</span>
                </div>
                <div className="bg-slate-800/40 dark:bg-slate-900/60 p-2 rounded-lg">
                  <span className="block text-[10px] text-slate-400 font-mono">MOTOR</span>
                  <span className="text-xs font-black text-white">Brushless</span>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-400">
                  {lang === 'fa' ? 'برای بررسی اجزای مهندسی روی شماره‌ها کلیک کنید' : 'Click numbered points to inspect engineering details'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Live KPI Banner Strip */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* KPI 1 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#101726]/80 border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] transition-colors shadow-md group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-[#9DCB16]/15 text-[#7ca010] dark:text-[#9DCB16] group-hover:bg-[#9DCB16] group-hover:text-slate-950 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {t.hero.kpiTorque}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.kpiTorqueSub}
            </p>
          </div>

          {/* KPI 2 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#101726]/80 border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] transition-colors shadow-md group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-[#9DCB16]/15 text-[#7ca010] dark:text-[#9DCB16] group-hover:bg-[#9DCB16] group-hover:text-slate-950 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-[#7ca010] dark:text-[#9DCB16] tracking-tight">
                {t.hero.kpiWarranty}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.kpiWarrantySub}
            </p>
          </div>

          {/* KPI 3 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#101726]/80 border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] transition-colors shadow-md group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-[#9DCB16]/15 text-[#7ca010] dark:text-[#9DCB16] group-hover:bg-[#9DCB16] group-hover:text-slate-950 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {t.hero.kpiPlatform}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.kpiPlatformSub}
            </p>
          </div>

          {/* KPI 4 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#101726]/80 border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] transition-colors shadow-md group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-[#9DCB16]/15 text-[#7ca010] dark:text-[#9DCB16] group-hover:bg-[#9DCB16] group-hover:text-slate-950 transition-colors">
                <Cog className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {t.hero.kpiGears}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.kpiGearsSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
