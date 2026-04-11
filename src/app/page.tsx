'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Share2, MousePointer2, ArrowRight, FileText, Globe, Mail, Fingerprint, LineChart, Layout, Zap, ShieldCheck, Target, TrendingUp, Layers } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<{ text: string, desc?: string, icon: React.ReactNode } | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (expandedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedFeature]);

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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-lg text-xs font-bold border border-emerald-200 shadow-sm uppercase tracking-widest backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Accelerating Digital Excellence
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight italic opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Architecting <br />
                <span className="text-emerald-600 not-italic">Market Dominance</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-emerald-900/80 max-w-xl leading-relaxed italic opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Establishing absolute brand authority through data-driven strategic engineering and premium digital excellence at <span className="text-black font-bold">MyLearning Project</span>.
              </p>
              
              <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">Global Influence</h2>
                <h3 className="text-5xl lg:text-7xl font-bold text-black leading-tight italic">
                  Executive Equilibrium.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem onClick={() => setExpandedFeature({ text: "Predictive Data Intelligence", desc: "Leveraging machine learning to analyze market shifts and predict consumer sentiment with 99% accuracy.", icon: <Zap className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "Predictive Data Intelligence", desc: "Leveraging machine learning to analyze market shifts and predict consumer sentiment with 99% accuracy.", icon: <Zap className="w-8 h-8" /> })} icon={<Zap className="w-5 h-5" />} text="Predictive Data Intelligence" />
                <FeatureItem onClick={() => setExpandedFeature({ text: "High-Stakes Strategic Teams", desc: "Our elite consortium of digital architects and business strategists driving unparalleled execution speed.", icon: <ShieldCheck className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "High-Stakes Strategic Teams", desc: "Our elite consortium of digital architects and business strategists driving unparalleled execution speed.", icon: <ShieldCheck className="w-8 h-8" /> })} icon={<ShieldCheck className="w-5 h-5" />} text="High-Stakes Strategic Teams" />
                <FeatureItem onClick={() => setExpandedFeature({ text: "Proprietary Growth Models", desc: "Custom-built acceleration algorithms designed to exponentially scale your total addressable market.", icon: <TrendingUp className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "Proprietary Growth Models", desc: "Custom-built acceleration algorithms designed to exponentially scale your total addressable market.", icon: <TrendingUp className="w-8 h-8" /> })} icon={<TrendingUp className="w-5 h-5" />} text="Proprietary Growth Models" />
                <FeatureItem onClick={() => setExpandedFeature({ text: "Institutional Partnership", desc: "A white-glove executive relationship establishing absolute alignment with your brand's core vision.", icon: <Target className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "Institutional Partnership", desc: "A white-glove executive relationship establishing absolute alignment with your brand's core vision.", icon: <Target className="w-8 h-8" /> })} icon={<Target className="w-5 h-5" />} text="Institutional Partnership" />
                <FeatureItem onClick={() => setExpandedFeature({ text: "Scalable Market Expansion", desc: "Infrastructure designed for rapid international deployment and localized market sovereignty.", icon: <Globe className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "Scalable Market Expansion", desc: "Infrastructure designed for rapid international deployment and localized market sovereignty.", icon: <Globe className="w-8 h-8" /> })} icon={<Globe className="w-5 h-5" />} text="Scalable Market Expansion" />
                <FeatureItem onClick={() => setExpandedFeature({ text: "Native Brand Sovereignty", desc: "Deep psychological positioning ensuring your brand commands visceral loyalty and unparalleled recognition.", icon: <Fingerprint className="w-8 h-8" /> })} onMouseEnter={() => setExpandedFeature({ text: "Native Brand Sovereignty", desc: "Deep psychological positioning ensuring your brand commands visceral loyalty and unparalleled recognition.", icon: <Fingerprint className="w-8 h-8" /> })} icon={<Fingerprint className="w-5 h-5" />} text="Native Brand Sovereignty" />
              </div>
            </div>

            {/* Foundational Mission Portion */}
            <div className="lg:w-1/3 w-full lg:sticky lg:top-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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

      {/* Feature Modal Overlay */}
      {expandedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 opacity-0 animate-fade-in-up" style={{ animationDuration: '400ms' }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
            onClick={() => setExpandedFeature(null)}
          ></div>
          
          {/* Modal Container */}
          <div 
            onMouseLeave={() => setExpandedFeature(null)}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="px-8 py-8 lg:px-12 lg:py-10 border-b border-slate-100 flex justify-between items-start bg-slate-50/30">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
                  {expandedFeature.icon}
                </div>
                <div>
                  <span className="px-4 py-1.5 bg-emerald-100/80 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-50 mb-4 inline-block font-heading">
                    Strategic Execution
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-black italic tracking-tight leading-none mb-2">
                    {expandedFeature.text}
                  </h2>
                </div>
              </div>
              <button 
                onClick={() => setExpandedFeature(null)}
                className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 hover:-rotate-90 transition-all border border-slate-100 flex-shrink-0 shadow-sm text-xl"
              >
                ✕
              </button>
            </div>
            
            {/* Modal Scrollable Body */}
            <div className="p-8 lg:p-12 overflow-y-auto overflow-x-hidden">
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-12 font-medium tracking-tight">
                "{expandedFeature.desc}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <div className="bg-emerald-50/30 rounded-3xl p-8 lg:p-10 border border-emerald-100/50 shadow-sm">
                  <h4 className="text-emerald-800 font-bold uppercase tracking-widest text-xs mb-6 font-heading flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Market Dominance
                  </h4>
                  <ul className="space-y-4 text-slate-600 text-sm italic font-medium leading-relaxed">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                      Execution pathways designed to outmaneuver all legacy competitors.
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                      Maximum yield generation established from day one protocol active.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100/80 shadow-sm">
                  <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-6 font-heading flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Core Methodology
                  </h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {['Precision Analysis', 'Agile Execution', 'Zero-Trust Operations', 'Aesthetic Superiority'].map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm hover:border-emerald-500/30 hover:text-emerald-700 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ icon, title, desc, iconClass = "text-emerald-600", index = 0 }: { icon: React.ReactNode, title: string, desc: string, iconClass?: string, index?: number }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
      <div className={`w-12 h-12 bg-emerald-500/5 rounded-xl flex items-center justify-center ${iconClass} mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 italic">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base italic w-full mb-2">{desc}</p>
    </div>
  );
}

function FeatureItem({ icon, text, index = 0, onClick, onMouseEnter }: { icon: React.ReactNode, text: string, index?: number, onClick?: () => void, onMouseEnter?: () => void }) {
  return (
    <div 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all group shadow-sm hover:shadow-md opacity-0 animate-fade-in-up cursor-pointer" 
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="text-lg lg:text-xl font-bold text-slate-800 tracking-tight transition-transform group-hover:translate-x-1 italic">{text}</span>
    </div>
  );
}
