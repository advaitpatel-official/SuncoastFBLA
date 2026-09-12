# Suncoast FBLA Website

The official website for the Suncoast Community High School FBLA chapter.

## Tech Stack

- **Framework:** React with TanStack Start
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS v4
- **Build:** Vite
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── site/        # Site-specific components
│   └── ui/          # Reusable UI components
├── data/            # Static data (officers, FAQ, gallery, etc.)
├── lib/             # Utility functions
├── routes/          # Page routes
└── styles.css       # Global styles
```

## Key Sections

- **Hero** – Carousel with chapter tagline
- **Upcoming** – Meetings, deadlines, and competitions
- **Competitions** – Event finder with interactive quiz
- **About** – What FBLA is
- **Why Join** – Reasons to join the chapter
- **Members** – Growth stats and member of the month
- **Officers** – Chapter leadership
- **Program of Work** – Live Google Document embed
- **Achievements** – Competition placements and awards
- **Gallery** – Photo gallery with search and tags
- **FAQ** – Frequently asked questions

## Deployment

The project is configured for deployment via Nitro/Cloudflare Workers.

```bash
npx nitro deploy --prebuilt
```

## License

Private – Suncoast FBLA Chapter
