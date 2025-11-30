import type { HeroContent } from '../types/content';
import lechonHeroImage from '../assets/lechon.jpg';

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
        <p>✓ Traditional Filipino Lechon</p>
        <p>✓ Crackling skin guarantee</p>
        <p>✓ Delicious Sauce</p>
        <p>✓ We also offer Lechon Paksiw & Dinuguan</p>
      </div>
    </div>
    <div className="hero__visual">
      <div className="hero__glow" />
      <img src={lechonHeroImage} alt="Lechon" className="hero__image" />
    </div>
  </header>
);

