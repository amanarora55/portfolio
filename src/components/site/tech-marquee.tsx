import type { ComponentType, SVGProps } from "react";
import { Cable, Cloud, ScanEye, Sparkles } from "lucide-react";
import {
  siD3,
  siGooglecloud,
  siKonva,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siReduxsaga,
  siTypescript,
  siVuedotjs,
  siOpenaigym,
  type SimpleIcon,
} from "simple-icons";

type Item = { name: string; color: string } & (
  | { brand: SimpleIcon }
  | { Icon: ComponentType<SVGProps<SVGSVGElement>> }
);

const brand = (name: string, icon: SimpleIcon, color = `#${icon.hex}`): Item => ({ name, brand: icon, color });

const items: Item[] = [
  brand("React", siReact),
  brand("React Native", siReact),
  brand("TypeScript", siTypescript),
  brand("Next.js", siNextdotjs, "var(--foreground)"),
  brand("Vue.js", siVuedotjs),
  brand("Redux Saga", siReduxsaga, "#B9A8E8"),
  brand("Python", siPython, "#5A9FD4"),
  brand("Node.js", siNodedotjs),
  brand("NestJS", siNestjs),
  brand("D3.js", siD3),
  brand("React Konva", siKonva),
  { name: "WebSockets", Icon: Cable, color: "var(--cyan)" },
  { name: "AWS", Icon: Cloud, color: "#FF9900" },
  brand("GCP", siGooglecloud),
  brand("OpenAI", siOpenaigym),
  { name: "Computer Vision", Icon: ScanEye, color: "var(--violet)" },
];

function Logo({ item }: { item: Item }) {
  if ("brand" in item) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0" style={{ fill: item.color }}>
        <path d={item.brand.path} />
      </svg>
    );
  }
  const { Icon } = item;
  return <Icon aria-hidden="true" className="size-5 shrink-0" style={{ color: item.color }} />;
}

export function TechMarquee() {
  return (
    <section aria-labelledby="tech-marquee-title" className="relative border-y border-border bg-card/30 py-6">
      <div className="mx-auto mb-5 flex max-w-6xl items-center gap-4 px-5 md:px-8">
        <h2
          id="tech-marquee-title"
          className="font-mono text-xs leading-relaxed tracking-[0.2em] text-muted-foreground uppercase md:shrink-0"
        >
          <span className="text-lime">Tech stack</span> · tools I ship production work with
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block" />
      </div>

      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-3 pr-3 hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-border bg-background/60 py-2 pr-4 pl-3 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:border-lime/40 hover:text-foreground"
            >
              <Logo item={item} />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
