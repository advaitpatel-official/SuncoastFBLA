import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

const SITE_URL = "https://suncoastfbla.org";
const SITE_NAME = "Suncoast FBLA";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Suncoast FBLA — Build. Compete. Lead." },
      {
        name: "description",
        content:
          "The student-led Future Business Leaders of America chapter at Suncoast Community High School.",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: "Suncoast FBLA — Build. Compete. Lead." },
      {
        property: "og:description",
        content:
          "Competition, leadership, service, and opportunity at Suncoast Community High School.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Suncoast FBLA — Build. Compete. Lead." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Suncoast FBLA — Build. Compete. Lead." },
      {
        name: "twitter:description",
        content:
          "Competition, leadership, service, and opportunity at Suncoast Community High School.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Suncoast FBLA — Build. Compete. Lead." },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          description:
            "The student-led Future Business Leaders of America chapter at Suncoast Community High School.",
          logo: `${SITE_URL}/og-image.jpg`,
          sameAs: ["https://www.fbla.org"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Riviera Beach",
            addressRegion: "FL",
            addressCountry: "US",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: Root,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Root() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
