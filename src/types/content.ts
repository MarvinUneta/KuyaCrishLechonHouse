export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ServiceOffering = {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  leadTime: string;
};

export type MenuItem = {
  size: string;
  feeds: string;
  price: number;
  includes: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  location: string;
  responseTime: string;
};

export type Highlights = {
  nextMenuRefresh: string;
  featuredSpice: string;
  capacity: string;
};

export type SiteContent = {
  hero: HeroContent;
  services: ServiceOffering[];
  menu: MenuItem[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  highlights: Highlights;
};

