import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - DS Interactive",
  description: "Get in touch with DS Interactive.",
};

export default function Contact() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Have a question, feedback, or need support for one of our apps? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:hello@dsinteractive.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Support</h4>
                    <p className="text-foreground/60 text-sm group-hover:text-brand-500 transition-colors">
                      hello@dsinteractive.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 text-foreground/60 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-foreground/60 text-sm">
                      Available worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form (Static mailto via action) */}
          <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="mailto:hello@dsinteractive.com" method="post" encType="text/plain" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-y"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-colors shadow-sm"
              >
                Send via Email App
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
