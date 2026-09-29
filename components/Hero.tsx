export default function Hero() {
  return (
    <section id="top" className="px-pad pb-16 pt-12">
      <div className="relative aspect-[100/44] w-full [container-type:inline-size]">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible [&_*]:[stroke-width:1.2px] [&_*]:[vector-effect:non-scaling-stroke]"
          viewBox="0 0 100 44"
          fill="none"
          stroke="#111"
          aria-hidden="true"
        >
          {/* toggle */}
          <rect x="55" y="0.8" width="23" height="6.4" rx="3.2" />
          <circle cx="58.2" cy="4" r="2.4" />
          <path
            d="M78 4H92Q96 4 96 8V12Q96 16 92 16H87"
            strokeDasharray="4 4"
          />
          <path d="M89 15L87 16L89 17" />

          {/* knob icon */}
          <circle cx="8" cy="16" r="6" />
          <circle cx="8" cy="16" r="0.5" />
          <rect x="14" y="15" width="6" height="2" rx="1" />
          <path d="M8 22V29Q8 33 12 33H22" strokeDasharray="4 4" />
          <path d="M20.5 32L22.5 33L20.5 34" />

          {/* overlapping circles */}
          <circle cx="30" cy="33" r="6.2" />
          <circle cx="36.5" cy="33" r="6.2" />
          <path d="M30 29.5V36.5M26.5 33H33.5" />
        </svg>

        <h1 className="animate-rise-in absolute left-[14cqw] top-[4cqw] -translate-y-1/2 whitespace-nowrap text-[6.8cqw] font-extrabold uppercase leading-none tracking-[-0.02em]">
          Adeogun
        </h1>
        <span className="animate-rise-in absolute left-[22cqw] top-[16cqw] -translate-y-1/2 whitespace-nowrap text-[6.8cqw] font-extrabold uppercase leading-none tracking-[-0.02em] [animation-delay:120ms]">
          Ayanfeoluwa
        </span>
        <span className="animate-rise-in absolute left-[45cqw] top-[33cqw] -translate-y-1/2 whitespace-nowrap text-[7.6cqw] font-extrabold italic leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.3px_#111] [animation-delay:240ms]">
          Developer
        </span>
        <span className="animate-float absolute right-[2cqw] top-[26cqw] -translate-y-1/2 -rotate-[4deg] whitespace-nowrap text-[3cqw] font-extrabold italic leading-none text-transparent [-webkit-text-stroke:1px_#111]">
          fullstack
        </span>
      </div>
    </section>
  );
}