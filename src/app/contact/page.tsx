'use client'; // This tells Next.js this page uses "state" (form inputs)

import { useState } from 'react';
import Reveal from "@/components/reveal";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) setStatus('success');
  }

  return (
    <Reveal>
    <div className="max-w-screen-xl mx-auto px-6 py-24 md:py-40">
      <div className="grid md:grid-cols-2 gap-20">
        
        {/* Left Side: Content */}
        <div className="max-w-md">
          <h1 className="text-xs uppercase tracking-[0.4em] text-ink/40 mb-12">Contact</h1>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Let’s Start Something Worth Reading
          </h2>
          <p className="text-lg text-ink/60 mb-12 leading-relaxed">
            Tell us a little about your goals, your audience, or the problem your current outreach isn’t solving.
          </p>
          <div className="space-y-4 text-sm font-sans tracking-wide">
            <p><span className="opacity-40 uppercase mr-4">Email</span> hello@outwrite.co</p>
            <p><span className="opacity-40 uppercase mr-4">Location</span> Global / Remote</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-accent/10 p-8 md:p-12">
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center text-center space-y-4">
              <p className="text-2xl font-serif italic">Thank you.</p>
              <p className="text-ink/60">Your message was delivered thoughtfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-ink/40 mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors font-serif text-xl" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-ink/40 mb-2">Email Address</label>
                <input required name="email" type="email" className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors font-serif text-xl" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-ink/40 mb-2">Your Goals</label>
                <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors font-serif text-xl resize-none" />
              </div>
              <button 
                disabled={status === 'sending'}
                className="w-full bg-ink text-paper py-6 uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <p className="mt-40 text-center font-serif italic text-2xl text-ink/30">
        Some messages are sent. Others are delivered.
      </p>
    </div>
    </Reveal>
  );
}