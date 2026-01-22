"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { useGetCaseStudies, useGetCategories } from "@/hooks/use-get-case-studies";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { caseStudies, loading, error } = useGetCaseStudies();
  const { categories } = useGetCategories();

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category?.name === selectedCategory);

  // Build category list with "All" at the start
  const categoryList = ["All", ...categories.map((cat) => cat.name)];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white shadow-sm">
          <Navbar />
        </div>
        <div className="container mx-auto px-6 py-32">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white shadow-sm">
          <Navbar />
        </div>
        <div className="container mx-auto px-6 py-32 text-center">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

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
            {categoryList.map((category) => (
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
            {filteredCaseStudies.map((study) => (
              <Link
                key={study._id}
                href={`/case-studies/${study.slug.current}`}
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
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Image - Always Right */}
                    <div className="order-1 md:order-2">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <img
                          src={study.cardImageUrl || study.heroImageUrl || "/case-study-img.svg"}
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

          {filteredCaseStudies.length === 0 && !loading && (
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
