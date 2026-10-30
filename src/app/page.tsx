"use client";

import { Header } from "@/components/layout/Header";
import { Hero, Trust, Ambients, About, Process, Contact } from "@/components/sections/Experience";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { isDemo } from "@/config/site";

export default function Home() {
  return <><Header /><main><Hero /><Trust /><Portfolio /><Ambients /><About /><Process /><section className="quote-section section-pad" id="orcamento"><QuoteForm /></section></main><Contact />{isDemo && <div className="demo-banner">Demonstração independente · proposta de modernização digital</div>}</>;
}
