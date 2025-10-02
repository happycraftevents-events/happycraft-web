"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";
import { testimonials } from "@/data/testimonial-data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <ScrollReveal direction="up" delay={400}>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the brands and individuals who have experienced the
              HappyCraft Events difference.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-3">
                    {getInitials(currentTestimonial.name)}
                  </div>

                  <div className="flex">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-secondary"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div>
                  <div className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </div>
                </div>
              </CardContent>

              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer hover:bg-primary/90 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer hover:bg-primary/90 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-secondary"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
