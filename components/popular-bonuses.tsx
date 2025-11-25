"use client"

import { CasinoCard } from "@/components/casino-card"
import type { Casino } from "@/lib/data"

interface PopularBonusesProps {
  casinos: Casino[]
}

export function PopularBonuses({ casinos }: PopularBonusesProps) {
  const topCasino = casinos[0]

  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Editor's Choice
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">Naša Top Preporuka</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Najbolja casino platforma prema našoj temeljitoj analizi i testiranju
            </p>
          </div>

          <div className="info-card rounded-xl p-8 mb-8 border border-white/5">
            <p className="text-gray-300 leading-relaxed mb-4">
              Nakon opsežne analize svih vodećih casino platformi na hrvatskom tržištu, ova platforma se izdvojila po
              svim ključnim kriterijima: sigurnost, kvaliteta igara, brzina isplata i korisnička podrška.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Svaka preporuka temeljena je na stvarnim iskustvima našeg tima i kontinuiranom praćenju performansi.
            </p>
          </div>

          <CasinoCard casino={topCasino} rank={1} />
        </div>
      </div>
    </section>
  )
}
