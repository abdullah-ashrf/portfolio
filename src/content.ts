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
  "I'm a data analyst in Abu Dhabi with an MSc in Data Analytics from London Metropolitan University. At a PRO and admin services firm, I moved three branches from manual spreadsheets to Power BI reporting and made reporting 40% more efficient. I also build tools with Claude: attestation letters now take about 3 minutes instead of 15, and Expiry Desk, our renewal tracker, runs on 15 office PCs.";

export const SKILLS = [
  {
    name: 'Power BI & Excel',
    desc: 'DAX, data modelling and KPI dashboards, plus advanced Excel with Power Query and Pivot Tables.',
  },
  {
    name: 'SQL & Python',
    desc: 'Joins, CTEs and window functions in SQL. Pandas, NumPy and Scikit-learn in Python for cleaning, analysis and classification.',
  },
  {
    name: 'AI Automation',
    desc: 'Process automation with Claude and Claude Code: internal tools, LLM workflows and prompt engineering, and training staff to use them.',
  },
  {
    name: 'Forecasting',
    desc: 'Time-series forecasting with ARIMA and SARIMA in R, plus statistical analysis and data quality checks.',
  },
  {
    name: 'KPIs & Reporting',
    desc: 'Defining and tracking KPIs such as First Contact Resolution and Average Handling Time, and delivering reports end to end.',
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
};

export const PROJECTS: Project[] = [
  {
    name: 'Expiry Desk',
    category: 'Work · Internal tool',
    summary:
      'An offline tracker for visa, Emirates ID, labour card and trade licence renewals. It sends one-click WhatsApp and Gmail reminders, tracks follow-ups and renewal outcomes, and keeps daily backups. It replaced manual cross-checks of expiry emails.',
    tools: ['Claude Code', 'Google Drive sync', 'Playwright tests'],
    stats: [
      { value: '15', label: 'office PCs using it' },
      { value: '5 → 15', label: 'PCs since launch' },
      { value: '50–60', label: 'corporate clients tracked' },
    ],
  },
  {
    name: 'Road Accident Severity',
    category: 'MSc project · 2024',
    summary:
      'Population risk analysis of UK STATS19 accident data from 2005 to 2017, with classification models, a multi-page Power BI dashboard and an ARIMA forecast to 2027.',
    tools: ['Python', 'R', 'Power BI', 'Scikit-learn'],
    stats: [
      { value: '2,047,256', label: 'STATS19 records' },
      { value: '88.34%', label: 'accuracy, logistic regression' },
      { value: '0.92%', label: 'MAPE, ARIMA forecast' },
    ],
    link: { label: 'GitHub', href: LINKS.github },
  },
  {
    name: 'London Fly-Tipping BI',
    category: 'MSc project · 2023',
    summary:
      'A Power BI report on London Datastore fly-tipping data from 2011 to 2022, with ARIMA and SARIMA forecasts for 3 and 10 years ahead, to 2031.',
    tools: ['Power BI', 'R', 'Power Query'],
    stats: [
      { value: '8', label: 'KPIs across 32 boroughs' },
      { value: '2.67%', label: 'MAPE, 3-year forecast' },
      { value: '3.4%', label: 'MAPE, 10-year forecast' },
    ],
    link: { label: 'GitHub', href: LINKS.github },
  },
];

export const MARQUEE_ROWS = [
  ['Power BI', 'DAX', 'SQL', 'Python', 'Excel', 'Power Query', 'Claude Code', 'KPI Dashboards'],
  ['ARIMA', 'SARIMA', 'R', 'Scikit-learn', 'Pandas', 'Tableau', 'ETL', 'LLM Automation'],
];
