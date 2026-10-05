export default function Marquee() {
  const text = 'Требования к фото на паспорт РБ 2026 · Бесплатная ретушь · Готовность за 15 минут · ';
  return (
    <div className="overflow-hidden bg-blurple py-3 select-none">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide text-white">
        {Array.from({ length: 6 }).map((_, i) => <span key={i}>{text}</span>)}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}