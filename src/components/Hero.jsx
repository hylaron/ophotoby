import { CONTACTS } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-40 rounded-b-[5%] bg-black ">

      <div className='absolute inset-0 opacity-20 bg-cover rounded-b-[5%]' style={{backgroundImage: 'url("./images/bg.webp")'}}/>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 h-full min-h-[60vh] flex justify-between flex-col">
        {/* top label */}
        {/* <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
          <span className="relative grid h-4 w-4 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-red/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_10px_#DF8777]" />
          </span>
           <span>ФОТО НА ДОКУМЕНТЫ · МИНСК</span>
          <span className="ml-auto hidden sm:inline">Давайте создаим историю о вас!</span>
        </div> */}

        <h1 className="mt-10 font-display text-[clamp(2rem,10vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">
          КРАСИВЫЕ ФОТО<br />
          НА ДОКУМЕНТЫ<br />
          <span className="text-red">В МИНСКЕ</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-white/70">
          <b className="font-semibold text-white">Вы точно себе понравитесь.</b> Быстро, удобно
          и с хорошим результатом — ретушь за 10 минут, студия в центре.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex items-center gap-3 max-sm:justify-between max-[344px]:flex-wrap min-w-0">
          <a
            href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
            className="group inline-flex justify-center items-center gap-3 bg-red px-7 max-sm:w-full max-sm:px-3 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white rounded"
          >
            ЗАПИСАТЬСЯ
            <span className="transition-transform group-hover:translate-x-1 max-sm:hidden">→</span>
          </a>
          <a
            href={CONTACTS.phoneHref}
            className="inline-flex items-center justify-center text-nowrap gap-3 border max-sm:w-full border-white/20 px-7 max-sm:px-3 py-4 font-mono text-[13px] font-medium text-white transition hover:border-white hover:bg-white hover:text-black rounded"
          >
            {CONTACTS.phone}
          </a>
        </div>

{/* quick strip */}
<div className="relative z-10 mt-16 -mb-10 overflow-hidden rounded-3xl border border-red/15 bg-black/90 backdrop-blur-md">
  <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-3 sm:gap-3 sm:p-3">
    {[
      { k: 'РЕЖИМ РАБОТЫ', v: '10:00 — 21:00',   s: 'каждый день, по записи' },
      { k: 'АДРЕС',        v: 'КАРЛА МАРКСА 40', s: 'оф. 31 · 2 этаж', href: CONTACTS.geoUrl },
      { k: 'РЕТУШЬ',       v: '10 МИНУТ',        s: 'готовые фото с собой' },
    ].map((b) => {
      const shared = [
        'group relative z-10 flex min-h-[80px] flex-col items-center justify-center',
        'rounded-2xl px-4 pb-3 pt-5 text-center',
        b.href
          ? 'cursor-pointer bg-white/[0.03] hover:bg-white/[0.20] hover:scale-110 hover:backdrop-blur-sm duration-300 z-[11] group'
          : '',
      ].join(' ');

      const content = (
        <>
          <span className="absolute -left-1 -top-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.24em] bg-red/10 rounded-xl group-hover:bg-red text-red group-hover:text-white duration-200 px-2 py-1 sm:text-[10px]">
            {b.k}
          </span>
          <span className="font-display text-base font-bold uppercase leading-tight tracking-tight text-white sm:text-lg">
            {b.v}
          </span>
          <span className="mt-1 text-[10px] text-white/40 sm:text-[11px]">
            {b.s}
          </span>
        </>
      );

      return b.href ? (
        <a
          key={b.k}
          href={b.href}
          target="_blank"
          rel="noreferrer"
          className={shared}
        >
          {content}
        </a>
      ) : (
        <div key={b.k} className={shared}>
          {content}
        </div>
      );
    })}
  </div>

  {/* мягкий блик снизу */}
  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-70% to-white/[0.06]" />
</div>
      </div>
    </section>
  );
}