export type BrandSurface = "light" | "dark";

/** Nome institucional unificado em textos e UI */
export const BRAND_LOCKUP = "SolidNetwork | NexCiclo";

/**
 * Logo variants by background tone:
 * - light → logos for light/white surfaces (BGBranco)
 * - dark  → logos for dark/black surfaces (BGPreto)
 */
export const brandLogos = {
  solidnetwork: {
    light: "/brand/solidnetwork-logo-light.png",
    dark: "/brand/solidnetwork-logo-dark.png",
  },
  nexciclo: {
    light: "/brand/nexciclo-logo-light.png",
    dark: "/brand/nexciclo-logo-dark.png",
  },
} as const;

export function solidnetworkLogo(surface: BrandSurface) {
  return brandLogos.solidnetwork[surface];
}

export function nexcicloLogo(surface: BrandSurface) {
  return brandLogos.nexciclo[surface];
}
