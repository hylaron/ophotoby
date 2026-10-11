import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Documents({index}) {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.doc-row', {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: container.current, start: 'top 85%' },
    });
  }, { scope: container });

  return (
    <section id="documents" ref={container} className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        <div className="flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/50">0{index} / ДОКУМЕНТЫ</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-black/40 sm:inline">
            ЛЮБОЙ ФОРМАТ
          </span>
        </div>

            <h2 className="font-display text-[clamp(2.25rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] pt-10">
              ВСЕ ВИДЫ<br /><span className="text-red">ДОКУМЕНТОВ</span>
            </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mt-6 max-w-md text-base text-black/65">
              Делаем фото для любых документов и инстанций. Учитываем требования
              конкретной страны и ведомства. Если фото не подойдёт — напечатаем новое бесплатно.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 border border-black/15 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] transition hover:border-black hover:bg-black hover:text-white"
            >
              СМОТРЕТЬ ТАРИФЫ <span>→</span>
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 border-t border-black/10 sm:grid-cols-2">
              {DOCUMENTS.map((d, i) => (
                <div
                  key={d}
                  className="doc-row flex items-center justify-between border-b border-black/10 py-4 pr-4 hover:bg-black/[0.02]"
                >
                  <span className="text-sm font-medium text-black/80">{d}</span>
                  <span className="font-mono text-[10px] tracking-widest text-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}