import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

export type SectionId = 'hero' | 'skills' | 'projects' | 'about' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  return (
    <div className='grid grid-cols-[1fr_minmax(0,1200px)_1fr] pattern-col duration-200'>
      <div />
      <div className='w-full'>
        <Navigation activeSection={activeSection} />
        <main className='border-x border-border flex flex-col items-center'>
          <Hero setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </main>
        <Footer />
      </div>
      <div />
    </div>
  );
}

export default App;
