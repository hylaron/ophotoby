import { CONTACTS } from '../data';

export default function Hero() {
  return (
    <section 
      id="top" 
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 bg-cover bg-center rounded-b-[5%]"
      // ВСТАВЬ СЮДА СВОЮ КАРТИНКУ
      style={{ backgroundImage: 'url("/images/bg.webp")' }}
    >

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10">
        
        <div className='flex justify-between flex-wrap gap-10'>
          <div>

          <h1 className="mt-10 font-display text-[clamp(2rem,10vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-black">
            КРАСИВЫЕ ФОТО<br />
            НА ДОКУМЕНТЫ<br />
            <span className="text-red">В МИНСКЕ</span>
          </h1>
          <p className="mt-8 max-w-xl text-[18px] text-black/80 font-medium">
            Вы точно себе понравитесь. Быстро, удобно и с хорошим результатом — ретушь за 10 минут, студия в центре.
          </p>
                {/* Кнопки */}
        <div className="mt-10 flex flex-wrap items-center max-lg:justify-between gap-4">
          <a
            href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
            className="inline-flex max-lg:flex-1 max-lg:justify-center items-center gap-3 rounded bg-red px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_4px_15px_rgba(255,92,26,0.3)] transition hover:bg-white hover:border-red hover:text-red border border-transparent hover:shadow-none"
          >
            ЗАПИСАТЬСЯ
          </a>
          <a
            href={CONTACTS.phoneHref}
            className="inline-flex max-lg:flex-1 max-sm:px-2 items-center justify-center rounded border border-black/50 bg-white/40 backdrop-blur-sm px-7 py-3.5 text-[14px] text-black transition hover:border-black hover:bg-white/80"
          >
            {CONTACTS.phone}
          </a>
        </div>
          </div>
          <div className='relative flex-1 mt-10'>
            <img className='relative z-2 aspect-square object-cover object-top rounded-full border-red shadow-2xl shadow-red' src="/images/women.webp" alt="" />
            <div className='z-1 rounded-full absolute inset-0 -mt-5 -mr-5 border-2 border-orange-400/20'></div>
          </div>
        </div>





        {/* Плашка (Quick Strip) */}
        <div className="mt-20 rounded-[2rem] border border-white/60 bg-white/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            <div className="flex flex-col px-8 py-8 max-md:text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red">РЕЖИМ РАБОТЫ</span>
              <span className="mt-2 font-display text-2xl font-bold text-black">10:00 — 21:00</span>
              <span className="mt-1 text-[14px] text-black/60">каждый день, по записи</span>
            </div>

            <a href={CONTACTS.geoUrl} target="_blank" rel="noreferrer" className="max-md:text-center border max-md:border-y-red/20 md:border-x-red/20 group flex flex-col px-8 py-8 hover:scale-105 hover:bg-white/90 hover:rounded-4xl duration-500">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red">АДРЕС</span>
              <span className="mt-2 font-display text-2xl font-bold uppercase text-black group-hover:text-red transition">КАРЛА МАРКСА 40</span>
              <span className="mt-1 text-[14px] text-black/60">оф. 31 · 2 этаж</span>
            </a>

            <div className="flex flex-col px-8 py-8">
              <span className="text-[11px] font-bold uppercase tracking-wider max-md:text-center text-red">РЕТУШЬ</span>
              <span className="mt-2 font-display text-2xl font-bold text-black  max-md:text-center">10 МИНУТ</span>
              <span className="mt-1 text-[14px] text-black/60  max-md:text-center">готовые фото с собой</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}