import { Rocket, Target, Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: "About Us | MyLearning Project",
  description: "Learn more about our mission, vision, and the team crafting exceptional digital experiences at MyLearning Project.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      {/* SECTION 1: ABOUT HERO - Professional Light Emerald (matching Home Hero) */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-8 sm:px-12 lg:px-24 flex flex-col justify-center items-center text-center bg-emerald-50/80 text-black overflow-hidden">
        {/* Subtle Overlay Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grid-texture"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/95 pointer-events-none"></div>

        <div className="w-full relative z-10">
          <ScrollReveal baseDelay={100} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-lg text-xs font-bold mb-8 border border-emerald-200 shadow-sm uppercase tracking-widest backdrop-blur-sm">
            About the Mission
          </ScrollReveal>
          
          <ScrollReveal baseDelay={200}>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight italic">
              Crafting <span className="text-emerald-600 not-italic">Exceptional</span> <br /> Digital Stories
            </h1>
          </ScrollReveal>
          
          <ScrollReveal baseDelay={300}>
            <p className="text-xl sm:text-2xl text-slate-500 max-w-4xl mx-auto mb-10 leading-relaxed italic text-center font-medium">
              MyLearning Project is an elite digital consortium dedicated to architecting absolute brand authority through high-complexity technology and creative design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION - Unified Full-Width Grid */}
      <section className="py-16 bg-white">
        <div className="w-full px-8 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <ScrollReveal baseDelay={100} className="space-y-10">
              <div className="p-10 lg:p-16 rounded-3xl border border-slate-100 bg-white shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Our Core Objective</h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 italic">Prosperity through Strategic Discovery.</h3>
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed text-justify italic mb-8 font-medium">
                  Founded with the vision of bridging the gap between high-complexity technology and sustainable market growth, MyLearning Project stands as a premier beacon for digital transformation and absolute brand authority.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-xs border border-emerald-100 uppercase tracking-widest">Innovation</span>
                  <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-lg font-bold text-xs border border-slate-100 uppercase tracking-widest">Strategic Growth</span>
                  <span className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs uppercase tracking-widest shadow-md">Total Excellence</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <AboutGridCard 
                icon={<Rocket />}
                title="Absolute Performance"
                desc="We architect ultra-fast digital ecosystems using the latest technological stacks for maximum technical SEO and operational excellence."
              />
              <AboutGridCard 
                icon={<Target />}
                title="Strategic Aesthetics"
                desc="Our design philosophy centers on premium visual alignment, accessibility, and intuitive interfaces that drive conversion and brand status."
              />
              <AboutGridCard 
                icon={<Heart />}
                title="Partner Equilibrium"
                desc="We place our long-term partners at the core of our operations, ensuring that every strategic move strictly exceeds global expectations."
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* SECTION 3: STATS - Precise Horizontal Alignment */}
      <section className="pb-24 bg-white">
        <div className="w-full px-8 sm:px-12 lg:px-24">
          <ScrollReveal baseDelay={300}>
            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16 lg:p-24 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent transition-opacity"></div>
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 text-center">
                <StatBox num="50+" label="Projects" />
                <StatBox num="30+" label="Clients" />
                <StatBox num="5+" label="Years" />
                <StatBox num="24/7" label="Support" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AboutGridCard({ icon, title, desc, index = 0 }: { icon: React.ReactNode, title: string, desc: string, index?: number }) {
  return (
    <ScrollReveal baseDelay={index * 100}>
      <div className="flex items-center gap-6 p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all group shadow-sm">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-emerald-500/5 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl lg:text-3xl font-bold text-black mb-2 italic">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-base lg:text-lg italic">{desc}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function StatBox({ num, label }: { num: string, label: string }) {
  return (
    <div className="space-y-4">
      <div className="text-6xl lg:text-8xl font-bold text-emerald-600 mb-1 font-serif italic tracking-tight">{num}</div>
      <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">{label}</div>
    </div>
  );
}
