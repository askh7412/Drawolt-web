'use client';

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@/lib/themeContext';
import { PRODUCTS, Product } from '@/lib/products';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrushlessSimulator } from '@/components/BrushlessSimulator';
import { ProductCatalog } from '@/components/ProductCatalog';
import { BatteryEcosystem } from '@/components/BatteryEcosystem';
import { SmartToolAdvisor } from '@/components/SmartToolAdvisor';
import { WarrantyChecker } from '@/components/WarrantyChecker';
import { DealerNetwork } from '@/components/DealerNetwork';
import { InteractiveDealerMap } from '@/components/InteractiveDealerMap';
import { CuttingDiscsSpotlight } from '@/components/CuttingDiscsSpotlight';
import { DealerPortalModal } from '@/components/DealerPortalModal';
import { Footer } from '@/components/Footer';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { ToolComparisonModal } from '@/components/ToolComparisonModal';
import { InquiryDrawer, CartItem } from '@/components/InquiryDrawer';
import { CatalogModal } from '@/components/CatalogModal';
import { PuzzleRayanehModal } from '@/components/PuzzleRayanehModal';
import { RamaxAI } from '@/components/RamaxAI';
import { SEOHead } from '@/components/SEOHead';

function MainApp() {
  const { theme, lang, isRtl } = useTheme();

  // Inquiry Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 2 }, // Default sample flagship DW-9820-PRO
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Comparison State
  const [comparedProducts, setComparedProducts] = useState<Product[]>([PRODUCTS[0], PRODUCTS[3]]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Modals & Panels
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [isDealerPortalOpen, setIsDealerPortalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleAddPackageToCart = (products: Product[]) => {
    setCartItems((prev) => {
      let updated = [...prev];
      products.forEach((p) => {
        const existingIndex = updated.findIndex((i) => i.product.id === p.id);
        if (existingIndex > -1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + 1,
          };
        } else {
          updated.push({ product: p, quantity: 1 });
        }
      });
      return updated;
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Compare operations
  const handleToggleCompare = (product: Product) => {
    setComparedProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert(
          lang === 'fa'
            ? 'حداکثر ۴ ابزار را می‌توانید همزمان مقایسه نمایید.'
            : 'You can compare up to 4 tools simultaneously.'
        );
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const scrollToWarranty = () => {
    const el = document.getElementById('warranty');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080C14] text-slate-900 dark:text-slate-100 selection:bg-[#9DCB16] selection:text-slate-950 transition-colors duration-200">
      <SEOHead />

      {/* Global Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, c) => acc + c.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        comparisonCount={comparedProducts.length}
        onOpenDealerPortal={() => setIsDealerPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenCatalog={() => setIsCatalogOpen(true)}
          onOpenWarranty={scrollToWarranty}
          onOpenDealerPortal={() => setIsDealerPortalOpen(true)}
        />

        <BrushlessSimulator />

        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onToggleCompare={handleToggleCompare}
          comparedProductIds={comparedProducts.map((p) => p.id)}
          onAddToCart={handleAddToCart}
          cartProductIds={cartItems.map((i) => i.product.id)}
        />

        {/* Specialized Focus: Extreme Cutting Discs & Profile Wheels */}
        <CuttingDiscsSpotlight
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          cartProductIds={cartItems.map((i) => i.product.id)}
        />

        <BatteryEcosystem />

        <SmartToolAdvisor onAddPackageToCart={handleAddPackageToCart} />

        {/* Interactive Dealership Map of Iran */}
        <InteractiveDealerMap />

        <WarrantyChecker />

        <DealerNetwork />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
        onOpenWarranty={scrollToWarranty}
        onOpenCatalog={() => setIsCatalogOpen(true)}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cartItems.some((i) => i.product.id === selectedProduct.id) : false}
      />

      <ToolComparisonModal
        products={isComparisonOpen ? comparedProducts : []}
        onClose={() => setIsComparisonOpen(false)}
        onRemoveProduct={handleRemoveFromCompare}
        onAddToCart={handleAddToCart}
        cartProductIds={cartItems.map((i) => i.product.id)}
      />

      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />

      {/* Prestigious B2B Dealer Portal Modal */}
      <DealerPortalModal
        isOpen={isDealerPortalOpen}
        onClose={() => setIsDealerPortalOpen(false)}
        onAddProductToInquiry={(product) => handleAddToCart(product)}
      />

      <PuzzleRayanehModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />

      {/* Floating Ramax AI Assistant */}
      <RamaxAI />
    </div>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
