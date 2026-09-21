import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQ_ITEMS } from '@core/constants/site-content.constants';

@Component({ selector: 'app-faq-page', imports: [RouterLink], templateUrl: './faq.page.html' })
export class FaqPage {
  readonly items = FAQ_ITEMS;
}
