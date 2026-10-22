import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { ARC_MEMORIES, SPOTIFY_TRACKS } from './data/memories';
import AudioToggle from './components/AudioToggle';
import DocumentOpeningGate from './components/DocumentOpeningGate';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import ArcCarouselSection from './components/ArcCarouselSection';
import PerspectiveGridSection from './components/PerspectiveGridSection';
import LoveLetterSection from './components/LoveLetterSection';
import FinaleSection from './components/FinaleSection';
import ParallaxMemoryVoid from './components/ParallaxMemoryVoid';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [activeArcIdx, setActiveArcIdx] = useState(0);

  const audioRef = useRef(null);
  const lenisInstanceRef = useRef(null);
  const mainContainerRef = useRef(null);

  const handleSelectArc = (idx) => {
    setActiveArcIdx(idx);
  };

  const handleSelectTrack = (idx) => {
    const newIdx = (idx + SPOTIFY_TRACKS.length) % SPOTIFY_TRACKS.length;
    setCurrentTrackIdx(newIdx);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = SPOTIFY_TRACKS[newIdx].src;
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsAudioPlaying(true);
          })
          .catch(() => { });
      }
    }
  };

  const handleUnlockGate = () => {
    if (audioRef.current) {
      if (!audioRef.current.src || !audioRef.current.src.includes(encodeURI(SPOTIFY_TRACKS[currentTrackIdx].src))) {
        audioRef.current.src = SPOTIFY_TRACKS[currentTrackIdx].src;
      }
      audioRef.current.volume = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsAudioPlaying(true);
            gsap.to(audioRef.current, { volume: 1, duration: 2.5, ease: 'power2.out' });
          })
          .catch(() => {
            setIsAudioPlaying(false);
          });
      }
    }

    gsap.set(heroContentRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 40,
      filter: 'blur(20px)',
    });

    gsap.to(heroContentRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      delay: 0.35,
      ease: 'power3.out',
    });
  };

  const handleCompleteGate = () => {
    setHasEntered(true);
    if (lenisInstanceRef.current) {
      lenisInstanceRef.current.start();
    }
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      ScrollTrigger.refresh();
      const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
      const t2 = setTimeout(() => ScrollTrigger.refresh(), 350);
      const t3 = setTimeout(() => ScrollTrigger.refresh(), 700);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [hasEntered]);

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => { });
      }
    }
    setIsAudioPlaying(!isAudioPlaying);
  };
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const journeySectionRef = useRef(null);
  const arcSectionRef = useRef(null);
  const arcStageRef = useRef(null);
  const gridSectionRef = useRef(null);
  const letterSectionRef = useRef(null);
  const finaleSectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisInstanceRef.current = lenis;
    lenis.stop();

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=120%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.hero-giant-type', {
            scale: 1 + progress * 0.9,
            y: -progress * 60,
            opacity: Math.max(0, 1 - progress * 1.4),
            filter: `blur(${progress * 22}px)`,
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to('.hero-portrait-subject', {
            scale: 1 + progress * 0.28,
            y: -progress * 40,
            opacity: Math.max(0, 1 - progress * 1.3),
            filter: `blur(${progress * 12}px)`,
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to('.hero-annotation-left', {
            x: -progress * 60,
            opacity: Math.max(0, 1 - progress * 2.2),
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to('.hero-annotation-right', {
            x: progress * 60,
            opacity: Math.max(0, 1 - progress * 2.2),
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to('.hero-scroll-cue', {
            y: -progress * 25,
            opacity: Math.max(0, 1 - progress * 3),
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to('.hero-top-bar', {
            y: -progress * 35,
            opacity: Math.max(0, 1 - progress * 2),
            duration: 0.1,
            overwrite: 'auto',
          });
        },
      });

      const chapterCards = gsap.utils.toArray('.journey-chapter-card');
      const journeyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: journeySectionRef.current,
          start: 'top top',
          end: '+=360%',
          pin: true,
          scrub: 1.2,
        }
      });

      chapterCards.forEach((card, i) => {
        if (i === 0) {
          journeyTimeline
            .to({}, { duration: 1 })
            .to(card, {
              opacity: 0,
              scale: 1.08,
              y: -25,
              filter: 'blur(12px)',
              pointerEvents: 'none',
              duration: 0.8,
            });
        } else {
          journeyTimeline
            .fromTo(card,
              { opacity: 0, scale: 0.92, y: 35, filter: 'blur(12px)', pointerEvents: 'none' },
              { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', pointerEvents: 'auto', duration: 0.8 }
            )
            .to({}, { duration: 1 })
            .to(card, {
              opacity: i === chapterCards.length - 1 ? 1 : 0,
              scale: i === chapterCards.length - 1 ? 1 : 1.08,
              y: i === chapterCards.length - 1 ? 0 : -25,
              filter: i === chapterCards.length - 1 ? 'blur(0px)' : 'blur(12px)',
              clearProps: i === chapterCards.length - 1 ? 'filter' : '',
              pointerEvents: i === chapterCards.length - 1 ? 'auto' : 'none',
              duration: 0.8,
            });
        }
      });

      ScrollTrigger.create({
        trigger: arcSectionRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          const total = ARC_MEMORIES.length;
          const newIdx = Math.min(
            total - 1,
            Math.max(0, Math.round(progress * (total - 1)))
          );
          setActiveArcIdx(newIdx);
        },
      });

      const gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: gridSectionRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 1,
        },
      });

      gridTl
        .fromTo(
          '.perspective-grid-floor',
          { opacity: 0, y: 70, scale: 0.88, filter: 'blur(10px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', clearProps: 'filter', duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
          '.perspective-ground-reflection',
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.grid-backdrop-title',
          { opacity: 0, y: -20, scale: 0.9, filter: 'blur(16px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', clearProps: 'filter', duration: 0.45, ease: 'power3.out' },
          '-=0.35'
        )
        .fromTo(
          '.appreciations-deck-stage',
          { opacity: 0, y: 50, scale: 0.9, filter: 'blur(16px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', clearProps: 'filter', duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.spotify-player-dock',
          { opacity: 0, y: 35, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 0.5, ease: 'power2.out' },
          '-=0.35'
        )
        .to({}, { duration: 1.5 });



      const letterTl = gsap.timeline({
        scrollTrigger: {
          trigger: letterSectionRef.current,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 1.2,
        },
      });

      letterTl
        .fromTo(
          '.letter-chapter-badge',
          { opacity: 0, y: -20, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 0.4 }
        )
        .fromTo(
          '.letter-header-group',
          { opacity: 0, scale: 0.9, filter: 'blur(16px)', y: 25 },
          { opacity: 1, scale: 1, filter: 'blur(0px)', clearProps: 'filter', y: 0, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          '.letter-envelope-stage',
          { opacity: 0, scale: 0.88, filter: 'blur(16px)', y: 35 },
          { opacity: 1, scale: 1, filter: 'blur(0px)', clearProps: 'filter', y: 0, duration: 0.8 },
          '-=0.3'
        )
        .to({}, { duration: 2 });

      ScrollTrigger.create({
        trigger: finaleSectionRef.current,
        start: 'top 80%',
        end: 'bottom bottom',
        onEnter: () => {
          gsap.fromTo(
            '.finale-card',
            { opacity: 0, scale: 0.85, filter: 'blur(18px)', y: 40 },
            { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1, ease: 'power3.out' }
          );
        },
      });


      gsap.to('.memory-track-far', {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.memory-track-mid', {
        yPercent: -45,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.memory-track-near', {
        yPercent: -65,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, mainContainerRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={mainContainerRef} className="bg-black text-white relative min-h-screen selection:bg-cyan-500 selection:text-black">
      {!hasEntered && (
        <DocumentOpeningGate
          onUnlock={handleUnlockGate}
          onComplete={handleCompleteGate}
        />
      )}

      <ParallaxMemoryVoid />

      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => {
          handleSelectTrack((currentTrackIdx + 1) % SPOTIFY_TRACKS.length);
        }}
      />
      <AudioToggle
        isPlaying={isAudioPlaying}
        onToggle={toggleAudio}
      />

      <HeroSection
        heroRef={heroRef}
        heroContentRef={heroContentRef}
      />

      <JourneySection
        journeySectionRef={journeySectionRef}
      />

      <ArcCarouselSection
        arcSectionRef={arcSectionRef}
        activeArcIdx={activeArcIdx}
        onSelectArc={handleSelectArc}
      />

      <PerspectiveGridSection
        gridSectionRef={gridSectionRef}
        currentTrackIdx={currentTrackIdx}
        onSelectTrack={handleSelectTrack}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
        audioRef={audioRef}
      />

      <LoveLetterSection
        letterSectionRef={letterSectionRef}
      />

      <FinaleSection
        finaleSectionRef={finaleSectionRef}
      />
    </div>
  );
}
