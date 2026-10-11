import { Building2, Check, User } from "lucide-react";
import { projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const accents: Record<Project["accent"], { text: string; glow: string; ring: string; badge: string }> = {
  lime: {
    text: "text-lime",
    glow: "bg-lime/20",
    ring: "group-hover:border-lime/40",
    badge: "border-lime/30 bg-lime/10 text-lime",
  },
  cyan: {
    text: "text-cyan",
    glow: "bg-cyan/20",
    ring: "group-hover:border-cyan/40",
    badge: "border-cyan/30 bg-cyan/10 text-cyan",
  },
  violet: {
    text: "text-violet",
    glow: "bg-violet/25",
    ring: "group-hover:border-violet/40",
    badge: "border-violet/30 bg-violet/10 text-violet",
  },
  amber: {
    text: "text-amber",
    glow: "bg-amber/20",
    ring: "group-hover:border-amber/40",
    badge: "border-amber/30 bg-amber/10 text-amber",
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-violet/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="04 — Side projects"
          title="Converting ideas into scalable applications by"
          accent="learning new technologies or delivering for clients."
          description="Independent products spanning over domains like fitness, personal finance, and fintech — designed, built, and shipped collaboratively with clients or independently as fun side projects."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const a = accents[project.accent];
            return (
              <Reveal key={project.name} delay={(i % 2) * 0.08} className="group h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 group-hover:-translate-y-1 md:p-7",
                    a.ring,
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -top-20 -right-20 size-56 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90",
                      a.glow,
                    )}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className={cn("font-mono text-xs tracking-wide uppercase", a.text)}>{project.tagline}</p>
                      <h3 className="mt-1.5 text-2xl font-semibold tracking-tight">{project.name}</h3>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {project.period}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[11px]",
                          a.badge,
                        )}
                      >
                        {project.badge.kind === "client" ? (
                          <Building2 className="size-3" aria-hidden="true" />
                        ) : (
                          <User className="size-3" aria-hidden="true" />
                        )}
                        {project.badge.label}
                      </span>
                    </div>
                  </div>

                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {project.description}
                  </p>

                  <ul className="relative mt-5 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm">
                        <Check className={cn("mt-0.5 size-4 shrink-0", a.text)} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto flex flex-wrap gap-1.5 pt-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-muted/70 px-2 py-0.5 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
