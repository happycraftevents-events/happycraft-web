import type { Metadata } from "next"
import { ContactContent } from "@/components/pages/contact-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have an Event Vision? Let's Bring It to Life with Unforgettable Experiences! Get in touch with HappyCraft Event LLP for professional event management services.",
  openGraph: {
    title: "Contact Us - HappyCraft Event LLP",
    description: "Have an Event Vision? Let's Bring It to Life with Unforgettable Experiences! Get in touch with HappyCraft Event LLP for professional event management services.",
    images:  ["https://happycraftevent.in/og-graph/contact.jpg"],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
