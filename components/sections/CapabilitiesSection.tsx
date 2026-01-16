"use client";

import { Card } from "@/components/ui/card";

interface Capability {
  id: string;
  title: string;
  description: string;
  descriptionHighlight: string;
  details: string;
  image: string;
  imageAlt: string;
}

const capabilities: Capability[] = [
  {
    id: "predictive-intelligence",
    title: "Predictive Intelligence",
    description:
      "Early warnings, degradation modeling and anomaly detection that prevent failures.",
    descriptionHighlight:
      "Early warnings, degradation modeling and anomaly detection that prevent failures.",
    details:
      "Detect failures before they happen with AI-powered anomaly detection across your asset portfolio.",
    image: "/predictive-intelligence.svg",
    imageAlt:
      "Predictive intelligence gauge showing remaining useful life and confidence level",
  },
  {
    id: "digital-twins",
    title: "Digital Twins",
    description:
      "Physics-informed models that understand asset behavior and optimize performance.",
    descriptionHighlight:
      "Physics-informed models that understand asset behavior and optimize performance.",
    details:
      "Create accurate digital replicas of your assets to simulate scenarios and predict outcomes.",
    image: "/digital-twins.svg",
    imageAlt:
      "Digital twins technical diagram showing vibrations, output meter, and system labels",
  },
  {
    id: "intelligent-operations",
    title: "Intelligent Operations",
    description:
      "Automated workflows that improve efficiency, reduce O&M costs and streamline execution.",
    descriptionHighlight:
      "Automated workflows that improve efficiency, reduce O&M costs and streamline execution.",
    details:
      "Optimize your operational processes with AI-driven recommendations and automations.",
    image: "/intelligent-operations.svg",
    imageAlt:
      "Intelligent operations dashboard showing anomaly detection and maintenance scheduling",
  },
  {
    id: "unified-visibility",
    title: "Unified Visibility",
    description:
      "One real-time view across sensors, SCADA, historian, MES, ERP and field systems.",
    descriptionHighlight:
      "One real-time view across sensors, SCADA, historian, MES, ERP and field systems.",
    details:
      "Integrate all your data sources into a single, unified platform for complete visibility.",
    image: "/unified-visibility.svg",
    imageAlt:
      "Unified visibility dashboard with real-time analytics and monitoring charts",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#F9F9F9] py-12 md:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mt-2 md:mt-4">
            Protect Your Assets. Perfect Your Process.
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {capabilities.map((capability) => (
            <div key={capability.id} className="space-y-4">
              {/* Image First */}
              <div className="rounded-2xl overflow-hidden bg-white">
                <img
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.imageAlt}
                  className="w-full aspect-square object-contain"
                />
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-teal-600 text-base font-medium">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block space-y-24">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content - Always Left */}
              <div>
                <h3 className="text-4xl font-medium text-gray-900 mb-6">
                  {capability.title}
                </h3>
                <p className="text-teal-600 text-lg font-medium">
                  {capability.description}
                </p>
              </div>

              {/* Image Card - Always Right */}
              <div>
                <img
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.imageAlt}
                  className="w-full aspect-square object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
