import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Camera, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 pb-12 pt-12 mt-8">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="group text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3 font-heading">
              <span className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white text-lg shadow-sm">ML</span>
              <span>MyLearning Project</span>
            </Link>
            <p className="text-base text-slate-500 max-w-xs leading-relaxed font-medium">
              Architecting high-performance brand engineering and absolute market authority through data-driven strategic ecosystems.
            </p>
            <div className="flex gap-3">
              <SocialLink icon={<Globe className="w-5 h-5" />} href="#" />
              <SocialLink icon={<X className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Camera className="w-5 h-5" />} href="#" />
            </div>
          </div>

          {/* Links Column 1: NAVIGATION */}
          <div className="space-y-5">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.1em] text-xs font-heading">Navigation</h4>
            <div className="flex flex-col space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/projects">Portfolio</FooterLink>
              <FooterLink href="/contact">Inquiry</FooterLink>
            </div>
          </div>

          {/* Links Column 2: EXPERTISE */}
          <div className="space-y-5">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.1em] text-xs font-heading">Strategic Verticals</h4>
            <div className="flex flex-col space-y-4">
              <FooterLink href="#">Search Equity</FooterLink>
              <FooterLink href="#">Social Architecture</FooterLink>
              <FooterLink href="#">Legacy Identity</FooterLink>
              <FooterLink href="#">Ecosystem Engineering</FooterLink>
            </div>
          </div>

          {/* Contact Info Column: CONNECT */}
          <div className="space-y-5">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.1em] text-xs font-heading">Connect</h4>
            <div className="space-y-6">
              <ContactItem icon={<Mail className="w-4 h-4" />} info="abhinayakarri3@gmail.com" />
              <ContactItem icon={<Phone className="w-4 h-4" />} info="+1 (555) 000-0000" />
              <ContactItem icon={<MapPin className="w-4 h-4" />} info="Global Virtual HQ" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
          <p>© {new Date().getFullYear()} MyLearning Project. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-emerald-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} className="w-11 h-11 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-slate-500 hover:text-emerald-600 font-medium transition-colors">
      {children}
    </Link>
  );
}

function ContactItem({ icon, info }: { icon: React.ReactNode, info: string }) {
  return (
    <div className="flex items-center gap-4 text-slate-600 group">
      <div className="text-emerald-600">{icon}</div>
      <span className="font-medium group-hover:text-slate-900 transition-colors">{info}</span>
    </div>
  );
}
