"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date()
      const months = [
        "Siječanj",
        "Veljača",
        "Ožujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac",
      ]
      return `${months[now.getMonth()]} ${now.getFullYear()}`
    }
    setCurrentDate(getCurrentDate())
  }, [])

  return (
    <section
      className="relative text-white py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/luxury-casino-hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-tight">
            <span className="text-white">Najbolje Casino</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Recenzije u Hrvatskoj
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stručne analize i objektivne ocjene. Pronađite najbolju casino platformu za vas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Image src="/flag.png" width={16} height={16} alt="NajboljeIgreHR" />           
              100% Licencirano
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Ekskluzivni Bonusi
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Sigurne Isplate
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Provjereno & Testirano
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <span className="text-xs text-slate-400">Ažurirano:</span>
          <span className="text-xs font-semibold text-amber-400">{currentDate}</span>
        </div>
      </div>
    </section>
  )
}
