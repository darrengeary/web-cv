import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { AskMe } from "@/components/AskMe";
import { profile } from "@/lib/profile";
import Image from "next/image";

export default function HomePage() {
  return (
    <Container className="py-10">
      {/* HERO */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {profile.name}
            </h1>
            <p className="mt-2 ">{profile.title}</p>
            <p className="mt-1 text-sm text-zinc-600">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-2">
          {/* LinkedIn */}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200"
            >
              <Image
                src="/linkedin2.png"
                alt="LinkedIn"
                fill
                className="object-contain p-2"
              />
            </a>

            {/* GitHub */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200 "
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                fill
                className="object-contain p-2"
              />
            </a>

            {/* Email (icon, not text) */}
            <a
              href={`mailto:${profile.links.email}`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200"
            >
              <Image
                src="/gmail.svg"
                alt="Email"
                fill
                className="object-contain p-2"
              />
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-3xl ">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.highlights.map((h) => (
            <Badge key={h}>{h}</Badge>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <Section title="Work Experience">
        <div className="grid gap-4">
          {profile.experience.map((e) => (
            <ExperienceItem key={`${e.company}-${e.role}`} {...e} />
          ))}
        </div>
      </Section>

      {/* PROJECTS (preview) */}
      <Section title="Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-soft">
            <div className="font-semibold">Strong</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.strong.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-soft">

            <div className="font-semibold">Working knowledge</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.working.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-soft">

            <div className="font-semibold">Exposure</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.exposure.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ASK ME */}
      <Section title="FAQ">
        <AskMe items={[...profile.askMe]} />
      </Section>

      {/* INTERESTS */}
      <Section title="Interests">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-soft">
          <ul className="list-disc space-y-2 pl-5 text-sm ">
            {profile.interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Section>
    </Container>
  );
}
