type Props = {
  text: string;
  variant?: "light" | "dark";
  dot?: boolean;
};

export default function Marquee({ text, variant = "light", dot = false }: Props) {
  const items = Array.from({ length: 6 });
  const dark = variant === "dark";

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-y py-4 ${
        dark ? "mx-pad border-white/35 text-white" : "border-ink"
      }`}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((g) => (
          <div className="flex shrink-0" key={g}>
            {items.map((_, i) => (
              <span
                key={i}
                className={`inline-flex items-center whitespace-nowrap ${
                  dark
                    ? "gap-12 pr-12 text-[clamp(1.4rem,2.8vw,2.2rem)] font-semibold"
                    : "pr-12 text-[clamp(1.25rem,2.6vw,2.1rem)] font-normal"
                }`}
              >
                {text}
                {dot && (
                  <span className="size-[0.7rem] shrink-0 rounded-full bg-white" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}