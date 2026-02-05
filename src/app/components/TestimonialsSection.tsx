import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Administradora',
    company: 'Residencial Los Pinos',
    content: 'CondoApp ha transformado completamente nuestra forma de trabajar. La transparencia en los pagos y la facilidad de generar reportes nos ha ahorrado incontables horas cada mes.',
    rating: 5,
    avatar: 'MG',
    color: '#5B8DEF',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Presidente de Junta',
    company: 'Edificio Central',
    content: 'Excelente plataforma. Los propietarios ahora pueden ver su estado de cuenta en tiempo real, lo que ha reducido las quejas y mejorado significativamente la comunicación.',
    rating: 5,
    avatar: 'CR',
    color: '#4CAF50',
  },
  {
    name: 'Ana Martínez',
    role: 'Contadora',
    company: 'Condominio Vista Hermosa',
    content: 'La gestión de gastos y la generación automática de documentos son increíbles. Todo está organizado y accesible. Recomiendo CondoApp al 100% sin dudarlo.',
    rating: 5,
    avatar: 'AM',
    color: '#FF9800',
  },
];

export function TestimonialsSection() {
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
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden" style={{
      background: isDark 
        ? 'linear-gradient(180deg, #0F1419 0%, #1A1F2E 100%)'
        : 'linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)'
    }}>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-5 py-2 rounded-full" style={{
            background: isDark 
              ? 'rgba(76, 175, 80, 0.1)' 
              : 'rgba(76, 175, 80, 0.08)',
            border: `1px solid ${isDark ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.15)'}`,
            color: '#4CAF50',
            fontWeight: '500',
            fontSize: '0.875rem'
          }}>
            Testimonios
          </div>

          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{
            color: isDark ? '#FFFFFF' : '#0F1419',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            Historias de Éxito
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 20, 25, 0.6)' 
          }}>
            Únete a cientos de administradores y propietarios satisfechos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group rounded-3xl p-8 transition-all duration-500 relative overflow-hidden"
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
              <div className="absolute top-6 right-6 opacity-5 transition-all duration-500 group-hover:opacity-10">
                <Quote className="w-24 h-24" style={{ color: testimonial.color }} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" style={{ 
                    fill: '#FFB800',
                    color: '#FFB800'
                  }} />
                ))}
              </div>

              <p className="mb-8 relative z-10 leading-relaxed text-lg" style={{ 
                color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 20, 25, 0.8)'
              }}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110" 
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color} 0%, ${testimonial.color}BB 100%)`,
                    fontWeight: '600',
                    fontSize: '1rem',
                    boxShadow: `0 8px 24px ${testimonial.color}40`
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ 
                    color: isDark ? '#FFFFFF' : '#0F1419'
                  }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ 
                    color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 20, 25, 0.5)'
                  }}>
                    {testimonial.role}
                  </p>
                  <p className="text-xs" style={{ 
                    color: testimonial.color,
                    fontWeight: '500'
                  }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105" 
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
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2" style={{
                background: 'linear-gradient(135deg, #5B8DEF 0%, #7BA5F5 100%)',
                borderColor: isDark ? '#0F1419' : '#FFFFFF'
              }}></div>
              <div className="w-10 h-10 rounded-full border-2" style={{
                background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
                borderColor: isDark ? '#0F1419' : '#FFFFFF'
              }}></div>
              <div className="w-10 h-10 rounded-full border-2" style={{
                background: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
                borderColor: isDark ? '#0F1419' : '#FFFFFF'
              }}></div>
            </div>
            <span className="font-medium" style={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 20, 25, 0.8)'
            }}>
              Más de <span style={{ 
                color: '#5B8DEF',
                fontWeight: '700'
              }}>10,000+</span> usuarios activos confían en nosotros
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}