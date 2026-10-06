import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TARIFFS, CONTACTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.tariff', {
      y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 78%' },
    });
  }, { scope: container });

  return (
    <section id="pricing" ref={container} className="relative overflow-hidden bg-black">
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-red opacity-20 blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 py-24 sm:py-28">
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">04 / RATES</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.28em] text-white/40 sm:inline">
            BASE / PLUS
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
            ТАРИФЫ
          </h2>
          <p className="max-w-xs text-sm text-white/50">
            Продолжительность съёмки и количество готовых кадров
            зависят от выбранного тарифа.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {TARIFFS.map((t, i) => (
            <div
              key={t.id}
              className={`tariff relative flex flex-col justify-between p-8 md:p-12 rounded
                ${t.featured ? 'bg-red text-white' : 'border border-white/15 text-white'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className={`text-[11px] uppercase tracking-[0.28em] ${t.featured ? 'text-white/70' : 'text-white/45'}`}>
                    / 0{i + 1} - TARIFF
                  </div>
                  <div className="mt-4 font-display text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-none tracking-[-0.02em]">
                    {t.name}
                  </div>
                </div>
                {t.featured && (
                  <span className="border border-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                    HIT
                  </span>
                )}
              </div>

              <p className={`mt-5 max-w-sm text-sm leading-relaxed ${t.featured ? 'text-white/85' : 'text-white/55'}`}>
                {t.subtitle}
              </p>

              <div className="mt-10 flex items-baseline gap-3">
                <span className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none">
                  {t.price}
                </span>
                <span className={`text-base font-medium ${t.featured ? 'text-white/70' : 'text-white/45'}`}>
                  {t.currency}
                </span>
              </div>

              <ul className={`mt-4 space-y-4 border-t pt-8 text-sm ${t.featured ? 'border-white/50' : 'border-white/10'}`}>
                {t.features.map((f, k) => (
                  <li key={k} className="flex items-start gap-4">
                    <span className={`mt-2 h-1 w-4 shrink-0 ${t.featured ? 'bg-white' : 'bg-red'}`} />
                    <span className={t.featured ? 'text-white/95' : 'text-white/75'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
                className={`group inline-flex mt-5 items-center justify-center gap-3 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] transition
                  ${t.featured
                    ? 'bg-white text-black hover:bg-black hover:text-white'
                    : 'bg-red text-white hover:bg-red-bright'}`}
              >
                ЗАПИСАТЬСЯ НА СЪЁМКУ
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}