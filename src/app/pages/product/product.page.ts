import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOMER_EXPERIENCE, RESTAURANT_EXPERIENCE } from '@core/constants/site-content.constants';

@Component({ selector: 'app-product-page', imports: [RouterLink], templateUrl: './product.page.html' })
export class ProductPage {
  readonly customerExperience = CUSTOMER_EXPERIENCE;
  readonly restaurantExperience = RESTAURANT_EXPERIENCE;
}
