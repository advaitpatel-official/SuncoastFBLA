import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { quizQuestions, quizResults } from "@/data/site";

export function EventQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const answer = (format: string) => {
    setScores((current) => ({ ...current, [format]: (current[format] ?? 0) + 1 }));
    setStep(step + 1);
  };

  const done = step >= quizQuestions.length;
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
  const result = top ? quizResults[top] : undefined;
  const question = quizQuestions[step];

  return (
    <div className="border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <p className="label-text text-primary">
          {done ? "Suggestion" : `Question ${step + 1} of ${quizQuestions.length}`}
        </p>
        {step > 0 ? (
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setScores({});
            }}
            className="flex items-center gap-2 label-text text-muted-foreground hover:text-foreground"
          >
            <RotateCcw size={13} /> Restart
          </button>
        ) : null}
      </div>

      <div className="mt-3 h-px w-full bg-border">
        <div
          className="h-px bg-primary transition-all duration-500"
          style={{
            width: `${(Math.min(step, quizQuestions.length) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>

      {done && result ? (
        <div className="mt-6 animate-[fade-in-up_.4s_ease_both]">
          <p className="label-text text-muted-foreground">Closest match</p>
          <h3 className="mt-2 text-2xl font-medium">{result.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{result.body}</p>
          <p className="mt-5 label-text text-muted-foreground">Other events to consider</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {result.examples.map((example) => (
              <li
                key={example}
                className="border border-border px-3 py-1.5 text-xs text-foreground"
              >
                {example}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            This is a suggestion, not an assignment. Confirm every event against the current
            official guidelines.
          </p>
        </div>
      ) : question ? (
        <div key={step} className="mt-6 animate-[fade-in-up_.4s_ease_both]">
          <h3 className="text-xl font-medium">{question.q}</h3>
          <div className="mt-5 grid gap-2">
            {question.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => answer(option.format)}
                className={cn(
                  "border border-border px-4 py-3 text-left text-sm transition-colors",
                  "hover:border-primary hover:bg-muted",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
