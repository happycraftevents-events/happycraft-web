"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { OurCustomerData } from "@/data";
import { ScrollReveal } from "./scroll-reveal";

export function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5; // show 5 items at a time

  useEffect(() => {
    const maxIndex = Math.max(0, OurCustomerData.length - visibleCount);
    if (maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <ScrollReveal direction="up" delay={400}>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Trusted Partners
            </h2>
            <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground">
              Trusted by leading organizations
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {OurCustomerData.map((media, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="flex items-center justify-center h-20 bg-muted/30 rounded-lg">
                    <Image
                      src={media.logo || "/fallback/placeholder.svg"}
                      alt={media.name}
                      width={68}
                      height={68}
                      className="max-h-14 max-w-full object-contain opacity-100 hover:opacity-100 transition-opacity cursor-pointer"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
