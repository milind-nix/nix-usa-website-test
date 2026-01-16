export default function PartnershipsSection() {
  const partners = [
    {
      name: "Greentown Labs",
      logo: "/Greentown-Logo.svg",
      width: "w-48",
    },
    {
      name: "Microsoft",
      logo: "/Microsoft-Logo.svg",
      width: "w-40",
    },
    {
      name: "Nasdaq",
      logo: "/Nasdaq-Logo.svg",
      width: "w-32",
    },
    {
      name: "NVIDIA",
      logo: "/NVIDIA-Logo.svg",
      width: "w-32",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2 md:mb-4">
          PARTNERSHIPS
        </p>

        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-medium text-gray-900 mb-8 md:mb-16">
          Our Partners
        </h2>

        {/* Mobile Layout - 2x2 Grid */}
        <div className="md:hidden grid grid-cols-2 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-start"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-36 h-auto object-contain opacity-90"
              />
            </div>
          ))}
        </div>

        {/* Desktop Layout - 4 columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className={`${partner.width} h-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
