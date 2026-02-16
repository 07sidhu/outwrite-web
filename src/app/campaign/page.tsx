'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Reveal from "@/components/reveal";

export default function StartCampaign() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    // Extract data from the form using the 'name' attributes added below
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      audience: formData.get('audience'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Subtle delay for a premium feel
        setTimeout(() => setStatus('success'), 1000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      alert("There was an issue transmitting your brief. Please try again.");
      setStatus('idle');
    }
  }

  return (
    <div className="bg-ink text-paper min-h-screen selection:bg-paper selection:text-ink">
      <div className="max-w-screen-md mx-auto px-6 py-24 md:py-40">
        
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight tracking-tighter">
              The <span className="italic font-normal text-accent">Brief.</span>
            </h1>
            <p className="text-xl md:text-2xl text-paper/60 font-sans leading-relaxed max-w-xl border-l border-accent/20 pl-8">
              Detail your objectives. We will design the strategy to meet them. 
            </p>
          </motion.div>
        </header>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-20 border-t border-paper/10"
          >
            <p className="text-4xl font-serif italic mb-4 text-accent">Received.</p>
            <p className="text-paper/60 text-lg font-sans">Our strategy team has received your brief. We will reach out within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-32">
            
            {/* 01. IDENTITY */}
            <Reveal>
              <div className="space-y-16">
                <h2 className="text-[10px] uppercase tracking-[0.6em] text-paper/30">01. Identity & Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  
                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">Full Name</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper" 
                      placeholder="Name" 
                    />
                  </div>

                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">Company</label>
                    <input 
                      name="company" 
                      required 
                      type="text" 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper" 
                      placeholder="Organization" 
                    />
                  </div>

                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">Email Address</label>
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper" 
                      placeholder="email@domain.com" 
                    />
                  </div>

                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">Direct Phone</label>
                    <input 
                      name="phone" 
                      required 
                      type="tel" 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper" 
                      placeholder="+91..." 
                    />
                  </div>

                </div>
              </div>
            </Reveal>

            {/* 02. STRATEGY */}
            <Reveal>
              <div className="space-y-16">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-paper/30">02. Strategic Intent</h2>
                <div className="space-y-16">
                  
                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">Who is the primary audience?</label>
                    <input 
                      name="audience" 
                      required 
                      type="text" 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper" 
                      placeholder="e.g. Executive Leadership" 
                    />
                  </div>

                  <div className="border-b border-paper/10 pb-4 focus-within:border-accent transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-paper/40 mb-4">What is the central message?</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={2} 
                      className="w-full bg-transparent outline-none font-serif text-3xl placeholder:text-paper/5 text-paper resize-none" 
                      placeholder="The core narrative..." 
                    />
                  </div>

                </div>
              </div>
            </Reveal>

            {/* 03. SUBMISSION */}
            <Reveal>
              <div className="pt-10 border-t border-paper/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <p className="text-sm text-paper/30 font-sans max-w-xs leading-relaxed italic">
                    By submitting this brief, you initiate a strategic review by our outreach leads.
                  </p>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full md:w-auto bg-paper text-ink px-16 py-8 rounded-none hover:bg-accent transition-all font-sans uppercase tracking-[0.4em] text-xs disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Transmitting...' : 'Submit Brief'}
                  </button>
                </div>
              </div>
            </Reveal>

          </form>
        )}

        <footer className="mt-48 pt-12 border-t border-paper/5 text-center">
           <p className="text-[10px] uppercase tracking-[0.5em] text-paper/10">
            © {new Date().getFullYear()} Outwrite Studio. Confidential Outreach Brief.
          </p>
        </footer>
      </div>
    </div>
  );
}