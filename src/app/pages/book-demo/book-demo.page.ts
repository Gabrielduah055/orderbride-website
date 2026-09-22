import { Component, DestroyRef, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';
import { UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-book-demo-page', imports: [RouterLink], templateUrl: './book-demo.page.html', styleUrls: ['../supporting-pages.css', './book-demo.page.css'] })
export class BookDemoPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly utm = inject(UtmService);
  private readonly destroyRef = inject(DestroyRef);
  private loadingTimer?: ReturnType<typeof setTimeout>;
  readonly contactEmail = SITE_CONFIG.contactEmail;
  readonly bookingUrl = this.utm.appendToUrl(SITE_CONFIG.bookingUrl);
  readonly bookingEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.bookingUrl}${this.bookingUrl.includes('?') ? '&' : '?'}embed=true&theme=light`);
  calendarRequested = false;
  calendarLoading = false;
  calendarSlow = false;

  constructor() { this.destroyRef.onDestroy(() => clearTimeout(this.loadingTimer)); }

  loadCalendar(): void {
    if (this.calendarRequested) return;
    this.calendarRequested = true;
    this.calendarLoading = true;
    this.loadingTimer = setTimeout(() => {
      this.calendarLoading = false;
      this.calendarSlow = true;
    }, 12000);
  }

  calendarLoaded(): void {
    clearTimeout(this.loadingTimer);
    this.calendarLoading = false;
    this.calendarSlow = false;
  }
}
