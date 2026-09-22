export const SITE_CONFIG = {
  name: 'OrderBridge AI',
  contactEmail: 'gabrielagyemanduah@gmail.com',
  productionUrl: 'https://orderbride-website.vercel.app',
  bookingUrl: 'https://cal.com/gabriel-agyeman-duah-q3cizx/orderbridge-demo-pilot-consultation',
  pilotFormEndpoint: 'https://formsubmit.co/ajax/gabrielagyemanduah@gmail.com',
  ogImage: '/assets/brand/orderbridge-og.webp'
} as const;

export const PUBLIC_ROUTES = [
  '/',
  '/product',
  '/how-it-works',
  '/for-restaurants',
  '/trust',
  '/about',
  '/pilot',
  '/book-demo',
  '/faq',
  '/privacy',
  '/terms'
] as const;
