import { useSmoothScroll } from './hooks/useSmoothScroll';
import Grain from './components/Grain';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Documents from './components/Documents';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-white font-sans text-white antialiased">
      <Grain />
      <Header />
      <main>
        <Hero/>
        <Documents    index={1}/>
        <Advantages   index={2}/>
        <Services     index={3}/>
        <About        index={4}/>
        <BeforeAfter  index={5}/>
        <FAQ          index={6}/>
        <Location     index={7}/>
        <Gallery      index={8}/>
      </main>
      <Footer />
    </div>
  );
}