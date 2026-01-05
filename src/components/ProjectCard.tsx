import { Badge } from "@/components/Badge";

export function ProjectCard({
  name,
  description,
  tags,
  href,
}: {
  name: string;
  description: string;
  tags: string[];
  href: string;
}) {
  const clickable = href && href !== "#";
  const Wrapper: any = clickable ? "a" : "div";

  return (
    <Wrapper
      href={clickable ? href : undefined}
      target={clickable ? "_blank" : undefined}
      rel={clickable ? "noreferrer" : undefined}
      className="block rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="text-base font-semibold">{name}</div>

      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Wrapper>
  );
}
