
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
