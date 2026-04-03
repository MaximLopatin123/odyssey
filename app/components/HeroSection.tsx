'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const img = imageRef.current;
    if (!video || !img) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = false;
    video.preload = 'auto';

    video.addEventListener('ended', () => {
      img.style.opacity = '1';
    });

    video.play().catch(() => {});

    return () => {};
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[#080808]"
    >
      {/* Static dark background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#080808] via-[#0a0a0a] to-[#080808]" />

      {/* Video + Photo stacked — right side accent */}
      <div className="absolute right-0 top-0 bottom-0 z-10 w-[48vw] max-w-[600px] pointer-events-none select-none hidden md:flex items-center overflow-hidden">
        <div className="relative w-full">
          <video
            ref={videoRef}
            className="w-full h-auto block"
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Photo on top — fills exact same box as video */}
          <img
            ref={imageRef}
            src="/helmet.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            style={{ opacity: 0, background: '#080808' }}
          />
        </div>
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/20 to-transparent pointer-events-none" />
        {/* Fade top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-transparent to-[#080808]/70 pointer-events-none" />
      </div>

      {/* Mobile video — small, below content */}
      <div className="absolute right-0 bottom-24 z-10 w-[60vw] pointer-events-none select-none overflow-hidden md:hidden">
        <video
          muted
          playsInline
          preload="auto"
          autoPlay
          className="w-full h-auto opacity-40"
          onEnded={(e) => (e.target as HTMLVideoElement).pause()}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808]" />
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
