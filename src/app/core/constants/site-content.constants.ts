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

export interface TrustFeature {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: readonly string[];
}

export const TRUST_FEATURES: readonly TrustFeature[] = [
  {
    eyebrow: 'Menu-grounded answers',
    heading: 'Answers draw from your saved menu.',
    body: 'OrderBridge reads saved menu items, current prices and availability before forming a response. When a requested item is unclear or unavailable, the system asks for clarification rather than substituting something else.',
    bullets: [
      'Items and prices come from your saved menu records',
      'Availability is checked before confirming an item',
      'Unclear requests prompt a clarifying question, not a guess'
    ]
  },
  {
    eyebrow: 'Transparent totals',
    heading: 'Customers see the full cost before they submit.',
    body: 'OrderBridge recalculates item prices and delivery fees from saved restaurant records and shows customers an itemised total for their review. Restaurant staff see the same breakdown when deciding whether to accept.',
    bullets: [
      'Item-level breakdown shown before submission',
      'Delivery fee drawn from your configured delivery rules',
      'Restaurant staff see totals on every incoming order'
    ]
  },
  {
    eyebrow: 'Access based on staff role',
    heading: 'Each person gets the access their role requires.',
    body: 'Customers, managers and owners interact with different parts of the system based on verified role. Sensitive operational actions stay restricted to the right level of authority.',
    bullets: [
      'Role checked before each sensitive action',
      'Customer access is limited to their own order',
      'Owner and manager tools stay separate from customer tools'
    ]
  },
  {
    eyebrow: 'Order records and consent',
    heading: 'Order states are recorded. Outreach respects consent.',
    body: 'Each order moves through defined states — submitted, under restaurant review, accepted or rejected, then completed. Follow-up messages are only sent when the order is eligible and customer consent is confirmed.',
    bullets: [
      'Four recorded order states from submission to completion',
      'Receipts generated from saved order records, not written text',
      'Follow-up messages check consent state before sending'
    ]
  }
] as const;

export interface TrustRole {
  label: string;
  description: string;
}

export const TRUST_ROLES: readonly TrustRole[] = [
  {
    label: 'Customer',
    description: 'Browse the menu, ask questions, build and submit an order, choose pickup or delivery, and receive status updates and a receipt after acceptance.'
  },
  {
    label: 'Manager',
    description: 'Review and accept or reject submitted orders, update preparation and fulfilment status, manage menu availability, and access supported reporting on eligible plans.'
  },
  {
    label: 'Owner',
    description: 'All manager actions plus selected sensitive restaurant and menu configuration. Owners can also manage authorised contacts and campaign settings on eligible plans.'
  }
] as const;

export interface TrustFaqItem {
  question: string;
  answer: string;
}

export const TRUST_FAQ: readonly TrustFaqItem[] = [
  {
    question: 'What information can customers see?',
    answer: "Customers can browse menu items, prices and availability for the restaurant they are messaging. They can view their own order details and status. They cannot access other customers' orders or any restaurant management information."
  },
  {
    question: 'Who can access restaurant order data?',
    answer: 'Authorised owners and managers can review orders, history and receipts for their restaurant. Access is limited to contacts your restaurant has registered. OrderBridge staff access is restricted to what is needed to operate and support the service.'
  },
  {
    question: 'Is customer order data shared with other restaurants?',
    answer: "No. Each restaurant's orders, menu and customer conversations are kept separate. Data is not shared between restaurants on the platform."
  },
  {
    question: 'What happens when a menu item is out of stock or unclear?',
    answer: 'If a requested item is unavailable or the request is ambiguous, OrderBridge prompts the customer to clarify or choose an alternative. It does not substitute items or invent options that are not on your menu.'
  },
  {
    question: 'Can customers see my restaurant\'s location?',
    answer: 'Customers can see the address and delivery area information your restaurant has configured. You control what location details are saved and shown.'
  }
] as const;

export const PILOT_TIMELINE = [
  ['Days 1-3', 'Restaurant and menu setup', 'We configure restaurant information, the menu, delivery rules and authorised contacts.'],
  ['Days 4-18', 'Live workflow support', 'Customers and staff use the WhatsApp workflow in real operating conditions with close support.'],
  ['Days 19-21', 'Review and refinement', 'We review feedback, identify gaps and agree on the highest-value improvements.']
] as const;

export const PILOT_ELIGIBILITY = [
  'Already taking orders through WhatsApp',
  'Open to testing the product and sharing honest feedback',
  'Has a consistent menu with set prices',
  'Based in Ghana'
] as const;

export interface PilotResponsibilities {
  readonly youBring: readonly string[];
  readonly weSetUp: readonly string[];
}

export const PILOT_RESPONSIBILITIES: PilotResponsibilities = {
  youBring: [
    'Your existing WhatsApp business number for orders',
    'Your menu items, prices and any customisations',
    'A team member available to work with us during the pilot',
    'Honest feedback on what works and what does not'
  ],
  weSetUp: [
    'Restaurant and menu configuration',
    'WhatsApp ordering flow setup',
    'Staff onboarding and orientation session',
    'Live support throughout the 14–21 day pilot',
    'Review and refinement session at the end'
  ]
} as const;

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
