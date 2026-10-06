import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.pricing-card', {
      y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' },
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink">Об условиях съемки</h2>
          <p className="mt-4 text-ink/60">Все прозрачно, без скрытых платежей.</p>
        </div>

        <div className="pricing-grid grid gap-8 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.id} className="pricing-card rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5">
              <h3 className="font-display text-2xl font-bold text-ink">{s.title}</h3>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold text-blurple">{s.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-ink/70">
                {s.features.map((f, i) => <li key={i} className="flex items-center gap-3">✓ {f}</li>)}
              </ul>
              <a href="#contacts" className="mt-8 block rounded-full bg-blurple py-4 text-center font-semibold text-white transition hover:brightness-110">
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}