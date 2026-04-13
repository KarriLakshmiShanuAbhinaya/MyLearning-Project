'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  TrendingUp, 
  BookOpen, 
  Warehouse, 
  Smartphone, 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Briefcase,
  Layers,
  Search,
  Globe,
  Target
} from 'lucide-react';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

// Expanded Elite Project Data (3 Per Category = 18 Total)
const projectsData = [
  { 
    id: 1, 
    category: 'Finance', 
    title: 'Apex Arbitrage', 
    desc: 'Institutional-grade predictive engine designed for real-time asset optimization and risk mitigation across global capital markets.',
    icon: <TrendingUp className="w-5 h-5" />
  },
  { 
    id: 2, 
    category: 'Finance', 
    title: 'Quantum Protocol', 
    desc: 'Distributed ledger infrastructure for low-latency cross-border settlements and liquidity management for banking consortiums.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  { 
    id: 3, 
    category: 'Finance', 
    title: 'Capital Sentinel', 
    desc: 'High-frequency algorithmic framework designed for institutional fiscal dominance and data-driven market surveillance.',
    icon: <Search className="w-5 h-5" />
  },
  { 
    id: 4, 
    category: 'Education', 
    title: 'EduSphere Global', 
    desc: 'Next-generation distributed LMS featuring AI-driven curriculum personalization and predictive analytics for advanced academic tracking.',
    icon: <BookOpen className="w-5 h-5" />
  },
  { 
    id: 5, 
    category: 'Education', 
    title: 'ScholarLink CRM', 
    desc: 'Comprehensive institutional ecosystem designed for enrollment pipe optimization and long-term alumni relations for elite universities.',
    icon: <Zap className="w-5 h-5" />
  },
  { 
    id: 6, 
    category: 'Education', 
    title: 'Nexus Knowledge', 
    desc: 'Decentralized knowledge exchange protocol facilitating world-class global research collaboration across academic verticals.',
    icon: <Globe className="w-5 h-5" />
  },
  { 
    id: 7, 
    category: 'Hospitals', 
    title: 'MedCore Sentinel', 
    desc: 'High-availability health information exchange (HIE) protocol ensuring data integrity for critical care and diagnostic precision.',
    icon: <Warehouse className="w-5 h-5" />
  },
  { 
    id: 8, 
    category: 'Hospitals', 
    title: 'PatientFirst ERP', 
    desc: 'Clinical workflow optimization platform designed to eliminate operational friction and enhance patient-provider touchpoints.',
    icon: <Briefcase className="w-5 h-5" />
  },
  { 
    id: 9, 
    category: 'Hospitals', 
    title: 'VitalTrack AI', 
    desc: 'Predictive health analytics engine designed for real-time monitoring of patient stability and clinical outcome modeling.',
    icon: <Target className="w-5 h-5" />
  },
  { 
    id: 10, 
    category: 'Apps', 
    title: 'Velocity Enterprise', 
    desc: 'Ultra-low latency mobile framework for real-time logistics dominance and field operation synchronization for global supply chains.',
    icon: <Smartphone className="w-5 h-5" />
  },
  { 
    id: 11, 
    category: 'Apps', 
    title: 'OmniChannel Flow', 
    desc: 'High-conversion retail architecture synchronizing physical and digital storefronts with real-time inventory intelligence.',
    icon: <Layers className="w-5 h-5" />
  },
  { 
    id: 12, 
    category: 'Apps', 
    title: 'Zenit Admin Pro', 
    desc: 'Strategic executive application suite designed for administrative dominance and high-performance creative agency workflows.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  { 
    id: 13, 
    category: 'Logistics', 
    title: 'Global Freight Sync', 
    desc: 'High-efficiency supply chain orchestrator for real-time inventory visibility and automated global fleet management.',
    icon: <Globe className="w-5 h-5" />
  },
  { 
    id: 14, 
    category: 'Logistics', 
    title: 'Supply Chain AI', 
    desc: 'Predictive logistics engine designed for lane optimization and real-time operational resilience for global carriers.',
    icon: <TrendingUp className="w-5 h-5" />
  },
  { 
    id: 15, 
    category: 'Logistics', 
    title: 'Port Sentinel', 
    desc: 'Integrated terminal operating system designed for terminal efficiency and real-time berth optimization.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  { 
    id: 16, 
    category: 'Real Estate', 
    title: 'Estate Flow Pro', 
    desc: 'Ultra-high-fidelity property management suite designed for multi-portfolio yield optimization and tenant intelligence.',
    icon: <Briefcase className="w-5 h-5" />
  },
  { 
    id: 17, 
    category: 'Real Estate', 
    title: 'Property Pulse', 
    desc: 'AI-driven commercial property intelligence engine for market valuation and investment pipeline modeling.',
    icon: <Search className="w-5 h-5" />
  },
  { 
    id: 18, 
    category: 'Real Estate', 
    title: 'Urban Ledger', 
    desc: 'High-stakes real estate settlement protocol for high-throughput digital asset exchange across global markets.',
    icon: <Layers className="w-5 h-5" />
  }
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'All';
  const categoryList = ['Finance', 'Education', 'Hospitals', 'Apps', 'Logistics', 'Real Estate'];
  const [expandedProject, setExpandedProject] = useState<typeof projectsData[0] | null>(null);
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedProject]);

  const filteredProjects = category === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      {/* SECTION 1: DYNAMIC HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-8 sm:px-12 lg:px-24 flex flex-col justify-center items-center text-center bg-emerald-50/80 text-black">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grid-texture"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/95 pointer-events-none"></div>

        <div className="w-full relative z-10">
          <ScrollReveal baseDelay={100} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-700 rounded-lg text-xs font-bold mb-8 border border-emerald-200 shadow-sm uppercase tracking-widest backdrop-blur-sm">
            {category === 'All' ? 'Strategic Impact Suite' : `${category} Optimization`}
          </ScrollReveal>
          
          <ScrollReveal baseDelay={200}>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight italic">
              Defining <br />
              <span className="text-emerald-600 not-italic">
                {category === 'All' ? 'Portfolio Excellence' : `${category} Dominance`}
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal baseDelay={300}>
            <p className="text-xl sm:text-2xl text-emerald-900/80 max-w-4xl mx-auto mb-12 leading-relaxed italic text-center font-medium">
              A prestigious showcase of {category === 'All' ? 'cross-sector' : `industry-specific`} digital architectures designed for absolute <span className="text-black font-bold">market dominance</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal baseDelay={400} className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-8">
            <Link
              href="/projects"
              scroll={false}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border shadow-sm ${category === 'All' ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20' : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-600 hover:text-emerald-600'}`}
            >
              All Consortium
            </Link>
            {categoryList.map((cat) => (
              <Link
                key={cat}
                href={`/projects?category=${cat}`}
                scroll={false}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border shadow-sm ${category === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20' : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-600 hover:text-emerald-600'}`}
              >
                {cat}
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: AESTHETIC PROJECT GALLERY */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="w-full px-8 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                desc={project.desc}
                category={project.category}
                icon={project.icon}
                index={index}
                onClick={() => setExpandedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal Overlay Component */}
      {expandedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 opacity-0 animate-fade-in-up" style={{ animationDuration: '400ms' }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
            onClick={() => setExpandedProject(null)}
          ></div>
          
          {/* Modal Container */}
          <div 
            onMouseLeave={() => setExpandedProject(null)}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            
            {/* Modal Header */}
            <div className="px-8 py-8 lg:px-12 lg:py-10 border-b border-slate-100 flex justify-between items-start bg-slate-50/30">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
                  {expandedProject.icon}
                </div>
                <div>
                  <span className="px-4 py-1.5 bg-emerald-100/80 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-50 mb-4 inline-block font-heading">
                    {expandedProject.category} Focus
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-bold text-black italic tracking-tight leading-none mb-2">
                    {expandedProject.title}
                  </h2>
                </div>
              </div>
              <button 
                onClick={() => setExpandedProject(null)}
                className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 hover:-rotate-90 transition-all border border-slate-100 flex-shrink-0 shadow-sm text-xl"
              >
                ✕
              </button>
            </div>
            
            {/* Modal Scrollable Body */}
            <div className="p-8 lg:p-12 overflow-y-auto overflow-x-hidden">
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-12 font-medium tracking-tight">
                "{expandedProject.desc}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {/* Simulated Data: Strategic Implementation */}
                <div className="bg-emerald-50/30 rounded-3xl p-8 lg:p-10 border border-emerald-100/50 shadow-sm">
                  <h4 className="text-emerald-800 font-bold uppercase tracking-widest text-xs mb-6 font-heading flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Architecture & Impact
                  </h4>
                  <ul className="space-y-4 text-slate-600 text-sm italic font-medium leading-relaxed">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                      Cloud-native infrastructure aligned with institutional data standards and zero-trust security.
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                      High-throughput data modeling configured for predictive operational excellence.
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                      Total ecosystem synchrony established for long-term scalability and market leadership.
                    </li>
                  </ul>
                </div>
                
                {/* Simulated Data: Engineering Stack */}
                <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100/80 shadow-sm">
                  <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-6 font-heading flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {['Next.js 14', 'React Server Components', 'TypeScript', 'Prisma ORM', 'PostgreSQL Cloud', 'Tailwind CSS V4', 'Framer / CSS Anim'].map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm hover:border-emerald-500/30 hover:text-emerald-700 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200/80 flex justify-between items-center">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Est. ROI Yield</span>
                    <span className="text-emerald-600 text-xl font-bold italic tracking-tighter">420% +</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="px-8 py-6 lg:px-12 lg:py-6 bg-slate-50/50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setExpandedProject(null)}
                className="group px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
              >
                Close Blueprint <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-emerald-600 italic font-bold">Synchronizing Portfolio...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectCard({ title, desc, category, icon, index, onClick }: { title: string, desc: string, category: string, icon: React.ReactNode, index: number, onClick?: () => void }) {
  return (
    <ScrollReveal baseDelay={index * 100} className="h-full">
      <div 
        onClick={onClick}
        className="group relative bg-[#fafafa] border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-10 shadow-sm hover:shadow-[0_45px_100px_-20px_rgba(5,150,105,0.12)] hover:border-emerald-500/30 transition-all duration-700 overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br from-white to-slate-50/50 cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-white border border-slate-100 rounded-[1.2rem] flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
              {icon}
            </div>
            <span className="px-4 py-1.5 bg-emerald-100/50 backdrop-blur-md text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-widest border border-emerald-50 font-heading tracking-[0.2em]">
              {category}
            </span>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl lg:text-3xl font-bold text-black italic group-hover:text-emerald-700 transition-colors duration-500 leading-tight">
              {title}
            </h3>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed italic text-justify group-hover:text-slate-800 transition-colors duration-500 font-medium tracking-tight">
              {desc}
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-8 mt-auto">
          <div className="flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 font-heading">
              Strategic Documentation
            </span>
            <div className="w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shadow-sm font-heading">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
