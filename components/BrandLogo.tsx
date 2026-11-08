'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';

import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
}

export function BrandLogo({ className = '', showTagline = true, size = 'md', iconOnly = false }: BrandLogoProps) {
  const { theme, lang } = useTheme();
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const heightsPx = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
  };

  const widthsPx = {
    sm: 110,
    md: 140,
    lg: 190,
    xl: 250,
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {!imgError ? (
        <div className="relative flex items-center group">
          <Image
            src="/assets/aistudio/DRAWOLT_ebd04318.webp"
            alt="DRAWOLT Industrial Tools | ابزارآلات صنعتی دراوولت"
            width={widthsPx[size]}
            height={heightsPx[size]}
            priority
            referrerPolicy="no-referrer"
            className={`${heights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_2px_10px_rgba(157,203,22,0.25)]`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Fallback SVG representation */
        <div className="flex items-center gap-2">
          <svg width={heightsPx[size]} height={heightsPx[size]} viewBox="0 0 100 100" fill="none">
            <polygon points="50,4 88,24 88,74 50,96 12,74 12,24" fill="#1E2738" stroke="#9DCB16" strokeWidth="4" />
            <path d="M 32 30 L 54 30 C 68 30 74 38 74 50 C 74 62 67 70 53 70 L 32 70 Z" fill="none" stroke="#9DCB16" strokeWidth="4" />
            <polygon points="55,42 62,44 56,47" fill="#B6E522" />
          </svg>
          {!iconOnly && (
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-wider text-slate-900 dark:text-white">
                DRAW<span className="text-[#9DCB16]">OLT</span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
