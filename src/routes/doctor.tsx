import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/doctor")({
  head: () => ({ meta: [{ title: "Dr. JOHN — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/doctor.html" title="Doctor" />,
});
