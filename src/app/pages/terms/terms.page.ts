import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';

@Component({ selector: 'app-terms-page', imports: [RouterLink], templateUrl: './terms.page.html', styleUrls: ['../supporting-pages.css', '../legal-pages.css'] })
export class TermsPage { readonly contactEmail = SITE_CONFIG.contactEmail; }
