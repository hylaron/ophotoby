const WORDS = ['ИСКРЕННОСТЬ', 'НЕЖНОСТЬ', 'ЕСТЕСТВЕННОСТЬ', 'ПОКОЙ', 'ЛЁГКОСТЬ', 'ЖИЗНЬ', 'ДРУГИЕ', 'КРАСИВЫЕ', 'СЛОВА', 'ОЛЕЦТВОРЯЮЩИЕ', 'ПРОЦЕСС', 'СОЗДАНИЯ', 'ФОТО', 'ВО', 'СКАЗАЛ', 'КРАСИВО'];

export default function Marquee() {
  const Row = () => (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-sm font-bold uppercase tracking-tight text-black sm:text-lg">
            {w}
          </span>
          <span className="text-black/40">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative select-none overflow-hidden bg-red py-2">
      <div className="flex w-max animate-[marquee_42s_linear_infinite]">
        <Row /><Row />
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}