import { AppInfo } from "@/components/AppCard";

export const apps: AppInfo[] = [
  {
    id: "ds-mahjong",
    name: "DS Mahjong",
    tagline: "Classic Mahjong Solitaire",
    description: "Experience the classic board game Mahjong Solitaire with modern design, relaxing music, and intuitive controls. Built with React Native for a smooth experience on both iOS and Android.",
    icon: "/placeholders/mahjong-icon.png",
    playStoreUrl: "#",
    appStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "ds-pdf-pro",
    name: "DS PDF Pro",
    tagline: "Your Ultimate PDF Editor",
    description: "A powerful, native Android application written in Kotlin to easily merge, split, compress, protect, rotate, and sign your PDF documents securely on the go.",
    icon: "/placeholders/pdf-icon.png",
    playStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "alquranplayer",
    name: "AlQuranPlayer",
    tagline: "Beautiful Audio Quran",
    description: "Listen to the Holy Quran with a beautifully designed, native Android audio player. Features high-quality recitations, offline support, and intuitive playback controls.",
    icon: "/placeholders/quran-icon.png",
    playStoreUrl: "#",
    isComingSoon: false,
  },
  {
    id: "coming-soon-1",
    name: "Secret Project",
    tagline: "Next-gen utility app",
    description: "We are working on a revolutionary new utility app that will change the way you manage your daily tasks. Stay tuned for updates!",
    isComingSoon: true,
  }
];
