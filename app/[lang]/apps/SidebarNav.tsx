"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/dictionaries";
import { motion } from "framer-motion";

export function SidebarNav({ apps, lang }: { apps: any[]; lang: Locale }) {
  const pathname = usePathname();

  return (
    <div className="sticky top-24">
      <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-foreground/50">
        Apps
      </h3>
      <nav className="space-y-2">
        {apps.map((app) => {
          const href = `/${lang}/apps/${app.id}`;
          const isActive = pathname === href;
          
          return (
            <Link
              key={app.id}
              href={href}
              className={`block px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? "bg-brand-500/10 text-brand-500 font-semibold border border-brand-500/20" 
                  : "hover:bg-foreground/5 text-foreground/70 hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1.5 h-6 bg-brand-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {app.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
