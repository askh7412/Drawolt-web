'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { PRODUCTS, Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import {
  Disc,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Flame,
  Plus,
  Check,
} from 'lucide-react';

interface CuttingDiscsSpotlightProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export function CuttingDiscsSpotlight({
  onSelectProduct,
  onAddToCart,
  cartProductIds,
}: CuttingDiscsSpotlightProps) {
  const { theme, lang, isRtl } = useTheme();
  const isDark = theme === 'dark';

  const discProducts = PRODUCTS.filter((p) => p.category === 'discs_abrasives');
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="discs" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-100 to-white dark:from-[#0B0F19] dark:to-[#101726] border-y border-slate-200 dark:border-slate-800">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#9DCB16]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with "Coming Soon" Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9DCB16]/15 border border-[#9DCB16]/40 text-[#7ca010] dark:text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>
              {lang === 'fa'
                ? 'پروژه جدید DRAWOLT • کیفیت فوق‌العاده استثنایی'
                : 'SPECIAL NEW ARRIVALS • DRAWOLT EXTREME QUALITY'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? (
              <>
                نسل جدید صفحات پروفیل‌بر و سنگبری{' '}
                <span className="text-[#9DCB16] drop-shadow-sm">DRAWOLT</span>
              </>
            ) : (
              <>
                Next-Gen Metal Cut-Off & Abrasive Wheels{' '}
                <span className="text-[#9DCB16]">DRAWOLT</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {lang === 'fa'
              ? 'به‌زودی کامل‌ترین سبد صفحات برش و سایش فوق‌سنگین به کشور می‌رسد. فرمولاسیون اختصاصی سردبر با طول عمر ۳ برابری، تاروپود دوبل فایبرگلاس و استاندارد ایمنی EN 12413 اروپا.'
              : 'Arriving soon at nationwide authorized dealers: premium cold-cut abrasive wheels engineered for 3x longer tool life and zero burr finish.'}
          </p>
        </div>

        {/* 3 Core Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-xl bg-white dark:bg-[#121A2D] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="w-5 h-5 text-[#9DCB16]" />
              <span>{lang === 'fa' ? 'توری دوبل ضدترکیدن EN 12413' : 'Dual Anti-Shatter Mesh'}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {lang === 'fa'
                ? 'دو لایه شبکه فایبرگلاس با تراکم تاروپود بالا که ایمنی ۱۰۰٪ اپراتور را تا سرعت ۸۰ متر بر ثانیه تضمین می‌کند.'
                : 'Double reinforced fiberglass mesh engineered to withstand severe rotational forces at 80 m/s.'}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#121A2D] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Flame className="w-5 h-5 text-[#9DCB16]" />
              <span>{lang === 'fa' ? 'فناوری برش سرد (Cold-Cut)' : 'Cold-Cut Metallurgy'}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {lang === 'fa'
                ? 'فرمولاسیون رزین نانو بدون تغییر رنگ فلز، بدون بوی سوختگی و با کمترین میزان پلیسه برای استیل و آهن.'
                : 'Advanced phenolic resin bond preventing steel thermal blueing with clean mirror cuts.'}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#121A2D] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Clock className="w-5 h-5 text-[#9DCB16]" />
              <span>{lang === 'fa' ? 'طول عمر ۳ برابری در شیفت سنگین' : '3x Operational Lifetime'}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {lang === 'fa'
                ? 'دانه‌بندی کریستالی زیرکونیوم و سیلیکون کارباید سیاه C30 با بیشترین مقاومت در برابر سایش سریع.'
                : 'Crystalline abrasives engineered to deliver continuous sharp cutting edges under severe heavy load.'}
            </p>
          </div>
        </div>

        {/* Spotlight Disc Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {discProducts.map((p) => {
            const inCart = cartProductIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="group relative bg-white dark:bg-[#101726] border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-[#9DCB16] text-slate-950 rounded">
                      {p.model}
                    </span>
                    <span className="text-[10px] font-bold text-[#7ca010] dark:text-[#9DCB16] bg-[#9DCB16]/10 px-2 py-0.5 rounded">
                      {p.badge[lang]}
                    </span>
                  </div>

                  {/* Vector Disc Visual */}
                  <div className="h-44 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80 flex items-center justify-center mb-4">
                    <ProductVisual type="disc" voltage="EN 12413" torque="80 m/s" model={p.model} />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#8bb413] transition-colors">
                    {p.name[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {p.description[lang]}
                  </p>

                  {/* Key specs badge */}
                  <div className="mt-4 p-2.5 bg-slate-50 dark:bg-slate-950/70 rounded-lg border border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                    <span className="block text-[10px] text-slate-400">{lang === 'fa' ? 'مشخصات ابعادی:' : 'Dimensions:'}</span>
                    <span className="font-bold">{p.capacity}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(p)}
                    className="flex-1 py-2 px-3 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-center"
                  >
                    {lang === 'fa' ? 'مشخصات کامل' : 'Full Specs'}
                  </button>

                  <button
                    onClick={() => onAddToCart(p)}
                    className={`py-2 px-3.5 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                      inCart
                        ? 'bg-slate-800 text-[#9DCB16] border border-[#9DCB16]/50'
                        : 'bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 shadow-md'
                    }`}
                  >
                    {inCart ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{inCart ? (lang === 'fa' ? 'در سبد' : 'In Cart') : (lang === 'fa' ? 'پیش‌ثبت استعلام' : 'Pre-Inquire')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
