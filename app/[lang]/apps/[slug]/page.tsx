import { getAppById, appsData } from "@/data/apps";
import { getDictionary, Locale, locales } from "@/dictionaries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { Download } from "lucide-react";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  locales.forEach((lang) => {
    appsData.forEach((app) => {
      if (!app.isComingSoon) {
        params.push({ lang, slug: app.id });
      }
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const app = getAppById(slug, lang as Locale);
  if (!app) return {};

  return {
    title: `${app.name} | DS Interactive`,
    description: app.localizedDescription,
  };
}

export default async function AppDetails({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const app = getAppById(slug, lang as Locale);
  const dict = getDictionary(lang as Locale);

  if (!app) {
    notFound();
  }

  // Pre-define some mock screenshots based on the app id
  // For ds-player we will use the specific images the user will upload
  const screenshots = app.id === "ds-player" 
    ? [
        "/images/ds-player/1.jpg", 
        "/images/ds-player/2.jpg", 
      ]
    : [
        "/placeholders/screen1.png",
        "/placeholders/screen2.png",
        "/placeholders/screen3.png"
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "operatingSystem": "Android, iOS",
    "applicationCategory": "MobileApplication",
    "description": app.localizedDescription,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <article className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="w-32 h-32 shrink-0 rounded-3xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 flex items-center justify-center shadow-lg border border-border/50">
          {app.icon && (
            <Image 
              src={app.icon} 
              alt={app.name} 
              width={128} 
              height={128} 
              className="rounded-3xl"
            />
          )}
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            {app.name}
          </h1>
          <p className="text-xl text-brand-500 font-medium mb-6">
            {app.localizedTagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-bold text-background shadow hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              {dict.appDetails.downloadPlayStore}
            </a>
            {app.appStoreUrl && app.appStoreUrl !== "#" && (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-foreground/20 bg-background px-8 text-sm font-bold text-foreground shadow-sm hover:border-foreground/40 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                {dict.appDetails.downloadAppStore}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description & Features */}
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h2 className="text-2xl font-bold mb-4">{dict.appDetails.about} {app.name}</h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-8 whitespace-pre-line">
          {app.localizedDescription}
        </p>
        
        {app.localizedFeatures && app.localizedFeatures.length > 0 && (
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm mt-8">
            <h3 className="text-xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {app.localizedFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-500 mr-3 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 4D / 3D Screenshot Showcase */}
      <div>
        <h2 className="text-2xl font-bold mb-8">{dict.appDetails.screenshots}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {screenshots.map((src, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[9/19] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-foreground/10 flex items-center justify-center text-foreground/30 text-sm">
                Foto {idx + 1}
              </div>
              <Image 
                src={src} 
                alt={`${app.name} screenshot ${idx + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
