'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { BrandLogo } from './BrandLogo';
import {
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface FooterProps {
  onOpenDeveloperModal: () => void;
  onOpenWarranty: () => void;
  onOpenCatalog: () => void;
}

export function Footer({ onOpenDeveloperModal, onOpenWarranty, onOpenCatalog }: FooterProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const Chevron = isRtl ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                DIN 3121 GERMAN METALLURGY
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-[#9DCB16]">
                18M GOLDEN WARRANTY
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-[#9DCB16] transition-colors flex items-center gap-1.5">
                  <Chevron className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{t.nav.products}</span>
                </a>
              </li>
              <li>
                <a href="#brushless" className="hover:text-[#9DCB16] transition-colors flex items-center gap-1.5">
                  <Chevron className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{t.nav.brushlessTech}</span>
                </a>
              </li>
              <li>
                <a href="#battery" className="hover:text-[#9DCB16] transition-colors flex items-center gap-1.5">
                  <Chevron className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{t.nav.batteryEcosystem}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-[#9DCB16] transition-colors flex items-center gap-1.5 text-start"
                >
                  <Chevron className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{t.nav.warranty}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalog}
                  className="hover:text-[#9DCB16] transition-colors flex items-center gap-1.5 text-start"
                >
                  <Chevron className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{t.nav.catalog}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact and Service */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.support}
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#9DCB16] flex-shrink-0 mt-0.5" />
                <span>
                  {lang === 'fa'
                    ? 'دفتر مرکزی: تهران، میدان حسن‌آباد، خیابان امام خمینی، برج بازرگانی ابزار'
                    : 'Central Office: Hasan Abad Sq, Imam Khomeini St, Tools Commercial Tower, Tehran'}
                </span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                <span dir="ltr">021 - 6674 9000 (30 Lines)</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Mail className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                <span>service@drawolt-tools.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Developer Credential & Copyright Strip */}
      <div className="border-t border-slate-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          {/* Legal Rights */}
          <div className="space-y-1">
            <p className="text-[11px] text-slate-400">
              {t.footer.allRightsReserved}
            </p>
          </div>

          {/* Developer Credit - Explicit Company Requirement */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#9DCB16]" />
              <span className="text-[11px] font-bold text-slate-200">
                {t.developer.credit}
              </span>
              <button
                onClick={onOpenDeveloperModal}
                className="px-2 py-0.5 text-[10px] font-bold text-[#9DCB16] hover:bg-[#9DCB16]/10 rounded border border-[#9DCB16]/40 transition-colors ml-1"
              >
                {t.developer.detailsBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
