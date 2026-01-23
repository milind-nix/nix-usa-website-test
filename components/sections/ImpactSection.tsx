"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ImpactSection() {
  const metrics = [
    {
      id: 1,
      label: "Annual utility consumption",
      value: "40%+",
      description: "savings",
    },
    {
      id: 2,
      label: "Discovery to Deployment",
      value: "<90 Days",
      description: "",
    },
    {
      id: 3,
      label: "Full Payback",
      value: "<4 months",
      description: "",
    },
    {
      id: 4,
      label: "Operational Cost Reduction",
      value: "↓ in ROI",
      description: "",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="flex-1">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              OUR IMPACT
            </span>
            <h2 className="text-2xl md:text-5xl font-medium text-gray-900 mt-2 md:mt-4 leading-tight">
              Are you still running Ops like it's 2015?
            </h2>
            <p className="text-teal-600 md:text-gray-600 text-base md:text-lg mt-4 md:mt-6 max-w-5xl">
              Enterprises that deployed Neuralix have shown remarkable outcomes
              in their operational capabilities.
            </p>
          </div>

          {/*
          <div className="shrink-0">
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-8 py-6 text-base h-auto"
              asChild
            >
              <Link href="/speak-with-us">Let's Talk</Link>
            </Button>
          </div> */}
        </div>

        {/* Mobile Layout - Stacked with dividers */}
        <div className="md:hidden">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`py-6 ${
                index < metrics.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <p className="text-gray-600 text-sm mb-2 font-medium">
                {metric.label}
              </p>
              <h3 className="text-3xl font-medium text-[#0A2540]">
                {metric.value}
                {metric.description && (
                  <span className="text-3xl font-medium text-[#0A2540]">
                    {" "}
                    {metric.description}
                  </span>
                )}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-0"></div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.id}
                className={`flex flex-col justify-center py-12 px-6 md:px-8 border-gray-300 ${
                  index < metrics.length - 1 ? "lg:border-r" : ""
                } ${index < 2 ? "md:border-r" : ""} ${
                  index === 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="text-gray-600 text-sm mb-6 font-medium">
                  {metric.label}
                </p>
                <h3 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
                  {metric.value}
                </h3>
                {metric.description && (
                  <p className="text-gray-700 text-4xl font-medium">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
