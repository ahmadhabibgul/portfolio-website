// src/App.jsx
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-canvas'>
      <Navigation />
      <main>
        <Hero />
        <ProofStrip />
        <Projects />
        <Experience />
        <Leadership />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
