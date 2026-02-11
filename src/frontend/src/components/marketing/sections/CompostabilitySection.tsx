import { Leaf, Clock, TreePine } from 'lucide-react';

export function CompostabilitySection() {
  return (
    <section id="sustainability" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            From Plate to Soil
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Our plates don't just disappear—they transform into nutrient-rich compost that nourishes the earth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Leaf className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Fully Biodegradable
              </h3>
              <p className="text-muted-foreground">
                Made entirely from natural plant fibers with no synthetic additives or coatings.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Breaks Down in Months
              </h3>
              <p className="text-muted-foreground">
                In a proper compost environment, our plates decompose within 60-90 days.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <TreePine className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Nutrient-Rich Soil
              </h3>
              <p className="text-muted-foreground">
                The composted material enriches soil with organic matter and nutrients.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              The Composting Journey
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Add to Compost Bin</h4>
                  <p className="text-sm text-muted-foreground">
                    Place used plates in your home or commercial compost bin along with other organic waste.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Natural Breakdown</h4>
                  <p className="text-sm text-muted-foreground">
                    Microorganisms and moisture work together to break down the natural fibers over 2-3 months.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Rich Compost Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    The result is nutrient-dense compost perfect for gardens, farms, and landscaping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <strong className="text-foreground">No landfill waste.</strong> No microplastics. No forever chemicals. Just a natural return to the earth, completing the cycle of sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
