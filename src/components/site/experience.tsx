"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experience, type Role } from "@/data/resume";
import { cn } from "@/lib/utils";
import { RichText } from "./rich-text";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function RoleCard({ role, index }: { role: Role; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `role-more-${index}`;

  return (
    <Reveal className="relative grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
      <div className="md:pt-6 md:text-right">
        <p className={cn("font-mono text-sm", role.current ? "text-lime" : "text-muted-foreground")}>{role.period}</p>
        <p className="mt-1 hidden items-center justify-end gap-1 text-xs text-muted-foreground md:flex">
          <MapPin className="size-3" />
          {role.location}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={cn(
          "absolute top-7 left-[214px] hidden size-3 rounded-full border-2 border-background md:block",
          role.current ? "bg-lime shadow-[0_0_0_4px_oklch(0.9_0.19_125/20%)]" : "bg-muted-foreground/50",
        )}
      />

      <article
        className={cn(
          "rounded-2xl border bg-card/60 p-5 transition-colors md:p-7",
          role.current ? "border-lime/30" : "border-border hover:border-foreground/15",
        )}
      >
        <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">{role.title}</h3>
            <p className="text-sm text-muted-foreground">
              {role.company}
              <span className="md:hidden"> · {role.location}</span>
            </p>
          </div>
          {role.current ? (
            <span className="rounded-full bg-lime/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-lime uppercase">
              Current
            </span>
          ) : null}
        </header>

        <ul className="mt-5 space-y-3">
          {role.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {expanded && role.more ? (
            <motion.ul
              id={panelId}
              key="more"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 overflow-hidden"
            >
              {role.more.map((item, i) => (
                <li
                  key={item}
                  className={cn("flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]", i === 0 && "pt-3")}
                >
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>

        <footer className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {role.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          {role.more ? (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setExpanded((e) => !e)}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-lime hover:bg-lime/10"
            >
              {expanded ? "Show less" : `+${role.more.length} more wins`}
              <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
            </button>
          ) : null}
        </footer>
      </article>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="02 — Experience"
          title="7+ years of"
          accent="leading, delivering and shipping."
          description="From being an individual contributor to tech lead at ParallelDots, with a co-op at Rogers in between. Top accomplishments are mentioned up front; please expand any role out of the following list to know more about my contributions."
        />

        <div className="relative space-y-8 md:space-y-10">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[220px] hidden w-px bg-gradient-to-b from-lime/60 via-border to-transparent md:block"
          />
          {experience.map((role, i) => (
            <RoleCard key={`${role.company}-${role.title}`} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
