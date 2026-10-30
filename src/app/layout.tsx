import type { Metadata, Viewport } from "next";
import "./globals.css";
import { isDemo, site } from "@/config/site";

export const metadata: Metadata = {
  title: "MO Arte Móveis Personalizados | Móveis sob medida em Joinville",
  description: "Desde 1987, a MO Arte desenvolve móveis personalizados para ambientes residenciais e comerciais em Joinville. Conheça alguns projetos e nossa história.",
  metadataBase: isDemo ? undefined : new URL(site.website),
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "MO Arte Móveis Personalizados", description: "Ambientes que refletem quem você é. Móveis personalizados em Joinville desde 1987.", locale: "pt_BR", type: "website", ...(isDemo ? {} : { images: ["/images/hero/hero-sala.webp"] }) },
  robots: isDemo ? { index: false, follow: false, googleBot: { index: false, follow: false } } : { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f3ee" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
