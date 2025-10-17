import {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Footer,
} from './components';
import { LanguageProvider } from './context/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
