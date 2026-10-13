import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledSubject, setPrefilledSubject] = useState('');

  // ScrollSpy to highlight the active section as user scrolls
  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'industries', 'why-us', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for sticky navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleInquireProduct = (productTitle) => {
    setPrefilledSubject(productTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Us Section */}
        <About />

        {/* Products & Services Section */}
        <Products onInquireProduct={handleInquireProduct} />

        {/* Industries Served Section */}
        <Industries />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Contact Section */}
        <Contact prefilledSubject={prefilledSubject} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
