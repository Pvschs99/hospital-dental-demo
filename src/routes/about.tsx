import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Incisors Dental Care" }] }),
  component: () => <StaticFrame src="/about.html" title="About" />,
});
