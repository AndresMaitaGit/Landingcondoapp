import { ShieldCheck, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const REGISTRO_API_URL = 'http://5.189.159.161:3000/api/contact-form/registro';

export function CTASection() {
  const [isDark, setIsDark] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    condoName: '',
    location: '',
    totalUnits: '',
  });

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      nombre_y_apellido: formData.fullName,
      correo_electronico: formData.email,
      nombre_del_condominio_o_edificio: formData.condoName,
      pais_ciudad: formData.location,
      numero_total_de_apartamentos_casas_en_el_condominio: Number(formData.totalUnits),
    };

    try {
      const response = await fetch(REGISTRO_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      window.location.href = '/gracias';
    } catch (error) {
      console.error('Error al enviar el formulario de registro:', error);
      setSubmitError('No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="trial-form" className="py-32 px-6 relative overflow-hidden" style={{
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
            <span>Prueba gratuita</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl mb-8 tracking-tight" style={{
            color: 'white',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            Solicita tu acceso
            <br />
            a ViveSoft
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Completa este formulario para activar tu prueba gratuita.
            Nos ayuda a preparar tu espacio de trabajo con datos reales de tu condominio.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto rounded-3xl p-6 md:p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div className="text-left">
                <label htmlFor="fullName" className="block text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Nombre y Apellido
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#0F1419',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                  }}
                />
              </div>

              <div className="text-left">
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Correo electronico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#0F1419',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                  }}
                />
              </div>

              <div className="text-left">
                <label htmlFor="condoName" className="block text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Nombre del Condominio o Edificio
                </label>
                <input
                  id="condoName"
                  name="condoName"
                  type="text"
                  required
                  value={formData.condoName}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#0F1419',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                  }}
                />
              </div>

              <div className="text-left">
                <label htmlFor="location" className="block text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Pais / Ciudad
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#0F1419',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                  }}
                />
              </div>

              <div className="text-left md:col-span-2">
                <label htmlFor="totalUnits" className="block text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Numero total de apartamentos/casas en el condominio
                </label>
                <input
                  id="totalUnits"
                  name="totalUnits"
                  type="number"
                  min="1"
                  required
                  value={formData.totalUnits}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#0F1419',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                  }}
                />
              </div>
            </div>

            {submitError && (
              <p className="text-sm text-left mb-4" style={{ color: '#FFD9D9' }}>
                {submitError}
              </p>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="inline-flex items-center gap-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <ShieldCheck className="w-5 h-5" />
                <p className="text-sm text-left">Tus datos se usan solo para configurar tu prueba y contactarte.</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2057b9',
                  fontWeight: '700',
                  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.18)',
                }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Enviando...' : 'Enviar solicitud de prueba'}
              </button>
            </div>
          </motion.form>

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