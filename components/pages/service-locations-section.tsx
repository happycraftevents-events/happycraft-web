"use client";

import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { servicesCities } from "@/data/home-data";
import Image from "next/image";

export function ServiceLocationsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <ScrollReveal direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exceptional Events Across India
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Delivered exceptional events across 10+ major cities — spanning
              North, South, East, West, and Central India. Our pan-India
              presence ensures consistent quality, seamless execution, and deep
              local expertise—wherever your event takes place.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {servicesCities.map((city, index) => (
                <ScrollReveal key={city} direction="up" delay={index * 100}>
                  <div className="flex items-center">
                    <div className="bg-primary rounded-full p-1 mr-2">
                      <MapPin className="h-4 w-4 text-primary-foreground" />
                    </div>
                    {city}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal direction="right" delay={200}>
              <div className="flex justify-center max-w-full h-auto">
                <Image
                  src="home/other/map.png"
                  alt="India map showing our service locations"
                  className="rounded-lg shadow-lg scale-105 hover:scale-107 w-full h-auto"
                  draggable={false}
                  loading="lazy"
                  width={500}
                  height={300}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
