/**
 * Catálogo unificado de las 7 Isapres abiertas de Chile.
 * Precios base referenciales junio 2026 (quvi.cl / catálogos oficiales).
 */

export type IsaprePlanTier = {
  name: string;
  code: string;
  priceUF: number;
  description: string;
  badge?: string;
};

export type IsapreDetail = {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  pitch: string;
  group: string;
  website: string;
  plansCatalog: number;
  prestadores: number;
  avgPriceUF: number;
  hospitalCoverage: string;
  ambulatoryCoverage: string;
  plans: IsaprePlanTier[];
  benefits: string[];
  highlights: { title: string; text: string }[];
  idealFor: string[];
};

export const ISAPRE_DATA_SOURCE = {
  label: "Catálogos oficiales Isapre · referencia junio 2026",
  updatedAt: "2026-06",
} as const;

export const ISAPRES: IsapreDetail[] = [
  {
    slug: "banmedica",
    name: "Banmédica",
    logo: "/isapres/isapre-banmedica.png",
    tagline: "Red propia y planes desde menos de 1 UF",
    description:
      "Una de las Isapres más grandes de Chile, con red integrada que incluye Clínica Santa María, Dávila y una amplia red de prestadores en todo el país.",
    pitch:
      "Si buscas atención en clínicas de referencia con copagos preferentes en red propia, Banmédica combina precio competitivo y una de las ofertas más amplias del mercado: más de 240 planes para elegir.",
    group: "Grupo Banmédica",
    website: "banmedica.cl",
    plansCatalog: 242,
    prestadores: 46,
    avgPriceUF: 2.9,
    hospitalCoverage: "72%",
    ambulatoryCoverage: "63%",
    plans: [
      {
        name: "Salud Conecta Clásico",
        code: "BSCC260100",
        priceUF: 0.94,
        description: "Plan de entrada con cobertura esencial y enfoque digital.",
        badge: "Más económico",
      },
      {
        name: "Salud Preferente",
        code: "BPRF260100",
        priceUF: 2.4,
        description: "Red preferente con mejores copagos en clínicas en convenio.",
      },
      {
        name: "Lite Salud Preferente Ultra",
        code: "BPRU24111116",
        priceUF: 8.17,
        description: "Máxima cobertura hospitalaria y ambulatoria en red premium.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Red propia: Clínica Santa María, Dávila y más",
      "Copagos preferentes en prestadores Banmédica",
      "App y telemedicina para gestionar tu salud",
      "Amplio catálogo para jóvenes, familias y adultos mayores",
    ],
    highlights: [
      { title: "Desde 0,94 UF base", text: "Uno de los planes mínimos más bajos del mercado abierto." },
      { title: "242 planes vigentes", text: "Gran flexibilidad para ajustar cobertura y presupuesto." },
      { title: "Red clínica propia", text: "Atención preferente en centros de alta demanda en RM y regiones." },
    ],
    idealFor: [
      "Familias que valoran clínicas Santa María o Dávila",
      "Quienes buscan el plan más económico posible",
      "Personas que quieren muchas opciones para comparar",
    ],
  },
  {
    slug: "cruz-blanca",
    name: "Cruz Blanca",
    logo: "/isapres/isapre-cruz-blanca.jpeg",
    tagline: "Respaldo Bupa y cobertura nacional",
    description:
      "Isapre del grupo Bupa con fuerte presencia nacional, orientada a planes preferentes y cobertura hospitalaria robusta.",
    pitch:
      "Cruz Blanca es ideal si quieres el respaldo internacional de Bupa, buena cobertura ambulatoria y un equilibrio entre precio y red de clínicas en las principales ciudades del país.",
    group: "Grupo Bupa",
    website: "cruzblanca.cl",
    plansCatalog: 512,
    prestadores: 43,
    avgPriceUF: 3.14,
    hospitalCoverage: "82%",
    ambulatoryCoverage: "74%",
    plans: [
      {
        name: "Campus Bupa Max 100",
        code: "CMBX001D25",
        priceUF: 1.09,
        description: "Plan base con cobertura en red Campus Bupa.",
        badge: "Más económico",
      },
      {
        name: "Solución Preferente",
        code: "SLPR218526",
        priceUF: 2.8,
        description: "Copagos moderados en red preferente ampliada.",
      },
      {
        name: "Solución 2 Octava",
        code: "SLRO218526",
        priceUF: 7.91,
        description: "Alta protección con topes elevados y libre elección parcial.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Respaldo y estándares del grupo Bupa",
      "Orientación médica y canales digitales",
      "Red preferente en Santiago, Valparaíso y Concepción",
      "Más de 500 planes para distintos presupuestos",
    ],
    highlights: [
      { title: "82% cobertura hospitalaria prom.", text: "Entre las más altas del sistema abierto." },
      { title: "Desde 1,09 UF base", text: "Acceso a Isapre Bupa con precio de entrada competitivo." },
      { title: "512 planes", text: "El catálogo más amplio entre las Isapres abiertas." },
    ],
    idealFor: [
      "Profesionales que viajan y valoran marca internacional",
      "Familias en regiones con red Bupa",
      "Quienes priorizan buena cobertura ambulatoria",
    ],
  },
  {
    slug: "colmena",
    name: "Colmena",
    logo: "/isapres/isapre-colmena.png",
    tagline: "Estabilidad y libre elección",
    description:
      "Isapre del Grupo Bethia con tradición desde 1981, reconocida por planes estables y excelente cobertura en clínicas privadas de prestigio.",
    pitch:
      "Colmena es una apuesta segura si quieres libre elección de médico, buena cobertura hospitalaria y la tranquilidad de una Isapre con trayectoria y solidez financiera.",
    group: "Grupo Bethia",
    website: "colmena.cl",
    plansCatalog: 448,
    prestadores: 66,
    avgPriceUF: 2.71,
    hospitalCoverage: "78%",
    ambulatoryCoverage: "66%",
    plans: [
      {
        name: "Colmena Star",
        code: "ST2264040",
        priceUF: 1.15,
        description: "Plan de entrada con prestadores preferentes seleccionados.",
        badge: "Más económico",
      },
      {
        name: "Colmena Clásico",
        code: "CL32610080",
        priceUF: 2.6,
        description: "Equilibrio entre precio y cobertura en clínicas privadas.",
      },
      {
        name: "Colmena Pro",
        code: "PR32610080",
        priceUF: 5.32,
        description: "Cobertura amplia con libre elección y topes altos.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Libre elección de médico en convenio",
      "Fuerte presencia en clínicas privadas de Santiago",
      "Planes familiares y para adultos mayores",
      "Red de más de 66 prestadores en convenio",
    ],
    highlights: [
      { title: "448 planes", text: "Flexibilidad para cambiar de plan sin cambiar de Isapre." },
      { title: "Grupo Bethia", text: "Respaldo de uno de los holdings más sólidos del sector." },
      { title: "78% hospitalario prom.", text: "Ideal para quienes priorizan cirugías e hospitalizaciones." },
    ],
    idealFor: [
      "Ejecutivos que buscan clínicas privadas de referencia",
      "Familias con necesidad de libre elección",
      "Personas que valoran estabilidad y trayectoria",
    ],
  },
  {
    slug: "consalud",
    name: "Consalud",
    logo: "/isapres/isapre-consalud.png",
    tagline: "Precio congelado 2026 y gran variedad",
    description:
      "Isapre del Grupo CChC con fuerte foco regional, precios competitivos y uno de los catálogos más variados del mercado.",
    pitch:
      "En 2026 Consalud mantuvo congelados sus precios base: es un momento oportuno para cotizar. Ofrece planes desde jóvenes independientes hasta familias en regiones.",
    group: "Grupo CChC",
    website: "consalud.cl",
    plansCatalog: 435,
    prestadores: 59,
    avgPriceUF: 3.09,
    hospitalCoverage: "82%",
    ambulatoryCoverage: "67%",
    plans: [
      {
        name: "Core 10",
        code: "13-CORE101-26",
        priceUF: 1.16,
        description: "Plan básico con cobertura esencial nacional.",
        badge: "Más económico",
      },
      {
        name: "Plan Regional",
        code: "13-REG150-26",
        priceUF: 2.2,
        description: "Optimizado para regiones con red preferente local.",
      },
      {
        name: "Select Full Centro",
        code: "13-SFC150-26",
        priceUF: 6.42,
        description: "Cobertura premium en Santiago y principales capitales regionales.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Precios base sin alza en 2026 (congelamiento oficial)",
      "Excelentes alternativas fuera de Santiago",
      "Planes para jóvenes y trabajadores independientes",
      "Integración con red Cruz Blanca en algunos convenios",
    ],
    highlights: [
      { title: "Sin alza 2026", text: "La Superintendencia confirmó congelamiento de precios base." },
      { title: "59 prestadores", text: "Buena cobertura en regiones y zonas extremas." },
      { title: "Desde 1,16 UF", text: "Entrada accesible para cotizantes jóvenes." },
    ],
    idealFor: [
      "Trabajadores en regiones fuera de Santiago",
      "Jóvenes que recién cotizan su 7%",
      "Quienes buscan aprovechar el congelamiento de tarifas",
    ],
  },
  {
    slug: "nueva-masvida",
    name: "Nueva Masvida",
    logo: "/isapres/isapre-nueva-masvida.png",
    tagline: "Precios competitivos y atención digital",
    description:
      "Isapre del Grupo Nexus enfocada en transparencia, precios accesibles y experiencia digital para afiliados.",
    pitch:
      "Nueva Masvida es una excelente opción si quieres pagar lo justo sin renunciar a cobertura hospitalaria sólida. Su propuesta digital facilita reembolsos y consultas en línea.",
    group: "Grupo Nexus",
    website: "nuevamasvida.cl",
    plansCatalog: 181,
    prestadores: 36,
    avgPriceUF: 3.13,
    hospitalCoverage: "88%",
    ambulatoryCoverage: "71%",
    plans: [
      {
        name: "Pleno Salud",
        code: "PS251000",
        priceUF: 1.18,
        description: "Plan económico con red preferente seleccionada.",
        badge: "Más económico",
      },
      {
        name: "Pleno Protegido",
        code: "PP251100",
        priceUF: 2.5,
        description: "Mayor cobertura ambulatoria y hospitalaria.",
      },
      {
        name: "Pleno Max",
        code: "PM260336",
        priceUF: 6.05,
        description: "Máxima protección con topes elevados.",
        badge: "Premium",
      },
    ],
    benefits: [
      "88% de cobertura hospitalaria promedio (la más alta del grupo)",
      "Gestión 100% online de reembolsos y bonos",
      "Planes claros sin letra chica excesiva",
      "Buen equilibrio precio-cobertura para familias",
    ],
    highlights: [
      { title: "88% hospitalario", text: "Lidera en cobertura hospitalaria entre Isapres comparables." },
      { title: "Desde 1,18 UF", text: "Precio base bajo con buena protección." },
      { title: "Experiencia digital", text: "App y portal para resolver trámites sin filas." },
    ],
    idealFor: [
      "Familias que buscan buen hospitalario sin pagar de más",
      "Usuarios cómodos con trámites 100% digitales",
      "Quienes comparan precio vs. cobertura real",
    ],
  },
  {
    slug: "vida-tres",
    name: "Vida Tres",
    logo: "/isapres/isapre-vida-tres.png",
    tagline: "Mismo grupo Banmédica, enfoque flexible",
    description:
      "Isapre del ecosistema Banmédica orientada a planes flexibles, reembolsos ágiles y acceso a la red clínica del grupo.",
    pitch:
      "Vida Tres comparte la red de Banmédica pero con planes más flexibles y orientados a quienes quieren personalizar su cobertura. Ideal para profesionales exigentes.",
    group: "Grupo Banmédica",
    website: "vidatres.cl",
    plansCatalog: 184,
    prestadores: 45,
    avgPriceUF: 3.07,
    hospitalCoverage: "74%",
    ambulatoryCoverage: "64%",
    plans: [
      {
        name: "Vanguardia Plus Gold",
        code: "VPG260500",
        priceUF: 1.29,
        description: "Plan de entrada con beneficios en red Banmédica.",
        badge: "Más económico",
      },
      {
        name: "Vanguardia Preferente",
        code: "VPRF260500",
        priceUF: 2.7,
        description: "Copagos bajos en clínicas del grupo y convenios.",
      },
      {
        name: "Vanguardia Premium Ultra",
        code: "VPRU24111116",
        priceUF: 8.25,
        description: "Cobertura top con libre elección ampliada.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Acceso a red clínica Banmédica (Santa María, Dávila)",
      "Reembolsos rápidos en modalidad libre elección",
      "Planes modulares según etapa de vida",
      "Atención personalizada para cargas familiares",
    ],
    highlights: [
      { title: "Red Banmédica", text: "Mismos prestadores de referencia con otra línea de planes." },
      { title: "Flexibilidad", text: "Arma tu plan según uso ambulatorio u hospitalario." },
      { title: "Desde 1,29 UF", text: "Entrada razonable para red de primer nivel." },
    ],
    idealFor: [
      "Profesionales que ya conocen la red Banmédica",
      "Familias que quieren planes modulares",
      "Quienes usan libre elección con reembolso",
    ],
  },
  {
    slug: "esencial",
    name: "Esencial",
    logo: "/isapres/isapre-esencial.png",
    tagline: "La Isapre digital del Grupo Alemana",
    description:
      "La Isapre más nueva del mercado chileno, respaldada por Clínica Alemana, con modelo 100% digital y enfoque preventivo.",
    pitch:
      "Esencial es la opción moderna: contratas en minutos, gestionas todo desde el celular y tienes el respaldo clínico del Grupo Alemana. Perfecta para quienes quieren simplicidad y tecnología.",
    group: "Grupo Alemana",
    website: "somosesencial.cl",
    plansCatalog: 71,
    prestadores: 55,
    avgPriceUF: 3.73,
    hospitalCoverage: "81%",
    ambulatoryCoverage: "66%",
    plans: [
      {
        name: "Plan Único Andes Salud 50",
        code: "AS50500226",
        priceUF: 1.73,
        description: "Plan simplificado con cobertura clara y digital.",
        badge: "Más económico",
      },
      {
        name: "Plan Evolución",
        code: "EV60700226",
        priceUF: 3.2,
        description: "Más cobertura preventiva y acceso Alemana selecto.",
      },
      {
        name: "Esencial 100",
        code: "E100800925",
        priceUF: 7.92,
        description: "Máxima cobertura con red Alemana y topes altos.",
        badge: "Premium",
      },
    ],
    benefits: [
      "Respaldo Clínica Alemana y Grupo Alemana",
      "Contratación y cambios 100% online",
      "Enfoque en medicina preventiva y chequeos",
      "Planes simples de entender, sin complejidad innecesaria",
    ],
    highlights: [
      { title: "100% digital", text: "Afíliate, cambia plan y pide reembolsos sin papeleo." },
      { title: "Grupo Alemana", text: "Acceso a uno de los grupos clínicos más prestigiosos de Chile." },
      { title: "71 planes", text: "Catálogo curado, fácil de comparar." },
    ],
    idealFor: [
      "Millennials y profesionales digitales",
      "Quienes valoran Clínica Alemana",
      "Personas que quieren un plan simple y transparente",
    ],
  },
];

export function getAllIsapreSlugs(): string[] {
  return ISAPRES.map((i) => i.slug);
}

export function getIsapreBySlug(slug: string): IsapreDetail | undefined {
  return ISAPRES.find((i) => i.slug === slug);
}

export function getIsapreListItem(slug: string) {
  const isapre = getIsapreBySlug(slug);
  if (!isapre) return undefined;
  return {
    slug: isapre.slug,
    name: isapre.name,
    logo: isapre.logo,
    minPriceUF: isapre.plans[0].priceUF,
  };
}
