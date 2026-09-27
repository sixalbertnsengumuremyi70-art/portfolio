import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../content";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = links
      .map(([id]) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md ${
        scrolled ? "border-line bg-bg/85" : "border-transparent bg-bg/60"
      }`}
    >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-16">
        <a href="#home" className="font-display text-xl tracking-tight text-ink">
          {profile.firstName}
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {profile.available ? (
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.availableLabel}
            </p>
          ) : null}
          <nav className="flex items-center gap-5" aria-label="Primary">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm ${active === id ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm text-ink lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-line px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-ink" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
