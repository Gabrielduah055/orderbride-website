import { Routes } from '@angular/router';
import { SITE_CONFIG } from '@core/config/site.config';
import { FAQ_ITEMS } from '@core/constants/site-content.constants';
import { SeoConfig } from '@core/services/seo.service';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.productionUrl,
  logo: `${SITE_CONFIG.productionUrl}/assets/brand/orderbridge-symbol.png`,
  description: 'A Ghana-first WhatsApp ordering and restaurant operations application.'
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_CONFIG.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web and WhatsApp',
  description: 'OrderBridge AI helps restaurants turn WhatsApp conversations into clear, confirmed orders.'
};

const breadcrumb = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.productionUrl },
    { '@type': 'ListItem', position: 2, name, item: `${SITE_CONFIG.productionUrl}${path}` }
  ]
});

const seo = (title: string, description: string, path: string, schema?: SeoConfig['schema']): { seo: SeoConfig } => ({
  seo: { title, description, path, schema }
});

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/layout/site-layout.component').then((m) => m.SiteLayoutComponent),
    children: [
      {
        path: '',
        data: seo(
          'OrderBridge AI - WhatsApp Ordering for Restaurants in Ghana',
          'OrderBridge AI helps restaurants turn WhatsApp conversations into clear, confirmed orders with menu support, delivery details, updates and receipts.',
          '/',
          [organizationSchema, softwareSchema]
        ),
        loadComponent: () => import('@pages/home/home.page').then((m) => m.HomePage)
      },
      {
        path: 'product',
        data: seo('Product - OrderBridge AI', 'See how customer conversations, restaurant decisions and trusted backend actions work together in OrderBridge AI.', '/product', breadcrumb('Product', '/product')),
        loadComponent: () => import('@pages/product/product.page').then((m) => m.ProductPage)
      },
      {
        path: 'how-it-works',
        data: seo('How OrderBridge Works - WhatsApp to Confirmed Order', 'Follow the OrderBridge workflow from menu enquiry and quantity clarification to restaurant acceptance, receipt and feedback.', '/how-it-works', breadcrumb('How it works', '/how-it-works')),
        loadComponent: () => import('@pages/how-it-works/how-it-works.page').then((m) => m.HowItWorksPage)
      },
      {
        path: 'for-restaurants',
        data: seo('OrderBridge for Restaurants and Food Businesses', 'OrderBridge supports restaurants, takeaways, cafés, food vendors, healthy food brands and caterers that sell through WhatsApp.', '/for-restaurants', breadcrumb('For restaurants', '/for-restaurants')),
        loadComponent: () => import('@pages/solutions/solutions.page').then((m) => m.SolutionsPage)
      },
      { path: 'solutions', redirectTo: 'for-restaurants', pathMatch: 'full' },
      {
        path: 'trust',
        data: seo('Trust and Human Control - OrderBridge AI', 'Learn how restaurant data, role permissions, confirmations, consent and structured backend results keep OrderBridge actions controlled.', '/trust', breadcrumb('Trust', '/trust')),
        loadComponent: () => import('@pages/trust/trust.page').then((m) => m.TrustPage)
      },
      {
        path: 'about',
        data: seo('About OrderBridge AI - Built in Ghana', 'OrderBridge AI is built in Ghana to make conversational ordering practical for restaurants and effortless for customers.', '/about', breadcrumb('About', '/about')),
        loadComponent: () => import('@pages/about/about.page').then((m) => m.AboutPage)
      },
      {
        path: 'pilot',
        data: seo('Restaurant Pilot - OrderBridge AI', 'Apply for a focused 14-21 day OrderBridge restaurant pilot with setup, staff onboarding, live support and workflow refinement.', '/pilot', breadcrumb('Pilot', '/pilot')),
        loadComponent: () => import('@pages/pilot/pilot.page').then((m) => m.PilotPage)
      },
      {
        path: 'book-demo',
        data: seo('Book an OrderBridge AI Demo', 'Book a practical OrderBridge AI product walkthrough focused on your restaurant and current WhatsApp ordering workflow.', '/book-demo', breadcrumb('Book a demo', '/book-demo')),
        loadComponent: () => import('@pages/book-demo/book-demo.page').then((m) => m.BookDemoPage)
      },
      {
        path: 'faq',
        data: seo(
          'Frequently Asked Questions - OrderBridge AI',
          'Answers about customer setup, restaurant acceptance, delivery, receipts, staff permissions, campaigns and the OrderBridge pilot.',
          '/faq',
          [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }, breadcrumb('FAQ', '/faq')]
        ),
        loadComponent: () => import('@pages/faq/faq.page').then((m) => m.FaqPage)
      },
      {
        path: 'privacy',
        data: seo('Privacy - OrderBridge AI', 'How the OrderBridge AI website handles pilot enquiries, demo bookings and campaign parameters.', '/privacy', breadcrumb('Privacy', '/privacy')),
        loadComponent: () => import('@pages/privacy/privacy.page').then((m) => m.PrivacyPage)
      },
      {
        path: 'terms',
        data: seo('Website Terms - OrderBridge AI', 'Initial terms for using the OrderBridge AI public website, demo booking and pilot enquiry forms.', '/terms', breadcrumb('Terms', '/terms')),
        loadComponent: () => import('@pages/terms/terms.page').then((m) => m.TermsPage)
      },
      {
        path: '404',
        data: { seo: { title: 'Page not found - OrderBridge AI', description: 'The requested OrderBridge AI page could not be found.', path: '/404', noindex: true } satisfies SeoConfig },
        loadComponent: () => import('@pages/not-found/not-found.page').then((m) => m.NotFoundPage)
      },
      {
        path: '**',
        data: { seo: { title: 'Page not found - OrderBridge AI', description: 'The requested OrderBridge AI page could not be found.', path: '/404', noindex: true } satisfies SeoConfig },
        loadComponent: () => import('@pages/not-found/not-found.page').then((m) => m.NotFoundPage)
      }
    ]
  }
];
