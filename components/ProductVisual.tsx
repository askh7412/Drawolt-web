'use client';

import React from 'react';

interface ProductVisualProps {
  type:
    | 'wrench'
    | 'grinder'
    | 'hammer'
    | 'drill'
    | 'laser'
    | 'saw'
    | 'battery'
    | 'charger'
    | 'pump'
    | 'generator'
    | 'disc'
    | 'welder'
    | 'compressor'
    | 'pliers';
  className?: string;
  voltage?: string;
  torque?: string;
  model?: string;
}

export function ProductVisual({ type, className = '', voltage = '20V', torque, model }: ProductVisualProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
      {/* Background technical blueprint grid & glow */}
      <div className="absolute inset-0 bg-radial from-[#9DCB16]/10 via-transparent to-transparent opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(#9DCB16 1px, transparent 1px), linear-gradient(90deg, #9DCB16 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Model & Voltage Tech Tags in Corners */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#9DCB16] text-[#0F172A] rounded-sm shadow-sm">
          {voltage || 'DRAWOLT'}
        </span>
        {torque && (
          <span className="px-1.5 py-0.5 text-[9px] font-bold bg-slate-900/80 text-[#9DCB16] border border-[#9DCB16]/30 rounded-sm">
            {torque}
          </span>
        )}
      </div>

      {model && (
        <div className="absolute top-3 right-3 z-10 text-[9px] font-mono tracking-widest text-slate-500">
          {model}
        </div>
      )}

      {/* High-Fidelity Vector Illustrations */}
      <div className="relative z-10 w-full max-w-[280px] h-[190px] flex items-center justify-center transition-transform duration-500 hover:scale-105">
        {type === 'wrench' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="75" y="145" width="85" height="42" rx="6" fill="#181F2E" stroke="#9DCB16" strokeWidth="2.5" />
            <rect x="85" y="150" width="65" height="6" rx="2" fill="#9DCB16" />
            <line x1="85" y1="165" x2="145" y2="165" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="135" y="157" width="18" height="6" rx="1" fill="#9DCB16" opacity="0.8" />
            <path d="M 105 85 L 115 145 L 135 145 L 128 85 Z" fill="#0F172A" />
            <path d="M 107 95 Q 120 110 112 135" stroke="#9DCB16" strokeWidth="3" fill="none" />
            <line x1="110" y1="102" x2="124" y2="102" stroke="#475569" strokeWidth="2" />
            <line x1="112" y1="114" x2="126" y2="114" stroke="#475569" strokeWidth="2" />
            <path d="M 103 98 L 95 106 L 104 112 Z" fill="#9DCB16" />
            <rect x="75" y="48" width="100" height="45" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <path d="M 85 52 L 165 52 L 155 60 L 85 60 Z" fill="#9DCB16" />
            <line x1="90" y1="68" x2="115" y2="68" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <rect x="125" y="66" width="42" height="18" rx="3" fill="#0F172A" stroke="#9DCB16" strokeWidth="1" />
            <text x="146" y="79" fill="#9DCB16" fontSize="8" fontWeight="bold" textAnchor="middle">CORE 980</text>
            <path d="M 175 52 L 225 60 L 225 82 L 175 90 Z" fill="#64748B" stroke="#94A3B8" strokeWidth="2" />
            <rect x="225" y="64" width="28" height="14" rx="2" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="238" cy="71" r="2.5" fill="#9DCB16" />
            <ellipse cx="225" cy="71" rx="4" ry="12" fill="#9DCB16" opacity="0.6" />
          </svg>
        )}

        {type === 'grinder' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="40" y="85" width="145" height="38" rx="7" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <path d="M 45 88 L 175 88 L 165 94 L 45 94 Z" fill="#9DCB16" />
            <rect x="65" y="96" width="60" height="20" rx="3" fill="#0F172A" />
            <line x1="75" y1="100" x2="75" y2="112" stroke="#64748B" strokeWidth="2" />
            <line x1="85" y1="100" x2="85" y2="112" stroke="#64748B" strokeWidth="2" />
            <rect x="15" y="80" width="30" height="48" rx="5" fill="#181F2E" stroke="#9DCB16" strokeWidth="2" />
            <path d="M 185 80 L 225 80 L 235 105 L 185 115 Z" fill="#64748B" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="205" cy="88" r="4.5" fill="#9DCB16" />
            <path d="M 205 60 L 205 78" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
            <path d="M 215 65 C 255 70 270 120 235 155" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            <circle cx="225" cy="115" r="45" fill="#181F2E" stroke="#9DCB16" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="225" cy="115" r="14" fill="#64748B" stroke="#CBD5E1" strokeWidth="2" />
          </svg>
        )}

        {type === 'hammer' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="45" y="145" width="70" height="40" rx="5" fill="#181F2E" stroke="#9DCB16" strokeWidth="2" />
            <path d="M 75 80 L 60 100 L 60 145 L 85 145 L 85 105 L 105 80 Z" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <rect x="95" y="80" width="55" height="65" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <line x1="102" y1="95" x2="140" y2="95" stroke="#9DCB16" strokeWidth="2.5" />
            <rect x="100" y="55" width="95" height="42" rx="6" fill="#475569" stroke="#64748B" strokeWidth="2" />
            <circle cx="120" cy="72" r="8" fill="#1E293B" stroke="#9DCB16" strokeWidth="2" />
            <rect x="180" y="50" width="16" height="52" rx="3" fill="#1E293B" />
            <path d="M 188 102 L 188 150" stroke="#0F172A" strokeWidth="12" strokeLinecap="round" />
            <rect x="195" y="62" width="30" height="28" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <rect x="225" y="66" width="16" height="20" rx="3" fill="#9DCB16" />
            <rect x="241" y="73" width="48" height="6" fill="#94A3B8" />
          </svg>
        )}

        {type === 'drill' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="75" y="148" width="75" height="36" rx="5" fill="#181F2E" stroke="#9DCB16" strokeWidth="2" />
            <path d="M 100 85 L 110 148 L 128 148 L 122 85 Z" fill="#0F172A" />
            <path d="M 98 102 L 90 108 L 98 114 Z" fill="#9DCB16" />
            <rect x="70" y="50" width="90" height="42" rx="7" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <path d="M 75 54 L 150 54 L 140 60 L 75 60 Z" fill="#9DCB16" />
            <rect x="160" y="54" width="22" height="34" rx="3" fill="#334155" stroke="#9DCB16" strokeWidth="1.5" />
            <rect x="182" y="58" width="34" height="26" rx="3" fill="#64748B" stroke="#CBD5E1" strokeWidth="2" />
            <polygon points="216,64 228,68 228,74 216,78" fill="#0F172A" stroke="#9DCB16" strokeWidth="1" />
          </svg>
        )}

        {type === 'laser' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="100" y="55" width="90" height="90" rx="14" fill="#1E293B" stroke="#9DCB16" strokeWidth="2.5" />
            <rect x="95" y="50" width="20" height="20" rx="4" fill="#0F172A" />
            <rect x="175" y="50" width="20" height="20" rx="4" fill="#0F172A" />
            <rect x="120" y="32" width="50" height="25" rx="5" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <line x1="120" y1="44" x2="170" y2="44" stroke="#9DCB16" strokeWidth="3" />
            <circle cx="145" cy="100" r="24" fill="#0F172A" stroke="#9DCB16" strokeWidth="2" />
            <circle cx="145" cy="100" r="8" fill="#B6E522" className="animate-pulse" />
            <line x1="20" y1="44" x2="280" y2="44" stroke="#9DCB16" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
            <line x1="145" y1="10" x2="145" y2="190" stroke="#9DCB16" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
          </svg>
        )}

        {type === 'saw' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="50" y="145" width="180" height="10" rx="2" fill="#64748B" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 75 75 Q 115 50 145 75 L 135 125 L 85 125 Z" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <rect x="90" y="80" width="12" height="24" rx="3" fill="#9DCB16" />
            <path d="M 125 145 A 55 55 0 0 1 235 145 Z" fill="#334155" stroke="#9DCB16" strokeWidth="2" />
            <circle cx="180" cy="140" r="48" fill="#181F2E" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 2" />
            <circle cx="180" cy="140" r="14" fill="#9DCB16" />
          </svg>
        )}

        {/* SPECIAL NEW DISC VECTOR */}
        {type === 'disc' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Outer Abrasive Rim with high-speed rotation markers */}
            <circle cx="150" cy="100" r="76" fill="#181F2E" stroke="#334155" strokeWidth="2" />
            <circle cx="150" cy="100" r="74" fill="none" stroke="#9DCB16" strokeWidth="2.5" strokeDasharray="12 4" />
            
            {/* Inner Brand Ring Label */}
            <circle cx="150" cy="100" r="54" fill="#0F172A" stroke="#9DCB16" strokeWidth="1.5" />
            {/* Safety stripes in voltage neon */}
            <path d="M 115 100 L 185 100" stroke="#9DCB16" strokeWidth="16" opacity="0.15" />
            
            {/* Center Arbor Steel Hub */}
            <circle cx="150" cy="100" r="28" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="150" cy="100" r="14" fill="#0F172A" stroke="#9DCB16" strokeWidth="2" />
            
            {/* Text branding on disc */}
            <text x="150" y="76" fill="#9DCB16" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1.5">DRAWOLT EXTREME</text>
            <text x="150" y="130" fill="#CBD5E1" fontSize="7" fontWeight="bold" textAnchor="middle">EN 12413 • 80 m/s</text>
            
            {/* Rotation Arrow */}
            <path d="M 195 85 A 50 50 0 0 1 205 115" stroke="#9DCB16" strokeWidth="3" strokeLinecap="round" fill="none" />
            <polygon points="208,118 200,113 206,108" fill="#9DCB16" />
          </svg>
        )}

        {/* WATER PUMP VECTOR */}
        {type === 'pump' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Cast Base Support */}
            <rect x="75" y="145" width="150" height="15" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Electric Motor Body */}
            <rect x="80" y="75" width="85" height="70" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            {/* Motor Cooling Fins */}
            <line x1="90" y1="80" x2="90" y2="140" stroke="#9DCB16" strokeWidth="2" />
            <line x1="102" y1="80" x2="102" y2="140" stroke="#475569" strokeWidth="2" />
            <line x1="114" y1="80" x2="114" y2="140" stroke="#475569" strokeWidth="2" />
            <line x1="126" y1="80" x2="126" y2="140" stroke="#475569" strokeWidth="2" />
            <line x1="138" y1="80" x2="138" y2="140" stroke="#9DCB16" strokeWidth="2" />
            {/* Terminal Box on top */}
            <rect x="95" y="58" width="50" height="18" rx="3" fill="#0F172A" stroke="#9DCB16" strokeWidth="1.5" />
            
            {/* Centrifugal Pump Volute / Head */}
            <circle cx="195" cy="110" r="42" fill="#0F172A" stroke="#9DCB16" strokeWidth="2.5" />
            {/* Discharge Port (Top) */}
            <rect x="185" y="45" width="20" height="28" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
            <ellipse cx="195" cy="45" rx="10" ry="3" fill="#9DCB16" />
            {/* Suction Port (Front Center) */}
            <circle cx="195" cy="110" r="16" fill="#1E293B" stroke="#9DCB16" strokeWidth="2" />
            <text x="195" y="113" fill="#9DCB16" fontSize="7" fontWeight="bold" textAnchor="middle">1&quot; IN</text>
          </svg>
        )}

        {/* GENERATOR VECTOR */}
        {type === 'generator' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Suitcase Silent Enclosure Body */}
            <rect x="65" y="55" width="170" height="105" rx="16" fill="#1E293B" stroke="#9DCB16" strokeWidth="2.5" />
            {/* Carry Handle on Top */}
            <path d="M 105 55 L 105 40 Q 150 36 195 40 L 195 55" fill="none" stroke="#0F172A" strokeWidth="10" strokeLinecap="round" />
            <line x1="120" y1="42" x2="180" y2="42" stroke="#9DCB16" strokeWidth="2" />
            
            {/* Control Panel Area */}
            <rect x="145" y="70" width="75" height="75" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <circle cx="165" cy="88" r="8" fill="#334155" stroke="#9DCB16" strokeWidth="1.5" />
            <circle cx="195" cy="88" r="8" fill="#334155" stroke="#9DCB16" strokeWidth="1.5" />
            {/* Digital LED & USB */}
            <rect x="155" y="105" width="30" height="12" rx="2" fill="#1E293B" />
            <circle cx="195" cy="111" r="3" fill="#9DCB16" className="animate-pulse" />
            <rect x="155" y="123" width="10" height="6" fill="#9DCB16" />
            
            {/* Side Cooling Slits & Recoil Starter Housing */}
            <circle cx="105" cy="105" r="26" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <circle cx="105" cy="105" r="8" fill="#9DCB16" />
          </svg>
        )}

        {/* WELDER VECTOR */}
        {type === 'welder' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Inverter Box Body */}
            <rect x="65" y="60" width="170" height="95" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
            <path d="M 70 65 L 230 65 L 220 72 L 70 72 Z" fill="#9DCB16" />
            {/* Top Handle Strap */}
            <path d="M 105 60 Q 150 48 195 60" fill="none" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" />
            
            {/* Front Panel */}
            <rect x="140" y="75" width="85" height="70" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1" />
            {/* Digital Display */}
            <rect x="150" y="82" width="38" height="18" rx="2" fill="#181F2E" stroke="#9DCB16" strokeWidth="1" />
            <text x="169" y="95" fill="#9DCB16" fontSize="10" fontWeight="900" textAnchor="middle">250A</text>
            {/* Amperage Knob */}
            <circle cx="205" cy="91" r="9" fill="#334155" stroke="#9DCB16" strokeWidth="2" />
            {/* Dinse Cable Connectors (+ / -) */}
            <circle cx="160" cy="125" r="8" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" />
            <circle cx="195" cy="125" r="8" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            
            {/* Side Turbo Air Exhaust Grids */}
            <line x1="80" y1="85" x2="125" y2="85" stroke="#9DCB16" strokeWidth="2.5" />
            <line x1="80" y1="95" x2="125" y2="95" stroke="#475569" strokeWidth="2.5" />
            <line x1="80" y1="105" x2="125" y2="105" stroke="#475569" strokeWidth="2.5" />
            <line x1="80" y1="115" x2="125" y2="115" stroke="#475569" strokeWidth="2.5" />
          </svg>
        )}

        {/* COMPRESSOR VECTOR */}
        {type === 'compressor' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Air Tank Cylinder (Horizontal) */}
            <rect x="70" y="95" width="160" height="60" rx="26" fill="#1E293B" stroke="#9DCB16" strokeWidth="2.5" />
            {/* Wheels & Feet */}
            <circle cx="95" cy="165" r="14" fill="#0F172A" stroke="#9DCB16" strokeWidth="2" />
            <circle cx="95" cy="165" r="5" fill="#64748B" />
            <rect x="200" y="152" width="16" height="16" rx="2" fill="#0F172A" />
            
            {/* Dual Motor Pump Blocks on top */}
            <rect x="100" y="55" width="45" height="42" rx="5" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            <rect x="155" y="55" width="45" height="42" rx="5" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            {/* Air Filters */}
            <circle cx="92" cy="68" r="7" fill="#334155" stroke="#9DCB16" strokeWidth="1.5" />
            <circle cx="208" cy="68" r="7" fill="#334155" stroke="#9DCB16" strokeWidth="1.5" />
            
            {/* Pressure Gauges (Dual Gauges) */}
            <circle cx="150" cy="98" r="9" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="150" y1="98" x2="155" y2="93" stroke="#EF4444" strokeWidth="1.5" />
            <text x="150" y="132" fill="#9DCB16" fontSize="9" fontWeight="bold" textAnchor="middle">50L • 8 BAR</text>
          </svg>
        )}

        {/* PLIERS VECTOR */}
        {type === 'pliers' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            {/* Forged Steel Jaws */}
            <polygon points="150,30 135,65 145,72 150,45" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
            <polygon points="150,30 165,65 155,72 150,45" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
            {/* Serrated Gripping Teeth */}
            <line x1="147" y1="40" x2="153" y2="40" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="146" y1="46" x2="154" y2="46" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="145" y1="52" x2="155" y2="52" stroke="#0F172A" strokeWidth="1.5" />
            {/* High-Leverage Joint Pivot */}
            <circle cx="150" cy="74" r="10" fill="#334155" stroke="#9DCB16" strokeWidth="2.5" />
            <circle cx="150" cy="74" r="3" fill="#9DCB16" />
            
            {/* Ergonomic Two-Tone Rubber Handles */}
            <path d="M 142 82 Q 105 130 95 175" fill="none" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" />
            <path d="M 142 82 Q 105 130 95 175" fill="none" stroke="#9DCB16" strokeWidth="6" strokeLinecap="round" />
            <path d="M 158 82 Q 195 130 205 175" fill="none" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" />
            <path d="M 158 82 Q 195 130 205 175" fill="none" stroke="#9DCB16" strokeWidth="6" strokeLinecap="round" />
          </svg>
        )}

        {type === 'battery' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="65" y="55" width="170" height="95" rx="10" fill="#1E293B" stroke="#9DCB16" strokeWidth="3" />
            <rect x="75" y="65" width="24" height="75" rx="4" fill="#0F172A" />
            <rect x="200" y="65" width="24" height="75" rx="4" fill="#0F172A" />
            <line x1="110" y1="80" x2="190" y2="80" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <line x1="110" y1="95" x2="190" y2="95" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <rect x="110" y="125" width="14" height="7" rx="1.5" fill="#9DCB16" />
            <rect x="128" y="125" width="14" height="7" rx="1.5" fill="#9DCB16" />
            <rect x="146" y="125" width="14" height="7" rx="1.5" fill="#9DCB16" />
            <rect x="164" y="125" width="14" height="7" rx="1.5" fill="#9DCB16" />
            <rect x="95" y="42" width="110" height="15" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <text x="150" y="74" fill="#9DCB16" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="2">DRA-POWER 8.0Ah</text>
          </svg>
        )}

        {type === 'charger' && (
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <rect x="50" y="60" width="200" height="85" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
            <path d="M 55 65 L 245 65 L 235 72 L 65 72 Z" fill="#9DCB16" />
            <rect x="70" y="80" width="70" height="50" rx="6" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <circle cx="105" cy="115" r="4" fill="#9DCB16" className="animate-pulse" />
            <rect x="160" y="80" width="70" height="50" rx="6" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <circle cx="195" cy="115" r="4" fill="#9DCB16" className="animate-pulse" />
          </svg>
        )}
      </div>
    </div>
  );
}
