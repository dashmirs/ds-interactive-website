
import { getApps } from "@/data/apps";
import { getDictionary, Locale, locales } from "@/dictionaries";
import { MousePointer2, Zap, Shield, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const apps = getApps(lang as Locale);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* Glow Effects Base */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-900/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-brand-800/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1.5 text-xs font-medium text-brand-300 mb-8 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500 mr-2 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse"></span>
              DS Interactive
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
              WE BUILD<br />EXPERIENCES,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">NOT JUST APPS.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/60 max-w-xl mb-10 leading-relaxed font-light">
              DS Interactive is a creative digital studio that builds high-quality mobile apps with beautiful design, powerful performance and unforgettable 4D experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
              <a href="#apps" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-8 text-base font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all hover:bg-brand-500 hover:scale-105">
                Explore Apps
              </a>
              <a href="#about" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-border/50 bg-background/50 px-8 text-base font-medium text-white hover:bg-white/5 transition-all">
                About Us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="text-sm text-foreground/50 font-medium mb-2 sm:mb-0">Trusted by thousands</div>
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-brand-600 border-2 border-background flex items-center justify-center text-xs font-bold text-white z-10 shadow-lg">
                  2K+
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none" />
            <img src="/images/hero_3d.png" alt="DS Logo 3D" className="w-full max-w-[600px] object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-foreground/40 text-sm font-medium animate-bounce">
          <MousePointer2 className="w-4 h-4" />
          Scroll to explore
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-brand-500 font-semibold tracking-wider text-sm uppercase mb-3">Our Apps</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Apps That<br />Make an Impact</h2>
            </div>
            <p className="text-foreground/50 max-w-md text-lg leading-relaxed font-light">
              We design and develop apps that are not only functional, but also delightful. Each app is crafted with passion, precision and performance in mind.
            </p>
            <a href="#all" className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
              View All Apps
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <div key={app.id} className="group relative rounded-3xl bg-card border border-border/40 overflow-hidden hover:border-brand-500/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />
                <div className="h-72 w-full bg-brand-900/20 flex items-center justify-center p-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <img src={app.icon || '/file.svg'} alt={app.name} className="w-24 h-24 object-contain z-0 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                        <img src={app.icon || '/file.svg'} alt="" className="w-5 h-5 object-contain" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{app.name}</h3>
                    </div>
                    <p className="text-xs text-white/50">{app.localizedTagline || 'Utility'}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                    <span className="text-amber-400">★</span> 4.9
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Emotions Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="text-brand-500 font-semibold tracking-wider text-sm uppercase mb-3">About DS Interactive</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Don't Just Code.<br />
                <span className="text-brand-400">We Create Emotions.</span>
              </h2>
              <p className="text-foreground/50 text-lg leading-relaxed font-light mb-12 max-w-xl">
                At DS Interactive, we combine creativity, technology and innovation to build digital products that connect with people and create real impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 border border-brand-500/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold">Innovative Solutions</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">We use the latest technologies to bring ideas to life.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 border border-brand-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold">Beautiful Design</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">Designs that are modern, elegant and user-friendly.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 border border-brand-500/20">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold">Performance Focused</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">We build fast, reliable and scalable applications.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 border border-brand-500/20">
                    <MousePointer2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold">4D Experiences</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">Taking user experience to the next dimension.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none" />
              <img src="/images/crystal_3d.png" alt="Crystal 3D" className="w-full max-w-[500px] object-contain relative z-10 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats Banner */}
      <section className="pb-24 pt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-card border border-border/50 py-12 px-8 flex flex-wrap justify-between items-center gap-8 shadow-2xl">
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-400 mb-2">25+</div>
              <div className="text-sm text-foreground/50 font-medium">Apps Published</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-400 mb-2">2K+</div>
              <div className="text-sm text-foreground/50 font-medium">Happy Users</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-400 mb-2">4.9</div>
              <div className="text-sm text-foreground/50 font-medium">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-400 mb-2">10+</div>
              <div className="text-sm text-foreground/50 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
