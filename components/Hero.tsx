import { ArrowDownToLine } from "lucide-react";
import { profile } from "@/data/portfolio";

const SHIRT = "#46756d";
const SKIN = "#c98265";

/*
 * All keyframes for the scene live here so the component is self-contained
 * (no tailwind.config changes needed). Every class is prefixed `ts-`.
 */
const sceneCss = `
.ts-arm-l,.ts-arm-r{transform-box:view-box}
.ts-arm-l{transform-origin:236px 290px;animation:ts-arm-l .34s ease-in-out infinite}
.ts-arm-r{transform-origin:364px 290px;animation:ts-arm-r .43s ease-in-out infinite .11s}
@keyframes ts-arm-l{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-2.4deg)}}
@keyframes ts-arm-r{0%,100%{transform:rotate(0deg)}50%{transform:rotate(2.4deg)}}

.ts-body{animation:ts-body 1.2s ease-in-out infinite}
@keyframes ts-body{0%,100%{transform:translateY(0)}50%{transform:translateY(.7px)}}
.ts-head{animation:ts-head 3s ease-in-out infinite}
@keyframes ts-head{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}

.ts-keys{animation:ts-keys .45s steps(3) infinite}
@keyframes ts-keys{to{stroke-dashoffset:-9}}

.ts-line{transform-box:fill-box;transform-origin:0 50%;animation:ts-line 7s steps(10) infinite}
@keyframes ts-line{0%,4%{transform:scaleX(0)}22%,86%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
.ts-caret{animation:ts-blink .8s steps(1) infinite}
@keyframes ts-blink{50%{opacity:0}}

.ts-url{transform-box:fill-box;transform-origin:0 50%;animation:ts-url 6s steps(18) infinite}
@keyframes ts-url{0%{transform:scaleX(0)}45%,92%{transform:scaleX(1)}100%{transform:scaleX(0)}}
.ts-res{animation:ts-res 6s ease-out infinite}
@keyframes ts-res{0%,50%{opacity:0}58%,92%{opacity:1}100%{opacity:0}}

.ts-rise{animation:ts-rise 7s ease-out infinite}
@keyframes ts-rise{0%{opacity:0;transform:translateY(6px)}10%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
.ts-float{animation:ts-float 3.2s ease-in-out infinite}
@keyframes ts-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}

@media (prefers-reduced-motion:reduce){
  .ts-arm-l,.ts-arm-r,.ts-body,.ts-head,.ts-keys,.ts-line,.ts-caret,.ts-url,.ts-res,.ts-rise,.ts-float{animation:none!important}
}
`;

function TypingScene() {
  return (
    <div className="absolute bottom-[2cqw] left-0 z-[1] aspect-[600/360] w-[clamp(330px,44cqw,560px)] max-sm:bottom-[8cqw] max-sm:w-[clamp(280px,88cqw,400px)]">
      <style>{sceneCss}</style>

      <svg
        viewBox="0 0 600 360"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="ts-url-clip">
            <rect className="ts-url" x="447" y="50" width="96" height="11" />
          </clipPath>
        </defs>

        {/* floor shadow */}
        <ellipse cx="300" cy="357" rx="110" ry="4" fill="#000" opacity="0.12" />

        {/* ───────── DESK ───────── */}
        <rect x="24" y="230" width="12" height="126" fill="#5a3d31" />
        <rect x="564" y="230" width="12" height="126" fill="#5a3d31" />
        <polygon points="40,128 560,128 600,222 0,222" fill="#b98363" />
        <rect x="0" y="222" width="600" height="10" fill="#9b654c" />

        {/* ───────── MONITOR STANDS ───────── */}
        <rect x="96" y="114" width="12" height="22" fill="#222" />
        <rect x="76" y="134" width="52" height="5" rx="2" fill="#222" />
        <rect x="294" y="114" width="12" height="22" fill="#222" />
        <rect x="272" y="134" width="56" height="5" rx="2" fill="#222" />
        <rect x="491" y="114" width="12" height="22" fill="#222" />
        <rect x="471" y="134" width="52" height="5" rx="2" fill="#222" />

        {/* ───────── LEFT SCREEN — VS CODE ───────── */}
        <rect x="15" y="30" width="175" height="84" rx="3" fill="#222" />
        <rect x="19" y="34" width="167" height="76" fill="#1e1e1e" />
        <rect x="19" y="34" width="167" height="11" fill="#303030" />
        <circle cx="26" cy="39.5" r="2" fill="#ef6a5b" />
        <circle cx="32" cy="39.5" r="2" fill="#e9c46a" />
        <circle cx="38" cy="39.5" r="2" fill="#4caf7d" />
        <text x="46" y="42.5" fill="#dedede" fontFamily="monospace" fontSize="5.5" fontWeight="700">
          VS CODE
        </text>
        <rect x="19" y="45" width="14" height="65" fill="#252526" />
        <rect x="23" y="52" width="6" height="6" fill="none" stroke="#ddd" strokeWidth="0.8" />
        <rect x="23" y="64" width="6" height="6" rx="1" fill="#888" />
        <circle cx="26" cy="79" r="3" fill="none" stroke="#888" strokeWidth="0.8" />

        <rect className="ts-line" x="42" y="52" width="60" height="4" fill="#569cd6" style={{ animationDelay: "0s" }} />
        <rect className="ts-line" x="42" y="61" width="100" height="4" fill="#ce9178" style={{ animationDelay: "0.45s" }} />
        <rect className="ts-line" x="52" y="70" width="70" height="4" fill="#dcdcaa" style={{ animationDelay: "0.9s" }} />
        <rect className="ts-line" x="52" y="79" width="85" height="4" fill="#9cdcfe" style={{ animationDelay: "1.35s" }} />
        <rect className="ts-line" x="52" y="88" width="45" height="4" fill="#ce9178" style={{ animationDelay: "1.8s" }} />
        <rect className="ts-line" x="42" y="97" width="34" height="4" fill="#569cd6" style={{ animationDelay: "2.25s" }} />
        <rect className="ts-caret" x="80" y="95" width="2" height="8" fill="#dcdcaa" />

        {/* ───────── RIGHT SCREEN — POSTMAN ───────── */}
        <rect x="410" y="30" width="175" height="84" rx="3" fill="#222" />
        <rect x="414" y="34" width="167" height="76" fill="#fff" />
        <rect x="414" y="34" width="167" height="11" fill="#f5f2f0" />
        <rect x="419" y="37" width="6" height="6" rx="1.5" fill="#ef6c43" />
        <text x="429" y="42.5" fill="#333" fontFamily="monospace" fontSize="5.5" fontWeight="700">
          POSTMAN
        </text>
        <line x1="414" y1="46" x2="581" y2="46" stroke="#e6e3e0" strokeWidth="0.6" />

        <rect x="419" y="50" width="22" height="11" rx="2" fill="#e9f4ed" />
        <text x="422.5" y="57.8" fill="#25804d" fontFamily="monospace" fontSize="6" fontWeight="700">
          GET
        </text>
        <rect x="445" y="50" width="100" height="11" fill="#fff" stroke="#dedbd8" strokeWidth="0.7" />
        <g clipPath="url(#ts-url-clip)">
          <text x="448" y="57.8" fill="#343434" fontFamily="monospace" fontSize="6" fontWeight="600">
            /api/ayanfe/resume
          </text>
        </g>
        <rect x="549" y="50" width="28" height="11" rx="2" fill="#ef6c43" />
        <text x="553" y="57.8" fill="#fff" fontFamily="monospace" fontSize="5.5" fontWeight="700">
          SEND
        </text>

        <text x="419" y="73" fill="#777" fontFamily="monospace" fontSize="5">
          RESPONSE
        </text>
        <line x1="419" y1="76" x2="577" y2="76" stroke="#ebe8e5" strokeWidth="0.6" />
        <g className="ts-res">
          <text x="577" y="73" textAnchor="end" fill="#25804d" fontFamily="monospace" fontSize="5.5" fontWeight="700">
            200 OK
          </text>
          <rect x="419" y="83" width="90" height="4" fill="#e2e0dd" />
          <rect x="419" y="92" width="125" height="4" fill="#e2e0dd" />
          <rect x="419" y="101" width="65" height="4" fill="#e2e0dd" />
        </g>

        {/* ───────── MIDDLE SCREEN — MOCK OF THE HERO ───────── */}
        <rect x="205" y="14" width="190" height="100" rx="3" fill="#222" />
        <rect x="209" y="18" width="182" height="92" fill="#f6f3ee" />
        <rect x="209" y="18" width="182" height="10" fill="#e9e5df" />
        <circle cx="215" cy="23" r="1.8" fill="#ef6a5b" />
        <circle cx="221" cy="23" r="1.8" fill="#e9c46a" />
        <circle cx="227" cy="23" r="1.8" fill="#4caf7d" />
        <rect x="240" y="20.5" width="110" height="5" rx="2.5" fill="#fff" />

        <text x="372" y="40" fill="#111" fontFamily="monospace" fontSize="7" fontWeight="700">
          &lt;/&gt;
        </text>

        <text
          className="ts-rise"
          x="228"
          y="46"
          fill="#111"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="13"
          fontWeight="800"
          letterSpacing="-0.3"
        >
          ADEOGUN
        </text>
        <text
          className="ts-rise"
          x="244"
          y="62"
          fill="#111"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="13"
          fontWeight="800"
          letterSpacing="-0.3"
          style={{ animationDelay: "0.15s" }}
        >
          AYANFEOLUWA
        </text>
        <text
          className="ts-rise"
          x="290"
          y="90"
          fill="none"
          stroke="#111"
          strokeWidth="0.6"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="15"
          fontWeight="800"
          fontStyle="italic"
          style={{ animationDelay: "0.3s" }}
        >
          Engineer
        </text>
        <g className="ts-float">
          <text
            x="346"
            y="76"
            transform="rotate(-4 346 76)"
            fill="none"
            stroke="#111"
            strokeWidth="0.4"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="7"
            fontWeight="800"
            fontStyle="italic"
          >
            software
          </text>
        </g>

        {/* tiny desk scene inside the mock (hero-ception) */}
        <rect x="214" y="80" width="15" height="10" fill="#222" />
        <rect x="233" y="80" width="15" height="10" fill="#222" />
        <rect x="252" y="80" width="15" height="10" fill="#222" />
        <rect x="212" y="98" width="60" height="2" fill="#9b654c" />
        <circle cx="240" cy="96" r="3" fill="#202020" />
        <rect x="236" y="98" width="8" height="8" rx="2" fill={SHIRT} />

        {/* ───────── KEYBOARD + MUG ───────── */}
        <rect x="255" y="168" width="90" height="14" rx="2" fill="#262626" />
        <line
          className="ts-keys"
          x1="260"
          y1="172.5"
          x2="340"
          y2="172.5"
          stroke="#f5ebc0"
          strokeWidth="3"
          strokeDasharray="6 3"
        />
        <line
          className="ts-keys"
          x1="260"
          y1="178"
          x2="340"
          y2="178"
          stroke="#f5ebc0"
          strokeWidth="3"
          strokeDasharray="6 3"
          style={{ animationDelay: "0.2s" }}
        />
        <rect x="402" y="158" width="14" height="16" rx="2" fill="#f5ebc0" />
        <path d="M416 162 q6 0 6 5 q0 5 -6 5" fill="none" stroke="#f5ebc0" strokeWidth="2" />

        {/* ───────── PERSON (seen from behind) ───────── */}
        <g className="ts-body">
          {/* torso */}
          <path
            d="M250 262 Q250 238 278 236 L322 236 Q350 238 350 262 L350 320 L250 320 Z"
            fill={SHIRT}
          />
          <line x1="300" y1="244" x2="300" y2="262" stroke="#315f58" strokeWidth="1.2" />

          <g className="ts-head">
            <rect x="291" y="222" width="18" height="18" fill={SKIN} />
            <ellipse cx="280" cy="218" rx="3.5" ry="5" fill={SKIN} />
            <ellipse cx="320" cy="218" rx="3.5" ry="5" fill={SKIN} />
            <circle cx="300" cy="214" r="20" fill="#202020" />
          </g>

          {/* upper arms */}
          <line x1="258" y1="254" x2="236" y2="290" stroke={SHIRT} strokeWidth="15" strokeLinecap="round" />
          <line x1="342" y1="254" x2="364" y2="290" stroke={SHIRT} strokeWidth="15" strokeLinecap="round" />

          {/* forearms + hands (rotate around the elbows = typing) */}
          <g className="ts-arm-l">
            <line x1="236" y1="290" x2="270" y2="206" stroke={SHIRT} strokeWidth="14" strokeLinecap="round" />
            <line x1="270" y1="206" x2="279" y2="190" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
            <ellipse cx="280" cy="186" rx="9" ry="5.5" fill={SKIN} />
          </g>
          <g className="ts-arm-r">
            <line x1="364" y1="290" x2="330" y2="206" stroke={SHIRT} strokeWidth="14" strokeLinecap="round" />
            <line x1="330" y1="206" x2="321" y2="190" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
            <ellipse cx="320" cy="186" rx="9" ry="5.5" fill={SKIN} />
          </g>
        </g>

        {/* ───────── CHAIR ───────── */}
        <rect x="258" y="262" width="84" height="56" rx="14" fill="#2b2b2b" />
        <rect x="266" y="270" width="68" height="6" rx="3" fill="#3a3a3a" />
        <rect x="292" y="316" width="16" height="12" fill="#1c1c1c" />
        <ellipse cx="300" cy="330" rx="48" ry="8" fill="#222" />
        <rect x="296" y="336" width="8" height="12" fill="#1c1c1c" />
        <line x1="300" y1="348" x2="262" y2="354" stroke="#1c1c1c" strokeWidth="4" strokeLinecap="round" />
        <line x1="300" y1="348" x2="338" y2="354" stroke="#1c1c1c" strokeWidth="4" strokeLinecap="round" />
        <circle cx="262" cy="356" r="3.5" fill="#111" />
        <circle cx="338" cy="356" r="3.5" fill="#111" />
        <circle cx="300" cy="356" r="3.5" fill="#111" />
      </svg>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto absolute left-0 top-full mt-3 inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-sm bg-ink px-4 py-3 font-mono text-[clamp(12px,1.3cqw,16px)] font-bold uppercase leading-tight text-cream shadow-[0_4px_0_rgba(17,17,17,0.18)] transition-transform hover:translate-x-1"
      >
        Click here to get my resume
        <ArrowDownToLine size={20} strokeWidth={1.8} />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-pad pb-16 pt-12">
      <div className="relative aspect-[100/135] w-full [container-type:inline-size] sm:aspect-[100/82] md:aspect-[100/70] lg:aspect-[100/60] xl:aspect-[100/48]">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible [&_*]:[stroke-width:1.2px] [&_*]:[vector-effect:non-scaling-stroke]"
          viewBox="0 0 100 44"
          fill="none"
          aria-hidden="true"
        >
          <text x="75" y="7" fill="#111" fontFamily="monospace" fontSize="5" fontWeight="700">
            &lt;/&gt;
          </text>
        </svg>

        <TypingScene />

        <h1 className="animate-rise-in absolute left-[14cqw] top-[4cqw] -translate-y-1/2 whitespace-nowrap text-[6.8cqw] font-extrabold uppercase leading-none tracking-[-0.02em]">
          Adeogun
        </h1>
        <span className="animate-rise-in absolute left-[22cqw] top-[16cqw] -translate-y-1/2 whitespace-nowrap text-[6.8cqw] font-extrabold uppercase leading-none tracking-[-0.02em] [animation-delay:120ms]">
          Ayanfeoluwa
        </span>
        <span className="animate-rise-in absolute left-[45cqw] top-[33cqw] -translate-y-1/2 whitespace-nowrap text-[7.6cqw] font-extrabold italic leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.3px_#111] [animation-delay:240ms]">
          Engineer
        </span>
        <span className="animate-float absolute right-[2cqw] top-[26cqw] -translate-y-1/2 -rotate-[4deg] whitespace-nowrap text-[3cqw] font-extrabold italic leading-none text-transparent [-webkit-text-stroke:1px_#111]">
          software
        </span>
      </div>
    </section>
  );
}