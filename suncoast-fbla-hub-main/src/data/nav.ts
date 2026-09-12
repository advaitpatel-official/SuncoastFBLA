export type NavLink = { label: string; to: string; hash?: string; note?: string };
export type NavGroup = { label: string; to: string; links: NavLink[] };

export const navGroups: NavGroup[] = [
  {
    label: "About",
    to: "/about",
    links: [
      { label: "About Suncoast FBLA", to: "/about", note: "Who we are, mission, vision" },
      { label: "What is FBLA?", to: "/what-is-fbla", note: "Start here if you're new" },
      { label: "Why Join?", to: "/why-join", note: "Skills, benefits, opportunities" },
      { label: "Chapter Leadership", to: "/leadership", note: "Meet the officer team" },
      { label: "Members", to: "/members", note: "Teams and member spotlights" },
    ],
  },
  {
    label: "Compete",
    to: "/compete",
    links: [
      { label: "Competitions Hub", to: "/compete", note: "Formats and categories" },
      { label: "Event Directory", to: "/compete/events", note: "Search every event" },
      { label: "Which Event Is Right For Me?", to: "/compete/choose", note: "Guided quiz" },
      { label: "Competition Preparation", to: "/compete/prepare", note: "10-step system" },
      { label: "Timeline & Deadlines", to: "/compete/timeline", note: "Season stages" },
      {
        label: "Competition Resources",
        to: "/compete/resources",
        note: "Guidelines, practice tests",
      },
      { label: "Competition Day Guide", to: "/compete/competition-day", note: "What to expect" },
    ],
  },
  {
    label: "Chapter Life",
    to: "/chapter-life",
    links: [
      { label: "Chapter Life", to: "/chapter-life", note: "More than competition" },
      { label: "Meetings", to: "/meetings", note: "When, where, what to bring" },
      { label: "Chapter Events", to: "/events", note: "What we actually do" },
      { label: "Community Service", to: "/community-service", note: "Service projects" },
      { label: "Program of Work", to: "/program-of-work", note: "Our yearly plan" },
      { label: "Calendar", to: "/calendar", note: "Dates and deadlines" },
    ],
  },
  {
    label: "Showcase",
    to: "/achievements",
    links: [
      { label: "Achievements", to: "/achievements", note: "Awards archive by year" },
      { label: "Hall of Fame", to: "/hall-of-fame", note: "Chapter legacy" },
      { label: "Gallery", to: "/gallery", note: "Photos by category and year" },
      { label: "News & Announcements", to: "/news", note: "Chronological archive" },
      { label: "Archive", to: "/archive", note: "Clearly labeled past material" },
    ],
  },
  {
    label: "Resources",
    to: "/resources",
    links: [
      { label: "Resource Hub", to: "/resources", note: "Everything in one library" },
      { label: "New Member Guide", to: "/new-member-guide", note: "Your first weeks" },
      { label: "Member Checklists", to: "/checklists", note: "Member + competition" },
      { label: "Member Dashboard", to: "/member-dashboard", note: "Coming soon" },
      { label: "Career Exploration", to: "/careers", note: "Events to careers" },
      { label: "FAQ", to: "/faq", note: "Everything students ask" },
    ],
  },
];

export const footerLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Competitions", to: "/compete" },
  { label: "Calendar", to: "/calendar" },
  { label: "Events", to: "/events" },
  { label: "Leadership", to: "/leadership" },
  { label: "Awards", to: "/achievements" },
  { label: "Gallery", to: "/gallery" },
  { label: "Resources", to: "/resources" },
  { label: "Join", to: "/join" },
  { label: "Contact", to: "/contact" },
];

export const officialLinks = [
  { label: "National FBLA", href: "#", placeholder: "[OFFICIAL NATIONAL FBLA LINK]" },
  { label: "Florida FBLA", href: "#", placeholder: "[OFFICIAL FLORIDA FBLA LINK]" },
  { label: "Suncoast Community High School", href: "#", placeholder: "[OFFICIAL SCHOOL WEBSITE]" },
  {
    label: "Chapter Instagram",
    href: "https://instagram.com/suncoast.fbla",
    placeholder: "@suncoast.fbla",
  },
];
