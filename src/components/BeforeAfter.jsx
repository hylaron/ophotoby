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
    <section id="beforeafter" className="bg-black relative rounded-4xl overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute -top-56 right h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-red opacity-25 blur-[180px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-red-deep opacity-40 blur-[180px]" />

      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
            0{index} / Сравнение
          </span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-white/40 sm:inline">
            ПОТЯНИ ПОЛЗУНОК
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.25rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
            РАЗНИЦА<br /><span className="text-red">ОЧЕВИДНА</span>
          </h2>
          <p className="max-w-xs text-sm text-white/50">
            Слева — обычное фото из салона. Справа — наша ретушь и свет.
            Один и тот же человек.
          </p>
        </div>

        {/* slider */}
        <div className='aspect-3/4 max-h-[70vh] flex justify-center w-full'>

        
        <div
          ref={ref}
          onMouseDown={start}
          onTouchStart={start}
          className="relative mt-12 aspect-3/4 w-fit max-h-[70vh] cursor-ew-resize select-none overflow-hidden rounded-4xl border border-white/10 bg-white/5 "
          style={{ touchAction: 'none' }}
        >
          {/* AFTER — база, всегда во всю ширину */}
          <img
            src={BEFORE_AFTER.after}
            alt="после"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* BEFORE — тот же размер, просто отрезаем справа через clip-path */}
          <img
            src={BEFORE_AFTER.before}
            alt="до"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />

          {/* handle */}
          <div
            className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white shadow-[0_0_20px_rgba(0,0,0,0.6)]"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/80 backdrop-blur">
              <span className="font-mono text-[10px] font-bold tracking-widest text-white">
                ◀ ▶
              </span>
            </div>
          </div>

          {/* labels */}
          <span className="pointer-events-none rounded absolute left-5 top-5 z-10 border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur">
            ДО
          </span>
          <span className="pointer-events-none rounded absolute right-5 top-5 z-10 border border-red bg-red px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-black">
            ПОСЛЕ
          </span>
        </div>
</div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-white/40">
          Наглядное сравнение ДО / ПОСЛЕ
        </p>
      </div>
    </section>
  );
}