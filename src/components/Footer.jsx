import React from 'react';
import { Cog, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, PRODUCTS_DATA } from '../data/content';

const CURRENT_YEAR = 2026;

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-md">
                <Cog className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-wider font-mono">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-orange-400 font-semibold">
                  Engineering Quality. Building Trust.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing heavy industrial components, precision CNC machining, and bespoke contract fabrication for high-reliability infrastructure and engineering sectors.
            </p>

            <div className="pt-2 text-xs text-slate-500 italic bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 max-w-sm">
              * Demonstration Website: Akash Industries is presented here with representative sample content for technical evaluation.
            </div>
          </div>

          {/* Quick Navigation column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="hover:text-orange-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Products column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {PRODUCTS_DATA.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleLinkClick(e, 'products')}
                    className="hover:text-orange-400 transition-colors inline-block py-0.5 text-xs text-slate-400"
                  >
                    {prod.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Plant Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address}, {COMPANY_INFO.contact.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </p>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-3">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                Industry Profiles
              </span>
              <div className="flex items-center gap-2">
                {['LinkedIn', 'TradeDirectory', 'ManufacturingIndex'].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {CURRENT_YEAR} Akash Industries. All rights reserved. Professional industrial engineering website demonstration.
          </p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
