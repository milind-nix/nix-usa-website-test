import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Hero Section with Background Image and Gradient */}
      <section className="relative h-screen w-full max-md:h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about-us-hero.png"
            alt="Industrial operations control room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end ">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight mb-6">
              To transform industrial operations with rapidly deployable AI
            </h1>
            <p className="text-xl md:text-2xl text-white font-normal">
              Intelligent, Interpretable, Safe and Reliable at scale
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-[#E8F3F5] py-10 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header - Full Width */}
          <div className="mb-12">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-6 block">
              OUR VISION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Architects of Industrial AI and data convergence.
            </h2>
          </div>

          {/* Content Grid - Paragraphs and Image */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left - Paragraphs */}
            <div className="space-y-6 text-gray-700 text-base md:text-xl leading-relaxed w-full md:w-4/5 order-2 md:order-1">
              <p>
                Neuralix is an industrial intelligence company built by
                engineers, data scientists, and operators who have spent years
                inside plants, refineries, mines, and field sites.
              </p>
              <p>
                We combine advanced machine learning, physics-based modelling,
                and deep domain expertise to solve problems that conventional
                analytics, rules engines, or legacy software cannot.
              </p>
              <p>
                Our platform was designed from day one to adapt to real
                operating conditions ,delivering intelligence that teams can
                trust and act upon.
              </p>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/our-vision.png"
                  alt="Industrial facility at dusk"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-white py-10 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header - Full Width */}
          <div className="mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-6 block">
              OUR IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Transforming industry leaders with predictive power.
            </h2>
          </div>

          {/* Impact Grid - Top Row: 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Card 1 - Early failure detection */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="/gifs/about-us/Easy Failure detection.gif"
                  alt="Early failure detection dashboard"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Early failure detection
              </h3>
              <p className="text-gray-600 text-base">
                Across rotating and static equipment
              </p>
            </div>

            {/* Card 2 - Reductions in downtime */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="/gifs/about-us/Reduction in downtime.gif"
                  alt="Shift schedule showing downtime reduction"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Reductions in downtime
              </h3>
              <p className="text-gray-600 text-base">
                Neuralix is able to showcase &gt;40% in utility cost savings due
                to reduction in downtime
              </p>
            </div>

            {/* Card 3 - Real-time digital twin models */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="/gifs/about-us/Real-time digital twin models.gif"
                  alt="Real-time digital twin interface"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Real-time digital twin models
              </h3>
              <p className="text-gray-600 text-base">
                For furnaces, pumps, compressors, water networks, and
                distributed systems
              </p>
            </div>
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 4 - Enterprise pilots */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="/gifs/about-us/Enterprise pilot.gif"
                  alt="World map showing enterprise deployments"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Enterprise pilots and multi-site rollouts
              </h3>
              <p className="text-gray-600 text-base">
                Across Fortune-100 scale operators
              </p>
            </div>

            {/* Card 5 - DLT Architecture */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="/gifs/about-us/A patented DLT® architecture.gif"
                  alt="DLT architecture diagram"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                A patented DLT® architecture
              </h3>
              <p className="text-teal-600 text-base font-medium">
                Recognized for breakthrough in industrial modeling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Neuralix Exists Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-r from-[#031B45]/90 to-[#1B4845]/80">
        <div className="container mx-auto px-6">
          {/* Top Content - Heading and Image */}
          <div className="grid md:grid-cols-2  gap-6 md:gap-16 items-start mb-16">
            {/* Left - Heading and Description */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
                Why Neuralix Exists
              </h2>
              <p className="text-white/90 text-xl leading-relaxed">
                Industrial operators generate more data than ever, yet most of
                it remains unused or unanalyzed. Traditional analytics tools
                cannot handle the scale, noise, or complexity of real operations
                — and they offer little more than static dashboards.
              </p>
            </div>

            {/* Right - Industrial Facility Image */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/why-neuralix-exist.png"
                  alt="Industrial facility at dusk"
                  className="h-72 w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-white rounded-3xl p-12 shadow-lg  overflow-hidden">
              <p className="text-gray-900 text-2xl leading-relaxed">
                To turn every sensor, system, and process into real
                intelligence.
              </p>
              {/* Number Badge */}
              <div className=" bottom-6 right-6 flex items-center gap-2">
                <div className="flex items-center justify-center overflow-hidden absolute -bottom-16 -right-8">
                  <span className="text-gray-400 text-[12rem] font-bold">
                    1
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-3xl p-12 shadow-lg  overflow-hidden">
              <p className="text-gray-900 text-2xl leading-relaxed">
                To give operators and engineers the tools they have always
                needed but never received.
              </p>
              {/* Number Badge */}
              <div className=" bottom-6 right-6 flex items-center gap-2">
                <div className="flex items-center justify-center overflow-hidden absolute -bottom-16 -right-10">
                  <span className="text-gray-400 text-[12rem] font-bold">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-3xl p-12 shadow-lg overflow-hidden">
              <p className="text-gray-900 text-2xl leading-relaxed">
                To close the gap between data and action — permanently.
              </p>
              {/* Number Badge */}
              <div className=" bottom-6 right-6 flex items-center gap-2">
                <div className="flex items-center justify-center overflow-hidden absolute -bottom-16 -right-10">
                  <span className="text-gray-400 text-[12rem] font-bold">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="bg-white py-10 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-6 block">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Ethical AI deployment in safety-critical environments.
            </h2>
          </div>

          {/* Principles Grid with Dividers */}
          <div className="grid md:grid-cols-3 md:divide-x md:divide-gray-200">
            {/* Row 1 */}
            <div className="border-b border-gray-200 p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/clock.gif"
                  alt="Clock icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Rapid Deployability
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                From pilot to production in weeks, not years, with minimal
                disruption to existing operations.
              </p>
            </div>

            <div className="border-b border-gray-200 p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/idea.gif"
                  alt="Idea icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Interpretable Intelligence
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Every prediction comes with clear reasoning, empowering teams to
                trust and act on AI insights.
              </p>
            </div>

            <div className="border-b border-gray-200 p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/service-tools.gif"
                  alt="Service tools icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Industrial-Grade Design
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Built for harsh, dynamic environments where reliability and
                uptime are non-negotiable.
              </p>
            </div>

            {/* Row 2 */}
            <div className="border-b md:border-b-0 border-gray-200 p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/puzzle-pieces.gif"
                  alt="Puzzle pieces icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Modular & Extensible
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Integrate with existing systems and scale across sites without
                vendor lock-in.
              </p>
            </div>

            <div className="border-b md:border-b-0 border-gray-200 p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/shield.gif"
                  alt="Shield icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4 text-center">
                Security & Data Stewardship
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Enterprise-grade security with full control over your data,
                on-premise or cloud.
              </p>
            </div>

            <div className="p-10 md:p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <img
                  src="/gifs/money-bag.gif"
                  alt="Money bag icon"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Measurable Operational ROI
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Track tangible impact on downtime, efficiency, and cost savings
                from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
