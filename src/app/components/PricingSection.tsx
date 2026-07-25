import { Building2, CheckCircle2, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const planItems = [
  {
    title: 'Plan Base',
    badge: 'Ideal para condominios pequenos',
    range: '0 a 49 unidades',
    price: '$19.99',
    period: '/mes',
    icon: Building2,
    color: '#5B8DEF',
    gradient: 'linear-gradient(135deg, #5B8DEF 0%, #3B82F6 100%)',
    highlights: [
      'Usuarios ilimitados',
      'Gestion de cuotas extraordinarias',
      'Recordatorios automaticos',
      'Soporte incluido',
    ],
  },
  {
    title: 'Plan Escalable',
    badge: 'Para operaciones con mayor volumen',
    range: '50 unidades en adelante',
    price: '$0.39',
    period: 'por unidad/mes',
    icon: Landmark,
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #00BCD4 0%, #4DD0E1 100%)',
    highlights: [
      'Cobro flexible por crecimiento',
      'Costo proporcional por unidad activa',
      'Ideal para portafolios grandes',
      'Mismas funciones premium del sistema',
    ],
  },
];

const examples = [
  { units: 25, total: '$19.99/mes' },
  { units: 80, total: '$31.20/mes' },
  { units: 150, total: '$58.50/mes' },
];

export function PricingSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTrialForm = () => {
    const formSection = document.getElementById('trial-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="pricing"
      className="py-28 px-6 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0F1419 0%, #141B2A 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-10 -left-16 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #5B8DEF 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00BCD4 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block mb-4 px-5 py-2 rounded-full"
            style={{
              background: isDark ? 'rgba(91, 141, 239, 0.12)' : 'rgba(91, 141, 239, 0.08)',
              border: `1px solid ${isDark ? 'rgba(91, 141, 239, 0.25)' : 'rgba(91, 141, 239, 0.15)'}`,
              color: '#5B8DEF',
              fontWeight: '500',
              fontSize: '0.875rem',
            }}
          >
            Planes y Precios
          </div>

          <h2
            className="text-5xl md:text-6xl mb-6 tracking-tight"
            style={{
              color: isDark ? '#FFFFFF' : '#0F1419',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Precios Claros, Sin Sorpresas
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(15, 20, 25, 0.65)' }}
          >
            Elige un esquema simple para tu condominio: tarifa fija para operaciones pequenas o precio por unidad para escalar con eficiencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {planItems.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-3xl p-8 md:p-10 transition-all duration-500"
                style={{
                  background: isDark ? 'rgba(30, 33, 57, 0.65)' : 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                  boxShadow: isDark
                    ? '0 12px 36px rgba(0, 0, 0, 0.35)'
                    : '0 12px 36px rgba(15, 20, 25, 0.08)',
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p
                      className="inline-block mb-3 px-4 py-1 rounded-full text-sm"
                      style={{
                        background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 20, 25, 0.06)',
                        color: isDark ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 20, 25, 0.7)',
                        fontWeight: '500',
                      }}
                    >
                      {plan.badge}
                    </p>

                    <h3
                      className="text-3xl tracking-tight mb-2"
                      style={{ color: isDark ? '#FFFFFF' : '#0F1419', fontWeight: '700' }}
                    >
                      {plan.title}
                    </h3>
                    <p style={{ color: plan.color, fontWeight: '600' }}>{plan.range}</p>
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: plan.gradient,
                      boxShadow: `0 8px 24px ${plan.color}50`,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="mb-8">
                  <span
                    className="text-5xl md:text-6xl tracking-tight"
                    style={{ color: isDark ? '#FFFFFF' : '#0F1419', fontWeight: '700' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="ml-2 text-lg"
                    style={{ color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(15, 20, 25, 0.65)' }}
                  >
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${plan.color}22`, color: plan.color }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.78)' : 'rgba(15, 20, 25, 0.8)' }}>{item}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToTrialForm}
                  className="w-full py-4 rounded-xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: plan.gradient,
                    color: 'white',
                    fontWeight: '600',
                    boxShadow: `0 10px 24px ${plan.color}40`,
                  }}
                >
                  Solicitar mi prueba gratuita
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(91, 141, 239, 0.12) 0%, rgba(0, 188, 212, 0.12) 100%)'
              : 'linear-gradient(135deg, rgba(91, 141, 239, 0.06) 0%, rgba(0, 188, 212, 0.06) 100%)',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
          }}
        >
          <h4
            className="text-2xl mb-2"
            style={{ color: isDark ? '#FFFFFF' : '#0F1419', fontWeight: '600' }}
          >
            Ejemplos de facturacion mensual
          </h4>
          <p
            className="mb-6"
            style={{ color: isDark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(15, 20, 25, 0.62)' }}
          >
            Referencia rapida para estimar tu inversion segun la cantidad de unidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examples.map((example) => (
              <div
                key={example.units}
                className="rounded-2xl p-5"
                style={{
                  background: isDark ? 'rgba(15, 20, 25, 0.45)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)'}`,
                }}
              >
                <p
                  className="text-sm mb-1"
                  style={{ color: isDark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(15, 20, 25, 0.55)' }}
                >
                  {example.units} unidades
                </p>
                <p className="text-2xl" style={{ color: '#3B82F6', fontWeight: '700' }}>
                  {example.total}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}