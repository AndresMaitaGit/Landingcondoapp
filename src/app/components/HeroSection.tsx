import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function HeroSection() {
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

  const scrollToTrialForm = () => {
    const formSection = document.getElementById('trial-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden" style={{
      background: isDark 
        ? 'linear-gradient(180deg, #0F1419 0%, #1A1F2E 100%)'
        : 'linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #5B8DEF 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 rounded-full"
            style={{
              background: isDark 
                ? 'rgba(91, 141, 239, 0.1)' 
                : 'rgba(91, 141, 239, 0.08)',
              border: `1px solid ${isDark ? 'rgba(91, 141, 239, 0.2)' : 'rgba(91, 141, 239, 0.15)'}`,
              color: '#5B8DEF',
              fontWeight: '500',
              fontSize: '0.875rem'
            }}
          >
            ✨ Gestion moderna para condominios
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight" style={{
            color: isDark ? '#FFFFFF' : '#0F1419',
            fontWeight: '700',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Administra tu condominio
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #5B8DEF 0%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              sin estres y en automatico
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" 
            style={{
              color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 20, 25, 0.6)'
            }}
          >
            Deja de perder horas en Excel y WhatsApp. El software disenado para hacerle la vida mas facil a las juntas de condominio y administradores.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button 
              onClick={scrollToTrialForm}
              className="group px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3" 
              style={{
                background: 'linear-gradient(135deg, #5B8DEF 0%, #3B82F6 100%)',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: '600',
                boxShadow: '0 12px 40px rgba(91, 141, 239, 0.4)'
              }}
            >
              <span>Solicitar mi prueba gratuita</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}