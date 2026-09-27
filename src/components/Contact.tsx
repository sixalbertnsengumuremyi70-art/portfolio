import { useState, type FormEvent } from "react";
import { profile, socialLinks } from "../content";
import { Section } from "./Section";
import { SocialIcon } from "./Icons";

export function Contact() {
  const [sent, setSent] = useState(false);
  const links = socialLinks();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Meaningful">
      <p className="max-w-2xl text-lg text-muted">
        I&apos;m always interested in learning, collaborating, and building technology solutions that solve
        real-world problems.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="social-link"
            {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <SocialIcon label={link.label} />
            {link.label === "Email" ? profile.email : link.label}
          </a>
        ))}
        <a href={profile.phoneHref} className="social-link">
          {profile.phone}
        </a>
      </div>
      <form onSubmit={onSubmit} className="mt-10 grid max-w-2xl gap-4">
        <label className="grid gap-2 text-sm text-muted">
          Name
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Email
          <input name="email" type="email" required autoComplete="email" className="field" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Subject
          <input name="subject" required className="field" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Message
          <textarea name="message" required rows={5} className="field resize-y" />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="btn-primary">
            Send Message
          </button>
          {sent ? (
            <p className="text-sm text-muted" role="status">
              Your email app should open with this message ready to send.
            </p>
          ) : null}
        </div>
      </form>
    </Section>
  );
}
