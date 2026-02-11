import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are they microwave-safe?',
      answer: 'Yes! Our bagasse plates are completely microwave-safe. You can heat your food directly on the plate without any concerns. The natural sugarcane fibers can withstand microwave temperatures without releasing any harmful substances.'
    },
    {
      question: 'Do they handle hot and wet foods?',
      answer: 'Absolutely. Our plates are designed to be sturdy and durable, capable of holding hot soups, saucy dishes, and wet foods without getting soggy or losing their shape. They perform much better than traditional paper plates.'
    },
    {
      question: 'Are they PFAS-free?',
      answer: 'Yes, our plates are 100% PFAS-free and contain no harmful chemicals or toxins. They are made purely from natural sugarcane fiber (bagasse) with no synthetic coatings or additives. Safe for you, your family, and the environment.'
    },
    {
      question: 'How do I compost them?',
      answer: 'Simply add used plates to your home or commercial compost bin along with other organic waste. In a proper compost environment with adequate moisture and microorganisms, the plates will break down within 60-90 days into nutrient-rich compost.'
    },
    {
      question: 'How are they different from paper plates?',
      answer: 'While they look and feel similar to paper, bagasse plates are significantly stronger and more durable. They resist grease better, handle hot and wet foods without falling apart, and are made from agricultural waste rather than virgin tree pulp.'
    },
    {
      question: 'Can they be used for outdoor events?',
      answer: 'Yes! They\'re perfect for picnics, barbecues, parties, and any outdoor gathering. They\'re sturdy enough to handle various foods and weather conditions, and you can compost them afterward instead of creating plastic waste.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our eco-friendly bagasse plates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border/50 overflow-hidden shadow-soft"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
              >
                <span className="font-display font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
