"use client";

import { motion } from "framer-motion";
import { HOME_FAQS } from "@/src/data/seoFaqs";

const EASE = [0.32, 0.72, 0, 1] as const;

export default function FaqSection() {
  return (
    <section
      id="preguntas-frecuentes"
      className="w-full section-pad bg-white border-t border-border"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-10"
        >
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="faq-heading" className="heading-section mt-2">
            Dudas comunes al cotizar una Isapre
          </h2>
          <p className="text-sm text-muted mt-3 leading-relaxed">
            Respuestas claras sobre cotización, el 7% legal y cómo elegir entre las 7 Isapres de Chile.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {HOME_FAQS.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: EASE }}
              className="group bg-bg-soft rounded-2xl border border-border overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-bold text-sm text-navy flex items-center justify-between gap-4 min-h-[44px]">
                <span>{faq.question}</span>
                <span className="text-mint-deep text-lg leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted leading-relaxed border-t border-border/60 pt-3">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
