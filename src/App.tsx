import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;
