"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.32, 0.72, 0, 1];

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "¿Cómo funciona?", href: "#como-funciona" },
    { name: "Isapres", href: "#isapres" },
    { name: "Calculadora", href: "#calculadora" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleScrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-7xl w-full bg-white/85 backdrop-blur-md rounded-2xl border border-border/60 shadow-premium-sm px-6 py-3 flex items-center justify-between transition-all"
        >
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/images/logo-cotizador-inteligente.png"
              alt="Cotizador Inteligente — Elige mejor, paga lo justo"
              width={180}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="group relative text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] rounded-full transition-all group-hover:w-full bg-gradient-brand" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollToForm}
              className="hidden sm:flex btn-cta-gradient text-sm font-bold px-5 py-2.5 rounded-2xl items-center gap-2 shadow-premium-sm cursor-pointer min-h-[44px]"
            >
              <span className="relative z-10">Cotizar ahora</span>
              <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-11 h-11 rounded-2xl border border-border bg-white shadow-premium-sm hover:bg-bg-soft transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[2px] bg-navy rounded-full block origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-[2px] bg-navy rounded-full block"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[2px] bg-navy rounded-full block origin-center"
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white/90 hover:text-emerald transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-6"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToForm();
                  }}
                  className="w-full btn-cta-gradient text-lg font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-premium-lg cursor-pointer min-h-[44px]"
                >
                  <span className="relative z-10">Cotizar ahora</span>
                  <svg className="relative z-10 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
