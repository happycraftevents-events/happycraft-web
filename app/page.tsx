import type { Metadata } from "next"
import { HomeContent } from "@/components/pages/home-content"

export const metadata: Metadata = {
  title: "Home | HappyCraft Events",
  description: "Begin an extraordinary journey with HappyCraft Events. Design, delight, and inspire with India's premier corporate event management company, where every moment is crafted to perfection.",
  openGraph: {
    title: "HappyCraft Events - Top Event Management Company in India",
    description: "Begin an extraordinary journey with HappyCraft Events. Design, delight, and inspire with India's premier corporate event management company.",
    images: ["/og-graph/home.jpg"],
  },
}

export default function HomePage() {
  return <HomeContent />
}
