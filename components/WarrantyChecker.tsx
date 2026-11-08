'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  Search,
  CheckCircle,
  AlertCircle,
  FileBadge,
  Printer,
  Calendar,
  Sparkles,
  QrCode,
  UserCheck,
} from 'lucide-react';

interface VerifiedWarranty {
  serial: string;
  model: string;
  toolName: string;
  customerName: string;
  issueDate: string;
  expiryDate: string;
  daysRemaining: number;
  status: 'active' | 'expired' | 'invalid';
}

export function WarrantyChecker() {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'verify' | 'register'>('verify');
  const [serialInput, setSerialInput] = useState<string>('DW-9820-PRO');
  const [result, setResult] = useState<VerifiedWarranty | null>(null);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  // Registration Form State
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regSerial, setRegSerial] = useState('');
  const [regDealer, setRegDealer] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const sampleSerials = ['DW-9820-PRO', 'DW-7740-XR', 'DW-4025-AG'];

  const handleVerify = (serialToCheck?: string) => {
    const s = (serialToCheck || serialInput).trim().toUpperCase();
    setIsSearched(true);

    if (s.includes('9820')) {
      const data: VerifiedWarranty = {
        serial: 'DW-9820-PRO-789421',
        model: 'DW-9820-PRO',
        toolName: lang === 'fa' ? 'آچار بکس ضربه‌ای براشلس ۹۸۰ نیوتن‌متر ۲۰ ولت' : '20V Brushless 980 N.m Impact Wrench',
        customerName: lang === 'fa' ? 'شرکت سازه‌های فولادی سامان البرز' : 'Saman Alborz Steel Structures',
        issueDate: '2026-02-15',
        expiryDate: '2027-08-15',
        daysRemaining: 279,
        status: 'active',
      };
      setResult(data);
      triggerConfetti();
    } else if (s.includes('7740')) {
      const data: VerifiedWarranty = {
        serial: 'DW-7740-XR-441092',
        model: 'DW-7740-XR',
        toolName: lang === 'fa' ? 'بتن‌کن ۴ شیار براشلس ۲۰ ولت ۳.۲ ژول' : '20V SDS-Plus Brushless Hammer 3.2J',
        customerName: lang === 'fa' ? 'پیمانکاری عمران پارسیان' : 'Parsian Civil Construction Ltd.',
        issueDate: '2026-04-10',
        expiryDate: '2027-10-10',
        daysRemaining: 335,
        status: 'active',
      };
      setResult(data);
      triggerConfetti();
    } else if (s.includes('4025')) {
      const data: VerifiedWarranty = {
        serial: 'DW-4025-AG-993821',
        model: 'DW-4025-AG',
        toolName: lang === 'fa' ? 'مینی‌فرز دیمردار براشلس ۴۰ ولت ۱۲۵ میلی‌متر' : '40V Variable Speed Angle Grinder 125mm',
        customerName: lang === 'fa' ? 'صنایع ماشین‌سازی تکنوپویا' : 'TechnoPouya Machinery Ind.',
        issueDate: '2025-11-20',
        expiryDate: '2027-05-20',
        daysRemaining: 192,
        status: 'active',
      };
      setResult(data);
      triggerConfetti();
    } else if (s.length > 4) {
      // Generated valid active record for user custom query
      const data: VerifiedWarranty = {
        serial: `DW-${s}-GEN719`,
        model: s,
        toolName: lang === 'fa' ? 'دستگاه صنعتی اصلی با گارانتی طلایی دراوولت' : 'Genuine DRAWOLT Industrial Equipment',
        customerName: lang === 'fa' ? 'خریدار محترم دارنده کارت طلایی' : 'Registered Golden Card Holder',
        issueDate: '2026-06-01',
        expiryDate: '2027-12-01',
        daysRemaining: 388,
        status: 'active',
      };
      setResult(data);
      triggerConfetti();
    } else {
      setResult(null);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#9DCB16', '#B6E522', '#FFFFFF', '#64748B'],
      });
    } catch (e) {
      // Fallback silent
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regPhone || !regSerial) return;

    setRegSuccess(true);
    triggerConfetti();
    setTimeout(() => {
      setSerialInput(regSerial);
      handleVerify(regSerial);
      setActiveTab('verify');
      setRegSuccess(false);
      setRegName('');
      setRegPhone('');
      setRegSerial('');
      setRegDealer('');
    }, 2000);
  };

  return (
    <section id="warranty" className="py-20 bg-slate-900/60 dark:bg-[#0E1424] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/10 border border-[#9DCB16]/30 text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.warranty.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.warranty.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.warranty.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('verify')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                activeTab === 'verify'
                  ? 'bg-[#9DCB16] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.warranty.tabVerify}
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                activeTab === 'register'
                  ? 'bg-[#9DCB16] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.warranty.tabRegister}
            </button>
          </div>
        </div>

        {/* Verification Tab Content */}
        {activeTab === 'verify' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Search Input Box */}
            <div className="bg-slate-900/90 dark:bg-[#101726] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
                  <input
                    type="text"
                    value={serialInput}
                    onChange={(e) => setSerialInput(e.target.value)}
                    placeholder={t.warranty.inputPlaceholder}
                    className={`w-full py-3 bg-slate-950 text-sm text-slate-100 placeholder-slate-500 rounded-xl border border-slate-700 focus:border-[#9DCB16] focus:outline-none transition-colors uppercase font-mono ${
                      isRtl ? 'pr-10 pl-3' : 'pl-10 pr-3'
                    }`}
                  />
                </div>

                <button
                  onClick={() => handleVerify()}
                  className="px-6 py-3 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.warranty.btnCheck}</span>
                </button>
              </div>

              {/* Sample Quick Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-800 text-xs">
                <span className="text-slate-500 text-[11px]">{t.warranty.sampleSerials}</span>
                {sampleSerials.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSerialInput(s);
                      handleVerify(s);
                    }}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-[#9DCB16] rounded-md font-mono text-[11px] transition-colors border border-slate-700"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Verification Result Certificate */}
            {isSearched && (
              <div>
                {result ? (
                  <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-[#9DCB16]/70 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    {/* Golden Watermark Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9DCB16]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Certificate Top Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#9DCB16]/20 rounded-xl text-[#9DCB16] border border-[#9DCB16]/40">
                          <FileBadge className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#9DCB16] uppercase">
                            OFFICIAL VERIFIED CERTIFICATE
                          </span>
                          <h3 className="text-lg sm:text-xl font-black text-white">
                            {t.warranty.certificateTitle}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                        <CheckCircle className="w-4 h-4" />
                        <span>{t.warranty.statusActive}</span>
                      </div>
                    </div>

                    {/* Certificate Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-xs font-mono">
                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">{t.warranty.serialLabel}</span>
                        <span className="font-bold text-white text-sm tracking-wider">{result.serial}</span>
                      </div>

                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">{t.warranty.modelLabel}</span>
                        <span className="font-bold text-[#9DCB16] text-sm">{result.model}</span>
                      </div>

                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">
                          {lang === 'fa' ? 'مالک / شرکت بهره‌بردار:' : 'Registered Owner:'}
                        </span>
                        <span className="font-sans font-bold text-slate-200">{result.customerName}</span>
                      </div>

                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">{t.warranty.daysRemaining}</span>
                        <span className="font-bold text-lime-400 text-base">{result.daysRemaining} {lang === 'fa' ? 'روز فعال' : 'Days Active'}</span>
                      </div>

                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">{t.warranty.issueDate}</span>
                        <span className="text-slate-300">{result.issueDate}</span>
                      </div>

                      <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block text-[10px] font-sans">{t.warranty.expiryDate}</span>
                        <span className="text-slate-300">{result.expiryDate}</span>
                      </div>
                    </div>

                    {/* Coverage Scope Strip */}
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#9DCB16]">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{t.warranty.coverageType}: {t.warranty.unconditionalReplace}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                        {lang === 'fa'
                          ? 'پوشش شامل تعویض رایگان کلیه قطعات فرسوده ناشی از فشار کاری، بدون نیاز به کارشناسی زمان‌بر در سراسر نمایندگی‌های کشور.'
                          : 'Coverage includes free immediate replacement of armatures, stators, ESC boards, and mechanical gears across all authorized service centers.'}
                      </p>
                    </div>

                    {/* Certificate Footer with QR Code & Print Action */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                          <QrCode className="w-10 h-10 text-slate-950" />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          <span>SHA256: 7f8a9e21...c4b</span>
                          <span className="block text-[#9DCB16]">AUTHENTICATED BY DRAWOLT CENTRAL REGISTRY</span>
                        </div>
                      </div>

                      <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
                      >
                        <Printer className="w-4 h-4" />
                        <span>{lang === 'fa' ? 'چاپ شناسنامه رسمی گارانتی' : 'Print Certificate'}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-red-950/20 border border-red-500/40 rounded-xl text-center space-y-2">
                    <AlertCircle className="w-6 h-6 text-red-400 mx-auto" />
                    <p className="text-sm font-bold text-red-400">{t.warranty.statusInvalid}</p>
                    <p className="text-xs text-slate-400">
                      {lang === 'fa'
                        ? 'لطفاً شماره سریال درج شده بر روی بدنه دستگاه یا پلاک متالیک را مجدداً با دقت وارد نمایید.'
                        : 'Please recheck the laser-etched serial on the metallic rating plate.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Register Tab Content */}
        {activeTab === 'register' && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 dark:bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#9DCB16]" />
              <span>{t.warranty.regTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'fa'
                ? 'با ثبت سریال دستگاه در این سامانه، کارت طلایی ۱۸ ماهه بلافاصله صادر شده و تاریخ شروع گارانتی از روز ثبت فاکتور محاسبه می‌گردد.'
                : 'Register your new tool to activate 18 months of unconditional replacement warranty coverage immediately.'}
            </p>

            {regSuccess ? (
              <div className="p-6 bg-[#9DCB16]/10 border border-[#9DCB16] rounded-xl text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-[#9DCB16] mx-auto" />
                <p className="text-sm font-bold text-[#9DCB16]">{t.warranty.regSuccess}</p>
                <p className="text-xs text-slate-300">
                  {lang === 'fa' ? 'در حال صدور شناسنامه دیجیتال...' : 'Generating Digital Certificate...'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t.warranty.regCustomerName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder={lang === 'fa' ? 'مثال: مهندس حسینی / شرکت پرتو عمران' : 'John Doe / Company Name'}
                    className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {t.warranty.regPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="09123456789"
                      className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {t.warranty.regSerial} *
                    </label>
                    <input
                      type="text"
                      required
                      value={regSerial}
                      onChange={(e) => setRegSerial(e.target.value)}
                      placeholder="DW-9820-PRO-..."
                      className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none font-mono uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t.warranty.regDealer}
                  </label>
                  <input
                    type="text"
                    value={regDealer}
                    onChange={(e) => setRegDealer(e.target.value)}
                    placeholder={lang === 'fa' ? 'فروشگاه ابزار صنعت تهران یا شماره فاکتور' : 'Authorized Hardware Store'}
                    className="w-full py-2.5 px-3 bg-slate-950 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-[1.01]"
                  >
                    {t.warranty.regSubmit}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
