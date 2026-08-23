import { Component, ElementRef, ViewChild } from '@angular/core';
import { CHAT_MESSAGES } from '@core/constants/site-content.constants';

@Component({
  selector: 'app-chat-demo',
  templateUrl: './chat-demo.component.html'
})
export class ChatDemoComponent {
  @ViewChild('chatScroll') private chatScroll?: ElementRef<HTMLDivElement>;

  readonly messages = CHAT_MESSAGES;

  scrollConversation(toEnd: boolean): void {
    const container = this.chatScroll?.nativeElement;
    if (!container) return;

    container.scrollTo({
      top: toEnd ? container.scrollHeight : 0,
      behavior: 'smooth'
    });
  }
}
