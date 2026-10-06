import { STEPS } from '../data';

export default function Steps() {
  return (
    <section id="steps" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Как это работает</h2>
      <p className="mt-3 max-w-lg text-ink/60">Четыре шага от «хочу фото» до «готово».</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div key={s.n}
               className="group rounded-3xl bg-mist/60 p-6 transition hover:bg-blurple hover:text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blurple font-display font-bold text-white
                             group-hover:bg-white group-hover:text-blurple">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-1 text-sm opacity-70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}