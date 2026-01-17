import React from 'react';
import type { HeroContent } from '../types/content';
import lechonHeroImage from '../assets/lechon.jpg';

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '2rem',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${lechonHeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -2,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(ellipse at center, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.9) 100%)',
    zIndex: -1,
  },
  heroContent: {
    maxWidth: '800px',
    animation: 'fadeInUp 1s ease-out 0.5s forwards',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  h1: {
    margin: '1rem 0',
  },
  subtitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
    color: 'var(--color-subtle)',
    lineHeight: 1.6,
  },
  ctaButton: {
    marginTop: '2rem',
  },
};

export const Hero = ({ hero }: { hero: HeroContent }) => (
  <header style={styles.hero}>
    <div style={styles.heroBg} />
    <div style={styles.heroOverlay} />
    <div style={styles.heroContent}>
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 style={styles.h1}>{hero.title}</h1>
      <p style={styles.subtitle}>{hero.subtitle}</p>
      <div style={styles.ctaButton}>
        <a href="#menu" className="btn">
          <span>Explore The Menu</span>
        </a>
      </div>
      <div className="trust-points">
        <span>✓ Traditional Filipino Lechon</span>
        <span>✓ Crackling skin guarantee</span>
        <span>✓ Delicious Sauce</span>
      </div>
    </div>
  </header>
);