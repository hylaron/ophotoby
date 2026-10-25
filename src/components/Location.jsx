import { CONTACTS } from '../data';

export default function Location({index}) {
  return (
    <section id="location" className="relative overflow-hidden bg-black rounded-t-4xl">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-red opacity-20 blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">0{index} / КАК НАС НАЙТИ</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-white/40 sm:inline">
            ЦЕНТР МИНСКА
          </span>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* left */}
          <div className="md:col-span-6">
            <h2 className="font-display text-[clamp(2.25rem,7vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
              МЫ В<br /><span className="text-red">ЦЕНТРЕ</span>
            </h2>

            <div className="mt-10 space-y-6">
              <div className="border-t border-white/10 pt-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-red">/ АДРЕС</div>
                <a
                  href={CONTACTS.geoUrl} target="_blank" rel="noreferrer"
                  className="mt-3 block font-display text-2xl font-bold uppercase leading-tight text-white transition hover:text-red"
                >
                  {CONTACTS.address}
                </a>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  {CONTACTS.addressNote}
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-red">/ ЧАСЫ РАБОТЫ</div>
                <div className="mt-3 flex flex-wrap items-baseline gap-4">
                  <span className="font-display text-lg sm:text-2xl font-bold uppercase text-white">
                    {CONTACTS.hours}
                  </span>
                  <span className="text-sm text-white/50">{CONTACTS.hoursNote}</span>
                </div>
              </div> 

              <div className="border-t border-white/10 pt-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-red">/ ТЕЛЕФОН</div>
                <a
                  href={CONTACTS.phoneHref}
                  className="mt-3 block font-mono text-2xl font-medium text-white transition hover:text-red"
                >
                  {CONTACTS.phone}
                </a> 
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <a href={CONTACTS.tg}   target="_blank" rel="noreferrer"
                   className="border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-red hover:bg-red hover:text-black">
                  TELEGRAM
                </a>
                <a href={CONTACTS.inst} target="_blank" rel="noreferrer"
                   className="border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-red hover:bg-red hover:text-black">
                  INSTAGRAM
                </a>
                <a href={CONTACTS.viber} target="_blank" rel="noreferrer"
                   className="border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-red hover:bg-red hover:text-black">
                  VIBER
                </a>
                <a href={CONTACTS.wa}    target="_blank" rel="noreferrer"
                   className="border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-red hover:bg-red hover:text-black">
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* right — map */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-white/5 md:aspect-auto md:h-full">
              <iframe
                src="https://yandex.by/map-widget/v1/?text=Минск%2C%20улица%20Карла%20Маркса%2C%2040&z=17"
                className="absolute inset-0 h-full w-full grayscale"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) contrast(0.9)' }}
                loading="lazy"
                title="Карта"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="pointer-events-none absolute -bottom-1 -left-1 -right-1 border border-white/20 bg-black/70 px-4 py-4 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur">
                <span className="text-red">●</span> Карла Маркса, 40 · оф. 31
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}