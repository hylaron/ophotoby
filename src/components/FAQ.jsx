import { useState } from 'react';
import { FAQ as FAQ_DATA } from '../data';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function FAQ({index}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-28">
        <div className="flex items-center gap-4 border-b border-black/10 pb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/50">0{index} / ВОПРОСЫ</span>
          <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-black/40 sm:inline">
            {FAQ_DATA.length} ШТУК
          </span>
        </div>

        <h2 className="mt-10 max-w-3xl font-display text-[clamp(2.25rem,6.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
          ЧАСТЫЕ <span className="text-red">ВОПРОСЫ</span>
        </h2>

        <div className="mt-14 grid gap-0 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-[40vh]">
              <p className="max-w-xs text-sm leading-relaxed text-black/60">
                Не нашли ответ? Напишите нам в мессенджер — отвечаем быстро.
              </p>
            </div>
          </div>

          <ul className="md:col-span-9">
            {FAQ_DATA.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-t border-black/10 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 py-6 text-left transition hover:bg-black/[0.02]"
                  >
                    <span className="font-mono text-[11px] tracking-widest text-red">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-display text-lg font-bold uppercase leading-tight tracking-tight sm:text-xl">
                      {item.q}
                    </span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center border border-black/20 transition rounded-full ${isOpen ? 'bg-red border-red text-black' : ''}`}>
                      <span className="text-sm">{isOpen ? <FiMinus /> : <FiPlus />}</span>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="max-w-2xl pb-6 pl-10 text-sm leading-relaxed text-black/65">{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}