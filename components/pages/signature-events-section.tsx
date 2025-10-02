"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { signatureEvents } from "@/data/home-data";
import Image from "next/image";

export function SignatureEventsSection() {
  const [visibleCount, setVisibleCount] = useState(signatureEvents.length);

  useEffect(() => {
    const update = () => {
      // If viewport is mobile (less than 768px), show only first 4 events
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setVisibleCount(Math.min(4, signatureEvents.length));
      } else {
        setVisibleCount(signatureEvents.length);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Signature Events
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our recent masterpieces that showcase our commitment to
            excellence and innovation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureEvents.slice(0, visibleCount).map((event, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card className="overflow-hidden hover-lift transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    draggable={false}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="mb-1 text-xs">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-xs space-x-3">
                    <div className="flex items-center">
                      <div className="bg-primary rounded-full p-1 mr-2">
                        <MapPin className="h-3 w-3 text-primary-foreground" />
                      </div>
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
