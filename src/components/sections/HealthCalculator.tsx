"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { isapreBasePlans, ISAPRE_PLANS_SOURCE } from "@/src/data/isapreBasePlans";

const UF_VALUE = 38500;
const MIN_RENTA = 500000;
const MAX_RENTA = 5000000;
const STEP = 50000;
const EASE = [0.32, 0.72, 0, 1] as const;

const isapresPlans = isapreBasePlans;

function formatCLP(value: number): string {
  return "$" + Math.round(value).toLocaleString("es-CL");
}

function getAdvice(
  coveredCount: number,
  total: number
): { text: string; type: "success" | "warning" | "danger" } {
  if (coveredCount === total) {
    return {
      text: "Con tu sueldo actual, el 7% que aportas alcanzaría el precio base mínimo de todas las Isapres mostradas. Recuerda que el costo final depende de tu edad y cargas.",
      type: "success",
    };
  }
  if (coveredCount >= Math.ceil(total / 2)) {
    return {
      text: `Tu 7% cubriría el precio base mínimo de ${coveredCount} de ${total} Isapres. En las demás el valor base supera tu aporte (sin contar factor de edad ni GES).`,
      type: "warning",
    };
  }
  return {
    text: "Con tu sueldo actual, el precio base mínimo de la mayoría de estas Isapres supera tu 7%. Un asesor puede ayudarte a encontrar opciones con copago o más ajustadas a tu perfil.",
    type: "danger",
  };
}

function BarChart({
  plans,
  sevenPercent,
  ufValue,
}: {
  plans: typeof isapresPlans;
  sevenPercent: number;
  ufValue: number;
}) {
  const maxPrice = Math.max(...plans.map((p) => p.priceUF * ufValue), sevenPercent * 1.15);
  const BAR_HEIGHT = 200;
  const refLineBottom = (sevenPercent / maxPrice) * BAR_HEIGHT;

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Área del gráfico con línea de referencia */}
      <div className="relative w-full" style={{ height: BAR_HEIGHT }}>
        <div
          className="absolute left-0 right-0 border-t-2 border-dashed border-navy z-10 pointer-events-none calc-ref-line"
          style={{ bottom: refLineBottom }}
        >
          <span className="absolute -top-6 right-0 text-[11px] font-bold text-navy bg-white px-2 py-0.5 rounded-xl border border-border shadow-premium-sm whitespace-nowrap">
            Tu 7%: {formatCLP(sevenPercent)}
          </span>
        </div>

        <div className="absolute inset-0 flex items-end gap-2 sm:gap-3">
          {plans.map((plan) => {
            const priceCLP = plan.priceUF * ufValue;
            const barHeightPx = Math.max((priceCLP / maxPrice) * BAR_HEIGHT, 10);
            const isCovered = priceCLP <= sevenPercent;

            return (
              <div key={plan.name} className="flex-1 h-full flex items-end min-w-0">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: barHeightPx }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className={`w-full rounded-t-xl calc-bar ${
                    isCovered
                      ? "bg-gradient-to-t from-emerald to-emerald-light"
                      : "bg-gradient-to-t from-slate-400 to-slate-300"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Etiquetas debajo de cada barra */}
      <div className="flex gap-2 sm:gap-3">
        {plans.map((plan) => {
          const priceCLP = plan.priceUF * ufValue;
          const isCovered = priceCLP <= sevenPercent;
          const shortName = plan.name.replace("Nueva ", "");

          return (
            <div key={plan.name} className="flex-1 flex flex-col items-center gap-1 min-w-0 text-center">
              <p className="text-[11px] font-bold text-navy tabular-nums leading-none">
                {plan.priceUF} UF
              </p>
              <p className="text-[10px] text-muted tabular-nums leading-none">
                {formatCLP(priceCLP)}
              </p>
              <p className="text-[11px] font-bold text-navy leading-tight mt-1 truncate w-full">
                {shortName}
              </p>
              <span
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none ${
                  isCovered ? "bg-emerald/10 text-emerald" : "bg-orange-50 text-orange-600"
                }`}
              >
                {isCovered ? "Alcanza" : "Copago"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HealthCalculator() {
  const [renta, setRenta] = useState(1200000);
  const [ufValue, setUfValue] = useState(UF_VALUE);

  useEffect(() => {
    fetch("https://mindicador.cl/api/uf")
      .then((res) => res.json())
      .then((data) => {
        if (data?.serie?.length > 0) setUfValue(data.serie[0].valor);
      })
      .catch((err) => console.error("Error fetching UF:", err));
  }, []);

  const calculations = useMemo(() => {
    const sevenPercent = renta * 0.07;
    const sevenPercentUF = sevenPercent / ufValue;

    const planDetails = isapresPlans.map((plan) => {
      const priceCLP = plan.priceUF * ufValue;
      const difference = sevenPercent - priceCLP;
      const isCovered = difference >= 0;
      return { ...plan, priceCLP, difference, isCovered };
    });

    const coveredCount = planDetails.filter((p) => p.isCovered).length;
    const advice = getAdvice(coveredCount, isapresPlans.length);

    return { sevenPercent, sevenPercentUF, planDetails, coveredCount, advice };
  }, [renta, ufValue]);

  const fillPercent = ((renta - MIN_RENTA) / (MAX_RENTA - MIN_RENTA)) * 100;

  const handleScrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="calculadora" className="w-full section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <span className="eyebrow">Calculadora del 7%</span>
          <h2 className="heading-section">¿Cuánto puedes pagar por tu Isapre?</h2>
          <p className="text-sm md:text-base font-medium text-muted max-w-2xl leading-relaxed">
            En Chile, el <strong className="text-navy font-bold">7% de tu sueldo imponible</strong> va
            obligatoriamente a salud. Comparamos ese monto con el <strong className="text-navy font-bold">precio base mínimo</strong> del
            plan más económico de cada Isapre (referencia {ISAPRE_PLANS_SOURCE.updatedAt}).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Panel izquierdo — control de renta */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="card-unified p-6 md:p-8 flex flex-col gap-7 hover:transform-none"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-muted uppercase tracking-wide">
                Tu sueldo imponible mensual
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <motion.span
                  key={renta}
                  initial={{ opacity: 0.5, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight tabular-nums"
                >
                  {formatCLP(renta)}
                </motion.span>
                <span className="text-sm font-medium text-muted">al mes</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Arrastra el control para simular distintos niveles de ingreso.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative w-full h-2.5 bg-bg-soft rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out bg-gradient-brand"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
              <input
                type="range"
                min={MIN_RENTA}
                max={MAX_RENTA}
                step={STEP}
                value={renta}
                onChange={(e) => setRenta(Number(e.target.value))}
                className="w-full h-2.5 appearance-none bg-transparent cursor-pointer -mt-5 relative z-10 min-h-[48px]
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-6
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:border-[3px]
                  [&::-webkit-slider-thumb]:border-navy
                  [&::-webkit-slider-thumb]:shadow-premium-md
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-6
                  [&::-moz-range-thumb]:h-6
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-[3px]
                  [&::-moz-range-thumb]:border-navy
                  [&::-moz-range-thumb]:shadow-premium-md
                  [&::-moz-range-thumb]:cursor-pointer
                  [&::-webkit-slider-runnable-track]:bg-transparent
                  [&::-moz-range-track]:bg-transparent"
                aria-label="Sueldo imponible mensual"
              />
              <div className="flex justify-between text-sm font-medium text-muted tabular-nums">
                <span>{formatCLP(MIN_RENTA)}</span>
                <span>{formatCLP(MAX_RENTA)}</span>
              </div>
            </div>

            {/* Resumen en 3 tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Aportas al mes (7%)",
                  value: formatCLP(calculations.sevenPercent),
                  hint: "Lo que va a salud por ley",
                },
                {
                  label: "Equivale en UF",
                  value: `${calculations.sevenPercentUF.toFixed(2)} UF`,
                  hint: "Valor en Unidades de Fomento",
                },
                {
                  label: "Planes que alcanzan",
                  value: `${calculations.coveredCount} de ${isapresPlans.length}`,
                  hint: "Sin pagar copago extra",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-bg-soft rounded-2xl p-4 flex flex-col gap-1.5 border border-border"
                >
                  <span className="text-xs font-bold text-navy leading-snug">{item.label}</span>
                  <motion.span
                    key={item.value}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="text-lg md:text-xl font-extrabold text-navy tabular-nums calc-value"
                  >
                    {item.value}
                  </motion.span>
                  <span className="text-xs text-muted leading-snug">{item.hint}</span>
                </div>
              ))}
            </div>

            {/* Consejo dinámico */}
            <AnimatePresence mode="wait">
              <motion.div
                key={calculations.advice.text}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`rounded-2xl p-4 flex items-start gap-3 text-xs md:text-sm leading-relaxed ${
                  calculations.advice.type === "success"
                    ? "bg-emerald/5 text-emerald border border-emerald/15"
                    : calculations.advice.type === "warning"
                    ? "bg-amber-50 text-amber-800 border border-amber-100"
                    : "bg-orange-50 text-orange-800 border border-orange-100"
                }`}
              >
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {calculations.advice.type === "success" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  )}
                </svg>
                <span className="font-medium">{calculations.advice.text}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Panel derecho — gráfico de barras */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="card-unified p-6 md:p-8 flex flex-col gap-5 hover:transform-none"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                Comparación visual: precio del plan vs. tu 7%
              </h3>
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                Cada barra muestra el <strong className="text-navy font-medium">precio base mínimo</strong> de
                cada Isapre (sin factor de edad ni GES). Si la barra queda
                <strong className="text-navy"> por debajo de la línea punteada</strong>, tu 7% cubriría ese
                valor base.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-emerald" />
                <span className="text-navy">Tu 7% alcanza</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-slate-400" />
                <span className="text-navy">Necesitas copago extra</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 border-t-2 border-dashed border-navy" />
                <span className="text-muted font-medium">Límite de tu 7%</span>
              </div>
            </div>

            <BarChart
              plans={isapresPlans}
              sevenPercent={calculations.sevenPercent}
              ufValue={ufValue}
            />
          </motion.div>
        </div>

        {/* Tabla comparativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="card-unified overflow-hidden hover:transform-none"
        >
          <div className="px-6 md:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                Detalle por Isapre
              </h3>
              <p className="text-xs text-muted mt-1">
                Cuánto cuesta el plan base y cuánto te sobra o falta respecto a tu 7%
              </p>
            </div>
            <span className="text-xs font-semibold text-muted bg-bg-soft px-3 py-1.5 rounded-xl border border-border tabular-nums">
              UF hoy: {formatCLP(ufValue)}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-bg-soft border-b border-border">
                  <th className="text-left px-6 md:px-8 py-3 text-xs font-bold text-navy">Isapre</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-navy hidden sm:table-cell">Plan de referencia</th>
                  <th className="text-right px-4 py-3 text-xs font-bold text-navy">Precio en UF</th>
                  <th className="text-right px-4 py-3 text-xs font-bold text-navy">Precio en pesos</th>
                  <th className="text-right px-4 py-3 text-xs font-bold text-navy hidden md:table-cell">¿Cuánto sobra o falta?</th>
                  <th className="text-right px-6 md:px-8 py-3 text-xs font-bold text-navy">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {calculations.planDetails.map((plan) => (
                  <motion.tr
                    key={plan.name}
                    layout
                    className="hover:bg-bg-soft/60 transition-colors duration-200"
                  >
                    <td className="px-6 md:px-8 py-4">
                      <span className="font-extrabold text-navy text-sm">{plan.name}</span>
                    </td>
                    <td className="px-4 py-4 text-muted text-xs hidden sm:table-cell leading-relaxed">
                      {plan.plan}
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-navy text-sm tabular-nums calc-value">
                      {plan.priceUF.toFixed(1)} UF
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-navy text-sm tabular-nums calc-value">
                      {formatCLP(plan.priceCLP)}
                    </td>
                    <td className="px-4 py-4 text-right hidden md:table-cell">
                      <motion.span
                        key={`${plan.name}-${plan.difference}`}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        className={`text-xs font-bold tabular-nums calc-value ${
                          plan.isCovered ? "text-emerald" : "text-orange-600"
                        }`}
                      >
                        {plan.isCovered
                          ? `Te sobran ${formatCLP(plan.difference)}`
                          : `Te faltan ${formatCLP(Math.abs(plan.difference))}`}
                      </motion.span>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-right">
                      {plan.isCovered ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald/10 text-emerald border border-emerald/20 whitespace-nowrap">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          Cubierto
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100 whitespace-nowrap">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                          </svg>
                          Con copago
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 md:px-8 py-5 bg-bg-soft border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-muted leading-relaxed max-w-2xl">
              Precios base mínimos por Isapre ({ISAPRE_PLANS_SOURCE.label}). El costo real incluye
              factor de edad/sexo, cargas familiares y GES, por lo que puede ser mayor. Valores
              referenciales; UF del día:{" "}
              <strong className="text-navy">{formatCLP(ufValue)}</strong>.
            </p>
            <button
              onClick={handleScrollToForm}
              className="group btn-cta-gradient inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-2xl shadow-premium-sm cursor-pointer whitespace-nowrap shrink-0 min-h-[48px]"
            >
              <span className="relative z-10">Cotizar mi plan ideal</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
