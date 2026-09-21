import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(utm: UtmService) {
    utm.initialize();
  }
}
