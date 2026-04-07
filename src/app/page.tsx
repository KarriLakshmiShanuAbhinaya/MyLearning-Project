'use client';

import Link from 'next/link';
import { Search, Share2, MousePointer2, ArrowRight, FileText, Globe, Mail, Fingerprint, LineChart, Layout, Zap, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* SECTION 1: HERO - Professional Light Emerald Shade */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-8 sm:px-12 lg:px-24 flex flex-col justify-center items-center bg-emerald-50/80 text-black">
        {/* Subtle Overlay Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grid-texture"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/95 pointer-events-none"></div>

        <div className="w-full max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-lg text-xs font-bold border border-emerald-200 shadow-sm uppercase tracking-widest backdrop-blur-sm">
                Accelerating Digital Excellence
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight italic">
                Architecting <br />
                <span className="text-emerald-600 not-italic">Market Dominance</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-emerald-900/80 max-w-xl leading-relaxed italic">
                Establishing absolute brand authority through data-driven strategic engineering and premium digital excellence at <span className="text-black font-bold">MyLearning Project</span>.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white rounded-lg font-bold text-xl hover:bg-slate-900 transition-all duration-300 shadow-2xl active:scale-95"
                >
                  Free Consultation <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/50 aspect-video lg:aspect-auto">
                <img 
                  src="/hero-image.png" 
                  alt="Strategic Workspace" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES - Bordered Cards & Two-Line Content */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="w-full px-8 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-11">
            <ServiceCard 
              icon={<Search />} 
              title="Search Equity" 
              desc="Deep market penetration through structural precision and high-value traffic acquisition architecture." />
            <ServiceCard 
              icon={<Share2 />} 
              title="Social Architecture" 
              desc="Establishing deep brand recognition through strategic community engineering and loyal consortium engagement." />
            <ServiceCard 
              icon={<MousePointer2 />} 
              title="Capital Scaling" 
              desc="Aggressive brand expansion via performance modeling and data-driven predictive market analysis." />
            <ServiceCard 
              icon={<FileText />} 
              title="Authority Assets" 
              desc="High-conversion narratives and strategic positioning through institutional thought-leadership." />
            <ServiceCard 
              icon={<Globe />} 
              title="Ecosystem Engineering" 
              desc="High-performance digital architectures designed for flawless journeys and absolute technical dominance." />
            <ServiceCard 
              icon={<Mail />} 
              title="Retention Flows" 
              desc="Advanced lifecycle modeling and automated protocols for sustained brand loyalty and increased LTV." />
            <ServiceCard 
              icon={<Fingerprint />} 
              title="Legacy Identity" 
              desc="Visceral storytelling for deep symbolic recognition and prestigious alignment with core values." />
            <ServiceCard 
              icon={<LineChart />} 
              title="Strategic Intelligence" 
              desc="Data-driven tactical insights to identify hidden market opportunities and disrupt industry shares." />
            <ServiceCard 
              icon={<Layout />} 
              title="Precision UI/UX" 
              desc="Intuitive user journeys blending aesthetic excellence with strict conversion psychology paradigms." />
            <ServiceCard 
              icon={<FileText />} 
              title="Vertical Research" 
              desc="Deep-dive competitive surveillance and tactical intelligence to guide strategic decision-making." />
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC LEVERAGE - Aesthetic Features */}
      <section className="pb-16 bg-white border-t border-slate-100 pt-16">
        <div className="w-full px-8 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            
            {/* Advantage Portion */}
            <div className="lg:w-2/3 space-y-12">
              <div>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">Global Influence</h2>
                <h3 className="text-5xl lg:text-7xl font-bold text-black leading-tight italic">
                  Executive Equilibrium.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem icon={<Zap className="w-5 h-5" />} text="Predictive Data Intelligence" />
                <FeatureItem icon={<ShieldCheck className="w-5 h-5" />} text="High-Stakes Strategic Teams" />
                <FeatureItem icon={<TrendingUp className="w-5 h-5" />} text="Proprietary Growth Models" />
                <FeatureItem icon={<Target className="w-5 h-5" />} text="Institutional Partnership" />
                <FeatureItem icon={<Globe className="w-5 h-5" />} text="Scalable Market Expansion" />
                <FeatureItem icon={<Fingerprint className="w-5 h-5" />} text="Native Brand Sovereignty" />
              </div>
            </div>

            {/* Foundational Mission Portion */}
            <div className="lg:w-1/3 w-full lg:sticky lg:top-32">
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center shadow-xl group transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                
                <h4 className="text-emerald-700 font-bold uppercase tracking-widest text-[10px] mb-6 font-heading">Our Mission</h4>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight italic text-emerald-900">
                  Precision <br /> Commitment.
                </h3>
                <p className="text-emerald-900/70 text-lg font-medium leading-relaxed max-w-sm mx-auto text-center italic">
                  Every engagement at MyLearning Project is a precision-engineered partnership designed to establish absolute market authority and sustainable digital excellence for modern brands.
                </p>
                <div className="mt-10 pt-8 border-t border-emerald-200">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">Founded on Excellence</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, desc, iconClass = "text-emerald-600" }: { icon: React.ReactNode, title: string, desc: string, iconClass?: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg">
      <div className={`w-12 h-12 bg-emerald-500/5 rounded-xl flex items-center justify-center ${iconClass} mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 italic">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base italic w-full mb-2">{desc}</p>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all group shadow-sm hover:shadow-md">
      <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="text-lg lg:text-xl font-bold text-slate-800 tracking-tight transition-transform group-hover:translate-x-1 italic">{text}</span>
    </div>
  );
}
