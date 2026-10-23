import React from 'react';

const AMBIENT_STARS = [
  { top: '2%', left: '15%', size: 'w-1 h-1', delay: '0.2s', duration: '2.5s', opacity: 'opacity-70' },
  { top: '5%', left: '75%', size: 'w-1.5 h-1.5', delay: '1.1s', duration: '3.2s', opacity: 'opacity-90' },
  { top: '7%', left: '40%', size: 'w-0.5 h-0.5', delay: '0.6s', duration: '4.0s', opacity: 'opacity-50' },
  { top: '11%', left: '88%', size: 'w-1 h-1', delay: '2.3s', duration: '2.8s', opacity: 'opacity-80' },
  { top: '14%', left: '22%', size: 'w-2 h-2', delay: '1.7s', duration: '3.6s', opacity: 'opacity-90' },
  { top: '18%', left: '60%', size: 'w-0.5 h-0.5', delay: '0.9s', duration: '4.5s', opacity: 'opacity-60' },
  { top: '21%', left: '3%', size: 'w-1 h-1', delay: '3.1s', duration: '2.9s', opacity: 'opacity-70' },
  { top: '25%', left: '82%', size: 'w-1.5 h-1.5', delay: '0.4s', duration: '3.1s', opacity: 'opacity-85' },
  { top: '29%', left: '48%', size: 'w-1 h-1', delay: '1.9s', duration: '3.8s', opacity: 'opacity-75' },
  { top: '33%', left: '25%', size: 'w-0.5 h-0.5', delay: '2.7s', duration: '4.2s', opacity: 'opacity-50' },
  { top: '36%', left: '92%', size: 'w-1 h-1', delay: '1.3s', duration: '3.0s', opacity: 'opacity-80' },
  { top: '40%', left: '12%', size: 'w-2 h-2', delay: '0.8s', duration: '3.5s', opacity: 'opacity-90' },
  { top: '44%', left: '70%', size: 'w-0.5 h-0.5', delay: '2.1s', duration: '4.0s', opacity: 'opacity-60' },
  { top: '48%', left: '35%', size: 'w-1 h-1', delay: '1.5s', duration: '2.7s', opacity: 'opacity-70' },
  { top: '51%', left: '85%', size: 'w-1.5 h-1.5', delay: '0.1s', duration: '3.3s', opacity: 'opacity-85' },
  { top: '55%', left: '18%', size: 'w-0.5 h-0.5', delay: '3.4s', duration: '4.4s', opacity: 'opacity-55' },
  { top: '58%', left: '55%', size: 'w-1 h-1', delay: '2.0s', duration: '3.1s', opacity: 'opacity-75' },
  { top: '62%', left: '94%', size: 'w-1 h-1', delay: '0.7s', duration: '2.6s', opacity: 'opacity-80' },
  { top: '66%', left: '28%', size: 'w-1.5 h-1.5', delay: '1.8s', duration: '3.7s', opacity: 'opacity-90' },
  { top: '70%', left: '42%', size: 'w-0.5 h-0.5', delay: '2.5s', duration: '4.1s', opacity: 'opacity-60' },
  { top: '73%', left: '78%', size: 'w-1 h-1', delay: '0.3s', duration: '2.9s', opacity: 'opacity-70' },
  { top: '77%', left: '8%', size: 'w-1.5 h-1.5', delay: '1.4s', duration: '3.4s', opacity: 'opacity-85' },
  { top: '81%', left: '62%', size: 'w-0.5 h-0.5', delay: '3.0s', duration: '4.6s', opacity: 'opacity-50' },
  { top: '85%', left: '20%', size: 'w-1 h-1', delay: '2.2s', duration: '3.0s', opacity: 'opacity-75' },
  { top: '88%', left: '88%', size: 'w-2 h-2', delay: '0.5s', duration: '3.5s', opacity: 'opacity-90' },
  { top: '92%', left: '45%', size: 'w-0.5 h-0.5', delay: '1.6s', duration: '4.3s', opacity: 'opacity-60' },
  { top: '96%', left: '15%', size: 'w-1 h-1', delay: '2.8s', duration: '2.8s', opacity: 'opacity-80' },
  { top: '99%', left: '72%', size: 'w-1.5 h-1.5', delay: '1.0s', duration: '3.3s', opacity: 'opacity-85' },
];

const FAR_PHOTOS = [
  { src: '/assets/tri/fotobareng.webp', top: '4%', left: '6%', size: 'w-32 sm:w-44', rotate: '-6deg', tag: 'Awal Cerita', xPercent: 12, yPercent: 4 },
  { src: '/assets/tri/sicantik1.webp', top: '16%', right: '7%', size: 'w-28 sm:w-40', rotate: '8deg', tag: 'Pesona Indah', xPercent: 88, yPercent: 16 },
  { src: '/assets/tri/wisudasmk1.webp', top: '30%', left: '7%', size: 'w-32 sm:w-44', rotate: '-5deg', tag: 'Hari Bangga', xPercent: 13, yPercent: 30 },
  { src: '/assets/tri/photoboothlucu3.webp', top: '45%', right: '6%', size: 'w-28 sm:w-40', rotate: '6deg', tag: 'Tawa Lepas', xPercent: 89, yPercent: 45 },
  { src: '/assets/tri/fotbar2.webp', top: '60%', left: '6%', size: 'w-32 sm:w-44', rotate: '-7deg', tag: 'Tempat Pulang', xPercent: 12, yPercent: 60 },
  { src: '/assets/tri/sicantik3.webp', top: '75%', right: '7%', size: 'w-28 sm:w-40', rotate: '5deg', tag: 'Jiwa Teduh', xPercent: 88, yPercent: 75 },
  { src: '/assets/tri/wisudasmk4.webp', top: '90%', left: '6%', size: 'w-32 sm:w-44', rotate: '-6deg', tag: 'Langkah Maju', xPercent: 12, yPercent: 90 },
  { src: '/assets/tri/photoboothlucu4.webp', top: '105%', right: '6%', size: 'w-30 sm:w-42', rotate: '7deg', tag: 'Polos Ceria', xPercent: 89, yPercent: 105 },
];

const MID_PHOTOS = [
  { src: '/assets/tri/mobil.webp', top: '8%', right: '9%', size: 'w-40 sm:w-56', rotate: '5deg', tag: 'Night Drive', xPercent: 86, yPercent: 8 },
  { src: '/assets/tri/senyum_hoodie.webp', top: '22%', left: '6%', size: 'w-36 sm:w-52', rotate: '-6deg', tag: 'Senyum Manis', xPercent: 14, yPercent: 22 },
  { src: '/assets/tri/photoboothlucu1.webp', top: '38%', right: '8%', size: 'w-40 sm:w-56', rotate: '6deg', tag: 'Booth Cerita', xPercent: 87, yPercent: 38 },
  { src: '/assets/tri/sicantik2.webp', top: '52%', left: '5%', size: 'w-36 sm:w-52', rotate: '-5deg', tag: 'Kehangatan', xPercent: 13, yPercent: 52 },
  { src: '/assets/tri/wisudasmk3.webp', top: '68%', right: '8%', size: 'w-40 sm:w-56', rotate: '5deg', tag: 'Dukungan Abadi', xPercent: 87, yPercent: 68 },
  { src: '/assets/tri/sendirilucu.webp', top: '82%', left: '6%', size: 'w-36 sm:w-52', rotate: '-7deg', tag: 'Pure Joy', xPercent: 14, yPercent: 82 },
  { src: '/assets/tri/wisudasmk5.webp', top: '98%', right: '7%', size: 'w-40 sm:w-56', rotate: '6deg', tag: 'Momen Juara', xPercent: 88, yPercent: 98 },
  { src: '/assets/tri/fotobareng2.webp', top: '112%', left: '5%', size: 'w-38 sm:w-54', rotate: '-5deg', tag: 'Masa Depan', xPercent: 13, yPercent: 112 },
];

const NEAR_PHOTOS = [
  { src: '/assets/tri/fotobareng1.webp', top: '12%', left: '10%', size: 'w-48 sm:w-68', rotate: '-4deg', tag: 'Hangat Berdua', xPercent: 18, yPercent: 12 },
  { src: '/assets/tri/koing.webp', top: '32%', right: '10%', size: 'w-44 sm:w-64', rotate: '5deg', tag: 'Sweet Comfort', xPercent: 82, yPercent: 32 },
  { src: '/assets/tri/photoboothlucu2.webp', top: '55%', left: '9%', size: 'w-48 sm:w-68', rotate: '-5deg', tag: 'Unfiltered Laughs', xPercent: 17, yPercent: 55 },
  { src: '/assets/tri/wisudasmk2.webp', top: '78%', right: '9%', size: 'w-44 sm:w-64', rotate: '4deg', tag: 'Proud of You', xPercent: 83, yPercent: 78 },
  { src: '/assets/tri/sicantik5.webp', top: '102%', left: '10%', size: 'w-48 sm:w-68', rotate: '-6deg', tag: 'Sinar Hati', xPercent: 18, yPercent: 102 },
];

export default function ParallaxMemoryVoid() {
  return (
    <div 
      aria-hidden="true" 
      className="parallax-memory-void fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {AMBIENT_STARS.map((star, idx) => (
          <div
            key={idx}
            className={`absolute ${star.size} ${star.opacity} rounded-full bg-white shadow-[0_0_8px_rgba(0,210,255,0.9)] animate-pulse`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="memory-track-far hidden md:block absolute inset-x-0 top-0 h-[400vh] will-change-transform opacity-40">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {FAR_PHOTOS.map((item, idx) => {
            if (idx === FAR_PHOTOS.length - 1) return null;
            const next = FAR_PHOTOS[idx + 1];
            return (
              <g key={idx}>
                <line
                  x1={`${item.xPercent}%`}
                  y1={`${item.yPercent}%`}
                  x2={`${next.xPercent}%`}
                  y2={`${next.yPercent}%`}
                  stroke="rgba(0, 210, 255, 0.12)"
                  strokeWidth="0.8"
                />
              </g>
            );
          })}
        </svg>

        {FAR_PHOTOS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.size} aspect-[3/4] rounded-3xl overflow-hidden group`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              transform: `rotate(${item.rotate})`,
              filter: 'grayscale(75%) contrast(1.1) brightness(0.8)',
              WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 45%, transparent 80%)',
              maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 45%, transparent 80%)',
            }}
          >
            <img 
              src={item.src} 
              alt="" 
              className="w-full h-full object-cover"
              decoding="async"
            />
            <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#050811]/70 border border-cyan-400/25 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00D2FF]" />
              <span className="text-[9px] font-display font-medium text-white/90 tracking-wide">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="memory-track-mid hidden md:block absolute inset-x-0 top-0 h-[480vh] will-change-transform opacity-55">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {MID_PHOTOS.map((item, idx) => {
            if (idx === MID_PHOTOS.length - 1) return null;
            const next = MID_PHOTOS[idx + 1];
            return (
              <g key={idx}>
                <line
                  x1={`${item.xPercent}%`}
                  y1={`${item.yPercent}%`}
                  x2={`${next.xPercent}%`}
                  y2={`${next.yPercent}%`}
                  stroke="rgba(0, 112, 243, 0.18)"
                  strokeWidth="1"
                />
              </g>
            );
          })}
        </svg>

        {MID_PHOTOS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.size} aspect-[3/4] rounded-3xl overflow-hidden`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              transform: `rotate(${item.rotate})`,
              filter: 'grayscale(55%) contrast(1.15) brightness(0.85)',
              WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 48%, transparent 82%)',
              maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 48%, transparent 82%)',
            }}
          >
            <img 
              src={item.src} 
              alt="" 
              className="w-full h-full object-cover"
              decoding="async"
            />
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#050811]/80 border border-cyan-400/35 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
              <span className="text-[9.5px] font-display font-medium text-white/95 tracking-wide">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="memory-track-near hidden md:block absolute inset-x-0 top-0 h-[560vh] will-change-transform opacity-50">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {NEAR_PHOTOS.map((item, idx) => {
            if (idx === NEAR_PHOTOS.length - 1) return null;
            const next = NEAR_PHOTOS[idx + 1];
            return (
              <g key={idx}>
                <line
                  x1={`${item.xPercent}%`}
                  y1={`${item.yPercent}%`}
                  x2={`${next.xPercent}%`}
                  y2={`${next.yPercent}%`}
                  stroke="rgba(0, 210, 255, 0.22)"
                  strokeWidth="1.2"
                />
              </g>
            );
          })}
        </svg>

        {NEAR_PHOTOS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.size} aspect-[3/4] rounded-3xl overflow-hidden`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              transform: `rotate(${item.rotate})`,
              filter: 'grayscale(35%) contrast(1.2) brightness(0.9)',
              WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, transparent 85%)',
              maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, transparent 85%)',
            }}
          >
            <img 
              src={item.src} 
              alt="" 
              className="w-full h-full object-cover"
              decoding="async"
            />
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#050811]/90 border border-cyan-300/40 backdrop-blur-xs shadow-[0_0_12px_rgba(0,210,255,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00D2FF]" />
              <span className="text-[10px] font-display font-medium text-white tracking-wide">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
