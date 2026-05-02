// HeroSection.jsx
"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-navy leading-[1.1]">
          Cotizador <br />
          <span className="text-primary">Inteligente</span>
        </h1>
        <h2 className="text-2xl font-semibold text-navy">
          Encontramos la mejor alternativa para ti.
        </h2>
        <p className="text-muted text-lg max-w-md">
          Analizamos tu situación y te mostramos hasta 3 opciones reales según
          tu perfil y necesidades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-primary text-white rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-white/20 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold leading-none">Cotizar ahora</span>
              <span className="text-xs text-white/80">
                En menos de 2 minutos
              </span>
            </div>
          </button>

          <button className="border-2 border-border rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-soft transition-all">
            <div className="text-secondary p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-navy leading-none">
                Agendar reunión
              </span>
              <span className="text-xs text-muted">Con un asesor</span>
            </div>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">100% seguro</span>
              <span className="text-[10px] text-muted">
                Tus datos protegidos
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">
                Respuesta rápida
              </span>
              <span className="text-[10px] text-muted">En minutos</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">
                Asesoría experta
              </span>
              <span className="text-[10px] text-muted">Sin costo para ti</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full h-[600px] bg-soft rounded-full rounded-br-none overflow-visible flex items-center justify-center"
      >
        {/* Placeholder para la imagen de la mujer */}
        <div className="absolute inset-0 bg-gray-200 rounded-[50%] rounded-br-3xl overflow-hidden shadow-inner">
          {/* <img src="/woman-phone.jpg" alt="Mujer sonriendo viendo su celular" className="object-cover w-full h-full" /> */}
        </div>

        {/* Floating Chat Widget */}
        <div className="absolute right-[-20px] top-[10%] w-[320px] bg-white rounded-2xl shadow-2xl border border-light p-4 z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-light pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-primary text-xs font-bold">
                7%
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy">
                  Cotizador Inteligente
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-muted">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> En
                  línea
                </div>
              </div>
            </div>
            <div className="flex gap-2 text-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <div className="bg-soft p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-navy">
              <p>¡Hola! 👋</p>
              <p>
                Soy tu asesor virtual. En pocos pasos te ayudaremos a encontrar
                el plan de Isapre ideal para ti.
              </p>
              <span className="text-[9px] text-muted block mt-1 text-right">
                11:32
              </span>
            </div>
            <div className="bg-soft p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-navy">
              <p>¿Cómo te llamas?</p>
              <span className="text-[9px] text-muted block mt-1 text-right">
                11:32
              </span>
            </div>
            <div className="bg-green-100 p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-navy">
              <p>María Fernanda</p>
              <span className="text-[9px] text-muted block mt-1 text-right">
                11:32 <span className="text-primary">✓✓</span>
              </span>
            </div>
            <div className="bg-soft p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-navy">
              <p>¡Perfecto María Fernanda! 🙌</p>
              <p>
                Para poder contactarte, ¿me puedes dejar tu número de teléfono?
              </p>
              <span className="text-[9px] text-muted block mt-1 text-right">
                11:32
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <div className="bg-soft px-2 py-2 border-r border-border flex items-center gap-1 text-xs">
                🇨🇱{" "}
                <svg
                  className="w-3 h-3 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="+56 9 1234 5678"
                className="w-full text-xs px-3 py-2 outline-none text-navy"
              />
            </div>
            <button className="w-full bg-secondary text-white font-medium text-sm py-2 rounded-lg hover:bg-secondary/90 transition-colors">
              Continuar
            </button>
          </div>
          <div className="text-center text-[10px] text-muted mt-1">
            Usamos tecnología de{" "}
            <span className="text-teal-500 font-semibold">sendpulse</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
