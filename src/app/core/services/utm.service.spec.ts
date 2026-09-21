import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { UtmService } from './utm.service';

describe('UtmService', () => {
  beforeEach(() => {
    sessionStorage.clear();
    history.replaceState({}, '', '/?utm_source=google&utm_campaign=ghana%3Cpilot%3E&utm_term=restaurant');
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('captures and sanitises supported UTM values for the current visit', () => {
    const service = TestBed.inject(UtmService);
    service.initialize();
    expect(service.values()).toEqual({ utm_source: 'google', utm_campaign: 'ghanapilot', utm_term: 'restaurant' });
    expect(sessionStorage.getItem('orderbridge-utm')).toContain('utm_source');
  });

  it('propagates captured values to the booking URL', () => {
    const service = TestBed.inject(UtmService);
    service.initialize();
    const url = new URL(service.appendToUrl('https://cal.com/orderbridge/demo'));
    expect(url.searchParams.get('utm_source')).toBe('google');
    expect(url.searchParams.get('utm_campaign')).toBe('ghanapilot');
    expect(url.searchParams.get('utm_term')).toBe('restaurant');
  });
});
