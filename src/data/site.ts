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
