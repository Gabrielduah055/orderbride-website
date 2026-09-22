import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';

@Component({ selector: 'app-privacy-page', imports: [RouterLink], templateUrl: './privacy.page.html', styleUrls: ['../supporting-pages.css', '../legal-pages.css'] })
export class PrivacyPage { readonly contactEmail = SITE_CONFIG.contactEmail; }
