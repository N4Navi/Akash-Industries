import React from 'react';
import { ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { VALUES_DATA } from '../data/content';


const iconMap = {
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            About Akash Industries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built on Engineering Discipline & Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Akash Industries was established to deliver precision mechanical manufacturing, heavy component fabrication, and engineering solutions that keep industrial operations running without failure.
          </p>
          <p className="text-xs text-slate-500 italic">
            * Sample Introduction: Illustrative overview representing our manufacturing workflow and capabilities.
          </p>
        </div>

        {/* Narrative & Operations Split */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Modern Facilities Tailored for Precision & Scale
            </h3>
            <p>
              Our operations combine conventional and computer numerical control (CNC) machining centers with certified welding bays and specialized finishing equipment. By maintaining close oversight across raw material receiving, in-process dimensioning, and final packaging, we ensure repeatable quality for every customer.
            </p>
            <p className="text-slate-600">
              Whether producing high-tolerance turned shafts, heavy structural assemblies, or specialized replacement components, our focus remains on dimensional fidelity, surface durability, and dependable lead times.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900 font-mono">100%</div>
                <div className="text-xs text-slate-500 uppercase font-medium mt-0.5">Tolerance Inspection</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 font-mono">24/7</div>
                <div className="text-xs text-slate-500 uppercase font-medium mt-0.5">Shift Scheduling</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-orange-600 font-mono">Bespoke</div>
                <div className="text-xs text-slate-500 uppercase font-medium mt-0.5">Custom Prototyping</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
                alt="Engineering technician examining industrial workpiece with precision vernier instruments"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-medium bg-slate-900/80 px-3 py-1.5 rounded backdrop-blur-sm border border-slate-700">
                  Precision measurement & quality audit
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Value Cards: Quality, Reliability, Innovation */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Core Operating Values
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              The foundational principles that guide every cut, weld, and consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {VALUES_DATA.map((val) => {
              const IconComponent = iconMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={val.id}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-orange-50 text-slate-700 group-hover:text-orange-600 flex items-center justify-center mb-5 transition-colors duration-200 border border-slate-200 group-hover:border-orange-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">
                      {val.tagline}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {val.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {val.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    {val.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
