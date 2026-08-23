import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS_CONFIGURATION, BUSINESS_SOLUTIONS, SITE_IMAGES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-solutions-page', imports: [RouterLink], templateUrl: './solutions.page.html' })
export class SolutionsPage {
  readonly solutions = BUSINESS_SOLUTIONS;
  readonly configuration = BUSINESS_CONFIGURATION;
  readonly images = SITE_IMAGES;
}
