import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Privatnosti | NajboljeIgreHR.com",
  description: "Politika privatnosti NajboljeIgreHR.com - kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
}

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Politika Privatnosti</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-6">
              NajboljeIgreHR.com poštuje vašu privatnost i posvećen je zaštiti vaših osobnih podataka u skladu s GDPR-om
              i hrvatskim zakonodavstvom.
            </p>
            <p className="text-sm text-gray-500 mt-4">Datum ažuriranja: studeni 2025.</p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-300">
            {/* Uvod */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Uvod</h2>
              <p className="leading-relaxed mb-4">
                Ova Politika privatnosti opisuje kako NajboljeIgreHR.com ("mi", "nas", "naš") prikuplja, koristi,
                pohranjuje i štiti informacije koje prikupljamo od posjetitelja naše web stranice. Molimo vas da
                pažljivo pročitate ovaj dokument kako biste razumjeli naše prakse u vezi s vašim podacima.
              </p>
              <p className="leading-relaxed">
                Korištenjem naše stranice pristajete na prakse opisane u ovoj Politici privatnosti. Ako se ne slažete s
                bilo kojim dijelom, molimo vas da ne koristite našu stranicu.
              </p>
            </section>

            {/* Koje podatke prikupljamo */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Podaci Koje Prikupljamo</h2>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">Automatski Prikupljeni Podaci</h3>
              <p className="leading-relaxed mb-4">
                Kada posjetite našu stranicu, automatski prikupljamo određene tehničke informacije:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>IP adresa i približna geografska lokacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Vrsta i verzija preglednika</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Operativni sustav uređaja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Stranice koje ste posjetili i vrijeme provedeno</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Izvor dolaska (referrer)</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">Dobrovoljno Pruženi Podaci</h3>
              <p className="leading-relaxed">
                Ako nas kontaktirate putem e-maila ili kontaktnog obrasca, prikupljamo podatke koje nam dobrovoljno
                pružite, poput imena, e-mail adrese i sadržaja vaše poruke.
              </p>
            </section>

            {/* Kako koristimo podatke */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Kako Koristimo Vaše Podatke</h2>
              <p className="leading-relaxed mb-4">Prikupljene podatke koristimo u sljedeće svrhe:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Poboljšanje Stranice</h3>
                  <p className="text-sm">Analiza korištenja pomaže nam optimizirati sadržaj i korisničko iskustvo</p>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Komunikacija</h3>
                  <p className="text-sm">Odgovaranje na vaše upite i pružanje traženih informacija</p>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Sigurnost</h3>
                  <p className="text-sm">Zaštita stranice od zloupotrebe i neovlaštenog pristupa</p>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Pravne Obveze</h3>
                  <p className="text-sm">Ispunjavanje zakonskih i regulatornih zahtjeva</p>
                </div>
              </div>
            </section>

            {/* Dijeljenje podataka */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dijeljenje Podataka s Trećim Stranama</h2>
              <p className="leading-relaxed mb-4">
                Ne prodajemo, ne iznajmljujemo niti na drugi način ne trgujemo vašim osobnim podacima. Međutim, možemo
                dijeliti podatke sa:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <div>
                    <span className="font-bold text-white">Pružateljima usluga</span>
                    <p className="text-sm">Tvrtke koje nam pomažu u radu stranice (hosting, analitika)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <div>
                    <span className="font-bold text-white">Affiliate partnerima</span>
                    <p className="text-sm">Casino operateri mogu primiti informacije o preporukama</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                  <div>
                    <span className="font-bold text-white">Pravnim tijelima</span>
                    <p className="text-sm">Ako je to zakonski obvezno ili za zaštitu naših prava</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Vaša prava */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Vaša Prava</h2>
              <p className="leading-relaxed mb-4">Prema GDPR-u i hrvatskim zakonima, imate sljedeća prava:</p>
              <div className="space-y-3">
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na pristup</span>
                  <span className="text-sm block mt-1">Možete zatražiti kopiju podataka koje imamo o vama</span>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na ispravak</span>
                  <span className="text-sm block mt-1">Možete zatražiti ispravak netočnih podataka</span>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na brisanje</span>
                  <span className="text-sm block mt-1">
                    Možete zatražiti brisanje vaših podataka ("pravo na zaborav")
                  </span>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na ograničenje obrade</span>
                  <span className="text-sm block mt-1">
                    Možete zatražiti ograničenje načina na koji koristimo vaše podatke
                  </span>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na prigovor</span>
                  <span className="text-sm block mt-1">Možete se usprotiviti određenim vrstama obrade</span>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-white">Pravo na prenosivost</span>
                  <span className="text-sm block mt-1">Možete zatražiti prijenos podataka drugom pružatelju</span>
                </div>
              </div>
            </section>

            {/* Sigurnost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Sigurnost Podataka</h2>
              <p className="leading-relaxed">
                Implementirali smo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka od
                neovlaštenog pristupa, gubitka ili uništenja. Koristimo SSL enkripciju, sigurne servere i redovito
                ažuriramo naše sigurnosne protokole. Međutim, nijedna metoda prijenosa putem interneta nije 100%
                sigurna, pa ne možemo jamčiti apsolutnu sigurnost.
              </p>
            </section>

            {/* Zadržavanje */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Zadržavanje Podataka</h2>
              <p className="leading-relaxed">
                Vaše podatke zadržavamo samo onoliko dugo koliko je potrebno za svrhe opisane u ovoj Politici ili koliko
                zahtijeva zakon. Analitički podaci obično se zadržavaju do 26 mjeseci, nakon čega se automatski brišu
                ili anonimiziraju.
              </p>
            </section>

            {/* Maloljetnici */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Zaštita Maloljetnika</h2>
              <p className="leading-relaxed">
                Naša stranica nije namijenjena osobama mlađim od 18 godina. Svjesno ne prikupljamo podatke od
                maloljetnika. Ako ste roditelj ili skrbnik i vjerujete da je vaše dijete pružilo osobne podatke, molimo
                kontaktirajte nas kako bismo poduzeli odgovarajuće mjere.
              </p>
            </section>

            {/* Promjene */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Izmjene Politike</h2>
              <p className="leading-relaxed">
                Zadržavamo pravo ažuriranja ove Politike privatnosti u bilo kojem trenutku. Značajne promjene bit će
                objavljene na ovoj stranici s novim datumom ažuriranja. Preporučujemo povremeno pregledavanje ove
                stranice kako biste bili informirani o našim praksama.
              </p>
            </section>

            {/* Kontakt */}
            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
              <p className="leading-relaxed mb-4">
                Ako imate pitanja o ovoj Politici privatnosti, želite ostvariti svoja prava ili imate bilo kakve
                nedoumice vezane uz zaštitu podataka, slobodno nas kontaktirajte putem naše web stranice.
              </p>
              <p className="leading-relaxed">
                Također imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP) ako smatrate da vaša
                prava nisu poštovana.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
