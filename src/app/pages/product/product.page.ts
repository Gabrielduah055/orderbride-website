import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOMER_EXPERIENCE, FAQ_ITEMS, RESTAURANT_EXPERIENCE, TRUST_PRINCIPLES } from '@core/constants/site-content.constants';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product.page.html'
})
export class ProductPage {
  readonly utm = inject(UtmService);
  openFaqIndex: number | null = null;
  readonly customerHighlights = CUSTOMER_EXPERIENCE.slice(0, 5);
  readonly restaurantHighlights = RESTAURANT_EXPERIENCE.slice(0, 5);
  readonly trustHighlights = TRUST_PRINCIPLES.slice(0, 4);
  readonly faqHighlights = FAQ_ITEMS.slice(0, 3);
  readonly lifecycle = [
    { title: 'Discover', description: 'Customers ask questions and explore the menu in WhatsApp.', icon: 'uil uil-search' },
    { title: 'Order', description: 'Items and fulfilment details are captured clearly.', icon: 'uil uil-shopping-bag' },
    { title: 'Confirm', description: 'The restaurant reviews and accepts the request.', icon: 'uil uil-check-circle' },
    { title: 'Fulfil', description: 'Customers receive useful preparation and delivery updates.', icon: 'uil uil-truck' },
    { title: 'Follow up', description: 'The conversation can continue after the order.', icon: 'uil uil-heart' }
  ] as const;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
