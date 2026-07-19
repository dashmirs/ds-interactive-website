import { getDictionary, Locale } from "@/dictionaries";

export default async function Privacy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div className="py-12 max-w-4xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {dict.footer.privacyPolicy}
        </h1>
        <p className="text-foreground/60">
          Last updated: {new Date().toLocaleDateString(lang === 'sq' ? 'sq-AL' : lang === 'de' ? 'de-DE' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <section className="space-y-4">
          <p className="text-lg text-foreground/80 leading-relaxed">
            DS Interactive ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by DS Interactive across all our mobile applications available on Google Play Store and Apple App Store.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p className="text-foreground/80 leading-relaxed">
            Most of our applications (including DS Player, DS PDF Pro, and DS Mahjong) are designed to work offline and do not collect, store, or transmit your personal data to our servers. Any data processed (such as local media files or PDF documents) remains entirely on your device.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Third-Party Services</h2>
          <p className="text-foreground/80 leading-relaxed">
            Some of our apps may use third-party services (such as Google AdMob for advertising or Firebase Crashlytics for crash reporting). These third-party services may collect information used to identify you in order to provide their services. We recommend reviewing their respective privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Contact Us</h2>
          <p className="text-foreground/80 leading-relaxed">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            <br />
            <a href="mailto:hello@dsinteractive.com" className="text-brand-500 hover:text-brand-400 font-medium mt-2 inline-block">
              hello@dsinteractive.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
