export function SelectionCriteria() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-emerald-500/20">
              Naša Metodologija
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">
              Kako Ocjenjujemo Casino Platforme
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparentan proces evaluacije koji osigurava objektivne i pouzdane preporuke
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Sigurnost i Licenciranje</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Provjeravamo valjanost licence izdane od Ministarstva financija RH, SSL enkripciju, zaštitu osobnih
                podataka i implementaciju sustava za odgovorno kockanje.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Samo casini koji zadovoljavaju sve sigurnosne standarde i regulatorne zahtjeve ulaze u našu selekciju.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Bonusi i Promocije</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Analiziramo ne samo veličinu bonusa već i realnost uvjeta: wagering requirements, vremenska ograničenja,
                maksimalne limite i dopuštene igre.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Preferiramo transparentne uvjete između 30-40x, dok bonuse preko 50x označavamo kao nepovoljne.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Metode Plaćanja</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Testiramo sve dostupne metode s fokusom na brzinu transakcija, naknade i jednostavnost korištenja.
                Provjeravamo brzinu obrade isplata i KYC proces.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Najbolje ocjene dobivaju casini s brzim isplatama (24-48h), minimalnim naknadama i jasnim procesom
                verifikacije.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Kvaliteta Igara</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ocjenjujemo portfolio igara, kvalitetu softvera, dostupnost live casino opcija i raznolikost slots,
                table games i drugih kategorija.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Preferiramo platforme s igrama od renomiranih provajdera poput NetEnt, Microgaming i Evolution Gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
