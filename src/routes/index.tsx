import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  Check,
  MessageSquare,
  Mail,
  Link2,
  Bot,
  ClipboardList,
  Users,
  Building2,
  BedDouble,
  Wrench,
  BarChart3,
  Brain,
  Lightbulb,
  Ticket,
  LayoutDashboard,
  FileBarChart,
  ShieldCheck,
  Menu,
  X,
  Star,
  ChevronDown,
  Zap,
  TrendingUp,
  Hotel,
  Globe2,
  MessageCircle,
  UserCog,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  DashboardMockup,
  FloatingCards,
  AnalyticsPanel,
} from "@/components/landing/mockups";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const ogImage = `${origin}/og-image.jpg`;
    return {
    meta: [
      { title: "GuestPulse AI — AI Guest Feedback for Modern Hotels" },
      {
        name: "description",
        content:
          "GuestPulse AI turns every guest conversation into revenue. Collect feedback via WhatsApp, email or web, get AI insights, auto-resolve issues with smart tickets.",
      },
      {
        property: "og:title",
        content: "GuestPulse AI — AI Guest Feedback for Modern Hotels",
      },
      {
        property: "og:description",
        content:
          "Collect feedback across channels, get AI insights, resolve issues before checkout. Built for boutique hotels, resorts, and global groups.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GuestPulse AI — AI-powered hotel guest feedback dashboard" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:title", content: "GuestPulse AI — AI Guest Feedback for Modern Hotels" },
      { name: "twitter:description", content: "Collect feedback across channels, get AI insights, resolve issues before checkout." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "GuestPulse AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "AI-powered guest feedback and experience management platform for hotels.",
          offers: {
            "@type": "Offer",
            price: "49",
            priceCurrency: "USD",
          },
        }),
      },
    ],
    };
  },
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Features />
        <DashboardShowcase />
        <AIWorkflow />
        <AnalyticsSection />
        <TicketWorkflow />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Reveal wrapper ---------------- */

function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Navbar ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl tracking-tight">GuestPulse<span style={{ color: "var(--brand)" }}>.ai</span></span>
        </a>
        <nav className="hidden flex-1 items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a href="#" className="story-link text-sm text-muted-foreground hover:text-foreground">
            Log in
          </a>
          <Button size="sm" className="group rounded-full shadow-glow hover-glow animate-gradient-pan" style={{ backgroundImage: "var(--gradient-brand)" }}>
            Get started <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
        <button
          className="ml-auto md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 w-full rounded-full" style={{ backgroundImage: "var(--gradient-brand)" }}>
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="bg-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 0%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-5 gap-1.5 rounded-full border bg-background/70 px-3 py-1 backdrop-blur"
          >
            <Sparkles className="h-3 w-3" style={{ color: "var(--brand)" }} />
            <span className="text-xs font-medium">Now with AI conversation intelligence</span>
          </Badge>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Transform hotel guest feedback into{" "}
            <span className="text-brand-gradient italic">AI-powered</span> insights.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            GuestPulse AI collects feedback across WhatsApp, email and web,
            analyzes every guest conversation, and resolves issues before checkout —
            so your team stops guessing and starts improving.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 rounded-full px-6 shadow-glow hover-glow animate-gradient-pan"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Start free trial <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="ghost" className="group h-12 rounded-full px-6 transition-colors hover:bg-muted">
              <Play className="mr-2 h-4 w-4" />
              Book a demo
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> No credit card
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> Setup in 15 minutes
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> GDPR compliant
            </span>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-6xl pb-24 sm:mt-20">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-70 blur-2xl"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <DashboardMockup />
            <FloatingCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trusted by ---------------- */

function TrustedBy() {
  const logos = ["AURELIA", "MERIDIAN", "NORTHWIND", "CASA·ORO", "SAN·TORINI", "KIYOMI"];
  const stats = [
    { v: "500+", l: "Hotels & resorts" },
    { v: "100K+", l: "Guests engaged monthly" },
    { v: "95%", l: "Avg. satisfaction lift" },
    { v: "8.4M", l: "Feedback responses" },
  ];
  return (
    <section className="border-y bg-muted/30 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by hospitality leaders in 42 countries
        </p>
        <div className="mt-6 grid grid-cols-3 items-center gap-6 opacity-70 sm:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display text-lg tracking-[0.3em] text-muted-foreground opacity-70 transition-all duration-500 hover:opacity-100 hover:tracking-[0.35em] hover:text-foreground"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border/60 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="group bg-background p-6 text-center transition-colors hover:bg-muted/40">
              <div className="font-display text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">
                <span className="text-brand-gradient">{s.v}</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

function HowItWorks() {
  const steps = [
    { icon: ShieldCheck, label: "Subscribe" },
    { icon: Building2, label: "Create branches" },
    { icon: ClipboardList, label: "Launch campaign" },
    { icon: MessageSquare, label: "Collect feedback" },
    { icon: Brain, label: "AI analysis" },
    { icon: Wrench, label: "Resolve issues" },
    { icon: TrendingUp, label: "Improve experience" },
  ];
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">How it works</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            From guest whisper to <em className="text-brand-gradient not-italic">business impact</em>, in a week.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seven steps. Zero spreadsheets. One clear view of what every guest actually feels.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px lg:block"
            style={{ background: "linear-gradient(90deg, transparent, var(--border) 12%, var(--border) 88%, transparent)" }}
            aria-hidden
          />
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <li className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-full border bg-background shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow group-hover:border-[color-mix(in_oklab,var(--brand)_50%,var(--border))]">
                      <s.icon className="icon-pop h-5 w-5" style={{ color: "var(--brand)" }} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-gradient text-[10px] font-semibold text-white">
                      {i + 1}
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-medium transition-colors group-hover:text-[color:var(--brand)]">{s.label}</div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features (Bento) ---------------- */

function Features() {
  return (
    <section id="features" className="border-t bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">Everything you need</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A complete guest intelligence <em className="text-brand-gradient not-italic">operating system</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Big — Main Campaign */}
          <Reveal className="md:col-span-4">
            <BentoCard
              icon={Sparkles}
              title="Main campaign, always on"
              desc="One always-on feedback loop per branch — synced with your PMS and triggered on the moments that matter: check-in, mid-stay, and post-stay."
              accent
            >
              <div className="mt-6 rounded-xl border bg-background/70 p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live · 3 branches · 12,480 guests this month
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { l: "WhatsApp", v: "68%" },
                    { l: "Email", v: "24%" },
                    { l: "Link", v: "8%" },
                  ].map((c) => (
                    <div key={c.l} className="rounded-lg bg-muted p-3">
                      <div className="font-display text-xl">{c.v}</div>
                      <div className="text-muted-foreground">{c.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.05}>
            <BentoCard
              icon={Bot}
              title="AI chat surveys"
              desc="Conversational surveys that feel like texting a concierge — 3.4× the completion of static forms."
            />
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <BentoCard
              icon={ClipboardList}
              title="Custom campaigns"
              desc="Unlimited. For spa days, F&B, VIPs, events — import a CSV and share a link."
            />
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.15}>
            <BentoCard
              icon={Ticket}
              title="Auto-tickets"
              desc="AI turns complaints into assigned, prioritized tickets before your guest reaches the elevator."
            />
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.2}>
            <BentoCard
              icon={Brain}
              title="Conversation intelligence"
              desc="Sentiment, topics, and root-cause detection across every channel — no manual tagging."
            />
          </Reveal>

          {/* Row 2 — secondary grid */}
          <Reveal className="md:col-span-6" delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: MessageCircle, label: "WhatsApp surveys" },
                { icon: Mail, label: "Email surveys" },
                { icon: Link2, label: "Shareable links" },
                { icon: Users, label: "Guest import" },
                { icon: Building2, label: "Branches" },
                { icon: BedDouble, label: "Room types" },
                { icon: Wrench, label: "Services & topics" },
                { icon: LayoutDashboard, label: "Smart dashboard" },
                { icon: Lightbulb, label: "Recommendations" },
                { icon: FileBarChart, label: "Reports" },
                { icon: UserCog, label: "Roles & teams" },
                { icon: Globe2, label: "Multi-language" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="group flex items-center gap-2.5 rounded-xl border bg-background/70 p-3 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted transition group-hover:bg-brand/10">
                    <f.icon className="h-4 w-4" style={{ color: "var(--brand)" }} />
                  </div>
                  <div className="min-w-0 truncate text-xs font-medium">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  desc,
  accent,
  children,
}: {
  icon: typeof Sparkles;
  title: string;
  desc: string;
  accent?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-soft ${
        accent ? "bg-background" : "bg-background"
      }`}
    >
      {accent && (
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden
        />
      )}
      <div className="relative">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        {children}
      </div>
    </div>
  );
}

/* ---------------- Dashboard showcase ---------------- */

function DashboardShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">The product</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Every guest signal, <em className="text-brand-gradient not-italic">one command center</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Zoom out for group-wide trends. Zoom in on a single conversation. Nothing gets lost.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="mx-auto flex h-11 w-full max-w-xl justify-center rounded-full border bg-background/60 p-1 backdrop-blur">
              {[
                { v: "analytics", l: "Analytics" },
                { v: "campaigns", l: "Campaigns" },
                { v: "chats", l: "Guest chats" },
                { v: "tickets", l: "Tickets" },
              ].map((t) => (
                <TabsTrigger
                  key={t.v}
                  value={t.v}
                  className="flex-1 rounded-full text-xs data-[state=active]:bg-foreground data-[state=active]:text-background sm:text-sm"
                >
                  {t.l}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="analytics" className="mt-8">
              <DashboardMockup />
            </TabsContent>
            <TabsContent value="campaigns" className="mt-8">
              <CampaignsMockup />
            </TabsContent>
            <TabsContent value="chats" className="mt-8">
              <ChatsMockup />
            </TabsContent>
            <TabsContent value="tickets" className="mt-8">
              <TicketsMockup />
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

function MockShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md border bg-background/60 px-3 text-[11px] text-muted-foreground">
          {title}
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function CampaignsMockup() {
  const rows = [
    { name: "Main Campaign — Aurelia Grand", ch: "WhatsApp · Email", resp: "1,204", rate: "72%", status: "Live" },
    { name: "Spa Weekend — Meridian", ch: "Link", resp: "218", rate: "84%", status: "Live" },
    { name: "VIP Guests · Q3", ch: "Email", resp: "98", rate: "63%", status: "Scheduled" },
    { name: "Restaurant NPS — Casa d'Oro", ch: "WhatsApp", resp: "742", rate: "68%", status: "Live" },
    { name: "Conference Feedback", ch: "Link", resp: "312", rate: "77%", status: "Ended" },
  ];
  return (
    <MockShell title="app.guestpulse.ai / campaigns">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-xl">Campaigns</div>
        <Button size="sm" className="rounded-full" style={{ backgroundImage: "var(--gradient-brand)" }}>
          <Sparkles className="mr-1.5 h-3.5 w-3.5" /> New campaign
        </Button>
      </div>
      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-12 gap-2 border-b bg-muted/40 px-4 py-2 text-[10px] uppercase tracking-wide text-muted-foreground">
          <div className="col-span-5">Name</div>
          <div className="col-span-3">Channels</div>
          <div className="col-span-1 text-right">Resp.</div>
          <div className="col-span-1 text-right">Rate</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-12 items-center gap-2 border-b px-4 py-3 text-xs last:border-b-0">
            <div className="col-span-5 truncate font-medium">{r.name}</div>
            <div className="col-span-3 text-muted-foreground">{r.ch}</div>
            <div className="col-span-1 text-right tabular-nums">{r.resp}</div>
            <div className="col-span-1 text-right tabular-nums" style={{ color: "var(--brand)" }}>{r.rate}</div>
            <div className="col-span-2 text-right">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] ${
                  r.status === "Live"
                    ? "bg-emerald-500/10 text-emerald-600"
                    : r.status === "Scheduled"
                    ? "bg-amber-500/10 text-amber-600"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

function ChatsMockup() {
  const msgs = [
    { who: "ai", t: "How was your stay at Aurelia Grand, Emma?" },
    { who: "guest", t: "Honestly, the room was gorgeous — but the AC was loud." },
    { who: "ai", t: "I'm sorry to hear that. Did it affect your sleep?" },
    { who: "guest", t: "A bit. Otherwise the spa was 10/10 ✨" },
    { who: "ai", t: "Noted — I'll flag maintenance for room 412. Anything else?" },
  ];
  return (
    <MockShell title="app.guestpulse.ai / conversations / #E-2418">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-3 rounded-xl border bg-background/60 p-4">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.who === "guest" ? "justify-end" : ""}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${
                  m.who === "guest"
                    ? "bg-brand-gradient text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                {m.t}
              </div>
            </div>
          ))}
        </div>
        <aside className="space-y-3 rounded-xl border bg-background/60 p-4 text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Guest</div>
            <div className="mt-1 font-medium">Emma Rousseau · Rm 412</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Sentiment</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-muted">
                <span className="block h-full w-3/4 rounded-full bg-emerald-500" />
              </span>
              <span className="tabular-nums">76</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Topics</div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {["AC", "Sleep", "Spa", "Room"].map((t) => (
                <span key={t} className="rounded-full border px-2 py-0.5 text-[10px]">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">AI action</div>
            <div className="mt-1 rounded-lg border bg-amber-500/10 p-2 text-amber-700">
              Ticket auto-created → Maintenance, priority Medium
            </div>
          </div>
        </aside>
      </div>
    </MockShell>
  );
}

function TicketsMockup() {
  const cols: {
    name: string;
    color: string;
    items: { t: string; g: string; p: "High" | "Med" | "Low" }[];
  }[] = [
    {
      name: "New",
      color: "bg-rose-500",
      items: [
        { t: "Noise complaint · Rm 412", g: "Emma R.", p: "Med" },
        { t: "Slow check-in", g: "Julien P.", p: "High" },
      ],
    },
    {
      name: "In progress",
      color: "bg-amber-500",
      items: [
        { t: "Dirty bathroom · Rm 208", g: "Aiko S.", p: "High" },
        { t: "AC not cooling · Rm 512", g: "Marco B.", p: "Med" },
      ],
    },
    {
      name: "Resolved",
      color: "bg-emerald-500",
      items: [
        { t: "Missing towels · Rm 301", g: "Nadia K.", p: "Low" },
        { t: "Wi-Fi issue · Lobby", g: "Ops", p: "Low" },
        { t: "Late breakfast tray", g: "Owen L.", p: "Med" },
      ],
    },
  ];
  return (
    <MockShell title="app.guestpulse.ai / tickets">
      <div className="grid gap-4 md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.name} className="rounded-xl border bg-background/60 p-3">
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium">
                <span className={`h-2 w-2 rounded-full ${c.color}`} /> {c.name}
              </span>
              <span className="text-muted-foreground">{c.items.length}</span>
            </div>
            <div className="space-y-2">
              {c.items.map((it, i) => (
                <div key={i} className="rounded-lg border bg-background p-2.5">
                  <div className="text-xs font-medium">{it.t}</div>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>{it.g}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 ${
                        it.p === "High"
                          ? "bg-rose-500/10 text-rose-600"
                          : it.p === "Med"
                          ? "bg-amber-500/10 text-amber-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {it.p}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

/* ---------------- AI workflow ---------------- */

function AIWorkflow() {
  const nodes = [
    { icon: Users, label: "Guest" },
    { icon: MessageSquare, label: "Conversation" },
    { icon: Brain, label: "AI" },
    { icon: Lightbulb, label: "Insight" },
    { icon: Zap, label: "Recommendation" },
    { icon: UserCog, label: "Manager" },
    { icon: Star, label: "Better stay" },
  ];
  return (
    <section className="border-y bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">The AI layer</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Human warmth. <em className="text-brand-gradient not-italic">Machine precision.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Purpose-built LLMs trained on millions of hospitality conversations — tuned for tone, intent, and next-best-action.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border bg-background p-6 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "var(--gradient-mesh)" }}
              aria-hidden
            />
            <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {nodes.map((n, i) => (
                <div key={n.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border bg-background shadow-soft">
                      <n.icon className="h-5 w-5" style={{ color: "var(--brand)" }} />
                    </div>
                    <div className="text-xs font-medium">{n.label}</div>
                  </div>
                  {i < nodes.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Analytics dark section ---------------- */

function AnalyticsSection() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32 text-white"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(700px 400px at 20% 10%, color-mix(in oklab, #2563EB 40%, transparent), transparent 60%), radial-gradient(700px 400px at 90% 90%, color-mix(in oklab, #06B6D4 30%, transparent), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="rounded-full border-white/20 bg-white/10 text-white">
            Analytics
          </Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Numbers your board actually <em className="not-italic" style={{ color: "#67E8F9" }}>trusts</em>.
          </h2>
          <p className="mt-4 text-white/70">
            NPS, sentiment, response rates and department scorecards — refreshed in real time, exportable in one click.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <AnalyticsPanel />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Ticket workflow ---------------- */

function TicketWorkflow() {
  const steps = [
    { icon: MessageSquare, label: "Complaint received", desc: "Guest mentions noisy AC in a WhatsApp reply." },
    { icon: Brain, label: "AI detection", desc: "Classified: Maintenance · Room · Medium priority." },
    { icon: Ticket, label: "Ticket created", desc: "Auto-generated with context, room, and guest info." },
    { icon: UserCog, label: "Assigned", desc: "Routed to the on-shift maintenance lead." },
    { icon: Check, label: "Resolved", desc: "Marked complete. Guest re-surveyed automatically." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Badge variant="outline" className="rounded-full">Ticketing</Badge>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Every complaint becomes a <em className="text-brand-gradient not-italic">closed loop</em>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              GuestPulse turns fuzzy feedback into structured tickets — assigned, tracked, and re-checked with the guest — so nothing slips past the front desk.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Dirty room", "Slow check-in", "AC issues", "Noise", "Staff behavior", "Maintenance"].map((t) => (
                <span key={t} className="rounded-full border bg-background px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative space-y-4 border-l pl-6">
              <span
                className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
              {steps.map((s, i) => (
                <li key={s.label} className="relative">
                  <span className="absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-full bg-background ring-2" style={{ ringColor: "var(--brand)" } as React.CSSProperties}>
                    <s.icon className="h-3 w-3" style={{ color: "var(--brand)" }} />
                  </span>
                  <div className="rounded-xl border bg-background p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    { icon: Star, label: "Higher review ratings", desc: "+0.6 stars on average within 90 days." },
    { icon: MessageSquare, label: "Better online reviews", desc: "Route promoters to public reviews automatically." },
    { icon: Users, label: "Happier guests", desc: "Fix issues before checkout, not after." },
    { icon: Wrench, label: "Operational lift", desc: "Ops teams get the exact context they need." },
    { icon: Zap, label: "Faster decisions", desc: "Weekly AI briefings replace 40-page reports." },
    { icon: ShieldCheck, label: "Fewer complaints", desc: "Recurring issues surface early and stay fixed." },
    { icon: Hotel, label: "Loyalty that lasts", desc: "Personalized follow-ups turn one-time guests into regulars." },
  ];
  return (
    <section className="border-t bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">Outcomes</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            What our hotels <em className="text-brand-gradient not-italic">actually see</em>.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b) => (
            <Reveal key={b.label}>
              <div className="h-full rounded-2xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10">
                  <b.icon className="h-5 w-5" style={{ color: "var(--brand)" }} />
                </div>
                <div className="mt-4 font-display text-xl">{b.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{b.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const items = [
    {
      quote:
        "In our first quarter with GuestPulse we went from 4.4 to 4.8 on TripAdvisor. The AC-noise problem we'd 'known about for years'? Fixed in three weeks.",
      name: "Isabelle Moreau",
      role: "General Manager, Aurelia Grand · Paris",
    },
    {
      quote:
        "The auto-tickets alone paid for the platform. Our housekeeping team hears about issues while the guest is still in the room.",
      name: "Rafael Ortiz",
      role: "COO, Meridian Hotel Group",
    },
    {
      quote:
        "It replaced three tools and gave us insights we never had. Our owners get one clean report; my managers act on it Monday morning.",
      name: "Aiko Tanaka",
      role: "Quality Director, Kiyomi Ryokans",
    },
  ];
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">Loved by hoteliers</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            The people who run <em className="text-brand-gradient not-italic">great hotels</em> use GuestPulse.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border bg-background p-6 shadow-soft">
                <div className="mb-4 flex gap-0.5" aria-hidden>
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-display text-lg leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{t.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      name: "Starter",
      desc: "For boutique properties getting started with structured feedback.",
      priceM: 49,
      priceY: 39,
      features: [
        "1 branch",
        "Main campaign",
        "3 custom campaigns / mo",
        "WhatsApp, email & link",
        "Basic AI insights",
        "Email support",
      ],
      cta: "Start free trial",
      highlighted: false,
    },
    {
      name: "Professional",
      desc: "For growing hotels and small groups that live in the dashboard.",
      priceM: 149,
      priceY: 119,
      features: [
        "Up to 10 branches",
        "Unlimited custom campaigns",
        "AI conversation intelligence",
        "Automatic tickets & routing",
        "Advanced analytics & exports",
        "Priority support",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      desc: "For hotel chains, resorts and hospitality groups worldwide.",
      priceM: null,
      priceY: null,
      features: [
        "Unlimited branches",
        "SSO, SCIM & audit logs",
        "Dedicated success manager",
        "Custom AI models & tone",
        "PMS integrations",
        "99.99% uptime SLA",
      ],
      cta: "Talk to sales",
      highlighted: false,
    },
  ];
  return (
    <section id="pricing" className="border-t bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">Pricing</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Simple pricing. <em className="text-brand-gradient not-italic">Serious ROI.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every plan includes a 14-day free trial. No credit card required.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border bg-background px-4 py-2">
            <span className={`text-sm ${!annual ? "font-semibold" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual pricing" />
            <span className={`text-sm ${annual ? "font-semibold" : "text-muted-foreground"}`}>
              Annual <span className="ml-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">Save 20%</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  p.highlighted
                    ? "bg-background shadow-glow"
                    : "bg-background"
                }`}
                style={
                  p.highlighted
                    ? { borderColor: "color-mix(in oklab, var(--brand) 40%, var(--border))" }
                    : undefined
                }
              >
                {p.highlighted && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-medium text-white shadow-glow"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Most popular
                  </span>
                )}
                <div className="font-display text-2xl">{p.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6">
                  {p.priceM !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl">
                        ${annual ? p.priceY : p.priceM}
                      </span>
                      <span className="text-sm text-muted-foreground">/ mo</span>
                    </div>
                  ) : (
                    <div className="font-display text-3xl">Let's talk</div>
                  )}
                  <div className="mt-1 text-xs text-muted-foreground">
                    {p.priceM !== null ? (annual ? "Billed annually per branch" : "Billed monthly per branch") : "Custom pricing"}
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className="w-full rounded-full"
                    variant={p.highlighted ? "default" : "outline"}
                    style={p.highlighted ? { backgroundImage: "var(--gradient-brand)" } : undefined}
                  >
                    {p.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const qs = [
    {
      q: "How long does setup take?",
      a: "Most hotels are live within a day. Import your guest list, connect WhatsApp or email, and launch your main campaign — we handle the rest.",
    },
    {
      q: "Do you integrate with our PMS?",
      a: "Yes. GuestPulse connects with the major PMS providers (Opera, Mews, Cloudbeds, Guestline and more) so surveys trigger on real stay events automatically.",
    },
    {
      q: "Which languages does the AI support?",
      a: "The AI handles 34 languages out of the box, including tone-appropriate replies in Arabic, Japanese, French and Spanish.",
    },
    {
      q: "Is guest data secure?",
      a: "GDPR- and SOC 2-ready. Data is encrypted in transit and at rest, hosted in your region, and never used to train external models.",
    },
    {
      q: "Can we brand the surveys?",
      a: "Fully. Your logo, colors, tone of voice and even custom AI persona — every touchpoint feels like your brand, not ours.",
    },
    {
      q: "What if we already use a review platform?",
      a: "GuestPulse complements it. We handle first-party feedback and route promoters to your public review platform of choice.",
    },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="outline" className="rounded-full">FAQ</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {qs.map((q, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b">
                <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                  {q.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground">
                  {q.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-16 text-center text-white sm:px-12 sm:py-24"
        style={{
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(600px 400px at 50% 0%, color-mix(in oklab, #2563EB 45%, transparent), transparent 60%), radial-gradient(600px 400px at 50% 100%, color-mix(in oklab, #06B6D4 35%, transparent), transparent 60%)",
        }}
      >
        <Reveal>
          <Badge variant="secondary" className="rounded-full border-white/20 bg-white/10 text-white">
            <Sparkles className="mr-1 h-3 w-3" /> Ready when you are
          </Badge>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Ready to transform your guest experience?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Join hundreds of hotels using GuestPulse AI to hear every guest, fix every issue, and win every review.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-6 text-slate-900"
              style={{ backgroundColor: "white" }}
            >
              Start free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 rounded-full border border-white/20 px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Play className="mr-2 h-4 w-4" /> Book a demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Pricing", "AI", "Integrations", "Changelog"],
    },
    {
      title: "Solutions",
      links: ["Boutique hotels", "Resorts", "Hotel groups", "Quality teams"],
    },
    {
      title: "Company",
      links: ["About", "Customers", "Careers", "Press", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "GDPR", "Cookies"],
    },
  ];
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-6">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl tracking-tight">
                GuestPulse<span style={{ color: "var(--brand)" }}>.ai</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI guest intelligence built for modern hotels. Made in Europe, loved worldwide.
            </p>
            <div className="mt-6 flex gap-2">
              {["X", "in", "Ig", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`GuestPulse on ${s}`}
                  className="grid h-9 w-9 place-items-center rounded-full border text-xs text-muted-foreground hover:bg-muted"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} GuestPulse AI. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> SOC 2 · GDPR
            </span>
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground">
              Docs <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Silence unused var warnings for icons referenced only conditionally
// (kept to preserve tree-shakable import intent while iterating).
void ChevronDown;