import { CONTACTS } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28 rounded-b-[5%] bg-black">

      <div className='absolute inset-0 opacity-20' style={{backgroundImage: 'url("./images/bg.webp")'}}/>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* top label */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
          <span className="relative grid h-4 w-4 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-red/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_10px_#DF8777]" />
          </span>
          <span>ФОТО НА ДОКУМЕНТЫ · МИНСК</span>
          <span className="ml-auto hidden sm:inline">Давайте создаим историю о вас!</span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(2.75rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">
          КРАСИВЫЕ ФОТО<br />
          НА ДОКУМЕНТЫ<br />
          <span className="text-red">В МИНСКЕ</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-white/70">
          <b className="font-semibold text-white">Вы точно себе понравитесь.</b> Быстро, удобно
          и с хорошим результатом — ретушь за 10 минут, студия в центре.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-red px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white rounded"
          >
            ЗАПИСАТЬСЯ
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={CONTACTS.phoneHref}
            className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[13px] font-medium text-white transition hover:border-white hover:bg-white hover:text-black rounded"
          >
            {CONTACTS.phone}
          </a>
        </div>

        {/* quick strip */}
        <div className="relative mt-16 grid gap-3 border-t border-white/10 py-8 px-4 md:grid-cols-3 backdrop-blur-md bg-black/20 rounded-3xl overflow-hidden">
          
          {[
            { k: '/ РЕЖИМ',     v: '10:00 — 21:00', s: 'каждый день, по записи' },
            { k: '/ АДРЕС',     v: 'КАРЛА МАРКСА 40', s: 'оф. 31 · 2 этаж' },
            { k: '/ РЕТУШЬ',    v: '10 МИНУТ',      s: 'готовые фото с собой' },
          ].map((b) => (
            <div key={b.k} className="flex gap-4 items-center justify-center z-10">
              <span className="text-[10px] uppercase tracking-[0.24em] text-red">{b.k}</span>
              <span className="font-display text-lg font-bold uppercase text-white">{b.v}</span>
              <span className="text-[11px] text-white/40">{b.s}</span>
            </div>
          ))}
          <div className='absolute inset-0 bg-linear-to-b from-transparent from-80% to-white/10'/>
        </div>
      </div>
    </section>
  );
}