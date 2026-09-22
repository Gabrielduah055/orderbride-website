export interface FaqEntry { id: string; question: string; answer: string; }
export interface FaqGroup { id: string; title: string; description: string; icon: string; items: readonly FaqEntry[]; }

export const FAQ_GROUPS: readonly FaqGroup[] = [
  {
    id: 'getting-started', title: 'Getting started', icon: 'uil-rocket',
    description: 'The basics, before you bring OrderBridge to your restaurant.',
    items: [
      { id: 'what-is-orderbridge', question: 'What is OrderBridge AI?', answer: 'OrderBridge helps food businesses turn WhatsApp conversations into structured orders. Customers ask about the menu and submit their order in chat; your team reviews it and controls acceptance and fulfilment.' },
      { id: 'whatsapp-number', question: 'Do I need a new WhatsApp number?', answer: 'OrderBridge is designed around the number your business already uses for orders. During setup, we review your current WhatsApp arrangement and confirm the connection steps before you go live.' },
      { id: 'business-types', question: 'Which food businesses is it for?', answer: 'Restaurants, takeaways, cafés, food vendors, chop bars, caterers and food brands that already take orders through conversations. The current pilot focuses on businesses in Ghana.' },
      { id: 'setup-requirements', question: 'What do I need to get started?', answer: 'Your restaurant details, WhatsApp business number, menu items, prices, customisations and delivery rules. You will also need a team member to help with setup and share feedback during the pilot.' }
    ]
  },
  {
    id: 'whatsapp', title: 'WhatsApp and your customers', icon: 'uil-whatsapp',
    description: 'A familiar conversation, with clearer order details.',
    items: [
      { id: 'customer-app', question: 'Do customers need to install another app?', answer: 'No. Customers use WhatsApp to chat with your restaurant, ask about the menu and place an order.' },
      { id: 'customer-order', question: 'How does a customer place an order?', answer: 'They message your restaurant, choose items and quantities, provide pickup or delivery details, then review and submit the order. Your team still decides whether to accept it.' },
      { id: 'changes-cancellations', question: 'Can customers change or cancel an order?', answer: 'Customers can amend or cancel an order while it is waiting for restaurant action. After acceptance, a cancellation becomes a request for authorised staff to review.' },
      { id: 'receipts', question: 'When does a customer receive a receipt?', answer: 'After the restaurant accepts the order, OrderBridge generates a PDF receipt from the saved restaurant and order details. Submitting an order alone does not mean it has been accepted.' }
    ]
  },
  {
    id: 'menus-orders', title: 'Menus and orders', icon: 'uil-restaurant',
    description: 'Keep the menu, the total and the next step clear.',
    items: [
      { id: 'menu-accuracy', question: 'How do menus and prices stay accurate?', answer: 'OrderBridge uses saved restaurant menu items, prices and availability when answering customers. Your team needs to keep those records up to date. Order totals use the saved prices and configured fees.' },
      { id: 'menu-updates', question: 'Can we update menu availability?', answer: 'Authorised staff can manage menu availability and supported menu settings. During setup, we walk your team through the controls available to each role.' },
      { id: 'pickup-delivery', question: 'Does OrderBridge support pickup and delivery?', answer: 'Yes. Your restaurant can configure pickup and delivery, with delivery fees based on your setup. Where a fee needs staff confirmation, it should be resolved before the customer submits the order.' },
      { id: 'acceptance', question: 'Can we review orders before accepting them?', answer: 'Yes. Submission sends an order for review. An authorised owner or manager accepts or rejects it, and your team updates preparation and fulfilment as the order progresses.' }
    ]
  },
  {
    id: 'team', title: 'Restaurant control', icon: 'uil-setting',
    description: 'Your team stays responsible for restaurant decisions.',
    items: [
      { id: 'staff-permissions', question: 'What can owners and managers do?', answer: 'Owners and managers can review orders, update fulfilment and manage menu availability. Selected restaurant settings and authorised contacts are owner-level actions. Reporting and campaign features depend on the plan.' },
      { id: 'customer-access', question: 'Can customers access our management tools?', answer: 'Customers can browse the menu and view their own order details and status. Restaurant tools require an authorised staff role; asking for access in a message does not grant it.' }
    ]
  },
  {
    id: 'privacy', title: 'Privacy and trust', icon: 'uil-shield-check',
    description: 'Understand the controls and where your enquiry goes.',
    items: [
      { id: 'promotions', question: 'Does ordering opt a customer into promotions?', answer: 'An order is not blanket permission for promotional messages. On supported plans, outreach checks customer marketing preferences, consent and opt-out status. Order updates and promotions are different.' },
      { id: 'website-data', question: 'What happens to information I submit on this website?', answer: 'Pilot application details are sent through FormSubmit so the team can review and respond. Demo bookings use Cal.com. Our website privacy notice explains these enquiry and booking flows; it is not a complete policy for restaurant order data.' },
      { id: 'privacy-questions', question: 'Who can I contact about privacy?', answer: 'Use the team contact link below or the contact address in our privacy notice. Tell us which enquiry or service your question concerns, without including customer order data or other sensitive information in the initial message.' }
    ]
  },
  {
    id: 'pilot', title: 'The restaurant pilot', icon: 'uil-clipboard-notes',
    description: 'Setup, support and what happens after you apply.',
    items: [
      { id: 'pilot-includes', question: 'What is included in the pilot?', answer: 'The guided 14–21 day pilot includes restaurant and menu setup, WhatsApp workflow configuration, staff orientation, live support and a review of what worked and what needs improvement.' },
      { id: 'pilot-cost', question: 'Is there a fee for the pilot?', answer: 'No fee is charged during the pilot period. We discuss what happens next at the final review. Applying does not automatically enrol your restaurant or commit you to a paid service.' },
      { id: 'pilot-application', question: 'What happens after I apply?', answer: 'The team reviews your application for operational fit. If there is a fit, we discuss your restaurant, answer questions and agree on timing before setup. Applying does not guarantee a place or immediate activation.' }
    ]
  }
];

/** Search and topic selection combine; IDs stay stable while results change. */
export function filterFaqGroups(query: string, topic = 'all'): FaqGroup[] {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return FAQ_GROUPS.filter(group => topic === 'all' || group.id === topic)
    .map(group => ({ ...group, items: group.items.filter(item => {
      const text = `${group.title} ${item.question} ${item.answer}`.toLocaleLowerCase();
      return words.every(word => text.includes(word));
    }) }))
    .filter(group => group.items.length > 0);
}
