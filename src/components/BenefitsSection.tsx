import React from 'react';
import type { ServiceOffering, MenuItem } from '../types/content';

const gridContainer: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  margin: '3rem 0',
};

const cardStyles: React.CSSProperties = {
  padding: '2rem',
  textAlign: 'center',
};

const sectionHeader: React.CSSProperties = {
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 4rem',
};

const h2: React.CSSProperties = {
  margin: '1rem 0',
};

const h3: React.CSSProperties = {
  fontSize: '1.5rem',
  fontFamily: 'var(--font-serif)',
  marginBottom: '2rem',
  textAlign: 'center',
};

const description: React.CSSProperties = {
  fontSize: '1.1rem',
  color: 'var(--color-subtle)',
  lineHeight: 1.6,
};

export const BenefitsSection = ({ services, menu }: { services: ServiceOffering[], menu: MenuItem[] }) => (
  <section className="section" id="menu">
    <div style={sectionHeader}>
      <p className="eyebrow">Our Offerings</p>
      <h2 style={h2}>Authentic Roasted Delights</h2>
      <p style={description}>
        From intimate gatherings to grand celebrations, we provide an unforgettable culinary experience.
      </p>
    </div>

    <div>
      <h3 style={h3}>Menu Packages</h3>
      <div style={gridContainer}>
        {menu.map((item) => (
          <div key={item.size} className="glass-card" style={cardStyles}>
            <p className="eyebrow">{item.size}</p>
            <h4 style={{ fontSize: '1.75rem', margin: '0.5rem 0', color: 'var(--color-gold)' }}>₱{item.price}</h4>
            <p style={{ color: 'var(--color-subtle)' }}>{item.feeds}</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {item.includes.map(line => <li key={line}>✓ {line}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div style={{ marginTop: '5rem' }}>
      <h3 style={h3}>Service Options</h3>
      <div style={gridContainer}>
        {services.map(service => (
          <div key={service.id} className="glass-card" style={cardStyles}>
            <h4 style={{ fontSize: '1.5rem', margin: '0 0 1rem' }}>{service.title}</h4>
            <p style={{ color: 'var(--color-subtle)' }}>{service.description}</p>
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-gold)' }}>₱{service.priceRange}</span>
              <span style={{ color: 'var(--color-subtle)' }}>{service.leadTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);