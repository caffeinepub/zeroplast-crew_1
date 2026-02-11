import { Header } from './components/marketing/Header';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { BenefitsSection } from './components/marketing/sections/BenefitsSection';
import { CompostabilitySection } from './components/marketing/sections/CompostabilitySection';
import { FAQSection } from './components/marketing/sections/FAQSection';
import { ContactSection } from './components/marketing/sections/ContactSection';
import { Footer } from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <CompostabilitySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
