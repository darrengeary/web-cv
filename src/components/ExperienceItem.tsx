export function ExperienceItem({
  company,
  role,
  dates,
  bullets,
}: {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">{company}</div>
          <div className="text-base font-semibold">{role}</div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{dates}</div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
