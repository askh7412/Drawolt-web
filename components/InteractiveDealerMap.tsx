'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Building2,
  Navigation,
  Search,
  ExternalLink,
  Award,
} from 'lucide-react';

interface DealerNode {
  id: string;
  name: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  hours: string;
  cx: number; // SVG percentage coordinate X
  cy: number; // SVG percentage coordinate Y
  isHub?: boolean;
}

export function InteractiveDealerMap() {
  const { theme, lang, isRtl } = useTheme();

  const dealers: DealerNode[] = [
    {
      id: 'tehran',
      name: lang === 'fa' ? 'مرکز توزیع مرکزی و خدمات مرکزی DRAWOLT تهران' : 'DRAWOLT Central Distribution Hub Tehran',
      city: 'تهران',
      province: 'تهران',
      address: lang === 'fa' ? 'تهران، میدان حسن‌آباد، خیابان امام خمینی، پاساژ ابزار پارس، پلاک ۱۴' : 'Imam Khomeini St., Hasan Abad Sq., Pars Tools Plaza, Tehran',
      phone: '021-66749000',
      hours: '08:30 - 18:30',
      cx: 48,
      cy: 35,
      isHub: true,
    },
    {
      id: 'karaj',
      name: lang === 'fa' ? 'عاملیت رسمی استان البرز و شهرک‌های صنعتی' : 'Alborz Province & Industrial Hub Karaj',
      city: 'کرج',
      province: 'البرز',
      address: lang === 'fa' ? 'کرج، جاده مخصوص، شهرک صنعتی سیمین دشت، خیابان سوم غربی' : 'Special Road, Simin Dasht Industrial Zone, Karaj',
      phone: '026-36671200',
      hours: '08:30 - 18:00',
      cx: 45,
      cy: 33,
    },
    {
      id: 'isfahan',
      name: lang === 'fa' ? 'مرکز خدمات و عاملیت توزیع اصفهان (ابزار دقیق صنعت)' : 'Isfahan Regional Distribution & Service Hub',
      city: 'اصفهان',
      province: 'اصفهان',
      address: lang === 'fa' ? 'اصفهان، خیابان کهندژ، نبش کوچه ۳۴، مجتمع تکنو ابزار' : 'Kohandej St., Corner of Alley 34, Techno Tools Complex, Isfahan',
      phone: '031-33671200',
      hours: '09:00 - 19:00',
      cx: 50,
      cy: 52,
    },
    {
      id: 'mashhad',
      name: lang === 'fa' ? 'عاملیت توزیع شرق کشور (خراسان رضوی)' : 'East Region Distribution Hub Mashhad',
      city: 'مشهد',
      province: 'خراسان رضوی',
      address: lang === 'fa' ? 'مشهد، بلوار کوشش، بین کوشش ۷ و ۹، بازرگانی ابزار شرق' : 'Koushesh Blvd., Between Koushesh 7 & 9, Mashhad',
      phone: '051-38554000',
      hours: '09:00 - 18:00',
      cx: 78,
      cy: 32,
    },
    {
      id: 'tabriz',
      name: lang === 'fa' ? 'مرکز خدمات و گارانتی شمال‌غرب (آذربایجان شرقی)' : 'Northwest Guarantee Center Tabriz',
      city: 'تبریز',
      province: 'آذربایجان شرقی',
      address: lang === 'fa' ? 'تبریز، چهارراه فلسطین، روبروی بازار آهن، بازرگانی دراوولت' : 'Palestine Crossroad, Opposite Metal Market, Tabriz',
      phone: '041-35518000',
      hours: '08:30 - 18:00',
      cx: 25,
      cy: 22,
    },
    {
      id: 'shiraz',
      name: lang === 'fa' ? 'نمایندگی رسمی استان فارس و جنوب کشور' : 'Shiraz & South Province Hub',
      city: 'شیراز',
      province: 'فارس',
      address: lang === 'fa' ? 'شیراز، بلوار امیرکبیر، بعد از پل امام حسن، مجتمع ابزار صنعت' : 'Amirkabir Blvd., Industry Tools Complex, Shiraz',
      phone: '071-38321000',
      hours: '09:00 - 19:30',
      cx: 52,
      cy: 72,
    },
    {
      id: 'ahvaz',
      name: lang === 'fa' ? 'مرکز پشتیبانی صنایع نفت، گاز و پتروشیمی خوزستان' : 'Khuzestan Energy & Heavy Industry Hub',
      city: 'اهواز',
      province: 'خوزستان',
      address: lang === 'fa' ? 'اهواز، بزرگراه مدرس، شهرک صنعتی شماره ۲، شرکت ابزار جنوب' : 'Modarres Hwy, Industrial Zone 2, Ahvaz',
      phone: '061-34448000',
      hours: '08:00 - 17:00',
      cx: 35,
      cy: 62,
    },
    {
      id: 'rasht',
      name: lang === 'fa' ? 'عاملیت رسمی استان گیلان و نوار ساحلی شمال' : 'Gilan & Caspian Coastal Service Station',
      city: 'رشت',
      province: 'گیلان',
      address: lang === 'fa' ? 'رشت، میدان جانبازان، ابتدای بلوار امام رضا، مجتمع ابزار کاسپین' : 'Janbazan Sq., Imam Reza Blvd., Caspian Tools, Rasht',
      phone: '013-33821000',
      hours: '08:30 - 18:30',
      cx: 42,
      cy: 24,
    },
  ];

  const [activeDealerId, setActiveDealerId] = useState<string>('tehran');
  const [searchCity, setSearchCity] = useState('');

  const activeDealer = dealers.find((d) => d.id === activeDealerId) || dealers[0];

  const filteredDealers = dealers.filter(
    (d) =>
      d.city.includes(searchCity) ||
      d.province.includes(searchCity) ||
      d.name.includes(searchCity)
  );

  return (
    <section id="dealermap" className="py-20 relative bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9DCB16]/15 border border-[#9DCB16]/40 text-[#7ca010] dark:text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            <span>{lang === 'fa' ? 'نقشه تعاملی شبکه عاملیت‌ها' : 'INTERACTIVE DEALER NETWORK'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa'
              ? 'پراکندگی عاملیت‌های فروش و خدمات DRAWOLT روی نقشه'
              : 'DRAWOLT Authorized Dealership Map & Regional Stations'}
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'روی پین‌های نقشه یا شهر مورد نظر کلیک کنید تا آدرس، تماس مستقیم و ظرفیت خدمات فنی آن مرکز نمایش داده شود.'
              : 'Click on any city pin to inspect address, verified parts inventory, and direct support.'}
          </p>
        </div>

        {/* Map + Detail Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map Canvas */}
          <div className="lg:col-span-7 bg-white dark:bg-[#101726] border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9DCB16] animate-pulse" />
                <span>NATIONWIDE SERVICE MATRIX</span>
              </span>
              <span className="text-[11px] font-mono text-[#7ca010] dark:text-[#9DCB16] font-bold">
                {dealers.length} VERIFIED HUBS
              </span>
            </div>

            {/* SVG Visual Stylized Map of Iran */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-[#080C14] dark:via-[#0F1626] dark:to-[#080C14] rounded-2xl border border-slate-200 dark:border-slate-800/80 p-4 flex items-center justify-center">
              <svg viewBox="0 0 100 80" className="w-full h-full select-none">
                <defs>
                  <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9DCB16" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#9DCB16" stopOpacity="0.03" />
                  </linearGradient>
                </defs>

                {/* Stylized Geo Silhouette Contour of Iran */}
                <path
                  d="M 18,24 
                     L 24,18 L 36,18 L 44,22 L 52,24 L 62,20 L 75,22 L 86,28 L 88,40 
                     L 82,50 L 76,56 L 68,64 L 62,72 L 54,74 L 46,68 L 38,62 L 30,55 
                     L 24,48 L 18,38 Z"
                  fill="url(#mapFill)"
                  stroke="#9DCB16"
                  strokeWidth="0.8"
                  strokeDasharray="2 1"
                />

                {/* Regional Link Network Grid Lines */}
                <line x1="48" y1="35" x2="50" y2="52" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />
                <line x1="48" y1="35" x2="78" y2="32" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />
                <line x1="48" y1="35" x2="25" y2="22" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />
                <line x1="50" y1="52" x2="52" y2="72" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />
                <line x1="50" y1="52" x2="35" y2="62" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />
                <line x1="48" y1="35" x2="42" y2="24" stroke="#9DCB16" strokeWidth="0.3" opacity="0.6" strokeDasharray="1 1" />

                {/* Caspian Sea & Persian Gulf Callouts */}
                <text x="44" y="16" fill="#94A3B8" fontSize="2.8" textAnchor="middle" fontStyle="italic">دریای خزر (Caspian Sea)</text>
                <text x="50" y="78" fill="#94A3B8" fontSize="2.8" textAnchor="middle" fontStyle="italic">خلیج فارس (Persian Gulf)</text>

                {/* Interactive Dealership Pins */}
                {dealers.map((d) => {
                  const isSelected = activeDealerId === d.id;
                  return (
                    <g
                      key={d.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => setActiveDealerId(d.id)}
                    >
                      {/* Outer pulse wave */}
                      {isSelected && (
                        <circle cx={d.cx} cy={d.cy} r="4" fill="#9DCB16" opacity="0.3" className="animate-ping" />
                      )}
                      
                      {/* Pin Outer Ring */}
                      <circle
                        cx={d.cx}
                        cy={d.cy}
                        r={isSelected ? '2.5' : '1.8'}
                        fill={isSelected ? '#9DCB16' : '#1E293B'}
                        stroke={isSelected ? '#0F172A' : '#9DCB16'}
                        strokeWidth="0.6"
                      />

                      {/* Center Indicator */}
                      <circle
                        cx={d.cx}
                        cy={d.cy}
                        r="0.8"
                        fill={isSelected ? '#0F172A' : '#9DCB16'}
                      />

                      {/* City Name Label */}
                      <text
                        x={d.cx}
                        y={d.cy - 3.2}
                        fill={isSelected ? '#7ca010' : '#64748B'}
                        fontSize="2.4"
                        fontWeight={isSelected ? '900' : 'normal'}
                        textAnchor="middle"
                        className="select-none pointer-events-none"
                      >
                        {d.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>{lang === 'fa' ? 'روی هر نقطه از نقشه ضربه بزنید' : 'Click on any city node'}</span>
              <span className="font-mono text-[#7ca010] dark:text-[#9DCB16]">DRAWOLT CENTRAL LOGISTICS</span>
            </div>
          </div>

          {/* Right Column: Selected Dealer Detail Card + City Filter */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Filter Box */}
            <div className="relative">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder={lang === 'fa' ? 'جستجوی شهر یا استان...' : 'Search city or province...'}
                className={`w-full py-2.5 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#9DCB16] ${
                  isRtl ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'
                }`}
              />
            </div>

            {/* Selected Dealer Detailed Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#101726] border-2 border-[#9DCB16] shadow-xl space-y-4">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#7ca010] dark:text-[#9DCB16] uppercase block">
                    {activeDealer.isHub ? 'CENTRAL HEADQUARTERS HUB' : 'AUTHORIZED REGIONAL DEALERSHIP'}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {activeDealer.name}
                  </h3>
                </div>

                <span className="px-2.5 py-1 text-xs font-bold bg-[#9DCB16] text-slate-950 rounded-md">
                  {activeDealer.city}
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#9DCB16] flex-shrink-0 mt-0.5" />
                  <span>{activeDealer.address}</span>
                </p>

                <p className="flex items-center gap-2 font-mono">
                  <Phone className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                  <span dir="ltr">{activeDealer.phone}</span>
                </p>

                <p className="flex items-center gap-2 font-mono text-slate-400">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>{activeDealer.hours}</span>
                </p>
              </div>

              {/* Service guarantee tags */}
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-[#7ca010] dark:text-[#9DCB16] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'پذیرش رسمی گارانتی طلایی ۱۸ ماهه DRAWOLT' : '18M Warranty Claim Station'}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {lang === 'fa'
                    ? 'تعمیرات استاندارد زیر ۲۴ ساعت با قطعات ۱۰۰٪ فابریک و انبار کامل قطعات مصرفی.'
                    : 'Sub-24h turnaround repairs with 100% genuine OEM replacement parts.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${activeDealer.phone}`}
                  className="flex-1 py-2.5 px-4 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.01]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'تماس مستقیم با عاملیت' : 'Direct Call'}</span>
                </a>

                <button
                  onClick={() => {
                    alert(lang === 'fa' ? `مسیریابی به مقصد ${activeDealer.name} فعال گردید.` : `Routing to ${activeDealer.name}`);
                  }}
                  className="py-2.5 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span>{lang === 'fa' ? 'مسیریابی' : 'Directions'}</span>
                </button>
              </div>
            </div>

            {/* Quick City Buttons */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {filteredDealers.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDealerId(d.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                    activeDealerId === d.id
                      ? 'bg-slate-900 text-[#9DCB16] border-[#9DCB16]'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  {d.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
