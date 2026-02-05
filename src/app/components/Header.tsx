import { Moon, Sun, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('contact');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled 
          ? (isDark ? 'rgba(15, 20, 25, 0.95)' : 'rgba(255, 255, 255, 0.95)') 
          : (isDark ? 'rgba(15, 20, 25, 0.5)' : 'rgba(255, 255, 255, 0.5)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? (isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)')
          : '1px solid transparent',
        boxShadow: scrolled 
          ? '0 4px 24px rgba(0, 0, 0, 0.08)'
          : 'none'
      }}
    >
      <div className="container mx-auto px-8 py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
              background: 'linear-gradient(135deg, #5B8DEF 0%, #4CAF50 100%)',
              boxShadow: '0 8px 24px rgba(91, 141, 239, 0.35)'
            }}>
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-tight" style={{
              color: isDark ? '#FFFFFF' : '#0F1419',
              fontWeight: '600'
            }}>
              CondoApp
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <a 
              href="#features" 
              className="relative transition-all duration-300 group"
              style={{
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 20, 25, 0.7)'
              }}
            >
              <span className="relative z-10">Características</span>
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#5B8DEF' }}
              />
            </a>
            <a 
              href="#contact" 
              className="relative transition-all duration-300 group"
              style={{
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 20, 25, 0.7)'
              }}
            >
              <span className="relative z-10">Contacto</span>
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#5B8DEF' }}
              />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 20, 25, 0.06)',
                color: isDark ? '#FFFFFF' : '#0F1419'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              className="px-7 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
              style={{
                background: 'linear-gradient(135deg, #5B8DEF 0%, #4CAF50 100%)',
                color: 'white',
                fontWeight: '500',
                boxShadow: '0 8px 24px rgba(91, 141, 239, 0.35)'
              }}
              onClick={scrollToCTA}
            >
              Comenzar
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}