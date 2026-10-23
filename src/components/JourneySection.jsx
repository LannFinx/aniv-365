import React from 'react';
import { ArrowDown } from 'lucide-react';
import { JOURNEY_CHAPTERS } from '../data/memories';

export default function JourneySection({ journeySectionRef }) {
  return (
    <section 
      ref={journeySectionRef} 
      className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 sm:px-8 select-none"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] md:w-[850px] h-[280px] sm:h-[650px] md:h-[850px] pointer-events-none rounded-full blur-[60px] sm:blur-[140px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.2) 0%, rgba(0, 112, 243, 0.1) 45%, transparent 75%)'
        }}
      />

      <div className="absolute top-6 sm:top-10 w-full max-w-6xl mx-auto flex items-center justify-between px-2 sm:px-4 z-30 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <span className="font-display font-medium text-white/90 text-xs sm:text-sm tracking-wide">
            Empat Babak
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest font-display">
          <span>01 — 04</span>
        </div>
      </div>

      <div className="relative w-full max-w-5xl h-[540px] sm:h-[600px] flex items-center justify-center z-20">
        {JOURNEY_CHAPTERS.map((ch, idx) => (
          <div
            key={ch.id}
            className={`journey-chapter-card absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 ${
              idx === 0 ? 'opacity-100 filter-none' : 'opacity-0'
            } will-change-transform px-3 sm:px-6`}
          >
            <div className="relative flex-shrink-0 group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-400/30 to-blue-600/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="relative w-56 h-68 sm:w-68 sm:h-84 md:w-80 md:h-[430px] rounded-2xl overflow-hidden border border-white/15 bg-[#050811] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,112,243,0.18)]">
                <img 
                  src={ch.img} 
                  alt={ch.title}
                  decoding="async"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="max-w-lg text-center md:text-left flex flex-col items-center md:items-start z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-3.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
                <span>{ch.period}</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.03em] uppercase mb-3 sm:mb-4 leading-[1.08] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
                {ch.title}
              </h2>

              <p className="font-sans text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md">
                {ch.story}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 sm:bottom-10 flex items-center gap-2 text-xs text-slate-400 font-display tracking-wider z-30 opacity-70">
        <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
      </div>
    </section>
  );
}
