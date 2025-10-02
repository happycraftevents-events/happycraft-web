"use client";

import { CheckCircle, Users, Award, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-3 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Experience and Expertise</h3>
                <p className="text-muted-foreground">
                  HappyCraft Events combines experience with unmatched expertise
                  to deliver extraordinary, impactful events.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2 */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-3 flex-shrink-0">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cost Effectiveness</h3>
                <p className="text-muted-foreground">
                  We deliver exceptional events without compromising your
                  budget.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-3 flex-shrink-0">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Our portfolio reflects our dedication to excellence and
                  flawless execution.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4 */}
          <ScrollReveal direction="up" delay={500}>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-3 flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Honest, transparent communication from start to finish.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
