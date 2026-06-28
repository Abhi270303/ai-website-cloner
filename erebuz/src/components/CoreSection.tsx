"use client";

import { useRef, useEffect, useState } from "react";
import { ErebuzDiagram } from "./ErebuzDiagram";



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
          className="my-4 lg:my-14"
          style={{
            animation: visible["flow-diagram"] ? "pillar-in 0.6s ease-out 0.1s forwards" : "none",
            opacity: 0,
          }}
        >
          <ErebuzDiagram />
        </div>


      </div>
    </section>
  );
}
