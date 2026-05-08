import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, BookOpen, Download, Calendar, Quote } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bhola Siwakoti — Executive Portfolio" },
      { name: "description", content: "Mortgage leader, nonprofit executive, and literary contributor with two decades of impact across the U.S. and Nepal." },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { to: "/mortgage", eyebrow: "01 — Lending", title: "Mortgage Leadership", desc: "Regional Manager driving 100+ closings monthly, a 96% approval-rate lift, and 25% above-target sales.", icon: Building2 },
  { to: "/nonprofit", eyebrow: "02 — Service", title: "Nonprofit & Congregation", desc: "Managing director who oversaw 10 staff, 40 contracts, two sites, and 100% federal grant reporting accuracy.", icon: Award },
  { to: "/literature", eyebrow: "03 — Voice", title: "Literature & Thought", desc: "Bilingual writer bridging Nepali and English — essays, doctoral research, and community storytelling.", icon: BookOpen },
] as const;

const STATS = [
  { k: "96%", v: "Loan Approval Rate Lift" },
  { k: "100+", v: "Monthly Closings Coordinated" },
  { k: "25%", v: "Above Regional Sales Target" },
  { k: "100%", v: "Federal Grant Reporting" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-32 lg:pt-32 lg:pb-44 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-10">
            <p className="eyebrow mb-8">Executive Portfolio · Est. 2007</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance">
              Lending wisdom.<br />
              <span className="italic text-gold">Leading communities.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Dr. Bhola Siwakoti is a mortgage executive, nonprofit director, and bilingual writer translating two decades of cross-sector leadership into measurable outcomes for clients, congregations, and readers.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://calendly.com/bholasiwakoti" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-sm gradient-gold text-gold-foreground font-medium shadow-gold hover:opacity-90 transition">
                <Calendar className="w-4 h-4" /> Book a Conversation
              </a>
              <a href="/Dr_Bhola_Siwakoti_Resume.pdf" download className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-border text-foreground hover:border-gold hover:text-gold transition">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gold/10 blur-3xl rounded-full" aria-hidden />
            <img src={heroImg} alt="Editorial portrait of Dr. Bhola Siwakoti" width={1280} height={1600} className="relative w-full max-w-md mx-auto shadow-elegant rounded-sm" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-gold/30 px-5 py-3 rounded-sm shadow-elegant hidden sm:block">
              <p className="eyebrow mb-1">Doctorate</p>
              <p className="font-display text-sm">SSBM Geneva · 2025</p>
            </div>
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.v}>
              <p className="font-display text-5xl lg:text-6xl text-gold">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground tracking-wide">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-4">Three Disciplines</p>
            <h2 className="font-display text-4xl lg:text-5xl max-w-2xl text-balance">A career composed across finance, faith, and the written word.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Each chapter informs the next. Discipline from lending, empathy from service, clarity from writing.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {PILLARS.map((p) => (
            <Link key={p.to} to={p.to} className="group bg-background p-10 hover:bg-card transition-colors flex flex-col">
              <p.icon className="w-8 h-8 text-gold mb-8" strokeWidth={1.2} />
              <p className="eyebrow mb-3">{p.eyebrow}</p>
              <h3 className="font-display text-2xl mb-4 group-hover:text-gold transition">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-gold">Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* SUMMARY */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-28 text-center">
          <Quote className="w-10 h-10 text-gold mx-auto mb-8" strokeWidth={1} />
          <p className="font-display text-3xl lg:text-4xl leading-snug text-balance italic">
            "Strong business acumen across sales, origination, and operations — paired with the comparative lens of nonprofit financial practice and a global perspective on what leadership ought to mean."
          </p>
          <div className="hairline my-10 max-w-xs mx-auto" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Summary · Dr. Bhola Siwakoti</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-28">
        <p className="eyebrow mb-4">Trajectory</p>
        <h2 className="font-display text-4xl lg:text-5xl mb-16">Two decades, three continents.</h2>
        <ol className="relative border-l border-gold/30 pl-10 space-y-14">
          {[
            { y: "2019 — Present", t: "Regional Manager", o: "Mortgage Your Best · Cornerstone First Mortgage LLC", l: "Cincinnati, OH" },
            { y: "2023 — 2025", t: "Global Doctor of Business Administration", o: "Swiss School of Business and Management (SSBM)", l: "Geneva, Switzerland" },
            { y: "2016 — 2018", t: "Managing Director", o: "Building Community in New Hampshire", l: "Manchester, NH" },
            { y: "2012 — 2014", t: "Master of Business Administration", o: "University of Phoenix", l: "Lone Tree, CO" },
            { y: "2003 — 2007", t: "Bachelor's, Social Sciences (Bilingual)", o: "Tribhuvan University", l: "Kathmandu, Nepal" },
          ].map((e) => (
            <li key={e.t} className="relative">
              <span className="absolute -left-[46px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-background" />
              <p className="text-xs tracking-[0.3em] uppercase text-gold">{e.y}</p>
              <h3 className="font-display text-2xl mt-2">{e.t}</h3>
              <p className="text-muted-foreground mt-1">{e.o} · <span className="italic">{e.l}</span></p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
