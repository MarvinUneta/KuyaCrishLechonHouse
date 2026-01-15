import type { SiteContent } from '../types/content';

export const defaultContent: SiteContent = {
  hero: {
    eyebrow: 'Heritage-Fired Flavor',
    title: 'Kuya Cris Lechon House',
    subtitle:
      'Whole roasted lechon, small-batch sauces, and full-service carving teams tailored to every milestone.',
    primaryCta: 'Plan a Feast',
    secondaryCta: 'Download Menu',
  },
  services: [
    {
      id: 'delivery',
      title: 'Roasted Pig Delivery',
      description: 'Roasted lechon delivered hot with crackling skin and sauces.',
      priceRange: '150 minimum (depends on location)',
      leadTime: 'Order 5+ days ahead',
    },
    {
      id: 'corporate',
      title: 'Corporate + Pop-Ups',
      description: 'On-site roasting activations for product launches and team events.',
      priceRange: 'Custom',
      leadTime: 'Flexible start times',
    },
  ],
  menu: [
    {
      size: '8 kilos',
      feeds: 'Feeds 20 people',
      price: 13500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '10 kilos',
      feeds: 'Feeds 30 people',
      price: 14500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '12 kilos',
      feeds: 'Feeds 40 people',
      price: 15500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '14 kilos',
      feeds: 'Feeds 50 people',
      price: 16500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '16 kilos',
      feeds: 'Feeds 60 people',
      price: 17500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '18 kilos',
      feeds: 'Feeds 70 people',
      price: 18500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '20 kilos',
      feeds: 'Feeds 80 people',
      price: 19500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
    {
      size: '23 kilos',
      feeds: 'Feeds 100 people',
      price: 20500,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce'],
    },
  ],
  testimonials: [
    {
      name: 'Kyla Quintana',
      role: 'Taga-kain',
      quote:
        'Ubusin niyo na yung taba, wag lang yung balat!',
    },
    {
      name: 'Zaira Padillo',
      role: 'Jowa ni Ryon',
      quote: 'Nanakit batok ko sa sarap ng lechon ni Kuya Cris!',
    },
  ],
  contact: {
    phone: '+63 929 377 2489',
    email: 'kuyacrislechonhouse@gmail.com',
    location: '36 F. Oldan St., Brgy. Mayamot, Antipolo City',
    responseTime: 'Replies within 1 business day',
  },
  highlights: {
    nextMenuRefresh: '2025-02-15',
    featuredSpice: 'Calamansi Pepper Glaze',
    capacity: '5 concurrent events / weekend',
  },
};

