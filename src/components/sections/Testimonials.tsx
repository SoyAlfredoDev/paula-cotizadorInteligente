"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1] as const;

const testimonials = [
  {
    text: "La verdad es que llevaba meses postergando el tema de la Isapre porque me daba lata todo el papeleo. Acá me ayudaron a entender mi plan en simple y al final terminé pagando casi lo mismo pero con mejor cobertura. Quedé contenta.",
    name: "María José Fuentes",
    age: "34 años",
    region: "Metropolitana",
    isapre: "Banmédica",
    achievement: "Ahorro mensual: $45.000",
  },
  {
    text: "Yo pensaba que en Concepción no me iba a servir de mucho una Isapre, pero me mostraron varias opciones con clínicas de acá cerca. El que me atendió no me apuró ni me trató de vender nada raro, eso lo agradecí harto.",
    name: "Carlos Espinoza",
    age: "42 años",
    region: "del Biobío",
    isapre: "Consalud",
    achievement: "Cobertura: 80% hospitalaria",
  },
  {
    text: "Soy independiente y nunca cachaba bien cómo era el tema del 7%. Usé la calculadora medio desconfiada jaja pero me sirvió caleta para saber cuánto podía destinar. Terminé contratando Colmena y por ahora todo bien.",
    name: "Valentina Rojas",
    age: "28 años",
    region: "de Valparaíso",
    isapre: "Colmena",
    achievement: "Plan dentro del 7%",
  },
];

function StarRating({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`${size} text-amber-400`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-10 h-10 text-mint/15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: EASE,
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col p-6 gap-5 min-w-[300px] md:min-w-0 snap-center shrink-0 md:shrink"
    >
      <div className="flex items-start">
        <QuoteIcon />
      </div>

      <p className="text-sm text-muted leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="border-t border-border pt-4 flex flex-col gap-3">
        <StarRating count={5} size="w-4 h-4" />

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="heading-card text-sm">{testimonial.name}</span>
            <span className="text-xs text-muted">
              {testimonial.age} • {testimonial.region}
            </span>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-2xl text-[10px] font-bold tracking-wide bg-mint/10 text-mint-deep border border-mint/15 shrink-0">
            {testimonial.isapre}
          </span>
        </div>
      </div>

      <div className="bg-emerald/5 rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-emerald/10">
        <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span className="text-xs font-semibold text-emerald">{testimonial.achievement}</span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.scrollWidth / testimonials.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, testimonials.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonials.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section id="testimonios" className="w-full section-pad bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-3 mb-16"
        >
          <span className="eyebrow text-mint-deep">Testimonios</span>
          <h2 className="heading-section">Lo que dicen nuestros clientes</h2>
          <p className="text-sm md:text-base font-medium text-muted max-w-xl leading-relaxed">
            Miles de chilenos ya encontraron su plan de Isapre ideal con nuestra ayuda.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-2 -mx-6 px-6"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollTo("left")}
              disabled={!canScrollLeft}
              aria-label="Anterior"
              className="w-11 h-11 rounded-2xl bg-white border border-border shadow-premium-sm flex items-center justify-center text-muted hover:text-navy hover:shadow-premium-md transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-gradient-brand" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollTo("right")}
              disabled={!canScrollRight}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-2xl bg-white border border-border shadow-premium-sm flex items-center justify-center text-muted hover:text-navy hover:shadow-premium-md transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="flex justify-center mt-14"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-border shadow-premium-sm px-6 py-3">
            <StarRating count={5} size="w-4 h-4" />
            <span className="heading-card text-sm">4.9/5</span>
            <span className="text-xs text-muted font-medium">basado en +10.000 cotizaciones</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
