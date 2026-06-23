function WalletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="14" width="12" height="8" rx="2" fill="currentColor" opacity="0.15" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
      <path d="M6 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function SwapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M22 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 10H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M10 28l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M28 4L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 4L20 28l-6-10-10-6 24-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function UseErebuz() {
  const cards = [
    {
      bg: "bg-yellow",
      textColor: "text-black",
      title: "WALLETS",
      icon: WalletIcon,
      description: "Private transactions with one SDK integration.",
      cta: "INTEGRATE",
    },
    {
      bg: "bg-cyan",
      textColor: "text-black",
      title: "DEX EXCHANGES",
      icon: SwapIcon,
      description: "Shielded cross-chain swaps with no exposure.",
      cta: "LEARN MORE",
      translate: "lg:translate-y-20",
    },
    {
      bg: "bg-black",
      textColor: "text-yellow",
      title: "PAYMENT APPS",
      icon: SendIcon,
      description: "Private sends with automatic compliance built in.",
      cta: "LEARN MORE",
      translate: "lg:translate-y-40",
      border: "border border-yellow",
    },
  ];

  return (
    <section id="use-cases" className="container py-20 md:py-28">
      <h2 className="text-yellow mb-10 text-4xl font-normal uppercase md:text-5xl">
        WHO IT&rsquo;S FOR
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`flex h-full flex-col rounded-2xl p-8 ${card.bg} ${card.textColor} ${card.translate} ${card.border ?? ""}`}
            >
              <Icon className="size-8" />
              <h3 className="mt-6 mb-3 text-2xl font-normal uppercase">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">{card.description}</p>
              <a
                href="#"
                className="mt-auto text-sm font-medium uppercase underline underline-offset-4 transition-all hover:no-underline"
              >
                {card.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
