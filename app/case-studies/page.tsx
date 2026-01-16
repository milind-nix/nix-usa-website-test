"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "maximizing-midstream-margins",
    title: "Maximizing Midstream Margins via Operational Excellence",
    category: "Utilities",
    description:
      "How AI-driven pump optimization and predictive intelligence transformed midstream water management across 40+ facilities.",
    image: "/case-studies/midstream-waters.png",
    tag: "Midstream Waters",
  },
  {
    id: "securing-midstream-reliability",
    title: "Securing Midstream Reliability via RUL Analytics",
    category: "Utilities",
    description:
      "Reducing emergency repair costs and production disruptions through a fleet-wide proactive intervention strategy.",
    image: "/case-studies/midstream-waters-2.png",
    tag: "Midstream Waters",
  },
  {
    id: "protecting-100m-revenue",
    title: "Protecting $100M in Annual Revenue per Oil Well",
    category: "Energy",
    description:
      "Replacing reactive workovers with explainable AI to differentiate sensor malfunctions from critical wellbore blockages at scale.",
    image: "/case-studies/oil-well.png",
    tag: "Oil & Gas",
  },
];

const categories = ["All", "Energy", "Manufacturing", "Mining", "Utilities"];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Header Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real-world applications of industrial AI delivering measurable
              impact
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Stack */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {filteredCaseStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group block"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                    {/* Content - Always Left */}
                    <div className="order-2 md:order-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-medium mb-4">
                        {study.tag}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors underline decoration-teal-500 decoration-2 underline-offset-8">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Image - Always Right */}
                    <div className="order-1 md:order-2">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
