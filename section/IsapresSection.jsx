// IsapresSection.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IsapresSection() {
  const isapres = [
    { id: 1, name: "Colmena", logo: "/isapres/isapre-colmena.png" },
    { id: 2, name: "CruzBlanca", logo: "/isapres/isapre-cruz-blanca.jpeg" },
    { id: 3, name: "Consalud", logo: "/isapres/isapre-consalud.png" },
    { id: 4, name: "Banmédica", logo: "/isapres/isapre-banmedica.png" },
    { id: 5, name: "Vida Tres", logo: "/isapres/isapre-vida-tres.png" },
    { id: 6, name: "Masvida", logo: "/isapres/isapre-nueva-masvida.png" },
  ];
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center border-b border-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
          Isapres que podemos evaluar para ti
          <div className="w-4 h-1 bg-primary rounded-full"></div>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 flex items-center gap-4">
        <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-border text-muted hover:bg-soft transition-colors shadow-sm">
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
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="flex-1 flex justify-between items-center overflow-x-auto gap-4 py-4 hide-scrollbar">
          {/* Tarjetas de Logos (Placeholders de texto/div por el diseño) */}
          {isapres.map((isapre, index) => (
            <motion.div
              key={isapre.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-40 h-24 bg-white border border-light rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={isapre.logo}
                alt={isapre.name}
                width={100}
                height={100}
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
          ))}
        </div>

        <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-border text-muted hover:bg-soft transition-colors shadow-sm">
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
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-navy">
        <svg
          className="w-4 h-4 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
        <p>
          Comparamos opciones según tu perfil, renta, edad y necesidades de
          cobertura.
        </p>
      </div>

      {/* Paginadores inferiores */}
      <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-border rounded-full"></div>
        <div className="w-2 h-2 bg-border rounded-full"></div>
        <div className="w-2 h-2 bg-border rounded-full"></div>
      </div>
    </section>
  );
}
