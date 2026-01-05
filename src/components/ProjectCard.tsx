import Image from "next/image";
import { Badge } from "@/components/Badge";

export function ProjectCard({
  name,
  description,
  tags,
  href,
  image,
}: {
  name: string;
  description: string;
  tags: readonly string[];
  href: string;
  image: string; // e.g. "/projects/lunchlog.png"
}) {
  const clickable = href && href !== "#";
  const Wrapper: any = clickable ? "a" : "div";

  const resolvedHref =
    clickable && href
      ? href.startsWith("http")
        ? href
        : `https://www.${href}`
      : undefined;

  return (
    <Wrapper
      href={resolvedHref}
      target={clickable ? "_blank" : undefined}
      rel={clickable ? "noreferrer" : undefined}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
    >

      {/* IMAGE HEADER */}
      <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="text-base font-semibold">{name}</div>

        {href && (
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {href}
          </div>
        )}

        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
