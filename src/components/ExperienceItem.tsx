export function ExperienceItem({
  company,
  role,
  dates,
  bullets,
}: {
  company: string;
  role: string;
  dates: string;
  bullets: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-soft">

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="text-sm text-zinc-600">{company}</div>
          <div className="text-base font-semibold">{role}</div>
        </div>
        <div className="text-sm text-zinc-600">{dates}</div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm ">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
