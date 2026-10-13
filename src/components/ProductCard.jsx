import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, onLearnMore }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col group h-full">
      {/* Product Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={`Akash Industries - ${product.title}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700">
          {product.category}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
            {product.title}
          </h3>
          
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Key Sample Features */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
              Sample Highlights:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {product.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onLearnMore(product)}
            className="w-full inline-flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-orange-600 hover:text-orange-700 py-1 transition-colors group/btn cursor-pointer"
            aria-label={`Learn more about ${product.title}`}
          >
            <span>Learn More & Specifications</span>
            <span className="w-7 h-7 rounded-full bg-slate-100 group-hover/btn:bg-orange-100 flex items-center justify-center transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover/btn:text-orange-600 group-hover/btn:translate-x-0.5 transition-all" />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
