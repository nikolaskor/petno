"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Shield,
  MessageSquare,
  Heart,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - icon: The icon of the feature
// - image: The path to the image of the feature
const features = [
  {
    title: "Smart Search & Matching",
    description:
      "Our advanced search algorithm helps you find the perfect pet based on breed, age, location, and more. Get personalized recommendations that match your lifestyle and preferences.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Verified Breeders & Shelters",
    description:
      "Every breeder and shelter on our platform undergoes a thorough verification process. We check licenses, reviews, and conduct background checks to ensure you're working with trusted professionals.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Direct Communication",
    description:
      "Connect directly with breeders and shelters through our secure messaging system. Share photos, ask questions, and schedule meetups - all within our platform.",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Health Records & Documentation",
    description:
      "Access complete health records, vaccination history, and pedigree information. All documents are verified and stored securely for your peace of mind.",
    icon: CheckCircle2,
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

const FeatureCard = ({ feature, isActive, onClick }) => {
  const Icon = feature.icon;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 cursor-pointer",
        isActive
          ? "border-primary"
          : "border-transparent hover:border-muted-foreground/20"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "rounded-lg p-2 transition-colors",
              isActive ? "bg-primary text-primary-foreground" : "bg-muted"
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold leading-none">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Find Your Perfect Pet
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform brings together all the tools and features you need
              for a smooth and successful pet adoption journey.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
