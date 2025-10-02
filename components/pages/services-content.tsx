"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Heart,
  Rocket,
  Store,
  Megaphone,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services-data";
import { ScrollReveal } from "../scroll-reveal";
import { Testimonials } from "../testimonials";
import { QuoteModal } from "../quote-modal";

export function ServicesContent() {
  const handleLearnMore = (serviceTitle: string) => {
    // Scroll to contact section or redirect to contact page with service info
    window.location.href = `/contact?service=${encodeURIComponent(
      serviceTitle
    )}`;
  };

  return (
    <>
      {/* Hero Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="relative py-8 lg:py-6 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Our Services
              </Badge>
              <h1 className="text-2xl lg:text-4xl font-bold text-balance mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Comprehensive Event Management Services
              </h1>
              <p className="text-base md:text-lg text-muted-foreground text-pretty">
                From corporate conferences to dream weddings, we deliver
                exceptional experiences across all event types with unmatched
                creativity and precision.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <service.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group  bg-primary cursor-pointer text-white hover:bg-primary/90"
                      onClick={() => handleLearnMore(service.title)}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal direction="up" delay={200}>
        <Testimonials />
      </ScrollReveal>
      {/* Empowering Brands Carousel */}

      <ScrollReveal direction="up" delay={200}>
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Empowering 50+ Brands Digitally
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Trusted by leading brands across industries to deliver
                exceptional event experiences.
              </p>
              <QuoteModal
                heading="Ready to Elevate Your Event? Let's Talk!"
                SubmitButtonText="Send"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white hover:bg-secondary text-secondary-foreground cursor-pointer"
                >
                  Connect With Our Experts
                </Button>
              </QuoteModal>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
