import { Container } from "@/components/Container";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4 text-sm">
          <a className="text-zinc-700 hover:underline dark:text-zinc-300" href={profile.links.github}>
            GitHub
          </a>
          <a className="text-zinc-700 hover:underline dark:text-zinc-300" href={profile.links.linkedin}>
            LinkedIn
          </a>
          <a className="text-zinc-700 hover:underline dark:text-zinc-300" href={`mailto:${profile.links.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
