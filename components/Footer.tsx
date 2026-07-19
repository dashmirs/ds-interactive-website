import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400 mb-4">
              DS Interactive
            </h3>
            <p className="text-sm text-foreground/70 max-w-xs">
              Crafting premium mobile experiences for Android and iOS.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/#apps" className="hover:text-brand-500 transition-colors">
                  Our Apps
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a 
                  href="mailto:hello@dsinteractive.com" 
                  className="flex items-center gap-2 hover:text-brand-500 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@dsinteractive.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} DS Interactive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
