import { createFileRoute, Link } from "@tanstack/react-router";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { DOCTOR } from "@/components/site/data";
import { Award, GraduationCap, Stethoscope, Calendar } from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Dr. Ethan Carter — Lumière Dental Care" },
      { name: "description", content: "Meet Dr. Ethan Carter, DDS — board-certified prosthodontist with 15+ years of advanced cosmetic and implant dentistry experience." },
      { property: "og:title", content: "Dr. Ethan Carter — Lumière Dental Care" },
      { property: "og:description", content: "Board-certified prosthodontist with 15+ years of advanced experience." },
    ],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Meet your dentist" title="Care led by craftsmanship" />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-accent/30" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
                <img
                  src={doctorPortrait}
                  alt={DOCTOR.name}
                  width={1024}
                  height={1024}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl text-deep">{DOCTOR.name}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{DOCTOR.qualification}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: "Education", value: "DDS, UCSF · MSc, NYU" },
                { icon: Stethoscope, label: "Specialty", value: "Cosmetic & Implant Dentistry" },
                { icon: Award, label: "Experience", value: DOCTOR.experience },
                { icon: Calendar, label: "Patients treated", value: "5,000+ smiles" },
              ].map((it) => (
                <div key={it.label} className="rounded-2xl border border-border/60 bg-card p-5 flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-mist text-primary flex items-center justify-center shrink-0">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.label}</div>
                    <div className="text-deep mt-1 font-medium">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl text-deep">About Dr. Carter</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{DOCTOR.bio}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Beyond the clinic, Dr. Carter lectures internationally on minimally invasive
                cosmetic dentistry and mentors the next generation of dental professionals.
              </p>
            </div>

            <ul className="mt-6 space-y-2.5">
              {DOCTOR.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              to="/appointment"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-deep text-deep-foreground px-7 py-3.5 text-sm font-medium hover:shadow-glow transition-smooth"
            >
              Book a consultation with Dr. Carter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
