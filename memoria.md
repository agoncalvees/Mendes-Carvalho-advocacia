# Memória do projeto

Última atualização: 10 de agosto de 2026.

## Decisões aprovadas

- A marca canônica é **Mendes & Carvalho Advogados**.
- O escritório é fictício, empresarial e sediado em São Paulo.
- A pasta “Moura & Prado Advogados” é apenas um nome legado do workspace e não define a marca.
- A menção a “Anel X” era um resíduo do briefing e não pertence ao projeto.
- Qualquer menção a Anel X, sensores, sono, recuperação, batimentos cardíacos, aplicativo ou produto vestível pertence a outro projeto e deve ser ignorada.
- Os quatro arquivos em `meus-produtos` são as únicas fotografias usadas no site de referência Lefosse e servem apenas para análise visual.
- As imagens de `meus-produtos` não são ativos do Mendes & Carvalho e não devem ser reutilizadas no site final.
- O site será multipágina.
- A primeira versão será somente em português do Brasil.
- O público prioritário é B2B: empresas, empresários, startups, investidores e executivos.
- Tecnologia, inovação, marcas, software, contratos, operações societárias e ativos intelectuais são contextos prioritários.
- Propriedade Intelectual terá destaque especial.
- Posicionamento aprovado: advocacia empresarial conectada a decisões estratégicas do negócio.
- Sensação de marca: advocacia empresarial + inteligência + negócios + sofisticação.
- Objetivos principais: autoridade, credibilidade, apresentação de atuação e equipe, geração de contatos qualificados e demonstração de qualidade para portfólio.
- CTA principal: “Fale com nossa equipe”.
- CTA secundário: “Conheça nossa atuação”.
- O WhatsApp será secundário e não dominará a interface.
- Stack aprovada: Next.js, TypeScript, Tailwind CSS, shadcn/ui seletivo, Motion, Lucide, Next/Image e next/font, com deploy pensado para Vercel.
- Não haverá backend real na etapa inicial.
- Conteúdo será estruturado em TypeScript ou JSON.
- Dados fictícios podem ser criados como `mock data`.
- Clientes, rankings, prêmios, selos e organizações reais não serão utilizados.
- Direção tipográfica: serif editorial em headlines e sans limpa em interface e corpo.
- Newsreader + Geist foi definida como combinação padrão inicial.
- Instrument Serif poderá ser testada, mas não é a escolha padrão.
- Lefosse é referência de atmosfera e estrutura, nunca de cópia.
- A identidade será original, com cobalto profundo, neutros frios, serif contemporânea e foco editorial em Propriedade Intelectual.
- Clichês jurídicos e dourado estão proibidos.
- Meta de acessibilidade: WCAG 2.2 AA.
- O plano de produção visual contém 39 ativos originais, descritos em @imagens.md.

## Decisões rejeitadas

- Usar “Moura & Prado Advogados” como nome da marca.
- Associar o projeto ao nome “Anel X”.
- Construir apenas uma landing page.
- Implementar versão bilíngue na primeira etapa.
- Posicionar o escritório prioritariamente para pessoas físicas ou advocacia popular.
- Usar estética jurídica tradicional com martelo, balança, colunas, brasão ou dourado.
- Usar WhatsApp como CTA dominante.
- Implementar backend real agora.
- Copiar textos, imagens, identidade, roxo, triângulos ou layout do Lefosse.
- Tratar as imagens de `meus-produtos` como fotografias próprias, produto do cliente ou material autorizado para publicação.
- Usar clientes, rankings, prêmios ou selos reais.
- Fazer alegações fictícias parecerem verificáveis ou associadas a organizações existentes.

## Alterações realizadas

### 10 de agosto de 2026

- Inventário completo da pasta `referencias`.
- Leitura do print integral do Lefosse em 1366 × 5046 px.
- Leitura do arquivo com o link da referência.
- Verificação da estrutura textual do site ao vivo.
- Registro da análise estrutural e visual em @specs/design.md.
- Criação de @CLAUDE.md.
- Criação de @specs/site.md.
- Criação de @specs/design.md.
- Criação de @memoria.md.
- Nenhum código do site foi iniciado.
- Escopo de imagens corrigido após confirmação de que o briefing de Anel X pertencia a outro projeto.
- Criação de @imagens.md com inventário das referências, 39 ativos planejados, prompts em inglês, variações responsivas e regras de consistência.
- Nenhuma imagem foi gerada e nenhum código do site foi iniciado durante o planejamento visual.
- Implementação concluída em Next.js App Router com Home, páginas institucionais, sete áreas, três profissionais, quatro insights e contato.
- Conteúdo demonstrativo centralizado em `src/data/site.mock.ts` para substituição segura por dados reais.
- Todos os 25 arquivos disponíveis em `imagens-site` foram integrados ao site e servidos por `next/image` a partir de `public/images`.
- Formulário de contato demonstrativo implementado com validação, mensagens de erro acessíveis e confirmação explícita de que nenhum dado é enviado ou armazenado.
- Metadados, ícone, `robots.txt`, `sitemap.xml`, página 404, estados de carregamento, foco, hover e navegação móvel foram implementados.
- A demonstração foi mantida fora de indexação por `noindex, nofollow` e bloqueio em `robots.txt`.
- Build de produção, TypeScript, 23 endereços públicos, navegação desktop e mobile e console do navegador foram validados sem erros.
- @imagens.md foi cruzado novamente com `imagens-site`: 32 dos 39 ativos estão disponíveis e 7 permanecem pendentes, sendo uma prioridade P0 para o último corte responsivo e seis prioridades P1 para completar profissionais e Insights.
- Dois heroes móveis, o fechamento desktop, a fotografia de equipe desktop e três novos retratos foram normalizados para WebP real e integrados ao site.
- O mock data passou a ter seis profissionais; os três perfis adicionais permanecem explicitamente demonstrativos e foram relacionados às áreas pertinentes.

## Problemas encontrados

- O nome da pasta, o nome informado para a marca e a menção a “Anel X” eram inconsistentes.
- O briefing exigia não inventar informações, mas o projeto conceitual precisa de conteúdo fictício para demonstração.
- A proximidade desejada com Lefosse cria risco de cópia visual involuntária.
- A referência usa um acento roxo muito reconhecível.
- O uso de serif editorial pode deixar a marca clássica demais se aplicado sem controle.
- Uma demonstração pública de escritório fictício pode ser interpretada como organização real.
- Um pedido posterior misturou o projeto jurídico com um briefing de produto vestível, incluindo saúde e sensores.
- A pasta `meus-produtos` pode sugerir equivocadamente que as fotografias do Lefosse pertencem ao Mendes & Carvalho.
- O caractere `&` no caminho do workspace quebra os atalhos `.cmd` gerados pelo npm no Windows.
- Revelações iniciadas com opacidade zero deixam capturas de página inteira vazias antes do acionamento da viewport.
- Um estilo global de links sobrepunha a cor de CTAs claros por causa da ordem de camadas do Tailwind CSS.
- Imagens internas abaixo da dobra marcadas como urgentes geravam aviso de preload no celular.
- Os novos arquivos do Recraft chegaram com conteúdo PNG, inclusive quando o nome terminava em `.webp` ou `.webp.png`.
- O favicon gerado por `ImageResponse` encerrava a resposta antecipadamente no servidor de desenvolvimento em Windows.

## Soluções aplicadas

- Mendes & Carvalho Advogados foi registrada como única marca canônica.
- “Moura & Prado” foi tratado como nome legado da pasta e “Anel X” como resíduo descartado.
- Conteúdo fictício foi autorizado somente como `mock data` separado e identificado.
- Foram proibidas associações com clientes, rankings, prêmios, selos e organizações reais.
- A direção visual aproveita apenas grade, espaço, tom e hierarquia da referência.
- A identidade própria usa cobalto, neutros frios, Newsreader + Geist e foco em Propriedade Intelectual.
- Instrument Serif ficou como alternativa sujeita a teste, não como padrão.
- A prévia pública deverá usar `noindex, nofollow` ou identificação clara de projeto conceitual.
- O briefing de produto vestível foi explicitamente descartado antes da criação do plano de imagens.
- `meus-produtos` foi classificada como pasta de referências editoriais, não como biblioteca de ativos publicáveis.
- @imagens.md planeja uma coleção original com temperatura fria, neutros minerais, acento cobalto e ausência de clichês jurídicos.
- Os scripts npm chamam diretamente os executáveis Node das dependências locais, evitando a falha causada pelo `&` no caminho sem trocar a stack.
- As animações de entrada usam deslocamento mínimo, preservam o conteúdo visível e respeitam `prefers-reduced-motion`.
- A regra global conflitante de links foi removida e as cores passaram a ser controladas pelos componentes.
- Apenas a imagem principal da Home permanece com carregamento urgente; imagens internas usam carregamento adaptativo para evitar preloads desnecessários.
- Os novos ativos foram convertidos para WebP real em `public/images`, preservando os originais em `imagens-site`.
- O favicon dinâmico foi substituído por `src/app/icon.png`, eliminando falhas de resposta e custo de renderização.

## Pendências

- Substituir o wordmark demonstrativo pelo logotipo tipográfico final, se houver.
- Substituir nomes, cargos, biografias, OABs e retratos demonstrativos pelos dados aprovados.
- Substituir endereço, telefone, e-mail e WhatsApp demonstrativos pelos canais reais.
- Fazer revisão jurídica e editorial dos textos institucionais, das áreas e dos insights.
- Criar política de privacidade e definir o aviso público de projeto conceitual.
- Escolher a futura solução de envio do formulário e integrar consentimento quando houver tratamento real de dados.
- Confirmar direitos, créditos e aprovação de publicação das 25 imagens atualmente disponíveis.
- Produzir os 7 ativos pendentes de @imagens.md: a imagem de equipe mobile 27 e seis imagens P1 para completar profissionais e Insights.
- Substituir a imagem Open Graph e o ícone demonstrativos pelos ativos finais da marca.
- Definir se o site publicado permanecerá fora de indexação.
- Executar auditoria Lighthouse no domínio de produção e configurar analytics somente após decisão de privacidade.

## Próximos passos

1. Revisar e aprovar o site implementado em ambiente local.
2. Substituir o `mock data` pelo conteúdo real aprovado.
3. Aprovar logotipo, imagens, ícone e Open Graph finais.
4. Definir envio do formulário, privacidade, analytics e política de indexação.
5. Fazer a validação final de acessibilidade e desempenho no ambiente de produção.
6. Publicar na Vercel após aprovação explícita.
