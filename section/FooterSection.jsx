import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building,
  DollarSign,
  BadgeInfo,
  TrendingUp,
} from "lucide-react";

export default function FooterSection() {
  // Variables de configuración de datos
  const companyName = "Cotizador Inteligente";
  const description =
    "Te ayudamos a encontrar el plan de Isapre ideal. Analizamos tu situación y te mostramos opciones reales para que elijas mejor y pagues lo justo.";
  const address = "Av. Providencia 1234, Oficina 501, Providencia, Santiago";
  const rut = "76.543.210-K";
  const whatsapp = "+56 9 1234 5678";
  const email = "contacto@cotizadorinteligente.cl";
  const ufValue = "$37.543,21";
  const dollarValue = "$945,50";
  const logo = ""; // Placeholder para logo texto
  const copyright = `© ${new Date().getFullYear()} ${companyName}. Todos los derechos reservados.`;

  return (
    <footer className="w-full bg-[#021f41] text-slate-300 py-12 px-6 border-t border-[#094fd1]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Columna 1: Marca y Descripción */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#01c676] font-bold shadow-lg text-lg">
              {logo}
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              {companyName}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 mt-2">
            {description}
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg mb-2">Contacto</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3 hover:text-white transition-colors">
              <MapPin className="w-5 h-5 text-[#01c676] flex-shrink-0" />
              <span>{address}</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-[#01c676] flex-shrink-0" />
              <a href={`tel:${whatsapp.replace(/\s+/g, "")}`}>{whatsapp}</a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-[#01c676] flex-shrink-0" />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Información Legal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg mb-2">Empresa</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <Building className="w-5 h-5 text-[#094fd1] flex-shrink-0" />
              <span>{companyName}</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <BadgeInfo className="w-5 h-5 text-[#094fd1] flex-shrink-0" />
              <span>RUT: {rut}</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Indicadores Económicos */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg mb-2">
            Indicadores Hoy
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#01c676]" />
                <span className="text-sm font-medium">Valor UF</span>
              </div>
              <span className="text-white font-semibold">{ufValue}</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#01c676]" />
                <span className="text-sm font-medium">Dólar Observado</span>
              </div>
              <span className="text-white font-semibold">{dollarValue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Inferior: Derechos Reservados */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>{copyright}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Políticas de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
