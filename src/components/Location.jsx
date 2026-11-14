import { CONTACTS } from '../data';

export default function Location({ index = 4 }) {
  return (
    <section 
      id="location" 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* Легкая белая вуаль, если поверх картинки (чтобы текст читался) */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        
        {/* Верхняя линия */}
        <div className="flex items-center gap-4 p-5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C1A]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/60">
            0{index} / КАК НАС НАЙТИ
          </span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-black/80 sm:inline">
            ЦЕНТР МИНСКА
          </span>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <h2 className="font-display text-[clamp(4rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black  drop-shadow-xl drop-shadow-black/10">
              МЫ В<br /><span className="text-[#FF5C1A]">ЦЕНТРЕ</span>
            </h2>

            <div className="mt-10 space-y-6">
              
              {/* Адрес */}
              <div className="border-t border-black/10 pt-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF5C1A]">/ АДРЕС</div>
                <a
                  href={CONTACTS.geoUrl} target="_blank" rel="noreferrer"
                  className="mt-3 block font-display text-xl sm:text-2xl font-bold uppercase leading-tight text-black transition hover:text-[#FF5C1A]"
                >
                  {CONTACTS.address}
                </a>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-black/60">
                  {CONTACTS.addressNote}
                </p>
              </div>

              {/* Часы работы */}
              <div className="border-t border-black/10 pt-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF5C1A]">/ ЧАСЫ РАБОТЫ</div>
                <div className="mt-3 flex flex-wrap items-baseline gap-4">
                  <span className="font-display text-lg sm:text-xl font-bold uppercase text-black">
                    {CONTACTS.hours}
                  </span>
                  <span className="text-[14px] font-medium text-black/50">{CONTACTS.hoursNote}</span>
                </div>
              </div> 

              {/* Телефон */}
              <div className="border-t border-black/10 pt-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF5C1A]">/ ТЕЛЕФОН</div>
                <a
                  href={CONTACTS.phoneHref}
                  className="mt-3 block font-mono text-2xl font-semibold text-black transition hover:text-[#FF5C1A]"
                >
                  {CONTACTS.phone}
                </a> 
              </div>

              {/* Соцсети */}
              <div className="flex flex-wrap gap-2 pt-4">
                <a href={CONTACTS.tg} target="_blank" rel="noreferrer"
                   className="rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-sm transition hover:border-[#FF5C1A] hover:bg-[#FF5C1A] hover:text-white">
                  TELEGRAM
                </a>
                <a href={CONTACTS.inst} target="_blank" rel="noreferrer"
                   className="rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-sm transition hover:border-[#FF5C1A] hover:bg-[#FF5C1A] hover:text-white">
                  INSTAGRAM
                </a>
                <a href={CONTACTS.viber} target="_blank" rel="noreferrer"
                   className="rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-sm transition hover:border-[#FF5C1A] hover:bg-[#FF5C1A] hover:text-white">
                  VIBER
                </a>
                <a href={CONTACTS.wa} target="_blank" rel="noreferrer"
                   className="rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-sm transition hover:border-[#FF5C1A] hover:bg-[#FF5C1A] hover:text-white">
                  WHATSAPP
                </a>
              </div>

            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА (Карта) */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 bg-white/50 shadow-lg md:aspect-auto md:h-full">
              
              {/* Убрал темный фильтр invert, теперь карта светлая и читаемая */}
              <iframe
                src="https://yandex.by/map-widget/v1/?text=Минск%2C%20улица%20Карла%20Маркса%2C%2040&z=17"
                className="absolute inset-0 h-full w-full grayscale-[20%]"
                style={{ border: 0 }}
                loading="lazy"
                title="Карта"
              />
              
              {/* Плашка с адресом поверх карты */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-4 sm:right-auto">
                <div className="flex items-center gap-2 rounded-tr-xl border border-white/50 bg-white/90 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-md shadow-md">
                  <span className="h-2 w-2 rounded-full bg-[#FF5C1A]" /> 
                  Карла Маркса, 40 · оф. 31
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}