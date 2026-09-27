import { useState } from "react";
import { skillGroups } from "../content";
import { Section } from "./Section";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      lede="Grouped so the picture stays clear. Choose a category."
    >
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-2" role="tablist" aria-label="Skill categories">
          {skillGroups.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                active === index
                  ? "border-brass/50 bg-card text-ink"
                  : "border-line bg-transparent text-muted hover:border-white/20 hover:text-ink"
              }`}
              onClick={() => setActive(index)}
            >
              <span className="block text-sm tracking-[0.14em] text-brass uppercase">0{index + 1}</span>
              <span className="mt-1 block text-lg">{item.title}</span>
            </button>
          ))}
        </div>
        {group ? (
          <div role="tabpanel" className="rounded-3xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-display text-3xl text-ink">{group.title}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
