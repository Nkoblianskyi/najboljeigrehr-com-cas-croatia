import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Odricanje Odgovornosti | NajboljeIgreHR.com",
  description:
    "Pravne napomene i odricanje odgovornosti za korištenje NajboljeIgreHR.com - važne informacije za sve posjetitelje.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natrag na početnu</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Odricanje Odgovornosti</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-6">
              Važne pravne napomene o korištenju NajboljeIgreHR.com i informacijama koje pružamo.
            </p>
            <p className="text-sm text-gray-500 mt-4">Datum ažuriranja: studeni 2025.</p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-300">
            {/* Opće odricanje */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Opće Odricanje Odgovornosti</h2>
              <p className="leading-relaxed mb-4">
                Sav sadržaj na NajboljeIgreHR.com pruža se isključivo u informativne i zabavne svrhe. Informacije na
                ovoj stranici ne predstavljaju pravni, financijski ili profesionalni savjet. Iako se trudimo osigurati
                točnost i ažurnost sadržaja, ne možemo jamčiti potpunu točnost svih informacija.
              </p>
              <p className="leading-relaxed">
                Korištenjem ove stranice prihvaćate da NajboljeIgreHR.com ne snosi odgovornost za bilo kakve gubitke ili
                štete nastale kao rezultat oslanjanja na informacije objavljene na ovoj stranici.
              </p>
            </section>

            {/* Affiliate napomena */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Affiliate Partnerstva</h2>
              <p className="leading-relaxed mb-4">
                NajboljeIgreHR.com sudjeluje u affiliate marketinškim programima. To znači da možemo primiti proviziju
                kada posjetitelji kliknu na linkove prema casino operaterima i izvrše registraciju ili depozit. Ova
                provizija ne utječe na cijenu ili uvjete za vas kao korisnika.
              </p>
              <div className="border border-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Naša Obveza Prema Vama</h3>
                <p className="text-sm mb-3">Unatoč affiliate odnosima, jamčimo:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                    <span>Recenzije ostaju objektivne i temelje se na stvarnom testiranju</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                    <span>Ne promoviramo casine koje smatramo nesigurnima ili nepouzdanima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                    <span>Provizija ne utječe na pozicioniranje ili ocjene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                    <span>Transparentno navodimo sve bitne informacije</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Točnost informacija */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Točnost Informacija</h2>
              <p className="leading-relaxed mb-4">
                Online casino industrija podložna je čestim promjenama. Bonusi, promocije, uvjeti korištenja i druge
                informacije mogu se promijeniti bez prethodne najave. Iako redovito ažuriramo naš sadržaj, preporučujemo
                da uvijek provjerite aktualne uvjete izravno na web stranici casino operatera prije registracije.
              </p>
              <p className="leading-relaxed">
                NajboljeIgreHR.com ne snosi odgovornost za bilo kakve razlike između informacija na našoj stranici i
                aktualnih uvjeta na stranicama casino operatera.
              </p>
            </section>

            {/* Rizici kockanja */}
            <section className="bg-red-950/30 border border-red-900/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Upozorenje o Rizicima Kockanja</h2>
              <p className="leading-relaxed mb-4">
                Kockanje uključuje značajne financijske rizike. Možete izgubiti novac, a u nekim slučajevima razviti
                ovisnost koja može negativno utjecati na vaš život, odnose i financije.
              </p>
              <div className="space-y-3">
                <p className="font-bold text-white">Molimo zapamtite:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Nikada ne kockajte s novcem koji si ne možete priuštiti izgubiti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Kockanje nije način za zaradu ili rješavanje financijskih problema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Postavite stroge vremenske i financijske limite prije igranja</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Ako osjećate da gubite kontrolu, odmah potražite pomoć</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Dobno ograničenje */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dobna Ograničenja</h2>
              <p className="leading-relaxed mb-4">
                Sav sadržaj na NajboljeIgreHR.com namijenjen je isključivo osobama starijim od 18 godina. Online
                kockanje je ilegalno za maloljetnike u Hrvatskoj i većini jurisdikcija.
              </p>
              <div className="flex items-center gap-4 border border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-yellow-400">18+</span>
                <p className="text-sm">
                  Ova stranica sadrži sadržaj o kockanju i namijenjena je samo punoljetnim osobama. Maloljetnici ne
                  smiju koristiti ovu stranicu niti se registrirati na casino platformama.
                </p>
              </div>
            </section>

            {/* Treće strane */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Linkovi na Treće Strane</h2>
              <p className="leading-relaxed mb-4">
                Naša stranica sadrži linkove na web stranice trećih strana, uključujući online casine. Nemamo kontrolu
                nad sadržajem, politikama privatnosti ili praksama tih stranica.
              </p>
              <p className="leading-relaxed">
                Klikom na vanjske linkove napuštate NajboljeIgreHR.com i podliježete uvjetima korištenja i politikama
                privatnosti tih stranica. Preporučujemo da pročitate njihove uvjete prije registracije ili korištenja.
              </p>
            </section>

            {/* Zakonska usklađenost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Zakonska Usklađenost</h2>
              <p className="leading-relaxed">
                Vi ste odgovorni za provjeru je li online kockanje legalno u vašoj jurisdikciji. Zakoni o kockanju
                razlikuju se od zemlje do zemlje, a u nekim područjima online kockanje može biti ograničeno ili
                zabranjeno. NajboljeIgreHR.com ne snosi odgovornost za bilo kakvo kršenje lokalnih zakona od strane
                korisnika.
              </p>
            </section>

            {/* Ograničenje odgovornosti */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Ograničenje Odgovornosti</h2>
              <p className="leading-relaxed mb-4">
                U maksimalnoj mjeri dopuštenoj zakonom, NajboljeIgreHR.com, njegovi vlasnici, zaposlenici i partneri
                isključuju svaku odgovornost za:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Gubitke nastale kockanjem na preporučenim platformama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Radnje ili propuste casino operatera</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Netočnosti u informacijama na našoj stranici</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Tehničke probleme ili nedostupnost stranice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Odluke donesene na temelju informacija s naše stranice</span>
                </li>
              </ul>
            </section>

            {/* Promjene */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Izmjene</h2>
              <p className="leading-relaxed">
                Zadržavamo pravo izmjene ovog Odricanja odgovornosti u bilo kojem trenutku. Sve promjene stupaju na
                snagu odmah po objavi na ovoj stranici. Nastavkom korištenja stranice nakon izmjena prihvaćate
                revidirane uvjete.
              </p>
            </section>

            {/* Kontakt */}
            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Pitanja?</h2>
              <p className="leading-relaxed">
                Ako imate pitanja o ovom Odricanju odgovornosti ili bilo kojem drugom aspektu NajboljeIgreHR.com,
                slobodno nas kontaktirajte putem naše web stranice.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
