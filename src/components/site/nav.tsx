"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/resume";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-lime font-mono text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-6">
            AA
          </span>
          <span className="font-semibold tracking-tight">
            {profile.name.replace(/Aman$/, "")}
            <span className="text-lime">Aman</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 rounded-full border border-border bg-card/50 p-1 shadow-[inset_0_1px_0_oklch(1_0_0/5%)] md:flex">
          {links.map((link, i) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full border border-lime/35 bg-lime/12 shadow-[0_0_18px_-6px_var(--primary)]"
                  />
                ) : null}
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm transition-colors lg:px-3.5",
                    isActive ? "text-foreground" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "hidden font-mono text-[10px] transition-colors lg:inline",
                      isActive ? "text-lime" : "text-muted-foreground/60 group-hover:text-lime",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeHref}
            download
            className={cn(buttonVariants({ size: "lg" }), "hidden h-9 px-4 font-semibold sm:inline-flex")}
          >
            <Download data-icon="inline-start" />
            Resume
          </a>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "md:hidden")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border px-5 pt-2 pb-5 md:hidden">
          <ul className="flex flex-col">
            {links.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "group flex items-center gap-3 border-b border-border/60 py-3 text-base transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className={cn("font-mono text-xs", isActive ? "text-lime" : "text-muted-foreground/60")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                    <ArrowUpRight
                      className={cn(
                        "ml-auto size-4 transition-all",
                        isActive
                          ? "text-lime"
                          : "opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={profile.resumeHref}
            download
            className={cn(buttonVariants({ size: "lg" }), "mt-4 h-11 w-full font-semibold")}
          >
            <Download data-icon="inline-start" />
            Download resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
