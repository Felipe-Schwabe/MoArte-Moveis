import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Ruler, Sparkles, Wrench, HeartHandshake } from "lucide-react";
import { isDemo, site } from "@/config/site";

export function Hero() {
  return <section className="hero" id="inicio">
    <Image className="hero-image" src="/images/hero/hero-sala.webp" alt="Sala de estar ampla fotografada no acervo de projetos da MO Arte" fill priority sizes="100vw" />
    <div className="hero-shade" />
    <div className="hero-content"><p className="hero-overline"><span /> Móveis personalizados · Joinville, SC</p><h1>Ambientes que<br />refletem <em>quem você é.</em></h1><p className="hero-subtitle">Desde 1987, transformando projetos em móveis personalizados, criados para cada espaço e cada estilo de vida.</p><div className="hero-actions"><a className="button button-light" href="#projetos">Conhecer projetos <ArrowUpRight size={17} /></a><a className="hero-secondary" href="#orcamento">Solicitar orçamento <ArrowDownRight size={16} /></a></div></div>
    <div className="hero-foot"><span>MO Arte Móveis Personalizados — Desde 1987</span><span>01 / Ambientes autorais</span></div>
    <div className="hero-index">01 <i /> 04</div>
  </section>;
}

export function Trust() {
  return <section className="trust section-pad" id="diferenciais"><div className="trust-lead"><p className="eyebrow">Experiência que se percebe</p><h2>Tradição em cada detalhe.<br /><em>Personalização em cada projeto.</em></h2></div><div className="trust-items">
    <article><span className="trust-number">01</span><span className="trust-icon"><Sparkles /></span><h3>Desde 1987</h3><p>Uma história construída em Joinville, projeto por projeto.</p></article>
    <article><span className="trust-number">02</span><span className="trust-icon"><Wrench /></span><h3>Produção própria</h3><p>Estrutura de produção dedicada a transformar projetos em móveis.</p></article>
    <article><span className="trust-number">03</span><span className="trust-icon"><Ruler /></span><h3>Feito para o espaço</h3><p>Projetos próprios ou desenvolvidos com arquitetos e designers.</p></article>
    <article><span className="trust-number">04</span><span className="trust-icon"><HeartHandshake /></span><h3>Atendimento próximo</h3><p>Atenção ao acabamento, aos materiais e ao acompanhamento pós-venda.</p></article>
  </div></section>;
}

export function Ambients() {
  const items = ["Cozinhas", "Closets", "Dormitórios", "Salas", "Ambientes comerciais", "Banheiros e lavabos", "Escritórios", "Lavanderias", "Churrasqueiras"];
  return <section className="ambients section-pad" id="ambientes"><div className="ambients-intro"><p className="eyebrow">Possibilidades sob medida</p><h2>Seu espaço,<br /><em>do seu jeito.</em></h2><p>Móveis personalizados para ambientes residenciais e comerciais, desenvolvidos com atenção a cada medida, material e escolha.</p><a href="#orcamento" className="text-link">Conte sua ideia <ArrowUpRight size={16} /></a></div><div className="ambient-list">{items.map((item, index) => <a key={item} href="#projetos"><span className="ambient-count">0{index + 1}</span><span className="ambient-title">{item}</span><ArrowUpRight className="ambient-arrow" size={18} /></a>)}</div></section>;
}

export function About() {
  return <section className="about section-pad" id="sobre"><div className="about-image-wrap"><Image src="/images/institucional/producao.jpg" alt="Profissional trabalhando com madeira na produção de móveis" fill sizes="(max-width: 700px) 100vw, 48vw" /><span className="image-label">Feito com cuidado, desde 1987</span></div><div className="about-copy"><p className="eyebrow">A MO Arte · Joinville</p><h2>Uma história feita<br />de <em>boas escolhas.</em></h2><p>Fundada pelo joinvilense Olavo Otávio de Souza, a MO Arte nasceu do propósito de criar móveis personalizados com atenção ao espaço, às pessoas e aos detalhes.</p><p>Hoje, desenvolve projetos próprios e também executa ideias de arquitetos e designers, com produção própria e acompanhamento próximo em cada etapa.</p><div className="founder"><span className="founder-line" /><span><strong>Olavo Otávio de Souza</strong><small>Fundador da MO Arte</small></span></div></div></section>;
}

export function Process() {
  const steps = [["01", "Conversa inicial", "Entendemos seu espaço e o que você deseja transformar."], ["02", "Levantamento", "Conhecemos as necessidades e medidas do ambiente."], ["03", "Projeto e materiais", "Definimos a solução personalizada para o seu projeto."], ["04", "Produção", "A ideia ganha forma com cuidado de execução e acabamento."], ["05", "Entrega e acompanhamento", "O relacionamento continua depois da instalação."]];
  return <section className="process section-pad"><div className="section-heading"><div><p className="eyebrow">Um caminho feito junto</p><h2>Do projeto ao<br /><em>ambiente pronto.</em></h2></div><p className="heading-note">Cada projeto tem seu próprio ritmo e suas escolhas. Este é um olhar geral sobre como a MO Arte transforma ideias em ambientes.</p></div><div className="process-steps">{steps.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

export function Contact() {
  return <footer className="contact section-pad" id="contato"><div className="contact-top"><div><p className="eyebrow">MO Arte · Móveis personalizados</p><h2>Vamos imaginar<br /><em>o próximo espaço?</em></h2></div><a className="contact-cta" href="#orcamento">Começar uma conversa <ArrowUpRight size={20} /></a></div><div className="contact-grid"><div><small>Visite a MO Arte</small><a href={site.mapUrl} target="_blank" rel="noreferrer">Rua Presidente Nilo Peçanha, 787<br />Floresta, Joinville — SC</a></div><div><small>Fale conosco</small><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><a href={`mailto:${site.email}`}>{site.email}</a>{isDemo ? <span>WhatsApp {site.whatsappDisplay}</span> : <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp {site.whatsappDisplay}</a>}</div><div><small>Atendimento divulgado no site</small>{site.hours.map((hour) => <span key={hour}>{hour}</span>)}</div></div><div className="footer-bottom"><a className="footer-brand" href="#inicio">MO <span>ARTE</span></a><p>Uma trajetória em móveis personalizados desde 1987.</p><span>© MO Arte · Joinville, SC</span></div></footer>;
}
