# GuestPulse AI — Premium SaaS Landing Page

Build a single, high-end marketing page at `/` for GuestPulse AI, an AI-powered hotel guest feedback platform. Aesthetic target: Stripe / Linear / Vercel calibre — restrained, editorial, confident — tuned for luxury hospitality with an AI angle.

## Visual Direction

- **Palette**: Primary `#2563EB`, Secondary `#06B6D4`, Accent `#22C55E`, deep surface `#0F172A`, plus white / soft-gray sections. Dark and light bands alternate for rhythm.
- **Typography**: Display serif for hero + section headers (Instrument Serif or similar editorial serif) paired with a clean geometric sans (Inter / Geist) for body — differentiates from generic SaaS.
- **Motion**: Framer Motion for scroll reveals, floating hero cards, gradient glow on primary CTAs, subtle parallax on dashboard mockup.
- **Depth**: Soft gradients, glassmorphism on floating cards, layered shadows using color-mix with the primary blue.

## Page Structure (single route `/`)

1. **Sticky Navbar** — logo mark, links (Features, Solutions, Pricing, Testimonials, Contact), Login, primary "Get Started" CTA. Blur + border on scroll.
2. **Hero** — editorial headline "Transform Hotel Guest Feedback Into AI-Powered Insights", supporting subtitle, dual CTAs (Start Free Trial / Book Demo), trust microline. Composed dashboard mockup (SVG/HTML — not an image) with floating glass cards for AI Insights, Guest Chat, Sentiment, Tickets, Analytics.
3. **Trusted By** — muted hotel wordmarks strip + 4 stat tiles (500+ Hotels, 100K+ Guests, 95% Satisfaction, Millions of Responses).
4. **How It Works** — 7-step horizontal timeline with connecting gradient line.
5. **Features Grid** — bento-style layout mixing large feature spotlights (Main Campaign, AI Chat Surveys, Automatic Tickets) with a dense grid of secondary features (WhatsApp/Email surveys, Guest Import, Branch/Room/Service/Topic management, Reports, Roles).
6. **Dashboard Showcase** — tabbed section (Analytics / Campaigns / Guest Chats / Tickets) rendered as realistic in-browser dashboard mockups built in HTML+SVG.
7. **AI Workflow** — horizontal flow diagram: Guest → Conversation → AI → Insights → Recommendation → Manager → Improved Experience.
8. **Analytics Section** — dark band with real-looking chart mockups (satisfaction line, NPS gauge, sentiment donut, department bars) built with inline SVG.
9. **Ticket Workflow** — vertical illustrated flow Complaint → AI Detection → Ticket Created → Assigned → Resolved.
10. **Benefits** — 7 outcome tiles with icons.
11. **Testimonials** — 3 premium quote cards with GM/quality manager personas from luxury properties.
12. **Pricing** — 3 tiers (Starter / Professional / Enterprise) with monthly/annual toggle (annual shows savings).
13. **FAQ** — shadcn Accordion with 6–8 questions.
14. **Final CTA** — dark gradient band with dual CTAs.
15. **Footer** — product/company/legal columns, socials, brand mark.

## Technical Plan

- **Route**: rewrite `src/routes/index.tsx` (remove placeholder). Update `head()` with real title, description, og:*, twitter:card, canonical, Organization + SoftwareApplication JSON-LD.
- **Root meta**: swap "Lovable App" defaults in `src/routes/__root.tsx` for GuestPulse AI sitewide defaults and add Google Fonts `<link>` tags for the chosen display serif + sans.
- **Design tokens**: extend `src/styles.css` `:root` / `.dark` with brand tokens (`--brand`, `--brand-2`, `--accent-success`, `--surface-ink`, gradients, glow shadows) and register them under `@theme inline`. Dark mode fully supported.
- **Components**: split into `src/components/landing/` — `Navbar`, `Hero`, `HeroMockup`, `TrustedBy`, `HowItWorks`, `Features`, `DashboardShowcase`, `AIWorkflow`, `Analytics`, `TicketWorkflow`, `Benefits`, `Testimonials`, `Pricing`, `FAQ`, `FinalCTA`, `Footer`. Reuse shadcn (Button, Card, Accordion, Tabs, Switch, Badge).
- **Animation**: install `motion` (Framer Motion successor package used across Lovable stack). Use `whileInView` reveals, floating loops for hero cards, tab crossfades.
- **Icons**: Lucide.
- **Mockups**: hand-built HTML + inline SVG dashboards/charts — no external images, no placeholder screenshots. Keeps Lighthouse high and looks intentional.
- **Accessibility**: semantic landmarks (single `<main>`), aria-labels on icon buttons, focus-visible rings via tokens, color-contrast checked against tokens, `prefers-reduced-motion` respected.
- **Responsive**: mobile-first; hero mockup gracefully collapses; nav becomes sheet menu on mobile.
- **SEO**: title <60 chars, description <160, semantic H1, JSON-LD, lazy motion, no layout shift.

## Out of Scope (for this pass)

- No backend, auth, or Lovable Cloud — landing page only. CTAs link to `#` anchors / placeholder routes.
- No blog, docs, or secondary routes.
- No real customer logos (use styled wordmarks to avoid trademark issues).