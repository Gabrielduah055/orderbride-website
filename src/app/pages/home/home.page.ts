import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOMER_CAPABILITIES, HOW_IT_WORKS_STEPS, SITE_IMAGES, STAFF_CAPABILITIES, TRUST_PRINCIPLES } from '@core/constants/site-content.constants';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.page.html'
})
export class HomePage {
  readonly images = SITE_IMAGES;
  readonly customerCapabilities = CUSTOMER_CAPABILITIES.slice(0, 3);
  readonly staffCapabilities = STAFF_CAPABILITIES.slice(0, 3);
  readonly processSteps = HOW_IT_WORKS_STEPS.slice(0, 4);
  readonly trustPrinciples = TRUST_PRINCIPLES.slice(0, 3);
}
