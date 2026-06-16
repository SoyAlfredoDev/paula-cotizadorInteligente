"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ISAPRES } from "@/src/data/isapres";

const EASE = [0.32, 0.72, 0, 1] as const;

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-mint-deep shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function IsapreInfo() {
  const handleScrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="w-full section-pad bg-bg-site overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-3 mb-16"
        >
          <span className="eyebrow">Información de Isapres</span>
          <h2 className="heading-section">Conoce cada Isapre en detalle</h2>
          <p className="text-sm md:text-base font-medium text-muted max-w-2xl leading-relaxed">
            Información verificada de las 7 Isapres abiertas de Chile. Compara sus beneficios y
            encuentra la que mejor se adapta a tu perfil.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ISAPRES.map((isapre) => (
            <motion.div
              key={isapre.slug}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <Link href={`/isapres/${isapre.slug}`} className="p-6 flex flex-col gap-5 flex-1 group">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 rounded-2xl bg-bg-soft border border-border flex items-center justify-center p-2.5 shrink-0 shadow-premium-sm group-hover:shadow-premium-md transition-shadow">
                    <div className="relative w-full h-full">
                      <Image src={isapre.logo} alt={`Logo ${isapre.name}`} fill sizes="72px" className="object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="heading-card">{isapre.name}</h3>
                    <span className="eyebrow text-[10px]">Desde {isapre.plans[0].priceUF} UF base</span>
                  </div>
                </div>

                <p className="text-xs text-muted leading-relaxed">{isapre.description}</p>

                <div className="flex flex-col gap-2.5">
                  <span className="eyebrow text-[10px]">Beneficios Clave</span>
                  <ul className="flex flex-col gap-2">
                    {isapre.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-xs text-muted">
                        <CheckIcon />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {isapre.plans.map((plan) => (
                    <span
                      key={plan.code}
                      className="inline-flex items-center px-2.5 py-1 rounded-2xl text-[10px] font-bold tracking-wide bg-mint/10 text-mint-deep border border-mint/15"
                    >
                      {plan.badge ?? plan.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  ))}
                </div>
              </Link>

              <div className="px-6 pb-6 pt-0 flex flex-col gap-2">
                <Link
                  href={`/isapres/${isapre.slug}`}
                  className="group w-full btn-cta-gradient inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-3 rounded-2xl shadow-premium-sm min-h-[44px]"
                >
                  <span className="relative z-10">Ver planes de {isapre.name}</span>
                  <span className="relative z-10"><ArrowIcon /></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mt-16"
        >
          <p className="text-sm text-muted max-w-lg leading-relaxed">
            ¿No sabes cuál elegir? Completa el formulario y nuestros asesores expertos te
            recomendarán las mejores opciones según tu perfil.
          </p>
          <button
            onClick={handleScrollToForm}
            className="group btn-cta-gradient inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-2xl shadow-premium-md cursor-pointer min-h-[44px]"
          >
            <span className="relative z-10">Cotizar ahora</span>
            <span className="relative z-10"><ArrowIcon /></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
