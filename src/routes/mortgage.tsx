import { createFileRoute } from "@tanstack/react-router";
import { Calendar, CheckCircle2 } from "lucide-react";
import img from "@/assets/mortgage.jpg";

export const Route = createFileRoute("/mortgage")({
  head: () => ({
    meta: [
      { title: "Mortgage Leadership — Dr. Bhola Siwakoti" },
      { name: "description", content: "Regional Manager at Mortgage Your Best, powered by Cornerstone First Mortgage LLC. 100+ monthly closings, 96% approval-rate lift, 25% above-target sales." },
      { property: "og:title", content: "Mortgage Leadership — Dr. Bhola Siwakoti" },
      { property: "og:description", content: "Strategic mortgage origination, client portfolio growth, and regulatory excellence in the Greater Cincinnati region." },
    ],
  }),
  component: Mortgage,
});

const ACHIEVEMENTS = [
  { t: "Exceeded Sales Targets", d: "Outperformed regional sales goals by 25% in 2022 through strategic client management and disciplined pipeline cadence." },
  { t: "Coordinated 100+ Monthly Closings", d: "Owned timely, accurate documentation across high-volume pipelines with zero compliance incidents." },
  { t: "Improved Processing Quality", d: "Reduced loan origination errors and elevated downstream sales activities through process redesign." },
  { t: "80% Client Retention Lift", d: "Increased retention by enhancing customer service, follow-through, and long-term relationship building." },
];

const PLATFORMS = ["Encompass", "Blend", "DocMagic", "CRM Suites"];

function Mortgage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={img} alt="American suburban homes at golden hour" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-16">
          <p className="eyebrow mb-4">Discipline 01 · Lending</p>
          <h1 className="font-display text-5xl lg:text-7xl max-w-3xl text-balance">Mortgage Leadership</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Regional Manager · Mortgage Your Best, Powered by Cornerstone First Mortgage LLC · Cincinnati, Ohio · 2019 – Present</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-6 text-foreground/90 leading-relaxed">
          <p className="eyebrow">Mandate</p>
          <h2 className="font-display text-3xl lg:text-4xl text-balance">Strategic guidance that turns approvals into long relationships.</h2>
          <p>Dr. Siwakoti boosts client mortgage portfolios through strategic guidance — increasing regional closings while leveraging deep expertise in industry platforms. He acts as the critical liaison between applicants, processors, and underwriters, ensuring every file meets federal mortgage law and the highest ethical standards.</p>
          <p>His approach pairs meticulous financial analysis with proactive communication: progress is transparent, documentation is streamlined, and clients are guided — not just processed.</p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-3">Platforms</p>
            <ul className="space-y-2">{PLATFORMS.map(p => <li key={p} className="font-display text-xl">{p}</li>)}</ul>
          </div>
          <div className="hairline" />
          <div>
            <p className="eyebrow mb-3">Region</p>
            <p className="font-display text-xl">Greater Cincinnati &amp; surrounding markets</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <p className="eyebrow mb-4">Key Achievements</p>
          <h2 className="font-display text-4xl lg:text-5xl mb-16">Numbers that closed.</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {ACHIEVEMENTS.map(a => (
              <div key={a.t} className="bg-background p-10">
                <CheckCircle2 className="w-7 h-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{a.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-4xl lg:text-5xl mb-6 text-balance">Considering a refinance, purchase, or partnership?</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Reserve a 30-minute consultation. Honest guidance, every time.</p>
        <a href="https://calendly.com/bholasiwakoti" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-sm gradient-gold text-gold-foreground font-medium shadow-gold">
          <Calendar className="w-4 h-4" /> Schedule a Consultation
        </a>
      </section>
    </>
  );
}
