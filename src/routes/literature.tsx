import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Languages, Feather } from "lucide-react";
import img from "@/assets/literature.jpg";

export const Route = createFileRoute("/literature")({
  head: () => ({
    meta: [
      { title: "Literature & Thought — Dr. Bhola Siwakoti" },
      { name: "description", content: "Bilingual writing and doctoral research across Nepali and English — bridging diaspora storytelling and comparative nonprofit financial scholarship." },
      { property: "og:title", content: "Literature & Thought" },
      { property: "og:description", content: "Essays, doctoral research, and bilingual storytelling from Dr. Bhola Siwakoti." },
    ],
  }),
  component: Page,
});

const WORKS = [
  { y: "2025", t: "Doctoral Dissertation", d: "Comparative study of nonprofit financial practices across global contexts (SSBM Geneva, GDBA)." },
  { y: "Ongoing", t: "Bilingual Essays", d: "Reflections in Nepali and English on diaspora identity, faith, and the economics of community." },
  { y: "Community", t: "Congregational Writings", d: "Sermons, devotionals, and translations supporting the Nepali-speaking faith community in the U.S." },
  { y: "Collected", t: "Field Notes", d: "Long-form correspondence on leadership lessons from nonprofit, mortgage, and academic worlds." },
];

function Page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={img} alt="Open book by candlelight with Himalayan mountains" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-16">
          <p className="eyebrow mb-4">Discipline 03 · Voice</p>
          <h1 className="font-display text-5xl lg:text-7xl max-w-3xl text-balance">Literature &amp; Thought</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Bilingual essays, doctoral research, and the long quiet practice of writing things down.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <p className="font-display text-3xl lg:text-4xl leading-snug text-balance italic text-foreground/90">
          "What numbers prove, language preserves. A loan closed is a story finished — but a community written down is a story passed on."
        </p>
        <div className="gold-rule my-10 max-w-xs" />
        <p className="eyebrow">Author's Note</p>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24">
          <p className="eyebrow mb-4">Selected Works</p>
          <h2 className="font-display text-4xl lg:text-5xl mb-16">Writing across two languages.</h2>
          <div className="space-y-px bg-border">
            {WORKS.map(w => (
              <article key={w.t} className="bg-background p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-card/40 transition-colors">
                <p className="md:col-span-2 eyebrow pt-2">{w.y}</p>
                <h3 className="md:col-span-4 font-display text-2xl">{w.t}</h3>
                <p className="md:col-span-6 text-muted-foreground leading-relaxed">{w.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10">
        {[
          { i: Languages, t: "Nepali", d: "Native fluency · primary literary voice." },
          { i: BookOpen, t: "English", d: "Proficient · academic, executive, editorial." },
          { i: Feather, t: "Hindi", d: "Intermediate · cultural and devotional readings." },
        ].map(l => (
          <div key={l.t} className="border border-border p-8">
            <l.i className="w-7 h-7 text-gold mb-5" strokeWidth={1.2} />
            <h3 className="font-display text-2xl mb-2">{l.t}</h3>
            <p className="text-muted-foreground text-sm">{l.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
