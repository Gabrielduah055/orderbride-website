import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TRUST_FEATURES,
  TRUST_ROLES,
  TRUST_FAQ
} from '@core/constants/site-content.constants';
import { UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-trust-page', imports: [RouterLink], templateUrl: './trust.page.html', styleUrl: './trust.page.css' })
export class TrustPage {
  readonly utm = inject(UtmService);
  readonly features = TRUST_FEATURES;
  readonly roles = TRUST_ROLES;
  readonly faq = TRUST_FAQ;

  openFaqIndex: number | null = null;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
