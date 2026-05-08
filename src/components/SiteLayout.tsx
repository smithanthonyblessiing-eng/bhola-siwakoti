import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Calendar, Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/mortgage", label: "Mortgage" },
  { to: "/nonprofit", label: "Nonprofit" },
  { to: "/literature", label: "Literature" },
] as const;

const CALENDAR_URL = "https://calendly.com/bholasiwakoti";

export function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-3 group">
            <span className="font-display text-2xl tracking-tight">Bhola Siwakoti</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.32em] text-gold">GDBA · MBA</span>
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
          <a
            href={CALENDAR_URL}
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition"
          >
            <Calendar className="w-4 h-4" /> Book a Call
          </a>
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
            <p className="eyebrow mb-4">Contact</p>
            <h3 className="font-display text-3xl mb-6">Let's build what's next.</h3>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-sm gradient-gold text-gold-foreground shadow-gold">
              <Calendar className="w-4 h-4" /> Schedule a Conversation
            </a>
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow mb-4">Direct</p>
            <a href="mailto:bholasiwakoti@gmail.com" className="flex items-center gap-3 hover:text-gold transition"><Mail className="w-4 h-4 text-gold" /> bholasiwakoti@gmail.com</a>
            <a href="tel:6032193571" className="flex items-center gap-3 hover:text-gold transition"><Phone className="w-4 h-4 text-gold" /> (603) 219-3571</a>
            <a href="https://linkedin.com/in/bhola-siwakoti-mba-370a2a40" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold transition"><Linkedin className="w-4 h-4 text-gold" /> LinkedIn Profile</a>
            <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-4 h-4 text-gold" /> Liberty Township, Ohio</p>
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
