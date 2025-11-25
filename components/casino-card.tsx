"use client"
import { Star } from "lucide-react"
import Image from "next/image"
import type { Casino } from "@/lib/data"

interface CasinoCardProps {
  casino: Casino
  rank: number
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const isTop3 = rank <= 3

  const getPrimaryBadge = () => {
    if (rank === 1)
      return {
        text: "Najbolji Izbor",
        gradient: "from-amber-500 to-amber-600",
      }
    if (rank === 2)
      return {
        text: "Premium",
        gradient: "from-emerald-500 to-emerald-600",
      }
    if (rank === 3)
      return {
        text: "Top Preporuka",
        gradient: "from-blue-500 to-blue-600",
      }
    return null
  }

  const calculateStars = (rating: number) => {
    const starValue = rating / 2
    const roundedStars = Math.round(starValue * 5) / 5
    const fullStars = Math.floor(roundedStars)
    const partialFill = roundedStars - fullStars
    const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0)

    return { fullStars, partialFill, emptyStars }
  }

  const renderStars = (size: "sm" | "md") => {
    const starClass = size === "sm" ? "w-4 h-4" : "w-5 h-5"
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className={`${starClass} fill-amber-400 text-amber-400`} />)
    }

    if (partialFill > 0) {
      const fillPercentage = partialFill * 100
      stars.push(
        <div key="partial" className={`relative ${starClass}`}>
          <Star className={`absolute ${starClass} text-gray-600`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className={`${starClass} fill-amber-400 text-amber-400`} />
          </div>
        </div>,
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className={`${starClass} text-gray-600`} />)
    }

    return stars
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold bg-gradient-to-br from-amber-400 to-amber-500 bg-clip-text text-transparent">
          {rating.toFixed(1)}
        </span>
        <span className="text-base text-gray-400 font-medium">/10</span>
      </div>
    )
  }

  const { fullStars, partialFill, emptyStars } = calculateStars(casino.rating)

  const primaryBadge = getPrimaryBadge()

  return (
    <div className="relative">
      {primaryBadge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div
            className={`bg-gradient-to-r ${primaryBadge.gradient} px-6 py-2 text-xs font-bold rounded-full text-white uppercase tracking-wide shadow-lg`}
          >
            {primaryBadge.text}
          </div>
        </div>
      )}

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`block relative rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer casino-card ${
          isTop3 ? "border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10" : "border border-white/10"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[100px_auto_auto_auto] md:gap-8 md:items-center pt-2">
          <div className="text-center flex-shrink-0">
            <div className={`text-6xl font-black ${isTop3 ? "text-yellow-400" : "text-gray-600"}`}>{rank}</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 flex-shrink-0 w-[200px]">
            <Image
              src={casino.logo || "/placeholder.svg"}
              alt={casino.name}
              width={160}
              height={80}
              className="w-40 h-20 object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center flex-shrink-0 px-6">
            <div className="text-xs uppercase tracking-wider text-yellow-400 mb-3 font-bold">Bonus</div>
            <div className="text-3xl font-bold text-white text-center leading-tight">{casino.bonus}</div>
          </div>

          <div className="flex items-center gap-8 ml-auto">
            <div className="text-center flex-shrink-0">
              {renderRating(casino.rating)}
              <div className="flex items-center gap-1 justify-center mt-3">{renderStars("sm")}</div>
              <div className="text-xs text-gray-500 mt-3 font-medium">{casino.votes} recenzija</div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold whitespace-nowrap text-base px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                <span>Igraj Sada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex-shrink-0 w-[160px]">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={140}
                height={70}
                className="w-[140px] h-[70px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="text-[10px] uppercase tracking-wider text-yellow-400 mb-2 font-bold">Bonus</div>
              <div className="text-xl font-bold text-white text-center leading-tight">{casino.bonus}</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`text-3xl font-black ${isTop3 ? "text-yellow-400" : "text-gray-600"}`}>{rank}</div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold bg-gradient-to-br from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  {casino.rating.toFixed(1)}
                </span>
                <span className="text-xs text-gray-400">/10</span>
              </div>
              <div className="flex items-center gap-0.5">{renderStars("sm")}</div>
            </div>
            <div className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-3 rounded-lg flex-shrink-0 transition-all duration-300">
              <span>Igraj</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            18+ | Primjenjuju se Uvjeti | Odgovorno Kockanje
          </p>
        </div>
      </a>
    </div>
  )
}
