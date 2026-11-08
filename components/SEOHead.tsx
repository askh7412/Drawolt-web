'use client';

import React from 'react';
import { useTheme } from '@/lib/themeContext';

export function SEOHead() {
  const { lang } = useTheme();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DRAWOLT Industrial Tools',
    alternateName: ['دراوولت', 'DRAWOLT', 'ابزارآلات صنعتی دراوولت'],
    url: 'https://drawolt-tools.com',
    logo: 'https://drawolt-tools.com/logo.png',
    description:
      'تولیدکننده و توزیع‌کننده رسمی ابزارآلات صنعتی و قدرتی فوق‌سنگین شارژی و برقی با فناوری موتورهای براشلس و گارانتی طلایی ۱۸ ماهه تعویض',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-66749000',
      contactType: 'customer service',
      areaServed: ['IR', 'AE', 'DE', 'Global'],
      availableLanguage: ['Persian', 'English', 'Arabic', 'German'],
    },
  };

  const hardwareStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    name: 'DRAWOLT Central Hardware & Service Hub',
    image: 'https://drawolt-tools.com/hub.jpg',
    telephone: '+98-21-66749000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hasan Abad Sq., Imam Khomeini St.',
      addressLocality: 'Tehran',
      addressCountry: 'IR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
        opens: '08:30',
        closes: '18:30',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'قوی‌ترین آچار بکس شارژی دراوولت (DRAWOLT) کدام مدل است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'مدل پرچمدار DW-9820-PRO با گشتاور خروجی ۹۸۰ نیوتن‌متر، موتور دیجیتال براشلس ۳۲ قطبی، سندان فولاد کروم-مولیبدن و سنسور توقف خودکار هنگام باز شدن مهره قوی‌ترین بکس دراوولت است.',
        },
      },
      {
        '@type': 'Question',
        name: 'شرایط گارانتی طلایی ۱۸ ماهه دراوولت چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'کلیه ابزارآلات دراوولت دارای ۱۸ ماه گارانتی تعویض بی قید و شرط قطعات اصلی شامل آرمیچر، بالشتک، برد هوشمند ESC و گیربکس بدون معطلی در تمامی نمایندگی‌های سراسر کشور هستند.',
        },
      },
      {
        '@type': 'Question',
        name: 'مزیت موتور براشلس نسبت به موتورهای زغالی سنتی چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'موتورهای براشلس دراوولت با راندمان ۹۲٪، بدون جرقه و بدون فرسایش زغال، ۳ برابر طول عمر بیشتری دارند و حرارت تولیدی آن‌ها به شکل چشمگیری پایین‌تر است.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hardwareStoreSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
