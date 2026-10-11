"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Download, Mail, MapPin, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { coreStack, glance, highlights, profile } from "@/data/resume";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./icons";
import { CopyEmail } from "./copy-email";

const ease = [0.22, 1, 0.36, 1] as const;

const typewriterWords = ["build", "deliver", "create", "collaborate", "innovate", "code", "vibe code"] as const;

function Typewriter({ words }: { words: readonly string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const current = words[wordIndex];
    const isComplete = text === current;
    const isEmpty = text.length === 0;
    const delay = deleting ? (isEmpty ? 280 : 38) : isComplete ? 1200 : 74;

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (isComplete) {
          setDeleting(true);
          return;
        }
        setText(current.slice(0, text.length + 1));
        return;
      }

      if (isEmpty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText(text.slice(0, -1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, reduced, text, wordIndex, words]);

  const shown = reduced ? words[0] : text;

  return (
    <span className="inline-flex h-[1.05em] items-baseline whitespace-nowrap align-baseline" aria-hidden="true">
      <span className="inline-block w-0 overflow-hidden font-serif font-normal italic leading-none" aria-hidden="true">
        l
      </span>
      <span className="whitespace-pre font-serif font-normal italic leading-none text-gradient">{shown}</span>
      <span className="ml-0.5 inline-block h-[0.72em] w-0.5 shrink-0 self-center bg-lime animate-caret" />
    </span>
  );
}

function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.35]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        style={{ y, opacity: fade }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/hero-desk.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[center_28%] opacity-75 saturate-[0.9]"
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      <div className="absolute inset-0 animate-scan bg-[linear-gradient(to_bottom,transparent,oklch(0.82_0.13_210/6%),transparent)] bg-[length:100%_40%] bg-no-repeat" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <HeroBackdrop />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-lime/30 bg-lime/10 py-1.5 pr-4 pl-3 text-xs text-lime md:text-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-lime animate-pulse-ring" />
              <span className="relative inline-flex size-2 rounded-full bg-lime" />
            </span>
            Open to Software Developer Roles in web/mobile
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="mb-3 font-mono text-sm text-muted-foreground"
          >
            {profile.name} — {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            I <span className="sr-only">build</span>
            <Typewriter words={typewriterWords} /> web &amp; mobile apps that users and companies rely&nbsp;on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg"
          >
            7+ years shipping production ready applications using <strong className="font-medium text-foreground">React, React Native, Next.js, and more</strong>{" "}
            for 17+ global clients — with measurable wins like{" "}
            <strong className="font-medium text-foreground">80%+ fewer crashes</strong> and{" "}
            <strong className="font-medium text-foreground">~97% faster workflows</strong> through AI &amp; computer-vision
            integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Aman Arora")}`}
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base font-semibold shadow-[0_0_40px_-8px_var(--primary)]")}
            >
              <Mail data-icon="inline-start" />
              Get in touch
            </a>
            <a
              href={profile.resumeHref}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 bg-transparent px-6 text-base")}
            >
              <Download data-icon="inline-start" />
              Download resume
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-1.5 px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              See the work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {[
              { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon, color: "#4A9FF5" },
              { href: profile.links.github, label: "GitHub", Icon: GithubIcon, color: "#F0F6FC" },
              { href: profile.links.leetcode, label: "LeetCode", Icon: LeetcodeIcon, color: "#FFA116" },
            ].map(({ href, label, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{ "--brand": color } as CSSProperties}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-[color-mix(in_oklch,var(--brand)_45%,transparent)] hover:bg-[color-mix(in_oklch,var(--brand)_8%,transparent)] hover:text-foreground"
              >
                <Icon className="size-3.5 text-(--brand)" />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          aria-label="At a glance"
          className="relative"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-lime/50 via-cyan/20 to-violet/40 opacity-70" />
          <div className="relative rounded-3xl bg-card/95 p-6 backdrop-blur md:p-7">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">At a glance</p>
              <span className="rounded-full bg-lime/10 px-2.5 py-0.5 font-mono text-[11px] text-lime">10-sec read</span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3">
              {glance.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/40 p-4">
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-muted-foreground">{item.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-center gap-3">
                <Briefcase className="size-4 shrink-0 text-lime" />
                <span>{profile.currentRole}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-lime" />
                <span>{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="size-4 shrink-0 text-lime" />
                <span>
                  {profile.workStatus} <span className="text-muted-foreground">· authorized to work in Canada</span>
                </span>
              </li>
            </ul>

            <div className="mt-5 border-t border-border pt-5">
              <p className="mb-2.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">Core stack</p>
              <div className="flex flex-wrap gap-1.5">
                {coreStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-border bg-muted/60 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-background/50 px-3 py-2">
              <a href={`mailto:${profile.email}`} className="truncate text-sm hover:text-lime">
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {highlights.join(" · ")}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
