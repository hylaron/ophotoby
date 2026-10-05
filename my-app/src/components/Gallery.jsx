import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { id: 1, src: '/img-1.jpg', alt: 'Портрет' },
  { id: 2, src: '/img-2.jpg', alt: 'Бэкстейдж' },
  { id: 3, src: '/img-3.jpg', alt: 'Деталь' },
];

export default function Gallery() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.gallery-item', {
      y: 150, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power4.out',
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' },
    });
  }, { scope: container });

  return (
    <section id="gallery" ref={container} className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-white">
          Избранные работы
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {IMAGES.map((img) => (
            <div key={img.id} className="gallery-item overflow-hidden rounded-3xl bg-white/5">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}