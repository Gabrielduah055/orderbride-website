import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(route: ActivatedRouteSnapshot): void {
    let current = route;
    while (current.firstChild) current = current.firstChild;
    const config = current.data['seo'] as SeoConfig | undefined;
    if (!config) return;

    const canonical = new URL(config.path, SITE_CONFIG.productionUrl).toString();
    const image = new URL(SITE_CONFIG.ogImage, SITE_CONFIG.productionUrl).toString();
    this.title.setTitle(config.title);
    this.set('name', 'description', config.description);
    this.set('property', 'og:type', 'website');
    this.set('property', 'og:site_name', SITE_CONFIG.name);
    this.set('property', 'og:title', config.title);
    this.set('property', 'og:description', config.description);
    this.set('property', 'og:url', canonical);
    this.set('property', 'og:image', image);
    this.set('name', 'twitter:card', 'summary_large_image');
    this.set('name', 'twitter:title', config.title);
    this.set('name', 'twitter:description', config.description);
    this.set('name', 'twitter:image', image);
    this.set('name', 'robots', config.noindex ? 'noindex, nofollow' : 'index, follow');
    this.setCanonical(canonical);
    this.setSchema(config.schema);
  }

  private set(selector: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [selector]: key, content }, `${selector}="${key}"`);
  }

  private setCanonical(url: string): void {
    this.document.head.querySelector('link[rel="canonical"]')?.remove();
    const link = this.document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    this.document.head.appendChild(link);
  }

  private setSchema(schema?: Record<string, unknown> | Record<string, unknown>[]): void {
    this.document.head.querySelector('script[data-orderbridge-schema]')?.remove();
    if (!schema) return;
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-orderbridge-schema', '');
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
