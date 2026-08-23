import { ChatMessage, ContentCard, FaqItem, NavigationItem, ProcessStep } from '@core/models/site.models';

export const SITE_NAME = 'OrderBridge AI';
export const SITE_TAGLINE = 'Restaurant operations, built for WhatsApp.';

export const SITE_IMAGES = {
  restaurantOwnerHero: '/images/ghanaian-restaurant-owner-hero.png',
  customerOrdering: '/images/customer-ordering-by-chat.png',
  restaurantTeam: '/images/restaurant-team-live-service.png',
  productHero: '/images/product-hero-v2.png',
  solutionsHero: '/images/solutions-hero.png',
  pilotHero: '/images/pilot-hero.png'
} as const;

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  { label: 'Home', route: '/' },
  { label: 'Product', route: '/product' },
  { label: 'How it works', route: '/how-it-works' },
  { label: 'Solutions', route: '/solutions' },
  { label: 'About', route: '/about' },
  { label: 'Pilot', route: '/pilot' }
];

export const FOOTER_NAVIGATION: NavigationItem[] = [
  ...PRIMARY_NAVIGATION,
  { label: 'Trust & control', route: '/trust' },
  { label: 'FAQ', route: '/faq' }
];

export const CHAT_MESSAGES: ChatMessage[] = [
  { from: 'customer', text: 'Hi! What’s on the menu today? 🍽️', time: '12:01 PM' },
  { from: 'assistant', text: 'Welcome to Accra Kitchen.\n\n🍛 Jollof Rice — GH₵35\n🥩 Grilled Tilapia — GH₵55\n🫘 Red Red & Plantain — GH₵28', time: '12:01 PM' },
  { from: 'customer', text: 'One Jollof Rice. Delivery to East Legon.', time: '12:02 PM' },
  { from: 'assistant', text: 'Jollof Rice × 1 — GH₵35\nDelivery — GH₵15\nTotal — GH₵50\n\nReply YES to confirm.', time: '12:02 PM' },
  { from: 'customer', text: 'YES', time: '12:03 PM' },
  { from: 'assistant', text: 'Order #OB-2847 submitted. Accra Kitchen will confirm it shortly.', time: '12:03 PM' },
  { from: 'assistant', text: 'Good news — Accra Kitchen accepted your order. Preparation has started.', time: '12:05 PM' },
  { from: 'assistant', text: 'Your order is ready for delivery. A receipt will follow here.', time: '12:28 PM' }
];

export const CUSTOMER_CAPABILITIES: ContentCard[] = [
  { icon: 'uil uil-restaurant', title: 'Discover the menu', description: 'Ask about available meals, prices, ingredients and food images in ordinary language.' },
  { icon: 'uil uil-comment-alt-verify', title: 'Get grounded recommendations', description: 'Receive suggestions based on the restaurant’s real menu, preferences and current availability.' },
  { icon: 'uil uil-shopping-cart-alt', title: 'Build and change orders', description: 'Add items, change quantities and correct details before submitting the final order.' },
  { icon: 'uil uil-truck', title: 'Choose pickup or delivery', description: 'Select fulfilment and provide the location information required by the restaurant.' },
  { icon: 'uil uil-bell', title: 'Receive live updates', description: 'Stay informed as the restaurant accepts, prepares and completes the order.' },
  { icon: 'uil uil-receipt', title: 'Get a clear receipt', description: 'Receive a structured order summary and receipt through the same conversation.' }
];

export const STAFF_CAPABILITIES: ContentCard[] = [
  { icon: 'uil uil-check', title: 'Review and confirm orders', description: 'Authorised owners and managers can accept, reject and update order status directly through WhatsApp.' },
  { icon: 'uil uil-file-graph', title: 'Keep restaurant details current', description: 'Update menu prices, availability and food information through controlled, confirmed actions.' },
  { icon: 'uil uil-calendar', title: 'Plan reminders and campaigns', description: 'Schedule operational reminders and prepare approved customer messages without another interface.' },
  { icon: 'uil uil-statistics', title: 'Ask for business performance', description: 'Request daily or weekly summaries covering orders, revenue, top items and customer activity.' },
  { icon: 'uil uil-comment-alt-heart', title: 'Follow up with customers', description: 'Collect feedback, respond to issues and re-engage eligible customers with relevant messages.' }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  { icon: 'uil uil-comment-alt-notes', title: 'A conversation begins', description: 'A customer, owner or authorised manager messages the restaurant’s WhatsApp number.' },
  { icon: 'uil uil-info', title: 'OrderBridge understands the context', description: 'The agent identifies who is speaking, what they need and which actions they are permitted to use.' },
  { icon: 'uil uil-check-square', title: 'The right action is completed', description: 'OrderBridge reads or updates structured restaurant data instead of relying on generated guesses.' },
  { icon: 'uil uil-comment-check', title: 'The outcome is confirmed', description: 'Important details are checked and everyone receives a clear WhatsApp update based on the saved result.' }
];

export const BUSINESS_SOLUTIONS = [
  { icon: 'uil uil-restaurant', imageUrl: '/images/solution-restaurant.png', title: 'Restaurants', description: 'Handle menu enquiries, ordering, fulfilment, receipts, reporting and customer follow-up through WhatsApp.' },
  { icon: 'uil uil-shopping-bag', imageUrl: '/images/solution-takeaway.png', title: 'Takeaways', description: 'Capture fast, accurate pickup and delivery orders without sending customers through another app.' },
  { icon: 'uil uil-coffee', imageUrl: '/images/solution-cafe.png', title: 'Cafés', description: 'Answer product questions, communicate availability and keep simple orders organised during busy hours.' },
  { icon: 'uil uil-store', imageUrl: '/images/solution-food-vendor.png', title: 'Food vendors & chop bars', description: 'Make daily menus easier to discover while keeping the ordering experience familiar and accessible.' },
  { icon: 'uil uil-heart', imageUrl: '/images/solution-salad.png', title: 'Salad & healthy food brands', description: 'Turn ingredient questions, custom combinations and delivery requests into clear, confirmed orders.' },
  { icon: 'uil uil-utensils', imageUrl: '/images/solution-caterer.png', title: 'Caterers', description: 'Handle enquiries and prepare customer requests with clearer details, confirmation and follow-up.' }
];

export const BUSINESS_CONFIGURATION: ContentCard[] = [
  { icon: 'uil uil-clock', title: 'Opening hours', description: 'When customers can order and receive support.' },
  { icon: 'uil uil-home', title: 'Pickup details', description: 'Clear collection address and instructions.' },
  { icon: 'uil uil-pizza-slice', title: 'Menu and availability', description: 'Real items, prices and daily stock.' },
  { icon: 'uil uil-user', title: 'Authorised team', description: 'The owners and managers allowed to act.' },
  { icon: 'uil uil-location-pin-alt', title: 'Delivery areas', description: 'Zones and locations the business serves.' },
  { icon: 'uil uil-bill', title: 'Order rules and fees', description: 'Minimums, delivery prices and fulfilment rules.' },
  { icon: 'uil uil-microphone', title: 'Assistant voice', description: 'A tone that still feels like the restaurant.' }
];

export const ABOUT_PRINCIPLES: ContentCard[] = [
  { icon: 'uil uil-compass', title: 'Start with reality', description: 'Build around how Ghanaian businesses and customers already behave.' },
  { icon: 'uil uil-shield-check', title: 'Earn trust through control', description: 'Important actions need permissions, real data and confirmation.' },
  { icon: 'uil uil-bolt-alt', title: 'Make advanced technology feel simple', description: 'The product should feel like a helpful conversation, not technical software.' },
  { icon: 'uil uil-users-alt', title: 'Learn beside the business', description: 'Real operating feedback should shape the product before assumptions do.' }
];

export const TRUST_PRINCIPLES: ContentCard[] = [
  { icon: '01', title: 'Restaurant data is the source of truth', description: 'Prices, availability, orders and operational records come from saved restaurant data—not AI invention.' },
  { icon: '02', title: 'Actions follow permissions', description: 'Customers, managers and owners only receive tools appropriate to their role.' },
  { icon: '03', title: 'Important steps are confirmed', description: 'Customer submission and restaurant acceptance are separate, deliberate actions.' },
  { icon: '04', title: 'Customer outreach respects consent', description: 'Campaigns account for marketing preference, consent and opt-out status.' },
  { icon: '05', title: 'Humans remain in control', description: 'Owners and managers can intervene, reject, correct and resolve situations whenever necessary.' },
  { icon: '06', title: 'Side effects are structured', description: 'Notifications, receipts and status changes follow backend results rather than unverified AI wording.' }
];

export const PILOT_TIMELINE = [
  { period: 'Days 1–3', title: 'Setup and onboarding', description: 'We configure your restaurant information, menu, WhatsApp workflow and authorised contacts.' },
  { period: 'Days 4–18', title: 'Live restaurant use', description: 'Customers and staff use OrderBridge in real operating conditions with close support from us.' },
  { period: 'Days 19–21', title: 'Review and refinement', description: 'We review feedback, identify gaps and agree on the most important improvements.' }
];

export const FAQ_ITEMS: FaqItem[] = [
  { question: 'Do customers need to download an app?', answer: 'No. Customers interact with the restaurant through WhatsApp, using the messaging experience they already know.' },
  { question: 'Is OrderBridge a restaurant dashboard?', answer: 'No. OrderBridge is an agentic WhatsApp application. Customers, owners and managers perform supported actions through conversation.' },
  { question: 'Can the AI invent menu items or prices?', answer: 'It is designed to use the restaurant’s stored menu, prices and availability as the source of truth.' },
  { question: 'Who can change prices or accept orders?', answer: 'Actions are role-controlled. Customers cannot access restaurant management tools, and some sensitive actions are limited to owners.' },
  { question: 'Does OrderBridge support pickup and delivery?', answer: 'Yes. Restaurants can configure pickup and delivery, including flat, zone-based or manually confirmed delivery fees.' },
  { question: 'Can restaurants send promotions?', answer: 'Supported restaurants can prepare promotions, announcements and re-engagement campaigns for customers who are eligible to receive them.' },
  { question: 'What happens when a customer submits an order?', answer: 'The order waits for restaurant confirmation. An authorised owner or manager can accept or reject it before the final receipt is issued.' },
  { question: 'Is OrderBridge currently available?', answer: 'OrderBridge is entering a 14–21 day Ghanaian restaurant pilot with selected food businesses.' }
];
