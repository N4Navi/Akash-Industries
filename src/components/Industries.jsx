import React from 'react';
import {
  Factory,
  Building2,
  Zap,
  Wrench,
  Truck,
  Boxes,
  Check,
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/content';

const iconMap = {
  Factory: Factory,
  Building2: Building2,
  Zap: Zap,
  Wrench: Wrench,
  Truck: Truck,
  Boxes: Boxes,
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            Markets & Sectors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our engineered parts and components support demanding operating environments across essential industrial sectors.
          </p>
          <p className="text-xs text-slate-500 italic">
            * Sample Industry Verticals: Illustrative application domains demonstrating engineering versatility.
          </p>
        </div>

        {/* Industries Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const IconComp = iconMap[ind.icon] || Factory;
            return (
              <div
                key={ind.id}
                className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-orange-50 text-slate-800 group-hover:text-orange-600 flex items-center justify-center mb-5 border border-slate-200 group-hover:border-orange-200 shadow-sm transition-colors duration-200">
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">
                    Key Applications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.keyDeliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        <Check className="w-3 h-3 text-orange-500 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
