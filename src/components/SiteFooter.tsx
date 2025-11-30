import type { ContactInfo } from '../types/content';

type SiteFooterProps = {
  contact: ContactInfo;
};

export const SiteFooter = ({ contact }: SiteFooterProps) => (
  <footer className="site-footer">
    <div className="site-footer__content">
      <div className="site-footer__brand">
        <img src="../assets/Ice Cream (3).png" alt="MRVS Logo" className="site-footer__logo" />
        <p>Roasted Pig Studio</p>
      </div>
      <div className="site-footer__contact">
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <p>{contact.location}</p>
      </div>
    </div>
    <p className="site-footer__copyright">
      © {new Date().getFullYear()} Mavi
    </p>
  </footer>
);

