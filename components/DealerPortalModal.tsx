'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/lib/themeContext';
import { PRODUCTS, Product } from '@/lib/products';
import {
  X,
  ShieldCheck,
  Building2,
  Lock,
  Unlock,
  Edit3,
  Save,
  Printer,
  Download,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Percent,
  Search,
  RefreshCw,
  Plus,
} from 'lucide-react';

interface DealerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProductToInquiry: (product: Product, quantity?: number) => void;
}

export function DealerPortalModal({ isOpen, onClose, onAddProductToInquiry }: DealerPortalModalProps) {
  const { lang, isRtl } = useTheme();

  // Authentication state for prestigious feeling
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [dealerCode, setDealerCode] = useState('DW-704-IR');

  // Product price table state (editable & persistent)
  const [productsList, setProductsList] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('drawolt_dealer_prices');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return PRODUCTS.map((item) => {
            if (parsed[item.id]) {
              return {
                ...item,
                dealerPriceToman: parsed[item.id].dealerPrice,
                retailPriceToman: parsed[item.id].retailPrice,
              };
            }
            return item;
          });
        } catch {
          // Fallback to defaults
        }
      }
    }
    return PRODUCTS;
  });
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [tempDealerPrice, setTempDealerPrice] = useState<number>(0);
  const [tempRetailPrice, setTempRetailPrice] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleStartEdit = (product: Product) => {
    setEditingProductId(product.id);
    setTempDealerPrice(product.dealerPriceToman);
    setTempRetailPrice(product.retailPriceToman);
  };

  const handleSavePrice = (productId: string) => {
    setProductsList((prev) => {
      const updated = prev.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            dealerPriceToman: Number(tempDealerPrice),
            retailPriceToman: Number(tempRetailPrice),
          };
        }
        return p;
      });

      // Persist in localStorage
      if (typeof window !== 'undefined') {
        const priceMap: Record<string, { dealerPrice: number; retailPrice: number }> = {};
        updated.forEach((item) => {
          priceMap[item.id] = {
            dealerPrice: item.dealerPriceToman,
            retailPrice: item.retailPriceToman,
          };
        });
        localStorage.setItem('drawolt_dealer_prices', JSON.stringify(priceMap));
      }

      return updated;
    });

    setEditingProductId(null);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 3000);
  };

  const filteredProducts = productsList.filter((p) => {
    const matchesSearch =
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('fa-IR').format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-6xl bg-white dark:bg-[#0E1526] border-2 border-slate-300 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Serious Prestige Header */}
        <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#9DCB16]/20 border border-[#9DCB16] rounded-xl text-[#9DCB16]">
              <Building2 className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-tight uppercase">
                  DRAWOLT B2B PORTAL
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#9DCB16] text-slate-950 rounded">
                  PORTAL v4.2
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>ENCRYPTED CENTRAL LINK</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'fa'
                  ? 'سامانه اختصاصی مدیریت قیمت‌های همکار و عاملیت‌های رسمی سراسر کشور'
                  : 'Official Authorized Dealership B2B Price & Margin Portal'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-end text-xs font-mono text-slate-300">
              <span className="font-bold text-[#9DCB16]">AUTHORIZED HUB: DW-DLR-704</span>
              <span className="text-[11px] text-slate-400">STATUS: PLATINUM PARTNER</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              aria-label="Close Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portal Filter & Action Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 flex-1 max-w-xl">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'fa' ? 'جستجوی مدل یا نام کالا در پنل...' : 'Search model in dealer list...'}
                className={`w-full py-2 px-3 text-xs bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-[#9DCB16] ${
                  isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
                }`}
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="py-2 px-3 text-xs bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
            >
              <option value="all">{lang === 'fa' ? 'همه دسته‌بندی‌ها' : 'All Categories'}</option>
              <option value="cordless_power">{lang === 'fa' ? 'ابزارآلات برقی و شارژی' : 'Power Tools'}</option>
              <option value="woodworking">{lang === 'fa' ? 'ابزارآلات نجاری و درودگری' : 'Woodworking'}</option>
              <option value="metal_welding">{lang === 'fa' ? 'آهنگری و جوشکاری' : 'Metal & Welding'}</option>
              <option value="pumps_generators">{lang === 'fa' ? 'موتور برق و پمپ آب' : 'Pumps & Generators'}</option>
              <option value="discs_abrasives">{lang === 'fa' ? 'صفحات برش و پروفیل‌بر' : 'Cutting Discs'}</option>
              <option value="pneumatic">{lang === 'fa' ? 'ابزارآلات بادی و کمپرسور' : 'Pneumatic'}</option>
              <option value="hand_tools">{lang === 'fa' ? 'ابزارآلات دستی' : 'Hand Tools'}</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            {saveSuccessMsg && (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'fa' ? 'قیمت با موفقیت ثبت شد!' : 'Prices Saved!'}</span>
              </span>
            )}

            <button
              onClick={() => window.print()}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#9DCB16]" />
              <span>{lang === 'fa' ? 'چاپ لیست قیمت همکار' : 'Print Price Sheet'}</span>
            </button>
          </div>
        </div>

        {/* Live Editable B2B Price Matrix Table */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <table className="w-full text-start text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-800">
                <th className="p-3 text-start font-mono font-bold w-12">#</th>
                <th className="p-3 text-start font-bold min-w-[200px]">{lang === 'fa' ? 'مدل و نام کالا' : 'Product Model'}</th>
                <th className="p-3 text-start font-bold">{lang === 'fa' ? 'دسته‌بندی' : 'Category'}</th>
                <th className="p-3 text-end font-bold min-w-[150px]">{lang === 'fa' ? 'قیمت همکار (تومان)' : 'Dealer Price'}</th>
                <th className="p-3 text-end font-bold min-w-[150px]">{lang === 'fa' ? 'مصرف‌کننده مصوب (تومان)' : 'Retail Price'}</th>
                <th className="p-3 text-center font-bold">{lang === 'fa' ? 'سود عاملیت' : 'Margin %'}</th>
                <th className="p-3 text-center font-bold">{lang === 'fa' ? 'وضعیت انبار' : 'Stock'}</th>
                <th className="p-3 text-center font-bold w-28">{lang === 'fa' ? 'اقدام' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-sans">
              {filteredProducts.map((p, idx) => {
                const isEditing = editingProductId === p.id;
                const margin = Math.round(
                  ((p.retailPriceToman - p.dealerPriceToman) / p.retailPriceToman) * 100
                );

                return (
                  <tr
                    key={p.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${
                      isEditing ? 'bg-amber-50/80 dark:bg-amber-950/20' : ''
                    }`}
                  >
                    <td className="p-3 font-mono text-slate-400">{idx + 1}</td>

                    <td className="p-3">
                      <span className="font-mono font-black text-slate-900 dark:text-white block">
                        {p.model}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {p.name[lang]}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {p.category.replace('_', ' ')}
                      </span>
                    </td>

                    {/* Dealer Wholesale Price */}
                    <td className="p-3 text-end font-mono">
                      {isEditing ? (
                        <input
                          type="number"
                          value={tempDealerPrice}
                          onChange={(e) => setTempDealerPrice(Number(e.target.value))}
                          className="w-28 py-1 px-2 text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-[#9DCB16] rounded text-end text-[#7ca010] dark:text-[#9DCB16] focus:outline-none"
                        />
                      ) : (
                        <span className="font-bold text-sm text-[#7ca010] dark:text-[#9DCB16]">
                          {formatPrice(p.dealerPriceToman)}
                        </span>
                      )}
                    </td>

                    {/* Retail Consumer Price */}
                    <td className="p-3 text-end font-mono">
                      {isEditing ? (
                        <input
                          type="number"
                          value={tempRetailPrice}
                          onChange={(e) => setTempRetailPrice(Number(e.target.value))}
                          className="w-28 py-1 px-2 text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-slate-400 rounded text-end text-slate-900 dark:text-white focus:outline-none"
                        />
                      ) : (
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {formatPrice(p.retailPriceToman)}
                        </span>
                      )}
                    </td>

                    {/* Profit Margin */}
                    <td className="p-3 text-center font-mono">
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 text-xs font-black rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>{margin}%</span>
                      </span>
                    </td>

                    {/* Stock Status */}
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          p.stockStatus === 'in_stock'
                            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                            : p.stockStatus === 'incoming'
                            ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300'
                            : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300'
                        }`}
                      >
                        {p.stockStatus === 'in_stock'
                          ? (lang === 'fa' ? 'موجود در انبار' : 'In Stock')
                          : p.stockStatus === 'incoming'
                          ? (lang === 'fa' ? 'رسیدن بار جدید' : 'Incoming')
                          : (lang === 'fa' ? 'محدود' : 'Limited')}
                      </span>
                    </td>

                    {/* Action: Edit Price or Add to Inquiry */}
                    <td className="p-3 text-center">
                      {isEditing ? (
                        <button
                          onClick={() => handleSavePrice(p.id)}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold flex items-center gap-1 mx-auto"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{lang === 'fa' ? 'ثبت' : 'Save'}</span>
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => handleStartEdit(p)}
                            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded transition-colors"
                            title={lang === 'fa' ? 'ویرایش و درج قیمت روز' : 'Update Price'}
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => onAddProductToInquiry(p, p.minOrderQty)}
                            className="p-1.5 text-[#7ca010] dark:text-[#9DCB16] bg-[#9DCB16]/10 hover:bg-[#9DCB16]/20 rounded transition-colors"
                            title={lang === 'fa' ? 'افزودن به پیش‌فاکتور رسمی' : 'Add to Draft Quote'}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Prestige Portal Footer */}
        <div className="p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span>DRAWOLT CENTRAL LOGISTICS & COMMERCE</span>
            <span>•</span>
            <span>MINIMUM CARTON ORDER APPLIES</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                localStorage.removeItem('drawolt_dealer_prices');
                setProductsList(PRODUCTS);
                alert(lang === 'fa' ? 'قیمت‌های کارخانه مجدداً بازیابی گردید.' : 'Prices reset to factory defaults.');
              }}
              className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded font-sans text-xs flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{lang === 'fa' ? 'بازنشانی به قیمت‌های پایه کارخانه' : 'Reset Defaults'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
