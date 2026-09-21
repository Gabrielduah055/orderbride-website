import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE_CONFIG } from '@core/config/site.config';
import { UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-book-demo-page', templateUrl: './book-demo.page.html' })
export class BookDemoPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly utm = inject(UtmService);
  readonly bookingUrl = this.utm.appendToUrl(SITE_CONFIG.bookingUrl);
  readonly bookingEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.bookingUrl}${this.bookingUrl.includes('?') ? '&' : '?'}embed=true&theme=auto`);
  calendarLoading = true;

  calendarLoaded(): void {
    this.calendarLoading = false;
  }
}
