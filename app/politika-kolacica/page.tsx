import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Kolačića | NajboljeIgreHR.com",
  description:
    "Saznajte kako NajboljeIgreHR.com koristi kolačiće i kako možete upravljati svojim postavkama privatnosti.",
}

export default function CookiePolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Politika Kolačića</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-6">
              Ovaj dokument objašnjava kako NajboljeIgreHR.com koristi kolačiće i slične tehnologije praćenja.
            </p>
            <p className="text-sm text-gray-500 mt-4">Datum ažuriranja: studeni 2025.</p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-300">
            {/* Što su kolačići */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Što Su Kolačići?</h2>
              <p className="leading-relaxed mb-4">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju (računalo, tablet ili mobitel)
                kada posjetite web stranicu. Oni omogućuju stranici da zapamti vaše radnje i preferencije tijekom
                određenog vremenskog razdoblja, tako da ih ne morate svaki put iznova unositi.
              </p>
              <p className="leading-relaxed">
                Kolačići mogu biti "trajni" (ostaju na vašem uređaju dok ih ne izbrišete ili dok ne isteknu) ili
                "sesijski" (brišu se automatski kada zatvorite preglednik).
              </p>
            </section>

            {/* Koje kolačiće koristimo */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Vrste Kolačića Koje Koristimo</h2>

              <div className="space-y-6">
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-3">Neophodni Kolačići</h3>
                  <p className="text-sm mb-3">
                    Ovi kolačići su ključni za funkcioniranje naše stranice. Omogućuju osnovne funkcije poput navigacije
                    i pristupa sigurnim područjima. Bez njih stranica ne bi ispravno radila.
                  </p>
                  <p className="text-xs text-gray-500">
                    Primjer: pamćenje vašeg pristanka na kolačiće, sesijski identifikatori
                  </p>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-3">Analitički Kolačići</h3>
                  <p className="text-sm mb-3">
                    Koristimo analitičke kolačiće za razumijevanje kako posjetitelji koriste našu stranicu. Ovi podaci
                    nam pomažu poboljšati funkcionalnost i korisničko iskustvo. Sve prikupljene informacije su
                    agregirane i anonimne.
                  </p>
                  <p className="text-xs text-gray-500">
                    Primjer: broj posjeta, vrijeme provedeno na stranici, najposjećenije stranice
                  </p>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-3">Funkcionalni Kolačići</h3>
                  <p className="text-sm mb-3">
                    Ovi kolačići omogućuju napredne funkcije i personalizaciju, poput pamćenja vaših preferencija
                    prikaza ili regije. Poboljšavaju vaše iskustvo, ali stranica može raditi i bez njih.
                  </p>
                  <p className="text-xs text-gray-500">Primjer: jezične postavke, preferencije prikaza</p>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-3">Marketinški Kolačići</h3>
                  <p className="text-sm mb-3">
                    Ovi kolačići prate vašu aktivnost na različitim stranicama i koriste se za prikazivanje relevantnih
                    oglasa. Postavljaju ih naši oglašivački partneri i mogu se koristiti za izradu profila vaših
                    interesa.
                  </p>
                  <p className="text-xs text-gray-500">Primjer: personalizirani oglasi, praćenje konverzija</p>
                </div>
              </div>
            </section>

            {/* Treće strane */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Kolačići Trećih Strana</h2>
              <p className="leading-relaxed mb-4">
                Neki kolačići na našoj stranici postavljaju treće strane, uključujući:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Google Analytics - za analizu prometa i ponašanja korisnika</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Affiliate partneri - za praćenje preporuka i konverzija</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Oglašivačke mreže - za prikazivanje personaliziranih oglasa</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Nemamo kontrolu nad kolačićima trećih strana. Preporučujemo da provjerite politike privatnosti tih
                usluga za više informacija.
              </p>
            </section>

            {/* Upravljanje */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Upravljanje Kolačićima</h2>
              <p className="leading-relaxed mb-4">
                Imate kontrolu nad kolačićima na svojem uređaju. Možete ih upravljati na nekoliko načina:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Postavke Preglednika</h3>
                  <p className="text-sm">
                    Većina preglednika omogućuje blokiranje ili brisanje kolačića putem postavki. Potražite opcije u
                    meniju "Privatnost" ili "Sigurnost".
                  </p>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Naš Cookie Banner</h3>
                  <p className="text-sm">
                    Prilikom prvog posjeta možete odabrati koje kategorije kolačića prihvaćate. Postavke možete
                    promijeniti u bilo kojem trenutku.
                  </p>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Opt-Out Alati</h3>
                  <p className="text-sm">
                    Za Google Analytics možete instalirati dodatak za preglednik koji sprječava praćenje. Slični alati
                    postoje i za druge usluge.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Napomena: Blokiranje kolačića može utjecati na funkcionalnost naše stranice i vaše korisničko iskustvo.
              </p>
            </section>

            {/* Ažuriranja */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Promjene Politike</h2>
              <p className="leading-relaxed">
                Možemo povremeno ažurirati ovu Politiku kolačića kako bismo odražavali promjene u tehnologiji,
                zakonodavstvu ili našim praksama. Datum zadnjeg ažuriranja uvijek je naveden na vrhu stranice.
                Preporučujemo povremeno pregledavanje ove stranice.
              </p>
            </section>

            {/* Kontakt */}
            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Pitanja?</h2>
              <p className="leading-relaxed">
                Ako imate pitanja o našoj upotrebi kolačića ili želite više informacija, slobodno nas kontaktirajte
                putem naše web stranice. Rado ćemo vam pomoći i odgovoriti na sva vaša pitanja vezana uz privatnost.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
