import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQ_GROUPS, filterFaqGroups } from '@core/constants/faq-content.constants';
import { SITE_CONFIG } from '@core/config/site.config';
import { UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-faq-page', imports: [RouterLink], templateUrl: './faq.page.html', styleUrls: ['../supporting-pages.css', './faq.page.css'] })
export class FaqPage {
  readonly utm = inject(UtmService);
  readonly contactEmail = SITE_CONFIG.contactEmail;
  readonly topics = FAQ_GROUPS;
  readonly query = signal('');
  readonly topic = signal('all');
  readonly openId = signal<string | null>(null);
  readonly groups = computed(() => filterFaqGroups(this.query(), this.topic()));
  readonly resultCount = computed(() => this.groups().reduce((total, group) => total + group.items.length, 0));

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.openId.set(null);
  }
  selectTopic(id: string): void { this.topic.set(id); this.openId.set(null); }
  reset(): void { this.query.set(''); this.selectTopic('all'); }
  toggle(id: string): void { this.openId.update(current => current === id ? null : id); }
}
