// Single source of truth for site content. Edit text here.

export const site = {
  name: 'IB6',
  legalName: 'IB6 Ltd',
  founder: 'Illia Bovkun',
  url: 'https://ib6.uk',
  email: 'hello@ib6.uk',
  linkedin: 'https://www.linkedin.com/in/REPLACE-ME',
  // Booking link (Cal.com / Calendly). Leave empty to fall back to email.
  booking: 'https://calendly.com/ib6',
  tagline: 'Strategy, AI and search — built to compound.',
  description:
    'IB6 is the independent consultancy of Illia Bovkun. AI strategy, AI architecture, automation and SEO for companies that want measurable growth, not experiments.',
  companyNumber: 'pending', // TODO: add once incorporated
  registeredOffice: 'Office 7786, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, United Kingdom',
};

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    id: 'strategy',
    index: '01',
    title: 'AI & Corporate Strategy',
    short: 'Decide where AI creates real value in your business — and where it does not.',
    body:
      'Board- and leadership-level work: AI opportunity mapping, business-case modelling, operating-model design and a prioritised roadmap your team can actually execute.',
    outcomes: [
      'AI opportunity map ranked by value and feasibility',
      'Business cases with clear cost, risk and payback',
      '12-month roadmap and governance model',
    ],
  },
  {
    id: 'architecture',
    index: '02',
    title: 'AI Architecture',
    short: 'Design AI systems that are secure, reliable and fit your existing stack.',
    body:
      'From model selection to data flows, retrieval, evaluation and cost control. I design the architecture, document it, and stay close through implementation.',
    outcomes: [
      'Reference architecture and integration plan',
      'Model, vendor and data-privacy choices made explicit',
      'Evaluation and monitoring built in from day one',
    ],
  },
  {
    id: 'automation',
    index: '03',
    title: 'AI Automation',
    short: 'Remove repetitive work from sales, operations and content.',
    body:
      'Agents and workflows connected to your CRM, e-commerce, email and internal tools — shipped in weeks, measured in hours saved and errors avoided.',
    outcomes: [
      'Process audit and automation backlog',
      'Production workflows with human-in-the-loop controls',
      'Before/after metrics for every automation',
    ],
  },
  {
    id: 'seo',
    index: '04',
    title: 'SEO & Search Growth',
    short: 'Be found — in Google and in AI answers.',
    body:
      'Technical SEO, content strategy and ongoing website support, extended to AI search (AEO/GEO) so your brand is cited where buyers now ask questions.',
    outcomes: [
      'Technical audit and prioritised fix list',
      'Content and entity strategy for search and AI answers',
      'Monthly reporting tied to leads, not vanity metrics',
    ],
  },
];

export const approach = [
  { index: '01', title: 'Diagnose', body: 'Understand the business, the numbers and the constraints before recommending anything.' },
  { index: '02', title: 'Design', body: 'Define the target state, the trade-offs and a plan sized to your team and budget.' },
  { index: '03', title: 'Build', body: 'Ship working systems quickly, with your team involved so knowledge stays in-house.' },
  { index: '04', title: 'Compound', body: 'Measure, iterate and hand over — so results keep growing after the engagement ends.' },
];

export const engagements = [
  { title: 'Strategy Sprint', duration: '2–4 weeks', body: 'A focused diagnostic and roadmap for one business question.' },
  { title: 'Build Project', duration: '4–12 weeks', body: 'Architecture and delivery of a defined AI, automation or SEO initiative.' },
  { title: 'Advisory Retainer', duration: 'Monthly', body: 'Ongoing senior support, SEO and optimisation on a fixed monthly scope.' },
];
