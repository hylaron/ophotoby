import { RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';
import { CONTACTS } from '../data';
import { FaViber, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative  bg-black">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-red opacity-15 blur-[160px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.28em] text-white/30">
          <span>© {new Date().getFullYear()} OPHOTO.BY</span>
          <span>МИНСК · БЕЛАРУСЬ</span>
          <span>ФОТО НА ДОКУМЕНТЫ</span>
        </div>
      </div>
    </footer>
  );
}