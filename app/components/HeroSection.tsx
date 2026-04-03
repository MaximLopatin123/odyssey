'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = false;
    video.preload = 'auto';

    let direction: 1 | -1 = 1;
    let rafId: number | null = null;
    let active = true;
    let lastTs = 0;
    const SPEED = 1.0;

    function startReverse() {
      if (!active) return;
      lastTs = 0;
      rafId = requestAnimationFrame(reverseFrame);
    }

    function reverseFrame(ts: number) {
      if (!active || !video) return;
      const dt = lastTs ? (ts - lastTs) / 1000 : 0;
      lastTs = ts;
      video.currentTime = Math.max(0, video.currentTime - dt * SPEED);
      if (video.currentTime <= 0.05) {
        direction = 1;
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }
      rafId = requestAnimationFrame(reverseFrame);
    }

    function onEnded() {
      direction = -1;
      if (rafId) cancelAnimationFrame(rafId);
      startReverse();
    }

    function onTimeUpdate() {
      if (!video) return;
      if (direction === 1 && video.duration && video.currentTime >= video.duration - 0.15) {
        video.pause();
        onEnded();
      }
    }

    video.addEventListener('ended', onEnded);
    video.addEventListener('timeupdate', onTimeUpdate);

    video.addEventListener('canplay', () => {
      video.style.opacity = '1';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!video) return;
        if (entries[0].isIntersecting) {
          active = true;
          if (direction === 1) video.play().catch(() => {});
          else startReverse();
        } else {
          active = false;
          video.pause();
          if (rafId) cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    video.play().catch(() => {});

    return () => {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('timeupdate', onTimeUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[#080808]"
    >
      {/* Static dark background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#080808] via-[#0a0a0a] to-[#080808]" />

      {/* Video — right side accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[45vw] max-w-[620px] hidden md:block pointer-events-none select-none">
        {/* Glow behind video */}
        <div className="absolute inset-0 bg-[#00e5cc]/8 blur-[80px] rounded-full scale-75" />
        <video
          ref={videoRef}
          className="w-full h-auto object-contain transition-opacity duration-700 opacity-80 mix-blend-luminosity"
          style={{ opacity: 0 }}
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Fade left edge into background */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#00e5cc]/5 to-[#080808]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-[#080808]/40" />
      </div>

      {/* Content — left-aligned */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[560px]">
          <p className="font-mono text-xs tracking-[0.3em] text-[#00e5cc]/70 uppercase mb-6">
            Компьютерный клуб
          </p>

          <h1 className="text-[clamp(4rem,12vw,9rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#f0f0f0] uppercase mb-6">
            Одис<br />сей
          </h1>

          <div className="flex items-start gap-4 mb-8">
            <div className="mt-2 h-px w-12 shrink-0 bg-[#00e5cc]" />
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Профессиональные игровые станции. Топовая периферия.
              Атмосфера победителей.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center px-7 py-3.5 bg-[#00e5cc] text-black text-xs tracking-widest uppercase font-mono font-bold hover:bg-white transition-colors duration-200 active:scale-[0.98]"
            >
              Начать играть
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-7 py-3.5 border border-white/20 text-white/70 text-xs tracking-widest uppercase font-mono hover:border-[#00e5cc]/50 hover:text-[#00e5cc] transition-all duration-200"
            >
              О клубе
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-8 md:gap-16">
          {[
            { value: '40+', label: 'Игровых мест' },
            { value: '4K', label: 'Мониторы' },
            { value: '240', label: 'Гц обновление' },
            { value: '24/7', label: 'Открыто' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl md:text-3xl font-bold text-[#00e5cc] tracking-tight">
                {s.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/40 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#00e5cc]/50 animate-pulse" />
      </div>
    </section>
  );
}
