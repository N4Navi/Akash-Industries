import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { PRODUCTS_DATA } from '../data/content';
import { Layers, ArrowDownRight } from 'lucide-react';

export default function Products({ onInquireProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleInquire = (productTitle) => {
    if (onInquireProduct) {
      onInquireProduct(productTitle);
    }
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-300">
            <Layers className="w-3.5 h-3.5 text-orange-600" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Products & Manufacturing Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From single-component prototyping to batch production runs, our workshop delivers mechanical hardware tailored to industrial performance standards.
          </p>
          <p className="text-xs text-slate-500 italic">
            * Sample Product Portfolio: Categories and parameters represent typical engineering production scope.
          </p>
        </div>

        {/* Product Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop or 2x2 grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 items-stretch">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* Bottom Capabilities Banner */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
              <ArrowDownRight className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Have custom drawings or non-standard dimensions?
              </h4>
              <p className="text-xs text-slate-600">
                We accept 2D PDF blueprints, STEP/IGES CAD files, or physical reference samples for custom quote assessment.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Submit Technical Specs
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onInquire={handleInquire}
        />
      )}
    </section>
  );
}
