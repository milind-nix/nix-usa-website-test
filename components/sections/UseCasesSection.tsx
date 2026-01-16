"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface UseCase {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const useCases: UseCase[] = [
  {
    id: "energy",
    title: "ENERGY",
    category: "Energy",
    description:
      "AI that provides early warnings, optimizes field operations and improves asset reliability across upstream, midstream and energy systems",
    features: [
      "Predict failures weeks in advance for pumps, compressors and rotating equipment",
      "Detect subsurface risks, flow deviations, sand accumulation and integrity issues",
      "Improve O&M efficiency with digital-twin modeling and automated workflows",
      "Enable real-time anomaly detection across SCADA, sensors and historian data",
    ],
    image: "/use-case-energy.png",
    imageAlt: "Energy AI platform",
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING",
    category: "Manufacturing",
    description:
      "Operational intelligence that drives reliability, efficiency and cost savings across factories, processing plants and mining operations.",
    features: [
      "Predict equipment failures and reduce unplanned downtime across furnaces, motors and heavy machinery",
      "Improve thermal efficiency, energy performance and process stability",
      "Automate QA/QC, recipe management and ISA-95 documentation",
      "Optimize mining energy use, processing performance and equipment wear monitoring",
    ],
    image: "/use-case-manufacturing.png",
    imageAlt: "Manufacturing intelligence platform",
  },
  {
    id: "water",
    title: "WATER",
    category: "Water",
    description:
      "Predictive intelligence for pumps, transfer networks and large-scale water management.",
    features: [
      "Identify degrading pumps and prevent early failures",
      "Optimize water transfer routing and scheduling at scale",
      "Classify water quality automatically for safe reuse and recycling",
      "Reduce O&M costs with real-time monitoring and anomaly alerts",
    ],
    image: "/use-case-water.png",
    imageAlt: "Water management platform",
  },
  {
    id: "utilities",
    title: "Utilities",
    category: "Utilities",
    description:
      "AI-driven reliability and operational insights for distributed utility and power infrastructure.",
    features: [
      "Predict asset failures across electrical systems, transformers and field equipment",
      "Monitor load behavior and detect anomalies in real time",
      "Streamline reporting, compliance and event investigation",
      "Improve grid stability with intelligent forecasting and optimization",
    ],
    image: "/use-case-utilities.png",
    imageAlt: "Utilities infrastructure platform",
  },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("energy");
  const activeCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section className="min-h-screen bg-white relative z-10">
      <div className="rounded-t-3xl pt-12 md:pt-20">
        {/* Section Title */}
        <div className="container mx-auto px-6 mb-6 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider">
                USE CASES
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mt-2">
                Industries where Impact
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>is tangible
              </h2>
              {/* Mobile: Show active category title */}
              <h3 className="md:hidden text-xl font-bold text-[#0A2540] mt-4">
                {activeCase.title}
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-4 md:pt-8 -mx-6 px-6 md:mx-0 md:px-0">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(useCase.id)}
                  className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base ${
                    activeTab === useCase.id
                      ? "bg-[#0A2540] text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {useCase.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pb-12 md:pb-20">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Image */}
            <div className="w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={activeCase.image || "/placeholder.svg"}
                alt={activeCase.imageAlt}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {activeCase.description}
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {activeCase.features.map((feature, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-gray-400 shrink-0">•</span>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Read More Button */}
            <div className="w-full flex justify-center">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8 py-3 h-auto text-base cursor-pointer">
                Read More
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                {activeCase.title}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeCase.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {activeCase.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-teal-500 font-bold shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full flex justify-center">
                {/* Read More Button */}
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-8 py-3 h-auto text-base cursor-pointer">
                  Read More
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden border-4 border-teal-500/30">
                <img
                  src={activeCase.image || "/placeholder.svg"}
                  alt={activeCase.imageAlt}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
