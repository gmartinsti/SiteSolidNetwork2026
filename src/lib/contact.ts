export type SitePhone = {
  label: string;
  display: string;
  tel: string;
  wa: string;
};

/** Ordem oficial de exibição em todo o site */
export const sitePhones: SitePhone[] = [
  {
    label: "Telefone",
    display: "(31) 99151-1427",
    tel: "tel:+5531991511427",
    wa: "5531991511427",
  },
  {
    label: "Telefone",
    display: "(31) 98317-7452",
    tel: "tel:+5531983177452",
    wa: "5531983177452",
  },
];

export const primaryPhone = sitePhones[0];
export const secondaryPhone = sitePhones[1];
export const siteEmail = "comercial@solidnetwork.com.br";
export const siteEmailHref = `mailto:${siteEmail}`;
