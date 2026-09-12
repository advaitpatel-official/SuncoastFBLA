import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QA } from "@/data/faq";

export function Faq({ items, visibleCount = 10 }: { items: QA[]; visibleCount?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visible = items.slice(0, visibleCount);
  const hidden = items.slice(visibleCount);

  return (
    <div className="border-t border-border">
      {visible.map((item, index) => (
        <FaqRow
          key={item.q}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}

      {hidden.length > 0 && (
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] ease-[cubic-bezier(.22,.8,.2,1)]",
            showAll ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
          style={{ transitionDuration: showAll ? "1200ms" : "900ms" }}
        >
          <div className="min-h-0">
            {hidden.map((item, i) => {
              const index = visibleCount + i;
              return (
                <FaqRow
                  key={item.q}
                  item={item}
                  open={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              );
            })}
          </div>
        </div>
      )}

      {hidden.length > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          aria-expanded={showAll}
          aria-label={showAll ? "Show fewer questions" : "Show all questions"}
          className="mx-auto mt-6 flex w-fit cursor-pointer flex-col items-center pb-2 text-center"
        >
          <ChevronDown
            size={48}
            strokeWidth={1.2}
            className={cn(
              "transition-transform ease-[cubic-bezier(.22,.8,.2,1)]",
              showAll && "rotate-180 text-primary",
            )}
            style={{ transitionDuration: showAll ? "1200ms" : "900ms" }}
          />
        </button>
      )}
    </div>
  );
}

function FaqRow({ item, open, onToggle }: { item: QA; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-8 py-5 text-left text-lg font-medium"
      >
        <span>{item.q}</span>
        <Plus
          size={18}
          className={cn(
            "shrink-0 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
            open && "rotate-45 text-primary",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(.16,1,.3,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </div>
      </div>
    </div>
  );
}
