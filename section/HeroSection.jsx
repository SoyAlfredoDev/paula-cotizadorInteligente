"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white overflow-hidden">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      {/* Left Content Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-7 flex flex-col gap-6"
      >
        {/* Micro-eyebrow */}
        <motion.div variants={itemVariants} className="self-start">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-primary/10 text-primary border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Cotización 100% Gratuita
          </span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] tracking-tighter"
        >
          Encuentra tu plan de <br />
          <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
            Isapre ideal
          </span>{" "}
          en minutos.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted text-base md:text-lg max-w-xl leading-relaxed"
        >
          Analizamos tu perfil, renta y cargas para presentarte una comparativa transparente con hasta 3 opciones reales. Ahorra y paga lo justo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          {/* Button in Button (Double Bezel Primary CTA) */}
          <button className="group bg-primary hover:bg-primary-hover text-white rounded-2xl px-6 py-3.5 flex items-center justify-between gap-4 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 active:scale-[0.98] border border-primary/20">
            <div className="flex flex-col items-start text-left">
              <span className="font-bold text-sm leading-tight">Cotizar mi Isapre</span>
              <span className="text-[10px] text-white/80 font-mono">EN MENOS DE 2 MINUTOS</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>

          {/* Secondary CTA */}
          <button className="group border border-border hover:border-navy/20 bg-white text-navy rounded-2xl px-6 py-3.5 flex items-center gap-3 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] shadow-premium-sm">
            <div className="text-navy/60 group-hover:text-navy transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="font-bold text-sm leading-tight text-navy">Agendar asesoría</span>
              <span className="text-[10px] text-muted font-mono">CON UN EXPERTO</span>
            </div>
          </button>
        </motion.div>

        {/* Benefits Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 20.062a3.745 3.745 0 01-3.067-1.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3.938a3.745 3.745 0 013.067 1.593 3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">Seguridad garantizada</span>
              <span className="text-[10px] text-muted">Datos protegidos</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#094fd1]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">Respuesta instantánea</span>
              <span className="text-[10px] text-muted">Reporte en minutos</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0012.25 19.5q-.215 0-.43-.01M12 14.25a4.875 4.875 0 000 9.75 4.875 4.875 0 000-9.75z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy">Cero comisiones</span>
              <span className="text-[10px] text-muted">Servicio sin costo</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Visual & Chat Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
        className="lg:col-span-5 relative w-full h-[580px] flex items-center justify-center"
      >
        {/* Soft Structural Photo Frame */}
        <div className="absolute inset-0 w-full h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-premium-md border border-white">
          <Image
            src="https://picsum.photos/seed/chilean-woman-phone/800/800"
            alt="Asesora experta analizando planes de salud en su teléfono móvil"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover w-full h-full grayscale-[10%] contrast-[1.05]"
          />
          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-navy/5 to-transparent" />
        </div>

        {/* Double-Bezel Floating Chat Widget (Constrained on mobile to prevent overflow) */}
        <div className="absolute bottom-[-20px] left-0 right-0 mx-auto lg:left-auto lg:right-[-20px] lg:top-[12%] lg:bottom-auto w-[90%] sm:w-[340px] bg-white/40 border border-white/20 p-2 rounded-[2rem] backdrop-blur-md shadow-premium-lg z-10">
          <div className="bg-white p-4 rounded-[calc(2rem-0.5rem)] flex flex-col gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
            
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                {/* Logo bezel */}
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-primary text-xs font-black shadow-inner">
                  %
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy">Asesor Inteligente</h3>
                  <div className="flex items-center gap-1.5 text-[9px] text-muted">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                    <span>En línea</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 text-slate-400">
                <svg className="w-4 h-4 cursor-pointer hover:text-navy transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex flex-col gap-3 text-xs max-h-[200px] overflow-y-auto hide-scrollbar">
              <div className="bg-slate-50 p-2.5 rounded-2xl rounded-tl-none self-start max-w-[85%] text-navy border border-slate-100">
                <p className="leading-relaxed">¡Hola! 👋</p>
                <p className="leading-relaxed mt-1">¿Buscando la mejor cobertura de Isapre?</p>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-2xl rounded-tl-none self-start max-w-[85%] text-navy border border-slate-100">
                <p className="leading-relaxed">¿Cómo te llamas?</p>
              </div>
              <div className="bg-primary/10 p-2.5 rounded-2xl rounded-tr-none self-end max-w-[85%] text-navy border border-primary/20">
                <p className="leading-relaxed font-semibold">María Fernanda</p>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-2xl rounded-tl-none self-start max-w-[85%] text-navy border border-slate-100">
                <p className="leading-relaxed">¡Excelente María Fernanda! Para ver opciones, ¿cuál es tu número celular?</p>
              </div>
            </div>

            {/* Form Input */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-50">
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <div className="bg-slate-50 px-2 py-2.5 border-r border-slate-200 flex items-center gap-1 text-[11px] font-bold text-navy">
                  🇨🇱
                  <svg className="w-2.5 h-2.5 text-muted" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  className="w-full text-xs px-3 py-2.5 outline-none text-navy bg-transparent font-mono"
                />
              </div>
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-xs py-2.5 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-premium-sm hover:shadow-premium-md">
                Continuar
              </button>
            </div>
            
            <div className="text-center text-[9px] text-muted font-mono">
              TECNOLOGÍA DE COMPARACIÓN SEGURA
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
