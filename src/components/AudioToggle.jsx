import React from 'react';

export default function AudioToggle({ isPlaying, onToggle }) {
  return (
    <div className="fixed top-5 sm:top-6 right-5 sm:right-6 z-50">
      <button
        onClick={onToggle}
        className="px-3.5 py-1.5 rounded-full bg-[#050811]/85 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 flex items-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(0,210,255,0.15)] group cursor-pointer active:scale-95"
        title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        aria-label={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
      >
        <div className="flex items-end gap-[2.5px] h-3.5">
          <span 
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'bg-cyan-400 animate-[bounce_0.8s_ease-in-out_infinite]' 
                : 'h-1 bg-slate-500'
            }`}
            style={{ 
              height: isPlaying ? '12px' : '4px',
              animationDelay: '0ms'
            }}
          />
          <span 
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'bg-cyan-400 animate-[bounce_0.6s_ease-in-out_infinite]' 
                : 'h-1.5 bg-slate-500'
            }`}
            style={{ 
              height: isPlaying ? '14px' : '6px',
              animationDelay: '150ms'
            }}
          />
          <span 
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'bg-cyan-400 animate-[bounce_0.9s_ease-in-out_infinite]' 
                : 'h-1 bg-slate-500'
            }`}
            style={{ 
              height: isPlaying ? '10px' : '4px',
              animationDelay: '300ms'
            }}
          />
          <span 
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'bg-cyan-400 animate-[bounce_0.7s_ease-in-out_infinite]' 
                : 'h-1.5 bg-slate-500'
            }`}
            style={{ 
              height: isPlaying ? '13px' : '5px',
              animationDelay: '450ms'
            }}
          />
        </div>

        <span className="font-display font-bold text-[10px] sm:text-[11px] tracking-wider uppercase text-white/90 group-hover:text-cyan-300 transition-colors">
          {isPlaying ? 'AUDIO ON' : 'AUDIO OFF'}
        </span>
      </button>
    </div>
  );
}
