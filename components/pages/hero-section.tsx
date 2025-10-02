"use client";

import { ArrowRight, Pin, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EnhancedCarousel } from "../enhanced-carousel";
import { carouselItems } from "@/data";

export function HeroSection() {
  const COLOR_CLASSES = [
    "text-[#FCA311]",
    "text-[#174D38]",
    "text-[#FFD166]",
    "text-[#06D6A0]",
    "text-[#118AB2]",
    "text-[#175287]",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  const rotateColor = () =>
    setColorIndex((i) => (i + 1) % COLOR_CLASSES.length);

  useEffect(() => {
    const colorTimer = setInterval(rotateColor, 1000);
    return () => {
      clearInterval(colorTimer);
    };
  }, []);

  return (
    <>
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <Badge
                  variant="default"
                  className="mb-6 text-sm font-medium text-white mx-auto w-fit"
                >
                  Premium Event Management Across India
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-balance mb-6 text-muted-foreground">
                  <span
                    className={`transition-colors duration-1000 ease-in-out ${COLOR_CLASSES[colorIndex]}`}
                  >
                    HappyCraft Events
                  </span>{" "}
                  Creating Iconic Brand, Celebrity & Luxury Experiences
                </h1>
                <p className="text-base md:text-lg text-muted-foreground text-pretty mb-8 max-w-md mx-auto">
                  From high-profile brand launches and celebrity-studded galas
                  to immersive exhibitions and bespoke stall setups in luxury
                  hotels, HappyCraft Events delivers world-class event
                  experiences.
                </p>
              </div>
            </ScrollReveal>

            {/* Hanging Photos for Mobile - Clean 2x2 Grid */}
            <ScrollReveal direction="up" delay={200}>
              <div className="relative h-[320px] mb-8 w-full px-4">
                {/* Hanging Thread Line */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>

                {/* Top Row - First Two Photos */}
                {/* First Photo - Corporate Event (Top Left) */}
                <div className="absolute top-6 left-4 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-4 h-4 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-32 h-40 bg-white p-1.5 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[sway_2.5s_ease-in-out_infinite]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h1.jpg"
                        alt="Professional corporate event"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Photo - Wedding Event (Top Right) */}
                <div className="absolute top-6 right-4 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-4 h-4 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-32 h-40 bg-white p-1.5 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[gentleSway_3s_ease-in-out_infinite_0.5s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h2.jpg"
                        alt="Luxury wedding decoration"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Last Two Photos */}
                {/* Third Photo - Tech Conference (Bottom Left) */}
                <div className="absolute bottom-6 left-8 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-4 h-4 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-28 h-36 bg-white p-1.5 rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[slowSway_3.5s_ease-in-out_infinite_1s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h3.jpg"
                        alt="Tech conference stage"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Photo - product Launch (Bottom Right) */}
                <div className="absolute bottom-6 right-8 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-4 h-4 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-28 h-36 bg-white p-1.5 rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[subtleSway_2.8s_ease-in-out_infinite_1.5s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h4.jpg"
                        alt="Product launch event"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="text-center  mt-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-sweep hover-lift cursor-pointer font-medium"
                  >
                    Get in Touch <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="text-left animate-slide-in-left">
                <Badge
                  variant="default"
                  className="mb-6 text-sm font-medium text-white w-fit"
                >
                  Premium Event Management Across India
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-6 text-muted-foreground">
                  <span
                    className={`transition-colors duration-1000 ease-in-out ${COLOR_CLASSES[colorIndex]}`}
                  >
                    HappyCraft Events
                  </span>{" "}
                  Creating Iconic Brand, Celebrity & Luxury Experiences
                </h1>
                <p className="text-lg xl:text-xl text-muted-foreground text-pretty mb-8">
                  From high-profile brand launches and celebrity-studded galas
                  to immersive exhibitions and bespoke stall setups in luxury
                  hotels, HappyCraft Events delivers exceptional event
                  experiences across India. We blend creativity, precision, and
                  hospitality excellence to make every occasion unforgettable.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-sweep hover-lift cursor-pointer font-medium"
                  >
                    Get in Touch <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="relative w-full h-[400px] xl:h-[440px]">
                {/* Hanging Thread Line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>

                {/* Top Row - First Two Photos */}
                {/* First Photo - Corporate Event (Top Left) */}
                <div className="absolute top-6 left-8 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-6 h-6 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-40 h-48 xl:w-44 xl:h-52 bg-white p-2 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[sway_2.5s_ease-in-out_infinite]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h1.jpg"
                        alt="Professional corporate event"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Photo - Wedding Event (Top Right) */}
                <div className="absolute top-6 right-8 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-6 h-6 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-40 h-48 xl:w-44 xl:h-52 bg-white p-2 rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[gentleSway_3s_ease-in-out_infinite_0.5s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h2.jpg"
                        alt="Luxury wedding decoration"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Last Two Photos */}
                {/* Third Photo - Tech Conference (Bottom Left) */}
                <div className="absolute bottom-6 left-16 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-6 h-6 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-38 h-46 xl:w-42 xl:h-50 bg-white p-2 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[slowSway_3.5s_ease-in-out_infinite_1s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h3.jpg"
                        alt="Tech conference stage"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Photo - Product Launch (Bottom Right) */}
                <div className="absolute bottom-6 right-16 group">
                  {/* Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Pin className="w-6 h-6 text-muted-foreground/60 transform rotate-45" />
                  </div>
                  {/* Thread */}
                  <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-muted-foreground/20 transform -translate-x-1/2"></div>
                  {/* Photo */}
                  <div className="w-38 h-46 xl:w-42 xl:h-50 bg-white p-2 rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-[subtleSway_2.8s_ease-in-out_infinite_1.5s]">
                    <div className="w-full h-full rounded overflow-hidden">
                      <Image
                        src="/home/hanger/h4.jpg"
                        alt="Product launch event"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* Scroll Down Indicator */}
        <ScrollReveal direction="right" delay={200}>
          <div className="mt-8 flex flex-col items-center">
            <div className="text-2xl font-bold text-primary animate-pulse mb-2">
              ↓
            </div>
            <p className="text-sm font-semibold text-gray-600  tracking-wider">
              Scroll Down
            </p>
          </div>
        </ScrollReveal>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-muted-foreground">
              Our Event Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               We specialize in turning ideas into unforgettable events—from
              exhibitions and seminars to artist-led celebrations and weddings
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <EnhancedCarousel items={carouselItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
