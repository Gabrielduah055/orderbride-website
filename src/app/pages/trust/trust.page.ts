import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TRUST_PRINCIPLES,
  TRUST_FEATURES,
  TRUST_ROLES,
  TRUST_FAQ
} from '@core/constants/site-content.constants';

@Component({ selector: 'app-trust-page', imports: [RouterLink], templateUrl: './trust.page.html' })
export class TrustPage {
  readonly principles = TRUST_PRINCIPLES;
  readonly features = TRUST_FEATURES;
  readonly roles = TRUST_ROLES;
  readonly faq = TRUST_FAQ;

  openFaqIndex: number | null = null;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
