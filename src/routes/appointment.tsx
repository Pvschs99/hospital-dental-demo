import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/appointment")({
  head: () => ({ meta: [{ title: "Book Appointment — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/appointment.html" title="Book Appointment" />,
});
