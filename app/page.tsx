import type { Metadata } from "next"
import { HomeContent } from "@/components/pages/home-content"

export const metadata: Metadata = {
  title: "Home | HappyCraft Event LLP",
  description: "Begin an extraordinary journey with HappyCraft Event LLP. Design, delight, and inspire with India's premier corporate event management company, where every moment is crafted to perfection.",
  openGraph: {
    title: "HappyCraft Event LLP - Top Event Management Company in India",
    description: "Begin an extraordinary journey with HappyCraft Event LLP. Design, delight, and inspire with India's premier corporate event management company.",
    images: ["https://happycraftevent.in/og-graph/home.jpg"],
  },
}

export default function HomePage() {
  return <HomeContent />
}
