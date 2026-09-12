import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems, galleryTags, type GalleryItem } from "@/data/site";

const spans = ["md:col-span-2 md:row-span-2", "md:row-span-2", "", "", "md:col-span-2", "", ""];

export function Gallery() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<string[]>(["All"]);
  const [expanded, setExpanded] = useState<GalleryItem | null>(null);
  const [extra, setExtra] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Show a mix of Club Rush and States photos in the preview: first 4 Club Rush + first 2 States
  const previewItems = useMemo(() => {
    const clubRush = galleryItems.filter((item) => item.tags.includes("Chapter life")).slice(0, 4);
    const states = galleryItems.filter((item) => item.tags.includes("Conference")).slice(0, 2);
    return [...clubRush, ...states];
  }, []);

  // Pool of items NOT in the preview, so the filler never duplicates a preview tile
  const fillerPool = useMemo(() => {
    const previewIds = new Set(previewItems.map((item) => item.id));
    return galleryItems.filter((item) => !previewIds.has(item.id));
  }, [previewItems]);

  useEffect(() => {
    if (fillerPool.length > 0) {
      setExtra(Math.floor(Math.random() * fillerPool.length));
    }
  }, [fillerPool]);

  useEffect(() => {
    if (!overlayOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (expanded) setExpanded(null);
        else setOverlayOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlayOpen, expanded]);

  const tiles = useMemo(() => {
    const filler = fillerPool[extra] ?? fillerPool[0];
    return [...previewItems, filler].filter(Boolean) as GalleryItem[];
  }, [extra, fillerPool, previewItems]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return galleryItems.filter((item) => {
      const matchesTag = tags.includes("All") || item.tags.some((t) => tags.includes(t));
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [query, tags]);

  const openAll = () => {
    setTags(["All"]);
    setQuery("");
    setExpanded(null);
    setOverlayOpen(true);
  };

  const toggleTag = (option: string) => {
    if (option === "All") {
      setTags(["All"]);
      return;
    }
    setTags((current) => {
      const withoutAll = current.filter((t) => t !== "All");
      const next = withoutAll.includes(option)
        ? withoutAll.filter((t) => t !== option)
        : [...withoutAll, option];
      return next.length ? next : ["All"];
    });
  };

  const expand = (item: GalleryItem) => {
    setExpanded(item);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-12 grid auto-rows-44 grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map((item, index) => (
          <button
            key={`${item.id}-${index}`}
            type="button"
            onClick={openAll}
            className={cn("group relative overflow-hidden border border-border", spans[index])}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 bg-background/85 px-3 py-2 text-left label-text">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={openAll}
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
      >
        View more <Search size={15} />
      </button>

      {overlayOpen ? (
        <div
          ref={scrollRef}
          className="no-scrollbar fixed inset-0 z-50 animate-[overlay-in_.3s_ease] overflow-y-auto bg-background/97 backdrop-blur-md"
        >
          <div className="page-shell py-10">
            <div className="flex items-center justify-between gap-6">
              <p className="label-text text-muted-foreground">Chapter gallery</p>
              <button
                type="button"
                onClick={() => setOverlayOpen(false)}
                aria-label="Close gallery"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-7 flex items-center gap-3 border-b border-border pb-3">
              <Search size={16} className="text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search photos"
                className="w-full bg-transparent py-1.5 text-lg outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {galleryTags.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleTag(option)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 label-text transition-all duration-300",
                    tags.includes(option)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>

            {expanded ? (
              <div
                key={expanded.id}
                className="mt-8 grid animate-[panel-in_.4s_cubic-bezier(.16,1,.3,1)] gap-6 border border-border bg-card p-5 lg:grid-cols-[1.4fr_1fr]"
              >
                <img
                  src={expanded.src}
                  alt={expanded.title}
                  className="max-h-[60vh] w-full object-cover"
                />
                <div>
                  <p className="label-text text-primary">{expanded.tags.join(" · ")}</p>
                  <h3 className="mt-3 text-2xl font-medium">{expanded.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {expanded.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setExpanded(null)}
                    className="mt-6 label-text text-muted-foreground hover:text-foreground"
                  >
                    Back to all photos
                  </button>
                </div>
              </div>
            ) : null}

            <div
              key={`${tags.join(",")}|${query}`}
              className="mt-8 grid animate-[grid-in_.4s_cubic-bezier(.16,1,.3,1)] gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => expand(item)}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className="group animate-[grid-in_.5s_cubic-bezier(.16,1,.3,1)_both] overflow-hidden border border-border text-left"
                >
                  <span className="block h-48 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </span>
                  <span className="block bg-card p-3">
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="mt-1 block label-text text-muted-foreground">
                      {item.tags.join(" · ")}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="mt-10 text-sm text-muted-foreground">No photos match that search.</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
