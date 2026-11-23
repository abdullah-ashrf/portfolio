// All portfolio text lives here. Every fact comes from Desktop\LINKEDIN\master_profile.md.

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/abdullahashrf',
  github: 'https://github.com/abdullah-ashrf',
  email: 'abdullahpc510@gmail.com',
};

export const HERO = {
  heading: "Hi, I'm Abdullah",
  title: 'Data Analyst · BI & AI Automation',
  blurb: 'Turning manual spreadsheets into Power BI dashboards and AI-automated workflows',
};

export const ABOUT_TEXT =
  "I'm a data analyst in Abu Dhabi with an MSc in Data Analytics from London Metropolitan University. At a PRO and admin services firm, I moved three branches from manual spreadsheets to Power BI reporting and made reporting 40% more efficient. I also build tools with Claude: attestation letters now take about 3 minutes instead of 15, and Expiry Desk, our renewal tracker, runs on 20 office PCs.";

export const SKILLS = [
  {
    name: 'AI Automation',
    desc: 'Internal tools built with Claude and Claude Code. Expiry Desk tracks renewals for 120+ client companies and is used by 20 staff. Attestation letters went from about 15 minutes to 3 with Python and Claude. I train the team to use what I build.',
  },
  {
    name: 'Process Automation',
    desc: 'Finding where the hours go and taking the repeat work away: one-click WhatsApp and Gmail reminders, follow-up tracking, shared registers synced across PCs, and automated tests so the tools keep working.',
  },
  {
    name: 'Power BI & Excel',
    desc: 'DAX, data modelling and KPI dashboards, plus advanced Excel with Power Query and Pivot Tables.',
  },
  {
    name: 'SQL & Python',
    desc: 'Joins, CTEs and window functions in SQL. Pandas, NumPy and Scikit-learn in Python for cleaning, analysis and classification.',
  },
  {
    name: 'KPIs & Reporting',
    desc: 'Defining and tracking KPIs such as First Contact Resolution and Average Handling Time, and delivering reports end to end.',
  },
  {
    name: 'Modelling & Forecasting',
    desc: 'Classification with class weighting and gradient boosting, and ARIMA forecasts in R. I now test every model on data it has not seen.',
  },
];

export type Stat = { value: string; label: string };
export type Project = {
  name: string;
  category: string;
  summary: string;
  tools: string[];
  stats: [Stat, Stat, Stat];
  link?: { label: string; href: string };
  image?: { src: string; alt: string };
};

export const PROJECTS: Project[] = [
  {
    name: 'Expiry Desk',
    category: 'Work · Internal tool',
    summary:
      'An offline tracker for visa, Emirates ID, labour card and trade licence renewals. It sends one-click WhatsApp and Gmail reminders, tracks follow-ups and renewal outcomes, and keeps daily backups. It replaced manual cross-checks of expiry emails.',
    tools: ['Claude Code', 'Google Drive sync', 'Playwright tests'],
    stats: [
      { value: '20', label: 'staff using it' },
      { value: '120+', label: 'corporate clients tracked' },
      { value: '5 → 20', label: 'PCs since launch' },
    ],
    image: { src: '/expiry-desk.webp', alt: 'Expiry Desk home screen, shown with made-up company names' },
  },
  {
    name: 'Office Workflow System',
    category: 'Work · Internal tool · Pilot in daily use',
    summary:
      'A web tracker that follows each visa application and company document from front desk to labour to immigration and back. Every person has their own status, required-field checks, automatic reminders and a full history of who did what. Staff open one shared record instead of forwarding emails or searching government sites, which saves an estimated 30% of the time spent finding files.',
    tools: ['Claude Code', 'Web app', 'Automated tests'],
    stats: [
      { value: '8', label: 'staff using it' },
      { value: '2', label: 'client companies handled' },
      { value: '~50%', label: 'less time to send a client their file (estimate)' },
    ],
  },
  {
    name: 'Road Accident Severity',
    category: 'MSc project · 2024, rebuilt 2026',
    summary:
      'Predicts whether a UK road accident killed or seriously injured someone, using STATS19 police records from 2005 to 2017. My 2024 model scored 88% by predicting "Slight" every time, so I rebuilt it with class weighting and gradient boosting and tested it on 2016 and 2017, years it never saw.',
    tools: ['Python', 'Scikit-learn', 'Streamlit', 'Power BI'],
    stats: [
      { value: '2,047,256', label: 'STATS19 records' },
      { value: '49%', label: 'of serious or fatal accidents caught' },
      { value: '1.9×', label: 'risk in the top 10% flagged' },
    ],
    link: { label: 'GitHub', href: `${LINKS.github}/road-accident-severity` },
  },
  {
    name: 'London Fly-Tipping BI',
    category: 'MSc project · 2023, checked 2026',
    summary:
      'A Power BI report on fly-tipping enforcement across London, using London Datastore data from 2011 to 2022, with ARIMA forecasts in R. In 2026 I tested the forecast on three new years, found the yearly figures had been modelled out of order, and fixed it.',
    tools: ['Power BI', 'Power Query', 'R', 'Python'],
    stats: [
      { value: '33', label: 'London local authorities' },
      { value: '363', label: 'records, 2011 to 2022' },
      { value: '47% → 5%', label: 'forecast error after the fix' },
    ],
    link: { label: 'GitHub', href: `${LINKS.github}/london-fly-tipping` },
  },
];

export const MARQUEE_ROWS = [
  ['Claude Code', 'Process Automation', 'Power BI', 'DAX', 'SQL', 'Python', 'LLM Automation', 'Excel'],
  ['Prompt Engineering', 'Power Query', 'KPI Dashboards', 'Scikit-learn', 'Pandas', 'ETL', 'ARIMA', 'R', 'Tableau'],
];
