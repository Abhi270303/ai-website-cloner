"use client"

import { useEffect, useState } from "react"

/* ---------------------------------- icons --------------------------------- */

function IconKey({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="M10.7 12.3 21 2" />
      <path d="m16 7 3 3" />
      <path d="m19 4 2.5 2.5" />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function IconSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 19c3 0 3-3 5-3s2 3 5 3 4-9 6-9" />
      <path d="m14 4 6 6" />
      <path d="M13 5 4 14v4h4l9-9z" />
    </svg>
  )
}

function IconRoute({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H14a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h5.5" />
    </svg>
  )
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconEyeOff({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10.7 6.2A9.7 9.7 0 0 1 12 6c5 0 9 6 9 6a16 16 0 0 1-2.4 2.9" />
      <path d="M6.2 6.6A15.8 15.8 0 0 0 3 12s4 6 9 6a9.4 9.4 0 0 0 4.3-1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="m3 3 18 18" />
    </svg>
  )
}

/* --------------------------------- modules -------------------------------- */

const MODULES = [
  { key: "keys", label: "Keys", Icon: IconKey },
  { key: "compliance", label: "Compliance", Icon: IconShield },
  { key: "signing", label: "Signing", Icon: IconSign },
  { key: "routing", label: "Routing", Icon: IconRoute },
] as const

const HOSTS = ["Self-host", "Erebuz-host"] as const

/* -------------------------------- component ------------------------------- */

export function ErebuzTee() {
  const [active, setActive] = useState(0)
  const [host, setHost] = useState(0)
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setActive((a) => (a + 1) % MODULES.length), 1400)
    return () => clearInterval(id)
  }, [reduced])

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setHost((h) => (h + 1) % HOSTS.length), 4200)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <section
      id="privacy-model"
      className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 font-mono sm:p-8"
      aria-label="Privacy model and TEE"
    >
      {/* heading */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Privacy model</p>
          <h2 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">TEE : Trusted Execution Environment</h2>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          SEALED
        </span>
      </div>

      {/* stage */}
      <div className="relative mt-8 flex items-stretch justify-between gap-2 sm:gap-4">
        {/* ---- machine owner (left) ---- */}
        <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-3 sm:w-32">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white/60 sm:h-20 sm:w-20">
            <IconEyeOff className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <p className="text-center text-[10px] leading-tight text-white/45 sm:text-[11px]">
            Machine owner
            <br />
            <span className="text-white/30">no visibility</span>
          </p>
        </div>

        {/* ---- scan beams + blocked wall ---- */}
        <div className="relative flex flex-1 items-center" aria-hidden="true">
          {!reduced &&
            [0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute left-0 h-[2px] w-12 origin-left rounded-full bg-white/70"
                style={{
                  top: `${32 + i * 18}%`,
                  animation: `tee-scan 2.1s cubic-bezier(0.4,0,0.2,1) ${i * 0.5}s infinite`,
                }}
              />
            ))}
          {!reduced &&
            [0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute right-0 h-6 w-[3px] origin-center rounded-full bg-white"
                style={{
                  top: `${28 + i * 18}%`,
                  animation: `tee-block 2.1s cubic-bezier(0.4,0,0.2,1) ${i * 0.5}s infinite`,
                }}
              />
            ))}
        </div>

        {/* ---- the TEE: a locked box ---- */}
        <div className="relative w-[58%] shrink-0 sm:w-[56%]">
          <div className="absolute -top-4 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-lg border border-white/30 bg-[#0b0b0b]">
            <IconLock
              className="h-4.5 w-4.5 text-white"
              {...(!reduced ? { style: { animation: "tee-lockwiggle 4s ease-in-out infinite" } } : {})}
            />
          </div>

          <div
            className="rounded-xl border-2 bg-white px-4 pb-4 pt-6 sm:px-5"
            style={
              reduced
                ? { borderColor: "rgba(255,255,255,0.6)" }
                : { animation: "tee-seal 2.8s ease-in-out infinite" }
            }
          >
            <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#080808]/55">
              Locked box
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {MODULES.map((m, i) => {
                const on = i === active
                return (
                  <div
                    key={m.key}
                    className="flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-all duration-300 sm:px-3"
                    style={{
                      borderColor: on ? "#080808" : "rgba(8,8,8,0.12)",
                      backgroundColor: on ? "#080808" : "transparent",
                      color: on ? "#ffffff" : "rgba(8,8,8,0.55)",
                    }}
                  >
                    <m.Icon className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
                    <span className="truncate text-[11px] font-semibold sm:text-xs">{m.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="mt-2 text-center text-[10px] text-white/35">executes inside the enclave</p>
        </div>
      </div>

      {/* host toggle */}
      <div className="mt-7 flex items-center justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.03] p-1">
          {HOSTS.map((h, i) => {
            const on = i === host
            return (
              <span
                key={h}
                className="rounded-full px-4 py-1.5 text-[11px] font-semibold transition-all duration-500"
                style={{
                  backgroundColor: on ? "#ffffff" : "transparent",
                  color: on ? "#080808" : "rgba(255,255,255,0.5)",
                }}
              >
                {h}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
