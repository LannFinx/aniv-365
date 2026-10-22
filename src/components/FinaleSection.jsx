import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] md:w-[960px] h-[340px] sm:h-[680px] md:h-[960px] pointer-events-none rounded-full blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 112, 243, 0.35) 0%, rgba(0, 210, 255, 0.15) 40%, transparent 75%)'
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-xs text-white/50 px-4 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-white/80 font-display font-medium">Babak Penutup · 365 Hari Bersama</span>
        </div>
        <div className="font-display text-white/70 tracking-wider">
          TRI & AHNAF
        </div>
      </div>

      <div className="finale-card relative z-10 max-w-2xl w-full flex flex-col items-center px-4 my-auto py-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 animate-pulse" />
          <span>Selebrasi Satu Tahun · 20.10.2024 — 20.10.2025</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em] uppercase mb-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] leading-tight">
          Satu Tahun & Awal Selamanya
        </h2>

        <p className="font-sans text-sm sm:text-base text-cyan-200/90 font-normal max-w-md mx-auto leading-relaxed mb-6">
          "Selamanya adalah waktu yang panjang, tapi bersamamu, aku ingin memulainya dari sekarang."
        </p>

        <div className="relative w-full max-w-md h-52 sm:h-64 rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,112,243,0.3)] mb-8 group bg-[#050811]">
          <img 
            src="/assets/tri/fotobareng2.jpeg" 
            alt="Tri Ayuaningsih & Ahnaf" 
            className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 text-left">
            <div className="flex items-center justify-between">
              <div>
                <span className="block font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                  Tri Ayuaningsih & Ahnaf
                </span>
                <span className="block font-sans text-xs text-slate-300 font-light mt-0.5">
                  20 Oktober 2024 — Menuju Tahun-Tahun Selanjutnya
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-cyan-300 fill-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white text-black hover:bg-cyan-300 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_#00D2FF] active:scale-95 cursor-pointer group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-black" />
          <span>Putar Ulang Kenangan</span>
          <ArrowUp className="w-4 h-4 text-black group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1.5 text-xs text-slate-400 font-sans tracking-wide">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <span>Dibuat dengan segenap cinta oleh Ahnaf untuk Tri Ayuaningsih</span>
        </div>
        <span className="text-[11px] text-slate-600">
          20 Oktober 2024 — Selamanya · All Love Reserved
        </span>
      </div>
    </section>
  );
}
