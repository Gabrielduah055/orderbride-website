import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-solutions-page',
  imports: [RouterLink],
  templateUrl: './solutions.page.html',
  styleUrl: './solutions.page.css'
})
export class SolutionsPage {
  readonly utm = inject(UtmService);
  openFaqIndex: number | null = null;

  readonly challenges = [
    { problem: 'Order details get buried in chat.', solution: 'Items, quantities and fulfilment details stay together for review.' },
    { problem: 'The same menu questions keep coming.', solution: 'Answers use your saved menu, prices and availability.' },
    { problem: 'It is unclear which orders are confirmed.', solution: 'Submitted requests wait for your team to accept or reject them.' },
    { problem: 'Customers keep asking for updates.', solution: 'Order status messages keep customers informed as your team updates progress.' }
  ] as const;

  readonly benefits = [
    { icon: 'uil uil-clipboard-notes', title: 'Review complete requests', description: 'See what the customer wants, with quantities and pickup or delivery details together.' },
    { icon: 'uil uil-user-check', title: 'Keep the final decision', description: 'Your authorised staff accept or reject each request. Customer submission is not restaurant acceptance.' },
    { icon: 'uil uil-bell', title: 'Keep fulfilment moving', description: 'Update preparation and fulfilment status so customers know what happens next.' }
  ] as const;

  readonly faqs = [
    { question: 'What do we need to get started?', answer: 'Setup starts with your menu, prices, opening hours, pickup and delivery rules, and authorised staff contacts. The pilot includes configuration, staff onboarding and live support.' },
    { question: 'Can I use my existing WhatsApp number?', answer: 'Bring your current restaurant number to the demo. We will review its setup and confirm the connection requirements before onboarding, including any changes needed.' },
    { question: 'Can we update our menu and availability?', answer: 'Yes. Your team can manage saved menu items, prices and availability. OrderBridge uses that restaurant information to answer customers and calculate order totals.' },
    { question: 'Does my team still approve every order?', answer: 'Yes. A customer submits a request for review. Authorised restaurant staff decide whether to accept or reject it, and the receipt is issued after acceptance.' }
  ] as const;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
