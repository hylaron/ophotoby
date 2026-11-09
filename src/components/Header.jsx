import { useEffect, useState } from 'react';
import { CONTACTS } from '../data';
import { RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';
import { FaViber, FaWhatsapp } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';

const NAV = [
  { id: 'advantages', label: 'Почему мы' },
  { id: 'beforeafter', label: 'До / После' },
  { id: 'services',   label: 'Услуги' },
  { id: 'documents',  label: 'Документы' },
  { id: 'faq',        label: 'FAQ' },
];

const MESSENGERS = [
  { title: 'Telegram',  href: CONTACTS.tg,    icon: <RiTelegram2Fill /> },
  { title: 'Instagram', href: CONTACTS.inst,  icon: <RiInstagramLine /> },
  { title: 'Viber',     href: CONTACTS.viber, icon: <FaViber /> },
  { title: 'WhatsApp',  href: CONTACTS.wa,    icon: <FaWhatsapp /> },
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
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Верхняя тонкая полоса */}
      <div className="border-b border-black/5 bg-white backdrop-blur-md">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between gap-3 px-5 text-[14px] tracking-wide sm:gap-6 sm:px-10 text-black/80">
          <a href={CONTACTS.geoUrl} target="_blank" rel="noreferrer" className="group flex min-w-0 items-center gap-2 transition hover:text-black">
            <span className="text-[20px] -mb-[1px] text-red"><TbPointFilled/></span>
            <span className="hidden truncate md:inline">{CONTACTS.address}</span>
            <span className="md:hidden">Мы на карте</span>
          </a>

          <span className="ml-auto hidden whitespace-nowrap lg:inline">{CONTACTS.hours}</span>
          <span className="hidden text-red lg:inline">/</span>

          <a href={CONTACTS.phoneHref} className="shrink-0 whitespace-nowrap font-mono text-[12px] font-medium text-red transition hover:text-red">
            {CONTACTS.phone}
          </a>
        </div>
      </div>

      {/* Основная шапка */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-black/5' : 'bg-white/20 backdrop-blur-sm'}`}>
        <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-5 sm:px-10">
          
          <a href="#top" className="flex items-baseline gap-0.5 shrink-0 text-4xl">
            <span className="font-logo font-bold text-red">О!</span>
            <span className="font-logo font-medium text-black">Фото</span>
          </a>

          <nav className="ml-8 hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-[16px] text-black transition hover:text-red">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-5">
            <a href={CONTACTS.phoneHref} className="hidden font-mono text-[16px] text-black transition hover:text-red xl:inline">
              {CONTACTS.phone}
            </a>

            <div className="hidden items-center gap-1.5 md:flex">
              {MESSENGERS.map((m) => (
                <a key={m.title} href={m.href} target="_blank" rel="noreferrer" title={m.title} className="grid h-8 w-8 place-items-center rounded bg-white/50 border border-black/80 text-[16px] text-black/80 transition hover:bg-red hover:border-red hover:text-white">
                  {m.icon}
                </a>
              ))}
            </div>

            <a href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer" className="hidden uppercase items-center justify-center rounded bg-red px-6 py-2.5 text-[12px] font-medium text-white transition hover:bg-red sm:inline-flex">
              Записаться
            </a>

            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center lg:hidden text-black">
              <span className="relative block h-4 w-6">
                <span className={`absolute left-0 h-[1.5px] w-6 bg-black transition-all ${open ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 h-[1.5px] w-6 bg-black transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-[1.5px] w-6 bg-black transition-all ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
              </span>
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        <div className={`overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${open ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col px-5 py-3">
             {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="border-b border-black/5 py-4 text-[14px] text-black/80">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}