// Single source of truth for site content. Edit text here.

export const site = {
  name: 'IB6',
  legalName: 'IB6 Ltd',
  founder: 'Illia Bovkun',
  url: 'https://ib6.uk',
  email: 'hello@ib6.uk',
  linkedin: '', // add later — links stay hidden while empty
  booking: 'https://calendly.com/ib6',
  tagline: 'AI automation that pays for itself.',
  description:
    'IB6 helps growing businesses replace manual work with AI — automation, AI architecture, SEO and AI search, and strategy. Led by Illia Bovkun.',
  companyNumber: 'pending', // TODO: add once incorporated
  registeredOffice: 'Office 7786, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, United Kingdom',
};

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Timeline — the story strip under the hero.
export const timeline = [
  { label: 'Age 17', title: 'First online store', body: 'Built from scratch and grown through search. Where our SEO began.' },
  { label: 'Oil & Gas', title: 'Operations at scale', body: 'How large organisations run, report and decide.' },
  { label: 'Venture Capital', title: 'Investment judgement', body: 'Seeing what really drives a business’s value.' },
  { label: 'Startups', title: 'Speed of execution', body: 'Shipping with small teams and short runways.' },
  { label: 'Today', title: 'AI automation', body: 'Bringing it together for growing businesses.' },
];

export const audiences = [
  {
    title: 'Growing businesses',
    body: 'Teams of 10–250 people buried in spreadsheets, email and copy-paste between systems.',
  },
  {
    title: 'E-commerce & retail',
    body: 'Stores that want product data, content and customer service to run themselves — and rank.',
  },
  {
    title: 'Service & B2B companies',
    body: 'Firms where proposals, reporting and client admin eat into billable time.',
  },
];

export const work = [
  {
    name: 'eARTico',
    url: 'https://eartico.com',
    sector: 'Interiors · E-commerce',
    tags: ['Automation', 'E-commerce', 'SEO'],
    body: 'Online store for a turnkey interiors company in Spain and Montenegro — with a custom pipeline that publishes and updates products automatically through the WooCommerce API.',
  },
  {
    name: 'ISS Budva',
    url: 'https://issbudva.com',
    sector: 'Real estate · Construction',
    tags: ['Website', 'SEO'],
    body: 'Website for a real-estate and construction company in Budva, Montenegro — designed, built and set up for search from day one.',
  },
  {
    name: 'First online store',
    url: '',
    sector: 'Retail',
    tags: ['E-commerce', 'SEO'],
    body: 'Built from scratch at 17 and grown through search into a successful online shop that ran for years. The project where our search expertise began.',
  },
];

// Order: Architecture → SEO & AI Search → Automation → Strategy
export const services = [
  {
    id: 'architecture',
    index: '01',
    title: 'AI Architecture',
    short: 'AI systems that are secure, reliable and fit the tools you already use.',
    body:
      'Model and vendor selection, data flows, retrieval, evaluation and cost control — designed, documented and overseen through delivery, so nothing is lost between plan and build.',
    outcomes: [
      'Reference architecture and integration plan',
      'Explicit choices on models, vendors and data privacy',
      'Evaluation and monitoring from day one',
    ],
  },
  {
    id: 'seo',
    index: '02',
    title: 'SEO & AI Search',
    short: 'Be found by buyers — in Google and in AI answers.',
    body:
      'Technical SEO, content and website support, extended to AI search so your company is cited when buyers ask ChatGPT, Gemini or Perplexity. Reported against leads, not vanity metrics.',
    outcomes: [
      'Technical audit and prioritised fix list',
      'Content and entity strategy for search and AI answers',
      'Monthly reporting tied to pipeline',
    ],
  },
  {
    id: 'automation',
    index: '03',
    title: 'AI Automation',
    short: 'Take repetitive work out of sales, operations and admin.',
    body:
      'Agents and workflows connected to your CRM, store, email and internal tools. Shipped in weeks, measured in hours saved and errors avoided.',
    outcomes: [
      'Process audit and prioritised automation backlog',
      'Production workflows with human approval where it matters',
      'Before-and-after metrics for every automation',
    ],
  },
  {
    id: 'strategy',
    index: '04',
    title: 'AI & Corporate Strategy',
    short: 'Know where AI makes money in your business — and where it doesn’t.',
    body:
      'A clear view of where AI creates value: opportunities ranked by impact and effort, honest business cases, and a 12-month roadmap your team can execute.',
    outcomes: [
      'AI opportunity map, ranked by value and feasibility',
      'Business cases with cost, risk and payback',
      'Roadmap, budget and governance model',
    ],
  },
];

export const approach = [
  { index: '01', title: 'Diagnose', body: 'Understand the business, the numbers and the constraints before recommending anything.' },
  { index: '02', title: 'Decide', body: 'Agree the few initiatives worth doing, with clear owners, budget and success metrics.' },
  { index: '03', title: 'Build', body: 'Ship working systems quickly, with your people involved so the knowledge stays in-house.' },
  { index: '04', title: 'Compound', body: 'Measure, improve and hand over — so results keep growing after we step back.' },
];

export const firstSteps = [
  { index: '1', title: '30-minute call', body: 'Free. We discuss your goals and whether we are the right fit.' },
  { index: '2', title: 'Proposal in 48 hours', body: 'Scope, deliverables, timeline and a fixed price.' },
  { index: '3', title: 'Work starts', body: 'Usually within a week, with a first result in the first fortnight.' },
];

export const engagements = [
  { title: 'Strategy Sprint', duration: '2–4 weeks', body: 'A focused diagnostic and roadmap for one important question.' },
  { title: 'Build Project', duration: '4–12 weeks', body: 'Design and delivery of a defined AI, automation or search initiative.' },
  { title: 'Advisory Retainer', duration: 'Monthly', body: 'Ongoing automation, SEO and AI support on a fixed monthly scope.' },
];

// ---------- SEO: dedicated service landing pages ----------
export const serviceSeo: Record<string, {
  slug: string; seoTitle: string; metaDescription: string; h1: string; intro: string[];
  forWho: string[]; faqs: { q: string; a: string }[];
}> = {
  architecture: {
    slug: 'ai-architecture',
    seoTitle: 'AI Architecture & Integration Consulting | IB6',
    metaDescription: 'Secure, reliable AI systems that fit your existing tools. Model and vendor selection, data flows, RAG, evaluation and cost control for growing businesses.',
    h1: 'AI architecture that fits the business you already run.',
    intro: [
      'Most AI projects fail between the demo and production: data that isn’t ready, tools that don’t connect, costs nobody modelled. We design the architecture first — so what we build is secure, reliable and affordable to run.',
      'We choose models and vendors on evidence, design how data flows between your systems, add retrieval over your own documents where it helps, and build evaluation and monitoring in from day one.',
    ],
    forWho: ['You want to use AI on your own data — documents, CRM, product catalogue', 'You have tried AI tools that never connected to your systems', 'You need clear answers on data privacy, cost and vendor lock-in'],
    faqs: [
      { q: 'What does an AI architect do?', a: 'An AI architect decides how AI fits into your existing systems: which models and vendors to use, how data moves between tools, how answers are checked for quality, and what it will cost to run. The output is a documented plan your developers — or ours — can build from.' },
      { q: 'Do we need our own AI model?', a: 'Almost never. Growing businesses get the best results from leading commercial models connected to their own data. We only recommend custom or self-hosted models when privacy, cost or performance clearly require it.' },
      { q: 'How do you handle data privacy?', a: 'Privacy is designed in, not added later: we map which data goes where, prefer vendors with UK/EU data processing and no training on your data, and document every choice so you can show it to clients and auditors.' },
    ],
  },
  seo: {
    slug: 'seo-ai-search',
    seoTitle: 'SEO & AI Search Optimisation (GEO) Services | IB6',
    metaDescription: 'Get found in Google and cited in ChatGPT, Gemini and Perplexity. Technical SEO, content and AI search optimisation, reported against leads — not vanity metrics.',
    h1: 'Be found in Google — and cited in AI answers.',
    intro: [
      'Buyers no longer only search Google. They ask ChatGPT, Gemini and Perplexity — and those tools recommend the companies they can understand and trust. We make sure yours is one of them.',
      'We fix the technical foundations, build content around the questions your buyers actually ask, and structure your site so both search engines and AI assistants can read, quote and cite it. Search has been our craft since we built and ranked our first online store from scratch.',
    ],
    forWho: ['Your website gets little organic traffic or few enquiries', 'Competitors appear in AI answers and you do not', 'You want SEO reported in leads and revenue, not rankings alone'],
    faqs: [
      { q: 'What is AI search optimisation (GEO)?', a: 'Generative engine optimisation (GEO) means making your business easy for AI assistants such as ChatGPT, Gemini and Perplexity to find, understand and cite. It builds on SEO: clear answers, consistent facts about your company, structured data and credible sources that mention you.' },
      { q: 'How long does SEO take to work?', a: 'Technical fixes can show results within weeks. Content and authority usually take three to six months to build momentum. We report progress monthly against enquiries and pipeline, so you see what is working early.' },
      { q: 'Do you guarantee rankings?', a: 'No — nobody honest can, because search engines and AI assistants decide rankings. We guarantee the work: a clear plan, measurable deliverables and transparent reporting.' },
    ],
  },
  automation: {
    slug: 'ai-automation',
    seoTitle: 'AI Automation for Small & Mid-Sized Businesses | IB6',
    metaDescription: 'Replace manual work with AI. Workflows and AI agents connected to your CRM, e-commerce store, email and internal tools — shipped in weeks, measured in hours saved.',
    h1: 'AI automation that gives your team its hours back.',
    intro: [
      'If your people copy data between systems, answer the same emails every day or build the same report every week, that work can now be automated — reliably and at a price that makes sense for a growing business.',
      'We map your processes, pick the automations with the fastest payback, and build them on top of the tools you already use: your CRM, online store, email and spreadsheets. Every workflow keeps a human in the loop where it matters, and every automation is measured before and after.',
    ],
    forWho: ['Your team spends hours a week on repetitive admin', 'You run an online store with product data, orders and customer emails to manage', 'You want automation without replacing your current systems'],
    faqs: [
      { q: 'What can AI automation do for a small or mid-sized business?', a: 'Typical wins include drafting and routing customer emails, publishing and updating product data, qualifying leads, generating quotes and proposals, reconciling data between systems and building recurring reports — work that usually takes hours a week.' },
      { q: 'How much does AI automation cost?', a: 'It depends on scope. Most clients start with a fixed-price project for one or two high-value workflows, so the payback is clear before anything bigger. Running costs for AI usage are usually modest compared with the time saved.' },
      { q: 'Will automation replace our team?', a: 'No. The goal is to remove repetitive work so your people spend time on customers and decisions. Sensitive steps keep a human approval in the workflow.' },
    ],
  },
  strategy: {
    slug: 'ai-strategy',
    seoTitle: 'AI Strategy Consulting for Growing Businesses | IB6',
    metaDescription: 'Know where AI makes money in your business. AI opportunity mapping, business cases and a practical 12-month roadmap — from a team that also builds what it recommends.',
    h1: 'An AI strategy you can actually execute.',
    intro: [
      'Every business is being told to “do AI”. Few are told where it actually pays off. We give leadership teams a clear, honest view: which opportunities are worth doing, what they cost, what they return, and in which order.',
      'Our strategy work draws on experience across venture capital, startups and large operations — and because we also build what we recommend, our roadmaps are grounded in what is realistic for your team and budget.',
    ],
    forWho: ['Leadership wants an AI plan but does not know where to start', 'You have many AI ideas and need to prioritise', 'You want a roadmap tied to revenue, cost and risk'],
    faqs: [
      { q: 'What does an AI strategy include?', a: 'An AI opportunity map ranked by value and feasibility, business cases with cost, risk and payback, a 12-month roadmap with owners and budget, and simple governance rules for using AI safely.' },
      { q: 'How long does an AI strategy take?', a: 'A focused strategy sprint usually takes two to four weeks, depending on the size of the business and how much data and access is available.' },
      { q: 'Can you also implement the strategy?', a: 'Yes. Unlike strategy-only firms, we design and build the systems we recommend — architecture, automation and search — so nothing is lost between plan and delivery.' },
    ],
  },
};

export const homeFaqs = [
  { q: 'What does IB6 do?', a: 'IB6 helps growing businesses replace manual work with AI and get found by customers. We provide AI architecture, SEO and AI search optimisation, AI automation and AI strategy — designed, built and run by one senior team.' },
  { q: 'Who do you work with?', a: 'Mainly small and mid-sized businesses — typically 10 to 250 people — including e-commerce and retail, professional and B2B services, and companies with heavy manual admin.' },
  { q: 'Where is IB6 based?', a: 'IB6 Ltd is a UK company with a registered office in Essex, England. We work remotely with clients across the UK and Europe.' },
  { q: 'How do projects start?', a: 'With a free 30-minute call. If we are a fit, you receive a proposal with scope, timeline and a fixed price within 48 hours, and work usually starts within a week.' },
  { q: 'How much does it cost?', a: 'Projects are priced at a fixed fee agreed upfront — strategy sprints, build projects or a monthly retainer. You know the cost before any work begins.' },
];
