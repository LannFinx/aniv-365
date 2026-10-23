import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function FinaleSection({ finaleSectionRef }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      ref={finaleSectionRef} 
      className="w-full min-h-screen relative flex flex-col items-center justify-between py-12 sm:py-16 px-4 text-center overflow-hidden bg-transparent select-none"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[680px] md:w-[960px] h-[280px] sm:h-[680px] md:h-[960px] pointer-events-none rounded-full blur-[60px] sm:blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 112, 243, 0.35) 0%, rgba(0, 210, 255, 0.15) 40%, transparent 75%)'
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-xs text-white/50 px-4 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <span className="text-white/80 font-display font-medium text-xs sm:text-sm tracking-wide">
            Awal Selamanya
          </span>
        </div>
        <div className="font-display text-white/40 text-xs tracking-widest">
          365 DAYS & BEYOND
        </div>
      </div>

      <div className="finale-card relative z-10 max-w-2xl w-full flex flex-col items-center px-4 my-auto py-6">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-[-0.04em] uppercase mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] leading-tight">
          Satu Tahun & Selamanya
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-300 font-light max-w-md mx-auto leading-relaxed mb-8">
          "Selamanya adalah waktu yang panjang, tapi bersamamu, aku ingin memulainya dari sekarang."
        </p>

        <div className="relative w-full max-w-md h-52 sm:h-64 rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,112,243,0.3)] mb-8 group bg-[#050811]">
          <img 
            src="/assets/tri/fotobareng2.webp" 
            alt="Tri Ayuaningsih & Ahnaf" 
            decoding="async"
            className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
            <div className="flex items-center justify-between w-full">
              <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                Tri & Ahnaf
              </span>
              <span className="text-xs text-cyan-300 font-display font-medium tracking-wider">
                20.10.2025 — ∞
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="px-8 sm:px-10 py-3.5 rounded-full bg-white text-black hover:bg-cyan-300 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_35px_#00D2FF] active:scale-95 cursor-pointer group"
        >
          <span>Putar Ulang Kenangan</span>
          <ArrowUp className="w-4 h-4 text-black group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-xs text-slate-400 font-sans tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
        <span>Untuk Tri Ayuaningsih, dari Ahnaf</span>
      </div>
    </section>
  );
}
