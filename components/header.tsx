"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f1419]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group transition-all duration-300" onClick={handleNavigation}>
            <div className="flex items-center gap-3">
              <Image src="/favicon.ico" width={46} height={46} alt="NajboljeIgreHR" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  NajboljeIgreHR
                </span>
                <span className="text-[10px] font-medium tracking-wider text-gray-400 uppercase">Casino Reviews</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
