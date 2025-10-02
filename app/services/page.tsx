import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We craft experiences that exceed expectations—blending creativity, precision, and seamless execution. From grand gatherings to intimate moments, every event is designed to captivate, connect, and leave a lasting impression.",
  openGraph: {
    title: "Services - HappyCraft Events",
    description:
      "We craft experiences that exceed expectations—blending creativity, precision, and seamless execution. From grand gatherings to intimate moments, every event is designed to captivate, connect, and leave a lasting impression.",
    images: ["/og-graph/services.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
