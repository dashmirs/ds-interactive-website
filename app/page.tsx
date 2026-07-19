"use client";

import { motion } from "framer-motion";
import { apps } from "@/data/apps";
import { AppCard } from "@/components/AppCard";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Premium
              </span>{" "}
              Mobile Experiences
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed text-balance">
              DS Interactive crafts high-quality, native and cross-platform applications for Android and iOS. Discover our portfolio of elegant and powerful tools.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pt-8"
            >
              <a 
                href="#apps" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-full transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1"
              >
                Explore Our Apps
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 bg-foreground/[0.02] border-t border-border/40 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              From productivity tools to engaging games, we build applications that users love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {apps.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
