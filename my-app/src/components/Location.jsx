import { LOCATIONS, CONTACTS } from '../data';

export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Где мы находимся</h2>
      <p className="mt-3 max-w-lg text-ink/60">Выбирайте ближайшую студию — обычно это 5 минут от метро.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Карта — потом можно воткнуть iframe Яндекс.Карт */}
        <div id="booking" className="min-h-[320px] rounded-3xl bg-mist p-8 grid place-items-center">
          <div className="text-center">
            <div className="font-display text-lg font-bold text-blurple">Карта студий</div>
            <p className="mt-2 text-sm text-ink/60 max-w-xs">
              Здесь будет Яндекс.Карта с метками всех студий.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {LOCATIONS.map((l) => (
            <div key={l.address} className="rounded-3xl bg-mist/60 p-5 transition hover:bg-mist">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display font-bold">{l.city}, {l.address}</div>
                  <div className="mt-1 text-sm text-ink/60">м. {l.metro} · {l.hours}</div>
                </div>
                <a href={CONTACTS.bookingUrl}
                   className="shrink-0 rounded-full bg-blurple px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
                  Записаться
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}