import { Component } from '@angular/core';
import { PILOT_TIMELINE, SITE_IMAGES } from '@core/constants/site-content.constants';

@Component({ selector: 'app-pilot-page', templateUrl: './pilot.page.html' })
export class PilotPage {
  private readonly formEndpoint = 'https://formsubmit.co/ajax/gabrielagyemanduah@gmail.com';

  readonly timeline = PILOT_TIMELINE;
  readonly images = SITE_IMAGES;
  applicationSubmitted = false;
  isSubmitting = false;
  submissionError = '';

  async submitApplication(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement | null;
    if (!form || this.isSubmitting || !form.reportValidity()) {
      return;
    }

    this.isSubmitting = true;
    this.submissionError = '';

    const formData = new FormData(form);
    formData.set('_subject', 'New OrderBridge pilot interest');
    formData.set('_template', 'table');
    formData.set('_replyto', String(formData.get('email') ?? ''));

    try {
      const response = await fetch(this.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const result = await response.json() as { success?: boolean | string };
      const submissionAccepted = result.success === true || result.success === 'true';

      if (!response.ok || !submissionAccepted) {
        throw new Error('Pilot application was not accepted by the email service.');
      }

      form.reset();
      this.applicationSubmitted = true;
    } catch {
      this.submissionError = 'We could not send your application. Please check your connection and try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
