import { profile, socialLinks } from "../content";
import { SocialIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">{profile.firstName}</p>
          <p className="mt-1 text-sm text-muted">{profile.footerLine}</p>
        </div>
        <ul className="flex gap-4">
          {socialLinks().map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted hover:text-ink"
                aria-label={link.label}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <SocialIcon label={link.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/35">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
