import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_NAVIGATION, SITE_NAME, SITE_TAGLINE } from '@core/constants/site-content.constants';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  readonly navigation = FOOTER_NAVIGATION;
  readonly siteName = SITE_NAME;
  readonly tagline = SITE_TAGLINE;
  readonly currentYear = new Date().getFullYear();
}
