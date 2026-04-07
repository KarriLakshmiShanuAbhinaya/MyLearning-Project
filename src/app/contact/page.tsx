'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Zap, TrendingUp, BarChart4, Globe2, Layers, Briefcase } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      {/* MAIN CONTACT SECTION: Optimized Responsive Layout (Form at top on mobile) */}
      <section className="relative flex-grow flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 px-8 sm:px-12 lg:px-24 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20"></div>

        <div className="w-full relative z-10">
          {/* Mobile-First Stack: Flex-Col-Reverse puts Form ABOVE Narrative on small screens */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Bottom on Mobile): Narrative & Pillars */}
            <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-200 shadow-sm uppercase tracking-widest">
                  Executive Outreach
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight italic text-black">
                  Strategic <br />
                  <span className="text-emerald-600 not-italic">Alignment</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-emerald-900/80 leading-relaxed italic text-justify font-medium">
                  Initiate a high-stakes partnership with <span className="text-black font-bold">MyLearning Project</span> for absolute market dominance. Define your brand's ultimate growth trajectory today.
                </p>
              </div>

              {/* Strategic Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <ExpectationItem text="Performance Modeling" icon={<Zap className="w-4 h-4" />} />
                <ExpectationItem text="Competitive Edge" icon={<TrendingUp className="w-4 h-4" />} />
                <ExpectationItem text="Market Analytics" icon={<BarChart4 className="w-4 h-4" />} />
                <ExpectationItem text="Digital Architecture" icon={<Layers className="w-4 h-4" />} />
                <ExpectationItem text="Global Reach Sync" icon={<Globe2 className="w-4 h-4" />} />
                <ExpectationItem text="Brand Authority" icon={<ShieldCheck className="w-4 h-4" />} />
              </div>

            </div>

            {/* Right Column (Top on Mobile): High-Fidelity Intake Form */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-8 bg-emerald-500/10 rounded-[3rem] -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative z-10 transition-all duration-700 hover:-translate-y-1">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.success);
        form.reset();
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <div className="bg-slate-100/80 rounded-[2.5rem] shadow-xl overflow-hidden border-2 border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500">
        <div className="p-8 lg:p-12 bg-gradient-to-b from-slate-100/90 to-transparent">
          {success && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-xl flex items-center gap-3 border border-emerald-100 shadow-sm transition-all italic text-sm">
              <ShieldCheck className="h-4 w-4" />
              <p className="font-bold uppercase tracking-widest">{success}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField label="Executive Name" name="name" type="text" placeholder="John Doe" />
              <InputField label="Corporate Email" name="email" type="email" placeholder="john@enterprise.com" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField label="Direct Contact" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              <InputField label="Institutional Title" name="company" type="text" placeholder="CEO / Managing Director" />
            </div>

            <InputField label="Inquiry Subject" name="subject" type="text" placeholder="Strategic Partnership Alignment" />
            
            <div className="flex flex-col group">
              <label htmlFor="message" className="block text-xs font-bold text-black mb-2 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors ml-1 italic">Strategic Brief</label>
              <textarea
                name="message"
                id="message"
                rows={3}
                required
                placeholder="Outline your primary business objectives and target market dominance goals..."
                className="w-full px-5 py-4 bg-emerald-50/20 border border-black/10 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all resize-none placeholder:text-black/30 font-bold text-slate-900 text-base italic shadow-sm"
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  group w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg shadow-xl hover:bg-emerald-600 hover:-translate-y-1 active:scale-95 transition-all
                  ${isSubmitting ? 'opacity-50' : ''}
                `}
              >
                {isSubmitting ? 'Sending...' : 'Accelerate Now'} <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, type, placeholder }: { label: string, name: string, type: string, placeholder: string }) {
  return (
    <div className="flex flex-col group">
      <label htmlFor={name} className="block text-xs font-bold text-black mb-2 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors ml-1 italic">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        required
        placeholder={placeholder}
        className="w-full px-5 py-4 bg-emerald-50/20 border border-black/10 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-black/30 font-bold text-slate-900 text-base italic shadow-sm"
      />
    </div>
  );
}

function ExpectationItem({ text, icon }: { text: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 group p-4 rounded-xl border border-slate-50 hover:bg-emerald-50/50 hover:border-emerald-100 transition-all shadow-sm">
      <div className="w-10 h-10 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all flex-shrink-0">
        {icon}
      </div>
      <span className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight italic group-hover:translate-x-1 transition-transform">{text}</span>
    </div>
  );
}
