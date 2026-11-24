// Single source of truth for site content. Edit text here.

export const site = {
  name: 'IB6',
  legalName: 'IB6 Ltd',
  founder: 'Illia Bovkun',
  url: 'https://ib6.uk',
  email: 'hello@ib6.uk',
  linkedin: 'https://www.linkedin.com/in/REPLACE-ME',
  booking: 'https://calendly.com/ib6',
  tagline: 'AI that pays for itself.',
  description:
    'Illia Bovkun helps energy companies, startups and investors turn AI into measurable results — strategy, architecture, automation and search. Ten years across oil & gas, venture capital and startups.',
  companyNumber: 'pending', // TODO: add once incorporated
  registeredOffice: 'Office 7786, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, United Kingdom',
};

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Background — the three worlds. Keep claims factual.
export const background = [
  {
    title: 'Oil & Gas',
    body: 'How large, asset-heavy organisations decide, operate and report — and where manual work quietly costs millions.',
  },
  {
    title: 'Venture Capital',
    body: 'Judging a business fast: the market, the team, the numbers, and the few levers that actually move value.',
  },
  {
    title: 'Startups',
    body: 'Shipping with small teams and short runways. Getting from idea to working product without waste.',
  },
];

export const audiences = [
  {
    title: 'Energy & industrial companies',
    body: 'Operations-heavy businesses where AI and automation cut cost, risk and manual reporting.',
  },
  {
    title: 'Founders & startups',
    body: 'Teams that need senior strategy, AI architecture and a growth engine — without hiring a department.',
  },
  {
    title: 'Investors & funds',
    body: 'AI due diligence on targets, and hands-on value creation across the portfolio.',
  },
];

export const services = [
  {
    id: 'strategy',
    index: '01',
    title: 'AI & Corporate Strategy',
    short: 'Know where AI makes money in your business — and where it doesn’t.',
    body:
      'A clear, board-ready view of where AI creates value: opportunities ranked by impact and effort, honest business cases, and a 12-month roadmap your team can execute.',
    outcomes: [
      'AI opportunity map, ranked by value and feasibility',
      'Business cases with cost, risk and payback',
      'Roadmap, budget and governance model',
    ],
  },
  {
    id: 'architecture',
    index: '02',
    title: 'AI Architecture',
    short: 'Systems that are secure, reliable and fit the stack you already have.',
    body:
      'Model and vendor selection, data flows, retrieval, evaluation and cost control — designed, documented and overseen through delivery, so nothing is lost between plan and build.',
    outcomes: [
      'Reference architecture and integration plan',
      'Explicit choices on models, vendors and data privacy',
      'Evaluation and monitoring from day one',
    ],
  },
  {
    id: 'automation',
    index: '03',
    title: 'AI Automation',
    short: 'Take repetitive work out of sales, operations and reporting.',
    body:
      'Agents and workflows connected to your CRM, ERP, email and internal tools. Shipped in weeks, measured in hours saved and errors avoided.',
    outcomes: [
      'Process audit and prioritised automation backlog',
      'Production workflows with human approval where it matters',
      'Before-and-after metrics for every automation',
    ],
  },
  {
    id: 'seo',
    index: '04',
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
];

export const approach = [
  { index: '01', title: 'Diagnose', body: 'Understand the business, the numbers and the constraints before recommending anything.' },
  { index: '02', title: 'Decide', body: 'Agree the few initiatives worth doing, with clear owners, budget and success metrics.' },
  { index: '03', title: 'Build', body: 'Ship working systems quickly, with your team involved so the knowledge stays in-house.' },
  { index: '04', title: 'Compound', body: 'Measure, improve and hand over — so results keep growing after I step back.' },
];

export const firstSteps = [
  { index: '1', title: '30-minute call', body: 'Free. We discuss your goals and whether I am the right fit.' },
  { index: '2', title: 'Proposal in 48 hours', body: 'Scope, deliverables, timeline and a fixed price.' },
  { index: '3', title: 'Work starts', body: 'Usually within a week, with a first result in the first fortnight.' },
];

export const engagements = [
  { title: 'Strategy Sprint', duration: '2–4 weeks', body: 'A focused diagnostic and roadmap for one important question.' },
  { title: 'Build Project', duration: '4–12 weeks', body: 'Design and delivery of a defined AI, automation or search initiative.' },
  { title: 'Advisory Retainer', duration: 'Monthly', body: 'Ongoing senior support for leadership teams, founders and funds.' },
];
