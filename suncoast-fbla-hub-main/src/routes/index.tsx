import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { EventQuiz } from "@/components/site/EventQuiz";
import { Faq } from "@/components/site/Faq";
import { Gallery } from "@/components/site/Gallery";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { MembersPie } from "@/components/site/MembersPie";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { fullFaq } from "@/data/faq";
import { memberYears, officers } from "@/data/site";
import achievementOne from "@/assets/Achievements/Jeurel.png";
import achievementTwo from "@/assets/Achievements/Manil.JPEG";
import achievementThree from "@/assets/Achievements/Isabella.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suncoast FBLA — Build. Compete. Lead." },
      {
        name: "description",
        content:
          "Suncoast Community High School FBLA: leadership, competition, service, and opportunity for every student.",
      },
      { property: "og:site_name", content: "Suncoast FBLA" },
      { property: "og:title", content: "Suncoast FBLA — Build. Compete. Lead." },
      {
        property: "og:description",
        content:
          "A student-led chapter where future business leaders build skills, compete, serve, and lead.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://suncoastfbla.org" },
      { property: "og:image", content: "https://suncoastfbla.org/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Suncoast FBLA — Build. Compete. Lead." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Suncoast FBLA — Build. Compete. Lead." },
      {
        name: "twitter:description",
        content:
          "A student-led chapter where future business leaders build skills, compete, serve, and lead.",
      },
      { name: "twitter:image", content: "https://suncoastfbla.org/og-image.jpg" },
      { name: "twitter:image:alt", content: "Suncoast FBLA — Build. Compete. Lead." },
    ],
    links: [{ rel: "canonical", href: "https://suncoastfbla.org" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Suncoast FBLA — Build. Compete. Lead.",
          description:
            "A student-led chapter where future business leaders build skills, compete, serve, and lead.",
          url: "https://suncoastfbla.org",
          isPartOf: {
            "@type": "WebSite",
            name: "Suncoast FBLA",
            url: "https://suncoastfbla.org",
          },
          about: {
            "@type": "Organization",
            name: "Suncoast FBLA",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function SectionHead({
  index,
  title,
  children,
}: {
  index: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div>
        <p className="label-text text-muted-foreground">{index}</p>
        <h2 className="title-lg mt-5 max-w-xl">{title}</h2>
      </div>
      {children ? <div className="grid content-start gap-5 lg:pt-14">{children}</div> : null}
    </div>
  );
}

const reasons = [
  [
    "01",
    "Leadership",
    "Take ownership of projects, guide teams, and learn how to lead with confidence.",
  ],
  [
    "02",
    "Competition",
    "Put your knowledge and creativity to work across business, technology, finance, and design.",
  ],
  [
    "03",
    "Communication",
    "Practice presenting, interviewing, writing, and collaborating in real situations.",
  ],
  [
    "04",
    "Career exploration",
    "Try an industry through an event before committing to it in college.",
  ],
  ["05", "Service", "Give back through projects that support the school and the wider community."],
  ["06", "Community", "Build alongside motivated students who want each other to succeed."],
];

const upcoming = [
  { type: "Meeting", title: "General Meeting", date: "Sep 16 · 2:45 PM", detail: "Cafeteria" },
  { type: "Form", title: "Membership Form", date: "Sep 5 · 11:59 PM", detail: "Google Classroom" },
  { type: "Form", title: "2680 Form", date: "Sep 5 · 11:59 PM", detail: "Google Classroom" },
];

const achievements = [
  {
    year: "2026",
    title: "Jeurel Johnson",
    subtitle: "State Champion",
    image: achievementOne,
  },
  {
    year: "2026",
    title: "Manil Chabria",
    subtitle: "State Champion",
    image: achievementTwo,
  },
  {
    year: "2026",
    title: "Isabella Quiceno",
    subtitle: "Elected as the Region V Vice President",
    image: achievementThree,
  },
];

const fblaPillars = [
  ["01", "Leadership development", "Run meetings, lead teams, hold real responsibility."],
  ["02", "Career preparation", "Interviews, portfolios, résumés, professional communication."],
  ["03", "Business & technology", "Finance, marketing, management, coding, design, ethics."],
  ["04", "Networking", "Students, advisors, and professionals across the state."],
];

function Home() {
  return (
    <div className="bg-background">
      <Preloader />
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="home" className="min-h-[92vh] pt-14">
          <div className="page-shell grid min-h-[calc(92vh-3.5rem)] lg:grid-cols-[.82fr_1.18fr]">
            <div className="reveal flex flex-col justify-between border-border py-8 lg:border-r lg:py-16 lg:pr-14">
              <p className="label-text text-muted-foreground">
                Suncoast Community High School
                <br />
                Future Business Leaders of America
              </p>
              <div className="my-8 lg:my-16">
                <h1 className="title-xl max-w-xl">
                  Build.
                  <br />
                  Compete.
                  <br />
                  <span className="text-primary">Lead.</span>
                </h1>
                <p className="mt-6 lg:mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                  A student-led community where ambitious students turn ideas into skills, skills
                  into action, and action into impact.
                </p>
                <a
                  href="#upcoming"
                  className="mt-6 lg:mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  Discover FBLA <ArrowDown size={15} />
                </a>
              </div>
              <p className="label-text text-muted-foreground">FY-27 · Palm Beach County, FL</p>
            </div>
            <HeroCarousel />
          </div>
        </section>

        {/* UPCOMING */}
        <section id="upcoming" className="section-pad border-y border-border bg-card">
          <div className="page-shell">
            <SectionHead index="01 / Upcoming" title="What’s next.">
              <p className="text-base leading-relaxed text-muted-foreground">
                Find all the information about upcoming meetings, deadlines, and competitions here.
              </p>
            </SectionHead>
            <div className="mt-12 border-t border-border">
              {upcoming.map((item, index) => (
                <article
                  key={item.type}
                  className="group grid gap-3 border-b border-border py-5 md:grid-cols-[4rem_1fr_12rem_1fr] md:gap-5 md:items-center md:py-7"
                >
                  <span className="label-text text-muted-foreground">0{index + 1}</span>
                  <div>
                    <p className="label-text text-primary">{item.type}</p>
                    <h3 className="mt-1 text-lg font-medium md:mt-2 md:text-xl">{item.title}</h3>
                  </div>
                  <p className="label-text">{item.date}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.detail}</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPETITIONS */}
        <section id="competitions" className="section-pad border-b border-border">
          <div className="page-shell">
            <SectionHead index="02 / Competitions" title="Find your event.">
              <p className="text-base leading-relaxed text-muted-foreground">
                Start with the official FBLA competitive event list bellow, narrow by what you
                enjoy, then confirm the format and rules for the current year by using the FBLA
                website. You can also find free practice materials here.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <a
                  href="https://www.fbla.org/divisions/fbla/fbla-competitive-events/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm text-primary"
                >
                  Official FBLA competitive events <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://connect.fbla.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm text-primary"
                >
                  Practice materials - FBLA Connect <ArrowUpRight size={15} />
                </a>
              </div>
            </SectionHead>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="border-t border-border">
                {[
                  [
                    "Objective tests",
                    "Timed, knowledge-based tests taken under proctored conditions.",
                  ],
                  ["Hybrid", "An objective test paired with a case study or presentation."],
                  [
                    "Performance",
                    "Presenting, speaking, interviewing, or demonstrating for judges.",
                  ],
                  ["Production / role-play", "Complete a practical task, product, or scenario."],
                ].map(([title, text]) => (
                  <div key={title} className="border-b border-border py-4">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <EventQuiz />
            </div>
          </div>
        </section>

        {/* WHAT IS FBLA */}
        <section id="about" className="section-pad border-b border-border bg-card">
          <div className="page-shell">
            <SectionHead
              index="03 / About"
              title="A place to explore what you can do and build the confidence to do it."
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                Future Business Leaders of America is the largest student business organization in
                the country. It exists to help students develop leadership, career, business, and
                technology skills through experiences you cannot get from a textbook alone.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Members compete in events across finance, marketing, management, technology, design,
                hospitality, and public speaking. They also lead committees, plan chapter
                activities, attend district, state, and national conferences, and serve their
                community.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                No business background is required, and no prior competition experience is expected.
                FBLA provides introductory events specifically for students who are brand new.
              </p>
            </SectionHead>

            <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {fblaPillars.map(([number, title, text]) => (
                <div key={title} className="bg-card p-6">
                  <span className="label-text text-primary">{number}</span>
                  <h3 className="mt-10 text-base font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SUNCOAST */}
        <section id="why" className="section-pad border-b border-border">
          <div className="page-shell">
            <SectionHead
              index="04 / Why Join"
              title={
                <>
                  More than a club.
                  <br />A place to build your future.
                </>
              }
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                You can grow here whether this is your first or your fourth season competing.
                Everything below is open to any member who wants it.
              </p>
            </SectionHead>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {reasons.map(([number, title, text]) => (
                <article
                  key={number}
                  className="group min-h-56 bg-card p-7 transition-colors hover:bg-muted"
                >
                  <div className="flex items-start justify-between">
                    <span className="label-text text-primary">{number}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <h3 className="mt-14 text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MEMBERS */}
        <section id="members" className="section-pad border-b border-border bg-card">
          <div className="page-shell">
            <SectionHead index="05 / Members" title="Our growth.">
              <p className="text-base leading-relaxed text-muted-foreground">
                Three years ago our chapter only consisted of 7 members. Since then we have added
                200 new members, nearly doubling last year&apos;s membership.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Growth is measured by more than headcount, our competition placements at districts,
                states, and nationals allow us to celebrate how far our members have come.
              </p>
            </SectionHead>

            {/* MEMBER OF THE MONTH */}
            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch lg:gap-8">
              <div className="flex flex-col overflow-hidden border border-border bg-card">
                <div className="flex aspect-3/4 items-center justify-center bg-muted lg:aspect-3/4">
                  <span className="label-text text-muted-foreground">[PHOTO]</span>
                </div>
              </div>
              <div className="flex flex-col justify-between border border-border bg-card p-4 lg:p-6">
                <p className="label-text text-primary">September · Member of the Month</p>
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-lg font-medium lg:text-xl">Hidden</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:mt-3">
                    The officers have not revealed the next member of the month.
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground lg:mt-5">
                  Nominations are open to all members. See an officer if you know someone who
                  deserves the spotlight.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-stretch">
              <div className="flex flex-col border border-border bg-card p-7">
                <p className="label-text text-primary">Members by grade level</p>
                <div className="mt-8 flex flex-1 items-center">
                  <MembersPie />
                </div>
              </div>

              <div className="overflow-x-auto border-t border-border">
                <div className="grid min-w-136 grid-cols-[5rem_1fr_1fr_1fr_1fr] border-b border-border px-4 py-4 label-text text-muted-foreground">
                  <span>Year</span>
                  <span>Members</span>
                  <span>Districts</span>
                  <span>States</span>
                  <span>Nationals</span>
                </div>
                {memberYears.map((row) => (
                  <div
                    key={row.year}
                    className="grid min-w-136 grid-cols-[5rem_1fr_1fr_1fr_1fr] items-center border-b border-border px-4 py-5 transition-colors hover:bg-muted"
                  >
                    <span className="label-text text-primary">{row.year}</span>
                    <span className="text-2xl font-medium">{row.members}</span>
                    <span className="text-sm text-muted-foreground">{row.districts}</span>
                    <span className="text-sm text-muted-foreground">{row.states}</span>
                    <span className="text-sm text-muted-foreground">{row.nationals}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OFFICERS */}
        <section id="officers" className="section-pad border-b border-border">
          <div className="page-shell">
            <SectionHead index="06 / Officers" title="The students running the chapter.">
              <p className="text-base leading-relaxed text-muted-foreground">
                Here are the names and photos of the students and teachers who are currently running
                the chapter.
              </p>
            </SectionHead>
            <div className="mt-14 grid gap-px border border-border bg-border grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
              {officers.map((officer) => (
                <article key={officer.role} className="bg-card">
                  <div className="flex aspect-3/4 min-h-0 items-center justify-center overflow-hidden bg-muted md:aspect-4/5">
                    {officer.image ? (
                      <img
                        src={officer.image}
                        alt={`${officer.name} — ${officer.role}`}
                        loading="lazy"
                        width={320}
                        height={400}
                        className="h-full w-full object-cover grayscale"
                      />
                    ) : (
                      <span className="label-text text-muted-foreground">[PHOTO]</span>
                    )}
                  </div>
                  <div className="p-3 md:p-5">
                    <p className="label-text text-primary">{officer.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground md:mt-2 md:text-sm">
                      {officer.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM OF WORK */}
        <section id="pow" className="section-pad border-b border-border bg-card">
          <div className="page-shell">
            <SectionHead index="07 / Program of Work" title="The plan for the year.">
              <p className="text-base leading-relaxed text-muted-foreground">
                The chapter&apos;s live plan for leadership, competition, service, membership,
                fundraising, and school engagement.
              </p>
            </SectionHead>
            <div className="mt-12 overflow-hidden border border-border bg-background">
              <div className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-5">
                <div>
                  <p className="label-text text-primary">Google Document</p>
                  <p className="mt-1 text-base font-medium md:text-lg">
                    Program of Work — 2026/2027
                  </p>
                </div>
                <a
                  href="https://docs.google.com/document/d/1mSCwOOf5bHqNkE_BALhWL4aCXwoJL4O4C-mwUVOYn6g/edit"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm text-primary whitespace-nowrap"
                >
                  Open document <ArrowUpRight size={15} />
                </a>
              </div>
              <iframe
                src="https://docs.google.com/document/d/1mSCwOOf5bHqNkE_BALhWL4aCXwoJL4O4C-mwUVOYn6g/preview?embedded=true"
                title="Suncoast FBLA Program of Work"
                className="aspect-16/10 min-h-64 w-full bg-muted md:min-h-160"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="section-pad border-b border-border">
          <div className="page-shell">
            <SectionHead index="08 / Achievements" title="Work worth recognizing.">
              <p className="text-base leading-relaxed text-muted-foreground">
                Competition placements, conference accomplishments, and other chapter awards.
              </p>
            </SectionHead>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {achievements.map((item) => (
                <article
                  key={item.year}
                  className="group relative min-h-64 overflow-hidden border border-border md:min-h-96"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.subtitle}`}
                    loading="lazy"
                    width={400}
                    height={480}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/72 transition-colors group-hover:bg-background/55" />
                  <div className="relative flex h-full min-h-64 flex-col justify-between p-5 md:min-h-96 md:p-7">
                    <p className="label-text text-primary">{item.year}</p>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-pad border-b border-border bg-card">
          <div className="page-shell">
            <SectionHead index="09 / Gallery" title="Moments from the chapter.">
              <p className="text-base leading-relaxed text-muted-foreground">
                View all of our photos of FBLA events through out the years and search by tag &
                name.
              </p>
            </SectionHead>
            <Gallery />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-pad border-b border-border">
          <div className="page-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div>
              <p className="label-text text-muted-foreground">10 / FAQ</p>
              <h2 className="title-lg mt-3 max-w-md lg:mt-5">Questions, answered.</h2>
            </div>
            <Faq items={fullFaq} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Preloader() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-background animate-[loader-out_1.25s_ease_forwards]"
    >
      <div className="w-44 text-center">
        <span className="label-text">Suncoast FBLA</span>
        <div className="mt-4 h-px origin-left bg-primary animate-[loader-bar_.9s_cubic-bezier(.16,1,.3,1)_forwards]" />
      </div>
    </div>
  );
}
