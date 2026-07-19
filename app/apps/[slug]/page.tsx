import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import { Download, ChevronRight, Smartphone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = apps.find((a) => a.id === params.slug);
  if (!app) {
    return {
      title: "App Not Found - DS Interactive",
    };
  }
  return {
    title: `${app.name} - DS Interactive`,
    description: app.description,
  };
}

export default function AppPage({ params }: { params: { slug: string } }) {
  const app = apps.find((a) => a.id === params.slug);

  if (!app) {
    notFound();
  }

  // Schema markup for SoftwareApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    operatingSystem: "ANDROID, iOS",
    applicationCategory: "MobileApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen py-12 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-foreground/60 mb-8">
          <Link href="/#apps" className="hover:text-brand-500 transition-colors">
            Apps
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">{app.name}</span>
        </nav>

        {/* App Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 flex items-center justify-center flex-shrink-0 border border-brand-500/20 shadow-xl shadow-brand-500/10">
            {app.icon ? (
              <img src={app.icon} alt={`${app.name} icon`} className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl" />
            ) : (
              <Smartphone className="w-16 h-16 text-brand-500" />
            )}
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {app.name}
            </h1>
            <p className="text-xl text-foreground/70 mb-8 text-balance">
              {app.tagline}
            </p>
            
            {!app.isComingSoon ? (
              <div className="flex flex-wrap gap-4">
                {app.playStoreUrl && (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Google Play
                  </a>
                )}
                {app.appStoreUrl && (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-500 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    App Store
                  </a>
                )}
              </div>
            ) : (
              <div className="inline-flex items-center px-4 py-2 rounded-full font-medium bg-brand-500/10 text-brand-500">
                Coming Soon
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">About {app.name}</h2>
              <div className="prose prose-zinc dark:prose-invert">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {app.description}
                </p>
              </div>
            </section>
            
            {/* Screenshots Gallery Placeholder */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-shrink-0 w-64 h-[400px] bg-foreground/5 rounded-2xl border border-border/50 flex items-center justify-center snap-center">
                    <span className="text-foreground/40 font-medium">Screenshot {i}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h3 className="font-bold text-lg mb-4">App Information</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-foreground/60 mb-1">Developer</dt>
                  <dd className="font-medium">DS Interactive</dd>
                </div>
                <div>
                  <dt className="text-foreground/60 mb-1">Category</dt>
                  <dd className="font-medium">Utilities / Games</dd>
                </div>
                <div>
                  <dt className="text-foreground/60 mb-1">Price</dt>
                  <dd className="font-medium">Free (with in-app purchases)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
