"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Koji online casini su legalni u Hrvatskoj?",
    answer:
      "U Hrvatskoj su legalni samo online casini koji posjeduju važeću licencu izdanu od strane Ministarstva financija Republike Hrvatske. Svi licencirani operateri moraju se pridržavati strogih pravila uključujući 256-bitnu SSL enkripciju, integraciju sa sustavom samoisključenja, transparentne uvjete bonusa i plaćanje 15% poreza na bruto prihod. Prije registracije uvijek provjerite da li casino ima važeću hrvatsku licencu.",
  },
  {
    question: "Kako mogu provjeriti da li je casino siguran?",
    answer:
      "Sigurnost casina možete provjeriti tako što ćete potvrditi da casino posjeduje važeću licencu na web stranici Ministarstva financija, provjeriti SSL enkripciju (zeleni lokot u browseru), pročitati recenzije drugih igrača, testirati kvalitetu korisničke podrške i pregledati uvjete bonusa i isplata. Svi casini koje preporučujemo na najboljeigrehr.com prošli su temeljitu provjeru sigurnosti.",
  },
  {
    question: "Što su razumni uvjeti za bonus?",
    answer:
      "Razumni uvjeti za bonus uključuju zahtjeve za promet između 30-40x iznosa bonusa, vremensko ograničenje od minimalno 30 dana za ispunjenje uvjeta, jasno navedene igre koje doprinose promet i maksimalni iznos koji možete uplatiti. Izbjegavajte bonuse s uvjetima preko 50x ili skrivenim ograničenjima. Uvijek pročitajte potpune uvjete prije aktivacije bonusa.",
  },
  {
    question: "Koliko brzo mogu podići dobitke?",
    answer:
      "Brzina isplate ovisi o metodi plaćanja i casino postupcima verifikacije. E-novčanici poput Skrilla i Netellera obično nude najbrže isplate (24-48 sati), bankovni transferi mogu trajati 3-5 radnih dana, dok kreditne kartice obično zahtijevaju 3-5 radnih dana. Prvi put kod povlačenja bit će potrebna verifikacija identiteta što može produžiti proces za 24-48 sati.",
  },
  {
    question: "Moraju li hrvatski igrači platiti porez na casino dobitke?",
    answer:
      "Ne, hrvatski igrači ne plaćaju porez na dobitke ostvarene na licenciranim online casino platformama koje djeluju pod hrvatskom jurisdikcijom. Porez se naplaćuje direktno od casino operatera kroz 15% poreza na bruto prihod. Ovo znači da su svi vaši dobici potpuno vaši bez dodatnih poreznih obveza, pod uvjetom da igrate na legalno licenciranim platformama.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-blue-500/20">
              Pitanja i Odgovori
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">Često Postavljana Pitanja</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Odgovori na najčešća pitanja vezana uz online casino u Hrvatskoj
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="info-card rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
