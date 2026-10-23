import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft, Maximize2, X } from 'lucide-react';
import { ARC_MEMORIES } from '../data/memories';

export default function ArcCarouselSection({ arcSectionRef, activeArcIdx = 0, onSelectArc }) {
  const [internalIdx, setInternalIdx] = useState(0);
  const currentIdx = onSelectArc ? activeArcIdx : internalIdx;
  const setIdx = onSelectArc ? onSelectArc : setInternalIdx;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const total = ARC_MEMORIES.length;
  const currentItem = ARC_MEMORIES[currentIdx] || ARC_MEMORIES[0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    setIdx((currentIdx + 1) % total);
  };

  const handlePrev = () => {
    setIdx((currentIdx - 1 + total) % total);
  };

  const handleTimelineClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetIdx = Math.min(total - 1, Math.round(ratio * (total - 1)));
    setIdx(targetIdx);
  };

  return (
    <section 
      ref={arcSectionRef} 
      className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent select-none px-4 sm:px-6 md:px-10"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] md:w-[850px] h-[280px] sm:h-[650px] md:h-[850px] pointer-events-none rounded-full blur-[60px] sm:blur-[150px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.2) 0%, rgba(0, 112, 243, 0.1) 45%, transparent 75%)'
        }}
      />

      <div className="absolute top-6 sm:top-8 w-full max-w-6xl mx-auto px-2 sm:px-4 flex items-center justify-between z-30 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <span className="font-display font-medium text-white/90 text-xs sm:text-sm tracking-wide">
            Dua Belas Bulan
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-display font-semibold text-xs tracking-wider text-white/70">
          <span className="text-cyan-400">{String(currentIdx + 1).padStart(2, '0')}</span>
          <span className="text-white/30">/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14 z-20">
        <div className="w-full md:w-[42%] flex flex-col justify-center text-left z-30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-3.5 w-fit backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
            <span>{currentItem.tag}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.03em] uppercase leading-[1.08] mb-3 sm:mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            {currentItem.title}
          </h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-md">
            {currentItem.desc}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer group"
              aria-label="Sebelumnya"
            >
              <ArrowLeft className="w-4 h-4 text-white/70 group-hover:text-cyan-400 group-hover:-translate-x-0.5 transition-all" />
            </button>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/25 hover:border-cyan-300 flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(0,210,255,0.25)] cursor-pointer group"
              aria-label="Selanjutnya"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan-400/40 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              aria-label="Perbesar"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          <div className="w-full">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-2">
              {ARC_MEMORIES.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setIdx(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-display transition-all whitespace-nowrap cursor-pointer ${
                    idx === currentIdx
                      ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/60 font-semibold shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                      : 'text-white/40 hover:text-white/80 border border-transparent hover:border-white/10'
                  }`}
                >
                  {m.tag.split(' ')[0]}
                </button>
              ))}
            </div>

            <div 
              className="relative w-full h-3 flex items-center cursor-pointer group select-none" 
              onClick={handleTimelineClick}
            >
              <div className="w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_#00D2FF] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
                />
              </div>

              <div 
                className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#00D2FF] pointer-events-none -translate-x-1/2 transition-all duration-300 ease-out"
                style={{ left: `${(currentIdx / (total - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[58%] h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center relative [perspective:1200px]">
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {ARC_MEMORIES.map((item, idx) => {
              const diff = idx - currentIdx;
              const isCenter = diff === 0;

              const spacing = isMobile ? 85 : 180;
              const outerSpacing = isMobile ? 150 : 320;

              let x = 0;
              let z = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;

              if (diff === 0) {
                x = 0;
                z = isMobile ? 40 : 80;
                rotateY = 0;
                scale = isMobile ? 1.02 : 1.08;
                opacity = 1;
                zIndex = 30;
              } else if (diff === -1) {
                x = -spacing;
                z = -40;
                rotateY = 22;
                scale = 0.88;
                opacity = 0.6;
                zIndex = 20;
              } else if (diff === -2) {
                x = -outerSpacing;
                z = -100;
                rotateY = 32;
                scale = 0.72;
                opacity = 0.3;
                zIndex = 10;
              } else if (diff === 1) {
                x = spacing;
                z = -40;
                rotateY = -22;
                scale = 0.88;
                opacity = 0.6;
                zIndex = 20;
              } else if (diff === 2) {
                x = outerSpacing;
                z = -100;
                rotateY = -32;
                scale = 0.72;
                opacity = 0.3;
                zIndex = 10;
              } else {
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setIdx(idx)}
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="absolute cursor-pointer will-change-transform"
                >
                  <div className={`relative w-44 h-60 sm:w-56 sm:h-76 md:w-64 md:h-88 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-[#050811] border transition-all duration-300 ${
                    isCenter 
                      ? 'border-cyan-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,210,255,0.3)] ring-1 ring-cyan-300/30' 
                      : 'border-white/10 hover:border-white/25 shadow-2xl'
                  }`}>
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        decoding="async"
                        className="w-full h-full object-cover filter contrast-[1.06] brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3.5 sm:p-4 text-left">
                        <span className="text-[10px] sm:text-xs font-display font-semibold text-cyan-300 uppercase tracking-wider">
                          {item.tag}
                        </span>
                        <span className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate drop-shadow">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 bg-[#050811] shadow-[0_30px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(0,112,243,0.25)] flex flex-col"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={currentItem.img} 
                alt={currentItem.title}
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#050811] border-t border-white/10 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-2 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
                <span>{currentItem.tag}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                {currentItem.title}
              </h3>
              <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                {currentItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
