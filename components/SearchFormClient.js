"use client";

import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SearchFormClient = () => {
  const [activeTab, setActiveTab] = useState("breeders");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("breeders")}
          className={cn(
            "flex-1 px-6 py-4 text-sm font-medium transition-colors",
            activeTab === "breeders"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          )}
        >
          Breeders
        </button>
        <button
          onClick={() => setActiveTab("shelters")}
          className={cn(
            "flex-1 px-6 py-4 text-sm font-medium transition-colors",
            activeTab === "shelters"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          )}
        >
          Shelters & Rescues
        </button>
      </div>

      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search breeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-md text-base"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-md text-base"
            />
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <Select value={breed} onValueChange={setBreed}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select breed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pomeranian">Pomeranian</SelectItem>
              <SelectItem value="golden">Golden Retriever</SelectItem>
              <SelectItem value="labrador">Labrador</SelectItem>
              <SelectItem value="german">German Shepherd</SelectItem>
              <SelectItem value="french">French Bulldog</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full mt-4 h-12 text-base" size="lg">
          Search Now
        </Button>
      </div>
    </div>
  );
};

export default SearchFormClient;
