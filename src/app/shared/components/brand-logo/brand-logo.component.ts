import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  template: `
    @if (reversed) {
      <img src="/assets/brand/orderbridge-logo-reversed.png" width="640" height="90" alt="OrderBridge AI" class="brand-logo">
    } @else {
      <span class="adaptive-brand-logo">
        <img src="/assets/brand/orderbridge-logo.png" width="640" height="90" alt="OrderBridge AI" class="brand-logo brand-logo-light">
        <img src="/assets/brand/orderbridge-logo-reversed.png" width="640" height="90" alt="OrderBridge AI" class="brand-logo brand-logo-dark">
      </span>
    }
  `
})
export class BrandLogoComponent {
  @Input() reversed = false;
}
