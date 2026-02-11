import { Sprout, Recycle, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The Bagasse Story
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            After sugarcane juice is extracted, the leftover stalk fiber—called bagasse—is typically discarded or burned. We transform this agricultural waste into beautiful, functional tableware.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-soft space-y-4 border border-border/50">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              From Farm to Table
            </h3>
            <p className="text-muted-foreground">
              Our plates begin as sugarcane stalks, grown naturally and harvested sustainably. The leftover fiber becomes your eco-friendly tableware.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft space-y-4 border border-border/50">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Recycle className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Zero Waste Philosophy
            </h3>
            <p className="text-muted-foreground">
              By repurposing agricultural waste, we reduce landfill burden and eliminate the need for virgin materials or harmful plastics.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft space-y-4 border border-border/50">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Better for Everyone
            </h3>
            <p className="text-muted-foreground">
              Safe for your family, kind to the planet. Our plates contain no toxins, no PFAS, and break down naturally into nutrient-rich soil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
