import ArrowCircle from "./ArrowCircle";
import { profile } from "@/data/portfolio";

export default function Intro() {
  return (
    <section className="px-pad pb-[5.5rem] pt-20">
      <h2 className="text-[clamp(2rem,5.2vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
        Where should I ship my next API
      </h2>
      <p className="mt-[0.4rem] text-right text-[clamp(1.2rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em]">
        {profile.stack.join(" ").toLowerCase()}
      </p>

      <div className="mt-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <p className="max-w-[420px] text-[0.72rem] leading-[1.8]">
          I am a fullstack developer that builds reliable, scalable backends and
          creates clean, well-documented APIs with thought-out architecture. By
          using layered design and solid engineering, my products keep working
          for people all around the world.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-transform duration-300 hover:translate-x-1.5 md:mr-[clamp(0rem,8vw,7rem)]"
        >
          <ArrowCircle direction="right" size={76} />
        </a>
      </div>
    </section>
  );
}