'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import {
  X,
  CheckCircle2,
  Package,
  Wrench,
  Shield,
  FileText,
  ShoppingCart,
  Plus,
  Check,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export function ProductDetailModal({ product, onClose, onAddToCart, isInCart }: ProductDetailModalProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'specs' | 'box' | 'features'>('specs');

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-mono font-bold bg-[#9DCB16] text-slate-950 rounded">
              {product.model}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              DRAWOLT Heavy-Duty Series
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Top Preview Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 h-56 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
              <ProductVisual
                type={product.iconType}
                voltage={product.voltage}
                torque={product.torque}
                model={product.model}
              />
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {product.name[lang]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description[lang]}
              </p>

              {/* Warranty and Standards Callout */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-[#9DCB16]/10 text-[#9DCB16] border border-[#9DCB16]/30 rounded-md">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? '۱۸ ماه گارانتی طلایی تعویض' : '18-Month Golden Replacement Warranty'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  <span>DIN 3121 Industrial</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'specs'
                  ? 'bg-[#9DCB16] text-slate-950'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              {lang === 'fa' ? 'مشخصات کامل فنی' : lang === 'ar' ? 'المواصفات الفنية' : lang === 'de' ? 'Technische Daten' : 'Technical Specifications'}
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'features'
                  ? 'bg-[#9DCB16] text-slate-950'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              {lang === 'fa' ? 'ویژگی‌های مهندسی' : lang === 'ar' ? 'المزايا الهندسية' : lang === 'de' ? 'Konstruktionsmerkmale' : 'Engineering Features'}
            </button>
            <button
              onClick={() => setActiveTab('box')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'box'
                  ? 'bg-[#9DCB16] text-slate-950'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              {lang === 'fa' ? 'اقلام داخل جعبه' : lang === 'ar' ? 'محتويات الصندوق' : lang === 'de' ? 'Lieferumfang' : 'Included in Box'}
            </button>
          </div>

          {/* Tab 1: Specifications Table */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'مدل تجاری' : 'Model:'}</span>
                <span className="font-mono font-bold text-white">{product.model}</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'ولتاژ کاری' : 'Voltage:'}</span>
                <span className="font-mono font-bold text-[#9DCB16]">{product.voltage}</span>
              </div>
              {product.power && (
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-slate-400">{lang === 'fa' ? 'توان موتور' : 'Motor Power:'}</span>
                  <span className="font-mono font-bold text-[#9DCB16]">{product.power}</span>
                </div>
              )}
              {product.torque && (
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-slate-400">{lang === 'fa' ? 'حداکثر گشتاور' : 'Max Torque:'}</span>
                  <span className="font-mono font-bold text-[#9DCB16]">{product.torque}</span>
                </div>
              )}
              {product.capacity && (
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-slate-400">{lang === 'fa' ? 'ظرفیت کاری / برش' : 'Capacity:'}</span>
                  <span className="font-mono font-bold text-white">{product.capacity}</span>
                </div>
              )}
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'سرعت دوران' : 'No-Load Speed:'}</span>
                <span className="font-mono font-bold text-white">{product.speed}</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'وزن خالص' : 'Net Weight:'}</span>
                <span className="font-mono font-bold text-white">{product.weight}</span>
              </div>
              {product.chuck && (
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-slate-400">{lang === 'fa' ? 'نوع سه‌نظام / درایو' : 'Chuck / Anvil:'}</span>
                  <span className="font-mono font-bold text-white">{product.chuck}</span>
                </div>
              )}
              {product.impactEnergy && (
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-slate-400">{lang === 'fa' ? 'انرژی هر ضربه' : 'Impact Energy:'}</span>
                  <span className="font-mono font-bold text-[#9DCB16]">{product.impactEnergy}</span>
                </div>
              )}
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'نوع موتور' : 'Motor Type:'}</span>
                <span className="font-mono font-bold text-white">Digital Brushless Core-Drive</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">{lang === 'fa' ? 'پلتفرم باتری' : 'Platform:'}</span>
                <span className="font-mono font-bold text-[#9DCB16]">DRA-Power Unified</span>
              </div>
            </div>
          )}

          {/* Tab 2: Key Features */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              {product.keyFeatures[lang].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#9DCB16] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Box Contents */}
          {activeTab === 'box' && (
            <div className="space-y-3">
              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#9DCB16]">
                  <Package className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'بسته‌بندی رسمی و قطعات استاندارد شرکتی:' : 'Official OEM Packaging Checklist:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.boxContents[lang].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9DCB16]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 border-t border-slate-800 bg-slate-950/70">
          <button
            onClick={() => {
              alert(
                lang === 'fa'
                  ? 'بروشور فنی و دیتاشیت مهندسی این مدل به همراه استاندارد DIN دانلود گردید.'
                  : 'Technical datasheet and DIN specifications downloaded.'
              );
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
          >
            <FileText className="w-4 h-4 text-[#9DCB16]" />
            <span>{lang === 'fa' ? 'دریافت بروشور فنی (PDF)' : 'Download Datasheet'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
            >
              {lang === 'fa' ? 'بستن' : 'Close'}
            </button>

            <button
              onClick={() => {
                onAddToCart(product);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-lg transition-colors ${
                isInCart
                  ? 'bg-slate-800 text-[#9DCB16] border border-[#9DCB16]'
                  : 'bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 shadow-md'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
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
    </div>
  );
}
