import express from 'express';
import cors from 'cors';
import { randomUUID } from 'node:crypto';

const app = express();
const PORT = process.env.API_PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || '*';

app.use(
  cors({
    origin: FRONTEND_ORIGIN === '*' ? true : FRONTEND_ORIGIN.split(','),
    credentials: true,
  }),
);
app.use(express.json());

const siteState = {
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
  faqs: [
    {
      question: 'How far do you travel?',
      answer: 'We cover up to 120 miles from Manila and partner with roasters nationwide.',
    },
    {
      question: 'Can we customize flavors?',
      answer: 'Yes. Choose from classic Cebu-style, lemongrass-calamansi, or develop your own rub.',
    },
    {
      question: 'Do you offer tastings?',
      answer: 'Private tastings for events 60+ guests can be scheduled Tuesday–Thursday.',
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
  inquiries: [],
};

app.get('/api/content', (req, res) => {
  res.json({
    hero: siteState.hero,
    services: siteState.services,
    menu: siteState.menu,
    testimonials: siteState.testimonials,
    faqs: siteState.faqs,
    contact: siteState.contact,
    highlights: siteState.highlights,
  });
});

app.post('/api/inquiries', (req, res) => {
  const inquiry = {
    ...req.body,
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
  };

  siteState.inquiries.push(inquiry);
  res.status(201).json({ ok: true, inquiry });
});

app.get('/api/inquiries', (req, res) => {
  res.json(siteState.inquiries);
});

app.patch('/api/highlights', (req, res) => {
  siteState.highlights = {
    ...siteState.highlights,
    ...req.body,
  };

  res.json(siteState.highlights);
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Unexpected server error' });
});

app.listen(PORT, () => {
  console.log(`Roasted pig API listening on http://localhost:${PORT}`);
});

