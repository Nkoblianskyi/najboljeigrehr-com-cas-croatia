export function ResponsibleGaming() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-amber-500/20">
              Odgovorno Kockanje
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">
              Vaša Sigurnost Je Naš Glavni Prioritet
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Online gaming treba biti zabava, nikada obveza ili način zarade
            </p>
          </div>

          <div className="space-y-8">
            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Sigurno i Kontrolirano Iskustvo</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Online gaming osmišljen je kao forma zabave i opuštanja, nikada kao način zarade ili rješavanje
                financijskih problema. Republika Hrvatska ima među najstriktnijim regulatornim okvirom u Evropi, gdje
                sve legalne platforme moraju posjedovati licencu Ministarstva financija i implementirati napredne
                mehanizme zaštite igrača.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Casino operateri koje preporučujemo nude sveobuhvatne alate za samopraćenje - postavljanje personalnih
                dnevnih, sedmičnih ili mjesečnih limita za depozite, gubitke i vrijeme provedeno u igri. Također
                omogućavaju opcije privremenog ili trajnog samoisključenja kroz centralizirani nacionalni registar koji
                važi za sve licencirane operatere u Hrvatskoj.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Prepoznavanje Problema Na Vrijeme</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Identifikacija problematičnog ponašanja u ranoj fazi ključna je za prevenciju ozbiljnijih posljedica.
                Obratite pozornost na sljedeće znakove: igranje s novcem namijenjenim za esencijalne troškove
                (stanarina, hrana, režije), produžene gaming sesije uz pokušaje vraćanja izgubljenog novca,
                zapostavljanje profesionalnih ili porodičnih obaveza, ili uzimanje zajmova isključivo za gaming
                aktivnosti.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Savremene casino platforme koriste napredne AI sustave za prepoznavanje potencijalno problematičnog
                ponašanja. Ovi algoritmi prate obrasce igranja i mogu automatski aktivirati sigurnosne mehanizme -
                obavezne odmorne periode, direktan kontakt sa educiranom podrškom ili privremeno ograničenje pristupa
                računu dok se situacija ne razjasni.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-amber-500/20">
              <h3 className="font-bold text-2xl text-white mb-4">Stručna Pomoć i Podrška Dostupna 24/7</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ako prepoznate znakove problemskog kockanja kod sebe ili vama bliskih osoba, važno je znati da postoji
                profesionalna pomoć. Nikada nije prekasno potražiti podršku:
              </p>
              <div className="space-y-6 pl-6 border-l-2 border-amber-500/30">
                <div>
                  <a
                    href="https://www.gambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 text-xl font-bold hover:text-amber-300 transition-colors"
                  >
                    GambleAware
                  </a>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Vodeća međunarodna organizacija specijalizovana za edukaciju, prevenciju i lječenje ovisnosti o
                    kockanju. Nude širok spektar besplatnih resursa i savjetovanja.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.gamcare.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 text-xl font-bold hover:text-amber-300 transition-colors"
                  >
                    GamCare
                  </a>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Besplatna i potpuno povjerljiva podrška, savjetovanje i terapijski programi dostupni non-stop za sve
                    koji su pogođeni problemom kockanja ili njihove najbliže.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.gamstop.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 text-xl font-bold hover:text-amber-300 transition-colors"
                  >
                    GamStop
                  </a>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Nacionalni servis za samoisključenje koji omogućava kompletnu blokadu pristupa svim licenciranim
                    online gaming platformama na period od 6 mjeseci do 5 godina ili trajno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
