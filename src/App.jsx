import { useSmoothScroll } from './hooks/useSmoothScroll';
import Grain from './components/Grain';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Gallery from './components/Gallery';
import Conditions from './components/Conditions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-black font-sans text-white antialiased">
      <Grain />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Gallery />
        <Conditions />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}