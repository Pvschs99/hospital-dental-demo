import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [{ title: "Reviews — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/reviews.html" title="Reviews" />,
});
