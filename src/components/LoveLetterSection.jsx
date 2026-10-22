import React, { useState, useEffect } from 'react';
import { Heart, Mail, ChevronUp, X, Sparkles, BookOpen } from 'lucide-react';

const STARDUST_PARTICLES = [
  { top: '16%', left: '12%', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5', delay: '0s', opacity: 'opacity-40' },
  { top: '24%', right: '14%', size: 'w-1 h-1 sm:w-2 sm:h-2', delay: '1.2s', opacity: 'opacity-60' },
  { top: '42%', left: '8%', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5', delay: '2.4s', opacity: 'opacity-35' },
  { top: '68%', right: '12%', size: 'w-1.5 h-1.5 sm:w-2 sm:h-2', delay: '0.6s', opacity: 'opacity-50' },
  { top: '82%', left: '18%', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5', delay: '1.8s', opacity: 'opacity-40' },
  { top: '28%', left: '38%', size: 'w-0.5 h-0.5 sm:w-1 sm:h-1', delay: '3.1s', opacity: 'opacity-30' },
  { top: '78%', right: '35%', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5', delay: '1.4s', opacity: 'opacity-45' },
  { top: '38%', right: '28%', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5', delay: '0.9s', opacity: 'opacity-55' },
];

export default function LoveLetterSection({ letterSectionRef }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section 
      ref={letterSectionRef} 
      className="w-full h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden bg-transparent select-none"
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] md:w-[880px] h-[340px] sm:h-[620px] md:h-[880px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 112, 243, 0.16) 0%, rgba(0, 210, 255, 0.04) 40%, transparent 70%)',
        }}
      />

      {STARDUST_PARTICLES.map((star, idx) => (
        <div
          key={idx}
          className={`absolute ${star.size} ${star.opacity} rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,210,255,0.9)] animate-pulse pointer-events-none`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDelay: star.delay,
          }}
        />
      ))}

      <div className="letter-chapter-badge absolute top-6 sm:top-8 w-full max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-white/50 z-30 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-white/80 font-display font-medium">Surat Cinta Satu Tahun</span>
          <span className="text-white/30">·</span>
          <span className="font-sans">Tri & Ahnaf</span>
        </div>
        <div className="font-display text-white/70 tracking-wider">
          20 OKTOBER 2025
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
        <div className={`letter-header-group text-center mb-6 sm:mb-8 transition-all duration-500 ${isOpen ? 'opacity-20 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-3.5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
            <span>Pesan Rahasia · Tri & Ahnaf</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em] uppercase mb-2 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Surat Untuk Tri
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-sm sm:max-w-md mx-auto leading-relaxed">
            Untaian kata dan rasa syukur terdalam untuk 365 hari penuh cinta yang kita lalui bersama.
          </p>
        </div>

        <div className="letter-envelope-stage relative w-full flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px]">
          <div 
            onClick={() => !isOpen && setIsOpen(true)}
            className={`letter-envelope-card w-[310px] sm:w-[460px] h-[210px] sm:h-[260px] relative rounded-3xl p-6 sm:p-8 bg-[#050811]/95 border transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden cursor-pointer group ${
              isOpen 
                ? 'translate-y-16 scale-95 opacity-80 border-cyan-400/40' 
                : 'border-white/15 hover:border-cyan-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,112,243,0.25)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(0,210,255,0.35)] hover:scale-[1.02]'
            }`}
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <span className="block font-display font-bold text-xs uppercase tracking-wider text-white">
                    Memoir Pribadi
                  </span>
                  <span className="block font-sans text-[11px] text-slate-400">
                    Edisi 1st Anniversary
                  </span>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-display font-medium text-white/60">
                20.10.2024 — 2025
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
              <div className="relative mb-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#050811] via-[#0d162d] to-[#12244a] border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,210,255,0.4)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-500">
                  <span className="font-display font-black text-base sm:text-lg text-white tracking-wider">
                    T & A
                  </span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#050811] shadow-[0_0_8px_#00D2FF]" />
              </div>

              <span className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                Buka Folio Kenangan
              </span>
              <span className="font-sans text-[11px] text-slate-400 mt-0.5">
                Sentuh untuk membuka pesan khusus Tri Ayuaningsih
              </span>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-white/50 font-sans">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
                <span>Untuk Tri Ayuaningsih</span>
              </div>
              <span className="font-display font-medium text-cyan-300 group-hover:translate-x-1 transition-transform">
                Buka Surat →
              </span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl transition-all duration-500 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="w-full max-w-[560px] max-h-[88vh] rounded-3xl bg-[#050811]/95 text-white border border-cyan-400/40 shadow-[0_30px_90px_rgba(0,0,0,0.98),0_0_60px_rgba(0,112,243,0.3)] flex flex-col relative transition-all duration-500 ease-out overflow-hidden"
          >
            <div className="p-5 sm:p-7 pb-4 border-b border-white/10 flex items-start justify-between relative flex-shrink-0 bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-cyan-300">
                    Jakarta · 20 Oktober 2025
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Untuk Tri Ayuaningsih
                </h3>
                <span className="text-[11px] text-slate-400 font-sans block mt-0.5">
                  Perayaan 365 Hari Bersama (Satu Tahun Penuh Cinta)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-[66px] h-[82px] sm:w-[74px] sm:h-[92px] rounded-xl bg-black/60 border border-cyan-400/50 p-1 rotate-2 shadow-lg overflow-hidden relative group">
                    <img 
                      src="/assets/tri/senyum_hoodie.jpeg" 
                      alt="Tri Ayuaningsih" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-cyan-400/50 backdrop-blur-xs -rotate-2 rounded-full" />
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 px-1.5 py-0.5 rounded-full bg-[#050811] border border-cyan-400/80 text-[8px] font-display font-bold text-cyan-300 shadow-sm">
                    1ST ANIV
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup Surat"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all self-start active:scale-95 cursor-pointer ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div 
              data-lenis-prevent
              className="p-5 sm:p-7 py-5 overflow-y-auto paper-scrollbar space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light"
            >
              <div className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                Hai Tri Ayuaningsih,
              </div>
              <p>
                Terima kasih banyak sudah hadir dan memilih melangkah sejauh ini bersamaku. Tiga ratus enam puluh lima hari mungkin terdengar seperti hitungan yang cepat, tapi di setiap harinya selalu tersimpan jutaan tawa, obrolan kecil kita, dan rasa syukur yang begitu dalam karena memilikimu di sisiku.
              </p>
              <p>
                Terima kasih sudah selalu menjadi pendengar yang paling sabar, menjadi teman jalan malam yang selalu menghangatkan suasana, dan menjadi alasan terbesar kenapa aku selalu merasa tenang setiap kali memikirkan masa depan. Bersamamu, hal-hal sederhana berubah menjadi kenangan yang tak ternilai.
              </p>
              <p>
                Website ini kubuat dengan sepenuh hati, merangkai setiap foto dan detik perjalanan kita. Aku ingin kamu tahu bahwa caraku mencintaimu selalu penuh dengan kesungguhan dan ketulusan.
              </p>
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-400/30 shadow-[0_0_30px_rgba(0,210,255,0.1)] text-cyan-100 text-xs sm:text-sm leading-relaxed font-sans">
                "Semoga di tahun-tahun berikutnya, tangan kita akan selalu saling bertaut erat, melewati suka dan duka bersama, dengan senyum manis yang sama seperti saat pertama kali aku jatuh hati padamu."
              </div>
            </div>

            <div className="p-4 sm:p-6 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.02] flex-shrink-0">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[10px] text-slate-400 font-sans block">Tertanda dengan segenap cinta,</span>
                <span className="font-display text-base sm:text-lg font-bold text-white tracking-wide block">
                  Ahnaf
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 cursor-pointer"
              >
                <ChevronUp className="w-4 h-4 text-black" />
                <span>Tutup Folio</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
