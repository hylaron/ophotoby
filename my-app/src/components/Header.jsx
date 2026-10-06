import { useEffect, useState } from 'react';
import { CONTACTS } from '../data';

const NAV = [
  { id: 'about',      label: 'ОБО МНЕ' },
  { id: 'gallery',    label: 'РАБОТЫ' },
  { id: 'conditions', label: 'ПРОЦЕСС' },
  { id: 'pricing',    label: 'ТАРИФЫ' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-5 sm:h-20 sm:px-10">
        {/* logo */}
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold tracking-tight">
            o!photo<span className="text-red">.by</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACTS.bookingUrl}
          target="_blank" rel="noreferrer"
          className="ml-auto hidden rounded items-center gap-3 border border-white/15 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition hover:border-red hover:bg-red md:inline-flex"
        >
          ЗАПИСАТЬСЯ
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="menu"
          className="ml-auto grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-white transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-px w-6 bg-white transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-black/30 transition-[max-height,opacity] duration-500 md:hidden
        ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-5 py-4">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
               className="border-b border-white/5 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              {n.label}
            </a>
          ))}
          <a href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
             className="mt-4 bg-red rounded py-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            ЗАПИСАТЬСЯ
          </a>
        </nav>
      </div>
    </header>
  );
}