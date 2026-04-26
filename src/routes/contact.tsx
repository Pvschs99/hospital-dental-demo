import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/contact.html" title="Contact" />,
});
