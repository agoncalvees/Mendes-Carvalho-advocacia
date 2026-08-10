export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  lead: string;
  image: string;
  imageAlt: string;
  decisions: string[];
  services: string[];
  contexts: string[];
  professionalSlugs: string[];
  insightSlugs: string[];
  featured?: boolean;
};

export type Professional = {
  slug: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  bio: string[];
  areaSlugs: string[];
  education: string[];
  languages: string[];
  oab: string;
};

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  dateIso: string;
  readTime: string;
  image: string;
  imageAlt: string;
  authorSlugs: string[];
  areaSlugs: string[];
  body: { title?: string; paragraphs: string[] }[];
};

export const siteInfo = {
  name: "Mendes & Carvalho Advogados",
  shortName: "Mendes & Carvalho",
  city: "São Paulo, SP",
  address: "Avenida Horizonte, 420, 12º andar, São Paulo - SP",
  addressNote: "Endereço demonstrativo de projeto conceitual",
  email: "contato@mendescarvalho.example",
  phone: "+55 (11) 0000-0000",
  whatsapp: "+55 (11) 90000-0000",
} as const;

export const areas: PracticeArea[] = [
  {
    slug: "propriedade-intelectual",
    name: "Propriedade Intelectual",
    shortName: "Propriedade Intelectual",
    summary:
      "Estratégia para proteger, explorar e organizar marcas, software, criações e outros ativos intelectuais.",
    lead:
      "Conectamos proteção jurídica, posicionamento de marca e modelo de negócio para que ativos intelectuais acompanhem o crescimento da empresa.",
    image: "/images/mc-area-propriedade-intelectual.webp",
    imageAlt:
      "Mãos organizando camadas transparentes e materiais gráficos em uma composição precisa",
    decisions: [
      "Como estruturar a proteção de uma nova marca ou produto",
      "Como organizar titularidade de software e criações",
      "Como licenciar ativos sem comprometer valor estratégico",
      "Como reagir a usos indevidos e concorrência desleal",
    ],
    services: [
      "Estratégia e gestão de marcas",
      "Direitos autorais e ativos criativos",
      "Software, tecnologia e titularidade",
      "Licenciamento e transferência de direitos",
      "Contratos de propriedade intelectual",
      "Prevenção e resposta a infrações",
      "Concorrência desleal",
    ],
    contexts: ["Tecnologia", "Indústrias criativas", "Varejo", "Startups", "Serviços B2B"],
    professionalSlugs: ["renata-mendes", "helena-watanabe", "daniel-oliveira"],
    insightSlugs: ["estrategia-de-marcas-desde-a-origem", "ia-generativa-autoria-e-governanca"],
    featured: true,
  },
  {
    slug: "societario-e-ma",
    name: "Societário e M&A",
    shortName: "Societário e M&A",
    summary:
      "Estruturação societária, governança, investimentos e operações de reorganização ou aquisição.",
    lead:
      "Apoiamos decisões de capital e governança com leitura jurídica conectada aos objetivos econômicos da operação.",
    image: "/images/mc-area-societario-ma.webp",
    imageAlt: "Estruturas minerais e transparentes convergindo em uma composição central",
    decisions: [
      "Como organizar governança para uma nova fase de crescimento",
      "Como estruturar entrada ou saída de investidores",
      "Como preparar e negociar operações de aquisição",
      "Como reorganizar participações e relações entre sócios",
    ],
    services: [
      "Constituição e reorganização societária",
      "Acordos de sócios e governança",
      "Rodadas de investimento",
      "Fusões e aquisições",
      "Due diligence jurídica",
      "Negociação e documentação de fechamento",
    ],
    contexts: ["Empresas de tecnologia", "Grupos empresariais", "Investidores", "Startups"],
    professionalSlugs: ["eduardo-carvalho", "marcos-siqueira"],
    insightSlugs: [],
  },
  {
    slug: "contratos-empresariais",
    name: "Contratos Empresariais",
    shortName: "Contratos Empresariais",
    summary:
      "Contratos desenhados para sustentar relações comerciais, operações críticas e novos modelos de negócio.",
    lead:
      "Transformamos objetivos comerciais em estruturas contratuais claras, negociáveis e proporcionais aos riscos envolvidos.",
    image: "/images/mc-area-contratos.webp",
    imageAlt: "Mãos analisando camadas de papel e materiais sobre uma mesa mineral",
    decisions: [
      "Como repartir obrigações e riscos de uma relação comercial",
      "Como negociar contratos estratégicos com maior previsibilidade",
      "Como adaptar instrumentos a operações digitais",
      "Como organizar carteiras contratuais em crescimento",
    ],
    services: [
      "Elaboração e revisão de contratos",
      "Negociações estratégicas",
      "Contratos de tecnologia e software",
      "Parcerias e distribuição",
      "Licenciamento e prestação de serviços",
      "Gestão de riscos contratuais",
    ],
    contexts: ["Tecnologia", "Varejo", "Serviços", "Indústria", "Operações digitais"],
    professionalSlugs: ["renata-mendes", "helena-watanabe", "daniel-oliveira"],
    insightSlugs: ["ia-generativa-autoria-e-governanca"],
  },
  {
    slug: "tecnologia-privacidade-e-dados",
    name: "Tecnologia, Privacidade e Proteção de Dados",
    shortName: "Tecnologia, Privacidade e Dados",
    summary:
      "Governança jurídica para produtos digitais, tecnologia, dados pessoais e relações com fornecedores.",
    lead:
      "Integramos requisitos jurídicos ao desenho de produtos, operações e contratos para apoiar inovação responsável.",
    image: "/images/mc-area-tecnologia-dados.webp",
    imageAlt: "Dois profissionais analisando infraestrutura tecnológica em ambiente controlado",
    decisions: [
      "Como incorporar privacidade ao desenvolvimento de produtos",
      "Como estruturar relações com fornecedores de tecnologia",
      "Como responder a incidentes e reduzir exposição",
      "Como organizar governança de dados em diferentes áreas",
    ],
    services: [
      "Programas de privacidade",
      "Governança de dados pessoais",
      "Contratos de tecnologia",
      "Avaliação de riscos em produtos digitais",
      "Resposta a incidentes",
      "Políticas e processos internos",
    ],
    contexts: ["Software", "Plataformas", "Fintechs", "Saúde digital", "Empresas orientadas por dados"],
    professionalSlugs: ["helena-watanabe", "renata-mendes", "daniel-oliveira"],
    insightSlugs: ["ia-generativa-autoria-e-governanca"],
  },
  {
    slug: "tributario",
    name: "Tributário",
    shortName: "Tributário",
    summary:
      "Análise de impactos tributários em estruturas empresariais, contratos e operações relevantes.",
    lead:
      "Avaliamos cenários tributários em conjunto com as decisões societárias e comerciais que sustentam o negócio.",
    image: "/images/mc-area-tributario.webp",
    imageAlt: "Mãos organizando cartões abstratos em uma mesa escura",
    decisions: [
      "Como antecipar impactos tributários de uma operação",
      "Como estruturar reorganizações com maior clareza",
      "Como tratar riscos identificados em contratos e auditorias",
      "Como conduzir discussões administrativas e judiciais",
    ],
    services: [
      "Consultoria tributária empresarial",
      "Estruturação de operações",
      "Reorganizações societárias",
      "Revisão de riscos",
      "Contencioso tributário",
    ],
    contexts: ["Transações", "Grupos empresariais", "Tecnologia", "Operações nacionais"],
    professionalSlugs: ["eduardo-carvalho", "marcos-siqueira"],
    insightSlugs: [],
  },
  {
    slug: "contencioso-e-arbitragem",
    name: "Contencioso e Arbitragem",
    shortName: "Contencioso e Arbitragem",
    summary:
      "Prevenção, estratégia e condução de disputas empresariais de maior complexidade.",
    lead:
      "Atuamos desde a leitura preventiva do conflito até a definição da estratégia processual ou arbitral.",
    image: "/images/mc-area-contencioso-arbitragem.webp",
    imageAlt: "Sala de negociação sóbria preparada para uma reunião empresarial",
    decisions: [
      "Como reduzir a escalada de um conflito empresarial",
      "Quando negociar, litigar ou recorrer à arbitragem",
      "Como preservar relações e ativos durante uma disputa",
      "Como coordenar prova, narrativa e impacto comercial",
    ],
    services: [
      "Estratégia pré-contenciosa",
      "Contencioso empresarial",
      "Arbitragem",
      "Negociação e mediação",
      "Disputas societárias e contratuais",
    ],
    contexts: ["Contratos críticos", "Conflitos societários", "Tecnologia", "Ativos intelectuais"],
    professionalSlugs: ["eduardo-carvalho", "renata-mendes", "camila-rocha"],
    insightSlugs: ["arbitragem-empresarial-e-desenho-da-negociacao"],
  },
  {
    slug: "trabalhista-empresarial",
    name: "Trabalhista Empresarial",
    shortName: "Trabalhista Empresarial",
    summary:
      "Apoio a lideranças em relações de trabalho, reorganizações, políticas e prevenção de conflitos.",
    lead:
      "Conectamos decisões de pessoas, cultura e operação às responsabilidades trabalhistas da empresa.",
    image: "/images/mc-area-trabalhista-empresarial.webp",
    imageAlt: "Dois profissionais em uma conversa atenta em ambiente de trabalho",
    decisions: [
      "Como estruturar políticas coerentes com a operação",
      "Como conduzir mudanças organizacionais com menor risco",
      "Como preparar lideranças para decisões sensíveis",
      "Como prevenir e responder a conflitos trabalhistas",
    ],
    services: [
      "Consultoria trabalhista empresarial",
      "Políticas e procedimentos",
      "Reorganizações e mudanças de estrutura",
      "Investigações internas",
      "Contencioso estratégico",
    ],
    contexts: ["Empresas em crescimento", "Tecnologia", "Operações híbridas", "Grupos empresariais"],
    professionalSlugs: ["helena-watanabe", "camila-rocha"],
    insightSlugs: ["novas-formas-de-trabalho-e-governanca"],
  },
];

export const professionals: Professional[] = [
  {
    slug: "renata-mendes",
    name: "Renata Mendes",
    role: "Sócia",
    image: "/images/mc-profissional-01.webp",
    imageAlt: "Retrato profissional de Renata Mendes",
    summary:
      "Atua na proteção e exploração estratégica de marcas, criações, software e ativos intelectuais.",
    bio: [
      "Renata concentra sua atuação em propriedade intelectual e contratos relacionados a inovação. Trabalha com empresas em momentos de criação, expansão e reorganização de portfólios de ativos.",
      "Sua abordagem conecta proteção jurídica, posicionamento competitivo e modelos de licenciamento, com atenção especial a empresas de tecnologia e negócios criativos.",
    ],
    areaSlugs: ["propriedade-intelectual", "contratos-empresariais"],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em propriedade intelectual"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.001, dado fictício",
  },
  {
    slug: "eduardo-carvalho",
    name: "Eduardo Carvalho",
    role: "Sócio",
    image: "/images/mc-profissional-02.webp",
    imageAlt: "Retrato profissional de Eduardo Carvalho",
    summary:
      "Assessora empresas e investidores em governança, operações societárias, M&A e disputas empresariais.",
    bio: [
      "Eduardo atua em decisões societárias, operações de investimento e reorganizações empresariais. Participa da estruturação e negociação de transações desde a fase preparatória.",
      "Também trabalha na prevenção e resolução de conflitos societários, articulando riscos jurídicos, governança e continuidade do negócio.",
    ],
    areaSlugs: ["societario-e-ma", "tributario", "contencioso-e-arbitragem"],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em direito empresarial"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.002, dado fictício",
  },
  {
    slug: "helena-watanabe",
    name: "Helena Watanabe",
    role: "Sócia",
    image: "/images/mc-profissional-03.webp",
    imageAlt: "Retrato profissional de Helena Watanabe",
    summary:
      "Orienta negócios digitais em tecnologia, privacidade, proteção de dados e relações contratuais.",
    bio: [
      "Helena assessora empresas no desenvolvimento de produtos digitais, estruturas de governança de dados e contratação de tecnologia.",
      "Sua prática aproxima times jurídicos, de produto e de liderança para integrar privacidade e gestão de riscos ao ciclo de decisão empresarial.",
    ],
    areaSlugs: ["tecnologia-privacidade-e-dados", "contratos-empresariais", "trabalhista-empresarial"],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em tecnologia e dados"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.003, dado fictício",
  },
  {
    slug: "marcos-siqueira",
    name: "Marcos Siqueira",
    role: "Sócio",
    image: "/images/mc-profissional-04.webp",
    imageAlt: "Retrato profissional demonstrativo de Marcos Siqueira",
    summary:
      "Assessora grupos empresariais em tributação, reorganizações e impactos fiscais de operações estratégicas.",
    bio: [
      "Marcos concentra sua prática na análise tributária de estruturas societárias, contratos e operações empresariais relevantes.",
      "Seu trabalho busca integrar cenários fiscais à lógica econômica da decisão, com comunicação clara para lideranças e equipes financeiras.",
    ],
    areaSlugs: ["tributario", "societario-e-ma"],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em direito tributário"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.004, dado fictício",
  },
  {
    slug: "camila-rocha",
    name: "Camila Rocha",
    role: "Sócia",
    image: "/images/mc-profissional-05.webp",
    imageAlt: "Retrato profissional demonstrativo de Camila Rocha",
    summary:
      "Atua em relações de trabalho, reorganizações e prevenção de conflitos conectadas à estratégia empresarial.",
    bio: [
      "Camila orienta lideranças em decisões trabalhistas sensíveis, desenho de políticas e mudanças organizacionais.",
      "Também participa de estratégias preventivas e contenciosas, considerando governança, cultura e continuidade operacional.",
    ],
    areaSlugs: ["trabalhista-empresarial", "contencioso-e-arbitragem"],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em relações de trabalho"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.005, dado fictício",
  },
  {
    slug: "daniel-oliveira",
    name: "Daniel Oliveira",
    role: "Sócio",
    image: "/images/mc-profissional-06.webp",
    imageAlt: "Retrato profissional demonstrativo de Daniel Oliveira",
    summary:
      "Trabalha com contratos, tecnologia e ativos intelectuais em operações e produtos digitais.",
    bio: [
      "Daniel assessora empresas na estruturação e negociação de contratos de tecnologia, licenciamento e relações comerciais estratégicas.",
      "Sua atuação conecta propriedade intelectual, desenvolvimento de produtos e gestão contratual para apoiar modelos de negócio em evolução.",
    ],
    areaSlugs: [
      "contratos-empresariais",
      "tecnologia-privacidade-e-dados",
      "propriedade-intelectual",
    ],
    education: ["Formação jurídica demonstrativa", "Especialização demonstrativa em contratos e tecnologia"],
    languages: ["Português", "Inglês"],
    oab: "OAB/SP 000.006, dado fictício",
  },
];

export const insights: Insight[] = [
  {
    slug: "estrategia-de-marcas-desde-a-origem",
    title: "Estratégia de marcas começa antes do registro",
    summary:
      "Como alinhar criação, proteção e expansão de uma marca desde as primeiras decisões do negócio.",
    category: "Propriedade Intelectual",
    date: "8 de agosto de 2026",
    dateIso: "2026-08-08",
    readTime: "5 min de leitura",
    image: "/images/mc-insight-estrategia-marcas.webp",
    imageAlt: "Mãos avaliando formas abstratas e materiais gráficos",
    authorSlugs: ["renata-mendes"],
    areaSlugs: ["propriedade-intelectual"],
    body: [
      {
        paragraphs: [
          "Uma marca nasce dentro do negócio antes de chegar a qualquer procedimento formal. Nome, arquitetura de portfólio, territórios de atuação e forma de uso precisam conversar entre si.",
          "Quando essas escolhas são tratadas em conjunto, a proteção jurídica deixa de ser uma etapa isolada e passa a apoiar expansão, licenciamento e diferenciação competitiva.",
        ],
      },
      {
        title: "Clareza antes de escala",
        paragraphs: [
          "Mapear titularidade, usos pretendidos e mercados prioritários ajuda a identificar conflitos cedo. Também reduz retrabalho quando novos produtos, canais ou parceiros entram na operação.",
          "O desenho adequado depende do contexto de cada empresa. Este conteúdo é demonstrativo e não substitui análise jurídica específica.",
        ],
      },
    ],
  },
  {
    slug: "ia-generativa-autoria-e-governanca",
    title: "IA generativa, autoria e governança de ativos",
    summary:
      "Perguntas que empresas podem organizar ao incorporar ferramentas generativas a processos criativos.",
    category: "Tecnologia e Propriedade Intelectual",
    date: "1 de agosto de 2026",
    dateIso: "2026-08-01",
    readTime: "6 min de leitura",
    image: "/images/mc-insight-ia-direitos-autorais.webp",
    imageAlt: "Profissional organizando materiais criativos em um estúdio contemporâneo",
    authorSlugs: ["helena-watanabe", "renata-mendes"],
    areaSlugs: ["tecnologia-privacidade-e-dados", "propriedade-intelectual"],
    body: [
      {
        paragraphs: [
          "A adoção de ferramentas generativas envolve mais do que uma escolha de software. Empresas precisam definir quais dados podem ser utilizados, como resultados serão revisados e quem responde pelas etapas do processo.",
          "Contratos, políticas internas e documentação de fluxos ajudam a manter coerência entre experimentação, confidencialidade e gestão de ativos.",
        ],
      },
      {
        title: "Governança proporcional ao uso",
        paragraphs: [
          "O nível de controle pode variar conforme finalidade, sensibilidade das informações e impacto do resultado. Uma boa estrutura permite inovar sem tratar todos os usos como se fossem iguais.",
          "Este texto faz parte de uma demonstração de portfólio e não constitui orientação jurídica.",
        ],
      },
    ],
  },
  {
    slug: "arbitragem-empresarial-e-desenho-da-negociacao",
    title: "Arbitragem empresarial e o desenho da negociação",
    summary:
      "Por que estratégia de conflito também depende de governança, informação e impacto comercial.",
    category: "Contencioso e Arbitragem",
    date: "24 de julho de 2026",
    dateIso: "2026-07-24",
    readTime: "4 min de leitura",
    image: "/images/mc-insight-arbitragem-negociacao.webp",
    imageAlt: "Dois conjuntos de materiais separados por um espaço central",
    authorSlugs: ["eduardo-carvalho"],
    areaSlugs: ["contencioso-e-arbitragem"],
    body: [
      {
        paragraphs: [
          "Uma disputa empresarial raramente existe separada da operação. Prazos, continuidade de contratos, reputação e acesso à informação influenciam a estratégia tanto quanto os argumentos jurídicos.",
          "Por isso, a preparação deve começar com uma leitura clara de objetivos, alternativas e efeitos de cada caminho possível.",
        ],
      },
      {
        title: "Decidir com cenário completo",
        paragraphs: [
          "Negociação e arbitragem não precisam ser tratadas como caminhos opostos. Em diferentes momentos, podem integrar uma mesma estratégia de resolução.",
          "O conteúdo é ilustrativo e não substitui avaliação profissional de um caso concreto.",
        ],
      },
    ],
  },
  {
    slug: "novas-formas-de-trabalho-e-governanca",
    title: "Novas formas de trabalho pedem governança clara",
    summary:
      "Decisões sobre flexibilidade, liderança e políticas internas precisam permanecer conectadas à operação.",
    category: "Trabalhista Empresarial",
    date: "18 de julho de 2026",
    dateIso: "2026-07-18",
    readTime: "5 min de leitura",
    image: "/images/mc-insight-trabalho-inovacao.webp",
    imageAlt: "Equipe em conversa concentrada em uma sala contemporânea",
    authorSlugs: ["helena-watanabe"],
    areaSlugs: ["trabalhista-empresarial"],
    body: [
      {
        paragraphs: [
          "Modelos de trabalho mais flexíveis exigem escolhas consistentes sobre comunicação, segurança da informação, liderança e avaliação. Políticas genéricas não resolvem diferenças reais entre funções e equipes.",
          "Uma estrutura clara ajuda gestores a tomar decisões semelhantes diante de situações comparáveis, sem eliminar a análise de contexto.",
        ],
      },
      {
        title: "Política e prática precisam coincidir",
        paragraphs: [
          "O documento interno é apenas uma parte da governança. Formação de lideranças, canais de dúvida e revisão periódica tornam a política aplicável ao cotidiano.",
          "Este conteúdo é demonstrativo e não constitui orientação jurídica ou trabalhista.",
        ],
      },
    ],
  },
];

export const getArea = (slug: string) => areas.find((area) => area.slug === slug);
export const getProfessional = (slug: string) =>
  professionals.find((professional) => professional.slug === slug);
export const getInsight = (slug: string) => insights.find((insight) => insight.slug === slug);

export const getAreasBySlugs = (slugs: string[]) =>
  slugs.map(getArea).filter((area): area is PracticeArea => Boolean(area));
export const getProfessionalsBySlugs = (slugs: string[]) =>
  slugs.map(getProfessional).filter((professional): professional is Professional => Boolean(professional));
export const getInsightsBySlugs = (slugs: string[]) =>
  slugs.map(getInsight).filter((insight): insight is Insight => Boolean(insight));
