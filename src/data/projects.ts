export type ProjectCategory = "Cozinhas" | "Salas" | "Dormitórios" | "Closets" | "Ambientes comerciais" | "Outros";
export type Project = { id: string; category: ProjectCategory; title: string; image: string; alt: string; source: string; shape: "wide" | "portrait" | "square" };

const origin = "https://www.moarte.com.br/wp-content/uploads/2017/11/";
export const projects: Project[] = [
  { id: "cozinha-01", category: "Cozinhas", title: "Cozinha sob medida", image: "/images/projects/cozinha-01.webp", alt: "Cozinha planejada em tons claros, registrada no portfólio da MO Arte", source: `${origin}cozinhas01.png`, shape: "wide" },
  { id: "sala-01", category: "Salas", title: "Sala contemporânea", image: "/images/projects/sala-01.webp", alt: "Sala com mobiliário personalizado, registrada no portfólio da MO Arte", source: `${origin}sala01.png`, shape: "portrait" },
  { id: "comercial-01", category: "Ambientes comerciais", title: "Ambiente comercial", image: "/images/projects/comercial-01.webp", alt: "Mobiliário de ambiente comercial do portfólio da MO Arte", source: `${origin}ambientes01.png`, shape: "square" },
  { id: "closet-01", category: "Closets", title: "Closet planejado", image: "/images/projects/closet-01.webp", alt: "Closet personalizado do portfólio da MO Arte", source: `${origin}closets01.png`, shape: "portrait" },
  { id: "cozinha-04", category: "Cozinhas", title: "Detalhes de cozinha", image: "/images/projects/cozinha-04.webp", alt: "Móveis planejados de cozinha do acervo da MO Arte", source: `${origin}cozinhas04.png`, shape: "square" },
  { id: "dormitorio-01", category: "Dormitórios", title: "Dormitório sob medida", image: "/images/projects/dormitorio-01.webp", alt: "Dormitório com marcenaria personalizada da MO Arte", source: `${origin}dormitorios01.png`, shape: "wide" },
  { id: "lavanderia-01", category: "Outros", title: "Lavanderia planejada", image: "/images/projects/lavanderia-01.webp", alt: "Mobiliário personalizado para lavanderia no acervo da MO Arte", source: `${origin}lavanderia01.png`, shape: "wide" },
  { id: "churrasqueira-01", category: "Outros", title: "Espaço gourmet", image: "/images/projects/churrasqueira-01.webp", alt: "Bancada e armários de churrasqueira do acervo da MO Arte", source: `${origin}churrasqueiras01.png`, shape: "square" },
];
