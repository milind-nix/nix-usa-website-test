export default function PartnershipsSection() {
  const partners = [
    { name: "Greentown Labs", logo: "/Greentown-Logo.svg", width: "w-48" },
    { name: "Microsoft", logo: "/Microsoft-Logo.svg", width: "w-40" },
    { name: "Nasdaq", logo: "/Nasdaq-Logo.svg", width: "w-32" },
    { name: "Amazon Web Services", logo: "/aws-logo.png", width: "w-16" },
    { name: "NVIDIA", logo: "/NVIDIA-Logo.svg", width: "w-32" },
    { name: "Google Cloud", logo: "/google-cloud-logo.png", width: "w-36" },
    { name: "Plug And Play", logo: "/plug-and-play-logo.png", width: "w-28" },
  ];

  const logos = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-gray-50 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-16">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2 md:mb-4">
          PARTNERSHIPS
        </p>
        <h2 className="text-2xl md:text-5xl font-medium text-gray-900">
          Our Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 to-transparent z-10" />

        <div
          className="flex w-max animate-scroll hover:[animation-play-state:paused]"
          style={{ animationDuration: "40s" }}
        >
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center mx-8 md:mx-16"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                loading="eager"
                className={`${partner.width} h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 grayscale-100`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
