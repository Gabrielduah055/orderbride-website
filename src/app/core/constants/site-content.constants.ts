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
    heading: 'Your menu is the source.',
    body: 'Answers use your saved menu, prices and availability. Keep these records up to date so customers get useful information.',
    bullets: [
      'Menu items and prices come from restaurant records',
      'Unclear requests prompt a clarifying question'
    ]
  },
  {
    eyebrow: 'Transparent totals',
    heading: 'A clear total before submission.',
    body: 'Customers review an itemised order before sending it. Your team sees the breakdown when deciding whether to accept.',
    bullets: [
      'Items, quantities and prices shown together',
      'Delivery fees follow your configured rules'
    ]
  },
  {
    eyebrow: 'Restaurant approval',
    heading: 'Submitted is not accepted.',
    body: 'A customer submits a request. Authorised restaurant staff review it and decide whether to accept or reject it.',
    bullets: [
      'Your team makes the acceptance decision',
      'Customers receive updates as the order progresses'
    ]
  },
  {
    eyebrow: 'Order records',
    heading: 'Details that stay connected.',
    body: 'Order details, status updates and receipts refer to the saved order, giving your team a record to check when questions come up.',
    bullets: [
      'Status changes recorded as the order progresses',
      'Receipts generated from saved order details'
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
    description: 'Browse the menu, submit an order and view their own order details, status and receipt.'
  },
  {
    label: 'Manager',
    description: 'Review orders, accept or reject requests, update fulfilment and manage menu availability.'
  },
  {
    label: 'Owner',
    description: 'Manager tools plus authorised contacts and selected restaurant settings. Reporting and campaign tools depend on the plan.'
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
    answer: 'Registered owners and managers use restaurant tools according to their assigned role. Customers have access to their own orders, not staff management tools.'
  },
  {
    question: 'Does submitting an order mean it is accepted?',
    answer: 'No. Submission sends the order for restaurant review. It is accepted only when authorised staff accept it; the customer then receives confirmation.'
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
  ['Set up', 'Prepare your restaurant', 'We configure your menu, delivery rules and team access, then walk staff through the workflow.'],
  ['Test', 'Use it with real orders', 'Your team tries the WhatsApp workflow in day-to-day service, with support and feedback along the way.'],
  ['Review', 'Decide what comes next', 'Together, we review what worked, identify gaps and discuss next steps before any wider rollout.']
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
