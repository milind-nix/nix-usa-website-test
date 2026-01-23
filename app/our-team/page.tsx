import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Vikram Jayaram, PhD",
    title: "Founder & CEO",
    image: "/team/vikram.svg",
    bio: "Vikram is a pioneering AI and machine learning leader with over 2 decades of experience building and scaling industrial-grade analytics across energy, healthcare, and infrastructure. He previously served as Head of R&D and Data Science at Pioneer Natural Resources, where he led enterprise-wide AI initiatives. At Neuralix, Vikram sets the technical and strategic vision, ensuring the company delivers practical, production-ready AI with measurable operational and emissions impact.",
  },
  {
    id: "2",
    name: "Rohit Gangwal",
    title: "Co Founder",
    image: "/team/rohit-gangwal.svg",
    bio: "Rohit provides strategic leadership across operations, growth, fundraising, and financial management. He brings deep experience building and scaling businesses as CEO and Managing Director of Edelweiss and formerly as Managing Director at Cosmos Granite and Marble, where he oversaw a $400M operation. At Neuralix, Rohit focuses on execution discipline, capital strategy, and long-term value creation.",
  },
  {
    id: "3",
    name: "Annorah Lewis",
    title: "Chief of Staff",
    image: "/team/Annorah-Lewis.svg",
    bio: "Annorah serves as Chief of Staff at Neuralix, leading operations and product strategy as the CEO’s right hand. Prior to Neuralix, Annorah led automation initiatives as a hardware and software engineer at a downstream fueling solutions company. At Neuralix, she drives execution across engineering, customers, and deployment - translating advanced AI into scalable, real‑world solutions for industrial operations. She brings a strong technical foundation in Computer Science from Virginia Tech and executive business training from Harvard Business School.",
  },
  {
    id: "4",
    name: "Heidi Higginson",
    title: "Engineering Manager",
    image: "/team/heidi.svg",
    bio: "Heidi has over a decade of extensive field and operational experience across oil & gas - her background spans saltwater disposal, lease operations, and well injection forecasting, with prior roles at Diamondback, Marathon Oil, and Enverus. At Neuralix, she ensures engineering solutions are grounded in operational reality and built for reliability at scale. Heidi holds a B.S. in Petroleum Engineering from The University of Texas at Austin.",
  },
  {
    id: "5",
    name: "Abhishek Kothari",
    title: "Product Engineering Lead",
    image: "/team/Abhishek-Kothari.svg",
    bio: "Abhishek leads product engineering at Neuralix, translating complex industrial workflows into scalable, cloud-native software and machine learning systems. He brings hands-on experience building production-grade platforms across industrial operations, data infrastructure, and enterprise environments. His work ensures Neuralix’s technology is robust, extensible, and enterprise-ready.",
  },
  {
    id: "6",
    name: "Fatimah Bello",
    title: "Business Development Advisor",
    image: "/team/Fatimah.svg",
    bio: "Fatimah brings deep experience in industrial energy, infrastructure, and climate-tech commercialization. She has led business development and investment initiatives across energy transition, mining, and industrial innovation platforms. At Neuralix, she advises on market entry, partnerships, and growth strategy.",
  },
  {
    id: "7",
    name: "Stephanie Stewart",
    title: "E&P Advisor",
    image: "/team/Stephanie_Stewart.png",
    bio: "Stephanie provides strategic guidance to Neuralix, drawing on over 20 years of executive leadership across energy technology and data organizations. She most recently served as Vice President and Chief Information Officer at Pioneer Natural Resources, leading enterprise data and digital transformation initiatives prior to the company’s acquisition by ExxonMobil. Stephanie previously held senior analytics and technology leadership roles at Devon Energy, Williams Energy, and BP Amoco.",
  },
  {
    id: "8",
    name: "Valliappa Lakshmanan, PhD",
    title: "Product Advisor",
    image: "/team/Advisor-Lak.svg",
    bio: "Valliappa is one of the leading minds in enterprise AI. He previously served as Head of Data Analytics & AI at Google Cloud and Director of Google’s Advanced Solutions Lab, and is now an Operating Executive at Silver Lake. As Product Advisor to Neuralix, he brings deep expertise in translating advanced AI into scalable, secure, enterprise-grade products. He guides platform architecture and product rigor to ensure Neuralix’s solutions meet the standards of the world’s most demanding industrial customers.",
  },
  {
    id: "9",
    name: "Carrie Reese",
    title: "Sustainability Advisor",
    image: "/team/Advisor-Carrie-reese.svg",
    bio: "Carrie is a nationally recognized sustainability executive with over 15 years of experience leading ESG, decarbonization, and climate strategy, including as Sustainable Development Director at ExxonMobil. As Sustainability Advisor to Neuralix, she guides the development of AI-powered emissions tracking and reporting solutions that deliver fast, verifiable, and investor-grade ESG outcomes for industrial and energy customers.",
  },
  {
    id: "10",
    name: "Deepak Devegowda, PhD",
    title: "Research & Academia",
    image: "/team/Advisor-Deepak.svg",
    bio: "A Professor and Mewbourne Chair at the University of Oklahoma, Deepak specializes in reservoir engineering and energy innovation. His technical expertise supports Neuralix's mission to advance energy solutions.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] md:h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/team-hero.png"
            alt="The minds behind the next generation of industrial intelligence"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end md:justify-center items-start pb-8 md:pb-0">
          <div className="px-2">
            <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight">
              The minds behind the next generation of industrial intelligence.
            </h1>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-white py-12 md:py-32">
        <div className="container mx-auto px-6">
          {/* Mobile Layout - Alternating cards */}
          <div className="md:hidden space-y-12">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="space-y-4">
                {/* Top row: Name/Title and Image side by side */}
                <div
                  className={`flex items-center gap-4 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Name and Title */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-[#0A2540]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-teal-600">
                      {member.title}
                    </p>
                  </div>
                  {/* Image */}
                  <div className="w-1/2">
                    <div className="aspect-4/5 rounded-2xl overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Bio below */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-start">
                {/* Image */}
                <div className="w-full mb-6">
                  <div className="aspect-4/5 rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-md font-semibold text-gray-600 mb-4">
                  {member.title}
                </p>

                {/* Bio */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
