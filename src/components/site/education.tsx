import { GraduationCap, Trophy } from "lucide-react";
import { education, highlights } from "@/data/resume";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="05 — Education & achievements"
          title="Learning that"
          accent="keeps compounding."
          description="Recent formal training in AI, machine learning and formal education in software engineering and electronics — plus recognition earned during my time at ParallelDots and practical experience in the field."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.06} className="group h-full">
              <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan/40 md:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-cyan/20 opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10">
                    <GraduationCap className="size-5 text-cyan" />
                  </span>
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-right font-mono text-[11px] text-cyan">
                    {item.badge}
                  </span>
                </div>
                <p className="relative mt-5 font-mono text-xs tracking-wide text-cyan uppercase">{item.date}</p>
                <h3 className="relative mt-1.5 text-lg font-semibold tracking-tight">{item.credential}</h3>
                <p className="relative mt-1.5 text-sm text-muted-foreground">{item.school}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.12} className="group h-full">
            <article className="relative h-full overflow-hidden rounded-2xl border border-lime/30 bg-lime/[0.06] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-lime/50 md:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-lime/20 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative grid size-10 place-items-center rounded-xl border border-lime/30 bg-lime/10">
                <Trophy className="size-5 text-lime" />
              </span>
              <p className="relative mt-5 font-mono text-xs tracking-wide text-lime uppercase">Recognition</p>
              <ul className="relative mt-1.5 space-y-1.5">
                {highlights.map((h) => (
                  <li key={h} className="text-lg font-semibold tracking-tight">
                    {h}
                  </li>
                ))}
              </ul>
              <p className="relative mt-1.5 text-sm text-muted-foreground">With the ParallelDots team</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
