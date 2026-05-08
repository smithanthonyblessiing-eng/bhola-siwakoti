import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Calendar, Download, Mail, Phone, MapPin, Linkedin, Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import portrait from "@/assets/portrait-retouched.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/mortgage", label: "Mortgage" },
  { to: "/nonprofit", label: "Nonprofit" },
  { to: "/literature", label: "Literature" },
] as const;

const CALENDAR_URL = "https://calendly.com/bholasiwakoti";
const LINKTREE_URL = "https://linktr.ee/mortgageyourbest";
const LINKEDIN_URL = "https://linkedin.com/in/bhola-siwakoti-mba-370a2a40";

export function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Always scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative inline-flex">
              <span className="absolute -inset-0.5 rounded-full gradient-gold opacity-80" aria-hidden />
              <img
                src={portrait}
                alt="Dr. Bhola Siwakoti"
                className="relative h-11 w-11 rounded-full object-cover ring-1 ring-background"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl tracking-tight">Bhola Siwakoti</span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-gold">GDBA · MBA</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm tracking-wide transition-colors ${active ? "text-gold" : "text-foreground/80 hover:text-gold"}`}
                >
                  {n.label}
                  {active && <span className="block h-px bg-gold mt-1" />}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={LINKTREE_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-sm border border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground transition"
            >
              <Link2 className="w-4 h-4" /> Linktree
            </a>
            <a
              href={CALENDAR_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition"
            >
              <Calendar className="w-4 h-4" /> Book a Call
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            <div className="w-6 h-px bg-foreground mb-1.5" />
            <div className="w-6 h-px bg-foreground mb-1.5" />
            <div className="w-4 h-px bg-foreground ml-auto" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border px-6 py-4 space-y-3 bg-background">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block text-sm py-2">
                {n.label}
              </Link>
            ))}
            <a href={LINKTREE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border border-gold/40 text-gold mr-2">
              <Link2 className="w-4 h-4" /> Linktree
            </a>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm gradient-gold text-gold-foreground">
              <Calendar className="w-4 h-4" /> Book a Call
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer id="contact" className="border-t border-border mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={portrait} alt="Dr. Bhola Siwakoti" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
              <div>
                <p className="eyebrow mb-1">Contact</p>
                <p className="font-display text-lg">Dr. Bhola Siwakoti</p>
              </div>
            </div>
            <h3 className="font-display text-3xl mb-6">Let's build what's next.</h3>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-sm gradient-gold text-gold-foreground shadow-gold">
              <Calendar className="w-4 h-4" /> Schedule a Conversation
            </a>
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow mb-4">Direct</p>
            <a href="mailto:bholasiwakoti@gmail.com" className="flex items-center gap-3 hover:text-gold transition"><Mail className="w-4 h-4 text-gold" /><span>bholasiwakoti@gmail.com</span></a>
            <a href="tel:6032193571" className="flex items-center gap-3 hover:text-gold transition"><Phone className="w-4 h-4 text-gold" /><span>(603) 219-3571</span></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold transition"><Linkedin className="w-4 h-4 text-gold" /><span>LinkedIn – Volasi Wakoti</span></a>
            <a href={LINKTREE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold transition"><Link2 className="w-4 h-4 text-gold" /><span>Linktree – Mortgage Your Best</span></a>
            <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-4 h-4 text-gold" /><span>Liberty Township, Ohio</span></p>
          </div>
          <div>
            <p className="eyebrow mb-4">Resources</p>
            <a href="/Dr_Bhola_Siwakoti_Resume.pdf" download className="inline-flex items-center gap-2 text-sm border border-gold/40 text-gold px-5 py-2.5 rounded-sm hover:bg-gold hover:text-gold-foreground transition">
              <Download className="w-4 h-4" /> Download CV (PDF)
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Dr. Bhola Siwakoti. All rights reserved.</p>
            <p className="font-display italic">Mortgage · Nonprofit · Literature</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
