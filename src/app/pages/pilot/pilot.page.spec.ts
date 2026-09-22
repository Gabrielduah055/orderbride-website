import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PilotPage } from './pilot.page';

describe('PilotPage', () => {
  let page: PilotPage;
  let form: HTMLFormElement;
  let event: SubmitEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [PilotPage], providers: [provideRouter([])] });
    page = TestBed.createComponent(PilotPage).componentInstance;
    form = document.createElement('form');
    form.innerHTML = '<input name="email" value="applicant@example.com">';
    spyOn(form, 'reportValidity').and.returnValue(true);
    spyOn(form, 'reset');
    event = new SubmitEvent('submit');
    Object.defineProperty(event, 'currentTarget', { value: form });
  });

  it('shows the success state when the email service accepts the application', async () => {
    spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    await page.submitApplication(event);
    expect(page.applicationSubmitted).toBeTrue();
    expect(page.submissionError).toBe('');
    expect(page.isSubmitting).toBeFalse();
    expect(form.reset).toHaveBeenCalled();
  });

  it('keeps the form available and shows an error when delivery fails', async () => {
    spyOn(window, 'fetch').and.rejectWith(new Error('Network unavailable'));
    await page.submitApplication(event);
    expect(page.applicationSubmitted).toBeFalse();
    expect(page.submissionError).toContain('could not send');
    expect(page.isSubmitting).toBeFalse();
    expect(form.reset).not.toHaveBeenCalled();
  });

  it('does not send an incomplete application', async () => {
    (form.reportValidity as jasmine.Spy).and.returnValue(false);
    const fetchSpy = spyOn(window, 'fetch');
    await page.submitApplication(event);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(page.submissionAttempted).toBeTrue();
    expect(page.submissionError).toContain('required fields');
  });

  it('does not send a second request while one is pending', async () => {
    page.isSubmitting = true;
    const fetchSpy = spyOn(window, 'fetch');
    await page.submitApplication(event);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('does not report success when the service rejects an application', async () => {
    spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify({ success: false }), { status: 200 }));
    await page.submitApplication(event);
    expect(page.applicationSubmitted).toBeFalse();
    expect(page.submissionError).toContain('could not send');
    expect(form.reset).not.toHaveBeenCalled();
  });
});
