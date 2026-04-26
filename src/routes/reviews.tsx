import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { REVIEWS } from "@/components/site/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews —  Incisors Dental Care" },
      { name: "description", content: "Read real reviews from  Incisors Dental Care patients — 4.9/5 from 800+ Google reviews." },
      { property: "og:title", content: "Patient Reviews —  Incisors Dental Care" },
      { property: "og:description", content: "Real words from patients who chose Lumière for their dental care." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Patient stories"
            title="4.9★ from 800+ reviews"
            description="Hear from the people who trust Lumière with their smiles — real, unedited words from our patients."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <article key={r.name} className="rounded-3xl border border-border/60 bg-card p-7 shadow-card hover:shadow-elevated transition-smooth">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-deep leading-relaxed">"{r.text}"</p>
                <div className="mt-6 pt-5 border-t border-border/60">
                  <div className="font-medium text-deep">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.role}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-deep text-deep-foreground px-7 py-3.5 text-sm font-medium hover:shadow-glow transition-smooth"
            >
              View More Reviews on Google
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-background border border-border text-deep px-7 py-3.5 text-sm font-medium hover:bg-mist transition-smooth"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
