import { useState } from 'react';
import { CONTACTS } from '../data';
import LiquidBackground from './LiquidBackground';

const METRICS = [
  { k: '01', v: '200+', l: 'СЪЁМОК' },
  { k: '02', v: '7',    l: 'ЛЕТ'    },
  { k: '03', v: '∞',    l: 'ИСТОРИЙ' },
];

export default function Hero() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#0B0B0B]">
      
      {/* фон */}
      <LiquidBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10">
        
        <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.28em] text-[#F9F9F9]/50">
          <span className="relative grid h-4 w-4 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#e08777]/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#e08777] shadow-[0_0_10px_#e08777]" />
          </span>
          <span>ФОТОГРАФ - МИНСК</span>
          <span className="ml-auto hidden sm:inline">PHOTO - MINSK</span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(3rem,12vw,11rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-[#F9F9F9]">
          ДАВАЙТЕ<br />
          СОЗДАДИМ<br />
          <span className="text-[#e08777]">ИСТОРИЮ</span><br />
          О&nbsp;ВАС
        </h1>

        {/* Главная Bento-сетка */}
        <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-12">
          
          {/*  О подходе */}
          <div className="md:col-span-6 md:col-start-1 bg-[#0B0B0B]/40 p-6 rounded-xl backdrop-blur-md border border-white/5 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#e08777]">/ О ПОДХОДЕ</div>
              <p className="mt-5 text-base leading-relaxed text-[#F9F9F9]/70">
                Меня зовут <b className="font-semibold text-white">Мирослава</b>. Я запечатлеваю вашу нежность
                и красоту, вашу любовь и ваш путь. Мои кадры - про покой души и тела,
                лёгкость и естественность, жизнь как она есть.
              </p>
            </div>
            <p className="mt-6 text-sm text-[#F9F9F9]/50">
              Не нужно позировать - просто будьте собой. Ваша искренность станет лучшим сюжетом.
            </p>
          </div>

          {/* Локации */}
          <div 
            onClick={() => setIsMapOpen(true)}
            className="group relative md:col-span-6 bg-[#0B0B0B]/40 p-6 rounded-xl backdrop-blur-md border border-white/5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#e08777]/30 hover:bg-[#0B0B0B]/60"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#e08777]">/ Где мы находимся</div>
                <span className="text-xs text-[#e08777] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Открыть карту </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#F9F9F9] uppercase tracking-wide">Минск, Беларусь, БРСМ что-то там</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F9F9F9]/70 max-w-md">
                Провожу съемки в интерьерных студиях столицы, а также на атмосферных загородных и уличных локациях.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <span className="h-2 w-2 rounded-full bg-[#e08777] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#F9F9F9]/40">Нажмите, чтобы посмотреть географию съёмок</span>
            </div>
          </div>

        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-12 items-end">
          
          {/* Кнопки действий */}
          <div className="mt-6 flex flex-wrap items-center gap-3 md:col-span-7">
            <a
              href={CONTACTS.bookingUrl} target="_blank" rel="noreferrer"
              className="group rounded inline-flex items-center gap-3 bg-[#e08777] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#F9F9F9] transition-all duration-300 hover:bg-[#dfa89e] hover:shadow-[0_0_25px_rgba(224,135,119,0.3)]"
            >
              ЗАПИСАТЬСЯ
            </a>
            
            <button
              onClick={() => setIsMapOpen(true)}
              className="inline-flex rounded cursor-pointer items-center gap-3 border border-white/70 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#F9F9F9]/60 transition-all duration-300 hover:border-[#e08777] hover:text-[#e08777]"
            >
              ПОСМОТРЕТЬ НА КАРТЕ
            </button>

            <a
              href="#gallery"
              className="inline-flex rounded items-center gap-3 border border-white/70 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#F9F9F9]/60 transition-all duration-300 hover:border-[#e08777] hover:text-[#e08777]"
            >
              СМОТРЕТЬ РАБОТЫ
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 md:col-span-5">
            {METRICS.map((m) => (
              <div key={m.k} className="border border-white/10 p-4 backdrop-blur-lg bg-[#0B0B0B]/60 rounded-xl transition-all duration-300 hover:border-[#a76e64]/50">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#F9F9F9]/40">{m.k}</div>
                <div className="mt-4 font-display text-3xl font-bold text-[#e08777]">{m.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#F9F9F9]/50">{m.l}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= MODAL WINDOW WITH MAP ================= */}
      {isMapOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all duration-300"
          onClick={() => setIsMapOpen(false)} // Закрытие при клике на оверлей
        >
          <div 
            className="relative w-full max-w-5xl h-[70vh] bg-[#191919] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модалки
          >
            {/* Хедер модального окна */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0B0B0B]/50">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#e08777]">/ ГЕОГРАФИЯ СЪЁМОК</span>
                <h4 className="text-md font-bold text-[#F9F9F9] uppercase tracking-wide mt-0.5">Минск и пригороды</h4>
              </div>
              
              {/* Кнопка закрытия (Крестик) */}
              <button 
                onClick={() => setIsMapOpen(false)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 text-lg transition-all duration-300 hover:border-[#e08777] hover:text-[#e08777] hover:bg-white/5"
              >
                ✕
              </button>
            </div>

            {/* Тело модалки с интерактивной картой */}
            <div className="relative flex-1 bg-[#0B0B0B]">
              <div className="absolute inset-0 opacity-70 grayscale invert contrast-[1.15]">
                <iframe 
                  src="https://yandex.by/map-widget/v1/?ll=27.563896%2C53.900923&mode=routes&rtext=53.900298%2C27.562314~53.901359%2C27.565710&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dexit__9673~ymapsbm1%3A%2F%2Forg%3Foid%3D99093290744&utm_campaign=BEL_Morda_GA_pMax_Bel_Reklama_All_control&utm_content=&utm_medium=GA_pMax_Bel_Reklama&utm_source=GA_Search_Bel&utm_term=&z=19.57"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  allowFullScreen={true}
                  title="Интерактивная карта Минска"
                />
              </div>
            </div>

            <div className="px-6 py-4 bg-[#191919] text-xs text-[#F9F9F9]/50 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
              <p>Наша студия</p>
              <span className="text-[10px] uppercase tracking-wider text-[#e08777]/80">Minsk, Belarus</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
