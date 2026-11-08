import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'DRAWOLT Industrial Tools | ابزارآلات صنعتی دراوولت',
  description: 'پرتال رسمی و بین‌المللی ابزارآلات صنعتی و قدرتی برند دراوولت (DRAWOLT) با پشتیبانی ۴ زبانه، دستیار هوش مصنوعی راماکس و سیستم خدمات پس از فروش ۱۸ ماهه',
  openGraph: {
    title: 'DRAWOLT Industrial Tools | ابزارآلات صنعتی دراوولت',
    description: 'ابزارآلات صنعتی و قدرتی فوق‌سنگین دراوولت (DRAWOLT) با گشتاور ۹۸۰ نیوتن‌متر، پلتفرم باتری DRA-Power و ۱۸ ماه گارانتی طلایی تعویض',
    type: 'website',
    locale: 'fa_IR',
    alternateLocale: ['en_US', 'ar_AE', 'de_DE'],
    siteName: 'DRAWOLT Industrial Tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRAWOLT Industrial Tools | دراوولت',
    description: 'ابزارآلات صنعتی فوق‌سنگین دراوولت با موتور براشلس دیجیتال و پلتفرم باتری ۲۰ ولت و ۴۰ ولت',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-[#080C14] text-slate-900 dark:text-slate-100 font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
