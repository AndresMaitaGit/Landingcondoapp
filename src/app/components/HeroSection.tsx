import { Users, DollarSign, TrendingUp, CreditCard, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const kpiData = [
  {
    title: 'Propietarios Solventes',
    value: '248',
    icon: Users,
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
  },
  {
    title: 'Propietarios Deudores',
    value: '12',
    icon: Users,
    color: '#EF5350',
    gradient: 'linear-gradient(135deg, #EF5350 0%, #E57373 100%)',
  },
  {
    title: 'Pagos Anuales',
    value: '$2.4M',
    icon: TrendingUp,
    color: '#5B8DEF',
    gradient: 'linear-gradient(135deg, #5B8DEF 0%, #7BA5F5 100%)',
  },
  {
    title: 'Cuentas por Cobrar',
    value: '$84K',
    icon: CreditCard,
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
  },
  {
    title: 'Saldo Anual',
    value: '$1.8M',
    icon: PiggyBank,
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #00BCD4 0%, #4DD0E1 100%)',
  },
];

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

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('contact');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            background: 'radial-gradient(circle, #4CAF50 0%, transparent 70%)',
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
            ✨ La plataforma más completa para condominios
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight" style={{
            color: isDark ? '#FFFFFF' : '#0F1419',
            fontWeight: '700',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Simplifica la Gestión
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #5B8DEF 0%, #4CAF50 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              de Tu Condominio
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
            Control total, transparencia absoluta. Gestiona propietarios, pagos y finanzas con la plataforma más avanzada del mercado.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button 
              onClick={scrollToCTA}
              className="group px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3" 
              style={{
                background: 'linear-gradient(135deg, #5B8DEF 0%, #4CAF50 100%)',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: '600',
                boxShadow: '0 12px 40px rgba(91, 141, 239, 0.4)'
              }}
            >
              <span>Comenzar Ahora</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl p-7 transition-all duration-500 cursor-pointer"
                style={{
                  background: isDark 
                    ? 'rgba(30, 33, 57, 0.6)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                  style={{
                    background: kpi.gradient,
                    boxShadow: `0 8px 24px ${kpi.color}40`
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-sm mb-3 tracking-wide" style={{ 
                  color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 20, 25, 0.5)',
                  fontWeight: '500'
                }}>
                  {kpi.title}
                </h3>
                
                <p className="text-4xl tracking-tight" style={{ 
                  color: kpi.color,
                  fontWeight: '700'
                }}>
                  {kpi.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm tracking-wide" style={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 20, 25, 0.4)',
            fontWeight: '500'
          }}>
            Vista previa de tus indicadores principales en tiempo real
          </p>
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