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
    { name: dict.header.apps, href: `/${lang}/#apps` },
    { name: dict.header.about, href: `/${lang}/#about` },
    { name: dict.header.contact, href: `/${lang}/contact` },
  ];

  // Helper to switch language keeping the same path
  const switchLanguagePath = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split('/');
    segments[1] = newLang; // Replace the lang segment
    return segments.join('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
                DS Interactive
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
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
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border/50 rounded-xl shadow-lg py-2 z-50">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchLanguagePath(l)}
                      onClick={() => setIsLangMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:bg-foreground/5 hover:text-foreground uppercase text-center"
                    >
                      {l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'Shqip'}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-brand-400" />
                ) : (
                  <Moon className="h-5 w-5 text-brand-600" />
                )}
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 p-2 rounded-md hover:bg-foreground/5 transition-colors focus:outline-none"
              >
                <Globe className="h-4 w-4 text-foreground/70" />
                <span className="text-xs font-medium text-foreground/70 uppercase">{lang}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-card border border-border/50 rounded-xl shadow-lg py-2 z-50">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchLanguagePath(l)}
                      onClick={() => setIsLangMenuOpen(false)}
                      className="block px-4 py-2 text-xs text-foreground/70 hover:bg-foreground/5 hover:text-foreground uppercase text-center"
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors focus:outline-none"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-brand-400" />
                ) : (
                  <Moon className="h-5 w-5 text-brand-600" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-foreground/70 hover:text-foreground focus:outline-none"
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
            className="md:hidden border-t border-border/40 bg-background"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
