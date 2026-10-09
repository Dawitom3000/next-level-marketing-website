# Pre-deployment audit — Next Level Marketing

**Date:** 8 October 2026  
**Assessment:** READY WITH MINOR ISSUES  
**Website:** https://next-level-marketing-ethiopia.felekedawit11.chatgpt.site

**Follow-up change:** At the owner's request, the visible play/pause controls were removed from the homepage video, client logos, and bottle animation after the version 19 audit. Automatic motion, reduced-motion preferences, and background-video visibility handling remain. The audit findings and interaction evidence below record the earlier audited version.

## Scope and approach

Reviewed all seven public routes: Home, Projects (`/events`), Work, Capabilities, Experience, About, and Contact. Inspected their shared components, data, six detailed case studies, 14 portfolio projects, 27 gallery photographs, navigation, metadata, error pages, motion, configuration, and existing tests. Used the rendered production preview for viewport checks, representative section screenshots, and interactions. Preserved the orange/ink/paper palette, typography, archive photography, video homepage, Blue Nile project, and Ethiopian Diaspora Service logo.

Contact remains Email, Phone, and WhatsApp only, as requested. There is no message form or FormSubmit integration. No messages, calls, or emails were sent during this audit.

## A. AI-like artifacts identified

| Finding | Resolution |
| --- | --- |
| A textual “Pause motion” control beside the bottle | Retained its useful playback function; replaced the text with a minimal play/pause icon and an accessible action label. |
| “Verified logo library,” “verified selection,” and explanations about artwork proportions | Removed internal curation language; retained accurate relationship descriptions and logos. |
| “Production deployment,” “Recognition unlocked,” and overly elaborate project introductions | Replaced with direct production, project, and outcome language. |
| Noninteractive service cards with arrows and movement suggesting links | Removed misleading interaction cues. |
| Gallery instructions and an XML sitemap link in the visitor footer | Removed unnecessary visible explanations; retained accessible controls, the sitemap endpoint, and robots indexing. |
| Registration information styled like a button | Restyled as information; preserved the actual registration contacts. |
| Unsupported claims in error messages about moved pages or stored submissions | Replaced with honest messages and useful recovery actions. |

No visible “Pose Animation” control was present. The bottle is a CSS-animated product image, not a WebGL or interactive 3D model. No required provenance, attribution, license, or factual disclosure was removed. Source scans found no visible AI placeholders, TODO/FIXME markers, debugging console statements, starter banners, or production debug controls in the application.

## B. UI/UX issues

- Important body text and secondary labels were too small; several headings had cramped line heights.
- Small orange labels on light backgrounds needed stronger contrast, and photo/video hero text needed more consistent separation from imagery.
- The mobile menu overlapped the header, remained open after navigation, and lacked Escape/outside dismissal and current-page indication.
- Long email text wrapped awkwardly. Contact choices were crowded into narrow desktop cards.
- The intended mobile Blue Nile order referenced missing grouping elements.
- Long homepage/Capabilities headings clipped at narrow widths; the About image badge extended four pixels beyond the mobile page.
- The gallery allowed ineffective navigation at its ends. Video and logo motion lacked consistent touch/keyboard pause controls.
- The Tasties case used an unrelated interview photograph.

## C. Corrections implemented

| Area | Changes and purpose |
| --- | --- |
| Shared navigation and layout | Added current-page semantics, menu dismissal, Escape focus return, a keyboard skip destination, button focus styles, and larger mobile targets. Standardized “Capabilities” naming. |
| Motion | Added a shared accessible icon control. Preserved bottle motion; added video and logo pause controls. Video stops offscreen or when the document is hidden, handles autoplay failure, and honors reduced motion. Reduced-motion styles stop animation and hide duplicate logos and unnecessary controls. |
| Gallery and portfolio | Corrected previous/next availability and movement distance, retained arrow-key navigation, improved named-region semantics, and connected filter controls to the results region. |
| Typography and responsive layout | Increased prose/label readability, adjusted heading line heights and contrast, corrected mobile grouping and alignment, resolved overflow, and allowed the email to break at `@`. Preserved the compact brand lockup. |
| Content and project pages | Shortened repeated introductions and case-study descriptions while retaining existing names, dates, roles, locations, numbers, and relationship scope. Distinguished possible future support from an agreed commitment. Used the existing Tasties campaign photo. |
| Contact | Preserved direct `mailto:nextlevelmarketingcomm@gmail.com`, telephone, and WhatsApp destinations with clear link purposes. |
| Assets | Created WebP derivatives of the bottle and four project posters: 9,908,880 bytes reduced to 1,602,570 bytes, approximately 84%. Created a 162,740-byte JPEG social image. Original assets remain intact. Added lazy loading/async decoding to appropriate below-fold images. |
| Metadata and configuration | Added distinct titles, descriptions, canonicals, Open Graph URLs, and Twitter metadata to inner routes. Fixed the invalid sitemap frequency, refreshed its date, normalized trailing slashes in the configured site URL, and corrected the environment example. |
| Regression coverage | Added rendered-route checks for metadata, skip destinations, local image existence, and unavailable debug/contact endpoints; retained the existing contact, projects, logo, and work assertions. |

Main implementation files are `app/globals.css`, the page files, and `app/components/{MotionControl,HeroVideo,SiteNavigation,BlueNileBottle,LogoCarousel,CampaignGallery,CampaignPortfolio,SiteChrome}`. No unrelated backend functionality, database contents, or original production assets were deleted.

## D. Technical issues and status

| Issue | Status |
| --- | --- |
| TypeScript sitemap error: unsupported `quarterly` value | Fixed; final TypeScript check passes. |
| React/RSC and image-parser dependency advisories | Updated React, React DOM, and RSC to 19.2.8, image-size to 2.0.4, sharp to 0.35.5, and compatible Vite/Cloudflare/Wrangler tooling. No new feature dependencies introduced. |
| Dependency audit | Production dependency audit: **0 findings**. Full audit: **12 findings — 8 high, 4 moderate**, down from 21. Remaining chains are development tooling; see section F. This is not a claim that every dependency is vulnerability-free. |
| Native `<img>` lint advisories | **15 warnings, 0 errors**. Retained the existing image architecture and optimized the largest loaded assets instead of suppressing the warnings. |
| Upstream build notices | Vinext static-route classification and bundler timing notices remain nonblocking. They do not appear in the visitor interface. |
| Broken external camp website | TLS hostname mismatch confirmed. Removed its outbound link while preserving the camp content and photographs. The external owner must repair the certificate before the link is restored. |
| Secrets and development UI | Pattern scans of application/public/worker/build files found no recognizable private keys or API-token exposure. This is a targeted scan, not a penetration test. Debug and removed contact endpoints return 404. |

Relevant primary advisories: [React Server Components](https://github.com/advisories/GHSA-wx67-qw84-cm4g), [image-size](https://github.com/advisories/GHSA-5p2g-fcmc-qvqq), [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), and [esbuild development server](https://github.com/advisories/GHSA-67mh-4wv8-2f99).

## E. Verification results

| Check | Result |
| --- | --- |
| Production build | PASS; the final `npm test` rebuilt the production output. |
| Automated tests | **7 passed, 0 failed**. |
| TypeScript (`npx tsc --noEmit`) | PASS. |
| ESLint | PASS with the 15 image advisories above; no errors. |
| Diff whitespace check | PASS. |
| Responsive rendered-page checks | **35 combinations**: seven routes at 1920×1080, 1366×768, 768×1024, 390×844, and 320×568. No detected page overflow, clipped inspected text/controls, missing loaded images, or missing/duplicate primary headings. |
| Internal routes and anchors | All seven public routes return 200; inspected internal anchors resolve. Not-found behavior returns 404. |
| Referenced assets | **61 assets resolved** in the browser status sweep. |
| Portfolio interactions | All work 14; Partners 5; Sports 10; ATL 4; BTL 10; Advertising 9. Correct selection and results announcements verified. |
| Gallery | Next/previous movement, arrow-key navigation, and disabled controls at the start/end verified. |
| Motion | Bottle and video pause/resume verified; logo pause verified. Video stops offscreen and resumes on return. Reduced-motion CSS/video behavior inspected and locally simulated. |
| Mobile menu and keyboard | Outside dismissal, Escape close/focus return, Enter opening, route navigation/closing, and skip-link destination verified. Focus styling reviewed in CSS; the host's inactive document limited visual focus-state verification. |
| Browser diagnostics | No current production-preview console warnings/errors observed in available diagnostics. Cancelled video loads during navigation and HEAD cancellations were distinguished from missing assets; the asset requests returned successful statuses. |
| External destinations | The four independent coverage links and Instagram/TikTok returned successful responses. Telephone/email/WhatsApp URI values inspected without initiating communication. |
| Visual review | Actual screenshots of page heroes and representative project, portfolio, gallery, capabilities, logos, leadership, values, contact, menu, and footer sections were inspected at desktop/mobile sizes. |

[Machine-readable viewport and interaction evidence](audit/2026-10-08/verification.json) records the checks and local screenshot paths. Final build/test and lint logs are available locally at `/tmp/next-level-audit-tests-final-20261008.txt` and `/tmp/next-level-audit-lint-final-20261008.txt`.

## F. Remaining issues and limits

1. **Development dependency advisories remain.** The high-severity braces chain affects build/lint tooling; no patched braces release was available at audit time. The moderate esbuild chain belongs to the unused Drizzle generation tool. These tools are not exposed as visitor-facing development servers and do not process website visitor patterns. Avoid the audit tool's proposed breaking downgrades; resolve these chains when compatible upstream fixes are available. No database/tooling rewrite was made for this frontend audit.
2. **Native image lint warnings remain.** The largest assets were compressed and loading behavior improved, but no Lighthouse score, Core Web Vitals guarantee, or real-user performance measurement is claimed.
3. **External certificate repair is outside this repository.** The camp link can be restored after its owner corrects HTTPS.
4. **Email delivery and client selection are unverified.** A `mailto:` link opens the visitor's configured handler; the website cannot force Gmail or configure a mail client. No inbox receipt test was performed because there is no submission form.
5. **Browser coverage has limits.** Testing used the collaborative Chromium preview and viewport resizing, not physical phones, Safari, Firefox, or screen readers. Reduced motion was simulated locally, not tested by changing OS settings. No formal WCAG conformance or penetration test is claimed. The browser host disconnected after the completed viewport matrix and representative visual/interaction checks, so further detail screenshots were unavailable. The final subsequent change normalized the already-correct URL and tidied imports; it did not change visual layout.
6. Project descriptions and relationship claims were edited from the existing supplied content; this audit does not independently certify every commercial claim or confirm that scheduled events actually took place. Past event copy retains its planned/scheduled qualification.

## G. Deployment readiness

**READY WITH MINOR ISSUES.** The detected visitor-facing defects, invalid sitemap type, inconsistent metadata, and known patched runtime advisories were corrected. The production build, automated tests, type check, internal links/assets, and representative rendered journeys pass. The distinctive existing design and legitimate interactions remain intact.

The remaining release qualifications are the documented development-tooling advisories, native-image lint notices, external HTTPS repair, and browser/mail-client coverage limits. Production publication is verified separately through the hosting service's deployment result; the audit does not substitute a local preview for proof of a successful release.
