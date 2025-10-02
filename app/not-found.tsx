import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | HappyCraft Events",
  description:
    "Oops! The page you are looking for does not exist. Explore our events, celebrity gatherings, and award-winning experiences at HappyCraft Events.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-muted/20 to-primary/5 text-foreground text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent opacity-90">
            404
          </h1>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm md:text-xl text-muted-foreground mb-2 leading-relaxed">
          The page you're looking for seems to have wandered off.
        </p>
        <p className=" text-sm md:text-xl text-muted-foreground mb-8">
          Don't worry, even our best events sometimes take unexpected turns!
        </p>

        {/* Action buttons */}
        <div className="flex flex-row sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer min-w-[160px]"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-muted-foreground cursor-pointer min-w-[160px]"
            >
              <Search className="w-4 h-4 mr-2" />
              Our Services
            </Button>
          </Link>
        </div>

        {/* Popular links */}
        <div className="mt-6 pt-6 border-t border-muted/30">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
