'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { PRODUCTS, Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import {
  SlidersHorizontal,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ShoppingCart,
  Sparkles,
  Zap,
} from 'lucide-react';

interface SmartToolAdvisorProps {
  onAddPackageToCart: (products: Product[]) => void;
}

export function SmartToolAdvisor({ onAddPackageToCart }: SmartToolAdvisorProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [step, setStep] = useState<number>(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('steel');
  const [selectedShift, setSelectedShift] = useState<string>('heavy');
  const [selectedPriority, setSelectedPriority] = useState<string>('torque');
  const [packageAdded, setPackageAdded] = useState<boolean>(false);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const industries = [
    {
      id: 'steel',
      title: lang === 'fa' ? 'اسکلت و سازه‌های فلزی' : lang === 'ar' ? 'الهياكل والمنشآت الفولاذية' : lang === 'de' ? 'Stahlbau & Montage' : 'Structural Steel Fabrication',
      desc: lang === 'fa' ? 'سوله‌سازی، بستن بولت‌های M20-M30 و برش تیرآهن' : 'High-tensile bolt fastening and heavy plate cutting',
    },
    {
      id: 'construction',
      title: lang === 'fa' ? 'پروژه‌های عمرانی و بتنی' : lang === 'ar' ? 'مشاريع الخرسانة والإنشاءات' : lang === 'de' ? 'Beton- & Hochbau' : 'Heavy Concrete & Masonry',
      desc: lang === 'fa' ? 'سوراخکاری کاشت میلگرد، تخریب و تراز لیزری' : 'Anchor drilling, concrete demolition, and leveling',
    },
    {
      id: 'automotive',
      title: lang === 'fa' ? 'تعمیرات ماشین‌آلات و خودروسازی' : lang === 'ar' ? 'صيانة الآليات والسيارات' : lang === 'de' ? 'Nfz- & Kfz-Instandhaltung' : 'Automotive & Heavy Fleet',
      desc: lang === 'fa' ? 'سیستم تعلیق، باز کردن مهره‌های اکسل و پولیش' : 'Chassis service, suspension, and high-speed grinding',
    },
    {
      id: 'woodworking',
      title: lang === 'fa' ? 'دکوراسیون، نجاری و ام‌دی‌اف' : lang === 'ar' ? 'النجارة والديكور والأخشاب' : lang === 'de' ? 'Zimmerei & Innenausbau' : 'Carpentry & Woodwork',
      desc: lang === 'fa' ? 'برش طولی الوار، پیچ‌های MDF و اندازه‌گیری دقیق' : 'Rip cutting, precision cabinet assembly, framing',
    },
  ];

  const shifts = [
    {
      id: 'moderate',
      title: lang === 'fa' ? 'شیفت سبک تا متوسط (۴ ساعت در روز)' : 'Moderate Shift (up to 4h/day)',
      desc: lang === 'fa' ? 'کاربری پروژه‌ای ادواری' : 'Intermittent project usage',
    },
    {
      id: 'standard',
      title: lang === 'fa' ? 'شیفت کامل کارگاهی (۸ ساعت پیوسته)' : 'Standard Full Shift (8h daily)',
      desc: lang === 'fa' ? 'کارگاه‌های تولیدی و پیمانکاری فعال' : 'Active manufacturing contractors',
    },
    {
      id: 'heavy',
      title: lang === 'fa' ? 'شیفت سنگین صنعتی ۲۴/۷ (فوق‌سنگین)' : 'Heavy 24/7 Industrial (Extreme)',
      desc: lang === 'fa' ? 'خطوط مونتاژ پیوسته و شرایط گردوغبار بالا' : 'Continuous shifts and extreme dust',
    },
  ];

  const priorities = [
    {
      id: 'torque',
      title: lang === 'fa' ? 'حداکثر گشتاور و نیروی محرکه' : 'Maximum Torque & Output Power',
      desc: lang === 'fa' ? 'بدون وقفه زیر سنگین‌ترین بارهای مکانیکی' : 'Zero bog-down under extreme resistance',
    },
    {
      id: 'runtime',
      title: lang === 'fa' ? 'بیشترین شارژدهی باتری و دوام' : 'Maximum Runtime & Battery Endurance',
      desc: lang === 'fa' ? 'کمترین دفعات مراجعه به ایستگاه شارژ' : 'Longest operational intervals between charges',
    },
    {
      id: 'ergonomics',
      title: lang === 'fa' ? 'ارگونومی، وزن کم و کار در ارتفاع' : 'Lightweight & Ergonomic Handling',
      desc: lang === 'fa' ? 'کاهش خستگی مچ در کارهای سقفی و طولانی' : 'Lowest wrist fatigue for overhead works',
    },
  ];

  // Derive recommended products
  const recommendedTools: Product[] = (() => {
    if (selectedIndustry === 'steel') {
      return [PRODUCTS[0], PRODUCTS[1], PRODUCTS[6]]; // Wrench 980 + Grinder 40V + 8.0Ah battery
    }
    if (selectedIndustry === 'construction') {
      return [PRODUCTS[2], PRODUCTS[4], PRODUCTS[6]]; // Rotary hammer + Laser 3D + 8.0Ah battery
    }
    if (selectedIndustry === 'woodworking') {
      return [PRODUCTS[5], PRODUCTS[3], PRODUCTS[7]]; // Circular Saw + Drill + Turbo Charger
    }
    return [PRODUCTS[0], PRODUCTS[3], PRODUCTS[6]]; // Wrench + Drill + Battery
  })();

  const handleApply = () => {
    onAddPackageToCart(recommendedTools);
    setPackageAdded(true);
    setTimeout(() => setPackageAdded(false), 3000);
  };

  return (
    <section id="advisor" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/10 border border-[#9DCB16]/30 text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{t.advisor.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.advisor.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.advisor.subtitle}
          </p>
        </div>

        {/* Wizard Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 dark:bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Step Progress Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`p-3 rounded-xl border text-center transition-colors ${
                  step === s
                    ? 'bg-[#9DCB16]/15 border-[#9DCB16] text-[#9DCB16]'
                    : step > s
                    ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <span className="text-[10px] font-mono font-bold block">STEP {s}</span>
                <span className="text-xs sm:text-sm font-bold">
                  {s === 1 ? t.advisor.industryLabel : s === 2 ? t.advisor.shiftLabel : t.advisor.priorityLabel}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Industry */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {t.advisor.step1Title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-4 rounded-xl border text-start transition-all ${
                      selectedIndustry === ind.id
                        ? 'bg-[#9DCB16]/10 border-[#9DCB16] text-white shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm sm:text-base">{ind.title}</span>
                      {selectedIndustry === ind.id && <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />}
                    </div>
                    <p className="text-xs text-slate-400">{ind.desc}</p>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-lg flex items-center gap-2"
                >
                  <span>{lang === 'fa' ? 'مرحله بعد: شدت شیفت' : 'Next Step'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Shift Intensity */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {t.advisor.step2Title}
              </h3>
              <div className="space-y-3">
                {shifts.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedShift(s.id)}
                    className={`w-full p-4 rounded-xl border text-start transition-all ${
                      selectedShift === s.id
                        ? 'bg-[#9DCB16]/10 border-[#9DCB16] text-white shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm sm:text-base">{s.title}</span>
                      {selectedShift === s.id && <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />}
                    </div>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  {lang === 'fa' ? 'بازگشت' : 'Back'}
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-lg flex items-center gap-2"
                >
                  <span>{lang === 'fa' ? 'مرحله بعد: اولویت فنی' : 'Next Step'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Priority */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {t.advisor.step3Title}
              </h3>
              <div className="space-y-3">
                {priorities.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPriority(p.id)}
                    className={`w-full p-4 rounded-xl border text-start transition-all ${
                      selectedPriority === p.id
                        ? 'bg-[#9DCB16]/10 border-[#9DCB16] text-white shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm sm:text-base">{p.title}</span>
                      {selectedPriority === p.id && <CheckCircle2 className="w-4 h-4 text-[#9DCB16]" />}
                    </div>
                    <p className="text-xs text-slate-400">{p.desc}</p>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  {lang === 'fa' ? 'بازگشت' : 'Back'}
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-lg flex items-center gap-2"
                >
                  <span>{lang === 'fa' ? 'مشاهده پکیج پیشنهادی' : 'Calculate Recommendation'}</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Final Recommendation Package */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-[#9DCB16]">
                    ENGINEERED FLEET SOLUTION
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {t.advisor.resultTitle}
                  </h3>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.advisor.btnRestart}</span>
                </button>
              </div>

              {/* Recommended Items Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendedTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-32 mb-2 flex items-center justify-center">
                        <ProductVisual type={tool.iconType} voltage={tool.voltage} torque={tool.torque} model={tool.model} />
                      </div>
                      <span className="text-[10px] font-mono text-[#9DCB16] font-bold">{tool.model}</span>
                      <h4 className="text-xs font-bold text-white line-clamp-1">{tool.name[lang]}</h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 mt-2 block">
                      {tool.torque || tool.voltage}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Banner */}
              <div className="p-4 bg-[#9DCB16]/10 border border-[#9DCB16]/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#9DCB16] block">
                    {lang === 'fa' ? 'شامل ۱۸ ماه گارانتی طلایی تعویض برای تمام اقلام پکیج' : 'Includes 18M Golden Replacement Warranty'}
                  </span>
                  <span className="text-xs text-slate-300">
                    {lang === 'fa' ? 'تخفیف ویژه سفارش سازمانی در صورت صدور استعلام یکپارچه' : 'Volume corporate discount applies'}
                  </span>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full sm:w-auto px-6 py-3 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-105"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{packageAdded ? (lang === 'fa' ? 'به سبد افزوده شد!' : 'Added!') : t.advisor.btnApplyPackage}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
