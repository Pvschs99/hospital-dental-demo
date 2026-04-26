import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumière Dental Care" },
      { name: "description", content: "Get in touch with Lumière Dental Care. Visit us at 120 Elm Avenue, San Francisco — call, email or message us anytime." },
      { property: "og:title", content: "Contact Lumière Dental Care" },
      { property: "og:description", content: "Phone, email, address and directions to our San Francisco clinic." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Get in touch"
            title="We'd love to hear from you"
            description="Have a question, feedback or just want to say hello? Reach out — we usually reply within a few hours."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Visit", value: "120 Elm Avenue, Suite 4\nSan Francisco, CA 94110" },
              { icon: Phone, title: "Call", value: "(555) 123-4567", href: "tel:+15551234567" },
              { icon: Mail, title: "Email", value: "hello@lumiere-dental.com", href: "mailto:hello@lumiere-dental.com" },
              { icon: Clock, title: "Hours", value: "Mon–Fri · 8:00–18:00\nSat · 9:00–14:00" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border/60 bg-card p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-mist text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.title}</div>
                  {item.href ? (
                    <a href={item.href} className="text-deep mt-1 block whitespace-pre-line font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-deep mt-1 whitespace-pre-line font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-3xl bg-card border border-border/60 p-10 text-center shadow-card">
                <div className="mx-auto h-16 w-16 rounded-full bg-mist text-primary flex items-center justify-center">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-3xl text-deep">Message sent</h3>
                <p className="mt-2 text-muted-foreground">Thanks for reaching out. We'll get back to you very soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Name" type="text" placeholder="Jane Doe" required />
                  <Input label="Email" type="email" placeholder="jane@email.com" required />
                </div>
                <Input label="Subject" type="text" placeholder="How can we help?" />
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message..."
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-deep placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-deep text-deep-foreground px-7 py-4 text-sm font-medium hover:shadow-glow transition-smooth inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-[2.5rem] overflow-hidden border border-border/60 shadow-card aspect-[16/8] min-h-[360px]">
            <iframe
              title="Clinic location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7549%2C-122.4094%2C37.7649&layer=mapnik&marker=37.7599%2C-122.4144"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-deep placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
      />
    </div>
  );
}
