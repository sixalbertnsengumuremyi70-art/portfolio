import { certificates } from "../content";
import { Section } from "./Section";

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Documents I can show"
      lede="Open a certificate to see the original file."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((item) => (
          <article key={item.file} className="overflow-hidden rounded-3xl border border-line bg-card">
            <a href={item.file} target="_blank" rel="noreferrer">
              <img
                src={item.image}
                alt={`${item.title} certificate`}
                className="h-56 w-full bg-white object-contain object-top"
              />
            </a>
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">{item.date}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              <a
                href={item.file}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm text-brass hover:text-brass-2"
              >
                View certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
