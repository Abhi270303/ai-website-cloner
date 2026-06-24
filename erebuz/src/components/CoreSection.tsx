"use client";

import { useRef, useEffect, useState } from "react";

function PillarIcon({ type }: { type: "privacy" | "compliance" | "defi" }) {
  if (type === "privacy") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="size-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M24 8c6 0 12 4 12 12v8c0 4-4 8-8 8h-8c-4 0-8-4-8-8v-8c0-8 6-12 12-12z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 24l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }
  if (type === "compliance") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="size-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 30c2 4 6 8 12 8s10-4 12-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="24" cy="20" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none" className="size-10">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 22l-7 8" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M24 22l7 8" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

function PhoneIcon({ x, y }: { x: number; y: number }) {
  return (
    <g className="group cursor-pointer">
      <rect x={x} y={y} width="56" height="80" rx="12" className="fill-black transition-all duration-300 group-hover:stroke-[#ffff00] group-hover:stroke-[2.5]" stroke="#ffff00" strokeWidth="1.5" />
      <rect x={x + 6} y={y + 10} width="44" height="56" rx="4" stroke="#ffff00" strokeWidth="0.8" fill="none" opacity="0.4" className="transition-all duration-300 group-hover:opacity-70" />
      <text x={x + 28} y={y + 37} textAnchor="middle" fill="#ffff00" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="2" className="transition-all duration-300 group-hover:opacity-100" opacity="0.85">APP</text>
      <rect x={x + 18} y={y + 70} width="20" height="2" rx="1" fill="#ffff00" opacity="0.25" className="transition-all duration-300 group-hover:opacity-50" />
      <circle cx={x + 28} cy={y + 4} r="2" fill="#ffff00" opacity="0.35" className="transition-all duration-300 group-hover:opacity-70" />
    </g>
  );
}

function SdkServerIcon({ x, y }: { x: number; y: number }) {
  const w = 158;
  const h = 108;
  return (
    <g className="group cursor-pointer">
      <rect x={x} y={y} width={w} height={h} rx="10" className="fill-black transition-all duration-300 group-hover:stroke-[#00ffff] group-hover:stroke-[2.5]" stroke="#00ffff" strokeWidth="1.5" />
      <line x1={x + 14} y1={y + 12} x2={x + w - 14} y2={y + 12} stroke="#00ffff" strokeWidth="0.5" opacity="0.12" />
      <line x1={x + 14} y1={y + 17} x2={x + w - 14} y2={y + 17} stroke="#00ffff" strokeWidth="0.5" opacity="0.12" />
      <rect x={x + 14} y={y + 26} width="48" height="16" rx="3" stroke="#00ffff" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx={x + 24} cy={y + 34} r="2" fill="#00ffff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x={x + 14} y={y + 50} width="22" height="14" rx="2" stroke="#00ffff" strokeWidth="0.8" fill="none" opacity="0.3" />
      <rect x={x + 18} y={y + 53} width="14" height="8" rx="1" fill="#00ffff" opacity="0.15" />
      <circle cx={x + 44} cy={y + 57} r="2" fill="#00ffff" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x={x + w / 2 + 10} y={y + 52} textAnchor="middle" fill="#00ffff" fontSize="15" fontFamily="Space Grotesk, sans-serif" fontWeight="700" letterSpacing="3">EREBUZ</text>
      <text x={x + w / 2 + 10} y={y + 70} textAnchor="middle" fill="#00ffff" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="2">SDK</text>
      <line x1={x + 14} y1={y + h - 14} x2={x + w - 14} y2={y + h - 14} stroke="#00ffff" strokeWidth="0.5" opacity="0.15" />
      <circle cx={x + 20} cy={y + h - 10} r="1.5" fill="#00ffff" opacity="0.4" />
      <text x={x + 26} y={y + h - 7} fill="#00ffff" fontSize="6" fontFamily="Space Grotesk, sans-serif" opacity="0.2" letterSpacing="1">findRoute() running</text>
    </g>
  );
}

function BlockchainIcon({ x, y }: { x: number; y: number }) {
  const boxW = 130;
  const boxH = 74;
  const cx = x + boxW / 2;
  const bw = 20;
  const bh = 20;
  const gap = 12;
  const blocks = [0, 1, 2].map((i) => ({
    bx: cx - 48 + i * (bw + gap),
    by: y + 18,
  }));

  return (
    <g className="group cursor-pointer">
      <rect x={x} y={y} width={boxW} height={boxH} rx="10" className="fill-black transition-all duration-300 group-hover:stroke-opacity-100" stroke="#00ffff" strokeWidth="1.5" strokeOpacity="0.6" />

      {blocks.slice(0, -1).map((b, i) => {
        const from = b.bx + bw;
        const to = blocks[i + 1].bx;
        const cy = b.by + bh / 2;
        return (
          <path
            key={`chain-${i}`}
            d={`M${from} ${cy} C${from} ${cy - 4}, ${to} ${cy - 4}, ${to} ${cy} C${to} ${cy + 4}, ${from} ${cy + 4}, ${from} ${cy}`}
            stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.4"
          />
        );
      })}

      <rect x={blocks[0].bx} y={blocks[0].by} width={bw} height={bh} rx="3" className="fill-black" stroke="#00ffff" strokeWidth="1.3" />
      <text x={blocks[0].bx + bw / 2} y={blocks[0].by + bh / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill="#00ffff" fontSize="6" fontFamily="Space Grotesk, sans-serif" opacity="0.5">0x1</text>

      <rect x={blocks[1].bx} y={blocks[1].by} width={bw} height={bh} rx="3" className="fill-black" stroke="#00ffff" strokeWidth="1.3" />
      <text x={blocks[1].bx + bw / 2} y={blocks[1].by + bh / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill="#00ffff" fontSize="6" fontFamily="Space Grotesk, sans-serif" opacity="0.5">0x2</text>

      <rect x={blocks[2].bx} y={blocks[2].by} width={bw} height={bh} rx="3" className="fill-black" stroke="#00ffff" strokeWidth="1.3" />
      <text x={blocks[2].bx + bw / 2} y={blocks[2].by + bh / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill="#00ffff" fontSize="6" fontFamily="Space Grotesk, sans-serif" opacity="0.5">0x3</text>

      <rect x={blocks[2].bx + bw + gap} y={y + 18 + 3} width={bw - 4} height={bh - 6} rx="2" className="fill-black" stroke="#00ffff" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
      <text x={blocks[2].bx + bw + gap + (bw - 4) / 2} y={y + 18 + 3 + (bh - 6) / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill="#00ffff" fontSize="5" fontFamily="Space Grotesk, sans-serif" opacity="0.2">N</text>

      <circle r="1.5" fill="#00ffff" opacity="0.6">
        <animateMotion dur="2s" repeatCount="indefinite" path={`M${blocks[0].bx + bw},${y + 28} L${blocks[1].bx},${y + 28}`} />
      </circle>
      <circle r="1.5" fill="#00ffff" opacity="0.6">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path={`M${blocks[1].bx + bw},${y + 28} L${blocks[2].bx},${y + 28}`} />
      </circle>

      <text x={cx} y={y + 58} textAnchor="middle" fill="#00ffff" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="2">BLOCKCHAIN</text>
    </g>
  );
}

type LogoDef = { src: string; label: string };

const logosByPillar: Record<string, LogoDef[]> = {
  compliance: [
    { src: "/protocols/chainalaysis.png", label: "Chainalysis" },
    { src: "/protocols/Elliptic.jpg", label: "Elliptic" },
    { src: "/protocols/TRM.jpg", label: "TRM Labs" },
  ],
  privacy: [
    { src: "/protocols/starknet.png", label: "StarkNet" },
    { src: "/protocols/railgun.jpg", label: "Railgun" },
    { src: "/protocols/zcash.jpg", label: "Zcash" },
    { src: "/protocols/monero.jpg", label: "Monero" },
  ],
  defi: [
    { src: "/protocols/stargate.png", label: "Stargate" },
    { src: "/protocols/across.jpg", label: "Across" },
    { src: "/protocols/debridge.jpg", label: "deBridge" },
    { src: "/protocols/relay.jpg", label: "Relay" },
  ],
};

function estimateTextWidth(text: string): number {
  let w = 0;
  for (const ch of text) {
    if ("mwMW".includes(ch)) w += 14;
    else if ("ijIlfrt ".includes(ch)) w += 7;
    else if ("/\\-'".includes(ch)) w += 5;
    else w += 10;
  }
  w += (text.length - 1) * 2;
  return w;
}

function PillarBox({ x, y, w, h, title, color, logos }: { x: number; y: number; w: number; h: number; title: string; color: string; logos: LogoDef[] }) {
  const logoSize = 28;
  const logoGap = 10;
  const gap = 24;
  const titleWidth = estimateTextWidth(title);
  const logosWidth = logos.length * logoSize + (logos.length - 1) * logoGap;
  const contentWidth = titleWidth + gap + logosWidth;
  const contentStartX = x + (w - contentWidth) / 2;
  const logosStartX = contentStartX + titleWidth + gap;
  const logosY = y + (h - logoSize) / 2;

  return (
    <g className="group cursor-pointer">
      <rect x={x} y={y} width={w} height={h} rx="8" className="fill-black stroke-current transition-all duration-300 group-hover:stroke-opacity-100" stroke={color} strokeWidth="1.2" strokeOpacity="0.35" />
      <rect x={x} y={y} width={w} height={h} rx="8" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0" className="transition-all duration-300 group-hover:stroke-opacity-40" />
      <text x={contentStartX} y={y + h / 2 + 5.5} textAnchor="start" fill={color} fontSize="16" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="2" className="transition-all duration-300 group-hover:opacity-100" opacity="0.85">{title}</text>
      {logos.map((logo, i) => (
        <image
          key={logo.label}
          href={logo.src}
          x={logosStartX + i * (logoSize + logoGap)}
          y={logosY}
          width={logoSize}
          height={logoSize}
          className="transition-all duration-300 group-hover:opacity-100"
          opacity={0.7}
        />
      ))}
    </g>
  );
}

function ArchitectureFlow() {
  const boxW = 340;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let dir = 1;
    const speed = 0.5;
    const id = setInterval(() => {
      el.scrollLeft += speed * dir;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1;
      if (el.scrollLeft <= 1) dir = 1;
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-auto mb-8 scrollbar-thin">
      <svg viewBox="0 0 1180 260" fill="none" className="min-w-[1000px] h-auto mx-auto">
        <g transform="translate(65, 0)">
        {/* ===== PHONE ICON (App/Wallet) ===== */}
        <PhoneIcon x={12} y={90} />
        <text x={40} y={185} textAnchor="middle" fill="#ffff00" fontSize="8" fontFamily="Space Grotesk, sans-serif" opacity="0.35" letterSpacing="1.5">or Wallet</text>

        {/* Arrow: Phone → SDK */}
        <path d="M73 130h42" stroke="#ffff00" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
        <polygon points="118,125 128,130 118,135" fill="#ffff00" opacity="0.45" />
        <circle r="3" fill="#ffff00" opacity="0.8">
          <animateMotion dur="2s" repeatCount="indefinite" path="M73,130h48" />
        </circle>

        {/* ===== SDK SERVER ===== */}
        <SdkServerIcon x={140} y={76} />

        {/* Arrow: SDK → Pillars */}
        <path d="M298 130h32" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" />
        <polygon points="333,125 343,130 333,135" fill="#00ffff" opacity="0.4" />
        <circle r="2.5" fill="#00ffff" opacity="0.7">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M298,130h38" />
        </circle>

        {/* ===== BRANCHING TO THREE PILLARS ===== */}
        <g className="group">
          <circle cx="358" cy="130" r="11" className="fill-yellow/0 transition-all duration-300 group-hover:fill-yellow/10" />
          <circle cx="358" cy="130" r="7" className="fill-yellow transition-all duration-300 group-hover:opacity-80" />
          <circle cx="358" cy="130" r="3" className="fill-black" />
        </g>

        {/* To Privacy (center) */}
        <path d="M365 130h31" stroke="#00ffff" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" />
        <polygon points="396,126 404,130 396,134" fill="#00ffff" opacity="0.5" />
        <circle r="2.5" fill="#00ffff" opacity="0.7">
          <animateMotion dur="2s" repeatCount="indefinite" path="M365,130h31" />
        </circle>

        {/* To Compliance (up) */}
        <path d="M358 123 358 60 396 60" stroke="#ffff00" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.25" />
        <polygon points="396,56 404,60 396,64" fill="#ffff00" opacity="0.4" />
        <circle r="2" fill="#ffff00" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M358,123 L358,60 L396,60" />
        </circle>

        {/* To DeFi (down) */}
        <path d="M358 137 358 200 396 200" stroke="#ffff00" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.25" />
        <polygon points="396,196 404,200 396,204" fill="#ffff00" opacity="0.4" />
        <circle r="2" fill="#ffff00" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M358,137 L358,200 L396,200" />
        </circle>

        {/* ===== THREE PILLAR BOXES ===== */}
        <PillarBox x={408} y={30} w={boxW} h={60} title="Compliance" color="#ffff00" logos={logosByPillar.compliance} />
        <PillarBox x={408} y={100} w={boxW} h={60} title="Privacy" color="#00ffff" logos={logosByPillar.privacy} />
        <PillarBox x={408} y={170} w={boxW} h={60} title="DeFi / Bridges" color="#ffff00" logos={logosByPillar.defi} />

        {/* ===== OUTPUT ARROWS → MERGE → CHAIN ===== */}
        <path d="M748 130h77" stroke="#00ffff" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.3" />
        <polygon points="825,126 830,130 825,134" fill="#00ffff" opacity="0.5" />
        <circle r="2.5" fill="#00ffff" opacity="0.7">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.3s" path="M748,130h77" />
        </circle>

        <path d="M748 60 h16 v70 h61" stroke="#ffff00" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.2" />
        <polygon points="825,126 830,130 825,134" fill="#ffff00" opacity="0.4" />
        <circle r="2" fill="#ffff00" opacity="0.5">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.8s" path="M748,60 L764,60 L764,130 L825,130" />
        </circle>

        <path d="M748 200 h16 v-70 h61" stroke="#ffff00" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.2" />
        <polygon points="825,126 830,130 825,134" fill="#ffff00" opacity="0.4" />
        <circle r="2" fill="#ffff00" opacity="0.5">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.3s" path="M748,200 L764,200 L764,130 L825,130" />
        </circle>

        {/* Merge node */}
        <g className="group">
          <circle cx="830" cy="130" r="12" className="fill-yellow/0 transition-all duration-300 group-hover:fill-yellow/10" />
          <circle cx="830" cy="130" r="8" className="fill-yellow transition-all duration-300 group-hover:opacity-80" />
          <circle cx="830" cy="130" r="3.5" className="fill-black" />
        </g>

        {/* Final arrow */}
        <path d="M838 130h62" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
        <polygon points="904,125 908,130 904,135" fill="#00ffff" opacity="0.5" />
        <circle r="3" fill="#00ffff" opacity="0.7">
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.5s" path="M838,130h66" />
        </circle>

        {/* ===== BLOCKCHAIN ICON ===== */}
        <BlockchainIcon x={908} y={93} />

        {/* Subtle footer */}
        <text x="590" y="245" textAnchor="middle" fill="#ffff00" fontSize="7" fontFamily="Space Grotesk, sans-serif" opacity="0.12" letterSpacing="3">findRoute()  ·  routing fee  ·  private + compliant + executed</text>
        </g>
      </svg>
    </div>
  );
}

type PillarItem = {
  name: string;
  desc: string;
  logo: string;
};

const pillars: {
  id: string;
  title: string;
  icon: "privacy" | "compliance" | "defi";
  accent: string;
  borderAccent: string;
  items: PillarItem[];
  description: string;
}[] = [
  {
    id: "privacy",
    title: "Privacy",
    icon: "privacy",
    accent: "text-yellow",
    borderAccent: "border-yellow/40 group-hover:border-yellow",
    items: [
      { name: "Railgun", desc: "On-chain ZK privacy for Ethereum", logo: "/protocols/railgun.jpg" },
      { name: "StarkNet", desc: "ZK-rollup private transfers", logo: "/protocols/starknet.png" },
      { name: "Zcash", desc: "Shielded transactions, battle-tested", logo: "/protocols/zcash.jpg" },
      { name: "Monero", desc: "Ring signatures, privacy by default", logo: "/protocols/monero.jpg" },
    ],
    description: "Picks the best privacy tool per chain, amount, and speed.",
  },
  {
    id: "compliance",
    title: "Compliance",
    icon: "compliance",
    accent: "text-cyan",
    borderAccent: "border-cyan/40 group-hover:border-cyan",
    items: [
      { name: "Chainalysis", desc: "Real-time transaction monitoring", logo: "/protocols/chainalaysis.png" },
      { name: "Elliptic", desc: "Cross-chain tracing, token coverage", logo: "/protocols/Elliptic.jpg" },
      { name: "TRM Labs", desc: "AML and risk scoring", logo: "/protocols/TRM.jpg" },
    ],
    description: "Every transaction screened before it moves.",
  },
  {
    id: "defi",
    title: "DeFi / Bridges",
    icon: "defi",
    accent: "text-yellow",
    borderAccent: "border-yellow/40 group-hover:border-yellow",
    items: [
      { name: "Stargate", desc: "Omnichain native asset bridge", logo: "/protocols/stargate.png" },
      { name: "Across", desc: "Fast intents-based bridging", logo: "/protocols/across.jpg" },
      { name: "deBridge", desc: "Cross-chain liquidity protocol", logo: "/protocols/debridge.jpg" },
      { name: "Relay", desc: "Multi-chain bridge aggregator", logo: "/protocols/relay.jpg" },
    ],
    description: "Best bridge or swap route depending on liquidity, speed, and fees.",
  },
];

export function CoreSection() {
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-animate]");
    cards?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 text-yellow max-w-7xl mx-auto overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-20 left-10 size-64 rounded-full border border-yellow/5 animate-[float-shape_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-40 right-20 size-48 rounded-full border border-cyan/5 animate-[float-shape_25s_ease-in-out_infinite_2s]" />
        <div className="absolute top-60 right-1/4 size-32 rounded-full border border-yellow/5 animate-[float-shape_18s_ease-in-out_infinite_4s]" />
      </div>

      <div className="px-4 relative z-10">
        <div
          id="core-header"
          data-animate
          className="mb-6"
          style={{
            animation: visible["core-header"] ? "pillar-in 0.6s ease-out forwards" : "none",
            opacity: 0,
          }}
        >
          <span className="bg-yellow text-black uppercase px-2 inline-flex mb-6 text-sm tracking-widest">
            CORE
          </span>
          <h2
            className="uppercase font-normal leading-[1.1em] mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 56px)" }}
          >
            PRIVACY, COMPLIANCE, DEFI in <span className="text-cyan">ONE SDK</span>
          </h2>
        </div>

        <div
          id="flow-diagram"
          data-animate
          className="my-10 lg:my-14"
          style={{
            animation: visible["flow-diagram"] ? "pillar-in 0.6s ease-out 0.1s forwards" : "none",
            opacity: 0,
          }}
        >
          <ArchitectureFlow />
        </div>

        <p className="text-yellow/50 text-sm md:text-base text-center mb-10">
          One SDK call routes your transaction through the best privacy tool, compliance check, and bridge automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              data-animate
              className={`group relative border ${pillar.borderAccent} rounded-xl p-6 lg:p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,0,0.12)]`}
              style={{
                animation: visible[`pillar-${pillar.id}`] ? `pillar-in 0.6s ease-out ${0.2 + i * 0.15}s forwards, glow-pulse 3s ease-in-out ${0.2 + i * 0.15 + 0.6}s infinite` : "none",
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pillar.accent}`} />

              <div className="flex items-start gap-4 mb-5">
                <div className={`shrink-0 transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3 ${pillar.accent}`}>
                  <PillarIcon type={pillar.icon} />
                </div>
                <div>
                  <h3 className={`uppercase text-lg font-semibold tracking-wider ${pillar.accent}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-yellow/40 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-yellow/20 via-yellow/10 to-transparent mb-5" />

              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 text-sm text-yellow/70 group-hover:text-yellow/90 transition-colors duration-300">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="size-7 shrink-0 rounded object-contain"
                      loading="lazy"
                    />
                    <div>
                      <span className="font-medium text-yellow/80">{item.name}</span>
                      <span className="text-yellow/40 ml-1.5 hidden sm:inline">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pillar.accent}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
