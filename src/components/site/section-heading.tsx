import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        {title} <span className="font-serif font-normal italic text-gradient">{accent}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground text-pretty md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
