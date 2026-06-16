"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { IsapreDetail } from "@/src/data/isapres";
import { ISAPRE_DATA_SOURCE } from "@/src/data/isapres";

const EASE = [0.32, 0.72, 0, 1] as const;
const COTIZAR_HREF = "/#quote-form";

type Props = {
  isapre: IsapreDetail;
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function IsapreDetailView({ isapre }: Props) {
  const minPlan = isapre.plans[0];

  return (
    <article className="w-full bg-bg-site">
      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-border bg-white hero-grid-bg">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-mint/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-32 md:pb-16 relative z-10">
          <Link
            href="/#isapres"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-navy transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Volver a todas las Isapres
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col gap-5"
            >
              <span className="eyebrow w-fit">Isapre abierta · {isapre.group}</span>
              <h1 className="heading-display">
                Planes <span className="text-gradient-brand">{isapre.name}</span>
              </h1>
              <p className="text-lg font-semibold text-navy-light">{isapre.tagline}</p>
              <p className="text-sm md:text-base text-muted leading-relaxed max-w-xl">{isapre.pitch}</p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={COTIZAR_HREF}
                  className="btn-cta-gradient inline-flex items-center justify-center gap-2 text-sm font-bold px-8 py-3.5 rounded-2xl shadow-premium-md min-h-[48px]"
                >
                  <span className="relative z-10">Cotizar {isapre.name} gratis</span>
                  <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href={`https://${isapre.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-2xl bg-white border border-border text-navy shadow-premium-sm hover:shadow-premium-md min-h-[48px] transition-all"
                >
                  Sitio oficial
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="card-unified p-8 flex flex-col items-center gap-6 hover:transform-none"
            >
              <div className="relative w-48 h-28 md:w-56 md:h-32">
                <Image src={isapre.logo} alt={`Logo ${isapre.name}`} fill className="object-contain" sizes="224px" priority />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { label: "Desde", value: `${minPlan.priceUF} UF`, sub: "precio base mín." },
                  { label: "Planes", value: `${isapre.plansCatalog}+`, sub: "en catálogo" },
                  { label: "Hospitalario", value: isapre.hospitalCoverage, sub: "cobertura prom." },
                  { label: "Prestadores", value: `${isapre.prestadores}+`, sub: "en convenio" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-bg-soft rounded-2xl p-4 text-center border border-border">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wide">{stat.label}</p>
                    <p className="text-xl font-extrabold text-navy mt-1">{stat.value}</p>
                    <p className="text-[10px] text-muted mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planes destacados */}
      <section className="section-pad bg-bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-10">
            <span className="eyebrow">Planes destacados</span>
            <h2 className="heading-section">Opciones de {isapre.name} para comparar</h2>
            <p className="text-sm text-muted max-w-2xl">
              Precios base referenciales ({ISAPRE_DATA_SOURCE.updatedAt}). El costo final depende de tu edad, sexo y cargas familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isapre.plans.map((plan, idx) => (
              <motion.div
                key={plan.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: EASE }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover p-6 flex flex-col gap-4 transition-shadow"
              >
                {plan.badge && (
                  <span className="self-start text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gradient-brand text-white">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h3 className="heading-card text-base">{plan.name}</h3>
                  <p className="text-[10px] text-muted font-mono mt-1">{plan.code}</p>
                </div>
                <p className="text-3xl font-extrabold text-navy tabular-nums">
                  {plan.priceUF} <span className="text-base font-bold text-muted">UF base</span>
                </p>
                <p className="text-sm text-muted leading-relaxed flex-1">{plan.description}</p>
                <Link
                  href={COTIZAR_HREF}
                  className="w-full text-center text-sm font-bold py-3 rounded-2xl border border-border text-navy hover:bg-bg-soft transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Cotizar este plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios + Ideal para */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Beneficios</span>
            <h2 className="heading-section mt-2 mb-6">¿Por qué elegir {isapre.name}?</h2>
            <ul className="flex flex-col gap-4">
              {isapre.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-muted">
                  <CheckIcon />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Perfil ideal</span>
            <h2 className="heading-section mt-2 mb-6">¿Para quién es {isapre.name}?</h2>
            <ul className="flex flex-col gap-3">
              {isapre.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-bg-soft rounded-2xl px-4 py-3 border border-border text-sm text-navy font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-bg-soft border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {isapre.highlights.map((h, idx) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-border p-6 shadow-premium-sm"
            >
              <h3 className="heading-card text-base mb-2">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
            ¿Listo para cotizar tu plan en {isapre.name}?
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Completa el formulario en menos de 2 minutos. Un asesor certificado te contactará con hasta 3 opciones personalizadas, sin costo y sin compromiso.
          </p>
          <Link
            href={COTIZAR_HREF}
            className="btn-cta-gradient inline-flex items-center gap-2 text-base font-bold px-10 py-4 rounded-2xl shadow-premium-lg min-h-[52px]"
          >
            <span className="relative z-10">Cotizar {isapre.name} ahora</span>
            <svg className="relative z-10 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <p className="text-xs text-slate-500">{ISAPRE_DATA_SOURCE.label}</p>
        </div>
      </section>
    </article>
  );
}
