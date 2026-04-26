import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-deep text-deep-foreground mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-deep-foreground/10 backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5.5c-2.5-2-6.5-1.5-7 2 -.4 3 .8 6 1.7 8.8.6 1.9 1.6 4 2.9 4 1.2 0 1.4-2 2.4-2s1.2 2 2.4 2c1.3 0 2.3-2.1 2.9-4 .9-2.8 2.1-5.8 1.7-8.8 -.5-3.5-4.5-4-7-2Z" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold">Lumière Dental</span>
          </div>
          <p className="text-sm text-deep-foreground/70 leading-relaxed">
            Premium, gentle dental care designed around you. Confidence in every smile.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 rounded-full border border-deep-foreground/20 flex items-center justify-center hover:bg-deep-foreground/10 transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-deep-foreground">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-deep-foreground/70">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/doctor", label: "Our Doctor" },
              { to: "/reviews", label: "Reviews" },
              { to: "/appointment", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-deep-foreground transition-smooth">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-deep-foreground/70">
            <li>Teeth Cleaning</li>
            <li>Root Canal Treatment</li>
            <li>Dental Implants</li>
            <li>Braces & Aligners</li>
            <li>Cosmetic Dentistry</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-deep-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>Abc Street, Suite 4<br />India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+15551234567">+91 xxxxxxxxx</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:hello@lumiere-dental.com">hello@incisors-dental.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-deep-foreground/50">
          <span>© {new Date().getFullYear()} Incisors Dental Care. All rights reserved.</span>
          <span>Crafted with care for healthier smiles.</span>
        </div>
      </div>
    </footer>
  );
}
