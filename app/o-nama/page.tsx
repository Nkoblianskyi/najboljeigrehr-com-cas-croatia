import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O Nama | NajboljeIgreHR.com - Vaš Vodič za Online Casine",
  description:
    "Upoznajte tim NajboljeIgreHR.com - stručnjaci za online casino recenzije u Hrvatskoj s dugogodišnjim iskustvom.",
}

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">O Nama</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-6">
              Dobrodošli na NajboljeIgreHR.com - vodeću hrvatsku platformu za nepristrane recenzije online casina i
              iGaming sadržaja.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-300">
            {/* Tko smo */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Tko Stoji Iza NajboljeIgreHR?</h2>
              <p className="leading-relaxed mb-4">
                NajboljeIgreHR.com okuplja tim iskusnih profesionalaca iz svijeta online kockanja koji su posvetili
                svoju karijeru razumijevanju iGaming industrije. Naši stručnjaci imaju više od desetljeća zajedničkog
                iskustva u analiziranju casino platformi, praćenju tržišnih trendova i testiranju različitih operatera.
              </p>
              <p className="leading-relaxed">
                Svaki član našeg tima donosi jedinstvenu perspektivu - od regulatornih pitanja i sigurnosti, preko
                analize bonusa i promocija, do detaljnog testiranja igara i korisničkog iskustva. Zajedno stvaramo
                sveobuhvatne recenzije koje vam pomažu donijeti informirane odluke.
              </p>
            </section>

            {/* Naša misija */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Naša Misija</h2>
              <p className="leading-relaxed mb-4">
                U moru online casino opcija, naša misija je jednostavna: osigurati da hrvatski igrači imaju pristup
                pouzdanim, objektivnim i ažurnim informacijama o online casinima. Vjerujemo da svaki igrač zaslužuje
                transparentne informacije prije nego što se registrira na bilo kojoj platformi.
              </p>
              <p className="leading-relaxed">
                Kontinuirano pratimo promjene u industriji, ažuriramo naše recenzije i dodajemo nove casine kako bismo
                vam uvijek pružili najrelevantniji sadržaj. Naš cilj nije samo informirati, već i educirati - pomažemo
                vam razumjeti kako funkcioniraju bonusi, koji su uvjeti oklade i na što trebate obratiti pozornost.
              </p>
            </section>

            {/* Metodologija */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Naša Metodologija Ocjenjivanja</h2>
              <p className="leading-relaxed mb-6">
                Svaki casino na NajboljeIgreHR.com prolazi kroz rigorozan proces evaluacije. Ne oslanjamo se na površne
                dojmove - naši recenzenti stvaraju račune, polažu depozite i igraju s pravim novcem kako bi vam pružili
                autentična iskustva.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Licenciranje i Sigurnost</h3>
                  <p className="text-sm">Provjeravamo valjanost licenci, SSL enkripciju i reputaciju operatera</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Ponuda Igara</h3>
                  <p className="text-sm">Analiziramo raznolikost, kvalitetu providera i RTP vrijednosti</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Bonusi i Promocije</h3>
                  <p className="text-sm">Detaljno čitamo uvjete, wagering zahtjeve i stvarnu vrijednost ponuda</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Plaćanja i Isplate</h3>
                  <p className="text-sm">Testiramo brzinu isplata, dostupne metode i eventualne naknade</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Korisnička Podrška</h3>
                  <p className="text-sm">Kontaktiramo podršku i evaluiramo brzinu i kvalitetu odgovora</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Mobilno Iskustvo</h3>
                  <p className="text-sm">Provjeravamo funkcionalnost na različitim uređajima i preglednicima</p>
                </div>
              </div>
            </section>

            {/* Transparentnost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Transparentnost i Affiliate Odnosi</h2>
              <p className="leading-relaxed mb-4">
                U duhu potpune transparentnosti, želimo vas obavijestiti da NajboljeIgreHR.com ostvaruje prihod putem
                affiliate partnerstva s nekim od recenziranih casina. Kada kliknete na naše linkove i registrirate se,
                možemo primiti proviziju od casino operatera.
              </p>
              <p className="leading-relaxed">
                Međutim, ovo nikada ne utječe na naše ocjene ili preporuke. Naša reputacija ovisi o iskrenosti - ako
                casino ne zadovoljava naše standarde, nećemo ga preporučiti bez obzira na potencijalnu zaradu. Uvijek
                stavljamo interese naših čitatelja na prvo mjesto.
              </p>
            </section>

            {/* Odgovorno kockanje */}
            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Posvećenost Odgovornom Kockanju</h2>
              <p className="leading-relaxed mb-4">
                Na NajboljeIgreHR.com snažno podržavamo principe odgovornog kockanja. Kockanje treba biti oblik zabave,
                nikada način za rješavanje financijskih problema ili izvor stresa.
              </p>
              <p className="leading-relaxed">
                Promičemo samo casine koji nude alate za odgovorno igranje poput limita depozita, self-exclusion opcija
                i pristupa organizacijama za pomoć. Ako vi ili netko koga poznajete ima problema s kockanjem, molimo
                potražite stručnu pomoć.
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
              <p className="leading-relaxed">
                Vaše mišljenje nam je važno. Ako imate pitanja, prijedloge ili želite prijaviti problem s nekim od
                casina, slobodno nas kontaktirajte. Trudimo se odgovoriti na sve upite u najkraćem mogućem roku i
                kontinuirano poboljšavamo naš sadržaj na temelju vaših povratnih informacija.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
