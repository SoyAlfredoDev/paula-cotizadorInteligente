"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ISAPRES } from "@/src/data/isapres";

const EASE = [0.32, 0.72, 0, 1] as const;

const isapres = ISAPRES.map((isapre, id) => ({
  id: id + 1,
  slug: isapre.slug,
  name: isapre.name,
  logo: isapre.logo,
}));

/* Repetimos para cubrir pantallas anchas; la pista duplica el bloque para el loop -50% */
const baseTrack = [...isapres, ...isapres, ...isapres];
const marqueeTrack = [...baseTrack, ...baseTrack];

function IsapreLogo({
  isapre,
  index,
}: {
  isapre: (typeof isapres)[0];
  index: number;
}) {
  return (
    <Link
      href={`/isapres/${isapre.slug}`}
      className="inline-flex shrink-0 mx-4 md:mx-5 bg-bg-soft/50 border border-border p-2.5 rounded-2xl transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
      aria-label={`Ver planes de ${isapre.name}`}
    >
      <div className="w-52 h-28 md:w-60 md:h-32 bg-white rounded-2xl flex items-center justify-center p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
        <div className="relative w-full h-full">
          <Image
            src={isapre.logo}
            alt={`Logo de Isapre ${isapre.name}`}
            fill
            sizes="(max-width: 768px) 208px, 240px"
            className="object-contain filter contrast-[1.05]"
            priority={index < 7}
          />
        </div>
      </div>
    </Link>
  );
}

export default function Isapres() {
  return (
    <section
      id="isapres"
      className="w-full section-pad bg-white border-y border-border overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-col items-center gap-2 mb-12 text-center px-6"
      >
        <span className="eyebrow">Comparamos todas las Isapres</span>
        <h2 className="heading-section">Las principales Isapres de Chile</h2>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Pista única en fila horizontal — flex explícito en Tailwind */}
        <div className="flex flex-row flex-nowrap items-center w-max isapre-marquee-track py-3">
          {marqueeTrack.map((isapre, index) => (
            <IsapreLogo
              key={`${isapre.id}-${index}`}
              isapre={isapre}
              index={index % isapres.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
