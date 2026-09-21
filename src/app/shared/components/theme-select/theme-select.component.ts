import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemePreference, ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-theme-select',
  imports: [FormsModule],
  template: `
    <label class="theme-select">
      <span class="sr-only">Colour theme</span>
      <select
        aria-label="Colour theme"
        [ngModel]="theme.preference()"
        (ngModelChange)="setTheme($event)"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  `
})
export class ThemeSelectComponent {
  readonly theme = inject(ThemeService);

  setTheme(value: ThemePreference): void {
    this.theme.setPreference(value);
  }
}
