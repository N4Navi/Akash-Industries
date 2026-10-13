import React, { useEffect } from 'react';
import { X, CheckCircle2, Sliders, Mail } from 'lucide-react';


export default function ProductModal({ product, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 transform transition-all my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Bar */}
        <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 bg-slate-900/70 px-2.5 py-1 rounded border border-slate-700/80">
              {product.category}
            </span>
            <h3 id="modal-title" className="text-2xl font-bold mt-2">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
              Category Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.fullDesc}
            </p>
          </div>

          {/* Sample Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
              Sample Production Scope & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Specifications Box */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Sliders className="w-4 h-4 text-slate-700" />
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800">
                Sample Technical Parameters
              </h4>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specifications).map(([key, value]) => {
                const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                return (
                  <div key={key} className="bg-white p-2.5 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">{readableKey}</dt>
                    <dd className="text-slate-900 font-semibold mt-0.5">{value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Demo notice */}
          <div className="text-[11px] text-slate-500 italic bg-amber-50/70 border border-amber-200 p-2.5 rounded text-center">
            * Note: These are representative sample parameters for prototype and demonstration purposes. Custom engineering requirements are evaluated per blueprint.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Close Window
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onInquire) onInquire(product.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Inquire About {product.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
