import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOW_IT_WORKS_STEPS } from '@core/constants/site-content.constants';
import { ChatDemoComponent } from '@shared/components/chat-demo/chat-demo.component';

@Component({ selector: 'app-how-it-works-page', imports: [RouterLink, ChatDemoComponent], templateUrl: './how-it-works.page.html' })
export class HowItWorksPage {
  readonly steps = HOW_IT_WORKS_STEPS;
}
