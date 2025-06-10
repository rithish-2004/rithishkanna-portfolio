import About from './components/About';
import Achievements from './components/Achievements';
import BackToTop from './components/BackToTop';
import Certificates from './components/Certificates';
import Codingprofile from './components/coding_profiles';
import Contact from './components/Contact';
import CreativeCorner from './components/CreativeCorner';
import Hackathon from './components/hackathon';
import Header from './components/Header';
import Hero from './components/Hero';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Roles from './components/Roles';
import Skills from './components/Skills';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Codingprofile/>
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <Roles />
        <Certificates />
        <Hackathon/>
        <CreativeCorner />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;