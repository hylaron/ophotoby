import { useRef, useState, useCallback, useEffect } from 'react';
import { BEFORE_AFTER } from '../data';

export default function BeforeAfter({ index = 5 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromEvent = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, raw)));
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromEvent(x);
    };
    const stop = () => (dragging.current = false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', stop);
    };
  }, [updateFromEvent]);

  const start = (e) => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromEvent(x);
  };

  return (
    // Убрал жесткие рамки и скругления секции, чтобы сливалось с общим фоном сайта
    <section 
      id="beforeafter" 
      className='relative w-full bg-cover bg-no-repeat lg:bg-[url("/images/bg2.webp")] max-lg:bg-[url("/images/bg2m.webp")] rounded-[5%]'
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      {/* Верхняя линия с подписями */}
        <div className="flex items-center gap-4 p-5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C1A]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/70">
            0{index} / СРАВНЕНИЕ
          </span>
          <span className="ml-auto hidden text-[11px] font-bold uppercase tracking-[0.24em] text-black/80 sm:inline">
            ПОТЯНИ ПОЛЗУНОК
          </span>
        </div>

        {/* Заголовок и описание (как на референсе — слева и справа) */}
        <div className="mt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          {/* Заголовок (добавил легкую тень, чтобы белый текст не сливался со светлым фоном) */}
          <h2 className="font-display text-[clamp(4rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] drop-shadow-xl drop-shadow-black/20">
            РАЗНИЦА<br />
            <span className="text-[#FF5C1A]">ОЧЕВИДНА</span>
          </h2>

          {/* Описание (добавил стеклянную плашку и темный текст) */}
          <div className="max-w-xs md:mt-6">
            <div className="rounded-2xl border border-white/50 bg-white/40 p-5 backdrop-blur-md shadow-sm">
              <p className="text-[14px] font-medium leading-relaxed text-black">
                Слева — обычное фото из салона. Справа — наша ретушь и свет. Один и тот же человек.
              </p>
            </div>
          </div>
          
        </div>

        {/* Сам слайдер */}
        <div className="mt-16 flex justify-center w-full">
          <div
            ref={ref}
            onMouseDown={start}
            onTouchStart={start}
            // Сделал контейнер широким, но с ограничением по высоте, чтобы фото не было гигантским
            className="relative w-full max-w-[800px] aspect-[3/4] sm:aspect-[4/5] cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-2xl"
            style={{ touchAction: 'none' }}
          >
            {/* AFTER — база */}
            <img
              src={BEFORE_AFTER.after}
              alt="после"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* BEFORE — обрезаем */}
            <img
              src={BEFORE_AFTER.before}
              alt="до"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />

            {/* Ползунок */}
            <div
              className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-xl">
                <span className="font-mono text-[12px] font-bold tracking-widest text-black">
                  ◀ ▶
                </span>
              </div>
            </div>

            {/* Лейблы */}
            <span className="pointer-events-none absolute left-6 top-6 z-10 rounded bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black backdrop-blur-md">
              ДО
            </span>
            <span className="pointer-events-none absolute right-6 top-6 z-10 rounded bg-[#FF5C1A] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              ПОСЛЕ
            </span>
          </div>
        </div>

        {/* Нижняя подпись */}
        <div className="mt-10 w-fit mx-auto rounded-2xl border border-white/50 bg-white/40 p-5 backdrop-blur-md shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black">
            НАГЛЯДНОЕ СРАВНЕНИЕ ДО / ПОСЛЕ
          </p>
        </div>

      </div>
    </section>
  );
}