import type { SiteContent } from '../types/content';

export const defaultContent: SiteContent = {
  hero: {
    eyebrow: 'Heritage-Fired Flavor',
    title: 'Mavi Roast Co.',
    subtitle:
      'Whole roasted lechon, small-batch sauces, and full-service carving teams tailored to every milestone.',
    primaryCta: 'Plan a Feast',
    secondaryCta: 'Download Menu',
  },
  services: [
    {
      id: 'catering',
      title: 'Signature Catering',
      description: 'Whole hog roasting with staff, carving show, and buffet styling.',
      priceRange: '$1,250+',
      leadTime: 'Book 3+ weeks ahead',
    },
    {
      id: 'delivery',
      title: 'Roasted Pig Delivery',
      description: 'Chef-roasted lechon delivered hot with crackling skin and sauces.',
      priceRange: '$480 - $980',
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
      size: '30 lb pig',
      feeds: 'Feeds 25-35 people',
      price: 520,
      includes: ['Crackling skin guarantee', 'Classic dipping sauce', 'Garlic rice tray'],
    },
    {
      size: '45 lb pig',
      feeds: 'Feeds 40-55 people',
      price: 780,
      includes: ['Two sauce pairings', 'Seasonal veg sides', 'Chef carving add-on'],
    },
    {
      size: '65 lb pig',
      feeds: 'Feeds 60-85 people',
      price: 1120,
      includes: ['Premium spice rub', 'Three sauce pairings', 'Event captain'],
    },
  ],
  testimonials: [
    {
      name: 'Chef Alonzo Cruz',
      role: 'Food Director, Harvest Table',
      quote:
        'The crackle stayed perfect for two hours of service. Team handled guests like pros.',
    },
    {
      name: 'Rae Villanueva',
      role: 'Bride, Summer 2025',
      quote: 'They orchestrated our reception feast start to finish—stress-free and spectacular.',
    },
  ],
  contact: {
    phone: '+63 917 555 6678',
    email: 'bookings@maviroast.co',
    location: 'Quezon City commissary, deliveries nationwide',
    responseTime: 'Replies within 1 business day',
  },
  highlights: {
    nextMenuRefresh: '2025-02-15',
    featuredSpice: 'Calamansi Pepper Glaze',
    capacity: '5 concurrent events / weekend',
  },
};

