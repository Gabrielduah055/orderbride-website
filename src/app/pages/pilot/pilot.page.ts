import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';
import {
  PILOT_TIMELINE,
  PILOT_ELIGIBILITY,
  PILOT_RESPONSIBILITIES,
  type PilotResponsibilities
} from '@core/constants/site-content.constants';
import { UTM_KEYS, UtmService } from '@core/services/utm.service';

@Component({ selector: 'app-pilot-page', imports: [RouterLink], templateUrl: './pilot.page.html', styleUrl: './pilot.page.css' })
export class PilotPage {
  readonly utm = inject(UtmService);
  readonly utmKeys = UTM_KEYS;
  readonly timeline = PILOT_TIMELINE;
  readonly eligibility = PILOT_ELIGIBILITY;
  readonly responsibilities: PilotResponsibilities = PILOT_RESPONSIBILITIES;
  applicationSubmitted = false;
  isSubmitting = false;
  submissionError = '';
  submissionAttempted = false;

  utmValue(key: (typeof UTM_KEYS)[number]): string {
    return this.utm.values()[key] ?? '';
  }

  async submitApplication(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement | null;
    if (!form || this.isSubmitting) return;

    this.submissionAttempted = true;
    if (!form.reportValidity()) {
      this.submissionError = 'Please complete the required fields before sending your application.';
      form.querySelector<HTMLElement>(':invalid')?.focus();
      return;
    }

    this.isSubmitting = true;
    this.submissionError = '';
    const formData = new FormData(form);
    formData.set('_subject', 'New OrderBridge pilot interest');
    formData.set('_template', 'table');
    formData.set('_replyto', String(formData.get('email') ?? ''));
    for (const key of UTM_KEYS) {
      const value = this.utm.values()[key];
      if (value) formData.set(key, value);
    }

    try {
      const response = await fetch(SITE_CONFIG.pilotFormEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: formData });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Submission rejected');
      form.reset();
      this.applicationSubmitted = true;
    } catch {
      this.submissionError = 'We could not send your application. Please check your connection and try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
