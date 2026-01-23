"use client";

export default function LogoCarousel() {
  const logos = [
    { src: "/shell-logo-2.png", alt: "Shell", width: "w-24" },
    {
      src: "/freeport-mcmoran-logo.png",
      alt: "Freeport McMoRan",
      width: "w-48",
    },
    { src: "/jsw-logo.png", alt: "JSW Steels", width: "w-32" },
    { src: "/patil-group-logo.png", alt: "Patil Group", width: "w-28" },
    { src: "/pilot-water-logo.png", alt: "Pilot Water", width: "w-28" },
    { src: "/fervo-logo.png", alt: "Fervo Energy", width: "w-28" },
    { src: "/ExxonMobil-Logo.png", alt: "ExxonMobil", width: "w-28" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full pb-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#021639] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#1B4845] to-transparent z-10" />

      <div
        className="flex w-max animate-scroll hover:[animation-play-state:paused]"
        style={{ animationDuration: "40s" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className="flex items-center">
            <div
              className={`flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity ${
                logo.width
              } ${index > 0 ? "mx-24" : ""}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto "
                loading="eager"
              />
            </div>
            {index < duplicatedLogos.length - 1 && (
              <div className="ml-8">
                <img
                  src="/separator-logo.png"
                  alt=""
                  className="h-24 w-auto object-contain opacity-100"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
