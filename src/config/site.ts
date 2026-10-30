export const site = {
  name: "MO Arte Móveis Personalizados",
  founder: "Olavo Otávio de Souza",
  founded: 1987,
  phone: "4734362002",
  phoneDisplay: "(47) 3436-2002",
  whatsapp: "5547984129952",
  whatsappDisplay: "(47) 98412-9952",
  email: "moarte@moarte.com.br",
  address: "Rua Presidente Nilo Peçanha, 787 — Floresta, Joinville — SC",
  mapUrl: "https://maps.google.com/?q=Rua+Presidente+Nilo+Pe%C3%A7anha,+787,+Joinville,+SC",
  website: "https://www.moarte.com.br",
  mode: process.env.NEXT_PUBLIC_SITE_MODE === "production" ? "production" : "demo",
  hours: ["Segunda a quinta, 07:30–18:00", "Sexta-feira, 07:30–17:00"],
} as const;

export const isDemo = site.mode === "demo";
