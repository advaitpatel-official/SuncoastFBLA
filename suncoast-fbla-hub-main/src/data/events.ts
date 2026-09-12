export type EventFormat = "Objective Test" | "Performance" | "Production / Role-Play";
export type EventEntry = {
  name: string;
  format: EventFormat;
  cluster: string;
  team?: boolean;
};

/**
 * LEGACY / CURRENT-SITE INVENTORY.
 * Carried over from the chapter's existing Google Site. This is not a guarantee
 * that every event is offered in the current FBLA competitive-event year.
 * The authoritative list lives in `currentYearEvents` below and must be
 * updated by the chapter each year.
 */
export const legacyEvents: EventEntry[] = [
  // Objective tests
  { name: "Accounting I", format: "Objective Test", cluster: "Finance" },
  { name: "Accounting II", format: "Objective Test", cluster: "Finance" },
  { name: "Advertising", format: "Objective Test", cluster: "Marketing" },
  { name: "Agribusiness", format: "Objective Test", cluster: "Business" },
  { name: "Business Communication", format: "Objective Test", cluster: "Communication" },
  { name: "Business Law", format: "Objective Test", cluster: "Business" },
  { name: "Computer Problem Solving", format: "Objective Test", cluster: "Technology" },
  { name: "Cybersecurity", format: "Objective Test", cluster: "Technology" },
  { name: "Economics", format: "Objective Test", cluster: "Finance" },
  { name: "Financial Math", format: "Objective Test", cluster: "Finance" },
  { name: "Supply Chain Management", format: "Objective Test", cluster: "Business" },
  { name: "Healthcare Administration", format: "Objective Test", cluster: "Business" },
  { name: "Human Resource Management", format: "Objective Test", cluster: "Business" },
  { name: "Insurance & Risk Management", format: "Objective Test", cluster: "Finance" },
  {
    name: "Introduction to Business Communication",
    format: "Objective Test",
    cluster: "Communication",
  },
  { name: "Introduction to Business Concepts", format: "Objective Test", cluster: "Business" },
  { name: "Introduction to Business Procedures", format: "Objective Test", cluster: "Business" },
  { name: "Introduction to FBLA", format: "Objective Test", cluster: "Leadership" },
  { name: "Introduction to Financial Math", format: "Objective Test", cluster: "Finance" },
  { name: "Securities & Investments", format: "Objective Test", cluster: "Finance" },
  {
    name: "Introduction to Information Technology",
    format: "Objective Test",
    cluster: "Technology",
  },
  { name: "Introduction to Marketing Concepts", format: "Objective Test", cluster: "Marketing" },
  {
    name: "Introduction to Parliamentary Procedure",
    format: "Objective Test",
    cluster: "Leadership",
  },
  { name: "Journalism", format: "Objective Test", cluster: "Communication" },
  { name: "Networking Infrastructures", format: "Objective Test", cluster: "Technology" },
  { name: "Organizational Leadership", format: "Objective Test", cluster: "Leadership" },
  { name: "Personal Finance", format: "Objective Test", cluster: "Finance" },
  { name: "Public Policy & Advocacy", format: "Objective Test", cluster: "Leadership" },
  { name: "UX Design", format: "Objective Test", cluster: "Technology" },

  // Performance
  { name: "Business Plan", format: "Performance", cluster: "Entrepreneurship", team: true },
  { name: "Electronic Career Portfolio", format: "Performance", cluster: "Career" },
  { name: "Future Business Educator", format: "Performance", cluster: "Career" },
  { name: "Sales Presentation", format: "Performance", cluster: "Marketing" },
  { name: "Broadcast Journalism", format: "Performance", cluster: "Communication", team: true },
  { name: "Business Ethics", format: "Performance", cluster: "Business", team: true },
  { name: "Coding & Programming", format: "Performance", cluster: "Technology", team: true },
  {
    name: "Computer Game & Simulation Programming",
    format: "Performance",
    cluster: "Technology",
    team: true,
  },
  {
    name: "Mobile Application Development",
    format: "Performance",
    cluster: "Technology",
    team: true,
  },
  { name: "Data Analysis", format: "Performance", cluster: "Technology", team: true },
  { name: "Digital Animation", format: "Performance", cluster: "Creative", team: true },
  { name: "Digital Video Production", format: "Performance", cluster: "Creative", team: true },
  { name: "Financial Statement Analysis", format: "Performance", cluster: "Finance", team: true },
  { name: "Graphic Design", format: "Performance", cluster: "Creative", team: true },
  {
    name: "Introduction to Business Presentation",
    format: "Performance",
    cluster: "Business",
    team: true,
  },
  { name: "Introduction to Programming", format: "Performance", cluster: "Technology" },
  {
    name: "Introduction to Social Media Strategy",
    format: "Performance",
    cluster: "Marketing",
    team: true,
  },
  { name: "Public Service Announcement", format: "Performance", cluster: "Creative", team: true },
  { name: "Social Media Strategies", format: "Performance", cluster: "Marketing", team: true },
  { name: "Visual Design", format: "Performance", cluster: "Creative", team: true },
  {
    name: "Website Coding & Development",
    format: "Performance",
    cluster: "Technology",
    team: true,
  },
  { name: "Website Design", format: "Performance", cluster: "Technology", team: true },
  { name: "Impromptu Speaking", format: "Performance", cluster: "Communication" },
  { name: "Introduction to Public Speaking", format: "Performance", cluster: "Communication" },
  { name: "Public Speaking", format: "Performance", cluster: "Communication" },
  { name: "Future Business Leader", format: "Performance", cluster: "Leadership" },
  { name: "Job Interview", format: "Performance", cluster: "Career" },

  // Production / role-play / project
  { name: "Computer Applications", format: "Production / Role-Play", cluster: "Technology" },
  { name: "Spreadsheet Applications", format: "Production / Role-Play", cluster: "Technology" },
  { name: "Word Processing", format: "Production / Role-Play", cluster: "Technology" },
  {
    name: "Banking & Financial Systems",
    format: "Production / Role-Play",
    cluster: "Finance",
    team: true,
  },
  {
    name: "Business Management",
    format: "Production / Role-Play",
    cluster: "Business",
    team: true,
  },
  { name: "Client Service", format: "Production / Role-Play", cluster: "Business" },
  {
    name: "Entrepreneurship",
    format: "Production / Role-Play",
    cluster: "Entrepreneurship",
    team: true,
  },
  {
    name: "Hospitality & Event Management",
    format: "Production / Role-Play",
    cluster: "Hospitality",
    team: true,
  },
  {
    name: "Introduction to Event Planning",
    format: "Production / Role-Play",
    cluster: "Hospitality",
    team: true,
  },
  {
    name: "Management Information Systems",
    format: "Production / Role-Play",
    cluster: "Technology",
    team: true,
  },
  { name: "Marketing", format: "Production / Role-Play", cluster: "Marketing", team: true },
  { name: "Network Design", format: "Production / Role-Play", cluster: "Technology", team: true },
  {
    name: "Parliamentary Procedure",
    format: "Production / Role-Play",
    cluster: "Leadership",
    team: true,
  },
  {
    name: "Sports & Entertainment Management",
    format: "Production / Role-Play",
    cluster: "Hospitality",
    team: true,
  },
  { name: "Help Desk", format: "Production / Role-Play", cluster: "Technology" },
  {
    name: "International Business",
    format: "Production / Role-Play",
    cluster: "Business",
    team: true,
  },
];

/**
 * AUTHORITATIVE LIST — replace each year with the events Suncoast FBLA is
 * actually offering. Leave empty until the chapter confirms them.
 */
export const currentYearEvents: EventEntry[] = [];

export const clusters = [
  "Finance",
  "Technology",
  "Marketing",
  "Business",
  "Communication",
  "Creative",
  "Leadership",
  "Entrepreneurship",
  "Career",
  "Hospitality",
] as const;

export const formats: EventFormat[] = ["Objective Test", "Performance", "Production / Role-Play"];

export const eventDetailFields = [
  { label: "Event Type", hint: "Objective, hybrid, performance, or production." },
  { label: "Individual / Team", hint: "Team size limits come from the official guidelines." },
  { label: "Recommended Skills", hint: "What tends to help students succeed in this event." },
  { label: "What You Actually Do", hint: "A plain-language walkthrough of the experience." },
  { label: "What You Need to Prepare", hint: "Materials, submissions, or study areas." },
  { label: "What You Are Scored On", hint: "Pull directly from the current rating sheet." },
  { label: "Competition Format", hint: "Confirm against current official guidelines only." },
  { label: "Preparation Timeline", hint: "Suggested weeks-out plan working back from the date." },
  { label: "Official Guidelines", hint: "Link to the current-year FBLA guideline page." },
  { label: "Practice Resources", hint: "Practice tests, samples, templates, past materials." },
  { label: "Helpful Tips", hint: "Advice from members who have competed in this event." },
  { label: "Common Mistakes", hint: "What costs points most often." },
  { label: "Related Events", hint: "Other events that use similar skills." },
  { label: "Who Is This For?", hint: "The kind of student who tends to enjoy this event." },
];
