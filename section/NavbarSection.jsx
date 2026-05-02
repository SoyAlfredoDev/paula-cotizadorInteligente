"use client";

// NavbarSection.jsx
import { motion } from "framer-motion";

export default function NavbarSection() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white px-6 py-4 flex items-center justify-between border-b border-light sticky top-0 z-50"
    >
      <div className="flex items-center gap-3">
        {/* Logo Placeholder */}
        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-primary font-bold shadow-lg"></div>
        <div className="flex flex-col">
          <span className="text-navy font-bold text-xl leading-tight">
            Cotizador Inteligente
          </span>
          <span className="text-muted text-xs">Elige mejor, paga lo justo</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex flex-col items-center">
          <a href="#" className="text-navy font-medium text-sm">
            Inicio
          </a>
          <div className="w-6 h-[2px] bg-primary mt-1 rounded-full"></div>
        </div>
        <a
          href="#"
          className="text-muted hover:text-navy font-medium text-sm transition-colors"
        >
          ¿Cómo funciona?
        </a>
        <a
          href="#"
          className="text-muted hover:text-navy font-medium text-sm transition-colors"
        >
          Isapres
        </a>
        <a
          href="#"
          className="text-muted hover:text-navy font-medium text-sm transition-colors"
        >
          Beneficios
        </a>
        <a
          href="#"
          className="text-muted hover:text-navy font-medium text-sm transition-colors"
        >
          Preguntas frecuentes
        </a>
        <a
          href="#"
          className="text-muted hover:text-navy font-medium text-sm transition-colors"
        >
          Contacto
        </a>
      </div>

      <button className="bg-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-md">
        <svg
          className="w-5 h-5"
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
        Cotizar ahora
      </button>
    </motion.nav>
  );
}
