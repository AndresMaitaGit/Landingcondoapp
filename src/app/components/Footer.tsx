import { Building2, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-16 px-6" style={{
      backgroundColor: isDark ? '#0A0D14' : '#0F1419',
      color: 'white'
    }}>
      <div className="container mx-auto max-w-7xl">
        {/* Brand section - Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 mb-6 justify-center group cursor-pointer">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
              background: 'linear-gradient(135deg, #5B8DEF 0%, #4CAF50 100%)',
              boxShadow: '0 8px 24px rgba(91, 141, 239, 0.35)'
            }}>
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-tight" style={{
              fontWeight: '600'
            }}>
              CondoApp
            </span>
          </div>
          <p className="mb-6 leading-relaxed max-w-2xl mx-auto" style={{ 
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            La solución más completa y moderna para la gestión profesional de condominios. Diseñada por expertos para expertos.
          </p>
        </div>

        {/* Bottom bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6" 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 CondoApp. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8" style={{
          color: 'rgba(255, 255, 255, 0.3)'
        }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">SSL Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Certificado ISO</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}