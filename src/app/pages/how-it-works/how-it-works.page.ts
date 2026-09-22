import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtmService } from '@core/services/utm.service';

@Component({
  selector: 'app-how-it-works-page',
  imports: [RouterLink],
  templateUrl: './how-it-works.page.html',
  styleUrl: './how-it-works.page.css'
})
export class HowItWorksPage {
  readonly utm = inject(UtmService);
  readonly steps = [
    {
      title: 'Customer starts a WhatsApp conversation',
      description: 'Your customer messages the restaurant, just like they already do.',
      messages: [{ text: 'Good morning! What is on your menu today?', from: 'customer' }]
    },
    {
      title: 'OrderBridge answers from your menu',
      description: 'Relevant items, prices and availability come from your saved restaurant information.',
      messages: [{ text: 'We have Jollof Rice for GHS 60 and Chicken for GHS 45. What would you like?', from: 'restaurant' }]
    },
    {
      title: 'The details are clarified',
      description: 'Items, quantities and pickup or delivery details are collected before the order is submitted.',
      messages: [
        { text: 'One Jollof Rice, please. I will pick it up.', from: 'customer' },
        { text: 'One Jollof Rice for pickup. Your total is GHS 60. Shall I submit your order?', from: 'restaurant' }
      ]
    },
    {
      title: 'Customer submits the order',
      description: 'The customer checks the details and confirms the request for restaurant review.',
      messages: [{ text: 'Yes, please submit my order.', from: 'customer' }]
    },
    {
      title: 'Your restaurant reviews and accepts',
      description: 'Authorised staff review the request and decide whether to accept it. Your team stays in control.',
      messages: []
    },
    {
      title: 'Customer receives confirmation and updates',
      description: 'After acceptance, the customer receives a receipt and updates as the order is prepared and fulfilled.',
      messages: [
        { text: 'Your order has been accepted. We will let you know when it is ready for pickup.', from: 'restaurant' },
        { text: 'Thank you! See you soon.', from: 'customer' }
      ]
    }
  ] as const;
  readonly customerBenefits = ['Order naturally in WhatsApp', 'Get clear menu answers and prices', 'Receive a receipt and status updates'];
  readonly restaurantBenefits = ['Keep your menu and availability current', 'Review and accept incoming orders', 'Manage preparation, pickup and delivery'];
}
