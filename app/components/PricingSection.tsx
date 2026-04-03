const plans = [
  {
    name: 'Стандарт',
    price: '100',
    unit: 'час',
    description: 'Обычное игровое место. Всё необходимое для комфортной игры.',
    features: [
      'RTX 4070 / i7-13700',
      'Монитор 165 Гц 1080p',
      'Механическая клавиатура',
      'Гарнитура включена',
      'Доступ к кафе',
    ],
    accent: false,
  },
  {
    name: 'Про',
    price: '150',
    unit: 'час',
    description: 'Флагманские ПК с мониторами 240 Гц. Для тех, кто играет серьёзно.',
    features: [
      'RTX 4080 Super / Ryzen 9',
      'Монитор 240 Гц 1440p G-Sync',
      'Клавиатура + мышь Pro',
      'Hi-Fi гарнитура',
      'Приоритетная поддержка',
      'Доступ к кафе',
    ],
    accent: true,
  },
  {
    name: 'VIP',
    price: '400',
    unit: 'час',
    description: 'Приватная кабинка на 4 места. Идеально для команды или особого случая.',
    features: [
      '4 × RTX 4080 Super',
      '4 × Монитор 240 Гц',
      'Изолированная кабинка',
      'Выделенный менеджер',
      'Снеки и напитки в подарок',
      'Стриминг по запросу',
    ],
    accent: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-[#00e5cc]/60 uppercase mb-4">
            03 — Цены
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] uppercase leading-tight">
            Прозрачно.<br />
            <span className="text-[#00e5cc]">Без скрытых платежей.</span>
          </h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 lg:p-10 gap-8 transition-colors duration-300 ${
                plan.accent
                  ? 'bg-[#0d1413] border-t-2 border-[#00e5cc]'
                  : 'bg-[#080808] hover:bg-[#0d0d0d]'
              }`}
            >
              {plan.accent && (
                <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase text-[#00e5cc] border border-[#00e5cc]/30 px-2 py-1">
                  Популярный
                </span>
              )}

              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-[#f0f0f0] tracking-tight">
                    {plan.price}
                    <span className="text-white/30 text-lg">₽</span>
                  </span>
                  <span className="font-mono text-xs text-white/30 ml-1">
                    / {plan.unit}
                  </span>
                </div>
                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="h-px bg-white/5" />

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-0.5 text-[#00e5cc] shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest uppercase font-mono transition-all duration-200 active:scale-[0.98] ${
                  plan.accent
                    ? 'bg-[#00e5cc] text-black hover:bg-white'
                    : 'border border-white/15 text-white/60 hover:border-[#00e5cc]/50 hover:text-[#00e5cc]'
                }`}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>

        {/* Night tariff note */}
        <div className="mt-8 flex items-center gap-4 text-white/30 text-sm">
          <div className="h-px w-8 bg-white/10" />
          <p>
            Ночной тариф (00:00–08:00): скидка 30% на любой тип места.
          </p>
        </div>
      </div>
    </section>
  );
}
