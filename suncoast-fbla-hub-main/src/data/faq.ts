export type QA = { q: string; a: string };

export const beginnerFaq: QA[] = [
  {
    q: "Is FBLA only for business students?",
    a: "No. FBLA covers business, technology, finance, marketing, communication, design, hospitality, leadership and more. Plenty of members join with no business classes at all.",
  },
  {
    q: "Do I need previous competition experience?",
    a: "No. Every member starts somewhere, and introductory events exist specifically for students who are new to FBLA.",
  },
  {
    q: "Can freshmen join?",
    a: "Yes. FBLA also offers introductory-level events designed for newer students.",
  },
  {
    q: "Can I compete individually?",
    a: "Yes. Many events are individual. Whether an event is individual or team-based is set by the current official event guidelines.",
  },
  {
    q: "Can I compete with a team?",
    a: "Yes. A large number of events allow teams. Team size limits come from the current official guidelines for that event.",
  },
  {
    q: "What kinds of events are available?",
    a: "Objective tests, hybrid events, performance events, and production/role-play/project events. Browse the full directory on the Event Directory page.",
  },
  {
    q: "Do I have to compete?",
    a: "Competition is one part of FBLA. Members also lead, serve, attend conferences, plan chapter events, and build professional skills.",
  },
  {
    q: "How much time does FBLA require?",
    a: "It depends on what you choose to do. Attending meetings is a light commitment; preparing seriously for a competitive event takes consistent work over several weeks.",
  },
  {
    q: "What happens at conferences?",
    a: "Conferences bring chapters together to compete, attend workshops and sessions, hear speakers, network with other members, and attend awards recognition.",
  },
  {
    q: "How do I get started?",
    a: "Join our google classroom and attend our meetings to get started.",
  },
];

export const fullFaq: QA[] = [
  {
    q: "What is FBLA?",
    a: "Future Business Leaders of America is a student organization focused on leadership development, career preparation, business and technology skills, competitive events, networking, and community involvement.",
  },
  {
    q: "Who can join?",
    a: "Anyone can join FBLA, regardless of their major or career aspirations.",
  },
  {
    q: "Do I need business experience?",
    a: "No. Curiosity and willingness to prepare matter far more than prior coursework.",
  },
  ...beginnerFaq.filter((f) => f.q === "Do I have to compete?"),
  {
    q: "What are competitive events?",
    a: "Structured contests where members demonstrate knowledge, creativity, communication, technical ability, leadership, or problem-solving — scored against official FBLA guidelines.",
  },
  {
    q: "How do I choose an event?",
    a: "Use the 'Which Event Is Right For Me?' guide under the competitons section on this website, then confirm your choice against the current official event guidelines which can be found on the National FBLA website.",
  },
  {
    q: "Can I change my event?",
    a: "Changes may be possible until registration closes. Please contact an officer if you have any concerns.",
  },
  {
    q: "Are events individual or team-based?",
    a: "Both exist. The current official guidelines for each event state whether it is individual, team, or either.",
  },
  {
    q: "What are objective tests?",
    a: "Knowledge-based, timed tests taken under proctored conditions. Question count and time limit are set by the current competitive-event guidelines so please read them. Things change year to year",
  },
  {
    q: "What are performance events?",
    a: "Events built around presenting, speaking, interviewing, demonstrating, or defending work in front of judges.",
  },
  {
    q: "What are production events?",
    a: "Events where you complete a practical business task, project, product, or role-play scenario — often under a time limit.",
  },
  {
    q: "What is a hybrid event?",
    a: "An event that combines an objective test with an additional component such as a case study, role-play, or presentation.",
  },
  {
    q: "What happens at competitions?",
    a: "You check in, report to your event, follow the official instructions, complete your test/presentation/project, and wait for results at the awards session. See your guidelines for the exact instructions.",
  },
  {
    q: "What should I bring to competitions?",
    a: "Required materials depend on your event and the level of competition. Confirm against the current official guidelines.",
  },
  {
    q: "What are conferences?",
    a: "Multi-day or single-day events where chapters compete, attend workshops, and receive recognition.",
  },
  {
    q: "How do I qualify for higher levels?",
    a: "Advancement rules are set each year by state and national FBLA. Do not assume last year's rules apply — confirm the current-year criteria before planning.",
  },
  {
    q: "How often does FBLA meet?",
    a: "We usually meet once a month, check google classroom frequently for updates.",
  },
  { q: "Where are meetings held?", a: "Meetings are held in the cafetria afterschool" },
  {
    q: "How do I contact an officer?",
    a: "Use the contact details posted on google classroom. Please do not hesitate to reach out with questions, concerns, or ideas. Officers are here to help.",
  },
  {
    q: "How do I get competition resources?",
    a: "Start with the Competition Resources page on FBLA connect and reach out to your officers for additional support.",
  },
  {
    q: "Where can I find deadlines?",
    a: "All deadlines can be found in your event guidelines and google classroom announcements.",
  },
  {
    q: "Where do I find official FBLA guidelines?",
    a: "Through the official National and Florida FBLA sites linked in the Official Links section. Always use the current competitive-event year.",
  },
  {
    q: "How can I participate without competing?",
    a: "Serve on committees, help run chapter events, join community service projects, support marketing and design, or work toward a leadership role.",
  },
  {
    q: "How can I become an officer?",
    a: "Officer selection follows chapter policy — timeline, eligibility, and process are published each year and announced through google classroom.",
  },
];
