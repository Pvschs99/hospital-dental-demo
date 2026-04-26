import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group h-14 w-14 rounded-full bg-[oklch(0.72_0.18_150)] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-smooth"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+15551234567"
        aria-label="Call now"
        className="group h-14 w-14 rounded-full bg-deep text-deep-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-smooth"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
