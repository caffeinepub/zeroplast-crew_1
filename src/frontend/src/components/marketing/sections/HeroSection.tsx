import { ArrowRight, Leaf } from 'lucide-react';

export function HeroSection() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#benefits');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Leaf size={16} />
              <span>100% Eco-Friendly & Compostable</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Sustainable Plates from Nature
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Made from leftover sugarcane stalk fiber (bagasse), our plates are sturdy, biodegradable, and completely free from harmful toxins. A better choice for you and the planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#benefits"
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-soft"
              >
                Discover the Benefits
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src="/assets/IMG_20260208_175941-1.jpg"
                alt="Step-by-step infographic showing how bagasse disposable plates are made from sugarcane waste through harvesting, crushing, pulp molding, extraction, heat pressing to finished plate"
                className="w-full max-w-md md:max-w-lg mx-auto h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
