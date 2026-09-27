import { profile, projects } from "../content";
import { Section } from "./Section";

export function Developer() {
  return (
    <Section
      id="developer"
      eyebrow="Developer"
      title="Work I can stand behind"
      lede={
        profile.github
          ? "Featured repositories from the public profile."
          : "The products below are the current body of work. GitHub activity can sit here once a public profile is linked."
      }
    >
      <div className="overflow-hidden rounded-3xl border border-line">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center ${
              index > 0 ? "border-t border-line" : ""
            }`}
          >
            <div>
              <h3 className="text-lg text-ink">{project.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-muted">{project.summary}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
