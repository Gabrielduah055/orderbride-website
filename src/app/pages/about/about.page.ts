import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-about-page', imports: [RouterLink], templateUrl: './about.page.html', styleUrls: ['../supporting-pages.css', './about.page.css'] })
export class AboutPage { readonly utm = inject(UtmService); }
