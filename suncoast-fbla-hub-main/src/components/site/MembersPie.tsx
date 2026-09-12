const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const grades = [
  { label: "Freshmen", value: 21 },
  { label: "Sophomores", value: 26 },
  { label: "Juniors", value: 30 },
  { label: "Seniors", value: 23 },
];

export function MembersPie() {
  const total = grades.reduce((sum, item) => sum + item.value, 0) || 1;

  let offset = 0;
  const slices = grades.map((item, index) => {
    const fraction = item.value / total;
    const slice = {
      ...item,
      fraction,
      dash: fraction * CIRCUMFERENCE,
      offset,
      opacity: 0.35 + (index / Math.max(grades.length - 1, 1)) * 0.65,
    };
    offset += slice.dash;
    return slice;
  });

  return (
    <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="relative w-full max-w-[12rem] shrink-0">
        <svg
          viewBox="0 0 160 160"
          className="w-full -rotate-90 text-primary"
          style={{ aspectRatio: "1 / 1" }}
        >
          {slices.map((slice) => (
            <circle
              key={slice.label}
              cx="80"
              cy="80"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeOpacity={slice.opacity}
              strokeWidth="28"
              strokeDasharray={`${slice.dash} ${CIRCUMFERENCE - slice.dash}`}
              strokeDashoffset={-slice.offset}
            />
          ))}
        </svg>
      </div>

      <ul className="grid w-full gap-3">
        {slices.map((slice) => (
          <li key={slice.label} className="flex items-center gap-3 border-b border-border pb-2">
            <span className="h-2.5 w-2.5 shrink-0 bg-primary" style={{ opacity: slice.opacity }} />
            <span className="text-sm font-medium">{slice.label}</span>
            <span className="ml-auto label-text text-muted-foreground">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
