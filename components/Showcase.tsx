export default function Showcase() {
  const title = "Make APIs, apps & backends";
  const titleClass =
    "max-w-full whitespace-normal text-4xl font-extrabold leading-[0.94] tracking-[-0.03em] sm:text-5xl lg:text-6xl";

  return (
    <section
      id="showcase"
      className="relative h-[clamp(440px,50vw,660px)] overflow-hidden pl-pad pt-12"
    >
      <h2 className={`animate-rise-in relative z-[2] ${titleClass}`}>{title}</h2>
      <div
        aria-hidden="true"
        className={`animate-pulse-soft mt-[0.9em] hidden select-none opacity-30 blur-[14px] lg:block ${titleClass}`}
      >
        {title}
      </div>

      <p className="absolute bottom-14 left-pad z-[2] w-[min(260px,42%)] text-[0.7rem] leading-[1.8]">
        I help visualize the craziest ideas, converting them into elegant
        systems with great architecture and rock-solid APIs.
      </p>

      <div className="absolute bottom-0 right-0 h-[30%] w-[55%] bg-[#050505]" />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[3%] z-[3] w-[52%] md:right-[6%] md:w-[clamp(240px,42%,560px)]"
      >
        <div className="animate-float aspect-[16/10] rounded-t-xl border-[6px] border-b-8 border-[#0a0a0a] bg-[#f7f7f4] px-[9%] py-[8%] shadow-[0_30px_60px_rgba(0,0,0,0.35)] [animation-delay:400ms]">
          <div className="flex h-full flex-col gap-[8%]">
            <i className="block h-[5%] min-h-[3px] w-[46%] rounded-[3px] bg-[#7c3aed]" />
            <i className="block h-[5%] min-h-[3px] w-[62%] rounded-[3px] bg-[#111]" />
            <i className="ml-[8%] block h-[5%] min-h-[3px] w-[38%] rounded-[3px] bg-[#e11d48]" />
            <i className="ml-[8%] block h-[5%] min-h-[3px] w-[54%] rounded-[3px] bg-[#111]" />
            <i className="ml-[8%] block h-[5%] min-h-[3px] w-[30%] rounded-[3px] bg-[#0d9488]" />
            <i className="block h-[5%] min-h-[3px] w-[58%] rounded-[3px] bg-[#111]" />
            <i className="block h-[5%] min-h-[3px] w-[26%] rounded-[3px] bg-[#7c3aed]" />
            <i className="ml-[8%] block h-[5%] min-h-[3px] w-[44%] rounded-[3px] bg-[#111]" />
          </div>
        </div>
        <div className="-ml-[4%] h-[10px] w-[108%] rounded-b-[14px] bg-[#141414]" />
      </div>
    </section>
  );
}