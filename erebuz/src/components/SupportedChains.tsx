export function SupportedChains() {
  const chains = [
    { name: "Ethereum", img: "/protocols/ethereum.webp" },
    { name: "Arbitrum", img: "/protocols/arbitrum.jpg" },
    { name: "Base", img: "/protocols/base.jpg" },
    { name: "Polygon", img: "/protocols/polygon.jpg" },
    { name: "StarkNet", img: "/protocols/starknet.png" },
  ];

  return (
    <section id="supported-chains" className="flex flex-col relative text-yellow justify-between py-20 md:py-28 gap-8 lg:gap-20 xl:flex-row xl:items-center">
      <div className="xl:container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 lg:gap-20">
          <div className="flex-1">
            <span className="text-6xl font-bold text-yellow mb-4 block">04</span>
            <h2 className="uppercase text-3xl md:text-4xl font-normal text-yellow mb-6">
              SUPPORTED CHAINS
            </h2>
            <p className="text-base md:text-lg text-yellow max-w-xl">
              Routes private transactions across every major EVM chain and StarkNet. More chains added as the pool grows.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
              {chains.map((chain) => (
                <div key={chain.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="size-20 rounded-full border border-yellow/30 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-yellow group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,0,0.15)]">
                    <div className="size-full rounded-full overflow-hidden bg-black/60">
                      <img src={chain.img} alt={chain.name} className="size-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <span className="text-yellow/80 text-xs uppercase tracking-wider transition-all duration-300 group-hover:text-yellow">{chain.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="size-20 rounded-full border border-dashed border-yellow/20 flex items-center justify-center bg-black/40">
                  <span className="text-yellow/70 text-xs font-mono tracking-tight leading-tight text-center">+20<br />more</span>
                </div>
                <span className="text-yellow/70 text-xs uppercase tracking-wider">& more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
