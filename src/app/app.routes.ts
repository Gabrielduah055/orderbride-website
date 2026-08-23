import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/layout/site-layout.component').then((m) => m.SiteLayoutComponent),
    children: [
      { path: '', title: 'OrderBridge AI — Restaurant operations through WhatsApp', loadComponent: () => import('@pages/home/home.page').then((m) => m.HomePage) },
      { path: 'product', title: 'Product — OrderBridge AI', loadComponent: () => import('@pages/product/product.page').then((m) => m.ProductPage) },
      { path: 'how-it-works', title: 'How It Works — OrderBridge AI', loadComponent: () => import('@pages/how-it-works/how-it-works.page').then((m) => m.HowItWorksPage) },
      { path: 'solutions', title: 'Solutions — OrderBridge AI', loadComponent: () => import('@pages/solutions/solutions.page').then((m) => m.SolutionsPage) },
      { path: 'trust', title: 'Trust and Control — OrderBridge AI', loadComponent: () => import('@pages/trust/trust.page').then((m) => m.TrustPage) },
      { path: 'about', title: 'About — OrderBridge AI', loadComponent: () => import('@pages/about/about.page').then((m) => m.AboutPage) },
      { path: 'pilot', title: 'Restaurant Pilot — OrderBridge AI', loadComponent: () => import('@pages/pilot/pilot.page').then((m) => m.PilotPage) },
      { path: 'book-demo', title: 'Book a Demo — OrderBridge AI', loadComponent: () => import('@pages/book-demo/book-demo.page').then((m) => m.BookDemoPage) },
      { path: 'faq', title: 'Frequently Asked Questions — OrderBridge AI', loadComponent: () => import('@pages/faq/faq.page').then((m) => m.FaqPage) }
    ]
  },
  { path: '**', redirectTo: '' }
];
