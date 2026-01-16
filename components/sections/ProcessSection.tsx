"use client";

export default function ProcessSection() {
  const processes = [
    {
      id: 1,
      title: "Data Ingestion",
      description:
        "Acting as a universal adapter, seamlessly ingesting data from disparate sources including legacy databases, real-time IoT sensors, and unstructured files.",
      image: "/Data-ingestion.gif",
      imageAlt: "Data ingestion from multiple sources with integrations",
    },
    {
      id: 2,
      title: "Clean & Structure",
      description:
        "Automatically cleans, aligns and structures noisy industrial data, handling unit normalization, missing-value reconstruction and metadata mapping at scale.",
      image: "/Clean-structure.gif",
      imageAlt: "Data cleaning and structuring visualization",
    },
    {
      id: 3,
      title: "Model & Analyze",
      description:
        "Transforming raw data into intelligence using physics-informed machine learning, multivariate pattern analysis and digital twin modeling.",
      image: "/Model-Analyze.gif",
      imageAlt: "ML model engines and data analysis process",
    },
    {
      id: 4,
      title: "Activate",
      description:
        "Predictions, alerts, recommendations and optimized workflows flow back to your teams through dashboards, notifications and automated actions.",
      image: "/Activate.gif",
      imageAlt: "Alerts, recommendations and notifications dashboard",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-4">
            From scattered dashboards to unified strategy, automatically.
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            Transform raw chaos into predictive strategy. One continuous,
            automated flow.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {processes.map((process) => (
            <div
              key={process.id}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="mb-3 rounded-lg overflow-hidden bg-white w-full aspect-square flex items-center justify-center max-h-64">
                <img
                  src={process.image || "/placeholder.svg"}
                  alt={process.imageAlt}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=256&width=400&query=${encodeURIComponent(
                      process.title
                    )}`;
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-gray-900 mb-1.5">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-snug text-sm">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
