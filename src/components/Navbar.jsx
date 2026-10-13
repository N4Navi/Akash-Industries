import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Cog } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/content';

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-slate-900 border-b border-slate-800/80 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
            aria-label="Akash Industries Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-950/30 group-hover:scale-105 transition-transform duration-200">
              <Cog className="w-6 h-6 animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-lg sm:text-xl font-mono flex items-center gap-1.5">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-orange-400 font-semibold hidden sm:inline-block">
                Industrial Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm transition-all duration-200 hover:shadow-orange-600/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-orange-400 font-semibold pl-4 border-l-4 border-orange-500'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 px-1">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Direct Desk: {COMPANY_INFO.contact.phone}</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full text-center bg-orange-600 hover:bg-orange-500 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-colors text-sm"
            >
              Get in Touch / Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
