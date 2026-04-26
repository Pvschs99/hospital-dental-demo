import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/services.html" title="Services" />,
});
