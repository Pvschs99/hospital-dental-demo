import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SERVICES } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lumière Dental Care" },
      { name: "description", content: "Cleanings, root canals, dental implants, braces, aligners and cosmetic dentistry — gentle, modern care for every smile." },
      { property: "og:title", content: "Dental Services — Lumière Dental Care" },
      { property: "og:description", content: "Comprehensive dental care from preventive to cosmetic." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our services"
            title="Care that covers every smile"
            description="A full spectrum of dental services — delivered with the precision of specialists and the warmth of friends."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group rounded-3xl bg-card border border-border/60 p-8 hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              >
                <div className="h-14 w-14 rounded-2xl bg-mist text-primary flex items-center justify-center group-hover:bg-deep group-hover:text-deep-foreground transition-smooth">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-deep">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                <Link
                  to="/appointment"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep hover:text-accent transition-smooth"
                >
                  Book this treatment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-gradient-deep text-deep-foreground p-10 md:p-14 text-center">
            <h3 className="font-display text-3xl md:text-4xl">Not sure which treatment is right for you?</h3>
            <p className="mt-4 text-deep-foreground/70 max-w-xl mx-auto">
              Book a no-pressure consultation and we'll design a personalised plan together.
            </p>
            <Link
              to="/appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-deep-foreground text-deep px-7 py-3.5 text-sm font-medium hover:bg-mist transition-smooth"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
