# Handoff para publicação oficial

Esta build está em modo demonstração independente. Antes de substituir o site oficial, alinhar com a MO Arte:

- Aprovação final do proprietário e revisão de todos os textos.
- Confirmação dos dados comerciais, horários e endereço.
- Permissão final para publicar as fotografias e a marca no site definitivo.
- Acesso ao domínio e decisão sobre DNS e redirecionamentos.
- Conta de hospedagem estática e responsável pela publicação.
- Validação do WhatsApp comercial e teste da mensagem pré-preenchida.
- Definição de manutenção, segurança de dependências e responsável por atualizações.
- Revisão de SEO local e eventual Search Console depois da aprovação.
- Confirmação de como a proposta de demonstração será retirada ou substituída.

Para ativar o modo comercial: definir `NEXT_PUBLIC_SITE_MODE=production`, confirmar que `src/config/site.ts` tem dados autorizados e gerar a build novamente. A versão comercial não coleta nem armazena os dados; o navegador abre o WhatsApp com a mensagem preparada pelo visitante.
