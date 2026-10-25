import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES, CONTACTS, QUALITY } from '../data';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Services({index}) {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.svc-card', {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
    });
    gsap.from('.quality-row', {
      x: -20, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: '.quality-list', start: 'top 85%' },
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative rounded-4xl overflow-hidden bg-black">
      <div aria-hidden className="pointer-events-none absolute -top-56 right h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-red opacity-25 blur-[180px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-red-deep opacity-40 blur-[180px]" />


      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">0{index} / УСЛУГИ</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-white/40 sm:inline">
            5 ТАРИФОВ
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.25rem,7vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
            СКОЛЬКО<br /><span className="text-red">СТОИТ</span>
          </h2>
          <p className="max-w-xs text-sm text-white/50">
            Прозрачные цены. Всё, что нужно — уже включено. Ретушь, печать, цифровая копия.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`svc-card relative flex flex-col p-7 sm:p-9
                ${s.featured
                  ? 'bg-red text-black md:col-span-1 lg:col-span-1 lg:row-span-2'
                  : 'border border-white/12 text-white'}`}
            >
              {s.featured && (
                <span className="mb-6 absolute -top-5 -left-5 rounded-lg  bg-linear-to-r from-black/50 to-red/50 text-white backdrop-blur-xs py-2 flex gap-2 items-center border border-black/40 px-3 text-[10px] font-bold uppercase tracking-[0.22em]">
                  <FaStar className='text-white text-2xl'/> <span className='text-xs'>ОСНОВНОЕ</span>
                </span>
              )}

              <div className={`text-[10px] uppercase tracking-[0.28em] ${s.featured ? 'text-black/60' : 'text-white/45'}`}>
                / ТАРИФ
              </div>

              <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">
                {s.name}
              </h3>

              <p className={`mt-3 text-sm leading-relaxed ${s.featured ? 'text-black/70' : 'text-white/55'}`}>
                {s.subtitle}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none">{s.price}</span>
                <span className={`text-sm font-medium ${s.featured ? 'text-black/60' : 'text-white/45'}`}>{s.currency}</span>
              </div>

              <ul className={`mt-8 space-y-3 border-t pt-6 mb-5 text-sm ${s.featured ? 'border-black/20' : 'border-white/10'}`}>
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-2.5 h-0.5 w-3 shrink-0 ${s.featured ? 'bg-black' : 'bg-red'}`} />
                    <span className={s.featured ? 'text-black/85' : 'text-white/75'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
                className={`group rounded mt-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] transition
                  ${s.featured
                    ? 'bg-black text-white hover:bg-white hover:text-black'
                    : 'bg-red text-black hover:bg-white'}`}
              >
                ЗАПИСАТЬСЯ
              </a>
            </div>
          ))}

          {/* quality block as one of the grid cells */}
          <div className="svc-card border border-white/12 p-7 sm:p-9 md:col-span-2 lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.28em] text-red">/ ГАРАНТИЯ КАЧЕСТВА</div>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">
              Как мы создаем ваше <span className='text-red'>ЛУЧШЕЕ</span> фото
            </h3>
            <ul className="quality-list mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {QUALITY.map((q, i) => (
                <li key={i} className="quality-row flex items-start gap-3 border-t border-white/10 pt-3 text-sm text-white/70">
                  <span className="font-mono text-[10px] tracking-widest text-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}