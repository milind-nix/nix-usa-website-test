"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { useGetCaseStudyBySlug, useGetRelatedCaseStudies } from "@/hooks/use-get-case-studies";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { caseStudy, loading, error } = useGetCaseStudyBySlug(slug);
  const { relatedCaseStudies } = useGetRelatedCaseStudies(slug);

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

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white shadow-sm">
          <Navbar />
        </div>
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold text-gray-900">
            Case study not found
          </h1>
          <Link href="/case-studies" className="text-teal-500 hover:text-teal-600 mt-4 inline-block">
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left - Title and Description with L-shaped borders */}
            <div className="relative">
              {/* Top-left L-shaped teal accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-4 bg-teal-500"></div>
                <div className="absolute top-0 left-0 w-4 h-full bg-teal-500"></div>
              </div>

              {/* Bottom-right L-shaped teal accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-16">
                <div className="absolute bottom-0 right-0 w-full h-2 bg-teal-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-full bg-teal-500"></div>
              </div>

              <div className="pl-8 pt-8 pb-8 pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {caseStudy.subtitle}
                </p>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={caseStudy.heroImageUrl || "/case-study-img.svg"}
                  alt={caseStudy.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div id="overview">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              {/* Challenge */}
              <div id="challenge">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Challenge
                </h2>
                <ul className="space-y-3">
                  {caseStudy.challenges?.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-teal-500 font-bold flex-shrink-0">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Approach */}
              <div id="solution">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Solution Approach
                </h2>
                <div className="space-y-6">
                  {caseStudy.solutionPhases?.map((phase, index: number) => (
                    <div
                      key={phase._key || index}
                      className="border border-gray-200 rounded-xl p-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.items?.map((item: string, idx: number) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-teal-500 font-bold flex-shrink-0">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div id="impact">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact
                </h2>
                <ul className="space-y-3">
                  {caseStudy.impactItems?.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-teal-500 font-bold flex-shrink-0">
                        •
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Table of Contents (Sticky) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Table of Contents
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#overview"
                        className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-6 h-px bg-gray-300"></span>
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="#challenge"
                        className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-6 h-px bg-gray-300"></span>
                        Challenge
                      </a>
                    </li>
                    <li>
                      <a
                        href="#solution"
                        className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-6 h-px bg-gray-300"></span>
                        Solution Approach
                      </a>
                    </li>
                    <li>
                      <a
                        href="#impact"
                        className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-6 h-px bg-gray-300"></span>
                        Impact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read More Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Read More
            </h2>

            {/* Horizontal Scrolling Container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4">
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study._id}
                    href={`/case-studies/${study.slug.current}`}
                    className="group flex-shrink-0 w-[350px] md:w-[400px]"
                  >
                    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={study.cardImageUrl || study.heroImageUrl || "/case-study-img.svg"}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm font-medium mb-3">
                          {study.tag}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
