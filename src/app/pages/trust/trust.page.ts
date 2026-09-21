import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TRUST_PRINCIPLES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-trust-page', imports: [RouterLink], templateUrl: './trust.page.html' })
export class TrustPage {
  readonly principles = TRUST_PRINCIPLES;
}
