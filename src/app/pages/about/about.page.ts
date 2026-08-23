import { Component } from '@angular/core';
import { ABOUT_PRINCIPLES, SITE_IMAGES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-about-page', templateUrl: './about.page.html' })
export class AboutPage {
  readonly images = SITE_IMAGES;
  readonly principles = ABOUT_PRINCIPLES;
}
