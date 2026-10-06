import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GALLERY } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.g-item', {
      y: 60, opacity: 0, duration: 1, stagger: 0.07, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 78%' },
    });
  }, { scope: container });

  const [a, b, c, d, e, f] = GALLERY;

  return (
    <section id="gallery" ref={container} className="bg-black">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 py-24 sm:py-28">
        {/* section head */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">02 / WORK</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.28em] text-white/40 sm:inline">
            SELECTED · 2024–2026
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
            Мои<br /><span className="text-red">РАБОТЫ</span>
          </h2>
          <p className="max-w-xs text-sm text-white/50">
            Каждая история - отдельный мир. Отбираю кадры с чувством.
          </p>
        </div>

        {/* bento grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          <figure className="g-item relative col-span-2 overflow-hidden bg-white/5 md:col-span-5 md:row-span-2">
            <img src={a} alt="" className="aspect-[4/5] h-full w-full object-cover md:aspect-auto" />
            <figcaption className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.28em] text-white/80">
              / 01 - ПОРТРЕТ
            </figcaption>
          </figure>

          <figure className="g-item relative col-span-1 overflow-hidden bg-white/5 md:col-span-4">
            <img src={b} alt="" className="aspect-square h-full w-full object-cover" />
          </figure>

          <figure className="g-item relative col-span-1 overflow-hidden bg-white/5 md:col-span-3">
            <img src={c} alt="" className="aspect-square h-full w-full object-cover" />
          </figure>

          <figure className="g-item relative col-span-1 overflow-hidden bg-white/5 md:col-span-4">
            <img src={d} alt="" className="aspect-square h-full w-full object-cover" />
          </figure>

          <figure className="g-item relative col-span-1 overflow-hidden bg-white/5 md:col-span-3">
            <img src={e} alt="" className="aspect-square h-full w-full object-cover" />
          </figure>

          <figure className="g-item relative col-span-2 overflow-hidden bg-white/5 md:col-span-12">
            <img src={f} alt="" className="aspect-[16/7] h-full w-full object-cover" />
            <figcaption className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.28em] text-white/80">
              / 06 - ИСТОРИЯ
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}