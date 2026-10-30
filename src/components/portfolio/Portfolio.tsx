"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowLeft, ArrowRight, X } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";

const filters = ["Todos", "Cozinhas", "Salas", "Dormitórios", "Closets", "Ambientes comerciais", "Outros"] as const;
type Filter = typeof filters[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const visible = projects.map((project, index) => ({ project, index })).filter(({ project }) => filter === "Todos" || project.category === filter as ProjectCategory);
  const selected = active === null ? null : projects[active];
  const move = (direction: number) => setActive((current) => current === null ? null : (current + direction + projects.length) % projects.length);
  useEffect(() => {
    if (active === null) return;
    document.querySelector<HTMLButtonElement>(".lightbox-close")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>(".lightbox button"));
        if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls.at(-1)?.focus(); }
        if (!event.shiftKey && document.activeElement === controls.at(-1)) { event.preventDefault(); controls[0]?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; opener.current?.focus(); };
  }, [active]);

  return <>
    <section className="portfolio section-pad" id="projetos">
      <div className="section-heading portfolio-heading"><div><p className="eyebrow">Portfólio · seleção do acervo</p><h2>Projetos feitos<br /><em>para viver.</em></h2></div><p className="heading-note">Ambientes desenvolvidos pela MO Arte, com soluções que respeitam o espaço e o jeito de viver de cada pessoa.</p></div>
      <div className="filter-row" role="group" aria-label="Filtrar projetos por ambiente">{filters.map((item) => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}</div>
      <div className="project-grid">{visible.map(({ project, index }) => <button className={`project-card ${project.shape}`} key={project.id} onClick={(event) => { opener.current = event.currentTarget; setActive(index); }} aria-label={`Ampliar ${project.title}`}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 31vw" />
        <span className="project-overlay"><span><small>{project.category}</small><strong>{project.title}</strong></span><span className="round-arrow"><ArrowDownRight size={19} /></span></span>
      </button>)}</div>
      <p className="portfolio-credit">Imagens do acervo público do site da MO Arte. Títulos descritivos para organização da galeria.</p>
    </section>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Visualização de ${selected.title}`} onMouseDown={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
      <button className="lightbox-close" aria-label="Fechar imagem" onClick={() => setActive(null)}><X /></button><button className="lightbox-arrow left" aria-label="Imagem anterior" onClick={() => move(-1)}><ArrowLeft /></button>
      <div className="lightbox-image"><Image src={selected.image} alt={selected.alt} fill sizes="90vw" /></div>
      <div className="lightbox-caption"><span>{selected.category}</span><strong>{selected.title}</strong></div><button className="lightbox-arrow right" aria-label="Próxima imagem" onClick={() => move(1)}><ArrowRight /></button>
    </div>}
  </>;
}
