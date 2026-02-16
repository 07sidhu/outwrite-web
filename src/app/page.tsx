'use client';

import { motion, Variants } from 'framer-motion';
import Reveal from "@/components/reveal";
import Link from 'next/link';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 overflow-hidden bg-paper">
      
      {/* 1. HERO SECTION - ASYMMETRICAL EDITORIAL */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-20">
        
        {/* Left Column: The Narrative (Spans 8 columns) */}
        <motion.div 
          className="md:col-span-8 z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* NEW: 5-Second Recognition Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-ink/40 border border-ink/10 px-4 py-2">
              Bespoke Handwritten Outreach
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-[10rem] font-serif mb-12 leading-[0.85] tracking-tighter text-ink"
          >
            Win Attention <br />
            <span className="italic font-normal text-ink/90">Differently.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-sans leading-relaxed mb-16 text-ink/60 max-w-xl"
          >
            In a world of AI-generated noise,  
            When everything is automated, <span className="text-ink font-medium decoration-accent">be the brand that arrives in an envelope.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-12 items-center">
            <Link href="/campaign">
              <button className="bg-ink text-paper px-14 py-6 rounded-none hover:opacity-90 transition-all font-sans uppercase tracking-[0.3em] text-[10px]">
                Start a Campaign
              </button>
            </Link>
            {/* UPDATED: Link to Methodology Journey */}
            <Link href="/methodology">
              <button className="text-[10px] uppercase tracking-[0.3em] font-sans border-b border-ink/30 pb-1 hover:border-ink transition-all">
                The Methodology
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: The "Letterhead" Metadata (Spans 4 columns) */}
<motion.div 
  className="md:col-span-4 hidden md:flex flex-col justify-between h-[500px] border-l border-ink/5 pl-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 1 }}
>
  {/* 1. What We Do (Top) */}
  <div className="space-y-4">
    <p className="text-[10px] uppercase tracking-[0.4em] text-ink/30">What We Do</p>
    <p className="text-sm font-sans leading-relaxed text-ink/60 italic">
      Close more deals by turning <br/>
      cold outreach into warm <br/>
      conversations—one bespoke,<br/>
      handwritten letter at a time.
    </p>
  </div>

  {/* 2. Philosophy (Middle) */}
  <div className="space-y-4">
    <p className="text-[10px] uppercase tracking-[0.4em] text-ink/30">Our Philosophy</p>
    <p className="text-sm font-sans leading-relaxed text-ink/50">
      We have one chance to stand out<br/>
      in a sea of automated noise,<br/>
      efforts are the only signal<br/>
      that breaks through it.
    </p>
  </div>

  {/* 3. Performance (Bottom) */}
  <div className="space-y-2">
    <p className="text-[10px] uppercase tracking-[0.4em] text-ink/30">Performance</p>
    <div className="space-y-1">
      <p className="font-serif italic text-4xl text-ink">99.8%</p>
      <p className="text-[9px] uppercase tracking-widest text-ink/40">Average Open Rate</p>
    </div>
  </div>
</motion.div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <Reveal>
        <section className="py-48 border-t border-accent/30">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-ink/30 mb-12">The Problem</h2>
              <p className="text-4xl md:text-5xl font-serif leading-tight italic">
                Digital outreach didn’t stop working. It just started looking exactly the same.
              </p>
            </div>
            <div className="md:col-start-7 md:col-span-5 space-y-8 text-xl font-sans text-ink/60 leading-relaxed md:pt-24">
              <p>Same subject lines. Same sequences. Same “just bumping this up” messages.</p>
              <p className="text-ink font-medium border-l border-accent pl-8 py-2">
                Decision-makers aren’t ignoring you. <br />They’re filtering sameness.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. THE SHIFT (Dark Section) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-48 bg-ink text-paper -mx-6 px-6"
      >
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] opacity-30">The Shift</h2>
          <p className="text-5xl md:text-7xl font-serif leading-tight">
            A handwritten letter doesn’t compete with email. <br />
            <span className="italic font-normal text-paper/80">It bypasses it.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-paper/10 text-xs uppercase tracking-[0.3em] opacity-50">
            <p>It arrives alone.</p>
            <p>It gets opened.</p>
            <p>It gets read.</p>
          </div>
        </div>
      </motion.section>

      {/* NEW: 4. THE COMPARISON SECTION (Sophisticated & Minimal) */}
      <Reveal>
        <section className="py-48 border-b border-accent/30">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-8">
               <h2 className="text-[10px] uppercase tracking-[0.5em] text-ink/30">The Contrast</h2>
               <h3 className="text-5xl font-serif leading-tight italic">Proof of <br />Thought.</h3>
            </div>
            <div className="md:col-span-6 space-y-12">
               <div className="space-y-2 border-b border-ink/5 pb-6">
                  <div className="flex justify-between items-baseline">
                    <p className="font-sans uppercase tracking-widest text-xs opacity-40">Traditional Email</p>
                    <p className="font-serif text-2xl text-ink/40">~22% Open Rate</p>
                  </div>
                  <div className="w-full h-[1px] bg-ink/5 relative">
                     <div className="absolute top-0 left-0 w-[22%] h-full bg-ink/20" />
                  </div>
               </div>

               <div className="space-y-2 border-b border-ink/5 pb-6">
                  <div className="flex justify-between items-baseline">
                    <p className="font-sans uppercase tracking-widest text-xs font-bold">Outwrite Letter</p>
                    <p className="font-serif text-2xl text-ink">99.8% Open Rate</p>
                  </div>
                  <div className="w-full h-[2px] bg-ink/5 relative">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.8%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-ink" 
                      />
                  </div>
               </div>
               
               <p className="text-sm font-sans text-ink/50 leading-relaxed italic">
                 In a world of frictionless scale, people respond to effort. Handwriting signals time and intention in a way pixels cannot.
               </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="py-24 text-center">
         <p className="text-[10px] uppercase tracking-[0.5em] text-ink/20">
           © {new Date().getFullYear()} Outwrite Studio. Win Attention Differently.
         </p>
      </footer>
    </div>
  );
}