import React from "react";
import Image from "next/image";
import { PawPrint, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchFormClient from "./SearchFormClient";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Dogs background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-medium"
          >
            <PawPrint className="w-4 h-4 mr-2" />
            Find Your Perfect Companion
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
            Best friends made here
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            Connect directly with trusted breeders, shelters and rescues to find
            the perfect pet companion for your family.
          </p>

          {/* Search Section */}
          <SearchFormClient />

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-white/80 text-sm mb-4">
              Trusted by pet lovers worldwide
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">
                  10,000+ Happy Pets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">500+ Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;