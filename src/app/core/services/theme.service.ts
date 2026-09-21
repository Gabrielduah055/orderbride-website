import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type ThemePreference = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly preference = signal<ThemePreference>('system');

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const stored = localStorage.getItem('orderbridge-theme');
    const preference = stored === 'light' || stored === 'dark' ? stored : 'system';
    this.preference.set(preference);
    this.apply(preference);
  }

  setPreference(preference: ThemePreference): void {
    this.preference.set(preference);
    if (isPlatformBrowser(this.platformId)) {
      if (preference === 'system') localStorage.removeItem('orderbridge-theme');
      else localStorage.setItem('orderbridge-theme', preference);
    }
    this.apply(preference);
  }

  private apply(preference: ThemePreference): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const resolved = preference === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference;
    this.document.documentElement.dataset['theme'] = resolved;
    this.document.documentElement.style.colorScheme = resolved;
  }
}
