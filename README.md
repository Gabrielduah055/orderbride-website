# OrderBridge AI public website

The public marketing site for OrderBridge AI, a conversational ordering product for restaurants and food businesses in Ghana. It is built with Angular 19, prerendered as a static site, and prepared for Vercel.

## What is included

- Eleven indexable public routes plus a real 404 page
- Responsive light and dark themes with a system preference option
- Self-hosted Poppins fonts and the supplied OrderBridge AI brand assets
- Privacy-safe product screenshots and supplied business photography
- Per-route titles, descriptions, canonicals, social metadata, and JSON-LD
- `robots.txt`, `sitemap.xml`, and clean URL handling
- UTM capture and propagation to pilot applications and Cal.com bookings
- Accessible navigation, keyboard focus management, skip link, reduced-motion support, and visible form states
- Static prerendering for fast first loads and crawler-readable page content

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm start
```

Open `http://localhost:4200`.

Useful commands:

```bash
npm run build
npm run test:ci
```

The production site is written to `dist/orderbridge-website/browser` and includes prerendered route folders.

## Project structure

- `src/app/pages`: one standalone Angular page per public route
- `src/app/shared/components`: header, footer, theme control, progress indicators, and brand components
- `src/app/core/config/site.config.ts`: production URL and external integration URLs
- `src/app/core/services`: SEO, theme, and UTM behavior
- `public/assets/brand`: approved logo, symbol, favicon, and social image
- `public/assets/product`: privacy-safe product evidence
- `public/assets/photography`: responsive supplied photography
- `public/sitemap.xml` and `public/robots.txt`: crawler configuration
- `vercel.json`: Vercel build and routing configuration

## Content and brand maintenance

Global navigation and repeated content live in `src/app/core/constants/site-content.constants.ts`. Brand tokens and responsive layout rules live in `src/styles.css`.

The site uses the supplied OrderBridge AI logo without regenerating or redrawing it. Source screenshots are published only through cropped or masked derivatives. Do not replace them with unredacted originals.

When a route is added:

1. Add the route and unique SEO data in `src/app/app.routes.ts`.
2. Add the path to `PUBLIC_ROUTES` in `src/app/core/config/site.config.ts`.
3. Add the prerender entry in `src/app/app.routes.server.ts`.
4. Add the canonical URL to `public/sitemap.xml`.
5. Run the build and inspect the generated HTML.

## External integrations

Pilot applications are sent directly to the existing FormSubmit endpoint. Demo bookings use the existing Cal.com link. Both are centralized in `src/app/core/config/site.config.ts`. The static site requires no runtime environment variables.

UTM values are limited to `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`. Values are sanitized, stored for the browser session, added to Cal.com links, and included as hidden pilot form fields.

## Production URL and custom domain

The verified live Vercel URL is currently `https://orderbride-website.vercel.app`. The spelling is intentional because it matches the existing deployment. When a custom domain is ready:

1. Add it in the Vercel project's Domains settings and apply the requested DNS records.
2. Replace `productionUrl` in `src/app/core/config/site.config.ts`.
3. Update every URL in `public/sitemap.xml` and the sitemap URL in `public/robots.txt`.
4. Rebuild, redeploy, and confirm the canonical and social URLs in the generated HTML.

## Vercel deployment

Import the GitHub repository into Vercel and keep these settings:

- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/orderbridge-website/browser`
- Install command: default npm install

`vercel.json` provides these values, preserves clean URLs, and redirects the former `/solutions` route. The build also copies the prerendered not-found page to `404.html`, which Vercel automatically serves with a 404 response for unknown static paths.

Vercel adds `X-Robots-Tag: noindex` to standard Preview Deployments automatically. Do not assign a public custom domain to a non-production branch without adding an equivalent no-index header for that domain.

## Search Console launch checklist

1. Verify the production domain in Google Search Console, preferably with a DNS property.
2. Submit `https://YOUR-DOMAIN/sitemap.xml`.
3. Inspect the home page and request indexing after the production deploy.
4. Inspect one internal route and the 404 response to confirm indexing behavior.
5. Monitor Page indexing and Core Web Vitals after the first crawl.

## Privacy and legal review

The product images in this repository mask or crop customer-identifying information. Before launch, the owner should still confirm permission to publish every restaurant photo and product screenshot, approve the contact details, and have the privacy policy and terms reviewed for the business's actual practices and Ghanaian legal requirements.
