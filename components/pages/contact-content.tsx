"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import { contactInfo } from "@/data/contact-data";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "../scroll-reveal";

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="relative py-8 lg:py-6 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Contact Us
              </Badge>
              <h1 className="text-2xl lg:text-4xl font-bold text-balance mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-base md:text-lg text-muted-foreground text-pretty">
                Have an Event Vision? Let's Bring It to Life with Unforgettable
                Experiences!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-2xl">
                      Let's Start Planning
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Ready to create something extraordinary? Reach out to us
                      and let's discuss how we can bring your event vision to
                      life.
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {/* Contact Details */}
                    <div className="space-y-6 mb-6 flex-1">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary rounded-full p-2 flex-shrink-0">
                          <MapPin className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Visit Us</h3>
                          <p className="text-muted-foreground text-sm">
                            {contactInfo.address.line1}
                            <br />
                            {contactInfo.address.line2}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary rounded-full p-2 flex-shrink-0">
                          <Mail className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email Us</h3>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary rounded-full p-2 flex-shrink-0">
                          <Phone className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Call Us</h3>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary rounded-full p-2 flex-shrink-0">
                          <Clock className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Business Hours</h3>
                          <div className="space-y-1 text-muted-foreground text-sm">
                            <p>{contactInfo.businessHours.weekdays}</p>
                            <p>{contactInfo.businessHours.saturday}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h3 className="font-semibold mb-3">Follow Us</h3>
                      <div className="flex space-x-3">
                        <Link
                          href="https://www.instagram.com/_happycraftevents_/"
                          target="_blank"
                          className=" hover:text-primary transition-colors block"
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer hover:bg-primary"
                          >
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link
                          href="https://www.facebook.com/p/Happycraft-Hospitality-And-Events-100063680694373/"
                          target="_blank"
                          className=" hover:text-primary transition-colors block"
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer hover:bg-primary"
                          >
                            <Facebook className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="flex flex-col h-full">
                <ContactForm SubmitButtonText="Send Message" />
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Located in the heart of Kolkata, we're easily accessible and
                ready to meet with you.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HappyCraft Events Office Location"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
