import Reveal from "@/components/reveal";
export default function About() {
  return (
    <Reveal>
    <div className="max-w-screen-xl mx-auto px-6">
      
      {/* 1. MANIFESTO / WHY WE EXIST */}
      <section className="py-24 md:py-40 max-w-4xl">
        <h1 className="text-xs uppercase tracking-[0.4em] text-ink/40 mb-12">Our Story</h1>
        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-16">
          Modern outreach optimized for scale. <br />
          <span className="italic font-normal">We optimize for response.</span>
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl font-sans text-ink/80 leading-relaxed max-w-3xl">
          <p>
            Somewhere along the way, communication became frictionless — and therefore forgettable.
          </p>
          <p className="font-serif italic text-3xl text-ink pt-8">
            Outwrite was built on a simple observation:
          </p>
          <p className="border-l-2 border-accent pl-8 py-4 text-3xl font-serif">
            When nobody takes time, the one who does wins.
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-32 border-t border-accent grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] text-ink/40 mb-8">Our Philosophy</h2>
          <p className="text-3xl font-serif leading-snug italic">
            Technology made sending messages easy. That doesn’t mean earning attention should be.
          </p>
        </div>
        <div className="space-y-8 text-lg font-sans text-ink/70 leading-relaxed">
          <p>
            We believe the future of outreach isn’t more automation. 
            It’s more intention — delivered intelligently, not nostalgically.
          </p>
          <p>
            Handwritten communication is not a step backward. 
            It’s a strategic contrast in an era of digital noise.
          </p>
        </div>
      </section>

      {/* 3. WHO WE WORK WITH (The Audience) */}
      <section className="py-40 bg-ink text-paper -mx-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] opacity-40 mb-16 text-center">Who We Work With</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-serif italic">B2B Companies</h3>
              <p className="text-sm opacity-60 font-sans tracking-wide">Selling complex solutions that require trust.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif italic">Founders</h3>
              <p className="text-sm opacity-60 font-sans tracking-wide">Who still believe relationships close deals.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif italic">Revenue Teams</h3>
              <p className="text-sm opacity-60 font-sans tracking-wide">Where one meeting can change a quarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRIVERS (Values) */}
      <section className="py-32 max-w-4xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-ink/40 mb-20">What Drives Us</h2>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-2">
            <p className="text-3xl font-serif italic">Clarity</p>
            <p className="text-xs uppercase tracking-widest opacity-40 font-sans">over cleverness</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-serif italic">Signal</p>
            <p className="text-xs uppercase tracking-widest opacity-40 font-sans">over volume</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-serif italic">Conversations</p>
            <p className="text-xs uppercase tracking-widest opacity-40 font-sans">over campaigns</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-accent text-center text-[10px] tracking-[0.5em] text-ink/30 uppercase">
        © {new Date().getFullYear()} Outwrite Studio.
      </footer>
    </div>
    </Reveal>
  );
}