# Especificação do site

## 1. Visão geral

### Objetivo do site

Criar um site institucional premium para o escritório fictício Mendes & Carvalho Advogados, com sede em São Paulo, capaz de:

- fortalecer autoridade e credibilidade institucional;
- apresentar áreas de atuação e profissionais;
- demonstrar participação estratégica nas decisões de negócio;
- gerar contatos comerciais qualificados;
- servir como projeto de portfólio de alto nível para o mercado jurídico empresarial.

O resultado deve fazer advogados e gestores de escritórios perceberem o projeto como referência de qualidade digital para uma banca empresarial consolidada.

### Público-alvo

Público prioritário B2B:

- empresas e grupos empresariais;
- empresários e empreendedores;
- startups e empresas de tecnologia;
- investidores;
- executivos e lideranças responsáveis por decisões jurídicas e comerciais.

Interesses e contextos prioritários:

- tecnologia e inovação;
- marcas, software e ativos intelectuais;
- contratos e relações empresariais;
- operações societárias e investimentos;
- privacidade, dados e redução de riscos jurídicos.

O site não deve adotar linguagem de advocacia popular, contencioso de massa ou serviços prioritariamente destinados a pessoas físicas.

## 2. Produto e proposta de valor

### Produto apresentado

Serviços de advocacia empresarial estratégica. O escritório deve ser apresentado como parceiro de decisões relevantes do negócio, e não apenas como recurso acionado depois do surgimento de um conflito.

### Proposta de valor

O Mendes & Carvalho combina conhecimento jurídico, inteligência de negócios e visão estratégica para ajudar empresas a:

- proteger marcas, software e outros ativos intelectuais;
- estruturar operações e relações societárias;
- negociar contratos empresariais;
- viabilizar crescimento e inovação com segurança;
- prevenir disputas e reduzir riscos;
- tomar decisões jurídicas conectadas aos objetivos do negócio.

### Posicionamento verbal

Sensação central: **advocacia empresarial + inteligência + negócios + sofisticação**.

Tom:

- seguro e preciso;
- contemporâneo e direto;
- institucional sem ser burocrático;
- especializado sem excesso de juridiquês;
- estratégico, nunca alarmista;
- sofisticado sem ostentação.

## 3. Idioma

- Versão inicial exclusivamente em português do Brasil.
- O atributo de documento deve ser `lang="pt-BR"`.
- A arquitetura deve evitar bloqueios desnecessários a uma futura internacionalização, mas nenhum seletor de idioma será implementado agora.
- A versão em inglês está fora do escopo da primeira entrega.

## 4. Arquitetura e quantidade de páginas

O projeto é um site multipágina. A estrutura inicial contém nove tipos de rota:

1. Home: `/`
2. O Escritório: `/o-escritorio`
3. Áreas de Atuação: `/areas-de-atuacao`
4. Área individual: `/areas-de-atuacao/[slug]`
5. Profissionais: `/profissionais`
6. Profissional individual: `/profissionais/[slug]`
7. Insights / Conteúdos: `/insights`
8. Conteúdo individual: `/insights/[slug]`
9. Contato: `/contato`

O número final de URLs será dinâmico, pois depende da quantidade de áreas, profissionais e conteúdos cadastrados como `mock data`.

### Navegação principal

- O Escritório
- Áreas de Atuação
- Profissionais
- Insights
- Contato
- CTA persistente em desktop: “Fale com nossa equipe”

## 5. Áreas de atuação

Áreas aprovadas:

1. Propriedade Intelectual
2. Societário e M&A
3. Contratos Empresariais
4. Tecnologia, Privacidade e Proteção de Dados
5. Tributário
6. Contencioso e Arbitragem
7. Trabalhista Empresarial

### Prioridade editorial

Propriedade Intelectual deve receber destaque especial em toda a comunicação da marca. Temas mínimos:

- marcas;
- direitos autorais;
- software;
- licenciamento;
- proteção e gestão de ativos intelectuais;
- concorrência desleal.

O destaque não deve apagar as demais práticas. Ele deve funcionar como território distintivo da marca e porta de entrada para a atuação empresarial integrada.

## 6. Seções necessárias por página

### Home

1. Cabeçalho global com navegação e CTA.
2. Hero com posicionamento estratégico e acesso às áreas de atuação.
3. Bloco institucional curto explicando a atuação integrada ao negócio.
4. Destaque de Propriedade Intelectual.
5. Visão geral das sete áreas de atuação.
6. Bloco sobre decisões estratégicas, prevenção de riscos e crescimento.
7. Profissionais em destaque.
8. Insights recentes.
9. CTA final para contato.
10. Rodapé institucional.

### O Escritório

1. Abertura institucional.
2. História e posicionamento.
3. Princípios de atuação.
4. Forma de trabalho multidisciplinar.
5. Relação entre Direito, estratégia e negócios.
6. Indicadores conceituais aprovados como `mock data`.
7. CTA para conhecer profissionais ou entrar em contato.

### Áreas de Atuação

1. Introdução ao modelo de atuação.
2. Destaque editorial de Propriedade Intelectual.
3. Listagem completa das sete áreas.
4. Filtro ou navegação por tema somente se melhorar a localização do conteúdo.
5. CTA de contato.

### Página individual de área

1. Título e síntese da prática.
2. Problemas e decisões empresariais atendidos.
3. Serviços e frentes de atuação.
4. Setores ou contextos relacionados, sem clientes reais.
5. Profissionais relacionados.
6. Insights relacionados.
7. CTA “Fale com nossa equipe”.

### Profissionais

1. Introdução sobre a equipe.
2. Listagem de profissionais.
3. Filtros por área e cargo, se houver volume suficiente.
4. CTA institucional.

### Página individual de profissional

1. Retrato.
2. Nome e cargo.
3. Biografia.
4. Áreas de especialização.
5. Formação e idiomas, todos fictícios e marcados como `mock data`.
6. OAB fictícia, também marcada como `mock data`.
7. Conteúdos relacionados.
8. Meio de contato institucional.

### Insights / Conteúdos

1. Conteúdo em destaque.
2. Listagem editorial de artigos e análises.
3. Filtros por área, tema ou formato.
4. Paginação ou carregamento progressivo quando necessário.
5. CTA para contato ou assinatura somente se houver fluxo coerente.

### Conteúdo individual

1. Título, resumo, autoria e data.
2. Corpo do conteúdo.
3. Áreas relacionadas.
4. Autores relacionados.
5. Conteúdos recomendados.
6. CTA de contato discreto.

### Contato

1. Introdução curta.
2. Formulário de contato.
3. Endereço fictício em São Paulo.
4. Telefone e e-mail fictícios.
5. WhatsApp como canal secundário.
6. Informações de privacidade e consentimento.

## 7. Funcionalidades

### Obrigatórias

- navegação multipágina com indicação de página atual;
- menu responsivo acessível;
- dados de áreas, profissionais e conteúdos estruturados em TypeScript ou JSON;
- páginas dinâmicas geradas a partir de `slug`;
- filtros client-side quando houver volume que os justifique;
- formulário de contato com validação de interface;
- estados de foco, hover, ativo, erro, sucesso e carregamento;
- links internos entre áreas, profissionais e insights;
- metadados por rota;
- Open Graph e favicon próprios;
- sitemap e robots configuráveis;
- imagens responsivas com `Next/Image`;
- animações discretas com preferência de movimento reduzido respeitada.

### Formulário de contato

Campos previstos:

- nome;
- empresa;
- e-mail profissional;
- telefone ou WhatsApp opcional;
- área de interesse;
- mensagem;
- aceite da política de privacidade.

Nesta etapa, o envio pode ser simulado. Não deve haver promessa de armazenamento, retorno automático ou integração inexistente.

### SEO e natureza conceitual

- Usar títulos e descrições específicos por página.
- Preparar estrutura semântica compatível com `LegalService`, `Person`, `Article` e `BreadcrumbList`, mas não publicar dados estruturados enganosos.
- Uma versão pública de portfólio deve usar `noindex, nofollow` por padrão ou trazer identificação clara de projeto conceitual, para não se passar por escritório real.
- Não usar nomes de clientes, rankings, prêmios, selos ou organizações reais.

## 8. Chamadas para ação

### CTA principal

**Fale com nossa equipe**

Destino: página `/contato` e formulário principal.

### CTA secundário

**Conheça nossa atuação**

Destino: página `/areas-de-atuacao`.

### Regras

- Usar sempre os mesmos rótulos para a mesma intenção.
- Não criar variações concorrentes como “Entre em contato”, “Vamos conversar” ou “Solicite atendimento” sem aprovação.
- O WhatsApp não deve ser CTA dominante nem botão flutuante invasivo.
- CTAs devem caber em uma linha em desktop e permanecer claros em celular.

## 9. Conteúdo e mock data

O projeto é fictício. Podem ser criados como `mock data`:

- logotipo tipográfico;
- endereço, telefone, e-mail e WhatsApp;
- profissionais, cargos e OAB fictícia;
- biografias, formações e especializações;
- textos institucionais;
- artigos e conteúdos;
- indicadores de experiência;
- fotografias conceituais;
- reconhecimentos inteiramente fictícios.

Regras obrigatórias:

- separar os dados fictícios do código de interface;
- identificar o arquivo ou coleção como `mock` ou `demo`;
- não usar clientes reais;
- não usar rankings, prêmios, selos ou associações reais;
- não sugerir participação, certificação ou reconhecimento por organização existente;
- não copiar nomes, números, textos ou alegações da referência;
- não publicar alegações absolutas, garantias de resultado ou comparações não demonstráveis.

## 10. Stack técnica

Stack aprovada e bloqueada até nova autorização:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- shadcn/ui somente quando trouxer ganho real de acessibilidade ou produtividade;
- Motion, usando `motion/react`, para animações discretas;
- Lucide como família única de ícones quando ícones forem necessários;
- `Next/Image`;
- `next/font`;
- deploy planejado para Vercel;
- conteúdo local em TypeScript ou JSON;
- sem backend real nesta etapa.

Diretrizes técnicas:

- priorizar Server Components;
- isolar componentes interativos como Client Components pequenos;
- evitar estado global sem necessidade;
- verificar dependências antes de importar bibliotecas;
- não misturar bibliotecas de componentes sem justificativa;
- não alterar a stack sem autorização expressa.

## 11. Responsividade

- Abordagem mobile-first.
- Grade conceitual: 4 colunas em celular, 6 em tablet e 12 em desktop.
- Breakpoints alinhados ao Tailwind, ajustáveis somente mediante teste visual.
- Conteúdo em uma coluna abaixo de 768 px para composições assimétricas.
- Navegação em uma linha no desktop e menu colapsado acessível no celular.
- Áreas clicáveis com mínimo de 44 × 44 px.
- Hero deve manter CTA visível no primeiro viewport sempre que o conteúdo permitir.
- Usar `min-height: 100dvh` quando necessário, nunca depender de `100vh` rígido em celular.
- Imagens devem ter proporções e cortes definidos por breakpoint.
- Não ocultar conteúdo essencial no celular.
- Tabelas, filtros e listas devem reorganizar sem rolagem horizontal da página.

## 12. Acessibilidade

Meta: WCAG 2.2 nível AA.

Requisitos:

- HTML semântico e landmarks corretos;
- hierarquia de títulos contínua;
- link de salto para o conteúdo principal;
- navegação completa por teclado;
- foco visível e com contraste adequado;
- contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande e elementos gráficos essenciais;
- textos alternativos objetivos para imagens informativas;
- imagens decorativas ignoradas por tecnologias assistivas;
- formulários com rótulos persistentes, ajuda, erros associados e resumo de sucesso;
- não usar placeholder como rótulo;
- não depender apenas de cor para transmitir estado;
- respeitar `prefers-reduced-motion`;
- menus e diálogos com gerenciamento correto de foco;
- conteúdo compreensível sem animação, hover ou áudio;
- mensagens de erro claras em português do Brasil.

## 13. Desempenho

Metas de experiência:

- LCP inferior a 2,5 s;
- INP inferior a 200 ms;
- CLS inferior a 0,1;
- pontuação Lighthouse de desempenho, acessibilidade, boas práticas e SEO igual ou superior a 90 em páginas principais, dentro de ambiente de teste controlado.

Requisitos:

- otimizar imagem hero e reservar suas dimensões;
- usar formatos modernos e `sizes` apropriado;
- carregar fontes por `next/font` com subconjuntos necessários;
- evitar vídeos pesados acima da dobra sem justificativa;
- animar apenas `transform` e `opacity`;
- carregar componentes pesados sob demanda;
- evitar bibliotecas redundantes;
- manter JavaScript no cliente limitado aos recursos interativos;
- testar em rede e aparelho intermediários, não apenas em desktop de alto desempenho.

## 14. Dentro do escopo

- arquitetura multipágina descrita neste documento;
- sistema visual original;
- componentes responsivos e acessíveis;
- conteúdo fictício organizado como `mock data`;
- rotas de áreas, profissionais e insights;
- formulário simulado;
- metadados e estrutura de SEO;
- animações discretas;
- preparação para deploy na Vercel.

## 15. Fora do escopo

- backend real;
- CRM;
- autenticação ou área do cliente;
- painel administrativo;
- integrações reais de newsletter;
- automação de WhatsApp;
- pagamentos;
- chat em tempo real;
- versão em inglês;
- produção fotográfica real;
- uso de clientes, prêmios, rankings ou depoimentos reais;
- aconselhamento jurídico ou conteúdo jurídico apresentado como atual e verificável sem revisão profissional;
- cópia do Lefosse ou de qualquer outra marca.

## 16. Informações ainda a definir

- desenho final do logotipo tipográfico;
- conjunto completo de `mock data`;
- quantidade e senioridade dos profissionais fictícios;
- endereço, telefone, e-mail e WhatsApp fictícios;
- textos finais de cada página;
- volume inicial de insights;
- política de privacidade e aviso de projeto conceitual;
- solução futura de envio do formulário;
- estratégia definitiva de indexação da demonstração pública;
- fotografias finais e direitos de uso;
- metadados sociais e imagem Open Graph;
- critérios editoriais para atualização futura do conteúdo.
