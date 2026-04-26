import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare, Check } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment —  Incisors Dental Care" },
      { name: "description", content: "Book your dental appointment online — quick, easy and confidential. We'll confirm within hours." },
      { property: "og:title", content: "Book an Appointment —  Incisors Dental Care" },
      { property: "og:description", content: "Reserve your spot at  Incisors Dental Care." },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Book online"
            title="Reserve your visit"
            description="Tell us when works best — we'll confirm your appointment within a few hours."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-3xl bg-gradient-deep text-deep-foreground p-8">
              <h3 className="font-display text-2xl">What to expect</h3>
              <ul className="mt-5 space-y-4 text-deep-foreground/80 text-sm">
                {[
                  "Confirmation by phone or email within hours",
                  "Detailed health questionnaire sent ahead",
                  "Complimentary first consultation",
                  "Transparent pricing — no surprises",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="h-6 w-6 rounded-full bg-deep-foreground/15 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-8">
              <h4 className="font-display text-lg text-deep">Prefer to call?</h4>
              <p className="mt-1 text-sm text-muted-foreground">We're here Mon–Sat.</p>
              <a
                href="tel:+91xxxxxxxxx"
                className="mt-4 inline-flex items-center gap-2 text-deep font-medium"
              >
                <Phone className="h-4 w-4" />
                +91xxxxxxxxx
              </a>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-3xl bg-card border border-border/60 p-10 text-center shadow-card">
                <div className="mx-auto h-16 w-16 rounded-full bg-mist text-primary flex items-center justify-center">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-3xl text-deep">Request received</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you — we'll be in touch within a few hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-deep text-deep-foreground px-6 py-3 text-sm font-medium hover:shadow-glow transition-smooth"
                >
                  Book another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card space-y-5"
              >
                <Field icon={User} label="Full name" type="text" placeholder="JOHN" required />
                <Field icon={Phone} label="Phone number" type="tel" placeholder="+91xxxxxxxxx" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field icon={Calendar} label="Preferred date" type="date" required />
                  <Field icon={Clock} label="Preferred time" type="time" required />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="h-3.5 w-3.5" />
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly what you'd like to discuss..."
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-deep placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-deep text-deep-foreground px-7 py-4 text-sm font-medium hover:shadow-glow transition-smooth"
                >
                  Book Appointment
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  By booking you agree to our privacy policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  icon: Icon,
  label,
  ...props
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-deep placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
      />
    </div>
  );
}
