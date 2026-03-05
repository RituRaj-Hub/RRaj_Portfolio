import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`main-content ${!loading ? 'loaded' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <WhyChooseMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
