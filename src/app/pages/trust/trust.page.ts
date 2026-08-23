import { Component } from '@angular/core';
import { TRUST_PRINCIPLES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-trust-page', templateUrl: './trust.page.html' })
export class TrustPage {
  readonly principles = TRUST_PRINCIPLES;
}
