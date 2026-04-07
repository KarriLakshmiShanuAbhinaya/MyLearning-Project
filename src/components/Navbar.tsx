'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, ChevronDown, TrendingUp, BookOpen, Warehouse, Smartphone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 150);
  };

  const categories = [
    { name: 'Finance' },
    { name: 'Education' },
    { name: 'Hospitals' },
    { name: 'Apps' },
    { name: 'Logistics' },
    { name: 'Real Estate' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-emerald-600 transition-all shadow-lg italic">
              ML
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-serif italic">
              MyLearning Project
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink href="/" active={pathname === '/'}>Home</NavLink>
            <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
            
            {/* Desktop Projects Dropdown Container */}
            <div 
              className="relative py-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1.5 cursor-pointer">
                <NavLink 
                  href="/projects" 
                  active={pathname.startsWith('/projects')}
                >
                  Projects
                </NavLink>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Side-by-Side Website Theme Dropdown */}
              <div className={`
                absolute top-full left-1/2 -translate-x-1/2 w-[30rem] pt-4 transition-all duration-300 origin-top
                ${isProjectsOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-[0.98] -translate-y-3 invisible'}
              `}>
                <div className="bg-white/95 backdrop-blur-3xl rounded-3xl p-3 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/projects?category=${cat.name}`}
                        onClick={() => setIsProjectsOpen(false)}
                        className="group/item flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-emerald-50/80 transition-all duration-300"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover/item:text-emerald-700 transition-colors tracking-wide leading-none">
                          {cat.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-600 hover:text-emerald-600 transition-colors bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden bg-white w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
          <div className="h-20 px-8 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-[100] w-full">
            <div className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white text-lg">ML</span>
              <span className="font-serif italic">MyLearning Project</span>
            </div>
            <button onClick={closeMenu} className="p-2 text-slate-600 bg-slate-100 rounded-lg hover:text-emerald-600 transition-colors shadow-sm">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-start justify-start pt-20 pb-12 px-12 bg-white">
            <div className="flex flex-col space-y-12 w-full text-left">
              <MobileNavLink href="/" active={pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
              <MobileNavLink href="/about" active={pathname === '/about'} onClick={closeMenu}>About</MobileNavLink>
              
              <div className="w-full">
                <button 
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className={`flex items-center justify-between w-full text-left text-xl font-bold tracking-tight transition-all pb-4 ${
                    pathname.startsWith('/projects') ? 'text-emerald-600 italic' : 'text-slate-900/60'
                  }`}
                >
                  Projects
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180 text-emerald-600' : 'text-slate-300'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileProjectsOpen ? 'max-h-[30rem] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col space-y-6 pl-6 border-l-2 border-emerald-100 ml-1">
                    <Link href="/projects" onClick={closeMenu} className="text-lg font-medium text-slate-400 hover:text-emerald-600">Consortium Portfolio</Link>
                    {categories.map((cat) => (
                      <Link key={cat.name} href={`/projects?category=${cat.name}`} onClick={closeMenu} className="text-lg font-medium text-slate-400 hover:text-emerald-600">
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <MobileNavLink href="/contact" active={pathname === '/contact'} onClick={closeMenu}>Contact</MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className={`font-semibold text-sm transition-all relative group ${
        active 
          ? 'text-emerald-600' 
          : 'text-slate-500 hover:text-slate-900'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
}

function MobileNavLink({ href, active, onClick, children }: { href: string, active: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`text-xl font-bold tracking-tight transition-all ${
        active 
          ? 'text-emerald-600 italic' 
          : 'text-slate-900/60 hover:text-slate-900'
      }`}
    >
      {children}
    </Link>
  );
}
