import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                draggable={false}
                src="/logo/hce.png"
                alt="HappyCraft Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
              <div className="text-xl font-bold text-white">
                HappyCraft Event
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-sm text-sm">
              Where creativity meets perfection — HappyCraft Events crafts
              experiences that inspire, engage, and delight.
            </p>
            <div className="flex space-x-4 justify-start">
              <Link
                href="https://www.instagram.com/_happycraftevents_/"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                title="Instagram"
              >
                <Image
                  draggable={false}
                  src="/socials/instagram.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.facebook.com/p/Happycraft-Hospitality-And-Events-100063680694373/"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                title="Facebook"
              >
                <Image
                  draggable={false}
                  src="/socials/facebook.png"
                  alt="Facebook"
                  width={22}
                  height={22}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href={`https://wa.me/+919903622236?text=${encodeURIComponent(
                  "Hello, I would like to enquire about your event services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                title="WhatsApp"
              >
                <Image
                  draggable={false}
                  src="/socials/whatsapp.png"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left lg:-ml-4">
            <h3 className="font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left lg:-ml-10">
            <h3 className="font-semibold mb-4 text-sm">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Product Launches
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Pre-Wedding Shoots
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Corporate Events
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Conference & Seminars
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Artist Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Brands */}
          <div className="text-left lg:-ml-8">
            <h3 className="font-semibold mb-4 text-sm">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://indiawholesalemarket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors block"
                >
                  <div className="font-medium text-sm">
                    India Wholesale Market
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    B2B Business Platform
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-primary transition-colors block"
                >
                  <div className="font-medium text-sm">HappyCraft Event</div>
                  <div className="text-xs text-white/60 mt-1">
                    Event Management
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left lg:-ml-6">
            <h3 className="font-semibold mb-4 text-sm">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 mt-0.5 flex-shrink-0">
                  <MapPin className="h-3 w-3 text-primary-foreground" />
                </div>
                <div className="text-sm text-left">
                  <p>
                    P-43, Sec-B, Metropolitan, Tangra, Kolkata, West Bengal
                    700015
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 flex-shrink-0">
                  <Mail className="h-3 w-3 text-primary-foreground" />
                </div>
                <Link
                  href="mailto:happycraftevents@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  happycraftevents@gmail.com
                </Link>
              </div>

              <div className="flex items-center space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 flex-shrink-0">
                  <Phone className="h-3 w-3 text-primary-foreground" />
                </div>
                <Link
                  href="tel:+919903622236"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +91 9903622236
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} HappyCraft Event. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 lg:mr-12 mr-0">
            <div className="flex space-x-6 font-sans text-sm opacity-90">
              <span className="hover:opacity-100 cursor-auto transition-opacity">
                Designed & Crafted By{" "}
                <Link
                  href="https://dipakdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <strong>Dipak</strong>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
