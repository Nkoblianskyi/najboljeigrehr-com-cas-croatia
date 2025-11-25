export function AboutUs() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-emerald-500/20">
              O Nama
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">
              Vaš Pouzdani Partner u Svijetu Online Casina
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparentne recenzije i detaljne analize od stručnog tima s dugogodišnjim iskustvom
            </p>
          </div>

          <div className="space-y-8">
            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Vodeći Casino Portal u Hrvatskoj</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-emerald-400">NajboljeIgreHR.com</strong> je najautoritativnija platforma za
                recenzije online casino operatera u Hrvatskoj. Naš tim stručnjaka s dugogodišnjim iskustvom donosi vam
                najdetaljnije i najtočnije informacije o dostupnim platformama.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Svaka platforma prolazi kroz temeljit proces testiranja koji obuhvaća sigurnost, kvalitetu igara,
                korisničku podršku i brzinu transakcija.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Detaljna Analiza i Testiranje</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Naša metodologija evaluacije je sveobuhvatna. Testiramo sve aspekte - od autentičnosti licenci i
                sigurnosnih certifikata, preko fer igre i RNG tehnologije, do dostupnosti korisničke podrške na
                hrvatskom jeziku.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Redovito ažuriramo sve recenzije kako bismo pratili promjene u kvaliteti usluga. Vaša sigurnost je naš
                glavni prioritet.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Potpuna Neovisnost</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Iako ostvarujemo prihode kroz partnerske programe, naš uredivački integritet ostaje potpuno neovisan.
                Nijedna platforma ne može kupiti bolju ocjenu - svi rezultati temelje se na objektivnim kriterijima.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Aktivno promičemo odgovorno kockanje i surađujemo s vodećim organizacijama za zaštitu igrača.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-emerald-500/20">
              <h3 className="font-bold text-2xl text-white mb-4">Zajednica i Podrška</h3>
              <p className="text-gray-300 leading-relaxed">
                Izgradili smo zajednicu od preko 50,000 zadovoljnih korisnika širom Hrvatske koji nam vjeruju pri izboru
                online casino platformi. Naš tim je dostupan za sva pitanja i savjete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
