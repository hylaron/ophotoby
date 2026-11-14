import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES, CONTACTS, QUALITY } from '../data';
import { FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Services({ index = 3 }) {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.svc-card', {
      opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
    });
    gsap.from('.quality-row', {
      opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: '.quality-list', start: 'top 85%' },
    });
  }, { scope: container });

  const featured = SERVICES.find((s) => s.featured);
  const regularServices = SERVICES.filter((s) => !s.featured);

  return (
    <section 
      id="services" 
      ref={container} 
      className='relative w-full bg-cover bg-no-repeat lg:bg-[url("/images/bg3.webp")] max-lg:bg-[url("/images/bg3m.webp")] max-lg:bg-bottom'
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        
        {/* Верхняя линия */}
        <div className="flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C1A]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/60">
            0{index} / УСЛУГИ
          </span>
        </div>

        {/* Сетка */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="font-display text-[clamp(4rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white drop-shadow-xl drop-shadow-black/20">
              СКОЛЬКО<br /><span className="text-[#FF5C1A]">СТОИТ</span>
            </h2>

            {/* Описание для МОБИЛЬНЫХ (на десктопе скрыто) */}
            <p className="mt-6 text-[15px] font-medium leading-relaxed text-black/80 lg:hidden">
              Прозрачные цены. Всё, что нужно — уже включено: ретушь, печать, цифровая копия.
            </p>
            
            {featured && (
              <div className="relative flex-1 flex flex-col mt-10">
                
                {/* Плашка ВЫНЕСЕНА ЗА ПРЕДЕЛЫ КАРТОЧКИ */}
                <div className="absolute -top-4 -left-6 z-20 flex items-center gap-2 px-4 py-3 text-[16px] font-bold uppercase tracking-[0.1em] text-red w-fit mx-auto rounded-2xl border border-white/50 bg-white/70 p-5 backdrop-blur-md shadow-sm">
                  <FaStar className="text-[24px]" /> ОСНОВНОЕ
                </div>

                {/* Сама карточка */}
                <div className="relative flex-1 flex flex-col rounded-[2rem] p-8 sm:p-10 text-white border border-white/20 overflow-hidden bg-red/80 shadow-[inset_0_0_40px_rgba(255,200,160,0.6),_0_20px_50px_-15px_rgba(255,92,26,0.4)]">
                  
                  <div className="relative z-10 text-[11px] font-bold uppercase tracking-[0.28em] text-white/80 mt-2">
                    / ТАРИФ
                  </div>
                  
                  <h3 className="relative z-10 mt-2 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold uppercase leading-[1.05] tracking-tight">
                    {featured.name}
                  </h3>
                  
                  <p className="relative z-10 mt-2 text-[14px] leading-relaxed text-white/90">
                    {featured.subtitle}
                  </p>

                  <div className="relative z-10 mt-8 flex items-baseline gap-2">
                    <span className="font-display text-[clamp(4rem,5vw,5.5rem)] font-extrabold leading-none drop-shadow-sm">{featured.price}</span>
                    <span className="text-[16px] font-medium text-white/90">{featured.currency}</span>
                  </div>

                  <div className="relative z-10 w-full h-[1px] bg-white/30 my-6" />

                  <ul className="relative z-10 space-y-3 mb-8 text-[14px]">
                    {featured.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-[1.5px] w-4 shrink-0 bg-white/70" />
                        <span className="text-white/95 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
                    className="relative z-10 mt-auto inline-flex items-center justify-center rounded-xl border-[1.5px] border-white/60 bg-transparent px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#FF6B3D] hover:border-white"
                  >
                    ЗАПИСАТЬСЯ
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="lg:col-span-8 flex flex-col mt-4 lg:mt-0 gap-4">
            
            {/* Описание для ДЕСКТОПА (на мобильных скрыто) */}
            <p className="hidden lg:block self-end max-w-[280px] text-[15px] font-medium leading-relaxed text-black/80 text-right">
              Прозрачные цены. Всё, что нужно — уже включено: ретушь, печать, цифровая копия.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regularServices.map((s) => (
                <div
                  key={s.id}
                  className="svc-card flex flex-col rounded-[2rem] bg-white p-6 sm:p-7 text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-black/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF5C1A]">
                    / ТАРИФ
                  </div>

                  <h3 className="mt-2 font-display text-[clamp(1.25rem,2vw,1.5rem)] font-extrabold uppercase leading-[1.1]">
                    {s.name}
                  </h3>

                  <p className="mt-1 text-[13px] leading-relaxed text-black/50">
                    {s.subtitle}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-[2.5rem] font-extrabold leading-none">{s.price}</span>
                    <span className="text-[13px] font-semibold text-black/40">{s.currency}</span>
                  </div>

                  <div className="w-full h-[1px] bg-black/10 my-5" />

                  <ul className="space-y-2 mb-6 text-[12px]">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-[1.5px] w-2.5 shrink-0 bg-[#FF5C1A]" />
                        <span className="text-black/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
                    className="mt-auto inline-flex items-center justify-center rounded-xl bg-[#FF5C1A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#E04D13]"
                  >
                    ЗАПИСАТЬСЯ
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Блок гарантии качества */}
        <div className="mt-6 svc-card rounded-[2rem] bg-white p-8 sm:p-10 text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-black/5">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF5C1A]">/ ГАРАНТИЯ КАЧЕСТВА</div>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
            Как мы создаем ваше <span className="text-[#FF5C1A]">ЛУЧШЕЕ</span> фото
          </h3>
          <ul className="quality-list mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {QUALITY.map((q, i) => (
              <li key={i} className="quality-row flex items-start gap-3 border-t border-black/10 pt-3 text-[13px] font-medium text-black/70">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#FF5C1A]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {q}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}