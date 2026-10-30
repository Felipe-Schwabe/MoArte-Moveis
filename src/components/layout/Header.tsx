"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Ambientes", "#ambientes"], ["Projetos", "#projetos"], ["A MO Arte", "#sobre"], ["Diferenciais", "#diferenciais"], ["Contato", "#contato"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#inicio" aria-label="MO Arte — início"><Image src="/images/brand/moarte-logo.png" alt="MO Arte Móveis Personalizados" width={166} height={80} priority /></a>
    <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Navegação principal">
      {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#orcamento" onClick={() => setOpen(false)}>Solicitar orçamento <ArrowUpRight size={15} /></a>
    </nav>
    <button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
