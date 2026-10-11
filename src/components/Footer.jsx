import { RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';
import { CONTACTS } from '../data';
import { FaViber, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-red opacity-15 blur-[160px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-20 pb-10 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">/ ЗАПИСАТЬСЯ</div>
            <h3 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
              КРАСИВЫЕ<br />ФОТО — ЭТО<br /><span className="text-red">ПРОСТО</span>
            </h3>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-red px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white rounded"
              >
                ЗАПИСАТЬСЯ СЕЙЧАС <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={CONTACTS.phoneHref}
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[13px] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                {CONTACTS.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-9">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">/ КОНТАКТЫ</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href={CONTACTS.phoneHref} className="block font-mono text-lg text-white transition hover:text-red">
                {CONTACTS.phone}
              </a>
              <a href={CONTACTS.geoUrl} target="_blank" rel="noreferrer"
                 className="block text-white/60 transition hover:text-white">
                {CONTACTS.address}
              </a>
              <p className="text-white/50">{CONTACTS.hours}</p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-2">
              <a
                href={CONTACTS.tg}
                target="_blank" rel="noreferrer"
                aria-label="Telegram"
                className="grid h-12 place-items-center border border-white/15 text-white/70 transition hover:border-red hover:bg-red hover:text-black"
              >
                <RiTelegram2Fill className="h-5 w-5" />
              </a>
              <a
                href={CONTACTS.inst}
                target="_blank" rel="noreferrer"
                aria-label="Instagram"
                className="grid h-12 place-items-center border border-white/15 text-white/70 transition hover:border-red hover:bg-red hover:text-black"
              >
                <RiInstagramLine className="h-5 w-5" />
              </a>
              <a
                href={CONTACTS.viber}
                target="_blank" rel="noreferrer"
                aria-label="Viber"
                className="grid h-12 place-items-center border border-white/15 text-white/70 transition hover:border-red hover:bg-red hover:text-black"
              >
                <FaViber className="h-5 w-5" />
              </a>
              <a
                href={CONTACTS.wa}
                target="_blank" rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-12 place-items-center border border-white/15 text-white/70 transition hover:border-red hover:bg-red hover:text-black"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.28em] text-white/30">
          <span>© {new Date().getFullYear()} OPHOTO.BY</span>
          <span>МИНСК · БЕЛАРУСЬ</span>
          <span>ФОТО НА ДОКУМЕНТЫ</span>
        </div>
      </div>
    </footer>
  );
}