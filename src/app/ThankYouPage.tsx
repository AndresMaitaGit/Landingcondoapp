import { MessageCircle, PartyPopper } from 'lucide-react';
import { useMemo } from 'react';

export default function ThankYouPage() {
  const condoName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('condominio') || 'tu condominio';
  }, []);

  const goToWhatsApp = () => {
    const phoneNumber = '584227144953';
    const message = encodeURIComponent(
      `Hola, ya envie la solicitud para ${condoName} y tengo una duda urgente sobre la prueba gratuita.`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <main
      className="min-h-screen px-6 py-14 flex items-center"
      style={{ background: 'linear-gradient(180deg, #F5F9FF 0%, #FFFFFF 100%)' }}
    >
      <section className="max-w-3xl mx-auto w-full rounded-3xl p-8 md:p-12" style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(15, 20, 25, 0.08)',
        boxShadow: '0 20px 60px rgba(15, 20, 25, 0.08)',
      }}>
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{
          background: 'rgba(91, 141, 239, 0.1)',
          color: '#2f67cf',
          fontWeight: '600',
        }}>
          <PartyPopper className="w-4 h-4" />
          <span>Solicitud recibida con exito</span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tight mb-5" style={{
          color: '#0F1419',
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }}>
          ¡Solicitud recibida con exito! 🎉
        </h1>

        <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(15, 20, 25, 0.78)' }}>
          Nuestro equipo esta configurando tu espacio de trabajo para el condominio <strong>{condoName}</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(15, 20, 25, 0.78)' }}>
          En un plazo maximo de 24 horas recibiras un correo con tu usuario, contrasena y el enlace para acceder a tu prueba gratuita de ViveSoft.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={goToWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #1FAE54 100%)',
              color: '#FFFFFF',
              fontWeight: '700',
              boxShadow: '0 10px 24px rgba(37, 211, 102, 0.3)',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            ¿Tienes dudas urgentes? WhatsApp
          </button>

          <button
            onClick={goToHome}
            className="px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2f67cf',
              border: '1px solid rgba(47, 103, 207, 0.25)',
              fontWeight: '600',
            }}
          >
            Volver al inicio
          </button>
        </div>
      </section>
    </main>
  );
}
