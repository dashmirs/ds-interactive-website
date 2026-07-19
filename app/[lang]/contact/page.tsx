import { getDictionary, Locale } from "@/dictionaries";
import { Mail } from "lucide-react";

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[70vh] flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {dict.header.contact}
          </h1>
          <p className="text-xl text-foreground/70">
            {dict.footer.description}
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold">Na Kontaktoni / Contact Us</h2>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              Keni ndonjë pyetje rreth aplikacioneve tona ose dëshironi të bashkëpunoni? Na shkruani në emailin tonë zyrtar dhe do t'ju përgjigjemi sa më shpejt të jetë e mundur.
            </p>

            <a 
              href="mailto:hello@dsinteractive.com"
              className="inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-8 text-base font-medium text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-500 hover:scale-105 active:scale-95"
            >
              hello@dsinteractive.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
