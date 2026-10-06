import { CONTACTS } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">/ СВЯЗАТЬСЯ СО МНОЙ</div>
            <h3 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em] text-white">
              ДАВАЙТЕ<br />СОЗДАДИМ<br /><span className="text-red">ИСТОРИЮ</span>
            </h3>
          </div>

          <div className="md:col-span-3 md:col-start-9">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">/ КОНТАКТЫ</div>
            <a
              href={CONTACTS.phoneHref}
              className="mt-4 block font-display text-2xl font-bold text-white transition hover:text-red"
            >
              {CONTACTS.phone}
            </a>
            <div className="mt-6 flex flex-col gap-3">
              <a href={CONTACTS.inst} target="_blank" rel="noreferrer"
                 className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.22em] text-white/60 transition hover:text-white">
                INSTAGRAM <span>→</span>
              </a>
              <a href={CONTACTS.tg} target="_blank" rel="noreferrer"
                 className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.22em] text-white/60 transition hover:text-white">
                TELEGRAM <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.28em] text-white/30">
          <span>© {new Date().getFullYear()} OPHOTO.BY</span>
          <span>MINSK · BELARUS</span>
          <span>Что-то вот сюда надо будет</span>
        </div>
      </div>
    </footer>
  );
}