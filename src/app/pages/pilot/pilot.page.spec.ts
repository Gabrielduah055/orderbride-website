import { PilotPage } from './pilot.page';

describe('PilotPage', () => {
  let page: PilotPage;
  let form: HTMLFormElement;
  let event: SubmitEvent;

  beforeEach(() => {
    page = new PilotPage();
    form = document.createElement('form');
    form.innerHTML = '<input name="email" value="applicant@example.com">';
    spyOn(form, 'reportValidity').and.returnValue(true);
    spyOn(form, 'reset');

    event = new SubmitEvent('submit');
    Object.defineProperty(event, 'currentTarget', { value: form });
  });

  it('shows the success state when the email service accepts the application', async () => {
    spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }));

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
});
