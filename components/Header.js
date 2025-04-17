"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-2xl font-serif hover:text-white/90 transition-colors"
          >
            PetNo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/learning-center"
              className="text-sm hover:text-white/90 transition-colors"
            >
              Learning Center
            </Link>
            <Link
              href="/our-standards"
              className="text-sm hover:text-white/90 transition-colors"
            >
              Our Standards
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-white/90 transition-colors"
            >
              Contact a Specialist
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm hover:text-white/90 transition-colors"
            >
              Log in
            </Link>
            <span className="text-sm text-white/60">|</span>
            <Link
              href="/signup"
              className="text-sm bg-accent hover:bg-accent/90 px-4 py-2 rounded-md transition-colors"
            >
              Join PetNo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/learning-center"
                className="text-sm hover:text-white/90 transition-colors"
              >
                Learning Center
              </Link>
              <Link
                href="/our-standards"
                className="text-sm hover:text-white/90 transition-colors"
              >
                Our Standards
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-white/90 transition-colors"
              >
                Contact a Specialist
              </Link>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/login"
                  className="block text-sm hover:text-white/90 transition-colors mb-3"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="inline-block text-sm bg-accent hover:bg-accent/90 px-4 py-2 rounded-md transition-colors"
                >
                  Join PetNo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
