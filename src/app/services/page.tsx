'use client';

import { motion } from 'framer-motion';
import Reveal from "@/components/reveal";
import Link from 'next/link';

export default function Services() {
  const useCases = [
    { 
      title: "Account-Based Outreach", 
      subtitle: "High-Value Acquisition",
      desc: "For when the target is too valuable to be treated like a data point. We help you reach decision-makers your sequences never will." 
    },
    { 
      title: "Deal Acceleration", 
      subtitle: "Momentum Recovery",
      desc: "Re-engage when momentum quietly disappears. A handwritten note signals respect and moves the needle back to a yes." 
    },
    { 
      title: "Executive Introductions", 
      subtitle: "First Impressions",
      desc: "When the first impression cannot feel automated. We open doors that remain locked to digital-only outreach." 
    },
    { 
      title: "Strategic Retention", 
      subtitle: "Relationship LTV",
      desc: "Because important relationships shouldn’t look programmatic. Personalized gratitude for high-value D2C and B2B clients." 
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 overflow-hidden bg-paper">
      
      {/* 1. HERO - The Philosophy of Offer */}
      <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-24 pb-20">
        <div className="md:col-span-8">
          <Reveal>
            <span className="text-[20px] uppercase tracking-[0.5em] text-ink/50 mb-8 block font-medium">Services & Strategy</span>
            <h1 className="text-6xl md:text-[8rem] font-serif mb-12 leading-[0.85] tracking-tighter text-ink">
              What we
              <span className="italic font-normal text-ink/90 text-reveal"> offer.</span>
            </h1>
            <p className="text-xl md:text-3xl font-sans font-light leading-relaxed text-ink/70 max-w-2xl">
              We design and execute handwritten outreach campaigns for brands where 
              <span className="text-ink font-normal"> every conversation is an asset.</span>
            </p>
            <div className="mt-12 flex flex-col md:flex-row gap-8 text-sm text-ink/50 font-sans tracking-widest uppercase">
               <p>• No Templates</p>
               <p>• No Digital Simulation</p>
               <p>• Archival Materials Only</p>
            </div>
          </Reveal>
        </div>

        {/* Right Side Metadata (Balancing the space) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="md:col-span-4 hidden md:flex flex-col justify-end h-[400px] border-l border-accent pl-12 pb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-ink/30 mb-4">Capacity</p>
          <p className="font-serif italic text-2xl text-ink leading-snug">
            100 to 200 reachouts <br /> per campaign.
          </p>
        </motion.div>
      </section>

      {/* 2. USE CASES - The Stone Shaded Journey */}
      {/* This uses the darker cream/stone background to differentiate from hero */}
      <section className="bg-cream -mx-6 px-6 py-48 border-y border-accent/30">
        <div className="max-w-screen-xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-32">
              <h2 className="text-[20px] uppercase tracking-[0.5em] text-ink/50 mb-12">Strategic Applications</h2>
              <h3 className="text-5xl md:text-7xl font-serif leading-tight text-ink">
                Where intention <br /><span className="italic">meets impact.</span>
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-40">
            {useCases.map((useCase, idx) => (
              <Reveal key={idx}>
                <div className="group space-y-8">
                  <div className="space-y-2">
                    <p className="text-[20px] uppercase tracking-widest text-accent font-bold">{useCase.subtitle}</p>
                    <h4 className="font-serif text-4xl md:text-5xl text-ink border-b border-ink/10 pb-8 group-hover:italic transition-all duration-500">
                      {useCase.title}
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl text-ink/60 font-sans font-light leading-relaxed max-w-md">
                    {useCase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DISTINCTION - Dark Minimalist Block */}
      <motion.section 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="py-48 bg-ink text-paper -mx-6 px-6"
>
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-24 items-start">
      
      {/* WHAT WE ARE NOT (Left Side) */}
      <div className="space-y-12">
        <h2 className="text-[15px] uppercase tracking-[0.5em] opacity-50">What We Are Not</h2>
        <ul className="space-y-8">
          {[
            "A gifting company or vendor.",
            "A mass-production print shop.",
            "Another automated sequence."
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-6 text-xl md:text-2xl font-serif italic opacity-60">
              {/* Thin Cross Icon */}
              <svg width="18" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="1" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* WHAT WE ARE (Right Side) */}
      <div className="space-y-12">
        <h2 className="text-[15px] uppercase tracking-[0.5em] ">What We Are</h2>
        <ul className="space-y-8">
          {[
            "An attention strategy firm.",
            "Precision handwritten outreach.",
            "A relationship-first growth engine."
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-6 text-xl md:text-2xl font-serif text-paper">
              {/* Thin Checkmark Icon */}
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 ">
                <path d="M1.5 7.5L6.5 12.5L16.5 1.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* The Hero Statement at the bottom */}
    <div className="mt-32 pt-16 border-t border-paper/10 text-center">
      <p className="text-3xl md:text-5xl font-serif italic text-accent leading-tight">
        We optimize for the reply, <br />not the send.
      </p>
    </div>
  </div>
</motion.section>

      {/* 4. METHODOLOGY BRIDGE */}
      <section className="py-48 bg-paper">
        <Reveal>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl space-y-8">
               <h2 className="text-[20px] uppercase tracking-[0.6em] text-ink/30">The How</h2>
               <h3 className="text-5xl md:text-7xl font-serif leading-tight">A journey through <br />the artisanal process.</h3>
            </div>
            <Link href="/methodology">
              <button className="text-[10px] uppercase tracking-[0.4em] font-sans border-b border-ink/40 pb-2 hover:border-ink transition-all mb-4">
                View The Methodology →
              </button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-64 text-center border-t border-accent/30">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-16 px-6">
            <h2 className="text-5xl md:text-[7rem] font-serif leading-[0.9] tracking-tighter text-ink">
              Ready to win <br />
              <span className="italic font-normal">Attention?</span>
            </h2>
            <Link href="/campaign">
              <button className="bg-ink text-paper px-20 py-10 rounded-none hover:opacity-90 transition-all font-sans uppercase tracking-[0.5em] text-xs">
                Initiate Campaign Brief
              </button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center border-t border-accent/20">
         <p className="text-[10px] uppercase tracking-[0.5em] text-ink/20">
           © {new Date().getFullYear()} Outwrite Studio. Win Attention Differently.
         </p>
      </footer>
    </div>
  );
}