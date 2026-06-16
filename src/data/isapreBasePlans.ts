/**
 * Re-exporta precios base mínimos para la calculadora del 7%.
 */
import { ISAPRES, ISAPRE_DATA_SOURCE } from "./isapres";

export const ISAPRE_PLANS_SOURCE = ISAPRE_DATA_SOURCE;

export const isapreBasePlans = ISAPRES.map((isapre) => ({
  name: isapre.name,
  plan: isapre.plans[0].name,
  planCode: isapre.plans[0].code,
  priceUF: isapre.plans[0].priceUF,
}));
