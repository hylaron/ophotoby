import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Steps />
        <Pricing />
        <Location />
      </main>
      <Footer />
    </div>
  );
}