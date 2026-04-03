import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Одиссей"
            width={28}
            height={28}
            className="rounded-sm object-contain opacity-70"
          />
          <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase">
            Одиссей — Компьютерный клуб
          </span>
        </div>

        <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
          &copy; {new Date().getFullYear()} Все права защищены
        </p>
      </div>
    </footer>
  );
}
