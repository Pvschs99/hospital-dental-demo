import { createFileRoute } from "@tanstack/react-router";
import { StaticFrame } from "@/components/site/StaticFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Incisors Dental Care — Your Smile, Our Priority" },
      { name: "description", content: "Advanced dental care with experienced professionals. Book a comfortable, premium dental experience today." },
    ],
  }),
  component: () => <StaticFrame src="/index.html" title="Incisors Dental — Home" />,
});
