import React from 'react';

export default function HeroSection({ heroRef, heroContentRef }) {
  return (
    <section 
      ref={heroRef} 
      className="w-full h-screen relative flex flex-col items-center justify-between overflow-hidden px-4 sm:px-8 pt-6 pb-6 select-none bg-transparent"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] md:w-[850px] h-[280px] sm:h-[650px] md:h-[850px] pointer-events-none rounded-full blur-[60px] sm:blur-[140px] opacity-35 will-change-transform"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.22) 0%, rgba(0, 112, 243, 0.12) 40%, transparent 75%)'
        }}
      />

      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] pointer-events-none rounded-full blur-xl sm:blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, rgba(0, 210, 255, 0.16) 40%, transparent 70%)'
        }}
      />

      <div 
        ref={heroContentRef} 
        className="relative z-10 w-full h-full flex flex-col items-center justify-between will-change-transform"
      >
        <div className="hero-top-bar w-full max-w-6xl mx-auto flex items-center justify-between pt-2 px-2">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
            <span className="font-display font-medium text-white/90 text-sm tracking-wide">Tri & Ahnaf</span>
          </div>

          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest font-display">
            <span>25.10.2025</span>
            <span className="text-cyan-400">·</span>
            <span>25.10.2026</span>
          </div>
        </div>

        <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden">
          <div className="hero-giant-type absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none select-none">
            <h1 className="font-display font-black tracking-[-0.05em] uppercase text-white leading-none whitespace-nowrap text-[18vw] sm:text-[17vw] md:text-[16vw] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] opacity-95">
              365 DAYS
            </h1>
          </div>

          <div 
            className="hero-portrait-subject relative z-20 h-[72vh] sm:h-[80vh] md:h-[86vh] max-h-[880px] w-auto flex items-end justify-center pointer-events-none will-change-transform"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 14%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 14%, black 100%)'
            }}
          >
            <img 
              src="/assets/tri/transparan_ahnaftri.webp" 
              alt="Tri & Ahnaf" 
              decoding="async"
              className="h-full w-auto max-w-[90vw] object-contain object-bottom filter contrast-[1.12] brightness-[0.98] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex items-end justify-between z-30 pt-2 pb-1 px-2 sm:px-4">
          <div className="hero-annotation-left text-left flex items-center gap-2 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00D2FF]" />
            <span className="text-xs sm:text-sm font-display font-medium text-white/90 tracking-wide">
              Satu Tahun Bersama
            </span>
          </div>

          <div className="hero-scroll-cue flex flex-col items-center gap-1.5 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-[1px] h-6 bg-white/20 overflow-hidden rounded-full relative">
              <div className="w-full h-2.5 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_#00D2FF]" />
            </div>
          </div>

          <div className="hero-annotation-right text-right flex items-center gap-2 pointer-events-auto">
            <span className="text-xs sm:text-sm font-display font-medium text-slate-400 tracking-wide">
              Menuju Selamanya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
