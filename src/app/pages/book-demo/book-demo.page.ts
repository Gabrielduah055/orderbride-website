import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-book-demo-page',
  templateUrl: './book-demo.page.html'
})
export class BookDemoPage {
  readonly bookingUrl = 'https://cal.com/gabriel-agyeman-duah-q3cizx/orderbridge-demo-pilot-consultation';
  readonly bookingEmbedUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.bookingEmbedUrl = sanitizer.bypassSecurityTrustResourceUrl(`${this.bookingUrl}?embed=true&theme=light`);
  }
}
