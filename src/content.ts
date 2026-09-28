export const profile = {
  firstName: "Sixalbert",
  name: "Sixalbert Nsengumuremyi",
  title: "Software Developer • AI Enthusiast • Technology Builder",
  intro:
    "I build modern software solutions and explore the possibilities of Artificial Intelligence, web technologies, and emerging digital solutions.",
  about:
    "I am a university student in Kigali, building my craft in software development, Artificial Intelligence, and electronics and telecommunications. I care about clear problem-solving, continuous learning, and technology that is useful in the real world — including solutions shaped for communities across Africa.",
  location: "Kigali, Rwanda",
  email: "sixalbertnsengumuremyi70@gmail.com",
  phone: "+250 791 641 692",
  phoneHref: "tel:+250791641692",
  github: "",
  linkedin: "",
  instagram: "https://www.instagram.com/sixalbert2/",
  facebook: "https://www.facebook.com/share/1cP6vm2vYM/",
  available: true,
  availableLabel: "Available for opportunities",
  portrait: "/portrait.jpg",
  footerLine: "Software Developer & AI Enthusiast",
};

export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Instagram" | "Facebook" | "Email";
  href: string;
};

export function socialLinks(): SocialLink[] {
  const links: SocialLink[] = [];
  if (profile.github) links.push({ label: "GitHub", href: profile.github });
  if (profile.linkedin) links.push({ label: "LinkedIn", href: profile.linkedin });
  if (profile.instagram) links.push({ label: "Instagram", href: profile.instagram });
  if (profile.facebook) links.push({ label: "Facebook", href: profile.facebook });
  links.push({ label: "Email", href: `mailto:${profile.email}` });
  return links;
}

export type ProjectCategory = "Web" | "Software" | "AI" | "Other";

export type Project = {
  name: string;
  summary: string;
  categories: ProjectCategory[];
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projectFilters = ["All", "Web", "Software", "AI", "Other"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export const projects: Project[] = [
  {
    name: "Talentbridge",
    summary:
      "A network where schools run teams and matches, and verified adults can find youth talent without contacting a child directly.",
    categories: ["Web", "Software"],
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    name: "Sport Quest",
    summary:
      "A play space for basketball, football, and reaction games, with results, a leaderboard, schools, and challenges.",
    categories: ["Web", "Software"],
    stack: ["React", "Phaser", "Supabase"],
  },
  {
    name: "Smart Farm",
    summary:
      "A field monitor with live sensor readings, crop recommendations from soil and weather, and irrigation advice.",
    categories: ["AI", "Software"],
    stack: ["Python", "FastAPI"],
  },
  {
    name: "Solar-Powered Smart Bus Stop",
    summary:
      "An Arduino prototype with Wi-Fi and a digital display, exploring a solar-powered smart-city bus stop.",
    categories: ["Other", "Software"],
    stack: ["Arduino", "EasyEDA", "Wi-Fi"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Software & programming",
    items: [
      "Software development",
      "Web development",
      "HTML & CSS",
      "JavaScript",
      "React",
      "TypeScript fundamentals",
      "API integration",
      "Git & GitHub",
      "Debugging & troubleshooting",
      "Problem solving",
      "Basic data analysis",
      "Basic machine learning concepts",
      "AI-assisted software development",
    ],
  },
  {
    title: "AI",
    items: [
      "Artificial Intelligence fundamentals",
      "Generative AI",
      "Prompt engineering",
      "AI-assisted coding",
      "AI solution exploration",
    ],
  },
  {
    title: "Electronics & engineering",
    items: [
      "Arduino",
      "Circuit design with EasyEDA",
      "Embedded systems",
      "CCTV, fire alarm, and access control",
      "Hardware troubleshooting",
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "Current",
    title: "BSc, Electronics and Telecommunication Engineering",
    place: "Université Libre de Kigali — Polytechnic Institute",
    detail: "Year 2. Software, electronics, and telecommunications studied together.",
  },
  {
    period: "Year 1 completed",
    title: "Electronics and Telecommunication Engineering",
    place: "Rwanda Polytechnic — IPRC Gishari",
    detail: "Foundation year in electronics and telecommunication engineering.",
  },
  {
    period: "Completed",
    title: "A2 Certificate in Electronic Services",
    place: "Lycée de Nyanza",
    detail: "Advanced-level study in electronic services.",
  },
  {
    period: "4 months",
    title: "Technical Intern",
    place: "Well International Security System, Kigali",
    detail:
      "Tested and documented CCTV, fire alarm, and access-control systems, and worked with senior technicians on installation and quality checks.",
  },
  {
    period: "Short course",
    title: "AI Master Skills",
    place: "Professional training",
    detail:
      "Practical work with modern AI tools, prompting, and using AI in learning, research, and software development.",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  detail: string;
  image: string;
  file: string;
};

export const certificates: Certificate[] = [
  {
    title: "Rwanda Climate Science Symposium",
    issuer: "Ministry of Environment, Republic of Rwanda",
    date: "22–23 September 2026",
    detail: "Certificate of participation in the second symposium, held in Kigali.",
    image: "/certificates/rcss-2026-1.jpg",
    file: "/certificates/rcss-2026.pdf",
  },
  {
    title: "Global Game Jam",
    issuer: "Digital Realm — Global Game Jam Rwanda",
    date: "2026",
    detail: "Certificate of participation at the Rwanda site, with RGDA.",
    image: "/certificates/grpbal-game-jam-1.jpg",
    file: "/certificates/grpbal-game-jam.pdf",
  },
  {
    title: "Statement of results",
    issuer: "Rwanda Polytechnic, Gishari College",
    date: "7 August 2025",
    detail:
      "First-year results in Electronics and Telecommunication Technology for the 2024–2025 academic year.",
    image: "/certificates/transcript-1.jpg",
    file: "/certificates/transcript.pdf",
  },
  {
    title: "Generative AI — Master",
    issuer: "Ingazi and Microsoft Learning",
    date: "11 July 2025",
    detail: "Completion of the Generative AI Master course on Ingazi.",
    image: "/certificates/ingazi-master-1.jpg",
    file: "/certificates/ingazi-master.pdf",
  },
  {
    title: "Generative AI — Medium",
    issuer: "Ingazi and Microsoft Learning",
    date: "11 July 2025",
    detail: "Completion of the Generative AI Medium course on Ingazi.",
    image: "/certificates/ingazi-medium-1.jpg",
    file: "/certificates/ingazi-medium.pdf",
  },
  {
    title: "Generative AI — Foundations",
    issuer: "Ingazi and Microsoft Learning",
    date: "11 July 2025",
    detail: "Completion of the Generative AI Foundations course on Ingazi.",
    image: "/certificates/ingazi-foundations-1.jpg",
    file: "/certificates/ingazi-foundations.pdf",
  },
  {
    title: "Driving license",
    issuer: "Republic of Rwanda",
    date: "10 May 2025",
    detail: "Class B license, issued in Kigali.",
    image: "/certificates/driving-license-2.jpg",
    file: "/certificates/driving-license.pdf",
  },
  {
    title: "Wahl Barber Training",
    issuer: "Wahl Professional",
    date: "9 July 2024",
    detail: "Certificate of participation in Wahl Barber Training, Rwanda 2024.",
    image: "/certificates/wahl-1.jpg",
    file: "/certificates/wahl.pdf",
  },
  {
    title: "Video-Photography",
    issuer: "Bright Future Cornerstone",
    date: "Completed",
    detail: "Certificate of completion for the Video-Photography course.",
    image: "/certificates/completion-1.jpg",
    file: "/certificates/completion.pdf",
  },
  {
    title: "Living Your Vision",
    issuer: "Africa for Excellence Mission and the Ministry of Youth and Arts",
    date: "Completed",
    detail:
      "Training at Kimisagara One Stop Center in leadership, entrepreneurship, and personal development.",
    image: "/certificates/living-your-version-1.jpg",
    file: "/certificates/living-your-version.pdf",
  },
  {
    title: "Advanced TVET Certificate V",
    issuer: "NESA, Lycée de Nyanza",
    date: "December 2023",
    detail: "National examination pass in Electronic Services.",
    image: "/certificates/nesa-1.jpg",
    file: "/certificates/nesa.pdf",
  },
];

export type Achievement = {
  kind: string;
  title: string;
  detail: string;
  period: string;
};

export const achievements: Achievement[] = [
  {
    kind: "Hackathon",
    title: "Game Garage",
    detail: "Built under time pressure with a team at SportBiz.",
    period: "SportBiz",
  },
  {
    kind: "Hackathon",
    title: "Harvard Health Hackathon",
    detail: "Health-focused prototyping, teamwork, and presentation.",
    period: "Health",
  },
  {
    kind: "Hackathon",
    title: "Cursor Hackathon",
    detail: "AI-assisted development and rapid project delivery.",
    period: "Cursor",
  },
  {
    kind: "Training",
    title: "AI Master Skills",
    detail: "Short course in artificial intelligence, prompting, and practical AI tools.",
    period: "Completed",
  },
  {
    kind: "Internship",
    title: "Well International Security System",
    detail: "Fault diagnosis, system testing, and technical documentation in Kigali.",
    period: "4 months",
  },
  {
    kind: "Community",
    title: "Volunteer",
    detail: "Event coordination, setup, and support for participants.",
    period: "Ongoing practice",
  },
];

export const languages = [
  { name: "Kinyarwanda", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
];

export const references = [
  {
    name: "Mr. Augustine Nzeyimana",
    role: "Lecturer, Université Libre de Kigali (ULK)",
    phone: "+250 787 173 363",
  },
  {
    name: "Mr. Sengwamana Emeran",
    role: "CEO, Ice Tech Rwanda",
    phone: "+250 786 446 835",
  },
  {
    name: "Mr. Samuel Niyomugabo",
    role: "CEO, Youth Innovation Hub",
    phone: "+250 791 845 268",
  },
];
