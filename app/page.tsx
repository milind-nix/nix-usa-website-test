"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import LogoCarousel from "@/components/LogoCarousel";
import UseCasesSection from "@/components/sections/UseCasesSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import DemoSection from "@/components/sections/DemoSection";
import FooterSection from "@/components/sections/FooterSection";

export default function LandingPage() {
  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-r from-[#021639] to-[#1B4845]">
      {/* Navigation */}
      <Navbar variant="light" />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-white mb-12">
            <span className="text-sm">From Chaos to Clarity: Instantly</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-8 font-(family-name:--font-general-sans)">
            Your entire data stack, simplified
            <br />
            into <span className="text-teal-400 font-light italic">
              One
            </span>{" "}
            intelligent platform.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
            Unify your Engineering, Operations and Artificial Intelligence
            <br />
            into a single, autonomous platform.
          </p>

          {/* CTA Button */}
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-4 py-3 text-base h-auto"
            asChild
          >
            <a
              href="#demo"
              onClick={scrollToDemo}
              className="flex items-center gap-2"
            >
              Speak with us
              <div className="bg-white/20 p-1 rounded-md">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </Button>
        </div>
      </main>

      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Demo Section */}
      <DemoSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
