import { Instagram, Github } from "lucide-react";

const nav = [
  ["Upcoming", "#upcoming"],
  ["Competitions", "#competitions"],
  ["About", "#about"],
  ["Why join", "#why"],
  ["Members", "#members"],
  ["Officers", "#officers"],
  ["Program of Work", "#pow"],
  ["Achievements", "#achievements"],
  ["Gallery", "#gallery"],
  ["FAQ", "#faq"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="page-shell pt-10 pb-8 md:pt-16 md:pb-10">
        <h2 className="font-medium leading-[0.92] tracking-tight text-[clamp(1.5rem,7.4vw,6.4rem)]">
          <span className="block">Ready to build</span>
          <span className="block">what comes next?</span>
        </h2>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 md:mt-16 md:gap-10 md:pt-10 md:grid-cols-4">
          <div>
            <p className="label-text text-foreground">Suncoast FBLA</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Future Business Leaders of America
              <br />
              Suncoast Community High School
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com/suncoast.fbla"
                target="_blank"
                rel="noreferrer"
                aria-label="Suncoast FBLA on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://github.com/advaitpatel-official/SuncoastFBLA"
                target="_blank"
                rel="noreferrer"
                aria-label="Suncoast FBLA on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="label-text text-foreground">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-text text-foreground">Official links</p>
            <ul className="mt-3 grid gap-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://www.fbla.org"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  National FBLA
                </a>
              </li>
              <li>
                <a
                  href="https://www.flfbla.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Florida FBLA
                </a>
              </li>
              <li>
                <a
                  href="https://connect.fbla.org/suncoast-community-high-school/register.php"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  FBLA Connect
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-text text-foreground">Disclaimer</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Information is subject to change. Always verify current competition requirements,
              deadlines, and policies through official FBLA and chapter communications on google
              classroom.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 label-text text-muted-foreground">
          @suncoast.fbla · FY-27
        </p>
      </div>
    </footer>
  );
}
