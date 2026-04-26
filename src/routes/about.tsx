import { createFileRoute } from "@tanstack/react-router";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { DOCTOR } from "@/components/site/data";
import { Heart, Eye, Compass } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Incisors Dental Care" },
      { name: "description", content: "Discover Lumière Dental Care — a calm, modern clinic led by Dr. JOHN, dedicated to gentle, premium dentistry." },
      { property: "og:title", content: "About Incisors Dental Care" },
      { property: "og:description", content: "Premium dental care with a thoughtful, patient-first approach." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="About us"
            title="A calmer, more thoughtful clinic"
            description="Incisors Dental Care was founded with a single belief — that exceptional dentistry should feel as good as it looks. Every detail of our space, our team and our process is designed around your comfort."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img
              src={clinicInterior}
              alt="Incisors dental clinic interior"
              width={1536}
              height={1024}
              loading="lazy"
              className="rounded-[2rem] w-full aspect-[4/3] object-cover shadow-elevated"
            />
          </div>
          <div className="lg:col-span-6">
            <h3 className="font-display text-3xl md:text-4xl text-deep">Our clinic environment</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Step inside and you'll notice the difference immediately. Soft natural light,
              calming teal tones, premium materials and a gentle scent of citrus — designed
              to soothe rather than sterilise. Our state-of-the-art operatories are fully
              digital, paperless and HEPA-filtered for total peace of mind.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From the warm welcome at reception to the heated blankets in your chair,
              every touchpoint is intentional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container-x">
          <SectionHeader eyebrow="Our principles" title="Mission & values" />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Compass,
                title: "Our Mission",
                text: "To redefine the dental visit — making world-class care feel calm, considered and genuinely human.",
              },
              {
                icon: Heart,
                title: "Patient First",
                text: "Every plan is built around you — your goals, your comfort and your timeline. No upsells, ever.",
              },
              {
                icon: Eye,
                title: "Honest Craft",
                text: "We practice evidence-based dentistry with the precision of master craftsmen and the warmth of friends.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl bg-card border border-border/60 p-8 shadow-card">
                <div className="h-12 w-12 rounded-2xl bg-mist text-primary flex items-center justify-center">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-display text-xl text-deep">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src={doctorPortrait}
              alt={DOCTOR.name}
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-[2rem] w-full aspect-square object-cover shadow-elevated"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist text-mist-foreground text-xs font-medium uppercase tracking-[0.18em]">
              Lead dentist
            </span>
            <h3 className="mt-4 font-display text-4xl md:text-5xl text-deep">{DOCTOR.name}</h3>
            <div className="mt-3 text-muted-foreground">
              {DOCTOR.qualification} · {DOCTOR.experience}
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">{DOCTOR.bio}</p>
            <ul className="mt-6 space-y-2.5">
              {DOCTOR.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
