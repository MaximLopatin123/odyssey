const features = [
  {
    number: '01',
    title: 'Игровые станции',
    description:
      'RTX 4080 Super, Ryzen 9 7950X, 32 ГБ DDR5, NVMe 2 ТБ. Каждое место — флагман.',
    tag: 'Hardware',
  },
  {
    number: '02',
    title: 'Мониторы 240 Гц',
    description:
      'IPS-панели с поддержкой 1440p и 240 Гц. G-Sync и FreeSync Premium Pro на каждом столе.',
    tag: 'Display',
  },
  {
    number: '03',
    title: 'Периферия Pro',
    description:
      'Механические клавиатуры, сенсоры PixArt 3395, гарнитуры Hi-Fi уровня. Никаких компромиссов.',
    tag: 'Peripherals',
  },
  {
    number: '04',
    title: 'Приватные зоны',
    description:
      'Изолированные кабинки с акустической отделкой для командной игры или турниров.',
    tag: 'VIP',
  },
  {
    number: '05',
    title: 'Кибер-кафе',
    description:
      'Кофе, энергетики, снеки и горячая еда. Заряжайся, не выходя из зоны.',
    tag: 'Food & Drink',
  },
  {
    number: '06',
    title: 'Турниры',
    description:
      'Еженедельные соревнования по CS2, Dota 2, Valorant. Призовые фонды, рейтинги, стримы.',
    tag: 'Esports',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#00e5cc]/60 uppercase mb-4">
              02 — Услуги
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight uppercase">
              Всё для победы
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-[36ch] leading-relaxed md:text-right">
            Оборудование на уровне киберспортивных арен.
            Без лишних слов — просто войди и играй.
          </p>
        </div>

        {/* Asymmetric grid — 2-column zig-zag */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f) => (
            <div
              key={f.number}
              className="group bg-[#080808] p-8 lg:p-10 flex flex-col gap-5 hover:bg-[#0d0d0d] transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#00e5cc]/40 tracking-widest">
                  {f.number}
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20 border border-white/10 px-2 py-1">
                  {f.tag}
                </span>
              </div>

              <div className="w-8 h-px bg-[#00e5cc] group-hover:w-16 transition-all duration-500" />

              <h3 className="text-xl font-bold tracking-tight text-[#f0f0f0]">
                {f.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed flex-1">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
