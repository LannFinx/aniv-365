import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function DocumentOpeningGate({ onUnlock, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const containerRef = useRef(null);
  const centerContentRef = useRef(null);
  const triggerBtnRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const ambientHaloRef = useRef(null);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.45 + 0.15,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.3 - 0.12
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00d2ff';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const playChimeSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = [392.00, 523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 1.4);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 1.5);
      });
    } catch {
    }
  };

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    if (containerRef.current) {
      containerRef.current.style.pointerEvents = 'none';
    }

    playChimeSound();

    if (onUnlock) {
      onUnlock();
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      }
    });

    tl.to(triggerBtnRef.current, {
      scale: 1.15,
      filter: 'drop-shadow(0 0 50px rgba(0, 210, 255, 1))',
      duration: 0.35,
      ease: 'back.out(2)'
    })
    .to(centerContentRef.current, {
      opacity: 0,
      y: -35,
      duration: 0.65,
      ease: 'power2.in'
    }, '-=0.1')
    .to(ambientHaloRef.current, {
      scale: 4,
      opacity: 0.8,
      duration: 1.0,
      ease: 'power2.out'
    }, '-=0.45')
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.65,
      ease: 'power2.inOut'
    }, '-=0.35');
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black select-none overflow-hidden px-6"
    >
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div
        ref={ambientHaloRef}
        className="absolute w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-[80px] sm:blur-[140px] opacity-35"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.25) 0%, rgba(0, 112, 243, 0.15) 45%, transparent 75%)'
        }}
      />

      <div 
        ref={centerContentRef} 
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center py-8"
      >
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
          <span className="font-display font-medium text-white/50 text-xs sm:text-sm tracking-widest uppercase">
            20.10.2025 — 20.10.2026
          </span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[-0.05em] uppercase leading-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] mb-8 sm:mb-12">
          Tri Ayuaningsih
        </h1>

        <button
          ref={triggerBtnRef}
          onClick={handleOpen}
          disabled={isOpening}
          className="group relative inline-flex items-center gap-3.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-cyan-400/40 hover:border-cyan-300 text-white transition-all duration-300 backdrop-blur-xl shadow-[0_0_30px_rgba(0,112,243,0.3)] hover:shadow-[0_0_45px_rgba(0,210,255,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Buka Kenangan 365 Hari"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md group-hover:bg-cyan-400/25 transition-all" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF] animate-pulse relative z-10" />
          <span className="font-display font-semibold text-xs sm:text-sm tracking-widest uppercase relative z-10">
            Buka Kenangan
          </span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform relative z-10" />
        </button>
      </div>
    </div>
  );
}
