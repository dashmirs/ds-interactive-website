"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDictionary, Locale, locales } from "@/dictionaries";
import { usePathname } from "next/navigation";

export function Header({ lang }: { lang: Locale }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const dict = getDictionary(lang);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: `/${lang}/` },
    { name: "Apps", href: `/${lang}/#apps` },
    { name: "About Us", href: `/${lang}/#about` },
    { name: "Services", href: `/${lang}/#services` },
    { name: "Contact", href: `/${lang}/contact` },
  ];

  // Helper to switch language keeping the same path
  const switchLanguagePath = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split('/');
    segments[1] = newLang; // Replace the lang segment
    return segments.join('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <span className="text-white font-bold text-sm tracking-tighter">DS</span>
              </div>
              <span className="text-xl font-medium tracking-wide">
                Interactive
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-foreground/5 transition-colors focus:outline-none"
                aria-label="Switch Language"
              >
                <Globe className="h-4 w-4 text-foreground/70" />
                <span className="text-sm font-medium text-foreground/70 uppercase">{lang}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border/50 rounded-xl shadow-lg shadow-black/50 py-2 z-50">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchLanguagePath(l)}
                      onClick={() => setIsLangMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:bg-brand-500/20 hover:text-white uppercase text-center transition-colors"
                    >
                      {l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'Shqip'}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href={`/${lang}/contact`}
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-500 hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link 
              href={`/${lang}/contact`}
              className="inline-flex h-8 items-center justify-center rounded-full bg-brand-600 px-4 text-xs font-medium text-white shadow-lg shadow-brand-500/30 transition-all"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-foreground/70 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-foreground/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/20 flex gap-4">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLanguagePath(l)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium uppercase px-3 py-1 rounded-md ${lang === l ? 'bg-brand-500/20 text-brand-400' : 'text-foreground/70'}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
