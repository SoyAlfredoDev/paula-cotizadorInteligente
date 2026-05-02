// HowItWorksSection.jsx
"use client";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Respondes algunas preguntas",
      description: "En menos de 2 minutos.",
      icon: (
        <svg
          className="w-8 h-8 text-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
    },
    {
      number: 2,
      title: "Revisamos tu caso",
      description: "Analizamos tu perfil y tu plan actual de salud.",
      icon: (
        <svg
          className="w-8 h-8 text-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
    },
    {
      number: 3,
      title: "Te mostramos hasta 3 opciones reales",
      description: "Con precios, coberturas y beneficios comparados.",
      icon: (
        <svg
          className="w-8 h-8 text-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
    },
    {
      number: 4,
      title: "Tú eliges",
      description: "Tú decides la mejor opción, nosotros te acompañamos.",
      icon: (
        <svg
          className="w-8 h-8 text-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 bg-soft flex flex-col items-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-navy mb-16 text-center"
      >
        ¿Cómo funciona?
      </motion.h2>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-border shadow-sm">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-soft">
                {step.number}
              </div>
            </div>

            <h3 className="text-base font-bold text-navy mb-2 min-h-[48px] px-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted max-w-[200px]">
              {step.description}
            </p>

            {/* Arrow connecting steps (hidden on mobile, visible on md+) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 right-[-15%] text-border w-1/3">
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
