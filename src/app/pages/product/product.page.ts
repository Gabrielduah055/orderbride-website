import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOMER_CAPABILITIES, SITE_IMAGES, STAFF_CAPABILITIES } from '@core/constants/site-content.constants';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product.page.html'
})
export class ProductPage {
  readonly images = SITE_IMAGES;
  readonly customerCapabilities = CUSTOMER_CAPABILITIES;
  readonly staffCapabilities = STAFF_CAPABILITIES;
}
