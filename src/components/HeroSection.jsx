import React from 'react';

export default function HeroSection({ heroRef, heroContentRef }) {
  return (
    <section 
      ref={heroRef} 
      className="w-full h-screen relative flex flex-col items-center justify-between overflow-hidden px-4 sm:px-8 pt-6 pb-6 select-none bg-transparent"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] md:w-[850px] h-[340px] sm:h-[650px] md:h-[850px] pointer-events-none rounded-full blur-[140px] opacity-35 will-change-transform"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.22) 0%, rgba(0, 112, 243, 0.12) 40%, transparent 75%)'
        }}
      />

      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] pointer-events-none rounded-full blur-3xl opacity-30"
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

          <div className="hidden sm:flex items-center gap-2 text-white/40 text-xs tracking-wider">
            <span>20 Oktober 2024</span>
            <span className="text-cyan-400">·</span>
            <span>20 Oktober 2025</span>
          </div>

          <div className="w-20 sm:w-28" />
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
              src="/assets/tri/transparan_ahnaftri.png" 
              alt="Tri & Ahnaf" 
              className="h-full w-auto max-w-[90vw] object-contain object-bottom filter contrast-[1.12] brightness-[0.98] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex items-end justify-between z-30 pt-2 pb-1 px-2 sm:px-4">
          <div className="hero-annotation-left text-left flex flex-col gap-0.5 pointer-events-auto">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight drop-shadow">
              Satu Tahun Bersama
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
              20 Oktober 2024 — Selamanya
            </span>
          </div>

          <div className="hero-scroll-cue flex flex-col items-center gap-1.5 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-[10px] sm:text-[11px] text-slate-400 tracking-wider">
              Scroll ke bawah
            </span>
            <div className="w-[1px] h-6 bg-white/20 overflow-hidden rounded-full relative">
              <div className="w-full h-2.5 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_#00D2FF]" />
            </div>
          </div>

          <div className="hero-annotation-right text-right flex flex-col gap-0.5 pointer-events-auto">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight drop-shadow">
              Awal Selamanya
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
              Tri & Ahnaf
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
