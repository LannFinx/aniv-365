import React, { useState, useEffect } from 'react';
import { 
  Shuffle, 
  SkipBack, 
  SkipForward, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Disc3,
  Music
} from 'lucide-react';
import { SPOTIFY_TRACKS } from '../data/memories';

export default function PerspectiveGridSection({ 
  gridSectionRef,
  currentTrackIdx = 0,
  onSelectTrack,
  isAudioPlaying = false,
  onToggleAudio,
  audioRef
}) {
  const [internalIdx, setInternalIdx] = useState(0);
  const activeIdx = onSelectTrack ? currentTrackIdx : internalIdx;
  const setActiveIdx = onSelectTrack ? onSelectTrack : setInternalIdx;

  const [internalPlaying, setInternalPlaying] = useState(false);
  const isPlaying = onToggleAudio ? isAudioPlaying : internalPlaying;
  const togglePlay = onToggleAudio ? onToggleAudio : () => setInternalPlaying(!internalPlaying);

  const [isShuffle, setIsShuffle] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMobile, setIsMobile] = useState(false);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleVolumeChange = () => {
      setVolume(Math.round(audio.volume * 100));
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('volumechange', handleVolumeChange);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [audioRef]);

  const activeTrack = SPOTIFY_TRACKS[activeIdx] || SPOTIFY_TRACKS[0];

  const handleNext = () => {
    if (isShuffle) {
      let rand = Math.floor(Math.random() * SPOTIFY_TRACKS.length);
      if (rand === activeIdx) rand = (rand + 1) % SPOTIFY_TRACKS.length;
      setActiveIdx(rand);
    } else {
      setActiveIdx((activeIdx + 1) % SPOTIFY_TRACKS.length);
    }
  };

  const handlePrev = () => {
    setActiveIdx((activeIdx - 1 + SPOTIFY_TRACKS.length) % SPOTIFY_TRACKS.length);
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
    if (audioRef?.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVol = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setVolume(newVol);
    if (audioRef?.current) {
      audioRef.current.volume = newVol / 100;
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
      if (audioRef?.current) audioRef.current.volume = 0;
    } else {
      setVolume(70);
      if (audioRef?.current) audioRef.current.volume = 0.7;
    }
  };

  return (
    <section 
      ref={gridSectionRef} 
      className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent select-none px-4 py-8 sm:py-12"
    >
      <div 
        className="perspective-grid-floor absolute -bottom-16 inset-x-0 h-[52%] pointer-events-none opacity-15 [mask-image:linear-gradient(to_top,black_15%,transparent_90%)] will-change-transform"
        style={{
          backgroundSize: '55px 55px',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 210, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 112, 243, 0.08) 1px, transparent 1px)
          `,
          transform: 'perspective(650px) rotateX(68deg)',
          transformOrigin: 'center top'
        }}
      />

      <div 
        className="perspective-ground-reflection absolute bottom-16 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[90px] pointer-events-none rounded-full blur-2xl opacity-15 will-change-transform"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 210, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 35%, transparent 70%)',
          transform: 'perspective(600px) rotateX(68deg)'
        }}
      />

      <div 
        className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] h-[320px] pointer-events-none rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.2) 0%, rgba(0, 112, 243, 0.1) 45%, transparent 75%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full pt-4 sm:pt-6">
        <div className="grid-backdrop-title flex flex-col items-center mb-5 sm:mb-8 z-30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-display font-semibold tracking-wider mb-3.5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
            <Music className="w-3.5 h-3.5 text-cyan-400" />
            <span>Soundtrack Kenangan · Tri & Ahnaf</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em] uppercase mb-2 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Melodi Perjalanan Kita
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-sm sm:max-w-md mx-auto leading-relaxed">
            Lagu-lagu yang selalu menemani obrolan larut malam, perjalanan pulang, dan setiap momen manis bersama.
          </p>
        </div>

        <div className="appreciations-deck-stage relative w-full max-w-3xl h-[280px] sm:h-[350px] md:h-[390px] flex items-center justify-center [perspective:1200px]">
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {SPOTIFY_TRACKS.map((track, idx) => {
              const diff = idx - activeIdx;
              const isCenter = diff === 0;

              const spacing = isMobile ? 85 : 175;
              const outerSpacing = isMobile ? 150 : 310;

              let x = 0;
              let z = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;

              if (diff === 0) {
                x = 0;
                z = isMobile ? 35 : 75;
                rotateY = 0;
                scale = isMobile ? 1.02 : 1.06;
                opacity = 1;
                zIndex = 30;
              } else if (diff === -1) {
                x = -spacing;
                z = -30;
                rotateY = 24;
                scale = 0.88;
                opacity = 0.65;
                zIndex = 20;
              } else if (diff === -2) {
                x = -outerSpacing;
                z = -90;
                rotateY = 36;
                scale = 0.74;
                opacity = 0.35;
                zIndex = 10;
              } else if (diff === 1) {
                x = spacing;
                z = -30;
                rotateY = -24;
                scale = 0.88;
                opacity = 0.65;
                zIndex = 20;
              } else if (diff === 2) {
                x = outerSpacing;
                z = -90;
                rotateY = -36;
                scale = 0.74;
                opacity = 0.35;
                zIndex = 10;
              } else {
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={track.id}
                  onClick={() => {
                    if (idx === activeIdx) {
                      togglePlay();
                    } else {
                      setActiveIdx(idx);
                    }
                  }}
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="absolute cursor-pointer will-change-transform"
                >
                  <div className={`relative w-44 h-60 sm:w-56 sm:h-76 md:w-64 md:h-88 rounded-2xl sm:rounded-[26px] p-1.5 sm:p-2 bg-[#050811] border transition-all duration-300 ${
                    isCenter 
                      ? 'border-cyan-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,210,255,0.3)] ring-1 ring-cyan-300/30' 
                      : 'border-white/10 hover:border-white/25 shadow-2xl'
                  }`}>

                    {isCenter && (
                      <div 
                        className={`absolute -top-3 sm:-top-5 right-2 sm:right-3 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 border-2 border-zinc-700 shadow-2xl flex items-center justify-center transition-all duration-700 pointer-events-none ${
                          isPlaying ? 'translate-x-8 sm:translate-x-14 -translate-y-4 opacity-90 animate-[spin_8s_linear_infinite]' : 'translate-x-0 translate-y-0 opacity-0'
                        }`}
                        style={{ zIndex: -1 }}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-600 bg-red-950/60 flex items-center justify-center">
                          <Disc3 className="w-4 h-4 text-cyan-300" />
                        </div>
                      </div>
                    )}

                    <div className="w-full h-full rounded-xl sm:rounded-[22px] overflow-hidden relative bg-black">
                      <img 
                        src={track.img} 
                        alt={track.title} 
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isCenter ? 'filter contrast-[1.08] brightness-[0.98]' : 'filter grayscale-[50%] contrast-95 brightness-75'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3.5 sm:p-5 text-left">
                        <div className="flex items-end justify-between gap-2">
                          <div className="min-w-0">
                            <span className="block text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate drop-shadow-md">
                              {track.title}
                            </span>
                            <span className="block text-xs sm:text-sm font-sans text-slate-300 font-light mt-0.5 truncate drop-shadow">
                              {track.artist}
                            </span>
                          </div>
                          {isCenter && (
                            <div className="flex items-end gap-[3px] h-4 mb-1 flex-shrink-0">
                              <span 
                                className={`w-[2.5px] sm:w-[3px] rounded-full bg-cyan-400 transition-all ${isPlaying ? 'animate-[bounce_0.8s_ease-in-out_infinite]' : 'h-1'}`} 
                                style={{ height: isPlaying ? '14px' : '4px', animationDelay: '0ms' }} 
                              />
                              <span 
                                className={`w-[2.5px] sm:w-[3px] rounded-full bg-cyan-400 transition-all ${isPlaying ? 'animate-[bounce_0.6s_ease-in-out_infinite]' : 'h-2'}`} 
                                style={{ height: isPlaying ? '18px' : '8px', animationDelay: '150ms' }} 
                              />
                              <span 
                                className={`w-[2.5px] sm:w-[3px] rounded-full bg-cyan-400 transition-all ${isPlaying ? 'animate-[bounce_0.9s_ease-in-out_infinite]' : 'h-1.5'}`} 
                                style={{ height: isPlaying ? '15px' : '6px', animationDelay: '300ms' }} 
                              />
                              <span 
                                className={`w-[2.5px] sm:w-[3px] rounded-full bg-cyan-400 transition-all ${isPlaying ? 'animate-[bounce_0.7s_ease-in-out_infinite]' : 'h-2'}`} 
                                style={{ height: isPlaying ? '10px' : '5px', animationDelay: '450ms' }} 
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="spotify-player-dock relative z-30 w-full max-w-xl mx-auto mt-6 sm:mt-10 px-3 flex flex-col items-center gap-3">
          <div className="w-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-[#050811]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(0,112,243,0.2)] flex flex-col gap-2.5">
            
            <div className="w-full flex items-center justify-between gap-3 relative">
              <div className="flex items-center gap-2.5 min-w-0 max-w-[28%] sm:max-w-[32%] z-10">
                <img 
                  src={activeTrack.img} 
                  alt={activeTrack.title} 
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg object-cover border border-white/10 flex-shrink-0"
                />
                <div className="min-w-0 flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-tight truncate">
                    {activeTrack.title}
                  </span>
                  <span className="text-[10px] sm:text-xs font-sans text-slate-400 truncate">
                    {activeTrack.artist}
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-20">
                <button 
                  onClick={() => setIsShuffle(!isShuffle)} 
                  className={`p-1.5 transition-colors ${isShuffle ? 'text-cyan-400' : 'text-white/40 hover:text-white'}`}
                  aria-label="Toggle shuffle"
                >
                  <Shuffle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                <button 
                  onClick={handlePrev} 
                  className="p-1.5 text-white/70 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous track"
                >
                  <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                </button>

                <button 
                  onClick={togglePlay} 
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black hover:scale-105 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-black" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-black ml-0.5" />
                  )}
                </button>

                <button 
                  onClick={handleNext} 
                  className="p-1.5 text-white/70 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Next track"
                >
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                </button>
              </div>

              <div className="flex items-center gap-2 justify-end min-w-0 max-w-[28%] sm:max-w-[32%] z-10">
                <button 
                  onClick={toggleMute}
                  className="p-1 text-white/60 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  aria-label="Toggle mute"
                >
                  {volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-white/40" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white/70" />
                  )}
                </button>
                <div 
                  onClick={handleVolumeClick} 
                  className="w-14 sm:w-20 h-3 flex items-center cursor-pointer group flex-shrink-0"
                >
                  <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
                    <div 
                      className="h-full bg-cyan-400 group-hover:bg-cyan-300 transition-all" 
                      style={{ width: `${volume}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-2.5 text-[10px] sm:text-[11px] text-white/50 select-none font-sans">
              <span className="w-8 text-right tabular-nums">
                {formatTime(currentTime)}
              </span>
              <div 
                onClick={handleProgressClick}
                className="flex-1 h-3 flex items-center cursor-pointer group"
              >
                <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/15 overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:brightness-125 transition-all duration-100" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>
              <span className="w-8 text-left tabular-nums">
                {duration ? formatTime(duration) : activeTrack.duration}
              </span>
            </div>

          </div>

          <div className="text-[11px] text-white/40 flex items-center gap-2 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
            <span className="font-display font-medium text-white/70">Daftar Lagu Kenangan</span>
            <span className="text-white/20">·</span>
            <span className="text-cyan-400">2024 — 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
