import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PetNo - Find Your Perfect Pet",
  description:
    "Connect with trusted breeders, shelters, and rescues to find your perfect pet companion.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-16 bg-background" />}>
        <Header />
      </Suspense>
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-16 space-y-24">
          <Problem />
          <FeaturesAccordion />
          <Pricing />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
