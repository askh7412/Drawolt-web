'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import {
  Building2,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface Dealer {
  id: string;
  name: string;
  city: string;
  cityEn: string;
  address: string;
  phone: string;
  hours: string;
  isMainHub?: boolean;
}

export function DealerNetwork() {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [formSent, setFormSent] = useState<boolean>(false);

  // Franchise form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantCity, setApplicantCity] = useState('');
  const [applicantExp, setApplicantExp] = useState('');

  const dealers: Dealer[] = [
    {
      id: 'tehran-central',
      name: lang === 'fa' ? 'مرکز خدمات مرکزی و انبار اصلی DRAWOLT تهران' : 'DRAWOLT Central Service & Parts Hub Tehran',
      city: 'tehran',
      cityEn: 'Tehran',
      address: lang === 'fa' ? 'تهران، میدان حسن‌آباد، خیابان امام خمینی، پاساژ ابزار پارس، پلاک ۱۴' : 'Imam Khomeini St., Hasan Abad Sq., Pars Hardware Plaza, No. 14, Tehran',
      phone: '021-66749000',
      hours: '08:30 - 18:30',
      isMainHub: true,
    },
    {
      id: 'isfahan',
      name: lang === 'fa' ? 'نمایندگی رسمی و خدمات فنی اصفهان (ابزار دقیق صنعت)' : 'Isfahan Authorized Technical Station',
      city: 'isfahan',
      cityEn: 'Isfahan',
      address: lang === 'fa' ? 'اصفهان، خیابان کهندژ، نبش کوچه ۳۴، مجتمع تکنو ابزار' : 'Kohandej St., Corner of Alley 34, Techno Tools Complex, Isfahan',
      phone: '031-33671200',
      hours: '09:00 - 19:00',
    },
    {
      id: 'mashhad',
      name: lang === 'fa' ? 'عاملیت توزیع و خدمات خراسان رضوی (خراسان تولز)' : 'Mashhad Regional Service & Distribution',
      city: 'mashhad',
      cityEn: 'Mashhad',
      address: lang === 'fa' ? 'مشهد، بلوار کوشش، بین کوشش ۷ و ۹، بازرگانی ابزار شرق' : 'Koushesh Blvd., Between Koushesh 7 & 9, Mashhad',
      phone: '051-38554000',
      hours: '09:00 - 18:00',
    },
    {
      id: 'tabriz',
      name: lang === 'fa' ? 'مرکز خدمات و گارانتی شمال‌غرب (تبریز متال)' : 'Tabriz Northwest Guarantee Center',
      city: 'tabriz',
      cityEn: 'Tabriz',
      address: lang === 'fa' ? 'تبریز، چهارراه فلسطین، روبروی بازار آهن، بازرگانی دراوولت' : 'Palestine Crossroad, Opposite Metal Market, Tabriz',
      phone: '041-35518000',
      hours: '08:30 - 18:00',
    },
    {
      id: 'shiraz',
      name: lang === 'fa' ? 'نمایندگی فارس و جنوب کشور (ابزار نوین پارس)' : 'Shiraz & South Province Service Center',
      city: 'shiraz',
      cityEn: 'Shiraz',
      address: lang === 'fa' ? 'شیراز، بلوار امیرکبیر، بعد از پل امام حسن، مجتمع ابزارآلات صنعت' : 'Amirkabir Blvd., Industry Tools Complex, Shiraz',
      phone: '071-38321000',
      hours: '09:00 - 19:30',
    },
    {
      id: 'ahvaz',
      name: lang === 'fa' ? 'مرکز پشتیبانی صنایع نفت و گاز خوزستان (اهواز پترو)' : 'Ahvaz Heavy Industry & Energy Service Hub',
      city: 'ahvaz',
      cityEn: 'Ahvaz',
      address: lang === 'fa' ? 'اهواز، بزرگراه مدرس، شهرک صنعتی شماره ۲، شرکت ابزار جنوب' : 'Modarres Hwy, Industrial Zone 2, Ahvaz',
      phone: '061-34448000',
      hours: '08:00 - 17:00',
    },
  ];

  const cityOptions = [
    { id: 'all', label: t.dealers.allCities },
    { id: 'tehran', label: lang === 'fa' ? 'تهران' : 'Tehran' },
    { id: 'isfahan', label: lang === 'fa' ? 'اصفهان' : 'Isfahan' },
    { id: 'mashhad', label: lang === 'fa' ? 'مشهد' : 'Mashhad' },
    { id: 'tabriz', label: lang === 'fa' ? 'تبریز' : 'Tabriz' },
    { id: 'shiraz', label: lang === 'fa' ? 'شیراز' : 'Shiraz' },
    { id: 'ahvaz', label: lang === 'fa' ? 'اهواز' : 'Ahvaz' },
  ];

  const filteredDealers = dealers.filter(
    (d) => selectedCity === 'all' || d.city === selectedCity
  );

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone || !applicantCity) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setApplicantName('');
      setApplicantPhone('');
      setApplicantCity('');
      setApplicantExp('');
    }, 4000);
  };

  return (
    <section id="dealers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/10 border border-[#9DCB16]/30 text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.dealers.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.dealers.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.dealers.subtitle}
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 scrollbar-none">
          {cityOptions.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCity(c.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                selectedCity === c.id
                  ? 'bg-[#9DCB16] text-slate-950 shadow-md'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredDealers.map((d) => (
            <div
              key={d.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                d.isMainHub
                  ? 'bg-slate-900/90 dark:bg-[#12192A] border-[#9DCB16]/60 shadow-xl shadow-[#9DCB16]/5'
                  : 'bg-slate-900/60 dark:bg-[#101726]/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {d.name}
                  </h3>
                  {d.isMainHub && (
                    <span className="text-[10px] font-mono font-bold bg-[#9DCB16] text-slate-950 px-2 py-0.5 rounded whitespace-nowrap">
                      MAIN HUB
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#9DCB16] flex-shrink-0 mt-0.5" />
                    <span>{d.address}</span>
                  </p>
                  <p className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-[#9DCB16] flex-shrink-0" />
                    <span dir="ltr">{d.phone}</span>
                  </p>
                  <p className="flex items-center gap-2 font-mono text-slate-400">
                    <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>{d.hours}</span>
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#9DCB16] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.dealers.serviceReady}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800 flex items-center gap-2">
                <a
                  href={`tel:${d.phone}`}
                  className="flex-1 py-2 px-3 text-xs font-bold text-slate-950 bg-[#9DCB16] hover:bg-[#8bb413] rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.dealers.btnCall}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Apply for Dealership Form Section */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t.dealers.applyFranchise}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.dealers.applyFranchiseSubtitle}
            </p>
          </div>

          {formSent ? (
            <div className="p-6 bg-[#9DCB16]/10 border border-[#9DCB16] rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#9DCB16] mx-auto" />
              <p className="text-sm font-bold text-[#9DCB16]">{t.dealers.formSent}</p>
            </div>
          ) : (
            <form onSubmit={handleFranchiseSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t.dealers.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={lang === 'fa' ? 'نام متقاضی یا شرکت' : 'Applicant Name'}
                    className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t.dealers.formPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="0912..."
                    className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.dealers.formCity} *
                </label>
                <input
                  type="text"
                  required
                  value={applicantCity}
                  onChange={(e) => setApplicantCity(e.target.value)}
                  placeholder={lang === 'fa' ? 'مثال: اصفهان، خیابان کهندژ' : 'Target City & Province'}
                  className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.dealers.formExperience}
                </label>
                <textarea
                  rows={3}
                  value={applicantExp}
                  onChange={(e) => setApplicantExp(e.target.value)}
                  placeholder={lang === 'fa' ? 'سابقه فروش ابزارآلات، متراژ مغازه یا انبار و توان توزیع...' : 'Business experience, store footprint, and distribution capacity...'}
                  className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.dealers.formSubmit}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
