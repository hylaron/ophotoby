import { useEffect, useState } from 'react';
import { CONTACTS } from '../data';
import { RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';
import { FaViber, FaWhatsapp } from 'react-icons/fa';

const NAV = [
  { id: 'advantages', label: 'ПОЧЕМУ МЫ' },
  { id: 'beforeafter',label: 'ДО / ПОСЛЕ' },
  { id: 'services',   label: 'УСЛУГИ'      },
  { id: 'documents',  label: 'ДОКУМЕНТЫ'   },
  { id: 'faq',        label: 'FAQ'         },
];

const MESSENGERS = [
  { label: <RiTelegram2Fill />, href: CONTACTS.tg,    title: 'Telegram' },
  { label: <RiInstagramLine />, href: CONTACTS.inst,  title: 'Instagram' },
  { label: <FaViber />, href: CONTACTS.viber, title: 'Viber' },
  { label: <FaWhatsapp />, href: CONTACTS.wa,    title: 'WhatsApp' },
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
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-lg">
      {/* TOP STRIP — geo + hours + phone */}
      <div className="border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-6 px-5 text-[10px] uppercase tracking-[0.24em] sm:px-10">
          <a
            href={CONTACTS.geoUrl}
            target="_blank" rel="noreferrer"
            className="group flex items-center gap-2 text-white/70 transition hover:text-white"
          >
            <span className="text-red">●</span>
            <span className='max-sm:hidden'>{CONTACTS.address}</span>
            <span className='sm:hidden'>Мы на карте</span>

            <span className="opacity-0 transition group-hover:opacity-100 max-sm:hidden">→</span>
          </a>

          <span className="ml-auto hidden text-white/50 lg:inline">{CONTACTS.hours}</span>
          <span className="hidden text-white/30 lg:inline">/</span>
          <a
            href={CONTACTS.phoneHref}
            className="font-mono text-[11px] font-medium tracking-normal text-red transition hover:text-white"
          >
            {CONTACTS.phone}
          </a>
        </div>
      </div>

      {/* MAIN BAR */}
      <div
        className={`transition-all duration-300
          ${scrolled
            ? 'border-b border-white/10 bg-black/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-black/55'}`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 sm:h-[72px] sm:px-10">
          {/* logo */}
          <a href="#top" className="flex items-center gap-1">
            {/* <span className="relative grid h-7 w-7 place-items-center">
              <span className="absolute inset-0 rounded-full border border-red/50" />
              <span className="absolute inset-0 halftone opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_12px_#DF8777]" />
            </span> */}
            <img src="./logo.webp" className='size-8' alt="" srcset="" />
            <span className="font-display text-[16px] font-bold tracking-tight">
            photo<span className="text-red">.by</span>
            </span>
          </a>

          {/* nav */}
          <nav className="ml-6 hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* right: messengers + booking */}
          <div className="ml-auto flex items-center gap-4">
            {/* phone — visible on md+ near booking */}
            <a
              href={CONTACTS.phoneHref}
              className="hidden font-mono text-[13px] font-medium text-white transition hover:text-red xl:inline"
            >
              {CONTACTS.phone}
            </a>

            {/* messengers */}
            <div className="hidden items-center gap-1 md:flex">
              {MESSENGERS.map((m,i) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank" rel="noreferrer"
                  title={m.title}
                  className="grid h-9 w-9 place-items-center border border-white/15 text-[16px] font-bold uppercase tracking-widest text-white/70 transition hover:border-red hover:bg-red hover:text-black"
                >
                  {m.label}
                </a>
              ))}
            </div>

            {/* booking */}
            <a
              href={CONTACTS.bookingUrl}
              target="_blank" rel="noreferrer"
              className="hidden items-center gap-3 bg-red px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white md:inline-flex rounded"
            >
              ЗАПИСАТЬСЯ <span>→</span>
            </a>

            {/* burger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              className="grid h-10 w-10 place-items-center md:hidden"
            >
              <span className="relative block h-3 w-6">
                <span className={`absolute left-0 h-px w-6 bg-white transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-1.5 h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-px w-6 bg-white transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-black transition-[max-height,opacity] duration-500 md:hidden
            ${open ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col px-5 py-3">
            {/* geo */}
            <a
              href={CONTACTS.geoUrl} target="_blank" rel="noreferrer"
              className="flex items-start gap-3 border-b border-white/5 py-4"
            >
              <span className="mt-0.5 text-red">●</span>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                  {CONTACTS.address}
                </div>
                <div className="mt-1 text-[11px] text-white/50">{CONTACTS.hours} · по записи</div>
              </div>
            </a>

            {/* nav */}
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70"
              >
                {n.label}
              </a>
            ))}

            {/* phone */}
            <a
              href={CONTACTS.phoneHref}
              className="border-b border-white/5 py-4 font-mono text-lg text-red"
            >
              {CONTACTS.phone}
            </a>

            {/* messengers */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {MESSENGERS.map((m) => (
                <a
                  key={m.label}
                  href={m.href} target="_blank" rel="noreferrer"
                  className="grid h-11 place-items-center border border-white/15 text-[11px] font-bold uppercase text-white/80"
                >
                  {m.label}
                </a>
              ))}
            </div>

            <a
              href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 bg-red py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-black"
            >
              ЗАПИСАТЬСЯ НА СЪЁМКУ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}