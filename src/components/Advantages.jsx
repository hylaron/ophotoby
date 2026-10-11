import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ADVANTAGES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Advantages({index}) {
  const container = useRef();

  useGSAP(() => {
    // анимируем ТОЛЬКО внутренний контент, а не саму карточку —
    // чтобы фон карточки был видим сразу
    gsap.from('.adv-item-inner', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: '50% 85%',
        once: true,
        markers: true
      },
    });
  }, { scope: container });

  return (
    <section id="advantages" ref={container} className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        {/* head */}
        <div className="flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/50">
            0{index} / ПОЧЕМУ МЫ
          </span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-black/40 sm:inline">
            8 ПРИЧИН ЗАЙТИ
          </span>
        </div>

        <h2 className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
          БЕЗУПРЕЧНОЕ ФОТО,
          <br />
          КОТОРОЕ <span className="text-red">С ВАМИ НАДОЛГО</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {ADVANTAGES.map((a) => (
            <div
              key={a.n}
              className="group relative flex min-h-[100px] flex-col justify-between border border-black/10 bg-white rounded-lg p-6 transition-colors duration-300 hover:border-black/30 hover:bg-black hover:text-white"
            >
              <div className="adv-item-inner flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium tracking-widest text-red">
                    {a.n}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition group-hover:bg-red" />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                    {a.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 transition group-hover:text-white/70">
                    {a.d}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}