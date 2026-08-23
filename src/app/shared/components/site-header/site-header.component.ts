import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRIMARY_NAVIGATION, SITE_NAME } from '@core/constants/site-content.constants';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  readonly navigation = PRIMARY_NAVIGATION;
  readonly siteName = SITE_NAME;
  mobileMenuOpen = false;

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }
}
