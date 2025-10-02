import type { Metadata } from "next"
import { GalleryContent } from "@/components/pages/gallery-content"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our portfolio of extraordinary events and celebrations. Each image tells a story of creativity, precision, and unforgettable experiences crafted with passion.",
  openGraph: {
    title: "Gallery - HappyCraft Events",
    description: "Explore our portfolio of extraordinary events and celebrations. Each image tells a story of creativity, precision, and unforgettable experiences crafted with passion.",
    images: ["/og-graph/gallery.jpg"],
  },
}

export default function GalleryPage() {
  return <GalleryContent />
}
