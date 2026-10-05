import { CONTACTS } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* мягкие блобы — фишка Discord */}
      <div className="pointer-events-none absolute -top-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-mist blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-blurple/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-20 md:grid-cols-2 md:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blurple">
            <span className="h-1.5 w-1.5 rounded-full bg-blurple animate-pulse" />
            12 студий · Минск
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Красивые фото<br />
            на документы<br />
            <span className="text-blurple">в Минске</span>
          </h1>

          <p className="mt-5 max-w-md text-lg text-ink/70">
            Быстро, удобно и по всем правилам. <br />
            <b className="text-ink">Вы точно себе понравитесь.</b>
          </p>

          <ul className="mt-6 space-y-2 text-ink/75">
            {['Онлайн-запись — 30 секунд', 'Принимают в любом госучреждении', 'Профессиональный фотограф и ретушь'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blurple text-[11px] text-white">✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACTS.bookingUrl}
              className="rounded-full bg-blurple px-7 py-4 font-semibold text-white
                         shadow-[0_12px_30px_-8px_rgba(88,101,242,0.85)]
                         transition hover:brightness-110 active:scale-95"
            >
              Записаться на фото
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-mist px-7 py-4 font-semibold text-blurple transition hover:bg-blurple hover:text-white"
            >
              Узнать цены
            </a>
          </div>
        </div>

        {/* Фото-плейсхолдер */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -m-6 rounded-[2.5rem] bg-gradient-to-br from-mist via-white to-mist blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-mist
                          shadow-[0_30px_60px_-20px_rgba(88,101,242,0.35)]">
            {/* замени на <img src="/hero.jpg" className="h-full w-full object-cover" /> */}
            <div className="grid h-full place-items-center text-blurple/60 font-display font-bold text-center px-8">
              Здесь будет фото клиента
            </div>
          </div>
          {/* «звёздочка» как на референсе */}
          <svg viewBox="0 0 100 100" className="absolute -top-6 -right-6 h-20 w-20 text-blurple drop-shadow">
            <path fill="currentColor" d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}