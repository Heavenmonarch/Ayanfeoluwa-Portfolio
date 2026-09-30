import { frontendStack, backendStack } from "@/data/portfolio";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiFastapi,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSass,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

const stackDetails: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#1572b6" },
  SCSS: { icon: SiSass, color: "#cf649a" },
  JavaScript: { icon: SiJavascript, color: "#b29d00" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  "React.js": { icon: SiReact, color: "#0891b2" },
  "Next.js": { icon: SiNextdotjs, color: "#111111" },
  PHP: { icon: SiPhp, color: "#777bb4" },
  Python: { icon: SiPython, color: "#3776ab" },
  Laravel: { icon: SiLaravel, color: "#e11d48" },
  FastAPI: { icon: SiFastapi, color: "#00897b" },
  Flask: { icon: SiFlask, color: "#111111" },
  "Spring Boot": { icon: SiSpringboot, color: "#4d8f2b" },
};

function StackGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="border-t border-ink/30 pt-4">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h3 className="text-xs uppercase tracking-[0.12em]">{label}</h3>
        <span className="text-xs text-ink/50">{String(items.length).padStart(2, "0")} tools</span>
      </div>
      <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {items.map((item) => {
          const inProgress = item === "Spring Boot";
          const detail = stackDetails[item];
          const Icon = detail.icon;

          return (
            <li
              key={item}
              className="group relative flex min-h-32 items-end justify-between overflow-hidden border border-ink/20 bg-transparent p-5 transition-colors duration-300 hover:bg-ink hover:text-cream"
            >
              <Icon
                aria-hidden="true"
                className="absolute right-4 top-4 size-10 opacity-90 transition-transform duration-300 group-hover:scale-110"
                style={{ color: detail.color }}
              />
              <div>
                <span className="block text-[clamp(1.1rem,2.5vw,1.8rem)] font-extrabold leading-none tracking-[-0.03em] text-ink transition-colors group-hover:text-cream">
                  {item}
                </span>
                <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.1em] text-ink/45 transition-colors group-hover:text-cream/60">
                  {label} layer
                </span>
              </div>
              {inProgress && (
                <span className="absolute bottom-4 right-4 text-[0.6rem] uppercase tracking-[0.08em] text-ink/50 transition-colors group-hover:text-cream/70">
                  In progress
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-ink bg-cream px-pad pb-28 pt-[5.5rem] text-ink">
      <div className="mb-20 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-ink/55">02 / The stack</p>
        <h2 className="max-w-[820px] text-[clamp(2.4rem,6.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
          Frontend to backend, built to connect.
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-2 md:gap-10">
        <StackGroup label="Frontend" items={frontendStack} />
        <StackGroup label="Backend" items={backendStack} />
      </div>
    </section>
  );
}