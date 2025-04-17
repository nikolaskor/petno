"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic",
    description: "Perfect for pet lovers looking to adopt",
    price: "Free",
    features: [
      "Browse available pets",
      "Basic search filters",
      "View pet profiles",
      "Contact breeders/shelters",
      "Save favorite pets",
    ],
  },
  {
    name: "Premium",
    description: "For serious pet parents who want the best experience",
    price: "$9.99",
    period: "per month",
    features: [
      "Everything in Basic",
      "Advanced search filters",
      "Priority messaging",
      "Health record access",
      "Breeder verification",
      "Adoption guides",
      "24/7 support",
    ],
    featured: true,
  },
  {
    name: "Breeder",
    description: "For professional breeders and shelters",
    price: "$29.99",
    period: "per month",
    features: [
      "Everything in Premium",
      "Unlimited pet listings",
      "Analytics dashboard",
      "Marketing tools",
      "Document management",
      "Priority placement",
      "API access",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your pet journey. All plans include a
              14-day free trial.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 mt-12">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col",
                tier.featured && "border-primary shadow-lg"
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  {tier.featured && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="grid gap-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
