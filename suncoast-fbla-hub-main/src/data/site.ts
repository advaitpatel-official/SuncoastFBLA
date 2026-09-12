import gallery01 from "@/assets/Club Rush/DSC_0056.JPG";
import gallery02 from "@/assets/Club Rush/DSC_0057.JPG";
import gallery03 from "@/assets/Club Rush/DSC_0058.JPG";
import gallery05 from "@/assets/Club Rush/DSC_0060.JPG";
import gallery07 from "@/assets/Club Rush/DSC_0062.JPG";
import gallery08 from "@/assets/Club Rush/DSC_0063.JPG";
import gallery09 from "@/assets/Club Rush/DSC_0064.JPG";
import gallery15 from "@/assets/Club Rush/DSC_0070.JPG";
import gallery18 from "@/assets/Club Rush/DSC_0073.JPG";
import gallery20 from "@/assets/Club Rush/DSC_0075.JPG";
import gallery21 from "@/assets/Club Rush/DSC_0076.JPG";
import gallery22 from "@/assets/Club Rush/DSC_0077.JPG";
import gallery23 from "@/assets/Club Rush/DSC_0078.JPG";
import gallery25 from "@/assets/Club Rush/DSC_0080.JPG";
import gallery28 from "@/assets/Club Rush/DSC_0083.JPG";

import states1 from "@/assets/States 26/1.jpg";
import states2 from "@/assets/States 26/2.jpg";
import states3 from "@/assets/States 26/3.jpg";
import states4 from "@/assets/States 26/4.jpg";
import states5 from "@/assets/States 26/5.jpg";
import states8 from "@/assets/States 26/8.jpg";
import states9 from "@/assets/States 26/9.jpg";
import states10 from "@/assets/States 26/10.jpg";

import officerAdvait from "@/assets/Officers/Advait.JPEG";
import officerAlejandro from "@/assets/Officers/Alejandro.JPEG";
import officerDavid from "@/assets/Officers/David.JPEG";
import officerDiaz from "@/assets/Officers/Diaz.JPEG";
import officerGianna from "@/assets/Officers/Gianna.JPEG";
import officerJuan from "@/assets/Officers/Juan.PNG";
import officerOmaly from "@/assets/Officers/Omaly.JPEG";
import officerPranay from "@/assets/Officers/Pranay.JPEG";
import officerYashvi from "@/assets/Officers/Yashvi.png";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
  span: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g01",
    src: gallery01,
    title: "Club Rush 2026 - 01",
    description:
      "Officers interacting with members and providing information about FBLA during club rush.",
    tags: ["Chapter life"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g02",
    src: gallery02,
    title: "Club Rush 2026 - 02",
    description: "The FBLA 2026 club rush poster board.",
    tags: ["Chapter life"],
    span: "md:row-span-2",
  },
  {
    id: "g03",
    src: gallery03,
    title: "Club Rush 2026 - 03",
    description: "A close up of the club rush banner and trophies.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g05",
    src: gallery05,
    title: "Club Rush 2026 - 04",
    description: "A close up of the club rush poster board.",
    tags: ["Chapter life"],
    span: "md:col-span-2",
  },
  {
    id: "g07",
    src: gallery07,
    title: "Club Rush 2026 - 05",
    description: "2026-2027 FBLA President David Peña promoting FBLA to a future member.",
    tags: ["Competition", "Workshops"],
    span: "",
  },
  {
    id: "g08",
    src: gallery08,
    title: "Club Rush 2026 - 06",
    description: "2026-2027 FBLA President David Peña during club rush.",
    tags: ["Chapter life"],
    span: "md:col-span-2",
  },
  {
    id: "g09",
    src: gallery09,
    title: "Club Rush 2026 - 07",
    description:
      "Officers Manil Chambria, David Peña, Juan Beraldi, and Advait Patel at club rush.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g15",
    src: gallery15,
    title: "Club Rush 2026 - 08",
    description: "A close up of an FBLA trophy at club rush.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g18",
    src: gallery18,
    title: "Club Rush 2026 - 09",
    description: "A detailed view of the right side of the club rush poster board.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g20",
    src: gallery20,
    title: "Club Rush 2026 - 10",
    description: "FBLA president David Peña showcasing information about the FBLA.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g21",
    src: gallery21,
    title: "Club Rush 2026 - 11",
    description: "Manil Chambria at club rush.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g22",
    src: gallery22,
    title: "Club Rush 2026 - 12",
    description: "David Peña and Juan Beraldi at club rush.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g23",
    src: gallery23,
    title: "Club Rush 2026 - 13",
    description: "David Peña and Manil Chambria in front of a smartboard at club rush.",
    tags: ["Chapter life"],
    span: "md:row-span-2",
  },
  {
    id: "g25",
    src: gallery25,
    title: "Club Rush 2026 - 14",
    description: "FBLA President David Peña standing in front of a smartboard at club rush.",
    tags: ["Chapter life"],
    span: "",
  },
  {
    id: "g28",
    src: gallery28,
    title: "Club Rush 2026 - 15",
    description: "FBLA President David Peña standing in front of a poster board at club rush.",
    tags: ["Chapter life"],
    span: "md:col-span-2",
  },
  {
    id: "g30",
    src: states1,
    title: "States 2026 - 01",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g31",
    src: states2,
    title: "States 2026 - 02",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "md:row-span-2",
  },
  {
    id: "g32",
    src: states3,
    title: "States 2026 - 03",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "",
  },
  {
    id: "g33",
    src: states4,
    title: "States 2026 - 04",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "",
  },
  {
    id: "g34",
    src: states5,
    title: "States 2026 - 05",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "md:col-span-2",
  },
  {
    id: "g35",
    src: states8,
    title: "States 2026 - 06",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "",
  },
  {
    id: "g36",
    src: states9,
    title: "States 2026 - 07",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "",
  },
  {
    id: "g37",
    src: states10,
    title: "States 2026 - 08",
    description: "Members at the FBLA State Leadership Conference.",
    tags: ["Conference"],
    span: "md:col-span-2",
  },
];

export const galleryTags = [
  "All",
  "Competition",
  "Conference",
  "Awards",
  "Service",
  "Workshops",
  "Chapter life",
];

export const officers: { role: string; name: string; image: string | null }[] = [
  { role: "Advisor", name: "Ms. Diaz", image: officerDiaz },
  { role: "President", name: "David Peña", image: officerDavid },
  { role: "Vice President", name: "Manil Chabria", image: null },
  { role: "Director of Service", name: "Pranay Patel", image: officerPranay },
  { role: "Director of Competitions", name: "Juan Beraldi", image: officerJuan },
  { role: "Secretary", name: "Yashvi Rajpurohit", image: officerYashvi },
  { role: "Treasurer", name: "Alejandro Rincón", image: officerAlejandro },
  { role: "Publicity Officer", name: "Gianna Luiso", image: officerGianna },
  { role: "Design Officer", name: "Advait Patel", image: officerAdvait },
  { role: "Parliamentarian", name: "Omaly Burgos", image: officerOmaly },
];

export type MemberYear = {
  year: string;
  members: string;
  districts: string;
  states: string;
  nationals: string;
};

export const memberYears: MemberYear[] = [
  { year: "2024", members: "207", districts: "TBD", states: "TBD", nationals: "TBD" },
  { year: "2023", members: "107", districts: "71", states: "11", nationals: "3" },
  { year: "2022", members: "57", districts: "26", states: "2", nationals: "1" },
  { year: "2021", members: "26", districts: "14", states: "0", nationals: "0" },
  { year: "2020", members: "7", districts: "0", states: "0", nationals: "0" },
];

export type QuizQuestion = {
  q: string;
  options: { label: string; format: string }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    q: "How do you prefer to show what you know?",
    options: [
      { label: "Answering questions under time pressure", format: "Objective Test" },
      { label: "Presenting in front of judges", format: "Performance" },
      { label: "Building or designing something", format: "Production" },
      { label: "Thinking on my feet in a scenario", format: "Role-Play" },
    ],
  },
  {
    q: "Would you rather work…",
    options: [
      { label: "Alone", format: "Objective Test" },
      { label: "With a partner or team", format: "Performance" },
      { label: "Alone, but on a long project", format: "Production" },
      { label: "In a fast-paced pair", format: "Role-Play" },
    ],
  },
  {
    q: "Which sounds most interesting?",
    options: [
      { label: "Finance, accounting, or economics", format: "Objective Test" },
      { label: "Public speaking or leadership", format: "Performance" },
      { label: "Design, coding, or media", format: "Production" },
      { label: "Management, marketing, or ethics", format: "Role-Play" },
    ],
  },
  {
    q: "How much prep time do you want?",
    options: [
      { label: "Study on my own schedule", format: "Objective Test" },
      { label: "Rehearse regularly with others", format: "Performance" },
      { label: "Weeks of building and revising", format: "Production" },
      { label: "Short, focused practice runs", format: "Role-Play" },
    ],
  },
];

export const quizResults: Record<string, { title: string; body: string; examples: string[] }> = {
  "Objective Test": {
    title: "Introduction to Business Concepts",
    body: "Based on your answers, these FBLA events may fit you best. Confirm eligibility and this year's format with the official website before you make your decision.",
    examples: [
      "Introduction to Business Concepts",
      "Accounting I",
      "Business Law",
      "Economics",
      "Cybersecurity",
      "Personal Finance",
      "Networking Infrastructures",
    ],
  },
  Performance: {
    title: "Public Speaking",
    body: "Based on your answers, these FBLA events may fit you best. Confirm eligibility and this year's format with the official website before you make your decision.",
    examples: [
      "Public Speaking",
      "Job Interview",
      "Impromptu Speaking",
      "Introduction to Public Speaking",
      "Sales Presentation",
      "Business Presentation",
      "Broadcast Journalism",
    ],
  },
  Production: {
    title: "Website Design",
    body: "Based on your answers, these FBLA events may fit you best. Confirm eligibility and this year's format with the official website before you make your decision.",
    examples: [
      "Website Design",
      "Graphic Design",
      "Computer Game & Simulation Programming",
      "Digital Video Production",
      "Publication Design",
      "Introduction to Programming",
      "Social Media Strategies",
    ],
  },
  "Role-Play": {
    title: "Business Ethics",
    body: "Based on your answers, these FBLA events may fit you best. Confirm eligibility and this year's format with the official website before you make your decision.",
    examples: [
      "Business Ethics",
      "Marketing",
      "Management Decision Making",
      "Hospitality & Event Management",
      "Entrepreneurship",
      "Banking & Financial Systems",
      "Business Management",
    ],
  },
};
