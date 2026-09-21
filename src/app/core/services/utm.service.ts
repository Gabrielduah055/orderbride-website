import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmValues = Partial<Record<UtmKey, string>>;

@Injectable({ providedIn: 'root' })
export class UtmService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'orderbridge-utm';
  readonly values = signal<UtmValues>({});

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.restore();
    this.captureCurrentUrl();
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      this.captureCurrentUrl();
    });
  }

  queryParams(): UtmValues {
    return this.values();
  }

  appendToUrl(url: string): string {
    const target = new URL(url);
    for (const key of UTM_KEYS) {
      const value = this.values()[key];
      if (value) target.searchParams.set(key, value);
    }
    return target.toString();
  }

  private captureCurrentUrl(): void {
    const params = new URLSearchParams(globalThis.location?.search ?? '');
    const captured: UtmValues = { ...this.values() };
    let changed = false;

    for (const key of UTM_KEYS) {
      const value = this.sanitize(params.get(key));
      if (value) {
        captured[key] = value;
        changed = true;
      }
    }

    if (changed) {
      this.values.set(captured);
      sessionStorage.setItem(this.storageKey, JSON.stringify(captured));
    }
  }

  private restore(): void {
    try {
      const stored = sessionStorage.getItem(this.storageKey);
      if (!stored) return;
      const parsed = JSON.parse(stored) as Record<string, unknown>;
      const values: UtmValues = {};
      for (const key of UTM_KEYS) {
        const value = this.sanitize(typeof parsed[key] === 'string' ? parsed[key] : null);
        if (value) values[key] = value;
      }
      this.values.set(values);
    } catch {
      sessionStorage.removeItem(this.storageKey);
    }
  }

  private sanitize(value: string | null): string | undefined {
    if (!value) return undefined;
    const clean = value.trim().replace(/[^a-zA-Z0-9 _.-]/g, '').slice(0, 100);
    return clean || undefined;
  }
}
