export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00e5cc]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-[#00e5cc]/60 uppercase mb-4">
            04 — Контакты
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] uppercase leading-tight">
            Найди нас
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-20">
          {/* Map placeholder + info */}
          <div className="space-y-12">
            {/* Map embed placeholder */}
            <div className="relative w-full aspect-[16/7] bg-[#0d0d0d] border border-white/8 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,229,204,0.15) 31px, rgba(0,229,204,0.15) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(0,229,204,0.15) 31px, rgba(0,229,204,0.15) 32px)`
                }}
              />
              <div className="relative z-10 text-center">
                <div className="w-4 h-4 bg-[#00e5cc] rounded-full mx-auto mb-3 animate-ping" />
                <p className="font-mono text-xs text-[#00e5cc]/70 tracking-widest uppercase">
                  ул. Победы, д. 12
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  label: 'Адрес',
                  value: 'ул. Победы, 12',
                  sub: 'Центральный район',
                },
                {
                  label: 'Режим работы',
                  value: '24 / 7',
                  sub: 'Без выходных',
                },
                {
                  label: 'Телефон',
                  value: '+7 (912) 847-3201',
                  sub: 'Звонок и WhatsApp',
                },
                {
                  label: 'Email',
                  value: 'play@odyssey.club',
                  sub: 'Ответим в течение часа',
                },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/8 pt-5">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#f0f0f0] font-semibold">{item.value}</p>
                  <p className="text-xs text-white/30 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-[36ch]">
                Забронируй место заранее — гарантированный Про или VIP-стол
                ждёт тебя. Бронирование через Telegram или WhatsApp.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/odysseyclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#00e5cc] text-black text-xs tracking-widest uppercase font-mono font-bold hover:bg-white transition-colors duration-200 active:scale-[0.98]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.12 14.287 4.17 13.4c-.657-.204-.67-.657.136-.973l10.898-4.201c.548-.198 1.027.136.847.972l-.489-.95z"/>
                  </svg>
                  Telegram
                </a>
                <a
                  href="tel:+79128473201"
                  className="inline-flex items-center gap-3 px-6 py-4 border border-white/15 text-white/60 text-xs tracking-widest uppercase font-mono hover:border-[#00e5cc]/50 hover:text-[#00e5cc] transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                  Позвонить
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-4">
                Соцсети
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'VK', href: '#' },
                  { name: 'TG', href: '#' },
                  { name: 'YT', href: '#' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="font-mono text-xs tracking-wider text-white/30 hover:text-[#00e5cc] transition-colors duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
