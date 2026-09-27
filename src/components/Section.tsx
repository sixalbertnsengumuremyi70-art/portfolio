import type { ReactNode } from "react";
import { useInView } from "../lib/useInView";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, lede, children }: SectionProps) {
  const { ref, shown } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-16 ${shown ? "reveal-in" : "reveal"}`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-brass uppercase">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">{title}</h2>
        {lede ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
