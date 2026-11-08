'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import { Product } from '@/lib/products';
import { ProductVisual } from './ProductVisual';
import {
  X,
  Trash2,
  Printer,
  FileCheck2,
  Building,
  User,
  Phone,
  FileText,
  Shield,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function InquiryDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: InquiryDrawerProps) {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  if (!isOpen) return null;

  const totalUnits = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm">
      <div className={`fixed inset-y-0 max-w-full flex ${isRtl ? 'left-0' : 'right-0'}`}>
        <div
          className="w-screen max-w-md sm:max-w-xl bg-slate-900 border-x border-slate-800 shadow-2xl flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-[#9DCB16]" />
              <h2 className="text-base font-black text-white">{t.inquiry.title}</h2>
              <span className="text-xs font-mono font-bold text-[#9DCB16] bg-[#9DCB16]/10 px-2 py-0.5 rounded">
                {totalUnits} {lang === 'fa' ? 'دستگاه' : 'Units'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <FileText className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-sm font-bold text-slate-400">{t.inquiry.emptyCart}</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  {t.inquiry.emptyCartPrompt}
                </p>
              </div>
            ) : (
              <>
                {/* List of items in cart */}
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-3"
                    >
                      <div className="w-16 h-16 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center flex-shrink-0">
                        <ProductVisual type={product.iconType} voltage={product.voltage} model={product.model} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-[#9DCB16]">
                            {product.model}
                          </span>
                          <button
                            onClick={() => onRemoveItem(product.id)}
                            className="text-slate-500 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">{product.name[lang]}</h4>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {product.voltage} • {product.torque || product.speed}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono font-black text-white px-2">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Company & Purchaser Details Form */}
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-mono font-bold text-slate-300 uppercase">
                    {lang === 'fa' ? 'مشخصات خریدار جهت صدور پیش‌فاکتور' : 'Purchaser Information'}
                  </h3>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      {t.inquiry.customerName} *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={lang === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                      className="w-full py-2 px-3 bg-slate-900 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        {t.inquiry.companyName}
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={lang === 'fa' ? 'نام شرکت / کارگاه' : 'Company Name'}
                        className="w-full py-2 px-3 bg-slate-900 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        {t.inquiry.phone} *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912..."
                        className="w-full py-2 px-3 bg-slate-900 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      {t.inquiry.notes}
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={lang === 'fa' ? 'توضیحات و نیازمندی‌های فاز تحویل کالا...' : 'Delivery constraints or specifications...'}
                      className="w-full py-2 px-3 bg-slate-900 text-xs text-white rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Official Quotation Modal / Preview */}
                {showInvoicePreview && (
                  <div className="p-5 bg-white text-slate-900 rounded-xl shadow-2xl space-y-4 font-sans border-4 border-[#9DCB16] print:m-0 print:border-none">
                    {/* Invoice Header */}
                    <div className="flex justify-between items-start border-b-2 border-slate-900 pb-3">
                      <div>
                        <span className="text-xl font-black tracking-tight text-slate-950">
                          DRAWOLT <span className="text-[#9DCB16]">TOOLS</span>
                        </span>
                        <p className="text-[10px] font-bold text-slate-600">
                          {t.inquiry.invoiceSubtitle}
                        </p>
                      </div>
                      <div className="text-end text-[10px] font-mono">
                        <span className="font-bold block">INVOICE: #DW-2026-9041</span>
                        <span>DATE: 2026-11-08</span>
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="text-xs space-y-1 bg-slate-50 p-2.5 rounded border border-slate-200">
                      <p>
                        <span className="font-bold">{lang === 'fa' ? 'خریدار:' : 'Client:'} </span>
                        {customerName || (lang === 'fa' ? 'خریدار سازمانی محترم' : 'Corporate Client')}
                      </p>
                      {companyName && (
                        <p>
                          <span className="font-bold">{lang === 'fa' ? 'شرکت / واحد صنعتی:' : 'Company:'} </span>
                          {companyName}
                        </p>
                      )}
                      {phone && (
                        <p>
                          <span className="font-bold">{lang === 'fa' ? 'شماره تماس:' : 'Phone:'} </span>
                          <span dir="ltr">{phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Itemized Table */}
                    <table className="w-full text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-2 text-start">{lang === 'fa' ? 'ردیف' : '#'}</th>
                          <th className="p-2 text-start">{lang === 'fa' ? 'شرح کالا و مدل' : 'Item Description'}</th>
                          <th className="p-2 text-center">{lang === 'fa' ? 'تعداد' : 'Qty'}</th>
                          <th className="p-2 text-end">{lang === 'fa' ? 'گارانتی' : 'Warranty'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {items.map((it, idx) => (
                          <tr key={it.product.id}>
                            <td className="p-2 font-mono">{idx + 1}</td>
                            <td className="p-2">
                              <span className="font-bold block">{it.product.model}</span>
                              <span className="text-[10px] text-slate-600">{it.product.name[lang]}</span>
                            </td>
                            <td className="p-2 text-center font-bold font-mono">{it.quantity}</td>
                            <td className="p-2 text-end text-[10px] text-emerald-700 font-bold">
                              {lang === 'fa' ? '۱۸ ماه طلایی' : '18M Golden'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Stamp and Seal */}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-300">
                      <div className="w-24 h-24 rounded-full border-2 border-red-700 text-red-700 p-2 flex flex-col items-center justify-center text-center rotate-[-12deg] opacity-85 select-none">
                        <span className="text-[8px] font-bold">DRAWOLT TOOLS INC</span>
                        <span className="text-[7px] font-black">مهر رسمی بازرگانی</span>
                        <span className="text-[7px]">APPROVED 2026</span>
                      </div>

                      <button
                        onClick={handlePrint}
                        className="px-4 py-2 bg-slate-950 text-white rounded text-xs font-bold flex items-center gap-1.5"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>{lang === 'fa' ? 'پرینت / دانلود پیش‌فاکتور' : 'Print Invoice'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/70 space-y-3">
              <button
                onClick={() => setShowInvoicePreview(!showInvoicePreview)}
                className="w-full py-3 bg-[#9DCB16] hover:bg-[#8bb413] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-[#9DCB16]/20 transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>
                  {showInvoicePreview
                    ? (lang === 'fa' ? 'بستن پیش‌نمایش پیش‌فاکتور' : 'Hide Quotation')
                    : t.inquiry.btnGenerateInvoice}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
