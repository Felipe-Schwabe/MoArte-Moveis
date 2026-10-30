"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, MessageCircle } from "lucide-react";
import { site, isDemo } from "@/config/site";

const environments = ["Cozinha", "Closet", "Dormitório", "Sala", "Escritório", "Lavanderia", "Banheiro", "Área gourmet", "Comercial", "Outro"];
const deadlines = ["O quanto antes", "Dentro de três meses", "Ainda estou planejando"];
type FormValues = { name: string; environment: string; location: string; measures: string; deadline: string; description: string };
const empty: FormValues = { name: "", environment: "", location: "", measures: "", deadline: "", description: "" };

export function QuoteForm() {
  const [values, setValues] = useState(empty);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const update = (key: keyof FormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const prepare = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError("");
    if (!values.name.trim() || !values.environment || !values.location.trim() || !values.deadline || !values.description.trim()) { setError("Preencha os campos obrigatórios para preparar a prévia."); return; }
    setMessage([`Olá! Meu nome é ${values.name}.`, `Tenho interesse em um projeto de ${values.environment.toLowerCase()}.`, `Cidade ou bairro: ${values.location}.`, values.measures ? `Medidas aproximadas: ${values.measures}.` : "Ainda não tenho as medidas.", `Prazo desejado: ${values.deadline.toLowerCase()}.`, `Sobre o projeto: ${values.description}`].join("\n"));
  };
  const copy = async () => { await navigator.clipboard.writeText(message); setCopied(true); setTimeout(() => setCopied(false), 2200); };
  return <div className="quote-layout">
    <div className="quote-copy"><p className="eyebrow">Vamos conversar</p><h2>Um bom projeto<br />começa com <em>uma ideia.</em></h2><p>Conte um pouco sobre o ambiente que você imagina. Nossa equipe poderá entender melhor o que você precisa.</p><span className="quote-contact"><MessageCircle size={17} /> {site.whatsappDisplay}</span></div>
    <div className="quote-box">
      {!message ? <form onSubmit={prepare}>
        <label>Seu nome <input value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Como podemos chamar você?" required /></label>
        <div className="form-pair"><label>Tipo de ambiente <select value={values.environment} onChange={(e) => update("environment", e.target.value)} required><option value="">Selecione</option>{environments.map((x) => <option key={x}>{x}</option>)}</select></label><label>Cidade ou bairro <input value={values.location} onChange={(e) => update("location", e.target.value)} placeholder="Ex.: Joinville, Floresta" required /></label></div>
        <div className="form-pair"><label>Medidas aproximadas <input value={values.measures} onChange={(e) => update("measures", e.target.value)} placeholder="Se já souber" /></label><label>Prazo desejado <select value={values.deadline} onChange={(e) => update("deadline", e.target.value)} required><option value="">Selecione</option>{deadlines.map((x) => <option key={x}>{x}</option>)}</select></label></div>
        <label>Conte sobre o projeto <textarea value={values.description} onChange={(e) => update("description", e.target.value)} placeholder="O que você gostaria de transformar neste ambiente?" rows={3} required /></label>
        {error && <p className="form-error" role="alert">{error}</p>}<button className="button button-dark form-submit" type="submit">Revisar solicitação <ArrowRight size={17} /></button>
      </form> : <div className="quote-preview"><span className="preview-mark"><Check size={18} /></span><p className="eyebrow">Prévia da solicitação</p><h3>Confira sua mensagem</h3><pre>{message}</pre><p className="demo-note">{isDemo ? "Esta é uma demonstração. Seus dados não serão enviados à MO Arte." : "Revise a mensagem antes de abrir o WhatsApp."}</p><div className="preview-actions"><button className="button button-outline" onClick={copy}><Copy size={16} /> {copied ? "Copiado" : "Copiar mensagem"}</button>{!isDemo && <a className="button button-dark" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowRight size={16} /></a>}<button className="edit-link" onClick={() => setMessage("")}>Editar informações</button></div></div>}
    </div>
  </div>;
}
