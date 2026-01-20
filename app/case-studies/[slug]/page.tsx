"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

// Case studies list for Read More section
const caseStudies = [
  {
    id: "maximizing-midstream-margins",
    title: "Maximizing Midstream Margins via Operational Excellence",
    image: "/case-study-img.svg",
    tag: "Midstream Waters",
  },
  {
    id: "securing-midstream-reliability",
    title: "Securing Midstream Reliability via RUL Analytics",
    image: "/case-study-img.svg",
    tag: "Midstream Waters",
  },
  {
    id: "protecting-100m-revenue",
    title: "Protecting $100M in Annual Revenue per Oil Well",
    image: "/case-study-img.svg",
    tag: "Oil & Gas",
  },
];

// Sample case study data
const caseStudyData: Record<string, any> = {
  "protecting-100m-revenue": {
    id: "protecting-100m-revenue",
    title: "Protecting $100M in Annual Revenue per Oil Well",
    subtitle:
      "Replacing reactive workovers with explainable AI to differentiate sensor malfunctions from critical wellbore blockages at scale.",
    heroImage: "/case-study-img.svg",
    category: "Energy",
    overview:
      "We are seeking an experienced Senior Software Engineer with a strong background in the Python & React stack to join our growing team. In this role, you will lead the development of key systems, mentor a talented group of engineers, and play a pivotal role in shaping the technical direction of our products.",
    challenge: {
      title: "Challenge",
      items: [
        "Inefficient pump operations wasting $$$ annually in electricity costs",
        "No visibility into equipment degradation patterns",
        "Unclear equipment replacement timing balancing operating costs vs. asset lifespan",
        "Reactive operations across distributed asset base",
      ],
    },
    solutionApproach: {
      title: "Solution Approach",
      phases: [
        {
          title: "Phase 1: Operational efficiency pilot",
          items: [
            "AI-driven frequency optimization",
            "Real-time performance dashboards",
            "40% average efficiency improvement demonstrated",
          ],
        },
        {
          title: "Phase 2: Scale and economic intelligence",
          items: [
            "Expanded optimization across additional assets",
            "Integrated real-time cost tracking",
            "Advanced efficiency analytics",
          ],
        },
        {
          title: "Phase 3: Enterprise intelligence platform",
          items: [
            "Automated anomaly detection and alerting",
            "Predictive degradation tracking",
            "Operational decision support system",
            "Cloud infrastructure: 40M+ records, 6 ML models, 400K+ daily data points",
          ],
        },
      ],
    },
    impact: {
      title: "Impact",
      items: [
        "$500K+ annual savings in operational costs",
        "$250K-$1.2M projected annual revenue increase through optimized operations",
        "Proactive vs. reactive asset management",
        "40% reduction in unplanned downtime",
        "ROI on service investment",
      ],
    },
  },
  "maximizing-midstream-margins": {
    id: "maximizing-midstream-margins",
    title: "Maximizing Midstream Margins via Operational Excellence",
    subtitle:
      "How AI-driven pump optimization and predictive intelligence transformed midstream water management across 40+ facilities.",
    heroImage: "/case-study-img.svg",
    category: "Utilities",
    overview:
      "A leading midstream water management company needed to optimize operations across 40+ facilities to reduce costs and improve efficiency while maintaining service quality.",
    challenge: {
      title: "Challenge",
      items: [
        "High operational costs across distributed facilities",
        "Inefficient pump operations leading to energy waste",
        "Lack of real-time visibility into system performance",
        "Manual intervention required for optimization decisions",
      ],
    },
    solutionApproach: {
      title: "Solution Approach",
      phases: [
        {
          title: "Phase 1: Data integration and baseline",
          items: [
            "Connected 40+ facilities to centralized platform",
            "Established performance baselines",
            "Identified optimization opportunities",
          ],
        },
        {
          title: "Phase 2: AI-powered optimization",
          items: [
            "Deployed ML models for pump optimization",
            "Real-time monitoring and alerting",
            "Automated efficiency recommendations",
          ],
        },
        {
          title: "Phase 3: Predictive maintenance",
          items: [
            "Implemented predictive degradation models",
            "Reduced emergency maintenance events",
            "Extended asset lifespan through proactive care",
          ],
        },
      ],
    },
    impact: {
      title: "Impact",
      items: [
        "30% reduction in energy costs",
        "45% decrease in unplanned downtime",
        "$2M+ annual operational savings",
        "Improved service reliability across all facilities",
        "Data-driven decision making at scale",
      ],
    },
  },
  "securing-midstream-reliability": {
    id: "securing-midstream-reliability",
    title: "Securing Midstream Reliability via RUL Analytics",
    subtitle:
      "Reducing emergency repair costs and production disruptions through a fleet-wide proactive intervention strategy.",
    heroImage: "/case-study-img.svg",
    category: "Utilities",
    overview:
      "A major midstream operator faced significant challenges with unexpected equipment failures leading to costly emergency repairs and production disruptions.",
    challenge: {
      title: "Challenge",
      items: [
        "Frequent unexpected equipment failures",
        "High emergency repair costs",
        "Production disruptions affecting revenue",
        "Difficulty predicting optimal maintenance timing",
      ],
    },
    solutionApproach: {
      title: "Solution Approach",
      phases: [
        {
          title: "Phase 1: RUL model development",
          items: [
            "Developed Remaining Useful Life (RUL) analytics",
            "Historical failure analysis",
            "Pattern recognition across fleet",
          ],
        },
        {
          title: "Phase 2: Fleet-wide deployment",
          items: [
            "Rolled out RUL tracking across all assets",
            "Integrated with maintenance planning systems",
            "Established intervention thresholds",
          ],
        },
        {
          title: "Phase 3: Continuous optimization",
          items: [
            "Refined models based on actual outcomes",
            "Automated alerting and recommendations",
            "Predictive spare parts inventory management",
          ],
        },
      ],
    },
    impact: {
      title: "Impact",
      items: [
        "60% reduction in emergency repairs",
        "$1.5M+ annual cost savings",
        "25% improvement in equipment uptime",
        "Optimized maintenance scheduling",
        "Reduced spare parts inventory costs",
      ],
    },
  },
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudyData[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white">
          <Navbar />
        </div>
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold text-gray-900">
            Case study not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

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
                  src={caseStudy.heroImage}
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
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {caseStudy.challenge.title}
                </h2>
                <ul className="space-y-3">
                  {caseStudy.challenge.items.map(
                    (item: string, index: number) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-gray-400 font-normal">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Solution Approach */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {caseStudy.solutionApproach.title}
                </h2>
                <div className="space-y-6">
                  {caseStudy.solutionApproach.phases.map(
                    (phase: any, index: number) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {phase.title}
                        </h3>
                        <ul className="space-y-2">
                          {phase.items.map((item: string, idx: number) => (
                            <li key={idx} className="flex gap-3 text-gray-700">
                              <span className="text-teal-500 font-bold flex-shrink-0">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {caseStudy.impact.title}
                </h2>
                <ul className="space-y-3">
                  {caseStudy.impact.items.map((item: string, index: number) => (
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
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Read More
          </h2>

          {/* Horizontal Scrolling Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {caseStudies
                .filter((study) => study.id !== slug)
                .map((study) => (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.id}`}
                    className="group flex-shrink-0 w-[350px] md:w-[400px]"
                  >
                    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={study.image}
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

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
