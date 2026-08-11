# Next Level Marketing & Communications

Official website for Next Level Marketing & Communications, an Addis Ababa–based agency working across marketing strategy, brand activation, communications, media production, events, sports marketing, and product distribution.

The site presents more than 20 years of company experience, detailed project stories, client and partner logos, campaign photography, leadership information, and direct contact links.

## Highlights

- Cinematic landing-page reel created from the company archive
- Detailed case studies covering AND1, Ethio Ballers, Coach Carlos, Tasties, documentary production, and event communications
- Rotating client and partner logo display
- Cover Flow–inspired campaign photography gallery
- Responsive layouts for desktop, tablet, and mobile
- Accessible navigation, reduced-motion support, and social links

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

To create a production build:

```bash
npm run build
```

## Technology

- Next.js and React
- TypeScript
- Vinext and Vite
- Cloudflare-compatible build output

## Production readiness

- Security headers are applied by the production worker.
- `/api/health` provides a no-cache availability check.
- `robots.txt`, `sitemap.xml`, organization structured data, and social metadata support search and link previews.
- Custom not-found and recovery pages keep failures inside the branded experience.
- Production dependencies are checked with `npm audit --omit=dev`.

## Before the final domain launch

- Set `NEXT_PUBLIC_SITE_URL` to the final public domain before building.
- Connect the final domain and verify its HTTPS certificate.
- Decide whether project enquiries remain email-based or move to a personal-data system hosted in an approved location.
- If a form is introduced, approve the privacy notice, retention period, team access, and notification workflow before collecting submissions.
- Add analytics only after choosing a provider and approving the consent approach.
- Recheck every phone number, email address, social link, case-study claim, logo, and image permission.

All brand names, photographs, logos, and campaign materials remain the property of their respective owners and are presented as part of Next Level Marketing & Communications' company experience.
