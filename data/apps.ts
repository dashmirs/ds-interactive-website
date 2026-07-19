import { Locale } from "@/dictionaries";

export interface LocalizedString {
  en: string;
  de: string;
  sq: string;
}

export interface AppInfo {
  id: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  features?: LocalizedString[];
  icon?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  isComingSoon?: boolean;
}

export const appsData: AppInfo[] = [
  {
    id: "ds-player",
    name: "DS Player",
    tagline: {
      en: "Offline Music & Video Player",
      de: "Offline Musik- & Video-Player",
      sq: "Media Player Offline për Muzikë & Video"
    },
    description: {
      en: "Enjoy your favorite music and videos anytime, anywhere with DS Player. No internet? No problem. DS Player lets you play all your local media completely offline, giving you a fast, smooth, and private entertainment experience.",
      de: "Genießen Sie Ihre Lieblingsmusik und -videos jederzeit und überall mit dem DS Player. Kein Internet? Kein Problem. Mit dem DS Player können Sie alle Ihre lokalen Medien komplett offline abspielen und erhalten ein schnelles, reibungsloses und privates Unterhaltungserlebnis.",
      sq: "Shijo muzikën dhe videot e tua të preferuara në çdo kohë, kudo me DS Player. Nuk keni internet? Asnjë problem. DS Player ju lejon të luani të gjitha mediat tuaja lokale plotësisht offline, duke ju ofruar një eksperiencë të shpejtë, të qetë dhe private."
    },
    features: [
      {
        en: "Offline Music Player – Listen to your favorite songs without an internet connection.",
        de: "Offline Musik-Player – Hören Sie Ihre Lieblingssongs ohne Internetverbindung.",
        sq: "Muzikë Offline – Dëgjoni këngët tuaja të preferuara pa internet."
      },
      {
        en: "Offline Video Player – Watch your videos anytime, anywhere.",
        de: "Offline Video-Player – Sehen Sie sich Ihre Videos jederzeit und überall an.",
        sq: "Video Offline – Shikoni videot tuaja kudo."
      },
      {
        en: "Beautiful Customization – Personalize the app with your own background photos, colors, themes, and styles.",
        de: "Wunderschöne Anpassung – Personalisieren Sie die App mit Ihren eigenen Hintergrundfotos, Farben, Designs und Stilen.",
        sq: "Personalizim i Bukur – Ndrysho sfondin, ngjyrat dhe temat sipas dëshirës."
      },
      {
        en: "Privacy First – Your media stays on your device. No cloud uploads.",
        de: "Datenschutz an erster Stelle – Ihre Medien bleiben auf Ihrem Gerät. Keine Cloud-Uploads.",
        sq: "Privatësi Maksimale – Mediat mbeten në pajisjen tënde. Asgjë nuk shkon në Cloud."
      }
    ],
    icon: "/images/ds-player/icon.png",
    playStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "ds-mahjong",
    name: "DS Mahjong",
    tagline: {
      en: "Classic Mahjong Solitaire",
      de: "Klassisches Mahjong Solitaire",
      sq: "Lojë Klasike Mahjong Solitaire"
    },
    description: {
      en: "Experience the classic board game Mahjong Solitaire with modern design, relaxing music, and intuitive controls. Built with React Native for a smooth experience on both iOS and Android.",
      de: "Erleben Sie das klassische Brettspiel Mahjong Solitaire mit modernem Design, entspannender Musik und intuitiver Steuerung.",
      sq: "Përjeto lojën klasike Mahjong Solitaire me dizajn modern, muzikë relaksuese dhe kontrolle të thjeshta."
    },
    icon: "/placeholders/mahjong-icon.png",
    playStoreUrl: "#",
    appStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "ds-pdf-pro",
    name: "DS PDF Pro",
    tagline: {
      en: "Your Ultimate PDF Editor",
      de: "Ihr ultimativer PDF-Editor",
      sq: "Editori Yt Përfundimtar i PDF"
    },
    description: {
      en: "A powerful, native Android application written in Kotlin to easily merge, split, compress, protect, rotate, and sign your PDF documents securely on the go.",
      de: "Eine leistungsstarke, native Android-Anwendung, die in Kotlin geschrieben wurde, um Ihre PDF-Dokumente einfach zu bearbeiten.",
      sq: "Aplikacion i fuqishëm Android për të bashkuar, ndarë, kompresuar dhe mbrojtur dokumentet PDF lehtësisht."
    },
    icon: "/placeholders/pdf-icon.png",
    playStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "alquranplayer",
    name: "AlQuranPlayer",
    tagline: {
      en: "Beautiful Audio Quran",
      de: "Wunderschöner Audio-Koran",
      sq: "Kuran Audio i Bukur"
    },
    description: {
      en: "Listen to the Holy Quran with a beautifully designed, native Android audio player. Features high-quality recitations, offline support, and intuitive playback controls.",
      de: "Hören Sie den Heiligen Koran mit einem wunderschön gestalteten, nativen Android-Audioplayer.",
      sq: "Dëgjo Kuranin Famëlartë me një audio player të dizajnuar bukur për Android me recitime të cilësisë së lartë."
    },
    icon: "/placeholders/quran-icon.png",
    playStoreUrl: "#",
    isComingSoon: false,
  }
];

// Helper to get localized app data
export function getApps(locale: Locale) {
  return appsData.map(app => ({
    ...app,
    localizedTagline: app.tagline[locale],
    localizedDescription: app.description[locale],
    localizedFeatures: app.features?.map(f => f[locale])
  }));
}

export function getAppById(id: string, locale: Locale) {
  const app = appsData.find(a => a.id === id);
  if (!app) return null;
  return {
    ...app,
    localizedTagline: app.tagline[locale],
    localizedDescription: app.description[locale],
    localizedFeatures: app.features?.map(f => f[locale])
  };
}
