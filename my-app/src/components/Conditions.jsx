import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONDITIONS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Conditions() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.cond-row', {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: container.current, start: 'top 78%' },
    });
  }, { scope: container });

  return (
    <section id="conditions" ref={container} className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 py-24 sm:py-28">
        {/* section head */}
        <div className="flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-black/50">03 / PROCESS</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.28em] text-black/40 sm:inline">
            08 ПУНКТОВ
          </span>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-10">
          {/* left sticky */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
                ОБ УСЛОВИЯХ<br /><span className="text-red">СЪЁМКИ</span>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-black/60">
                Всё прозрачно - от брони до готовых кадров. Ниже - важные
                детали, чтобы вы чувствовали себя спокойно ещё до начала.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="border border-black/10 p-4">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-black/40">STEP</div>
                  <div className="mt-2 font-display text-2xl font-bold">01-08</div>
                </div>
                <div className="bg-black p-4 text-white">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/50">STATUS</div>
                  <div className="mt-2 font-display text-2xl font-bold text-red">OPEN</div>
                </div>
              </div>
            </div>
          </div>

          {/* right list */}
          <div className="md:col-span-8">
            <ul>
              {CONDITIONS.map((c) => (
                <li
                  key={c.n}
                  className="cond-row grid grid-cols-12 gap-4 border-t border-black/10 py-7 transition-colors last:border-b hover:bg-black/[0.02]"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display text-sm font-bold tracking-widest text-red">{c.n}</span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">{c.t}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}