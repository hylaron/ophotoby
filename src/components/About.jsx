import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.about-block', {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 78%' },
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 py-24 sm:py-28">
        {/* section head */}
        <div className="about-block flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-black/50">01 / ABOUT</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.28em] text-black/40 sm:inline">
            МЕЖДУ МНОЙ И ВАМИ
          </span>
        </div>

        {/* bento grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {/* big photo */}
          <div className="about-block relative col-span-1 aspect-[4/5] overflow-hidden bg-black md:col-span-5 md:aspect-auto md:row-span-2">
            <img
              src="/images/mira.webp"
              alt="Мирослава"
              className="h-full w-full object-cover transition duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/70">/ ФОТОГРАФ</div>
                <div className="mt-2 font-display text-3xl font-bold uppercase leading-none text-white">
                  МИРОСЛАВА
                </div>
              </div>
              <div className="h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white/80 grid">
                <span className="text-xs">✦</span>
              </div>
            </div>
          </div>

          {/* big statement */}
          <div className="about-block col-span-1 flex flex-col justify-between bg-black p-8 text-white md:col-span-7 md:p-12">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-red">
              <span>/ умная цитата</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-white/40">№ 001</span>
            </div>
            <p className="mt-10 font-display text-[clamp(1.5rem,3.4vw,2.75rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em]">
              МОИ КАДРЫ - ПРО ПОКОЙ ДУШИ И ТЕЛА, ЛЁГКОСТЬ
              И ЕСТЕСТВЕННОСТЬ, <span className="text-red">ЖИЗНЬ КАК ОНА ЕСТЬ</span>.
            </p>
          </div>

          {/* text block */}
          <div className="about-block col-span-1 border border-black/10 p-8 md:col-span-4 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/40">/ ПОДХОД</div>
            <p className="mt-5 text-sm leading-relaxed text-black/70">
              Не нужно позировать - просто будьте собой. Я помогу с выбором одежды
              и позированием, чтобы вы расслабились и раскрылись перед камерой.
            </p>
          </div>

          {/* metric red */}
          <div className="about-block col-span-1 flex flex-col justify-between bg-red p-8 text-white md:col-span-3 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/70">/ СЪЁМОК</div>
            <div className="mt-10 font-display text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none">200+</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-white/70">ИСТОРИЙ</div>
          </div>
        </div>
      </div>
    </section>
  );
}