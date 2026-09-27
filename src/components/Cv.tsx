import { achievements, languages, profile, projects, references, skillGroups, socialLinks, timeline } from "../content";

export function Cv() {
  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#1a1814]">
      <div className="mx-auto max-w-3xl px-6 py-10 print:py-0">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <a href="#home" className="text-sm underline">
            Back to portfolio
          </a>
          <button type="button" className="rounded-full bg-[#1a1814] px-4 py-2 text-sm text-white" onClick={() => window.print()}>
            Save as PDF
          </button>
        </div>
        <header>
          <h1 className="font-display text-4xl">{profile.name}</h1>
          <p className="mt-2">{profile.title}</p>
          <p className="mt-2 text-sm">
            {profile.location} · <a href={profile.phoneHref}>{profile.phone}</a> ·{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="mt-2 text-sm">
            {socialLinks()
              .filter((link) => link.href.startsWith("http"))
              .map((link) => (
                <a key={link.label} href={link.href} className="mr-3 underline">
                  {link.label}
                </a>
              ))}
          </p>
        </header>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Profile</h2>
          <p className="mt-2 leading-relaxed">{profile.about}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Education and experience</h2>
          <ul className="mt-3 space-y-4">
            {timeline.map((item) => (
              <li key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">
                  {item.place} · {item.period}
                </p>
                <p className="text-sm">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Projects</h2>
          <ul className="mt-3 space-y-3">
            {projects.map((project) => (
              <li key={project.name}>
                <p className="font-semibold">{project.name}</p>
                <p className="text-sm">{project.summary}</p>
                <p className="text-sm">{project.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Skills</h2>
          {skillGroups.map((group) => (
            <p key={group.title} className="mt-2 text-sm">
              <span className="font-semibold">{group.title}: </span>
              {group.items.join(", ")}
            </p>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Activities</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {achievements.map((item) => (
              <li key={item.title}>
                {item.kind}: {item.title} — {item.detail}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">Languages</h2>
          <p className="mt-2 text-sm">{languages.map((item) => `${item.name} (${item.level})`).join(" · ")}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.16em] uppercase">References</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {references.map((person) => (
              <li key={person.name}>
                {person.name}, {person.role}, {person.phone}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
