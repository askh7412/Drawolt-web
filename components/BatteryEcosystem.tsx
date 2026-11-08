'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { ProductVisual } from './ProductVisual';
import {
  BatteryCharging,
  Zap,
  ShieldAlert,
  Flame,
  CheckCircle2,
  Gauge,
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';

export function BatteryEcosystem() {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [selectedAh, setSelectedAh] = useState<number>(4.0);

  // Performance calculations per full charge
  const benchmarks = {
    2.0: { rebar: 48, bolts: 140, concrete: 35, weight: '0.45 kg', chargeTime: '15 min' },
    4.0: { rebar: 110, bolts: 320, concrete: 85, weight: '0.68 kg', chargeTime: '22 min' },
    6.0: { rebar: 185, bolts: 510, concrete: 140, weight: '0.85 kg', chargeTime: '30 min' },
    8.0: { rebar: 260, bolts: 720, concrete: 210, weight: '0.98 kg', chargeTime: '40 min' },
  }[selectedAh as 2.0 | 4.0 | 6.0 | 8.0];

  const capacities = [2.0, 4.0, 6.0, 8.0];

  return (
    <section id="battery" className="py-20 bg-slate-900/50 dark:bg-[#0B0F19]/90 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/10 border border-[#9DCB16]/30 text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>{t.battery.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.battery.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.battery.subtitle}
          </p>
        </div>

        {/* Capacity Selector Tabs */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-10">
          <span className="text-xs font-mono font-bold text-slate-300 uppercase">
            {t.battery.selectAh}
          </span>
          <div className="inline-flex p-1.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-xl">
            {capacities.map((ah) => (
              <button
                key={ah}
                onClick={() => setSelectedAh(ah)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-black font-mono transition-all duration-200 ${
                  selectedAh === ah
                    ? 'bg-[#9DCB16] text-slate-950 shadow-lg shadow-[#9DCB16]/20 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {ah.toFixed(1)} Ah
              </button>
            ))}
          </div>
        </div>

        {/* Benchmark Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual representation & specs */}
          <div className="lg:col-span-5 bg-slate-900/90 dark:bg-[#101726] border border-slate-800 rounded-2xl p-6 shadow-xl relative">
            <div className="h-56 flex items-center justify-center">
              <ProductVisual
                type="battery"
                voltage="20V / 40V"
                torque={`${selectedAh.toFixed(1)}Ah`}
                model={`DRA-POWER ${selectedAh.toFixed(1)}Ah`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800 text-center text-xs">
              <div className="bg-slate-950/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px] font-mono">WEIGHT</span>
                <span className="font-mono font-bold text-white">{benchmarks.weight}</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px] font-mono">80% FAST CHARGE</span>
                <span className="font-mono font-bold text-[#9DCB16]">{benchmarks.chargeTime}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real-World Workload Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 dark:bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-sm font-mono font-bold text-slate-200 uppercase flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#9DCB16]" />
                  <span>{t.battery.workloadEstimation} ({selectedAh.toFixed(1)} Ah)</span>
                </h3>
                <span className="text-xs font-mono font-bold text-[#9DCB16] bg-[#9DCB16]/10 px-2.5 py-1 rounded">
                  21700 CYLINDRICAL CELLS
                </span>
              </div>

              {/* Benchmark 1: Rebar Cuts */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-slate-200">{t.battery.rebarCuts}</span>
                  <span className="font-mono font-black text-lg text-[#9DCB16]">
                    {benchmarks.rebar}{' '}
                    <span className="text-xs text-slate-400 font-normal">{lang === 'fa' ? 'برش' : 'cuts'}</span>
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-[#9DCB16] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (benchmarks.rebar / 260) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Benchmark 2: Structural Bolts */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-slate-200">{t.battery.boltFastenings}</span>
                  <span className="font-mono font-black text-lg text-[#9DCB16]">
                    {benchmarks.bolts}{' '}
                    <span className="text-xs text-slate-400 font-normal">{lang === 'fa' ? 'پیچ' : 'bolts'}</span>
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-lime-500 to-[#9DCB16] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (benchmarks.bolts / 720) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Benchmark 3: Concrete Anchor Holes */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-slate-200">{t.battery.concreteDrillHoles}</span>
                  <span className="font-mono font-black text-lg text-[#9DCB16]">
                    {benchmarks.concrete}{' '}
                    <span className="text-xs text-slate-400 font-normal">{lang === 'fa' ? 'سوراخ' : 'holes'}</span>
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-[#9DCB16] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (benchmarks.concrete / 210) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 3 Engineering Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#9DCB16]">
                  <Layers className="w-4 h-4" />
                  <span>{t.battery.cellTech}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.battery.cellTechDesc}
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#9DCB16]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{t.battery.bmsTech}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.battery.bmsTechDesc}
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#9DCB16]">
                  <ThermometerSnowflake className="w-4 h-4" />
                  <span>{t.battery.fastCharge}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.battery.fastChargeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
