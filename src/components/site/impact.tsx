"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { metrics, type Metric } from "@/data/resume";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function CountUp({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, metric.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, metric.value]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={`${metric.prefix ?? ""}${metric.value.toLocaleString()}${metric.suffix}`}>
      <span aria-hidden="true">
        {metric.prefix}
        {(reduce ? metric.value : value).toLocaleString()}
        {metric.suffix}
      </span>
    </span>
  );
}

export function Impact() {
  return (
    <section id="impact" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="01 — Measurable impact"
          title="Numbers that"
          accent="moved the business."
          description="Every figure below comes from production systems used by real customers — stability, speed, and cost wins across web and mobile."
        />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={(i % 4) * 0.06}
              className="group relative bg-background p-5 transition-colors hover:bg-card md:p-7"
            >
              <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                <span className="text-gradient">
                  <CountUp metric={metric} />
                </span>
              </div>
              <p className="mt-3 text-sm font-medium md:text-base">{metric.label}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{metric.context}</p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-lime to-cyan transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
