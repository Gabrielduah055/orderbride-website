import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-page-actions',
  imports: [RouterLink],
  template: `
    @if (visible()) {
      <div class="page-actions" aria-label="Page actions">
        <a routerLink="/book-demo" [queryParams]="utm.queryParams()" class="floating-demo">Book a demo</a>
        <button type="button" class="back-to-top" aria-label="Back to top" (click)="backToTop()">↑</button>
      </div>
    }
  `
})
export class PageActionsComponent implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  readonly utm = inject(UtmService);
  readonly visible = signal(false);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const sentinel = this.document.querySelector('.scroll-sentinel');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => this.visible.set(!entry.isIntersecting), { rootMargin: '-180px 0px 0px' });
    observer.observe(sentinel);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  backToTop(): void {
    const reduced = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.document.documentElement.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }
}
