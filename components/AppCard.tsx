"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  isComingSoon?: boolean;
}

interface AppCardProps {
  app: AppInfo;
  index: number;
}

export function AppCard({ app, index }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative flex flex-col h-full bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 flex items-center justify-center flex-shrink-0 border border-brand-500/20">
              {app.icon ? (
                // Using standard img for static export since next/image needs unoptimized: true anyway
                <img src={app.icon} alt={`${app.name} icon`} className="w-10 h-10 object-contain rounded-xl" />
              ) : (
                <Smartphone className="w-8 h-8 text-brand-500" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-brand-500 transition-colors">
                {app.name}
              </h3>
              {app.isComingSoon ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-500 mt-1">
                  Coming Soon
                </span>
              ) : (
                <p className="text-sm font-medium text-foreground/60">{app.tagline}</p>
              )}
            </div>
          </div>
          
          <p className="text-foreground/70 text-sm flex-1 leading-relaxed">
            {app.description}
          </p>
        </div>
        
        <div className="p-6 pt-0 mt-auto">
          {app.isComingSoon ? (
            <div className="w-full py-2.5 rounded-xl bg-foreground/5 text-foreground/50 text-sm font-medium text-center border border-border/50">
              In Development
            </div>
          ) : (
            <Link 
              href={`/apps/${app.id}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-foreground/5 hover:bg-brand-500 text-foreground hover:text-white text-sm font-medium transition-all duration-300 border border-border/50 hover:border-brand-500"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
