import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const benefits = [
  'Sin tarjeta de crédito requerida',
  'Configuración rapida y segura',
  'Soporte dedicado todos los dias',
  'Garantía de satisfacción total',
];

export function CTASection() {
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

  const openWhatsApp = () => {
    const phoneNumber = '584243145815'; // Número sin espacios ni caracteres especiales
    const message = encodeURIComponent('¡Hola! Me gustaría agendar una demostración de ViveSoft para conocer más sobre la plataforma de gestión de condominios.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #5B8DEF 0%, #062c41 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: '500'
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Oferta exclusiva</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl mb-8 tracking-tight" style={{
            color: 'white',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            ¿Listo para Transformar
            <br />
            tu Condominio?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Únete y disfruta de una gestión más eficiente, transparente y profesional
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 rounded-2xl px-7 py-5 transition-all duration-300 hover:scale-105" 
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(255, 255, 255, 0.2)'
                }}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-left font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            {/* <button className="group px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 hover:shadow-2xl" style={{
              backgroundColor: 'white',
              color: '#5B8DEF',
              fontSize: '1.125rem',
              fontWeight: '600',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)'
            }}>
              <span>Comenzar Prueba Gratuita</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button> */}
            <button className="px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              fontSize: '1.125rem',
              fontWeight: '600'
            }} onClick={openWhatsApp}>
              Agendar Demostración
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-white"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium">andresmape2@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">+58 (424) 314-5815</span>
            </div>
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