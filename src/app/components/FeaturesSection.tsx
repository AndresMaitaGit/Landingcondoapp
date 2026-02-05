import { Users, DollarSign, CheckCircle, FileText, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Propietarios',
    description: 'Gestiona eficientemente la lista de propietarios y la junta directiva. Mantén actualizada toda la información de contacto y detalles importantes.',
    icon: Users,
    color: '#5B8DEF',
    gradient: 'linear-gradient(135deg, #5B8DEF 0%, #7BA5F5 100%)',
  },
  {
    title: 'Gastos de Residencia',
    description: 'Control total sobre los ingresos y egresos del condominio. Categoriza gastos, genera reportes y mantén las finanzas transparentes.',
    icon: DollarSign,
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
  },
  {
    title: 'Pagos Mensuales',
    description: 'Registra y confirma pagos fácilmente. Sistema automatizado de recordatorios y confirmación de transacciones para mayor eficiencia.',
    icon: CheckCircle,
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #00BCD4 0%, #4DD0E1 100%)',
  },
  {
    title: 'Estado de Cuentas',
    description: 'Accede a historiales y saldos detallados. Consulta el estado financiero de cada propietario y del condominio en tiempo real.',
    icon: BarChart3,
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
  },
  {
    title: 'Generar Documentos',
    description: 'Crea y envía documentos importantes automáticamente. Estados de cuenta, recibos, notificaciones y reportes con un solo clic.',
    icon: FileText,
    color: '#9C27B0',
    gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
  },
];

const stats = [
  { value: '99.9%', label: 'Disponibilidad', color: '#5B8DEF' },
  { value: '500+', label: 'Condominios', color: '#4CAF50' },
  { value: '24/7', label: 'Soporte Premium', color: '#FF9800' },
  { value: '100%', label: 'Seguro', color: '#00BCD4' },
];

export function FeaturesSection() {
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
    <section id="features" className="py-28 px-6 relative overflow-hidden" style={{ 
      backgroundColor: isDark ? '#0F1419' : '#FFFFFF'
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
              ? 'rgba(91, 141, 239, 0.1)' 
              : 'rgba(91, 141, 239, 0.08)',
            border: `1px solid ${isDark ? 'rgba(91, 141, 239, 0.2)' : 'rgba(91, 141, 239, 0.15)'}`,
            color: '#5B8DEF',
            fontWeight: '500',
            fontSize: '0.875rem'
          }}>
            Características Destacadas
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{ 
            color: isDark ? '#FFFFFF' : '#0F1419',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            Todo lo que necesitas
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 20, 25, 0.6)'
          }}>
            Herramientas profesionales para una gestión eficiente y transparente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl p-8 transition-all duration-500 cursor-pointer"
                style={{
                  background: isDark 
                    ? 'rgba(30, 33, 57, 0.6)'
                    : 'rgba(248, 249, 250, 0.8)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                  style={{
                    background: feature.gradient,
                    boxShadow: `0 8px 24px ${feature.color}40`
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4 tracking-tight" style={{ 
                  color: isDark ? '#FFFFFF' : '#0F1419',
                  fontWeight: '600'
                }}>
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed" style={{ 
                  color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 20, 25, 0.6)'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl p-12"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(91, 141, 239, 0.08) 0%, rgba(76, 175, 80, 0.08) 100%)'
              : 'linear-gradient(135deg, rgba(91, 141, 239, 0.05) 0%, rgba(76, 175, 80, 0.05) 100%)',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl mb-3 tracking-tight" style={{ 
                color: stat.color,
                fontWeight: '700'
              }}>
                {stat.value}
              </p>
              <p className="tracking-wide" style={{ 
                color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 20, 25, 0.6)',
                fontWeight: '500'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
