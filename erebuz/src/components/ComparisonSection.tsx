import { Fragment } from "react";

export function ComparisonSection() {
  const rows = [
    { label: "Cost year one", build: "$2M–$3.5M", erebuz: "$50K–$200K" },
    { label: "Time to launch", build: "12–18 months", erebuz: "2–6 weeks" },
    { label: "Privacy pool", build: "Small, separate", erebuz: "Large, shared" },
    { label: "Audit risk", build: "High, custom crypto", erebuz: "Low, no custom crypto" },
  ];

  return (
    <section
      id="pricing"
      className="flex flex-col relative py-20 md:py-28 xl:flex-row xl:gap-12"
    >
      <div className="xl:container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 lg:gap-20">
          <div className="flex-1">
            <span className="text-6xl font-bold text-yellow mb-4 block">02</span>
            <h2 className="uppercase text-3xl md:text-4xl font-normal text-yellow mb-6">
              WHY NOT BUILD IT YOURSELF
            </h2>
            <p className="text-base md:text-lg text-yellow/80 max-w-xl">
              Building custom privacy costs millions and takes a year and creates a small pool that makes users <em>easier</em> to fingerprint. Erebuz removes the custom crypto entirely.
            </p>
          </div>
          <div className="flex-1">
            <div className="border border-yellow/30 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-px bg-yellow/20">
                <div className="p-4 bg-black" />
                <div className="p-4 bg-black text-yellow text-xs uppercase font-bold text-center">Build Yourself</div>
                <div className="p-4 bg-black text-yellow text-xs uppercase font-bold text-center">Erebuz</div>
                {rows.map((row) => (
                  <Fragment key={row.label}>
                    <div className="p-4 bg-black text-yellow text-sm">{row.label}</div>
                    <div className="p-4 bg-black text-yellow/60 text-sm text-center">{row.build}</div>
                    <div className="p-4 bg-black text-yellow text-sm text-center font-bold">{row.erebuz}</div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
