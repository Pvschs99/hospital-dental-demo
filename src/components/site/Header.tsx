import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctor", label: "Doctor" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-deep text-primary-foreground shadow-soft">
            <ToothMark />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-deep">Lumière</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Dental Care
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-deep hover:bg-mist transition-smooth"
              activeProps={{ className: "text-deep bg-mist" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm font-medium text-deep hover:text-accent transition-smooth"
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Link
            to="/appointment"
            className="rounded-full bg-deep text-deep-foreground px-5 py-2.5 text-sm font-medium hover:shadow-glow hover:bg-primary transition-smooth"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-mist text-deep"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container-x flex flex-col py-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-deep hover:bg-mist transition-smooth"
                activeProps={{ className: "bg-mist" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-deep text-deep-foreground px-5 py-3 text-center text-base font-medium"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ToothMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5.5c-2.5-2-6.5-1.5-7 2 -.4 3 .8 6 1.7 8.8.6 1.9 1.6 4 2.9 4 1.2 0 1.4-2 2.4-2s1.2 2 2.4 2c1.3 0 2.3-2.1 2.9-4 .9-2.8 2.1-5.8 1.7-8.8 -.5-3.5-4.5-4-7-2Z" />
    </svg>
  );
}
