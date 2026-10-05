import { SERVICES, CONTACTS } from '../data';

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-ink py-20 text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blurple/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl font-extrabold sm:text-5xl">Сколько стоит фото</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-white/60">
          Прозрачные цены. Всё, что нужно — уже включено.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.id}
                 className="relative flex flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur
                            transition hover:bg-white/10 hover:-translate-y-1">
              {s.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-blurple px-3 py-1 text-xs font-bold">
                  {s.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-bold leading-tight">{s.title}</h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-3xl font-extrabold text-mist">{s.price}</span>
                <span className="pb-1 text-sm text-white/50">· {s.time}</span>
              </div>
              <a
                href={CONTACTS.bookingUrl}
                className="mt-6 rounded-full bg-blurple px-5 py-3 text-center font-semibold
                           transition hover:brightness-110 active:scale-95"
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}