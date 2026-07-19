"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Locale } from "@/dictionaries";

interface AppCardProps {
  app: any;
  index: number;
  lang: Locale;
  dict: any;
}

export function AppCard({ app, index, lang, dict }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        gyroscope={true}
        className="group relative flex flex-col h-full bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20 transition-all duration-500"
      >
        <div className="p-8 flex flex-col flex-1 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
            {app.icon && (
              <Image 
                src={app.icon} 
                alt={app.name} 
                width={64} 
                height={64} 
                className="rounded-2xl"
              />
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-400 transition-colors">
            {app.name}
          </h3>
          <p className="text-brand-500 font-medium text-sm mb-4">
            {app.localizedTagline}
          </p>
          <p className="text-foreground/70 mb-8 line-clamp-3">
            {app.localizedDescription}
          </p>
          
          <div className="mt-auto">
            {app.isComingSoon ? (
              <span className="inline-flex items-center rounded-full bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground/60">
                {dict.comingSoon}
              </span>
            ) : (
              <Link
                href={`/${lang}/apps/${app.id}`}
                className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors"
              >
                {dict.viewDetails}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Decorative background glow */}
        <div className="absolute -z-10 -top-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-colors duration-500" />
      </Tilt>
    </motion.div>
  );
}
