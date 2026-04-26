import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, ShieldCheck, HeartPulse, Microscope, Sparkles, MapPin, Clock } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SERVICES, REVIEWS, DOCTOR } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dental Care — Your Smile, Our Priority" },
      { name: "description", content: "Advanced dental care with experienced professionals. Book a comfortable, premium dental experience today." },
      { property: "og:title", content: "Lumière Dental Care — Your Smile, Our Priority" },
      { property: "og:description", content: "Advanced dental care with experienced professionals." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyUs />
      <DoctorHighlight />
      <ReviewsSection />
      <CtaBanner />
      <LocationPreview />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mist blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center py-16 lg:py-28">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border text-xs font-medium uppercase tracking-[0.18em] text-deep">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Trusted by 5,000+ patients
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium text-deep leading-[0.98]">
            Your Smile,<br />
            <span className="italic text-primary">Our Priority.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Advanced dental care with experienced professionals — delivered in a calm,
            elegant clinic designed around your comfort.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-deep text-deep-foreground px-7 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-border text-deep px-7 py-3.5 text-sm font-medium hover:bg-background transition-smooth"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <span className="font-semibold text-deep">4.9/5</span> from 800+ Google reviews
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elevated">
            <img
              src={heroSmile}
              alt="Patient smiling confidently after dental treatment"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="hidden md:flex absolute -left-6 top-12 bg-background/95 backdrop-blur rounded-2xl shadow-card p-4 items-center gap-3 animate-float">
            <div className="h-11 w-11 rounded-xl bg-mist flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Certified by</div>
              <div className="text-sm font-semibold text-deep">ADA & AACD</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-4 bottom-10 bg-background/95 backdrop-blur rounded-2xl shadow-card p-4 items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
            <div className="h-11 w-11 rounded-xl bg-accent/30 flex items-center justify-center">
              <HeartPulse className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Pain-free</div>
              <div className="text-sm font-semibold text-deep">Sedation available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { v: "5,000+", l: "Happy patients" },
    { v: "15+", l: "Years experience" },
    { v: "98%", l: "5-star reviews" },
    { v: "100%", l: "Sterile environment" },
  ];
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-3xl md:text-4xl text-deep">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we offer"
          title="Dentistry, beautifully delivered"
          description="From routine care to full smile design — every treatment is gentle, precise and tailored to you."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl bg-card border border-border/60 p-7 hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-mist flex items-center justify-center text-primary group-hover:bg-deep group-hover:text-deep-foreground transition-smooth">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-deep hover:text-accent transition-smooth"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Microscope,
      title: "Modern equipment",
      text: "Digital scanners, 3D imaging and same-day crowns for precise, efficient treatment.",
    },
    {
      icon: HeartPulse,
      title: "Gentle patient care",
      text: "Calming spaces, transparent communication and sedation options when you need them.",
    },
    {
      icon: ShieldCheck,
      title: "Experienced team",
      text: "Board-certified specialists with 15+ years of advanced training and craftsmanship.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated">
            <img
              src={clinicInterior}
              alt="Modern minimalist dental clinic interior with teal accents"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Why choose us"
            title="A calmer, more thoughtful kind of dentistry"
            description="We've reimagined the dental visit — with modern technology, a soothing environment and care that treats you as a whole person."
            align="left"
          />
          <div className="mt-10 space-y-5">
            {items.map((it) => (
              <div key={it.title} className="flex gap-5 p-5 rounded-2xl border border-border/60 bg-card hover:shadow-card transition-smooth">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-mist text-primary flex items-center justify-center">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-deep">{it.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorHighlight() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <SectionHeader
            eyebrow="Meet your dentist"
            title={DOCTOR.name}
            description={DOCTOR.bio}
            align="left"
          />
          <div className="mt-6 space-y-2 text-sm text-deep">
            <div><span className="text-muted-foreground">Qualification —</span> {DOCTOR.qualification}</div>
            <div><span className="text-muted-foreground">Experience —</span> {DOCTOR.experience}</div>
          </div>
          <ul className="mt-6 space-y-2.5">
            {DOCTOR.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <Link
            to="/doctor"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep text-deep-foreground px-6 py-3 text-sm font-medium hover:shadow-glow transition-smooth"
          >
            View full profile
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-accent/30" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elevated">
              <img
                src={doctorPortrait}
                alt={`${DOCTOR.name}, ${DOCTOR.qualification}`}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="Patient stories"
          title="Trusted by smiles like yours"
          description="Real words from patients who chose Lumière for their dental care."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-deep text-deep-foreground px-6 py-3 text-sm font-medium hover:shadow-glow transition-smooth"
          >
            View More Reviews on Google
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-background border border-border text-deep px-6 py-3 text-sm font-medium hover:bg-mist transition-smooth"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({
  name,
  role,
  rating,
  text,
}: {
  name: string;
  role: string;
  rating: number;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card p-7 shadow-card hover:shadow-elevated transition-smooth">
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-deep leading-relaxed">"{text}"</p>
      <div className="mt-6 pt-5 border-t border-border/60">
        <div className="font-medium text-deep">{name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
      </div>
    </article>
  );
}

function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-deep text-deep-foreground p-10 md:p-16">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight">
                Ready for a brighter, healthier smile?
              </h3>
              <p className="mt-4 text-deep-foreground/70 max-w-md">
                Book your consultation today — we'll design a treatment plan as unique as you are.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/appointment"
                className="rounded-full bg-deep-foreground text-deep px-7 py-3.5 text-sm font-medium hover:bg-mist transition-smooth"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15551234567"
                className="rounded-full border border-deep-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-deep-foreground/10 transition-smooth"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPreview() {
  return (
    <section className="pb-8">
      <div className="container-x">
        <SectionHeader
          eyebrow="Visit us"
          title="Find your way to Lumière"
          description="Conveniently located in the heart of San Francisco."
        />
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1 rounded-3xl bg-card border border-border/60 p-7 space-y-5">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Address</div>
                <div className="text-deep mt-1">120 Elm Avenue, Suite 4<br />San Francisco, CA 94110</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Hours</div>
                <div className="text-deep mt-1 text-sm">
                  Mon–Fri · 8:00 — 18:00<br />
                  Sat · 9:00 — 14:00<br />
                  Sun · Closed
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                <a href="tel:+15551234567" className="text-deep mt-1 block">(555) 123-4567</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border/60 shadow-card aspect-[16/10] lg:aspect-auto min-h-[320px]">
            <iframe
              title="Clinic location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7549%2C-122.4094%2C37.7649&layer=mapnik&marker=37.7599%2C-122.4144"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
