import { Code2, Layers, LineChart, Wrench } from "lucide-react";
import { skills, coreStack } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Code2, LineChart, Layers, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="03 — Skills"
          title="Building with toolkit using a"
          accent="fullstack-approach."
          description="Highlighted skills are the ones I use every day in production and other technologies I have worked with in recent or past projects."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={group.group}
                delay={i * 0.06}
                className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-foreground/15 md:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-lime/10 text-lime">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="font-semibold tracking-tight">{group.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const core = coreStack.includes(item);
                    return (
                      <li
                        key={item}
                        className={cn(
                          "rounded-lg border px-2.5 py-1 text-sm transition-colors",
                          core
                            ? "border-lime/40 bg-lime/10 text-foreground"
                            : "border-border bg-background/40 text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
