import { Mail, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our products or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:hello.zeroplast@gmail.com"
              className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all hover:border-primary/50 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <span className="text-primary font-medium">
                hello.zeroplast@gmail.com
              </span>
            </a>

            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Learn More
              </h3>
              <p className="text-muted-foreground mb-4">
                Interested in bulk orders, partnerships, or distribution? Let's talk about how we can work together.
              </p>
              <p className="text-sm text-muted-foreground">
                We're committed to making sustainable choices accessible to everyone.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Join us in making a difference, one plate at a time. 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
