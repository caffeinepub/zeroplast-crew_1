import { Flame, Droplets, Shield, Zap } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Flame,
      title: 'Hot & Wet Food Ready',
      description: 'Strong enough to handle hot soups, saucy dishes, and wet foods without getting soggy or losing shape.'
    },
    {
      icon: Zap,
      title: 'Microwave Safe',
      description: 'Heat your meals directly on the plate. Our bagasse plates are completely microwave-safe for your convenience.'
    },
    {
      icon: Droplets,
      title: 'Grease Resistant',
      description: 'Natural fibers create a robust surface that resists grease and oil, keeping your meals contained and mess-free.'
    },
    {
      icon: Shield,
      title: 'PFAS-Free & Non-Toxic',
      description: 'Absolutely no harmful chemicals, PFAS, or toxins. Just pure, natural sugarcane fiber that\'s safe for you and your family.'
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Bagasse Products
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            They look and feel like paper, but they're so much stronger. Experience the perfect blend of durability and sustainability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-accent/30 rounded-2xl p-8 md:p-12 border border-accent/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Sturdy Meets Sustainable
              </h3>
              <p className="text-muted-foreground">
                Unlike flimsy paper plates or harmful plastic alternatives, our bagasse plates offer the perfect balance of strength and environmental responsibility. They're the smart choice for conscious consumers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Natural Fiber</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">Toxins</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">Microwave Safe</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">Grease Proof</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
