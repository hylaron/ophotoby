import { useEffect, useState } from 'react';
import { CONTACTS } from '../data';

const NAV = [
  { id: 'steps',    label: 'Как это работает' },
  { id: 'pricing',  label: 'Цены' },
  { id: 'location', label: 'Где мы' },
  { id: 'booking',  label: 'Запись' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all
        ${scrolled ? 'bg-white/85 backdrop-blur-lg shadow-[0_2px_20px_rgba(88,101,242,0.08)]' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-6 px-5">
        {/* Лого */}
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-blurple text-white">o</span>
          ophoto<span className="text-blurple">.by</span>
        </a>

        {/* Навигация */}
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition
                         hover:bg-mist hover:text-blurple"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACTS.phoneHref}
          className="ml-auto hidden text-sm font-semibold text-ink/80 hover:text-blurple md:block"
        >
          {CONTACTS.phone}
        </a>

        <a
          href={CONTACTS.bookingUrl}
          className="hidden rounded-full bg-blurple px-5 py-2.5 text-sm font-semibold text-white
                     shadow-[0_8px_24px_-6px_rgba(88,101,242,0.7)]
                     transition hover:brightness-110 active:scale-95 md:inline-block"
        >
          Записаться
        </a>

        {/* Бургер */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Меню"
          className="ml-auto grid h-10 w-10 place-items-center rounded-2xl bg-mist md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-blurple transition-all ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-blurple transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-blurple transition-all ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`overflow-hidden bg-white/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden
                       ${open ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 px-5 pb-5">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-medium hover:bg-mist"
            >
              {n.label}
            </a>
          ))}
          <a
            href={CONTACTS.bookingUrl}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-2xl bg-blurple px-4 py-3 text-center font-semibold text-white"
          >
            Записаться на фото
          </a>
        </nav>
      </div>
    </header>
  );
}