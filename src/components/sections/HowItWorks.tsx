"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.32, 0.72, 0, 1] as const;

export default function HowItWorks() {
  const handleScrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const steps = [
    {
      number: "01",
      title: "Llena el formulario",
      description:
        "Completa tus datos básicos en menos de 2 minutos. Toda la información es confidencial.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Analizamos tu perfil",
      description:
        "Nuestros algoritmos cruzan tu edad, renta, cargas y necesidades con la oferta vigente.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Comparamos opciones",
      description:
        "Evaluamos precio, copagos, clínicas en convenio y beneficios adicionales de cada plan.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Te sugerimos el mejor plan",
      description:
        "Recibes hasta 3 recomendaciones personalizadas, ordenadas por conveniencia real.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="w-full bg-bg-soft border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── Columna izquierda: título + pasos verticales ── */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col gap-4"
            >
              <span className="eyebrow">Proceso simple</span>
              <h2 className="heading-section text-left">
                Completa el formulario para ver los planes
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">
                Ingresa tus datos arriba y nuestra plataforma analizará cientos de planes para
                recomendarte las mejores opciones.
              </p>
              <button
                onClick={handleScrollToForm}
                className="group self-start btn-cta-gradient inline-flex items-center gap-2 text-sm px-7 py-3 rounded-2xl shadow-premium-md cursor-pointer min-h-[44px]"
              >
                <span className="relative z-10">Ir al formulario</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </motion.div>

            {/* Timeline vertical */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: EASE }}
                  className="flex gap-5 group"
                >
                  {/* Línea + número */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-premium-sm group-hover:shadow-premium-md transition-shadow duration-300">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-8 my-2 bg-gradient-to-b from-mint/40 via-border to-border" />
                    )}
                  </div>

                  {/* Contenido del paso */}
                  <div className={`flex-1 ${index < steps.length - 1 ? "pb-8" : "pb-0"}`}>
                    <div className="bg-white rounded-2xl border border-border shadow-card group-hover:shadow-card-hover transition-all duration-300 p-5">
                      <span className="eyebrow text-[10px] mb-1 block">Paso {step.number}</span>
                      <h3 className="heading-card text-base mb-1.5">{step.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: sello Superintendencia ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-white rounded-2xl border border-border shadow-premium-md overflow-hidden h-full flex flex-col">
              {/* Franja superior con gradiente de marca */}
              <div className="h-1.5 w-full bg-gradient-brand" />

              <div className="flex flex-col items-center text-center gap-6 p-8 md:p-10 flex-1 justify-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald border border-emerald/15 shadow-premium-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-emerald">Regulación oficial</span>
                  <h3 className="heading-section text-xl md:text-2xl leading-snug">
                    Autorizados por la{" "}
                    <span className="text-gradient-brand">Superintendencia de Salud</span>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-sm mx-auto">
                    La Superintendencia de Salud permite consultar si el ejecutivo está habilitado
                    para ejercer funciones de Agente de Ventas.
                  </p>
                </div>

                <div className="w-full bg-bg-soft rounded-2xl border border-border px-8 py-7 flex items-center justify-center">
                  <Image
                    src="/images/logo-superintendencia-de-salud.png"
                    alt="Logo Superintendencia de Salud — Gobierno de Chile"
                    width={320}
                    height={100}
                    className="object-contain h-20 w-auto max-w-full"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted">
                    <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ejecutivos certificados y habilitados</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted">
                    <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Servicio regulado por el Gobierno de Chile</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
