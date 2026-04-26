import {
  Sparkles,
  Activity,
  Anchor,
  Smile,
  Stars,
  Shield,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description:
      "Gentle professional cleaning to remove plaque and brighten your natural smile.",
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    description:
      "Pain-free, precision endodontic care that preserves your natural tooth.",
  },
  {
    icon: Anchor,
    title: "Dental Implants",
    description:
      "Permanent, lifelike replacements crafted for comfort, function and beauty.",
  },
  {
    icon: Smile,
    title: "Braces & Aligners",
    description:
      "Modern clear aligners and braces for a perfectly aligned, confident smile.",
  },
  {
    icon: Stars,
    title: "Cosmetic Dentistry",
    description:
      "Veneers, whitening and smile design tailored uniquely to your features.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description:
      "Holistic check-ups and education to keep dental issues at bay for life.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Olivia Martinez",
    role: "Patient since 2021",
    rating: 5,
    text:
      "The most calming dental experience I've ever had. Dr. Carter explained everything and the result is genuinely life changing.",
  },
  {
    name: "James Whitaker",
    role: "Implant patient",
    rating: 5,
    text:
      "From the moment I walked in, the clinic felt more like a luxury spa. Painless implant procedure and a flawless result.",
  },
  {
    name: "Priya Shah",
    role: "Aligner journey",
    rating: 5,
    text:
      "I finished my aligner journey here and could not be happier. The team is meticulous, warm and incredibly professional.",
  },
  {
    name: "Daniel Kim",
    role: "Family patient",
    rating: 5,
    text:
      "We trust the whole family's dental care to Lumière. My kids actually look forward to their visits — that says it all.",
  },
  {
    name: "Aisha Bello",
    role: "Cosmetic patient",
    rating: 5,
    text:
      "Stunning veneer work that looks completely natural. Dr. Carter has a real artist's eye for smile design.",
  },
] as const;

export const CLINIC = {
  name: "Lumière Dental Care",
  // E.164 format used for tel: and wa.me links
  phoneE164: "+15551234567",
  phoneDisplay: "(555) 123-4567",
  whatsappMessage:
    "Hi Lumière Dental Care, I'd like to book an appointment.",
} as const;

export const DOCTOR = {
  name: "Dr. Ethan Carter",
  qualification: "DDS, MSc Prosthodontics",
  experience: "15+ years of experience",
  bio: "Dr. Carter blends evidence-based dentistry with a deep commitment to patient comfort. A graduate of UCSF with advanced training in cosmetic and implant dentistry, he leads Lumière with calm precision and a passion for craftsmanship.",
  highlights: [
    "Member, American Academy of Cosmetic Dentistry",
    "Certified Invisalign® Diamond Provider",
    "Advanced Implantology Fellow",
  ],
};
