import { casinos } from "@/lib/data"
import { HeroSection } from "@/components/hero-section"
import { CasinoCard } from "@/components/casino-card"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { SelectionCriteria } from "@/components/selection-criteria"
import { FaqSection } from "@/components/faq-section"
import { PopularBonuses } from "@/components/popular-bonuses"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { WelcomeModal } from "@/components/welcome-modal"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <section
        id="casino-list"
        className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-10 max-w-[1350px] relative z-10">


          <div className="flex flex-col gap-10">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>

          <div className="text-center mt-24">
            <p className="text-slate-400 text-sm leading-relaxed">
              * Primjenjuju se uvjeti i odredbe. Kockanje može biti ovisnost. Igrajte odgovorno. 18+
            </p>
          </div>
        </div>
      </section>

      <AboutUs />
      <ResponsibleGaming />
      <SelectionCriteria />
      <PopularBonuses casinos={casinos} />
      <FaqSection />
      <Footer />
      <CookieConsent />
      <WelcomeModal />
      <ScrollToTopButton />
    </>
  )
}
