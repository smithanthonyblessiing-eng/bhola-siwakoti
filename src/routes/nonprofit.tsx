import { createFileRoute } from "@tanstack/react-router";
import { Users, FileCheck, Building, HeartHandshake } from "lucide-react";
import img from "@/assets/nonprofit.jpg";

export const Route = createFileRoute("/nonprofit")({
  head: () => ({
    meta: [
      { title: "Nonprofit & Congregation Leadership — Dr. Bhola Siwakoti" },
      { name: "description", content: "Former Managing Director, Building Community in New Hampshire — overseeing 10 staff, 40 contracts, and 100% federal grant reporting accuracy." },
      { property: "og:title", content: "Nonprofit & Congregation Leadership" },
      { property: "og:description", content: "Operations, governance, and grant stewardship across nonprofit and congregational settings." },
    ],
  }),
  component: Page,
});

const PILLARS = [
  { i: Building, t: "Operations & Budget", d: "Full oversight of corporate budget allocation, payroll, accounting, invoicing, and payment management across two sites." },
  { i: Users, t: "People Leadership", d: "Supervised 10 employees and managed 40 contracts — coaching, development, appraisal, and compensation." },
  { i: FileCheck, t: "Grant Stewardship", d: "Directed all federal and local grants with 100% reporting accomplishments and zero compliance gaps." },
  { i: HeartHandshake, t: "Stakeholder Relations", d: "Built procedures to engage program personnel, sponsors, patrons, and associates with consistency and care." },
];

function Page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={img} alt="Hands joined in community service" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-16">
          <p className="eyebrow mb-4">Discipline 02 · Service</p>
          <h1 className="font-display text-5xl lg:text-7xl max-w-3xl text-balance">Nonprofit &amp; Congregation</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Managing Director · Building Community in New Hampshire · Manchester, NH · 2016 – 2018</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24">
        <p className="eyebrow mb-4">Charter</p>
        <h2 className="font-display text-3xl lg:text-4xl mb-8 text-balance">A nonprofit run with the rigor of a business — and the heart of a congregation.</h2>
        <p className="text-foreground/85 leading-relaxed text-lg max-w-3xl">
          As Managing Director, Dr. Siwakoti assumed full responsibility for general oversight of operations, devised business plans alongside the Executive Director, and formulated tactics for revenue growth. Tight deadlines were met without compromise; reporting was unimpeachable; and the people doing the work felt seen.
        </p>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {PILLARS.map(p => (
              <div key={p.t} className="bg-background p-10">
                <p.i className="w-8 h-8 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10 text-center">
        {[
          { k: "10", v: "Employees Supervised" },
          { k: "40", v: "Contracts Managed" },
          { k: "2", v: "Sites Directed" },
        ].map(s => (
          <div key={s.v} className="border border-border p-10">
            <p className="font-display text-6xl text-gold">{s.k}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </section>
    </>
  );
}
