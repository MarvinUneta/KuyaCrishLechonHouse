import type { HeroContent } from '../types/content';

type HeroProps = {
  hero: HeroContent;
};

export const Hero = ({ hero }: HeroProps) => (
  <header className="hero hero--landing">
    <div className="hero__content">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1>{hero.title}</h1>
      <p className="hero__subtitle">{hero.subtitle}</p>
      <div className="hero__trust">
        <p>✓ Professional carving service</p>
        <p>✓ Crackling skin guarantee</p>
        <p>✓ Custom spice blends</p>
      </div>
    </div>
    <div className="hero__visual">
      <div className="hero__glow" />
      <div className="hero__image-placeholder">
        <p>🔥 Live-fire roasted whole hogs</p>
        <p>Carved tableside for every celebration</p>
      </div>
    </div>
  </header>
);

