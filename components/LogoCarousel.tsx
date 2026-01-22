"use client";

export default function LogoCarousel() {
  const logos = [
    { src: "/shell-logo-2.png", alt: "Shell", width: "w-24" },
    { src: "/freeport-mcmoran-logo.png", alt: "Freeport McMoRan", width: "w-48" },
    { src: "/jsw-logo.png", alt: "JSW Steels", width: "w-32" },
    { src: "/patil-group-logo.png", alt: "Patil Group", width: "w-28" },
  ];

  return (
    <div className="w-full pb-20">
      <div className="flex items-center justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <div className={`flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity ${logo.width} ${index > 0 ? 'ml-8' : ''}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto"
              />
            </div>
            {index < logos.length - 1 && (
              <div className="ml-8">
                <img
                  src="/separator-logo.png"
                  alt=""
                  className="h-24 w-auto object-contain opacity-50"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
