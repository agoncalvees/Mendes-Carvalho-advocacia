# Especificação visual

## 1. Direção visual

### Leitura do projeto

Site institucional multipágina para uma banca empresarial B2B, com linguagem premium, editorial, tecnológica e estratégica. A estética deve equilibrar autoridade jurídica e inteligência de negócios sem recorrer à aparência tradicional de escritórios antigos.

Sensação desejada:

- sofisticado, mas não luxuoso de forma ostensiva;
- corporativo, mas não genérico;
- editorial, mas não clássico demais;
- tecnológico, mas não semelhante a uma landing page de SaaS;
- jurídico, sem clichês visuais do Direito.

### Parâmetros de composição

- `DESIGN_VARIANCE: 6` - assimetria controlada, com grade clara.
- `MOTION_INTENSITY: 3` - interação discreta, sem coreografia excessiva.
- `VISUAL_DENSITY: 4` - conteúdo arejado, mas informativo.

### Conceito orientador

**Clareza estratégica em movimento.**

A interface deve sugerir que o escritório enxerga relações, riscos e oportunidades antes que se transformem em problemas. O destaque de Propriedade Intelectual deve trazer uma camada de inovação e proteção de ativos, sem transformar a marca em escritório exclusivamente tecnológico.

## 2. Análise completa da referência

Materiais analisados:

- `referencias/screencapture-lefosse-2026-08-10-08_46_13.png`, print integral de 1366 × 5046 px;
- `referencias/referencia site.txt`, contendo `https://lefosse.com/`;
- estrutura textual disponível no site de referência em 10 de agosto de 2026.

### Estrutura observada

A referência organiza a página em uma sequência institucional clara:

1. navegação compacta sobre o hero;
2. hero de grande impacto tipográfico com CTA;
3. bloco institucional assimétrico;
4. indicadores de escala e reconhecimento;
5. busca e filtros de expertises;
6. conteúdo editorial em grade de tamanhos variados;
7. reconhecimentos visuais;
8. fechamento institucional e rodapé informativo.

### Paleta observada

- base branca e cinzas frios;
- preto suave para texto;
- roxo saturado como destaque recorrente;
- rodapé escuro;
- linhas e superfícies cinza-claro para organizar conteúdo.

### Tipografia observada

- sans-serif geométrica e contemporânea;
- headlines grandes, compactas e de alto contraste;
- peso e cor usados para destacar trechos da mensagem;
- texto de interface pequeno e funcional;
- ausência de linguagem tipográfica jurídica tradicional.

### Espaçamento e ritmo

- grande uso de espaço negativo entre blocos;
- transições amplas entre institucional, serviços e conteúdo;
- grade rígida internamente, apesar da composição assimétrica;
- densidade maior apenas em filtros, cards editoriais e rodapé;
- repetição de linhas finas como estrutura, não como decoração gratuita.

### Imagens

- fotografia corporativa contemporânea;
- enquadramentos de trabalho, documentos, tecnologia e negócios;
- tratamento frio e sóbrio;
- imagens integradas à grade editorial;
- ausência de ícones jurídicos literais.

### Tom e hierarquia

- tom seguro e institucional;
- valor principal comunicado por frases curtas;
- credibilidade construída por escala, especialização, conteúdo e equipe;
- CTA visível, porém subordinado à presença editorial da marca;
- hierarquia orientada por escala tipográfica, espaço e cor de destaque.

### O que aproveitar como direção

- precisão da grade;
- generosidade de espaço;
- protagonismo tipográfico;
- equilíbrio entre instituição, áreas, pessoas e conteúdo;
- fotografia conectada a negócios e tecnologia;
- CTA institucional sem estética de serviço local.

### O que não copiar

- textos e slogans;
- logotipo ou wordmark;
- roxo proprietário;
- triângulos e grafismos recorrentes da referência;
- estrutura exata do hero;
- proporções idênticas entre seções;
- grade editorial idêntica;
- imagens, nomes, indicadores e reconhecimentos;
- navegação e rodapé reproduzidos item a item.

## 3. Identidade original do Mendes & Carvalho

A originalidade será construída por:

- serif contemporânea em títulos, em contraste com a referência predominantemente sans;
- azul cobalto profundo como único acento de marca;
- superfícies frias de aspecto mineral;
- composições que alternam colunas estreitas, áreas de leitura e imagens verticais;
- foco editorial em Propriedade Intelectual;
- fotografia conceitual sobre camadas, autoria, código, matéria, registro e transformação;
- logotipo tipográfico próprio, sem símbolo jurídico literal.

## 4. Paleta

### Paleta principal

| Token | Cor | Uso |
|---|---:|---|
| `ink` | `#111820` | Texto principal e bloco final escuro |
| `paper` | `#F5F7F8` | Fundo principal |
| `surface` | `#E9EDF0` | Superfícies secundárias |
| `surface-strong` | `#DCE2E7` | Estados e divisões mais presentes |
| `muted` | `#596673` | Texto secundário |
| `line` | `#C7D0D8` | Bordas e hairlines |

### Acento de marca

| Token | Cor | Uso |
|---|---:|---|
| `cobalt` | `#2147B7` | CTA, links, foco e ênfases |
| `cobalt-hover` | `#17358B` | Hover e ativo |
| `cobalt-soft` | `#E0E7F8` | Fundo de destaque controlado |
| `on-cobalt` | `#F8FAFC` | Texto sobre o acento |

### Cores funcionais

- Erro: `#A12828`.
- Sucesso: `#226648`.
- Aviso: definir apenas quando existir necessidade funcional real.
- Cores funcionais não devem competir com o cobalto como identidade.

### Regras de cor

- O cobalto é o único acento saturado da marca.
- Não usar roxo como na referência.
- Não usar dourado, bronze ou degradê metálico.
- Não alternar entre neutros quentes e frios.
- A página é predominantemente clara.
- É permitida uma única inversão contínua no fechamento, unindo CTA final e rodapé em `ink`.
- Não criar seções escuras intercaladas no meio das páginas.
- Todos os pares de cor devem atingir WCAG AA.

## 5. Tipografia

### Famílias

- Headlines: **Newsreader Variable**, serif aberta e editorial.
- Interface, navegação e corpo: **Geist**, sans aberta, limpa e contemporânea.
- Carregamento por `next/font`.

### Regra para Instrument Serif

Instrument Serif pode ser testada como alternativa de direção, pois foi explicitamente autorizada. Não é a escolha padrão. Só deve substituir Newsreader se o protótipo demonstrar contemporaneidade, legibilidade e distância suficiente de uma estética jurídica antiga.

### Uso

- Serif apenas em headlines, citações curtas e números editoriais selecionados.
- Sans em corpo, navegação, botões, formulários, filtros, legendas e metadados.
- Preferir romanos e pesos médios. Itálico deve ser raro e nunca puramente decorativo.
- Não misturar famílias dentro da mesma frase apenas para criar contraste.
- Comprimento ideal de parágrafo: até 65 caracteres por linha.

### Escala tipográfica

| Nível | Desktop | Celular | Entrelinha |
|---|---:|---:|---:|
| Display | `clamp(4rem, 7vw, 6rem)` | `clamp(2.75rem, 12vw, 4rem)` | 0,95-1,02 |
| H1 interno | `clamp(3.25rem, 5vw, 5rem)` | `2.75rem` | 1,00-1,08 |
| H2 | `clamp(2.5rem, 4vw, 4rem)` | `2.25rem` | 1,05-1,12 |
| H3 | `clamp(1.75rem, 2.5vw, 2.5rem)` | `1.75rem` | 1,10-1,18 |
| Lead | `1.25-1.5rem` | `1.125-1.25rem` | 1,40-1,55 |
| Corpo | `1-1.125rem` | `1rem` | 1,55-1,70 |
| Interface | `0.875-1rem` | `0.875-1rem` | 1,30-1,50 |
| Legenda | `0.75rem` | `0.75rem` | 1,40 |

### Restrições

- Hero com no máximo duas linhas em desktop.
- Evitar títulos em caixa alta.
- Eyebrows em caixa alta podem aparecer no máximo uma vez a cada três seções.
- Não usar serif no corpo longo.
- Não usar tamanho como único recurso de hierarquia.

## 6. Grade, largura e espaçamento

### Grade

- Desktop: 12 colunas.
- Tablet: 6 colunas.
- Celular: 4 colunas.
- Largura máxima de conteúdo: 1280 px.
- Elementos editoriais podem alcançar 1360 px quando a imagem justificar.

### Margens laterais

- Desktop amplo: 64-80 px.
- Desktop compacto e tablet: 32-48 px.
- Celular: 20 px.

### Escala de espaçamento

Base de 4 px, com preferência pelos passos:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`.

### Ritmo vertical

- Seções principais em desktop: 128-160 px.
- Seções secundárias em desktop: 96-128 px.
- Seções principais em celular: 72-96 px.
- Relações internas: 24-64 px conforme a hierarquia.
- Cabeçalho desktop: 64-72 px, nunca acima de 80 px.
- Espaço superior do hero: máximo equivalente a 96 px depois do cabeçalho.

### Composição

- Alinhamento preferencial à esquerda.
- Hero assimétrico, nunca um bloco central genérico sobre degradê.
- No mínimo quatro famílias de layout ao longo da Home.
- Não repetir três seções consecutivas em padrão texto e imagem alternados.
- Composições complexas devem virar uma coluna abaixo de 768 px.

## 7. Bordas, raios e sombras

- Bordas estruturais de 1 px em `line`.
- Cards editoriais e imagens: raio 0.
- Botões, campos e controles: raio máximo de 4 px.
- Tags podem usar raio completo somente quando forem filtros ou estados reais.
- Não usar cards arredondados flutuantes como padrão.
- Sombras são opcionais e raras.
- Quando necessária, a sombra deve ser ampla, suave e tingida pelo fundo, nunca preta e dura.

## 8. Botões e links

### Botão primário

- Fundo `cobalt`.
- Texto `on-cobalt`.
- Altura entre 48 e 52 px.
- Padding horizontal entre 20 e 28 px.
- Label em Geist, peso 600.
- Hover em `cobalt-hover`.
- Estado ativo com deslocamento ou escala mínima.
- Foco externo visível e com contraste.

### Botão secundário

- Fundo transparente.
- Texto `ink`.
- Borda de 1 px em `ink` ou `line`, conforme contraste.
- Hover com fundo `surface`.

### Links editoriais

- Sem pílula.
- Sublinhado ou seta simples quando necessário.
- Área clicável adequada em listas e cards.
- Usar exatamente “Fale com nossa equipe” e “Conheça nossa atuação” para suas respectivas intenções.

## 9. Cards e listas

- Cards devem existir apenas quando agrupamento ou clique precisarem de contêiner.
- Preferir composição por imagem, tipografia, espaço e hairline.
- Cards de insights devem ser editoriais, com proporções variadas e hierarquia por destaque.
- Cards de profissionais devem priorizar retrato, nome, cargo e área, sem excesso de informação.
- Cards de áreas devem evitar a grade genérica de três caixas iguais.
- Listas extensas devem usar agrupamentos, filtros, acordeões ou grade, não dezenas de linhas idênticas.
- Não colocar etiquetas decorativas sobre fotografias.
- Evitar sombras em série.

## 10. Direção das fotografias

### Atmosfera

- contemporânea;
- urbana;
- fria ou neutra;
- alto controle de luz;
- saturação moderada;
- contraste limpo;
- sensação de inteligência, foco e precisão.

### Assuntos preferenciais

- ambientes de trabalho reais e sofisticados;
- detalhes arquitetônicos de São Paulo sem cartões-postais óbvios;
- pessoas em colaboração e decisão, sem poses publicitárias exageradas;
- texturas, transparências, camadas e reflexos;
- tecnologia e software em contexto real, sem interfaces falsas;
- matéria gráfica, documentos abstratos e processos criativos ligados a ativos intelectuais.

### Propriedade Intelectual

Usar imagens conceituais que comuniquem autoria, identidade, transformação e proteção. Exemplos de direção: superfícies translúcidas sobrepostas, tipografia em processo, reflexos de código, materiais marcados, detalhes de criação e sistemas de organização.

### Retratos

- fundo arquitetônico ou neutro;
- enquadramentos variados, mas padronizados por coleção;
- expressão segura e acessível;
- vestuário empresarial contemporâneo;
- evitar braços cruzados em série, fundo de estante jurídica e poses de banco de imagem.

### Restrições

- não usar martelo, balança, colunas, tribunais, estátuas ou livros jurídicos como símbolo;
- não usar aperto de mãos genérico;
- não usar prédios espelhados como único repertório;
- não reutilizar imagens da referência;
- não aplicar filtros diferentes em cada seção.

## 11. Tratamento da oferta

O serviço jurídico deve ser mostrado como capacidade estratégica, não como pacote comercial.

- Apresentar áreas por decisões, riscos e oportunidades de negócio.
- Conectar cada prática a cenários empresariais concretos.
- Dar destaque visual e editorial a Propriedade Intelectual.
- Não usar preços, planos, selos de garantia ou promessas de resultado.
- Indicadores fictícios devem ser plausíveis, moderados e marcados internamente como `mock data`.
- Reconhecimentos fictícios não podem imitar identidades ou nomenclaturas de rankings reais.

## 12. Logotipo e iconografia

### Logotipo

- Wordmark tipográfico “Mendes & Carvalho”.
- Complemento “Advogados” em Geist, menor e com espaçamento controlado.
- Construção preferencialmente horizontal.
- Sem monograma obrigatório nesta fase.
- Sem balança, coluna, escudo, pena, martelo ou brasão.

### Ícones

- Usar Lucide como família única, conforme stack aprovada.
- Stroke padronizado em 1,5 px.
- Ícones apenas quando melhorarem compreensão ou navegação.
- Não desenhar SVGs decorativos à mão.
- Setas simples podem acompanhar links, mas não devem dominar a identidade.

## 13. Movimento e animações

Movimento deve comunicar hierarquia, continuidade ou resposta à interação.

### Permitido

- entrada inicial sutil de hero por opacidade e deslocamento curto;
- revelação de imagens por máscara simples;
- aparição única de seções ao entrar no viewport;
- transições de links, botões, filtros e menu;
- mudança suave de estado em cards clicáveis;
- duração entre 180 e 600 ms;
- easing preferencial próximo de `cubic-bezier(0.16, 1, 0.3, 1)`.

### Evitar

- scroll hijacking;
- parallax intenso;
- cursores personalizados;
- texto em movimento contínuo;
- mais de um marquee;
- física magnética em todos os botões;
- animações infinitas sem função;
- movimento de largura, altura, top ou left;
- efeitos que escondam conteúdo em `prefers-reduced-motion`.

### Implementação

- Preferir Motion somente em folhas Client Component isoladas.
- Animar `transform` e `opacity`.
- Respeitar `prefers-reduced-motion` e oferecer estado estático completo.
- Não usar listener manual de scroll.

## 14. Regras para desktop

- Navegação em uma linha.
- Hero com mensagem e CTA visíveis no primeiro viewport.
- Assimetria apoiada em grade de 12 colunas.
- Imagens verticais e horizontais com proporções planejadas.
- Limitar largura de leitura a aproximadamente 65 caracteres.
- Evitar grandes áreas vazias sem função compositiva.
- CTA principal visível no cabeçalho, sem competir com a marca.
- Hover nunca deve ser a única forma de descobrir informação.

## 15. Regras para celular

- Grade em uma coluna visual, baseada em quatro colunas de layout.
- Margem lateral de 20 px.
- Títulos reduzidos sem perder contraste editorial.
- Menu em painel acessível com fechamento explícito.
- CTA principal disponível no menu e nos pontos de conversão.
- Imagens recortadas especificamente para telas estreitas.
- Filtros podem virar disclosure, sheet ou seleção empilhada.
- Nenhum texto, botão ou formulário deve exigir rolagem horizontal.
- Alvos interativos mínimos de 44 × 44 px.
- Animações ainda mais discretas e desativáveis.

## 16. Elementos a evitar

- clichês jurídicos: martelo, balança, colunas, brasões, pergaminho e tribunal;
- dourado, bronze e combinação azul-marinho com dourado;
- roxo, triângulos ou grafismos que remetam diretamente ao Lefosse;
- cópia do hero, grade de notícias, navegação ou rodapé da referência;
- visual de escritório antigo, clássico ou excessivamente solene;
- estética de advocacia popular ou serviço local;
- WhatsApp flutuante dominante;
- glassmorphism, neon, brilho externo e degradês de IA;
- hero centralizado sobre fundo abstrato genérico;
- três cards iguais como solução padrão;
- excesso de pílulas, badges e cantos arredondados;
- serif em todos os textos;
- caixa alta e tracking largo em toda seção;
- frases vagas como “excelência que transforma” sem substância;
- números, depoimentos e reconhecimentos que pareçam reais;
- clientes ou logotipos reais;
- interfaces falsas construídas com blocos decorativos;
- animação sem propósito;
- inconsistência entre páginas da mesma família.

## 17. Critérios de validação visual

Antes de aprovar uma página:

- confirmar uso de uma única paleta e um único acento;
- validar contraste dos botões e formulários;
- verificar consistência de raios e bordas;
- contar eyebrows e remover excesso;
- garantir hero com até duas linhas e CTA visível;
- confirmar que a composição não replica a referência;
- testar desktop, tablet e celular;
- testar movimento reduzido;
- verificar cortes de fotografia;
- conferir que dados fictícios estão identificados como `mock data`;
- revisar todas as strings para eliminar clichês e alegações enganosas.
