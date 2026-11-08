'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { X, Download, FileText, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  if (!isOpen) return null;

  const handleDownload = () => {
    alert(
      lang === 'fa'
        ? 'کاتالوگ جامع صنعتی ۲۰۲۶ دراوولت با فرمت PDF به همراه لیست قیمت و استاندارد DIN آماده دانلود گردید.'
        : 'Comprehensive 2026 DRAWOLT Industrial Catalog (PDF) downloaded.'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#9DCB16]" />
            <h2 className="text-base font-black text-white">
              {lang === 'fa' ? 'کاتالوگ جامع ابزارآلات صنعتی دراوولت ۲۰۲۶' : 'DRAWOLT Industrial Equipment Catalog 2026'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Catalog Cover Mockup */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#101C35] border-2 border-[#9DCB16]/40 text-center space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9DCB16]/10 rounded-full blur-2xl" />

            <span className="inline-block px-3 py-1 rounded-full bg-[#9DCB16]/20 border border-[#9DCB16]/40 text-[#9DCB16] text-xs font-mono font-bold tracking-widest uppercase">
              ANNUAL COMPREHENSIVE EDITION
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              DRAWOLT <span className="text-[#9DCB16]">INDUSTRIAL</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {lang === 'fa'
                ? 'شامل مشخصات کامل ۴۰+ دستگاه شارژی و برقی، ماتریس سازگاری باتری‌های ۲ تا ۸ آمپر و راهنمای مهندسی نگهداری ابزار.'
                : 'Complete specifications for 40+ cordless power tools, 21700 cell battery ecosystem matrix, and warranty handbook.'}
            </p>

            <div className="flex justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span>FORMAT: PDF (HIGH-RES)</span>
              <span>•</span>
              <span>PAGES: 64 PAGES</span>
              <span>•</span>
              <span>SIZE: 18.4 MB</span>
            </div>
          </div>

          {/* Key Chapters */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
              {lang === 'fa' ? 'فهرست سرفصل‌های کاتالوگ مهندسی:' : 'Key Catalog Chapters:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>{lang === 'fa' ? 'فناوری موتورهای براشلس و آلیاژ گیربکس' : 'Brushless Motor & Gear Metallurgy'}</span>
              </div>
              <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>{lang === 'fa' ? 'خانواده آچار بکس‌های ضربه‌ای تا ۹۸۰ N.m' : 'Impact Wrench Lineup up to 980 N.m'}</span>
              </div>
              <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>{lang === 'fa' ? 'مینی‌فرز دیمردار و بتن‌کن‌های ۳ شیار و ۴ شیار' : 'Angle Grinders & Heavy Rotary Hammers'}</span>
              </div>
              <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />
                <span>{lang === 'fa' ? 'راهنمای خدمات پس از فروش و گارانتی طلایی' : 'Warranty Handbook & Service Centers'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-slate-950/70">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
          >
            {lang === 'fa' ? 'انصراف' : 'Cancel'}
          </button>

          <button
            onClick={handleDownload}
            className="px-6 py-2.5 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-lg flex items-center gap-2 shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'fa' ? 'دانلود فایل کامل کاتالوگ (PDF)' : 'Download Full Catalog (PDF)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
