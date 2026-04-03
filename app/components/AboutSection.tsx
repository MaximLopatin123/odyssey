import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00e5cc]/20 to-transparent ml-6 md:ml-12" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <p className="font-mono text-xs tracking-[0.3em] text-[#00e5cc]/60 uppercase mb-4 ml-0 md:ml-[20vw]">
          01 — О клубе
        </p>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center">
          {/* Image block */}
          <div className="relative aspect-square max-w-[360px] mx-auto md:mx-0">
            <div className="absolute inset-0 border border-[#00e5cc]/15 translate-x-3 translate-y-3" />
            <Image
              src="/helmet.jpg"
              alt="Одиссей"
              fill
              className="object-cover grayscale-[20%] contrast-110"
              sizes="(max-width: 768px) 360px, 400px"
            />
            {/* Teal corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#00e5cc]" />
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00e5cc]/40" />
          </div>

          {/* Text block */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-tight text-[#f0f0f0] uppercase mb-8">
              Легендарный<br />
              <span className="text-[#00e5cc]">клуб</span>
            </h2>

            <div className="space-y-5 text-white/55 leading-relaxed text-[15px] max-w-[55ch]">
              <p>
                Одиссей — это не просто компьютерный клуб. Это место, где
                каждая сессия становится эпосом. Мы создали пространство,
                в котором технологии, комфорт и азарт объединяются в одном зале.
              </p>
              <p>
                Более 40 игровых станций с актуальным железом: процессоры
                последнего поколения, видеокарты уровня RTX, мониторы
                240 Гц с поддержкой 4K. Каждая деталь подобрана так, чтобы
                ты играл на максимуме.
              </p>
              <p>
                Кресла DXRacer, механические клавиатуры, профессиональные
                мыши и гарнитуры. Мы не экономим там, где это важно.
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mt-10">
              {[
                'RTX 4080+',
                'i9 / Ryzen 9',
                '240 Гц',
                '4K',
                'DXRacer',
                'Fiber 1Gbps',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-xs font-mono tracking-widest border border-[#00e5cc]/25 text-[#00e5cc]/80 uppercase"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
