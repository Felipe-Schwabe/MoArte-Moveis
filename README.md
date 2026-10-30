# MO Arte — proposta de presença digital

Landing page em Next.js, TypeScript e Tailwind CSS para demonstração personalizada da MO Arte Móveis Personalizados, de Joinville.

## Requisitos e execução

- Node.js 20.9 ou superior
- npm

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para gerar o pacote estático de hospedagem, use `npm run build`; os arquivos ficam em `out/`.

## Modos

O padrão é `demo`. Copie `.env.example` para `.env.local` se quiser declarar o modo explicitamente:

```dotenv
NEXT_PUBLIC_SITE_MODE=demo
```

No modo demo, o site sinaliza que é uma proposta independente, adiciona `noindex` e permite preparar e copiar uma prévia de orçamento sem transmitir dados. Depois da contratação, autorização dos materiais e confirmação das informações comerciais, defina `NEXT_PUBLIC_SITE_MODE=production` e gere uma nova build. O formulário então habilita a abertura do WhatsApp com a mensagem preenchida. Abrir o WhatsApp não significa que a mensagem foi enviada.

## Portfólio

Atualize `src/data/projects.ts` para incluir ou remover projetos. Coloque os arquivos em `public/images/projects/`, escreva alt text factual, categoria e URL de origem. Não use nomes de clientes sem autorização. Registre cada imagem também em `IMAGE_SOURCES.md`.

Arquivos PNG novos podem ser otimizados em WebP com `npm run optimize-images` (a marca em PNG é preservada). Rode esse comando depois de atualizar os caminhos no registro de projetos.

## Configurações

Os dados da empresa, endereço, telefones, e-mail, mapa, horários e modo estão centralizados em `src/config/site.ts`. O conteúdo editorial das etapas e ambientes fica em `src/components/sections/Experience.tsx`.

## Publicação

`next.config.ts` habilita `output: "export"`, e as imagens são servidas como arquivos locais sem serviço de otimização. Publique o conteúdo de `out/` em hospedagem estática que sirva `index.html` e arquivos estáticos. Configure o domínio, valide os dados e os direitos das imagens antes da publicação comercial. Consulte `HANDOFF.md`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

