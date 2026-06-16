"use client";

import { motion } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

const EASE = [0.32, 0.72, 0, 1] as const;

const trustStats = [
  {
    value: "7",
    label: "Isapres",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v18H3V3z" />
      </svg>
    ),
  },
  {
    value: "1.000+",
    label: "Planes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    value: "16",
    label: "Regiones",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Gratis",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative w-full bg-bg-site overflow-hidden section-hero hero-grid-bg">
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-mint/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 w-full">
        {/* ── Columna izquierda ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          <motion.div variants={itemVariants} className="self-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs uppercase tracking-wider font-bold bg-white text-navy border border-border shadow-premium-sm">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              Actualizado · Junio 2026
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-display">
            Encuentra tu{" "}
            <span className="text-gradient-brand">plan de salud ideal</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-navy-light text-lg md:text-xl font-medium leading-relaxed max-w-xl"
          >
            Compara planes de todas las Isapres de Chile, completamente gratis y en línea.
            Un asesor experto te acompaña en cada paso del proceso.
          </motion.p>

          {/* CTAs — inspirado en referencia, colores de marca */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToForm}
              className="btn-cta-gradient inline-flex items-center justify-center gap-2.5 text-base font-bold px-8 py-3.5 rounded-2xl shadow-premium-md min-h-[48px] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-3.75h7.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 1.294L21 21" />
                </svg>
                Cotiza tu plan ahora
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2.5 text-base font-bold px-8 py-3.5 rounded-2xl bg-white text-navy border border-border shadow-premium-sm hover:shadow-premium-md hover:bg-bg-soft transition-all min-h-[48px] cursor-pointer"
            >
              <svg className="w-5 h-5 text-mint-deep" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.294-.97c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contacta un asesor
            </button>
          </motion.div>

          {/* Trust stats con iconos — referencia layout */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
          >
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center sm:items-start gap-2 bg-white/70 backdrop-blur-sm rounded-2xl border border-border p-4 shadow-premium-sm"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-premium-sm">
                  {stat.icon}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl md:text-2xl font-extrabold text-navy leading-none">{stat.value}</p>
                  <p className="text-sm font-semibold text-muted mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Columna derecha: formulario ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="w-full"
        >
          <MultiStepForm />
        </motion.div>
      </div>
    </section>
  );
}
