import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#0C2D2C] relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-2 mb-6">
            <img
              src="/footer-logo-new.svg"
              alt="Neuralix.ai"
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-sm">© 2026 neuralix.ai</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 mb-10">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Navigation Links - 2 columns */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Security
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Privacy Policy
              </Link>
              <Link
                href="mailto:info@neuralix.ai"
                className="text-teal-400 hover:text-teal-300 transition-colors text-base"
              >
                info@neuralix.ai,
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                About
              </Link>
              <Link
                href="/team-background"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Team background
              </Link>
              <Link
                href="/our-team"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Our Team
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Case Studies
              </Link>
              <Link
                href="/career"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Office Locations - 2 columns */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {/* United States */}
            <div>
              <h3 className="text-white font-semibold mb-2">United States</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                4100 Spring Valley Rd, Suite 935
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dallas, TX 75244
              </p>
              {/* USA Map SVG */}
              <div className="mt-4">
                <img
                  src="/US-Map.svg"
                  alt="United States Map"
                  className="w-36 h-auto opacity-60"
                />
              </div>
            </div>

            {/* India */}
            <div>
              <h3 className="text-white font-semibold mb-2">India</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                428, Railway Line Road
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                NGEF Layout,
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sadananda Nagar
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bangalore, Karnataka - 560038
              </p>
              {/* India Map SVG */}
              <div className="mt-4">
                <img
                  src="/India-Map.svg"
                  alt="India Map"
                  className="w-24 h-auto opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Bottom - Large Footer Logo */}
          <div className="w-full">
            <img
              src="/Footer-Big-Logo.svg"
              alt="Neuralix.ai"
              className="w-full h-auto opacity-80"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Top Row - Logo, Social Icons, and Navigation Links */}
          <div className="flex gap-16 mb-20">
            {/* Left - Main div (60% width) */}
            <div className="flex flex-col gap-16 w-[70%]">
              <div className="flex gap-96">
                {/* Left - Logo and Copyright */}
                <div className="flex flex-col gap-3">
                  <img
                    src="/footer-logo-new.svg"
                    alt="Neuralix.ai"
                    className="h-8 w-auto"
                  />
                  <p className="text-gray-400 text-sm">© 2026 neuralix.ai</p>
                </div>

                {/* Center - Social Media Icons */}
                <div className="flex items-start gap-6">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              {/* Office Locations - Side by Side */}
              <div>
                <div className="flex gap-32">
                  {/* United States */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">
                      United States
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      4100 Spring Valley Rd, Suite 935
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Dallas, TX 75244
                    </p>
                    {/* USA Map SVG */}
                    <div className="mt-6">
                      <img
                        src="/US-Map.svg"
                        alt="United States Map"
                        className="w-28 h-auto opacity-60"
                      />
                    </div>
                  </div>

                  {/* India */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">India</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      428, Railway Line Road
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      NGEF Layout, Sadananda Nagar
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Bangalore, Karnataka - 560038
                    </p>
                    {/* India Map SVG */}
                    <div className="mt-6">
                      <img
                        src="/India-Map.svg"
                        alt="India Map"
                        className="w-20 h-auto opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Navigation Links (40% width) */}
            <div className="flex gap-48 w-[30%]">
              {/* Right - Navigation Links - Column 1 */}
              <div className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Security
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="mailto:info@neuralix.ai"
                  className="text-teal-400 hover:text-teal-300 transition-colors text-sm"
                >
                  Info@neuralix.ai
                </Link>
              </div>

              {/* Right - Navigation Links - Column 2 */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
                <Link
                  href="/team-background"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Team background
                </Link>
                <Link
                  href="/our-team"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Our Team
                </Link>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </Link>
                <Link
                  href="/career"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Career
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom - Large Footer Logo */}
          <div className="w-full flex justify-center">
            <img
              src="/Footer-Big-Logo.svg"
              alt="Neuralix.ai"
              className="w-full h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
