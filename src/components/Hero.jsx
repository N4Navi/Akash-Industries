import React from 'react';
import { ArrowRight, Mail, Shield, CheckCircle, Wrench, Factory } from 'lucide-react';


export default function Hero({ onNavigate }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Subtle Orange Glow Ambient Effect */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-orange-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Industrial Manufacturing & Engineering Business</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering Quality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Building Trust.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Akash Industries delivers precision-engineered industrial components, custom metal fabrication, and comprehensive manufacturing support. We partner with industries across infrastructure, automotive, and heavy machinery to turn complex specifications into durable, reliable parts.
            </p>

            {/* Sample Disclaimer Callout */}
            <p className="text-xs text-slate-400 italic bg-slate-800/40 p-2.5 rounded border-l-2 border-orange-500/70 max-w-xl">
              Sample Demo Content: Company capabilities, specifications, and project capacities shown are for presentation and prototype evaluation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#products"
                onClick={(e) => handleScrollTo(e, 'products')}
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-orange-600/30 transition-all duration-200 text-base group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition-colors duration-200 text-base"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Certified Quality Controls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Precision CNC Tolerances</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Custom Fabrication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800/60 backdrop-blur-sm group">
                <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-800 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                    alt="Industrial precision engineering and manufacturing facility"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-orange-400 font-semibold">
                        Precision Manufacturing
                      </div>
                      <div className="text-white text-sm font-bold">
                        CNC Turning & Multi-Axis Milling
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
                      <Factory className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sub-metrics bar */}
                <div className="p-4 bg-slate-900/90 grid grid-cols-2 divide-x divide-slate-800 text-center">
                  <div className="px-2">
                    <span className="block text-lg font-bold text-white font-mono">±0.005 mm</span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Tolerance Standard</span>
                  </div>
                  <div className="px-2">
                    <span className="block text-lg font-bold text-orange-400 font-mono">100% Inspected</span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Batch Audit Rigor</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-orange-500/60 rounded-br-2xl pointer-events-none -z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
