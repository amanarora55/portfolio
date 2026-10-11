// Text wrapped in **double asterisks** is rendered as a highlighted metric.

export const profile = {
  name: "BuildWithAman",
  firstName: "Aman",
  fullName: "Aman Arora",
  title: "Senior Software Developer",
  focus: ["React", "React Native", "JavaScript", "AI Integration"],
  location: "Toronto, Canada",
  workStatus: "Permanent Resident",
  email: "amanarora0796@gmail.com",
  phoneDisplay: "+1 (416) 268-7369",
  phoneHref: "tel:+14162687369",
  resumeHref: "/Aman-Arora-Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/amanarora55/",
    github: "https://github.com/amanarora55",
    leetcode: "https://leetcode.com/u/ARORAJI/",
  },
  currentRole: "Senior Software Developer @ ParallelDots",
  headline: "I build offline-first web & mobile apps that 25,000+ people rely on.",
  summary:
    "Senior Software Developer with 7+ years building and scaling production web and mobile applications, with deep expertise in offline-first mobile architecture, asynchronous media pipelines, and computer-vision integration — plus 6+ years mentoring developers while leading technical execution on globally deployed products.",
};

export const glance = [
  { value: "7+", label: "Years shipping production apps" },
  { value: "25K+", label: "Users on systems I built" },
  { value: "17+", label: "Global enterprise clients" },
  { value: "6", label: "Devs + 2 interns currently mentored" },
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
};

export const metrics: Metric[] = [
  { value: 80, suffix: "%+", label: "Fewer production crashes", context: "ShelfWatch React Native app" },
  { prefix: "~", value: 97, suffix: "%", label: "Faster planogram creation", context: "React Konva + computer vision" },
  { value: 50, suffix: "%", label: "Less promo-spend leakage", context: "Trade-promotion validation" },
  { value: 82, suffix: "%", label: "Drop in error rates", context: "75+ prod & cross-browser fixes" },
  { value: 65, suffix: "%", label: "Faster deployment cycles", context: "Across 4 major projects" },
  { value: 500, suffix: "K+", label: "Images annotated", context: "At 98% accuracy, 31+ categories" },
  { value: 2500, suffix: "+", label: "Images per upload batch", context: "Async background queue" },
  { value: 30, suffix: "s+", label: "Latency cut per cycle", context: "On-device CV model, 0 API calls" },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  tags: string[];
  highlights: string[];
  more?: string[];
};

export const experience: Role[] = [
  {
    company: "ParallelDots Technology",
    title: "Senior Software Developer III",
    location: "Remote · Canada / India",
    period: "Oct 2025 — Present",
    current: true,
    tags: ["React Native", "Offline-first", "Computer Vision", "Team Lead"],
    highlights: [
      "Architected an offline-first React Native experience for ShelfWatch — check-in/out, image capture and data sync over intermittent networks for **25,000+ users** across **17+ global clients**.",
      "Built an asynchronous image-upload queue handling **2,500+ images per batch** (40–60 per session) so users keep working while uploads and analysis run in the background with real-time status.",
      "Drove an **80%+ reduction in production crashes** by instrumenting Bugfender analytics to triage severity and prioritize stability fixes.",
    ],
    more: [
      "Integrated an on-device computer-vision model, eliminating **100% of prior analysis API calls** and cutting processing latency by **30+ seconds per cycle**.",
      "Implemented deep linking across **10+ React Native features** to orchestrate sequential task workflows, while leading and mentoring **6 developers and 2 interns** on a globally deployed product.",
    ],
  },
  {
    company: "ParallelDots Technology",
    title: "Senior Software Developer II",
    location: "Remote · Canada / India",
    period: "Oct 2023 — Sep 2025",
    tags: ["Vue.js", "Python", "React Konva", "Full-stack"],
    highlights: [
      "Conceived a React Konva planogram builder with computer-vision integration for **10+ clients across 500+ stores** — **~97% faster** planogram creation and **80%+ fewer** misplacement / out-of-stock issues.",
      "Led frontend for a trade-promotion validation platform serving **5+ clients and 300+ stores**, cutting promotional-spend leakage by **50%** and validation turnaround to **~1 day**.",
      "Built a full-stack support platform (Vue.js, Python) used by **350+ employees across 9 teams** for ticketing, authorization, escalation and bandwidth tracking.",
    ],
    more: [
      "Ensured frontend/backend integration across **4 major projects**, contributing to **65% faster** deployment cycles.",
      "Resolved **75+ production and cross-browser issues**, driving an **82% drop in error rates** and a **45% improvement** in system stability.",
    ],
  },
  {
    company: "Rogers Communications",
    title: "Software Developer Co-op",
    location: "Toronto, Canada",
    period: "May 2023 — Sep 2023",
    tags: ["Python / Flask", "REST APIs", "Selenium / Robot"],
    highlights: [
      "Reduced production API failures by **60%** through strategic testing of Python/Flask REST APIs on mock servers.",
      "Partnered with backend on API integration for lazy-loaded UI components, reducing page load time by **20%**.",
      "Optimized Python/Selenium Robot automation suites to a **90% issue-resolution rate**, reducing downtime by **15%**.",
    ],
  },
  {
    company: "ParallelDots Technology",
    title: "Software Developer",
    location: "Gurugram, India",
    period: "Oct 2018 — Jan 2022",
    tags: ["React", "Redux", "WebSockets", "NLP"],
    highlights: [
      "Team lead for ShelfWatch 2.0, a React tagging tool enabling data taggers to annotate **500K+ images** across **31+ product categories** at **98% accuracy**.",
      "Integrated NLP models into Komprehend AI (Vanilla JS), powering multilingual text-intelligence APIs for **10M+ texts** and **12K+ developer clients**.",
      "Performance work supported a **54% expansion in deals closed** — part of the effort that won SoftBank's Tech4Future Challenge and helped secure **$4.5M Series A** funding.",
    ],
    more: [
      "Connected UI to back-end services over REST and WebSockets for continuous data flow, a **40% boost** in overall application performance.",
      "Redesigned the React architecture with Redux-based client-side caching, improving media loading and runtime by **25%**.",
      "Introduced Jest & Enzyme testing plus A/B testing with user-feedback analysis — **20% fewer** bug-related delays and **40% better** code quality.",
      "Built a lite Python Flask version of a large brand application so users on low-spec systems could still perform full CRUD workflows.",
      "Launched internal 'KeepUpWithTech' sessions on Vue.js and Next.js, mentoring **10+ junior developers** and interns through ongoing code reviews.",
    ],
  },
];

export const skills = [
  {
    group: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Vue.js", "Angular", "Redux", "Redux Saga", "NestJS", "Python", "HTML", "CSS"],
  },
  {
    group: "Libraries & Visualization",
    items: ["D3.js", "Recharts", "Chart.js", "ECharts", "React Konva", "Ant Design", "Material UI", "Pandas", "NumPy", "Axios", "BlueImp"],
  },
  {
    group: "Engineering",
    items: ["Offline-first architecture", "Async upload queues", "Deep linking", "REST APIs", "WebSockets", "Client-side caching", "AI / computer-vision integration", "Performance optimization"],
  },
  {
    group: "Platforms & Tools",
    items: ["AWS", "GCP", "MS SQL Server", "Git", "Postman", "Webpack", "Babel", "Gradle", "Android Studio", "Xcode", "Linux", "VS Code", "Claude", "OpenAI"],
  },
];

export const coreStack = ["React", "React Native", "TypeScript", "Next.js", "Vue.js", "Python", "Node.js"];

export type Project = {
  name: string;
  tagline: string;
  period: string;
  badge: { kind: "personal" | "client"; label: string };
  description: string;
  points: string[];
  stack: string[];
  accent: "lime" | "cyan" | "violet" | "amber";
};

export const projects: Project[] = [
  {
    name: "Fitofy",
    tagline: "Train · Track · Transform",
    period: "Jun 2026 — Present",
    badge: { kind: "personal", label: "Personal" },
    description:
      "A responsive fitness-tracking platform spanning workouts, nutrition, body measurements, progress analytics, goals and weekly reviews.",
    points: ["20+ screens on desktop, tablet & mobile", "Offline-first logging", "Real-time visualization & automated insights"],
    stack: ["React", "Redux Saga", "Zustand", "Tailwind", "TanStack Table", "Node.js", "MongoDB"],
    accent: "lime",
  },
  {
    name: "WealthWay",
    tagline: "Your financial companion",
    period: "May 2025",
    badge: { kind: "personal", label: "Personal" },
    description:
      "A React Native investment-portfolio analytics app tracking performance, allocation, returns and goals through interactive dashboards.",
    points: ["8+ asset classes, 10K+ valuation records", "~60% less manual analysis vs. Excel", "Sub-second queries via MongoDB aggregation"],
    stack: ["React Native", "TypeScript", "Redux Toolkit", "NestJS", "MongoDB", "OpenAI API"],
    accent: "cyan",
  },
  {
    name: "Hedge Fund Query Builder",
    tagline: "AI-validated financial metrics",
    period: "Jul 2023",
    badge: { kind: "client", label: "Client · Singapore" },
    description:
      "Integrated 100+ financial metrics from third-party APIs, using an AI prediction model to validate calculations for strategic decisions.",
    points: ["100+ metrics from multiple APIs", "AI prediction-model validation", "Charted with Recharts"],
    stack: ["React", "Redux", "Python Flask", "Material UI", "Recharts", "PostgreSQL"],
    accent: "violet",
  },
  {
    name: "Crypto Exchange Book",
    tagline: "Multi-asset trading platform",
    period: "Apr 2022",
    badge: { kind: "client", label: "Client · Singapore" },
    description:
      "A trading platform for gold, crypto, assets and bonds with an interactive dashboard of 100+ trading-party records.",
    points: ["Custom multi-factor authentication", "Multi-currency payment gateway", "Binance API integration"],
    stack: ["React", "Python Django", "Redux Saga", "Ant Design", "MongoDB"],
    accent: "amber",
  },
];

export const education = [
  {
    school: "Lambton College, Toronto",
    credential: "PG Certificate, Artificial Intelligence & Machine Learning",
    date: "Sep 2023",
    badge: "Recent | Post Graduate",
  },
  {
    school: "GGSIP University, India",
    credential: "B.Tech, Electronics & Communication Engineering",
    date: "Jun 2018",
    badge: "Bachelors",
  },
];

export const highlights = [
  "Tech4Future Challenge winner (SoftBank)",
  "Helped secure $4.5M Series A",
];
