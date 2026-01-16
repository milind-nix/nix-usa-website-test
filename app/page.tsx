import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import UseCasesSection from "@/components/sections/UseCasesSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import DemoSection from "@/components/sections/DemoSection";
import FooterSection from "@/components/sections/FooterSection";

export default function LandingPage() {
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
            into a single, autonomous platform,
          </p>

          {/* CTA Button */}
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-4 py-3 text-base h-auto"
            asChild
          >
            <Link href="/speak-with-us" className="flex items-center gap-2">
              Speak with us
              <div className="bg-white/20 p-1 rounded-md">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </Button>
        </div>
      </main>

      {/* Logo Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {/* Shell Logo */}
          <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-24">
            <img
              src="/shell-logo-2.png"
              alt="Shells"
              className="w-full h-auto"
            />
          </div>

          {/* Separator */}
          <div className="hidden md:block">
            <img
              src="/separator-logo.png"
              alt=""
              className="h-24 w-auto object-contain opacity-50"
            />
          </div>

          {/* Freeport-McMoRan Logo */}
          <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-48">
            <img
              src="/freeport-mcmoran-logo.png"
              alt="Freeport McMoRan"
              className="w-full h-auto"
            />
          </div>

          {/* Separator */}
          <div className="hidden md:block">
            <img
              src="/separator-logo.png"
              alt=""
              className="h-24 w-auto object-contain opacity-50"
            />
          </div>

          {/* JSW Steel Logo */}
          <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-32">
            <img
              src="/jsw-logo.png"
              alt="JSW Steels"
              className="w-full h-auto"
            />
          </div>

          {/* Separator */}
          <div className="hidden md:block">
            <img
              src="/separator-logo.png"
              alt=""
              className="h-24 w-auto object-contain opacity-50"
            />
          </div>

          {/* Patil Group Logo */}
          <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-28">
            <img
              src="/patil-group-logo.png"
              alt="Patil Group"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

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
