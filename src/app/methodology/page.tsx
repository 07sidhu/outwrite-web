'use client';

import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface Step {
  title: string;
  subtitle: string;
  desc: string;
  align: 'left' | 'right';
  artifact: string;
}

function MethodologyStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Focus window: Detects when step is in the middle of the screen
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <div 
      ref={ref} 
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-32 last:mb-0 ${
        step.align === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content Side - Background turns to a Darker Paper/Stone shade */}
      <motion.div 
        animate={{ 
          backgroundColor: isInView ? "#E5E1D8" : "rgba(229, 225, 216, 0)", // Transitions to Stone shade
          scale: isInView ? 1.02 : 1,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`md:w-[45%] p-8 md:p-14 rounded-none border border-transparent z-10 ${isInView ? 'shadow-sm' : ''}`}
      >
        <div className="space-y-4">
          <span className={`text-[10px] uppercase tracking-[0.5em] transition-opacity duration-500 ${isInView ? 'text-ink/60' : 'text-ink/20'}`}>
            Step 0{index + 1}
          </span>
          <h2 className={`text-3xl md:text-5xl font-serif italic leading-tight transition-colors duration-500 ${isInView ? 'text-ink' : 'text-ink/20'}`}>
            {step.title}
          </h2>
          <p className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${isInView ? 'text-ink/80' : 'text-ink/10'}`}>
            {step.subtitle}
          </p>
          <p className={`text-base md:text-lg font-sans leading-relaxed pt-6 border-t transition-colors ${isInView ? 'border-ink/10 text-ink/70' : 'border-transparent text-ink/5'}`}>
            {step.desc}
          </p>
        </div>
      </motion.div>

      {/* The Node (Central Circle) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center hidden md:flex">
        <motion.div 
          animate={{ 
            scale: isInView ? 1.5 : 1,
            backgroundColor: isInView ? "var(--color-ink)" : "var(--color-paper)",
            borderColor: "var(--color-ink)"
          }}
          className="w-3 h-3 border rounded-full z-20 transition-all duration-500"
        />
      </div>

      {/* Artifact Side */}
      <div className={`md:w-[45%] hidden md:flex flex-col ${step.align === 'left' ? 'items-start pl-16' : 'items-end pr-16'}`}>
        <motion.div
          animate={{ opacity: isInView ? 0.15 : 0.03 }}
          className="text-ink font-serif italic text-base select-none pointer-events-none transition-opacity duration-700"
        >
          {step.artifact}
        </motion.div>
      </div>
    </div>
  );
}

export default function Methodology() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start 50%", "end 50%"] 
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001
  });

  const steps: Step[] = [
    { title: "The Selection", subtitle: "Strategy over Volume", desc: "We identify the decision-makers who can change your business, researching their history and context.", align: "left", artifact: "Recipient: CEO, Fortune 500" },
    { title: "The Scripting", subtitle: "The Power of Brevity", desc: "Our copywriters craft narratives that feel like personal letters, not sales pitches.", align: "right", artifact: "“Dear David, I noticed...”" },
    { title: "The Production", subtitle: "Real Ink. Real Paper.", desc: "Our artists hand-write every character using premium stationery and archival ink.", align: "left", artifact: "Stock: G.F Smith 120gsm" },
    { title: "The Delivery", subtitle: "The Desk Arrival", desc: "A hand-addressed, heavy envelope bypasses digital filters and lands exactly where it belongs.", align: "right", artifact: "Priority: Registered Post" }
  ];

  return (
    <div className="bg-paper text-ink min-h-screen relative font-sans overflow-x-hidden">
      
      {/* 1. HERO */}
      <section className="h-[75vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[9.5rem] font-serif mb-6 leading-tight tracking-tighter"
        >
          The <span className="italic font-normal">Journey.</span>
        </motion.h1>
        <p className="text-[10px] uppercase tracking-[0.6em] text-ink/30 italic">The Methodology of Attention</p>
      </section>

      {/* 2. JOURNEY STEPS */}
      <div className="relative max-w-screen-xl mx-auto px-6" ref={stepsContainerRef}>
        <div className="absolute left-1/2 top-0 w-[1px] bg-ink/5 h-full -translate-x-1/2 hidden md:block" />
        <motion.div 
          className="absolute left-1/2 top-0 w-[1px] bg-ink h-full -translate-x-1/2 origin-top hidden md:block z-10"
          style={{ scaleY }}
        />
        <div className="relative z-20 py-20">
          {steps.map((step, index) => (
            <MethodologyStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* 3. FINAL CTA */}
      <section className="py-48 text-center bg-ink text-paper mt-32">
        <div className="max-w-3xl mx-auto space-y-12 px-6">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight italic">
            Ready to be <span className="text-accent">Read?</span>
          </h2>
          <Link href="/campaign">
            <button className="bg-paper text-ink px-16 py-8 rounded-none hover:bg-accent hover:text-ink transition-all font-sans uppercase tracking-[0.4em] text-xs">
              Initiate Campaign Brief
            </button>
          </Link>
        </div>
      </section>

      <footer className="py-12 text-center bg-ink text-paper border-t border-white/5 opacity-40 text-[9px] uppercase tracking-widest">
        © Outwrite Studio — The Methodology
      </footer>
    </div>
  );
}