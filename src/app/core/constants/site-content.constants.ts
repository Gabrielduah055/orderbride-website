import { FaqItem, NavigationItem } from '@core/models/site.models';

export const SITE_NAME = 'OrderBridge AI';
export const SITE_TAGLINE = 'Conversations into confirmed orders.';

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  { label: 'Product', route: '/product' },
  { label: 'How it works', route: '/how-it-works' },
  { label: 'For restaurants', route: '/for-restaurants' },
  { label: 'Trust', route: '/trust' },
  { label: 'Pilot', route: '/pilot' }
];

export const FOOTER_NAVIGATION: NavigationItem[] = [
  ...PRIMARY_NAVIGATION,
  { label: 'Book a demo', route: '/book-demo' },
  { label: 'About', route: '/about' },
  { label: 'FAQ', route: '/faq' },
  { label: 'Privacy', route: '/privacy' },
  { label: 'Terms', route: '/terms' }
];

export const PROBLEMS = [
  ['Details get buried', 'Items, quantities and delivery details disappear inside long message threads.'],
  ['Orders arrive incomplete', 'Missing quantities, addresses or fulfilment choices slow down the next step.'],
  ['Busy periods create delays', 'Customers wait while staff answer the same menu and availability questions.'],
  ['Manual copying adds risk', 'Teams move details from chat into another system by hand.'],
  ['Customers lose certainty', 'Without clear confirmation and status updates, nobody knows what happens next.']
] as const;

export const CUSTOMER_EXPERIENCE = [
  'Discover menus using restaurant data',
  'Ask questions and receive recommendations',
  'Create and amend an order before staff action',
  'Choose pickup or delivery',
  'Receive order status updates',
  'Get receipts and share feedback'
] as const;

export const RESTAURANT_EXPERIENCE = [
  'Review, accept or reject submitted orders',
  'Manage menu availability and restaurant details',
  'Update preparation and fulfilment status',
  'Receive daily and weekly summaries on supported plans',
  'Resolve cancellation requests after acceptance',
  'Follow up with customers after eligible orders',
  'Prepare consent-aware campaigns on supported plans'
] as const;

export const TRUST_PRINCIPLES = [
  ['Restaurant data is authoritative', 'Menu items, prices, availability and delivery rules come from saved restaurant records.'],
  ['Permissions match the user', 'Customers, managers and owners receive different tools based on trusted identity and role checks.'],
  ['Submission is not acceptance', 'A customer can submit an order, but authorised restaurant staff still decide whether to accept it.'],
  ['Sensitive actions are confirmed', 'Changes with operational impact require clear intent and, where needed, a confirmation step.'],
  ['Backend results control side effects', 'Receipts, messages and order changes follow structured system results, not generated wording.'],
  ['People stay in control', 'Restaurant staff can reject, correct and resolve orders when circumstances change.']
] as const;

export const PILOT_TIMELINE = [
  ['Days 1-3', 'Restaurant and menu setup', 'We configure restaurant information, the menu, delivery rules and authorised contacts.'],
  ['Days 4-18', 'Live workflow support', 'Customers and staff use the WhatsApp workflow in real operating conditions with close support.'],
  ['Days 19-21', 'Review and refinement', 'We review feedback, identify gaps and agree on the highest-value improvements.']
] as const;

export const BUSINESS_TYPES = [
  ['Restaurants', 'Keep menu enquiries, orders and fulfilment decisions connected.'],
  ['Takeaways', 'Capture pickup and delivery requests without a separate customer app.'],
  ['Cafés', 'Answer availability questions and organise simple orders during busy periods.'],
  ['Food vendors and chop bars', 'Share current menus and turn familiar chats into clearer orders.'],
  ['Healthy food brands', 'Handle ingredient questions, combinations and delivery details.'],
  ['Caterers', 'Collect clearer enquiry details and coordinate follow-up for larger requests.']
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  { question: 'Do customers need to install an app?', answer: 'No. Customers use the restaurant\'s WhatsApp conversation. OrderBridge adds structure behind that familiar experience.' },
  { question: 'How do menus and prices stay accurate?', answer: 'The backend reads saved restaurant menu items, prices and availability. It recalculates trusted prices and fees instead of treating AI-written amounts as authoritative.' },
  { question: 'Is customer confirmation the same as restaurant acceptance?', answer: 'No. Customer confirmation submits an order for review. An authorised owner or manager must still accept or reject it before the receipt is issued.' },
  { question: 'Does OrderBridge support pickup and delivery?', answer: 'Yes. A restaurant can configure pickup and delivery, including flat fees, zone-based fees or manual delivery-fee confirmation.' },
  { question: 'Can a customer change or cancel an order?', answer: 'A customer can amend or cancel while the order is waiting for restaurant action. After acceptance, cancellation becomes a request for authorised staff to resolve.' },
  { question: 'What can restaurant staff do?', answer: 'Permissions depend on role. Owners and managers can handle supported order operations, while selected sensitive actions remain restricted.' },
  { question: 'When does a customer receive a receipt?', answer: 'The system generates a PDF receipt from saved order and restaurant records after the restaurant accepts the order.' },
  { question: 'How are promotions handled?', answer: 'Campaign features are plan-dependent and use customer marketing preferences, consent and opt-out state to determine eligible recipients.' },
  { question: 'What is included in the pilot?', answer: 'The 14-21 day pilot covers restaurant and menu setup, WhatsApp workflow configuration, staff onboarding, live support, review and refinement.' },
  { question: 'Which food businesses can use OrderBridge?', answer: 'The product is designed for restaurants, takeaways, cafés, food vendors, chop bars, healthy food brands and caterers.' }
];
