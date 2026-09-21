import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS_TYPES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-solutions-page', imports: [RouterLink], templateUrl: './solutions.page.html' })
export class SolutionsPage {
  readonly businessTypes = BUSINESS_TYPES;
}
