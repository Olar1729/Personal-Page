import { profile } from "@/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-mint">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.github} className="hover:text-mint" rel="me">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.youtube} className="hover:text-mint" rel="me">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
