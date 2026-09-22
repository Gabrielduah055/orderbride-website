import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQ_ITEMS } from '@core/constants/site-content.constants';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.page.html'
})
export class HomePage {
  readonly utm = inject(UtmService);
  openFaqIndex: number | null = null;

  readonly steps = [
    { number: '01', title: 'Customers order naturally', description: 'They message your restaurant on WhatsApp, just like they do today.' },
    { number: '02', title: 'OrderBridge adds structure', description: 'Items, quantities and fulfilment details become one clear order.' },
    { number: '03', title: 'Your team confirms', description: 'Restaurant staff review the request, decide and keep customers updated.' }
  ] as const;

  readonly productHighlights = [
    'Understands menu requests',
    'Structures order details',
    'Supports status updates',
    'Keeps your team in control'
  ] as const;

  readonly ownerBenefits = [
    { title: 'Fewer missed orders', description: 'Keep customer requests complete and easier to review.', icon: 'uil uil-comments' },
    { title: 'Structured fulfilment', description: 'Manage pickup and delivery details in one place.', icon: 'uil uil-clipboard-notes' },
    { title: 'Accurate menu information', description: 'Use saved items, prices and availability.', icon: 'uil uil-book-open' },
    { title: 'Clear status updates', description: 'Keep customers informed from confirmation to fulfilment.', icon: 'uil uil-bell' }
  ] as const;

  readonly trustPoints = [
    { title: 'Grounded menu data', description: 'Saved restaurant information stays authoritative.', icon: 'uil uil-database' },
    { title: 'Restaurant authority', description: 'Your staff review and approve operational actions.', icon: 'uil uil-user-check' },
    { title: 'Clear confirmation', description: 'Customers receive unambiguous order updates.', icon: 'uil uil-check-circle' }
  ] as const;

  readonly faqHighlights = FAQ_ITEMS.slice(0, 3);

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
