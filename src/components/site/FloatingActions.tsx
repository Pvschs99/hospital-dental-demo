import { Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "./data";

export function FloatingActions() {
  // wa.me requires the number in international format without "+" or spaces
  const waNumber = CLINIC.phoneE164.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    CLINIC.whatsappMessage,
  )}`;
  const telHref = `tel:${CLINIC.phoneE164}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${CLINIC.name} on WhatsApp at ${CLINIC.phoneDisplay}`}
        className="group flex items-center gap-2 rounded-full bg-[oklch(0.72_0.18_150)] text-white pl-4 pr-5 py-3 shadow-elevated hover:scale-[1.03] transition-smooth"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">
          WhatsApp {CLINIC.phoneDisplay}
        </span>
        <span className="text-sm font-medium sm:hidden">WhatsApp</span>
      </a>
      <a
        href={telHref}
        aria-label={`Call ${CLINIC.name} at ${CLINIC.phoneDisplay}`}
        className="group flex items-center gap-2 rounded-full bg-deep text-deep-foreground pl-4 pr-5 py-3 shadow-elevated hover:scale-[1.03] transition-smooth"
      >
        <Phone className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">
          {CLINIC.phoneDisplay}
        </span>
        <span className="text-sm font-medium sm:hidden">Call</span>
      </a>
    </div>
  );
}
