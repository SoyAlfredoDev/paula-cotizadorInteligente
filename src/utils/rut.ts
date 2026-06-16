/**
 * Cleans the RUT by removing any dots, hyphens, or spaces, and forcing uppercase on the DV.
 */
export function cleanRut(rut: string): string {
  return rut.replace(/[^0-9kK]/g, "").toUpperCase();
}

/**
 * Formats a raw or clean string into the standard Chilean format: XX.XXX.XXX-Y
 */
export function formatRut(rut: string): string {
  const cleaned = cleanRut(rut);
  if (cleaned.length < 2) return cleaned;
  
  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);
  
  let formattedBody = "";
  for (let i = body.length - 1, j = 0; i >= 0; i--, j++) {
    formattedBody = body[i] + (j > 0 && j % 3 === 0 ? "." : "") + formattedBody;
  }
  
  return `${formattedBody}-${dv}`;
}

/**
 * Validates the Chilean RUT using the Modulo 11 check digit algorithm.
 */
export function validateRut(rut: string): boolean {
  const cleaned = cleanRut(rut);
  if (cleaned.length < 2) return false;
  
  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);
  
  let sum = 0;
  let multiplier = 2;
  
  for (let i = body.length - 1; i >= 0; i--) {
    const digit = parseInt(body[i], 10);
    if (isNaN(digit)) return false;
    sum += digit * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  
  const expectedDvNumber = 11 - (sum % 11);
  let expectedDv = "";
  
  if (expectedDvNumber === 11) {
    expectedDv = "0";
  } else if (expectedDvNumber === 10) {
    expectedDv = "K";
  } else {
    expectedDv = expectedDvNumber.toString();
  }
  
  return expectedDv === dv;
}
