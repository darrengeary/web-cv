import { Container } from "@/components/Container";
import { profile } from "@/lib/profile";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
          <div className="flex flex-wrap gap-2">
          {/* LinkedIn */}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Image
                src="/linkedin2.png"
                alt="LinkedIn"
                fill
                className="object-contain p-2 invert dark:invert-0"
              />
            </a>

            {/* GitHub */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                fill
                className="object-contain p-2 invert dark:invert-0"
              />
            </a>

            {/* Email (icon, not text) */}
            <a
              href={`mailto:${profile.links.email}`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Image
                src="/gmail.svg"
                alt="Email"
                fill
                className="object-contain p-2 invert dark:invert-0"
              />
            </a>
          </div>
      </Container>
    </footer>
  );
}
