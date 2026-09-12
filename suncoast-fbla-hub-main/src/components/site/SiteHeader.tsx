import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links: [string, string][] = [
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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map(([, href]) => href.slice(1));

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = "";
      let best = -Infinity;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top <= line && top > best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    };

    // Sync whenever the user scrolls or resizes the window.
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Sync when the URL hash changes — i.e. when a nav link is clicked or an
    // anchor jump happens. This guarantees the clicked section gets the active
    // highlight even if no scroll event fires.
    const onHash = () => {
      const hashId = window.location.hash.slice(1);
      if (ids.includes(hashId)) {
        setActive(hashId);
      } else {
        update();
      }
    };
    window.addEventListener("hashchange", onHash);

    // Re-evaluate once the page (including embedded content) has settled.
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("load", update);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/75 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <a href="#home" className="label-text font-medium text-foreground">
          Suncoast / FBLA
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "label-text border-b pb-0.5 transition-colors",
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-foreground transition-transform duration-300",
              open && "translate-y-1.75 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-foreground transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-foreground transition-transform duration-300",
              open && "-translate-y-1.75 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-border transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden",
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="min-h-0">
          <div className="page-shell py-3">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 45}ms` }}
                className={cn(
                  "block border-b border-border py-4 text-xl transition-colors",
                  active === href.slice(1) ? "text-foreground" : "text-muted-foreground",
                  open && "animate-[fade-in-up_.45s_cubic-bezier(.16,1,.3,1)_both]",
                )}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
