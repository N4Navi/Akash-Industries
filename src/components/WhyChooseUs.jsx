import React from 'react';
import { Target, Users, Layers, TrendingUp, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/content';

const iconMap = {
  Target: Target,
  Users: Users,
  Layers: Layers,
  TrendingUp: TrendingUp,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Competitive Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Akash Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our manufacturing operations are built around rigorous quality controls, collaborative communication, and reliable production pipelines.
          </p>
          <p className="text-xs text-slate-400 italic">
            * Sample Capabilities: Features represent our operational focus and quality commitments.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const IconComp = iconMap[item.icon] || Target;
            return (
              <div
                key={item.id}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700/80 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700/60 group-hover:bg-orange-600/20 text-orange-400 flex items-center justify-center border border-slate-600 group-hover:border-orange-500/40 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-slate-700/70 pt-4">
                  <ul className="space-y-2">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Production Standards Banner */}
        <div className="mt-12 bg-slate-800/40 border border-slate-700/80 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Standard Operating Assurance
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              All production orders adhere to strict material verification protocols, documented inspection reports, and secure industrial transit packaging.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-orange-400 shrink-0">
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700">ISO-Ready Regimes</span>
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700">Full Batch Traceability</span>
          </div>
        </div>

      </div>
    </section>
  );
}
