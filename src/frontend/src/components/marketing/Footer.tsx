import { Heart } from 'lucide-react';
import { LOGO_SRC, LOGO_ALT } from './logo';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);
  
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';
  
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {!logoError && (
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                className="h-10 w-10"
                onError={handleLogoError}
              />
            )}
            <span className="font-display text-xl font-bold text-foreground">
              ZeroPlast Crew
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1.5 flex-wrap">
              <span>© {currentYear}. Built with</span>
              <Heart className="text-primary inline-block" size={14} fill="currentColor" />
              <span>using</span>
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Sustainable tableware made from sugarcane bagasse. Better for you, better for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
}
