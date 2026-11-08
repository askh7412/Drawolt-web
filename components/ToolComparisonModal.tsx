'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import { X, Trash2, Check, Plus, ShieldCheck } from 'lucide-react';

interface ToolComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export function ToolComparisonModal({
  products,
  onClose,
  onRemoveProduct,
  onAddToCart,
  cartProductIds,
}: ToolComparisonModalProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  if (products.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-black text-white">
              {lang === 'fa' ? 'جدول مقایسه همزمان مشخصات فنی ابزارآلات دراوولت' : 'DRAWOLT Side-by-Side Equipment Comparison'}
            </span>
            <span className="text-xs font-mono font-bold text-[#9DCB16] bg-[#9DCB16]/10 px-2 py-0.5 rounded">
              {products.length} {lang === 'fa' ? 'دستگاه' : 'Tools'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Matrix Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-xs text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-3 text-slate-400 font-mono text-start w-36">
                  {lang === 'fa' ? 'پارامتر فنی' : 'Parameter'}
                </th>
                {products.map((p) => (
                  <th key={p.id} className="p-3 text-start min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#9DCB16]">{p.model}</span>
                      <button
                        onClick={() => onRemoveProduct(p.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="h-28 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center mb-2">
                      <ProductVisual type={p.iconType} voltage={p.voltage} torque={p.torque} model={p.model} />
                    </div>
                    <span className="block font-bold text-white text-xs line-clamp-1">{p.name[lang]}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{t.catalog.specsQuick.voltage}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-[#9DCB16] font-bold">{p.voltage}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{t.catalog.specsQuick.torque}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-white font-bold">{p.torque || '-'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{t.catalog.specsQuick.speed}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-slate-300">{p.speed}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{t.catalog.specsQuick.weight}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-slate-300">{p.weight}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{lang === 'fa' ? 'سه‌نظام / درایو' : 'Chuck / Anvil'}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-slate-300">{p.chuck || '-'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{lang === 'fa' ? 'نوع موتور' : 'Motor Type'}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-[#9DCB16] font-sans font-bold">Brushless Core-Drive</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{lang === 'fa' ? 'پوشش گارانتی' : 'Warranty'}</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-[#9DCB16] font-sans font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'fa' ? '۱۸ ماه طلایی تعویض' : '18M Golden'}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-sans font-bold">{lang === 'fa' ? 'عملیات' : 'Action'}</td>
                {products.map((p) => {
                  const inCart = cartProductIds.includes(p.id);
                  return (
                    <td key={p.id} className="p-3">
                      <button
                        onClick={() => onAddToCart(p)}
                        className={`w-full py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                          inCart
                            ? 'bg-slate-800 text-[#9DCB16] border border-[#9DCB16]/50'
                            : 'bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950'
                        }`}
                      >
                        {inCart ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>{inCart ? t.catalog.inCart : t.catalog.btnAddToInquiry}</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
