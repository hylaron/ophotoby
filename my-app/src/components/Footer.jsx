import { CONTACTS } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-blurple text-white">o</span>
            ophoto<span className="text-blurple">.by</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Фото на документы и портреты в Минске. Быстро и по правилам.
          </p>
        </div>

        <div>
          <div className="font-semibold">Контакты</div>
          <a href={CONTACTS.phoneHref} className="mt-3 block font-display text-lg font-bold hover:text-blurple">
            {CONTACTS.phone}
          </a>
          <p className="mt-1 text-sm text-ink/60">Ежедневно 09:00–21:00</p>
        </div>

        <div>
          <div className="font-semibold">Мы в соцсетях</div>
          <div className="mt-3 flex gap-3">
            <a href={CONTACTS.tg}
               className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-blurple transition hover:bg-blurple hover:text-white">
              TG
            </a>
            <a href={CONTACTS.inst}
               className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-blurple transition hover:bg-blurple hover:text-white">
              IG
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-mist py-5 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} ophoto.by — все права защищены
      </div>
    </footer>
  );
}