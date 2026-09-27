import { profile, languages } from "../content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building useful technology, carefully.">
      <div className="grid items-start gap-10 lg:grid-cols-[220px_1fr]">
        <img
          src={profile.portrait}
          alt={profile.name}
          width={640}
          height={800}
          className="aspect-[4/5] w-full max-w-[220px] rounded-3xl border border-line object-cover object-[center_12%]"
        />
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/90">{profile.about}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Software and web development",
              "Artificial Intelligence",
              "Problem-solving",
              "Continuous learning",
              "Technology innovation",
              "Solutions for real problems in Africa",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
          <dl className="mt-8 flex flex-wrap gap-6">
            {languages.map((language) => (
              <div key={language.name}>
                <dt className="text-sm text-muted">{language.name}</dt>
                <dd className="font-display text-2xl text-ink">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
