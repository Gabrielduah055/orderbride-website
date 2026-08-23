import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '@shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '@shared/components/site-header/site-header.component';

@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './site-layout.component.html'
})
export class SiteLayoutComponent {}
