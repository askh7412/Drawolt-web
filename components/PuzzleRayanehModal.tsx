'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { X, Code2, Award, CheckCircle, Cpu, ShieldCheck, Globe, Terminal } from 'lucide-react';

interface PuzzleRayanehModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PuzzleRayanehModal({ isOpen, onClose }: PuzzleRayanehModalProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#9DCB16]" />
            <h2 className="text-sm sm:text-base font-black text-white">
              {t.developer.modalTitle}
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
          {/* Main Legal & Registry Badge */}
          <div className="p-5 rounded-xl bg-slate-950 border-2 border-[#9DCB16]/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#9DCB16] tracking-widest uppercase">
                ENGINEERING CREDENTIAL CERTIFICATE
              </span>
              <span className="text-[11px] font-mono font-bold bg-[#9DCB16] text-slate-950 px-2 py-0.5 rounded">
                REG: 527591
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-white">
              {t.developer.companyName}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t.developer.credit}
            </p>
          </div>

          {/* Technical Stack Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#9DCB16]" />
              <span>{t.developer.techStackTitle}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Framework:</span>
                <span className="text-[#9DCB16] font-bold">Next.js 15 (App Router)</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">UI & Styling:</span>
                <span className="text-white font-bold">Tailwind CSS v4 + Motion</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">AI Engine:</span>
                <span className="text-[#9DCB16] font-bold">Google GenAI (Gemini)</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Internationalization:</span>
                <span className="text-white font-bold">Dynamic RTL/LTR (FA, EN, AR, DE)</span>
              </div>
            </div>
          </div>

          {/* Engineering Standards */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9DCB16]" />
              <span>{t.developer.standardsTitle}</span>
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                <span>طراحی واکنش‌گرا و عملکرد فوق‌سریع با رندر سمت سرور و کلاینت هیبرید</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                <span>ساختار داده‌های نشاندار سئو (Schema.org JSON-LD) جهت رتبه‌بندی صدر جستجوی گوگل</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                <span>سیستم صوتی دوطرفه (TTS و تشخیص گفتار مجهز به دستیار هوش مصنوعی راماکس)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            <span>شماره ثبت: ۵۲۷۵۹۱</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 text-xs font-black rounded-lg transition-colors"
          >
            {lang === 'fa' ? 'تایید و بستن' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
