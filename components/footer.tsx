"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#0c0c0c] text-gray-400">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-6" onClick={handleNavigation}>
              <span className="text-2xl font-bold text-white tracking-tight">
                Najbolje<span className="text-yellow-400">IgreHR</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Vaš premium vodič za online casino platforme u Hrvatskoj. Stručne recenzije i pouzdane preporuke.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Informacije</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/o-nama"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    onClick={handleNavigation}
                  >
                    O nama
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politika-kolacica"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    onClick={handleNavigation}
                  >
                    Politika kolačića
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politika-privatnosti"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    onClick={handleNavigation}
                  >
                    Privatnost
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Podrška</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/odricanje-odgovornosti"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    onClick={handleNavigation}
                  >
                    Odricanje odgovornosti
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-yellow-400 text-black px-5 py-3 rounded-lg">
            <span className="text-2xl font-bold">18+</span>
            <span className="text-[10px] font-medium">
              Samo za
              <br />
              odrasle
            </span>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-6 text-center">Odgovorno kockanje</p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={100}
                height={40}
                className="h-8 w-auto object-contain transition-all"
              />
            </a>
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/gamble.webp"
                alt="GambleAware"
                width={90}
                height={36}
                className="h-7 w-auto object-contain transition-all"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={100}
                height={40}
                className="h-8 w-auto object-contain transition-all"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={100}
                height={40}
                className="h-8 w-auto object-contain transition-all"
              />
            </a>
            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={90}
                height={36}
                className="h-7 w-auto object-contain transition-all"
              />
            </a>
          </div>
        </div>

        <p className="text-xs text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Kockanje može uzrokovati ovisnost. Igrajte odgovorno. Sav sadržaj je informativne prirode. Provjerite lokalne
          zakone prije sudjelovanja u online igrama na sreću.
        </p>
      </div>

      <div className="border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6 py-5">
          <p className="text-xs text-center text-gray-600">
            &copy; {new Date().getFullYear()} najboljeigrehr.com — Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
