import Link from "next/link";
import { getDictionary, Locale } from "@/dictionaries";

export function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <footer className="w-full border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
              DS Interactive
            </h3>
            <p className="text-sm text-foreground/70 max-w-xs">
              {dict.footer.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base font-semibold">{dict.footer.links}</h4>
            <nav className="flex flex-col space-y-2">
              <Link href={`/${lang}/#apps`} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                {dict.footer.ourApps}
              </Link>
              <Link href={`/${lang}/privacy`} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                {dict.footer.privacyPolicy}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">{dict.footer.connect}</h4>
            <nav className="flex flex-col space-y-2">
              <Link href={`/${lang}/contact`} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                {dict.footer.contactUs}
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {new Date().getFullYear()} DS Interactive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
