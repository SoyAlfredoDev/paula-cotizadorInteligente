"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FooterSection() {
  const companyName = "Cotizador Inteligente";
  const description =
    "Te ayudamos a encontrar el plan de Isapre ideal. Analizamos tu situación de forma digital e imparcial para que pagues lo justo por tu salud.";
  const address = "Av. Providencia 1234, Oficina 501, Providencia, Santiago";
  const rut = "76.543.210-K";
  const whatsapp = "+56 9 1234 5678";
  const email = "contacto@cotizadorinteligente.cl";
  const copyright = `© ${new Date().getFullYear()} ${companyName}. Todos los derechos reservados.`;

  const [ufValue, setUfValue] = useState(null);
  const [dollarValue, setDollarValue] = useState(null);
  const [indicatorDate, setIndicatorDate] = useState("");

  useEffect(() => {
    fetch("https://mindicador.cl/api")
      .then((res) => res.json())
      .then((data) => {
        if (data?.uf?.valor) setUfValue(data.uf.valor);
        if (data?.dolar?.valor) setDollarValue(data.dolar.valor);
        if (data?.uf?.fecha) {
          const date = new Date(data.uf.fecha);
          setIndicatorDate(
            date.toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric" })
          );
        }
      })
      .catch((err) => console.error("Error fetching indicadores:", err));
  }, []);

  const formatCLP = (value) => {
    if (value == null) return "Cargando…";
    return "$" + Math.round(value).toLocaleString("es-CL");
  };

  return (
    <footer id="contacto" className="w-full bg-navy text-slate-400 section-pad px-6 border-t border-navy-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-cotizador-inteligente.png"
              alt="Cotizador Inteligente"
              width={160}
              height={36}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-3">
          <h3 className="text-white font-bold text-sm tracking-wider uppercase">Contacto</h3>
          <ul className="flex flex-col gap-3 text-xs">
            <li className="flex items-start gap-3 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{address}</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.294-.97c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href={`tel:${whatsapp.replace(/\s+/g, "")}`}>{whatsapp}</a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h3 className="text-white font-bold text-sm tracking-wider uppercase">Empresa</h3>
          <ul className="flex flex-col gap-3 text-xs">
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v18H3V3z" />
              </svg>
              <span>RUT: {rut}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-3">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">Indicadores Hoy</h3>
            {indicatorDate && (
              <span className="text-[10px] text-slate-500 font-mono">{indicatorDate}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between bg-navy-light/40 p-3 rounded-2xl border border-navy-light/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span className="text-xs font-semibold text-white">Valor UF</span>
              </div>
              <span className={`text-xs font-mono font-bold ${ufValue ? "text-white" : "text-slate-500 animate-pulse"}`}>
                {formatCLP(ufValue)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-navy-light/40 p-3 rounded-2xl border border-navy-light/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.971-.659-1.171-.879-1.171-2.303 0-3.182 1.172-.879 3.07-.879 4.242 0 .88.66.88 1.885.88 1.885M6 18.75h12M12 2.25V4.5m0 15v2.25" />
                </svg>
                <span className="text-xs font-semibold text-white">Dólar Observado</span>
              </div>
              <span className={`text-xs font-mono font-bold ${dollarValue ? "text-white" : "text-slate-500 animate-pulse"}`}>
                {formatCLP(dollarValue)}
              </span>
            </div>
          </div>
          <p className="text-[9px] text-slate-500 font-mono">Fuente: mindicador.cl — Banco Central de Chile</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-navy-light flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
        <p>{copyright}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
