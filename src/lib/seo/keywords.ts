/**
 * Estrategia de palabras clave — basada en búsquedas reales del mercado chileno (2025–2026).
 *
 * Intención transaccional (alta conversión):
 * - cotizar isapre, cotizar isapre chile, cotizar isapre online
 * - comparar isapres, comparador de isapres chile
 * - simulador isapre 7%, calcular 7% isapre
 *
 * Intención comercial (consideración):
 * - mejor isapre chile, qué isapre me conviene
 * - planes de isapre, cotización isapre 2026
 * - cambiar de isapre, traspaso isapre gratis
 *
 * Long-tail (captura de nicho):
 * - plan isapre solo con el 7%, isapre con mejor cobertura hospitalaria
 * - comparar banmédica colmena consalud, isapre clínica alemana
 * - cotizar isapre sin compromiso, asesoría isapre gratuita
 *
 * Marcas (7 Isapres abiertas):
 * Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres, Esencial
 */

export const PRIMARY_KEYWORDS = [
  "cotizar isapre chile",
  "comparar isapres chile",
  "comparador de isapres",
  "cotizador de isapres",
  "mejor isapre chile",
  "planes de isapre",
  "simulador isapre 7%",
  "calcular 7% isapre",
  "cotización isapre 2026",
  "cambiar de isapre",
] as const;

export const SECONDARY_KEYWORDS = [
  "cotizar isapre online gratis",
  "qué isapre me conviene",
  "isapre con mejor cobertura",
  "plan isapre familiar",
  "plan isapre económico",
  "comparar planes de salud chile",
  "asesoría isapre gratuita",
  "cotizar isapre sin compromiso",
  "isapres abiertas chile",
  "tope imponible isapre 2026",
  "cobertura hospitalaria isapre",
  "traspaso isapre gratis",
  "isapre vs fonasa",
  "GES isapre",
] as const;

export const ISAPRE_BRAND_KEYWORDS = [
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Nueva Masvida",
  "Vida Tres",
  "Esencial",
] as const;

export const HOME_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...SECONDARY_KEYWORDS.slice(0, 8),
  ...ISAPRE_BRAND_KEYWORDS,
];

export function getIsapreKeywords(isapreName: string, slug: string): string[] {
  const normalized = isapreName.toLowerCase();
  return [
    `cotizar ${normalized}`,
    `planes ${normalized}`,
    `${normalized} chile`,
    `${normalized} 2026`,
    `mejor plan ${normalized}`,
    `precio ${normalized}`,
    `cotización ${normalized}`,
    `comparar ${normalized}`,
    ...PRIMARY_KEYWORDS.slice(0, 4),
    slug,
  ];
}
