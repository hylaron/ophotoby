import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisGsap() {
  useEffect(() => {
    // 1. Инициализируем Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Плавное замедление
      smoothWheel: true,
      smoothTouch: true, // Включаем на тач-устройствах
    });

    // 2. Синхронизируем Lenis с ScrollTrigger
    // При каждом скролле сообщаем ScrollTrigger, чтобы он обновил свои позиции
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Добавляем Lenis в тикер GSAP
    // Это гарантирует, что анимация скролла Lenis будет обновляться на каждом кадре GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Переводим время из секунд в миллисекунды
    });

    // 4. Отключаем сглаживание задержек в GSAP, чтобы не было рассинхрона
    gsap.ticker.lagSmoothing(0);

    // 5. Очистка при размонтировании
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
}