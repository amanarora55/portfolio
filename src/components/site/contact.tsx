import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Download, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./icons";
import { CopyEmail } from "./copy-email";
import { Reveal } from "./reveal";

export function Contact() {
  const socials = [
    { href: profile.links.linkedin, label: "LinkedIn", handle: "in/amanarora55", Icon: LinkedinIcon, color: "#4A9FF5" },
    { href: profile.links.github, label: "GitHub", handle: "@amanarora55", Icon: GithubIcon, color: "#F0F6FC" },
    { href: profile.links.leetcode, label: "LeetCode", handle: "u/ARORAJI", Icon: LeetcodeIcon, color: "#FFA116" },
  ];

  return (
    <section id="contact" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-lime/25 bg-card p-7 md:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_70%)]" />
          <div className="pointer-events-none absolute -right-24 -bottom-32 -z-10 size-[420px] rounded-full bg-lime/20 blur-[110px]" />

          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime uppercase">06 — Let&apos;s talk</p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Hiring for development roles or looking to build something with me ?{" "}
                <span className="font-serif font-normal italic text-gradient">Let&apos;s chat.</span>
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
                7+ years of offline-first mobile, AI-integrated web apps, and team leadership — based in Toronto as a
                Canadian Permanent Resident.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Aman Arora")}`}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-primary p-4 pr-5 text-primary-foreground shadow-[0_10px_40px_-12px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--primary)] focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
                  />
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/15">
                    <Send className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="block text-base font-semibold">Let&apos;s work together</span>
                    <span className="block text-sm opacity-75">Drop me an email</span>
                  </span>
                  <ArrowRight className="relative size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={profile.resumeHref}
                  download
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4 pr-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.06] focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-lime/30 bg-lime/10 text-lime">
                    <FileText className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold">Grab my resume</span>
                    <span className="block text-sm text-muted-foreground">Download the PDF</span>
                  </span>
                  <Download className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-lime" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:self-stretch">
              <div className="mb-4 flex items-center gap-4 lg:mb-auto lg:pb-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-lime font-mono text-xl font-bold text-primary-foreground shadow-[0_0_32px_-8px_var(--primary)]">
                  AA
                </span>
                <div className="min-w-0">
                  <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {profile.name.replace(/Aman$/, "")}
                    <span className="text-lime">Aman</span>
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {profile.fullName}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-background/50 p-4">
                <a href={`mailto:${profile.email}`} className="flex min-w-0 items-center gap-3 hover:text-lime">
                  <Mail className="size-4 shrink-0 text-lime" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <CopyEmail email={profile.email} />
              </div>
              <a
                href={profile.phoneHref}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 hover:text-lime"
              >
                <Phone className="size-4 text-lime" />
                {profile.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4">
                <MapPin className="size-4 text-lime" />
                {profile.location} · {profile.workStatus}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {socials.map(({ href, label, handle, Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ "--brand": color } as CSSProperties}
                    className="group flex flex-col gap-2 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-[color-mix(in_oklch,var(--brand)_45%,transparent)] hover:bg-[color-mix(in_oklch,var(--brand)_8%,transparent)]"
                  >
                    <span className="flex items-center justify-between">
                      <Icon className="size-4 text-(--brand)" />
                      <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--brand)" />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                    <span className="truncate text-[11px] text-muted-foreground">{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
