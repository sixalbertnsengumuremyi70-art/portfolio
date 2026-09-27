import { achievements } from "../content";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Hackathons, training, and practice"
      lede="A place for certifications, events, internships, and communities as they grow."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-brass/40">
            <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">{item.kind}</p>
            <h3 className="mt-3 font-display text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
            <p className="mt-5 text-xs text-white/45">{item.period}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
