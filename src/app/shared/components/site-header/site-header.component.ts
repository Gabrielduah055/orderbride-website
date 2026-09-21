import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, HostListener, PLATFORM_ID, QueryList, ViewChild, ViewChildren, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRIMARY_NAVIGATION } from '@core/constants/site-content.constants';
import { UtmService } from '@core/services/utm.service';
import { BrandLogoComponent } from '@shared/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, BrandLogoComponent],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent implements AfterViewInit {
  @ViewChild('menuTrigger') private menuTrigger?: ElementRef<HTMLButtonElement>;
  @ViewChildren('mobileLink') private mobileLinks?: QueryList<ElementRef<HTMLElement>>;
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly utm = inject(UtmService);
  readonly navigation = PRIMARY_NAVIGATION;
  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const sentinel = this.document.querySelector('.scroll-sentinel');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => this.scrolled.set(!entry.isIntersecting), { rootMargin: '-12px 0px 0px' });
    observer.observe(sentinel);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  toggleMenu(): void {
    this.mobileMenuOpen() ? this.closeMenu() : this.openMenu();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  openMenu(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.mobileMenuOpen.set(true);
    this.document.body.classList.add('menu-open');
    queueMicrotask(() => this.mobileLinks?.first?.nativeElement.focus());
  }

  closeMenu(): void {
    if (!this.mobileMenuOpen()) return;
    this.mobileMenuOpen.set(false);
    this.document.body.classList.remove('menu-open');
    this.menuTrigger?.nativeElement.focus();
  }

  onMenuKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = this.mobileLinks?.toArray().map((item) => item.nativeElement) ?? [];
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
