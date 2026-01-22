"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { Search, ChevronRight, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetJobs } from "@/hooks/use-get-jobs";
import { JobDetailsType } from "@/lib/types/careers";

const categories = [
  "Engineering",
  "Data Science",
  "Marketing & Sales",
  "Product",
  "Business Operations",
  "Others",
];

// Map Sanity department values to display categories
const departmentToCategory: Record<string, string> = {
  engineering: "Engineering",
  "data-science": "Data Science",
  marketing: "Marketing & Sales",
  management: "Product",
  "business-operation": "Business Operations",
  design: "Others",
};

export default function CareerPage() {
  const { data: jobs, loading, error } = useGetJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Filter only active jobs
  const activeJobs = jobs.filter((job) => job.active);

  const filteredJobs = activeJobs.filter((job) => {
    const matchesSearch =
      job.jobName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const jobsByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredJobs.filter((job) => {
      const jobCategory = departmentToCategory[job.department] || "Others";
      return jobCategory === category;
    });
    return acc;
  }, {} as Record<string, JobDetailsType[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const formatExperience = (min: number, max: number) => {
    if (min === max) return `${min} yrs`;
    return `${min}-${max} yrs`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Background Image and Gradient */}
      <section className="relative h-[60vh] md:h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/career-hero.png"
            alt="Discover your place at Neuralix"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end md:justify-center items-start md:items-center pb-8 md:pb-0">
          <div className="md:text-center">
            <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight mb-0 md:mb-6">
              Discover your place at Neuralix
            </h1>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white py-12 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header with Search */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-medium text-gray-900 text-left md:text-center mb-6 md:mb-8">
              Open the door to your next role
            </h2>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for the Role"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-4 pr-16 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 md:p-3 rounded-lg transition-colors">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
              <span className="ml-3 text-gray-600">Loading jobs...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-500 text-lg">
                Failed to load jobs. Please try again later.
              </p>
            </div>
          )}

          {/* Job Categories Accordion */}
          {!loading && !error && (
            <div className="max-w-4xl mx-auto">
              {categories.map((category) => {
                const categoryJobs = jobsByCategory[category];
                const isExpanded = expandedCategory === category;

                return (
                  <div key={category} className="border-b border-gray-200">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex items-center justify-between py-4 md:py-6 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg md:text-2xl font-medium text-gray-900">
                        {category}
                      </h3>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                      )}
                    </button>

                    {/* Job Listings */}
                    {isExpanded && (
                      <div className="pb-4 md:pb-6 space-y-4">
                        {categoryJobs.length > 0 ? (
                          categoryJobs.map((job) => (
                            <div
                              key={job._id}
                              className="bg-[#F7F7F7] rounded-xl p-4 md:p-6 border border-dashed border-gray-300"
                            >
                              {/* Mobile: Title with Location on same line */}
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg md:text-xl font-medium text-gray-900 flex-1">
                                  {job.jobName}
                                </h4>
                                <span className="text-sm text-gray-600 ml-2 whitespace-nowrap capitalize">
                                  {job.location}
                                </span>
                              </div>

                              {/* Job Details Chips */}
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-4 py-1.5 rounded-full bg-white border border-teal-500 text-teal-600 text-sm">
                                  {formatExperience(
                                    job.minimumExperience,
                                    job.maximumExperience
                                  )}
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-sm">
                                  {job.remote ? "Remote" : "On-site"}
                                </span>
                                <span className="hidden md:inline-block px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-sm capitalize">
                                  {job.location}
                                </span>
                              </div>

                              {/* Status and Apply Button */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 md:gap-4 text-sm text-gray-600">
                                  <span className="font-semibold text-green-600">
                                    OPEN
                                  </span>
                                </div>

                                {/* Apply Button */}
                                <Button
                                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-6 py-2 text-sm whitespace-nowrap"
                                  asChild
                                >
                                  <Link href={`/career/${job.jobId}`}>
                                    Apply
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-center py-8">
                            No jobs found in this category
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* No jobs found */}
          {!loading && !error && filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No open positions found. Please check back later.
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
