import {
  Sparkles,
  MessageSquare,
  Ticket,
  TrendingUp,
  BarChart3,
  Star,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border bg-card shadow-soft">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md border bg-background/60 px-3 text-[11px] text-muted-foreground">
          app.guestpulse.ai / overview
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 p-4 sm:p-5">
        {/* Sidebar */}
        <aside className="col-span-3 hidden flex-col gap-1 rounded-xl border bg-background/50 p-3 md:flex">
          <div className="mb-2 flex items-center gap-2 px-2">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-brand-gradient text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-semibold">GuestPulse</span>
          </div>
          {["Overview", "Campaigns", "Guests", "Conversations", "Tickets", "Insights", "Branches"].map(
            (item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                  i === 0
                    ? "bg-brand/10 text-brand-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                style={i === 0 ? { color: "var(--brand)" } : undefined}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                {item}
              </div>
            ),
          )}
        </aside>

        {/* Main */}
        <div className="col-span-12 flex flex-col gap-4 md:col-span-9">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Satisfaction", value: "94.2%", trend: "+3.1%", tone: "success" },
              { label: "NPS", value: "72", trend: "+8", tone: "brand" },
              { label: "Response rate", value: "68%", trend: "+11%", tone: "success" },
              { label: "Open tickets", value: "12", trend: "-4", tone: "brand" },
            ].map((k) => (
              <div key={k.label} className="rounded-xl border bg-background/60 p-3">
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {k.label}
                </div>
                <div className="mt-1 font-display text-2xl">{k.value}</div>
                <div className="text-[11px] text-emerald-500">{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Chart + list */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-5 rounded-xl border bg-background/60 p-4 md:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-medium">Guest satisfaction · 30d</div>
                <div className="flex gap-1 text-[10px] text-muted-foreground">
                  <span className="rounded bg-muted px-1.5 py-0.5">Daily</span>
                </div>
              </div>
              <SatisfactionChart />
            </div>
            <div className="col-span-5 rounded-xl border bg-background/60 p-4 md:col-span-2">
              <div className="mb-3 text-xs font-medium">Live conversations</div>
              <div className="space-y-3">
                {[
                  { name: "Emma R.", msg: "Loved the sunset spa session ✨", tone: "pos" },
                  { name: "Julien P.", msg: "AC in room 412 is loud tonight.", tone: "neg" },
                  { name: "Aiko S.", msg: "Breakfast staff were wonderful.", tone: "pos" },
                ].map((c) => (
                  <div key={c.name} className="flex items-start gap-2.5">
                    <div
                      className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-brand-gradient text-[10px] font-semibold text-white grid place-items-center"
                    >
                      {c.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-xs font-medium">{c.name}</div>
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            c.tone === "pos" ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                        />
                      </div>
                      <div className="truncate text-[11px] text-muted-foreground">{c.msg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SatisfactionChart() {
  // hand-crafted, deterministic line + area
  const pts = [82, 84, 81, 86, 88, 85, 87, 90, 89, 91, 90, 92, 93, 91, 94];
  const w = 320;
  const h = 120;
  const step = w / (pts.length - 1);
  const min = 78;
  const max = 96;
  const y = (v: number) => h - ((v - min) / (max - min)) * h;
  const path = pts
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${y(v)}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-28 w-full">
      <defs>
        <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#area-fill)" />
      <path d={path} fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" />
      {pts.map((v, i) => (
        <circle key={i} cx={i * step} cy={y(v)} r="1.5" fill="var(--brand)" />
      ))}
    </svg>
  );
}

export function FloatingCards() {
  return (
    <>
      <div className="glass pointer-events-none absolute -left-4 top-8 hidden w-56 rounded-2xl p-3 shadow-soft md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              AI insight
            </div>
            <div className="text-xs font-medium">Breakfast NPS ↑ 14 pts</div>
          </div>
        </div>
      </div>

      <div className="glass pointer-events-none absolute -right-4 top-24 hidden w-60 rounded-2xl p-3 shadow-soft md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              Sentiment
            </div>
            <div className="text-xs font-medium">92% positive this week</div>
          </div>
        </div>
      </div>

      <div className="glass pointer-events-none absolute -bottom-6 left-8 hidden w-64 rounded-2xl p-3 shadow-soft md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/15 text-amber-600">
            <Ticket className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              Auto-ticket
            </div>
            <div className="truncate text-xs font-medium">Noise complaint · Rm 412 → Housekeeping</div>
          </div>
        </div>
      </div>

      <div className="glass pointer-events-none absolute -bottom-4 right-6 hidden w-52 rounded-2xl p-3 shadow-soft md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15" style={{ color: "var(--brand)" }}>
            <MessageSquare className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              WhatsApp
            </div>
            <div className="text-xs font-medium">1,204 surveys sent today</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-wide text-white/60">Satisfaction</div>
          <BarChart3 className="h-4 w-4 text-white/50" />
        </div>
        <div className="font-display text-4xl text-white">94.2%</div>
        <div className="mt-1 text-xs text-emerald-400">+3.1% vs last month</div>
        <div className="mt-4">
          <SatisfactionChart />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-wide text-white/60">Sentiment mix</div>
          <Star className="h-4 w-4 text-white/50" />
        </div>
        <DonutChart />
        <div className="mt-3 flex justify-around text-[11px] text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Positive 74%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Neutral 18%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" /> Negative 8%
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-wide text-white/60">By department</div>
          <TrendingUp className="h-4 w-4 text-white/50" />
        </div>
        <DepartmentBars />
      </div>
    </div>
  );
}

function DonutChart() {
  const R = 46;
  const C = 2 * Math.PI * R;
  const segments = [
    { pct: 0.74, color: "oklch(0.76 0.18 148)" },
    { pct: 0.18, color: "oklch(0.82 0.16 85)" },
    { pct: 0.08, color: "oklch(0.7 0.19 22)" },
  ];
  let offset = 0;
  return (
    <svg viewBox="0 0 120 120" className="mx-auto h-32 w-32 -rotate-90">
      <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
      {segments.map((s, i) => {
        const dash = s.pct * C;
        const el = (
          <circle
            key={i}
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={s.color}
            strokeWidth="12"
            strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

function DepartmentBars() {
  const rows = [
    { name: "Reception", val: 96 },
    { name: "Restaurant", val: 91 },
    { name: "Housekeeping", val: 88 },
    { name: "Spa", val: 95 },
    { name: "Room Service", val: 84 },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.name}>
          <div className="mb-1 flex items-center justify-between text-[11px] text-white/70">
            <span>{r.name}</span>
            <span className="tabular-nums">{r.val}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-brand-gradient"
              style={{ width: `${r.val}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}