'use client';

import React, { useState, useMemo } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { PRODUCTS, Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import {
  Search,
  SlidersHorizontal,
  Plus,
  Check,
  Eye,
  Scale,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export function ProductCatalog({
  onSelectProduct,
  onToggleCompare,
  comparedProductIds,
  onAddToCart,
  cartProductIds,
}: ProductCatalogProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];
  const isDark = theme === 'dark';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => [
    { id: 'all', label: lang === 'fa' ? 'تمام ابزارآلات DRAWOLT' : t.catalog.allCategories },
    { id: 'cordless_power', label: lang === 'fa' ? 'شارژی و برقی' : lang === 'ar' ? 'أدوات لاسلكية وكهربائية' : lang === 'de' ? 'Akku & Elektro' : 'Cordless & Power' },
    { id: 'woodworking', label: lang === 'fa' ? 'نجاری و ام‌دی‌اف' : lang === 'ar' ? 'أدوات النجارة' : lang === 'de' ? 'Holzbearbeitung' : 'Woodworking' },
    { id: 'metal_welding', label: lang === 'fa' ? 'آهنگری و جوشکاری' : lang === 'ar' ? 'حدادة ولحام' : lang === 'de' ? 'Metall & Schweißen' : 'Metal & Welding' },
    { id: 'pumps_generators', label: lang === 'fa' ? 'موتور برق و پمپ آب' : lang === 'ar' ? 'مولدات ومضخات' : lang === 'de' ? 'Generatoren & Pumpen' : 'Generators & Pumps' },
    { id: 'discs_abrasives', label: lang === 'fa' ? 'صفحات برش و سایش (جدید)' : lang === 'ar' ? 'أقراص القطع' : lang === 'de' ? 'Trennscheiben' : 'Cutting Discs (New)' },
    { id: 'pneumatic', label: lang === 'fa' ? 'ابزار بادی و کمپرسور' : lang === 'ar' ? 'أدوات هوائية' : lang === 'de' ? 'Druckluft' : 'Pneumatic & Air' },
    { id: 'hand_tools', label: lang === 'fa' ? 'ابزار دستی و دقیق' : lang === 'ar' ? 'أدوات يدوية' : lang === 'de' ? 'Handwerkzeuge' : 'Hand & Precision' },
  ], [lang, t.catalog.allCategories]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Voltage / Power match
      if (selectedVoltage !== 'all') {
        const v = (product.voltage || '').toLowerCase();
        const p = (product.power || '').toLowerCase();
        if (selectedVoltage === '20V') {
          if (!v.includes('20v')) return false;
        } else if (selectedVoltage === '40V') {
          if (!v.includes('40v')) return false;
        } else if (selectedVoltage === '220V') {
          if (!v.includes('220v') && !p.includes('watt') && !p.includes('وات') && !p.includes('اسب')) return false;
        }
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const nameMatch = product.name[lang].toLowerCase().includes(q);
        const modelMatch = product.model.toLowerCase().includes(q);
        const descMatch = product.description[lang].toLowerCase().includes(q);
        if (!nameMatch && !modelMatch && !descMatch) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, selectedVoltage, searchQuery, lang]);

  return (
    <section id="products" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/15 border border-[#9DCB16]/40 text-[#7ca010] dark:text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.catalog.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            {t.catalog.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10">
          {/* Search and Voltage Filter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white dark:bg-[#101726]/80 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.catalog.searchPlaceholder}
                className={`w-full py-2 bg-slate-50 dark:bg-slate-950/80 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl border border-slate-200 dark:border-slate-700/80 focus:border-[#9DCB16] focus:outline-none transition-colors ${
                  isRtl ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white ${isRtl ? 'left-3' : 'right-3'}`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Voltage / Power Dropdown filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:inline">
                {t.catalog.filterVoltage}
              </span>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/80">
                {['all', '20V', '40V', '220V'].map((volt) => (
                  <button
                    key={volt}
                    onClick={() => setSelectedVoltage(volt)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                      selectedVoltage === volt
                        ? 'bg-[#9DCB16] text-slate-950 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {volt === 'all' ? t.catalog.allVoltages : volt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#9DCB16] text-slate-950 shadow-md shadow-[#9DCB16]/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {lang === 'fa' ? 'هیچ ابزاری با این مشخصات یافت نشد.' : 'No tools matched your criteria.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedVoltage('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#7ca010] dark:text-[#9DCB16] hover:underline font-bold"
            >
              {lang === 'fa' ? 'نمایش تمام محصولات' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProductIds.includes(product.id);
              const isInCart = cartProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white dark:bg-[#101726]/80 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-[#9DCB16] transition-all duration-300 hover:shadow-xl hover:shadow-[#9DCB16]/10 overflow-hidden"
                >
                  {/* Visual Header */}
                  <div className="relative h-56 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-center border-b border-slate-200 dark:border-slate-800/80">
                    <ProductVisual
                      type={product.iconType}
                      voltage={product.voltage}
                      torque={product.torque}
                      model={product.model}
                    />

                    {/* Badge */}
                    <div className="absolute bottom-2.5 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#9DCB16]/20 text-slate-900 dark:text-[#9DCB16] border border-[#9DCB16]/40 backdrop-blur-sm">
                        <Zap className="w-3 h-3 text-[#7ca010] dark:text-[#9DCB16]" />
                        <span>{product.badge[lang]}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Model & Name */}
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                        {product.model}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#7ca010] dark:group-hover:text-[#9DCB16] transition-colors mt-1 line-clamp-2">
                        {product.name[lang]}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {product.description[lang]}
                      </p>
                    </div>

                    {/* Quick Specs Matrix */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 text-[11px] font-mono border border-slate-200 dark:border-slate-800/70">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 block text-[9px]">
                          {product.voltage ? t.catalog.specsQuick.voltage : (lang === 'fa' ? 'توان مصرفی' : 'Power')}
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {product.voltage || product.power?.split(' ')[0] || '220V'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 block text-[9px]">
                          {product.torque ? t.catalog.specsQuick.torque : (lang === 'fa' ? 'سرعت / ظرفیت' : t.catalog.specsQuick.speed)}
                        </span>
                        <span className="font-bold text-[#7ca010] dark:text-[#9DCB16]">
                          {product.torque || product.capacity || product.speed.split('/')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="grid grid-cols-2 gap-2">
                        {/* Details Modal Trigger */}
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white rounded-xl border border-slate-200 dark:border-slate-700/60 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#7ca010] dark:text-[#9DCB16]" />
                          <span>{t.catalog.btnDetails}</span>
                        </button>

                        {/* Compare Toggle Button */}
                        <button
                          onClick={() => onToggleCompare(product)}
                          className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-xl border transition-colors ${
                            isCompared
                              ? 'bg-[#9DCB16]/20 text-[#7ca010] dark:text-[#9DCB16] border-[#9DCB16]'
                              : 'text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:hover:text-slate-200 border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          <Scale className="w-3.5 h-3.5" />
                          <span>{isCompared ? (lang === 'fa' ? 'انتخاب شد' : 'Selected') : t.catalog.btnCompare}</span>
                        </button>
                      </div>

                      {/* Add to Inquiry Cart Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                          isInCart
                            ? 'bg-slate-900 text-[#9DCB16] border border-[#9DCB16]/50'
                            : 'bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 shadow-md shadow-[#9DCB16]/10'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-4 h-4 text-[#9DCB16]" />
                            <span>{t.catalog.inCart}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>{t.catalog.btnAddToInquiry}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
