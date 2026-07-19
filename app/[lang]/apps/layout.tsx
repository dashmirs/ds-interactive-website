import { getApps } from "@/data/apps";
import { Locale } from "@/dictionaries";
import { SidebarNav } from "./SidebarNav";

export default async function AppsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const apps = getApps(lang as Locale).filter((a) => !a.isComingSoon);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 lg:w-72 shrink-0">
          <SidebarNav apps={apps} lang={lang as Locale} />
        </aside>
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
