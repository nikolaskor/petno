"use client";

import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Step = ({ icon: Icon, title, description }) => {
  return (
    <Card className="relative overflow-hidden border-none bg-background/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Finding Your Perfect Pet Should Be Easy
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The traditional pet adoption process is often complicated and
              time-consuming. We're changing that with a simple, trusted
              platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          <Step
            icon={Clock}
            title="Time-Consuming Search"
            description="Hours spent browsing multiple websites and making countless phone calls to find the right pet."
          />
          <Step
            icon={Shield}
            title="Trust Issues"
            description="Uncertainty about breeders' credibility and pet health history leading to anxiety and hesitation."
          />
          <Step
            icon={Heart}
            title="Missed Connections"
            description="Missing out on perfect matches due to lack of a centralized, reliable platform for pet adoption."
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
