import type { ServiceOffering, MenuItem } from '../types/content';

type BenefitsSectionProps = {
  services: ServiceOffering[];
  menu: MenuItem[];
};

export const BenefitsSection = ({ services, menu }: BenefitsSectionProps) => (
  <section className="benefits">
    <div className="benefits__header">
      <p className="eyebrow">What we offer</p>
      <h2>Whole roasted pigs, tailored to your event</h2>
      <p className="benefits__description">
        From intimate gatherings to grand celebrations, we deliver authentic lechon with professional service.
      </p>
    </div>

    <div className="benefits__services">
      <h3>Service Options</h3>
      <div className="benefits__grid">
        {services.map((service) => (
          <div key={service.id} className="benefit-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="benefit-card__meta">
              <span className="benefit-card__price">{service.priceRange}</span>
              <span className="benefit-card__time">{service.leadTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="benefits__menu">
      <h3>Menu Packages</h3>
      <div className="benefits__grid">
        {menu.map((item) => (
          <div key={item.size} className="benefit-card benefit-card--menu">
            <div className="benefit-card__header">
              <p className="eyebrow">{item.size}</p>
              <p className="benefit-card__feeds">{item.feeds}</p>
            </div>
            <p className="benefit-card__price-large">${item.price}</p>
            <ul className="benefit-card__includes">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);


