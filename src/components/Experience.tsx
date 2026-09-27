import { timeline } from "../content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Study and practice">
      <ol className="relative space-y-0 border-l border-line">
        {timeline.map((item) => (
          <li key={item.title} className="relative pb-10 pl-8">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-brass" />
            <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">{item.period}</p>
            <h3 className="mt-2 text-xl text-ink">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.place}</p>
            <p className="mt-3 max-w-2xl text-muted">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
