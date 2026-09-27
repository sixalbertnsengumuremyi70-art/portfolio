import { ArrowDownRight, Download } from "lucide-react";
import { profile, socialLinks } from "../content";
import { HeroVisual } from "./HeroVisual";
import { SocialIcon } from "./Icons";

export function Hero() {
  const links = socialLinks();

  return (
    <section id="home" className="scroll-mt-24 px-5 pt-16 pb-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm tracking-wide text-muted">Kigali, Rwanda</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl">
            Hi, I&apos;m {profile.firstName}
          </h1>
          <p className="mt-5 text-lg text-brass">{profile.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a href="#cv" className="btn-ghost">
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="social-link"
                  aria-label={link.label}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <SocialIcon label={link.label} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
