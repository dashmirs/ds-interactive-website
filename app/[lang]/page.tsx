import { AppCard } from "@/components/AppCard";
import { getApps } from "@/data/apps";
import { getDictionary, Locale, locales } from "@/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const apps = getApps(lang as Locale);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-background pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            {dict.hero.building} {dict.hero.premium} {dict.hero.mobileExperiences}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            DS Interactive
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apps"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {dict.hero.explore}
            </a>
          </div>
        </div>
      </section>

      {/* Apps Portfolio Section */}
      <section id="apps" className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.portfolio.title}</h2>
            <p className="text-lg text-foreground/70">
              {dict.portfolio.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <AppCard 
                key={app.id} 
                app={app} 
                index={index} 
                lang={lang as Locale}
                dict={dict.appCard} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
