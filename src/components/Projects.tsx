import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectFilters, projects, type ProjectFilter } from "../content";
import { Section } from "./Section";

const tones = ["from-brass/25", "from-sky-300/15", "from-emerald-300/15", "from-orange-200/15"];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter));

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" lede="Real products and prototypes. Links appear when a repository or demo is ready.">
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              filter === item ? "border-brass bg-brass text-bg" : "border-line text-muted hover:text-ink"
            }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <article key={project.name} className="group overflow-hidden rounded-3xl border border-line bg-card">
            <div
              className={`relative flex h-44 items-end bg-gradient-to-br ${tones[index % tones.length]} to-transparent p-5`}
            >
              <p className="font-mono text-xs tracking-[0.16em] text-ink/70 uppercase">
                {project.categories.join(" · ")}
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-ink">{project.name}</h3>
              <p className="mt-3 text-muted">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <ProjectLink href={project.github} label="GitHub" />
                <ProjectLink href={project.demo} label="Live Demo" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1 text-sm text-white/30">
        {label}
      </span>
    );
  }
  return (
    <a href={href} className="inline-flex items-center gap-1 text-sm text-brass hover:text-brass-2">
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}
