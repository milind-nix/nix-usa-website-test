"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  status: string;
  postedDate: string;
}

const jobListings: Job[] = [
  {
    id: "1",
    title: "Senior Machine Learning Engineer",
    category: "Engineering",
    location: "India",
    type: "Remote",
    experience: "5 yrs",
    status: "OPEN",
    postedDate: "24.11.2025",
  },
  {
    id: "2",
    title: "Data Scientist",
    category: "Data Science",
    location: "United States",
    type: "Hybrid",
    experience: "3 yrs",
    status: "OPEN",
    postedDate: "20.11.2025",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    category: "Engineering",
    location: "India",
    type: "Remote",
    experience: "4 yrs",
    status: "OPEN",
    postedDate: "18.11.2025",
  },
  {
    id: "4",
    title: "Product Manager",
    category: "Product",
    location: "United States",
    type: "On-site",
    experience: "6 yrs",
    status: "OPEN",
    postedDate: "15.11.2025",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    category: "Marketing & Sales",
    location: "United States",
    type: "Remote",
    experience: "3 yrs",
    status: "OPEN",
    postedDate: "10.11.2025",
  },
  {
    id: "6",
    title: "Founder's Office Associate",
    category: "Others",
    location: "India",
    type: "Remote",
    experience: "5 yrs",
    status: "OPEN",
    postedDate: "24.11.2025",
  },
  {
    id: "7",
    title: "DevOps Engineer",
    category: "Engineering",
    location: "India",
    type: "Hybrid",
    experience: "4 yrs",
    status: "OPEN",
    postedDate: "05.11.2025",
  },
  {
    id: "8",
    title: "AI Research Scientist",
    category: "Data Science",
    location: "United States",
    type: "On-site",
    experience: "7 yrs",
    status: "OPEN",
    postedDate: "01.11.2025",
  },
];

const categories = [
  "Engineering",
  "Data Science",
  "Marketing & Sales",
  "Product",
  "Others",
];

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const jobsByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredJobs.filter((job) => job.category === category);
    return acc;
  }, {} as Record<string, Job[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>

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

          {/* Job Categories Accordion */}
          <div className="max-w-4xl mx-auto">
            {categories.map((category) => {
              const jobs = jobsByCategory[category];
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
                      {jobs.length > 0 ? (
                        jobs.map((job) => (
                          <div
                            key={job.id}
                            className="bg-[#F7F7F7] rounded-xl p-4 md:p-6 border border-dashed border-gray-300"
                          >
                            {/* Mobile: Title with Location on same line */}
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg md:text-xl font-medium text-gray-900 flex-1">
                                {job.title}
                              </h4>
                              <span className="text-sm text-gray-600 ml-2 whitespace-nowrap">
                                {job.location}
                              </span>
                            </div>

                            {/* Job Details Chips */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="px-4 py-1.5 rounded-full bg-white border border-teal-500 text-teal-600 text-sm">
                                {job.experience}
                              </span>
                              <span className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-sm">
                                {job.type}
                              </span>
                              <span className="hidden md:inline-block px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-sm">
                                {job.location}
                              </span>
                            </div>

                            {/* Status and Posted Date */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 md:gap-4 text-sm text-gray-600">
                                <span className="font-semibold">
                                  {job.status}
                                </span>
                                <span>•</span>
                                <span>Posted on: {job.postedDate}</span>
                              </div>

                              {/* Apply Button */}
                              <Button
                                className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-6 py-2 text-sm whitespace-nowrap"
                                asChild
                              >
                                <Link href={`/career/${job.id}`}>Apply</Link>
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
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
