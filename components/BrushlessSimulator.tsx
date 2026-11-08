'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import {
  Cpu,
  Flame,
  Gauge,
  Zap,
  Activity,
  CheckCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';

export function BrushlessSimulator() {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];
  const isDark = theme === 'dark';

  const [load, setLoad] = useState<number>(65); // 0% to 100%
  const [selectedPart, setSelectedPart] = useState<'rotor' | 'stator' | 'esc' | 'gearbox' | 'turbo'>('rotor');

  // Dynamic calculations based on mechanical load
  const rpm = Math.round(3200 - (load * 8));
  const temp = Math.round(32 + (load * 0.44)); // 32°C to 76°C
  const currentTorque = Math.round(150 + (load * 8.3)); // 150 N.m to 980 N.m
  const brushlessEfficiency = Math.round(94 - (load * 0.04)); // 94% down to 90%
  const carbonEfficiency = Math.round(68 - (load * 0.32)); // 68% down to 36%

  const partKeys: ('rotor' | 'stator' | 'esc' | 'gearbox' | 'turbo')[] = ['rotor', 'stator', 'esc', 'gearbox', 'turbo'];

  return (
    <section id="brushless" className="py-20 bg-slate-900/60 dark:bg-[#0E1424]/70 border-y border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9DCB16]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9DCB16]/10 border border-[#9DCB16]/30 text-[#9DCB16] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.simulator.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.simulator.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Subsystem Anatomy */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                {lang === 'fa' ? 'اجزای کالبدشکافی موتور' : 'Motor Internal Architecture'}
              </span>
              <span className="text-[11px] text-[#9DCB16] font-semibold">
                {lang === 'fa' ? 'انتخاب برای مشاهده جزئیات' : 'Select part'}
              </span>
            </div>

            {partKeys.map((part) => {
              const partData = t.simulator.parts[part];
              const isSelected = selectedPart === part;
              return (
                <button
                  key={part}
                  onClick={() => setSelectedPart(part)}
                  className={`w-full text-start p-4 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-800/90 dark:bg-[#162035] border-[#9DCB16] shadow-lg shadow-[#9DCB16]/10'
                      : 'bg-slate-900/40 dark:bg-[#101726]/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-bold ${isSelected ? 'text-[#9DCB16]' : 'text-slate-200'}`}>
                      {partData.name}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-[#9DCB16] text-slate-950 font-black' : 'bg-slate-800 text-slate-400'}`}>
                      {isSelected ? 'ACTIVE' : 'SPEC'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {partData.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Mechanical Load & Telemetry Dashboard */}
          <div className="lg:col-span-7 bg-slate-900/80 dark:bg-[#101728] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Live Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#9DCB16] animate-pulse" />
                <span className="text-sm font-mono font-bold text-slate-200">
                  REAL-TIME TELEMETRY BENCHMARK
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                PROTOCOL: DIGITAL CAN-BUS 3.2
              </span>
            </div>

            {/* Dynamic Load Slider */}
            <div className="py-6 space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="loadSlider" className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#9DCB16]" />
                  <span>{t.simulator.loadControl}</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">{t.simulator.currentLoad}:</span>
                  <span className="text-base font-black font-mono text-[#9DCB16] bg-[#9DCB16]/10 px-2 py-0.5 rounded border border-[#9DCB16]/30">
                    {load}%
                  </span>
                </div>
              </div>

              <input
                id="loadSlider"
                type="range"
                min="5"
                max="100"
                value={load}
                onChange={(e) => setLoad(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#9DCB16] focus:outline-none"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-1">
                <span>0% (IDLE / NO-LOAD)</span>
                <span>50% (NOMINAL WORKLOAD)</span>
                <span>100% (EXTREME HEAVY SHIFT)</span>
              </div>
            </div>

            {/* Live Readout Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
              {/* RPM Gauge */}
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
                  <Gauge className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span className="text-[10px] font-mono uppercase">{t.simulator.rpmLabel}</span>
                </div>
                <span className="text-xl sm:text-2xl font-black font-mono text-white">
                  {rpm.toLocaleString()}
                </span>
                <span className="block text-[9px] text-slate-500 font-mono mt-0.5">RPM</span>
              </div>

              {/* Temperature Gauge */}
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
                  <Flame className={`w-3.5 h-3.5 ${temp > 70 ? 'text-amber-500' : 'text-[#9DCB16]'}`} />
                  <span className="text-[10px] font-mono uppercase">{t.simulator.tempLabel}</span>
                </div>
                <span className={`text-xl sm:text-2xl font-black font-mono ${temp > 70 ? 'text-amber-400' : 'text-white'}`}>
                  {temp}°C
                </span>
                <span className="block text-[9px] text-emerald-400 font-mono mt-0.5">SAFE &lt; 95°C</span>
              </div>

              {/* Instant Torque */}
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#9DCB16]" />
                  <span className="text-[10px] font-mono uppercase">{t.simulator.torqueLabel}</span>
                </div>
                <span className="text-xl sm:text-2xl font-black font-mono text-[#9DCB16]">
                  {currentTorque}
                </span>
                <span className="block text-[9px] text-slate-500 font-mono mt-0.5">N.m PEAK</span>
              </div>

              {/* Efficiency */}
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
                  <Activity className="w-3.5 h-3.5 text-lime-400" />
                  <span className="text-[10px] font-mono uppercase">{t.simulator.efficiencyLabel}</span>
                </div>
                <span className="text-xl sm:text-2xl font-black font-mono text-lime-400">
                  {brushlessEfficiency}%
                </span>
                <span className="block text-[9px] text-slate-500 font-mono mt-0.5">CLASS A+++</span>
              </div>
            </div>

            {/* Side-by-side Efficiency Comparison Bar */}
            <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
              <h4 className="text-xs font-bold font-mono tracking-wider text-slate-300 uppercase">
                {t.simulator.brushlessVsCarbon}
              </h4>

              {/* DRAWOLT Brushless Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#9DCB16] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>DRAWOLT Core-Drive Brushless</span>
                  </span>
                  <span className="font-black font-mono text-[#9DCB16]">{brushlessEfficiency}% Efficiency</span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-[#9DCB16] to-lime-400 rounded-full transition-all duration-300"
                    style={{ width: `${brushlessEfficiency}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400">{t.simulator.brushlessAdvantage}</p>
              </div>

              {/* Conventional Carbon Brush Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Standard Carbon-Brush Motor (Conventional)</span>
                  </span>
                  <span className="font-black font-mono text-amber-500">{carbonEfficiency}% Efficiency</span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${carbonEfficiency}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500">{t.simulator.carbonDrawback}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
