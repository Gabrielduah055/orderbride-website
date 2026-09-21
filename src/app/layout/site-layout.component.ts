import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SeoService } from '@core/services/seo.service';
import { RouteProgressComponent } from '@shared/components/route-progress/route-progress.component';
import { SiteFooterComponent } from '@shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '@shared/components/site-header/site-header.component';

@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, RouteProgressComponent],
  templateUrl: './site-layout.component.html'
})
export class SiteLayoutComponent {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.seo.apply(this.router.routerState.snapshot.root));
  }
}
