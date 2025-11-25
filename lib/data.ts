export interface Casino {
  id: string
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  terms: string
  isTopChoice?: boolean
  features: string[]
}

export const casinos: Casino[] = [
  {
    id: "favbet",
    name: "Favbet",
    url: "https://www.favbet.hr/",
    bonus: "Do 3000€ + 500 BESPLATNIH VRTNJI",
    logo: "/favbet.svg",
    rating: 9.8,
    votes: 3716,
    terms: "18+ | Odgovorno klađenje | Licencirano | Brze isplate | 24/7 podrška",
    isTopChoice: true,
    features: ["Top Kvote", "Live Casino", "Esports", "Kriptovalute"],
  },
  {
    id: "supersport",
    name: "SuperSport",
    url: "https://www.supersport.hr/",
    bonus: "Do 300€ + 500 BESPLATNIH VRTNJI",
    logo: "/supersport.png",
    rating: 9.5,
    votes: 3364,
    terms: "18+ | Uvjeti vrijede | Samo novi igrači | Uvjeti klađenja 40x | Vrijedi 7 dana | Vidi potpuni T&C",
    features: ["Veliki Jackpoti", "Live Streaming", "Virtual Sport", "Casino Bonus"],
  },
  {
    id: "germania",
    name: "Germania",
    url: "https://www.germaniasport.hr/hr#/",
    bonus: "Do 1000€ + 350 BESPLATNIH VRTNJI + 15€ Besplatna Oklada",
    logo: "/germania.png",
    rating: 9.3,
    votes: 3528,
    terms: "18+ | Uvjeti i odredbe vrijede | Samo za nove kupce | Uvjeti klađenja 30x | Vrijedi 21 dan",
    features: ["Brze Isplate", "Mobilna Aplikacija", "Live Casino", "24/7 Podrška"],
  },

  {
    id: "psk",
    name: "PSK",
    url: "https://www.psk.hr/",
    bonus: "40 WENSHI LION EKSKLUZIVNO U PSK",
    logo: "/psk.webp",
    rating: 9.2,
    votes: 3157,
    terms: "18+ | Igrajte odgovorno | Novi igrači | Promet 35x | 30 dana | Potpuni T&C na web stranici",
    features: ["Ekskluzivne Igre", "Hrvatska Licenca", "Sportsko Klađenje", "Casino"],
  },
]
