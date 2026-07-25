import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const DEMO_VIDEO_URL = 'https://www.youtube.com/embed/9No-FiEInLA';

const demoPoints = [
  'Recorrido completo del panel de ViveSoft',
  'Como registrar un pago en segundos',
  'Como enviar recibos de forma automatica',
];

export function VideoDemoSection() {
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
      id="video-demo"
      className="py-28 px-6"
      style={{ backgroundColor: isDark ? '#0F1419' : '#FFFFFF' }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full"
            style={{
              background: isDark ? 'rgba(91, 141, 239, 0.12)' : 'rgba(91, 141, 239, 0.08)',
              border: `1px solid ${isDark ? 'rgba(91, 141, 239, 0.25)' : 'rgba(91, 141, 239, 0.15)'}`,
              color: '#5B8DEF',
              fontWeight: '500',
              fontSize: '0.875rem',
            }}
          >
            <PlayCircle className="w-4 h-4" />
            <span>Video Demo</span>
          </div>

          <h2
            className="text-5xl md:text-6xl mb-5 tracking-tight"
            style={{
              color: isDark ? '#FFFFFF' : '#0F1419',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Tu vendedor 24/7
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: isDark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(15, 20, 25, 0.62)' }}
          >
            En 3 a 5 minutos mira por dentro ViveSoft y descubre como gestionar cobros,
            pagos y recibos sin procesos manuales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-3xl p-4 md:p-6 mb-8"
          style={{
            background: isDark ? 'rgba(30, 33, 57, 0.62)' : 'rgba(248, 249, 250, 0.9)',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
            boxShadow: isDark
              ? '0 12px 36px rgba(0, 0, 0, 0.35)'
              : '0 12px 36px rgba(15, 20, 25, 0.07)',
          }}
        >
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
            <iframe
              title="Demo de ViveSoft"
              src={DEMO_VIDEO_URL}
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {demoPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-xl px-5 py-4"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(91, 141, 239, 0.05)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(91, 141, 239, 0.1)'}`,
              }}
            >
              <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: '#3B82F6' }} />
              <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.78)' : 'rgba(15, 20, 25, 0.78)' }}>{point}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <button
            onClick={scrollToTrialForm}
            className="px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #5B8DEF 0%, #3B82F6 100%)',
              color: 'white',
              fontSize: '1.05rem',
              fontWeight: '600',
              boxShadow: '0 12px 30px rgba(91, 141, 239, 0.35)',
            }}
          >
            Solicitar mi prueba gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
