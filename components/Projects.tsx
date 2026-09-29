"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import ArrowCircle from "./ArrowCircle";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const deckRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stageStyle, setStageStyle] = useState<CSSProperties>({
    position: "absolute",
    inset: 0,
  });

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const deck = deckRef.current;
        const stage = stageRef.current;
        if (!deck || !stage) return;

        const deckRect = deck.getBoundingClientRect();
        const deckTop = deckRect.top + window.scrollY;
        const scrollableDistance = deck.offsetHeight - stage.offsetHeight;
        const deckScroll = window.scrollY - deckTop;
        const progress = deckScroll / scrollableDistance;
        const clampedProgress = Math.min(1, Math.max(0, progress));

        if (deckScroll <= 0 || deckScroll >= scrollableDistance) {
          setStageStyle({
            position: "absolute",
            top: deckScroll >= scrollableDistance ? scrollableDistance : 0,
            left: 0,
            width: "100%",
          });
        } else {
          setStageStyle({
            position: "fixed",
            top: 0,
            left: deckRect.left,
            width: deckRect.width,
            zIndex: 10,
          });
        }

        setScrollProgress(clampedProgress);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const lastCard = projects.length - 1;
  const cardPosition = scrollProgress * lastCard;
  const activeCard = Math.floor(cardPosition);
  const cardProgress = cardPosition - activeCard;

  return (
    <section id="work" className="border-t border-ink px-pad pt-[4.5rem]">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-none tracking-[-0.03em]">
          Selected work
        </h2>
        <span className="text-[0.65rem] uppercase tracking-[0.12em]">Scroll to explore</span>
      </div>

      <div
        ref={deckRef}
        className="relative"
        style={{
          height: `calc(${(projects.length - 1) * 100}svh + max(520px, min(78svh, 700px)))`,
        }}
      >
        <div
          ref={stageRef}
          className="absolute h-[max(520px,min(78svh,700px))]"
          style={stageStyle}
        >
          {projects.map((project, index) => {
            const layer = (index - activeCard + projects.length) % projects.length;
            const isActive = index === activeCard;
            const depth = Math.min(layer, 3);
            const transform = isActive
              ? `translateY(${-cardProgress * 115}%) rotate(${-cardProgress * 4}deg)`
              : `translateY(${depth * 0.55}rem) scale(${1 - depth * 0.018})`;

            return (
              <article
                key={project.title}
                aria-hidden={!isActive}
                className="absolute inset-0 overflow-hidden rounded-[6px] border border-ink bg-cream p-6 shadow-[0_18px_45px_rgba(17,17,17,0.16)] transition-[transform,opacity] duration-100 ease-out md:p-10"
                style={{
                  zIndex: projects.length - layer,
                  opacity: layer > 3 ? 0 : 1,
                  pointerEvents: isActive ? "auto" : "none",
                  transform,
                }}
              >
                <div className="flex h-full flex-col justify-between gap-12">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-[0.65rem] uppercase tracking-[0.12em]">
                      0{index + 1}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title}`}
                      className="transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                    >
                      <ArrowCircle direction="diag" size={64} />
                    </a>
                  </div>

                  <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                    <div>
                      <h3 className="text-[clamp(2rem,6vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                        {project.title}
                      </h3>
                      <p className="mt-8 max-w-[440px] text-[0.72rem] leading-[1.8]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-ink px-3 py-[0.35rem] text-[0.65rem]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}