"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { handleScrollToDemo } from "@/lib/utils";

interface NavbarProps {
  variant?: "light" | "dark";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isLight = variant === "light";

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on scroll state and variant
  const showDarkStyle = !isLight || isScrolled;
  const logo = showDarkStyle ? "/nix-full-icon.svg" : "/Footer-logo.svg";

  const logoHeight = showDarkStyle ? "h-7" : "h-6";

  const textColor = showDarkStyle ? "text-gray-900" : "text-white";
  const hoverBg = showDarkStyle ? "hover:bg-gray-100" : "hover:bg-white/10";
  const hoverText = showDarkStyle
    ? "hover:text-teal-600"
    : "hover:text-teal-400";
  const hamburgerColor = showDarkStyle ? "text-gray-900" : "text-white";
  const bgColor = showDarkStyle ? "bg-white shadow-sm" : "bg-transparent";

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/our-team", label: "Our Team" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/career", label: "Careers" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${bgColor}`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Neuralix.ai"
                className={`${logoHeight} w-auto transition-all duration-300`}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Button
                variant="ghost"
                className={`${textColor} ${hoverText} ${hoverBg} transition-colors duration-300`}
                asChild
              >
                <Link href="/about">About</Link>
              </Button>
              <Button
                variant="ghost"
                className={`${textColor} ${hoverText} ${hoverBg} transition-colors duration-300`}
                asChild
              >
                <Link href="/our-team">Our Team</Link>
              </Button>
              <Button
                variant="ghost"
                className={`${textColor} ${hoverText} ${hoverBg} transition-colors duration-300`}
                asChild
              >
                <Link href="/case-studies">Case Studies</Link>
              </Button>
              <Button
                variant="ghost"
                className={`${textColor} ${hoverText} ${hoverBg} transition-colors duration-300`}
                asChild
              >
                <Link href="/career">Careers</Link>
              </Button>
              <Button
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-6"
                asChild
              >
                <a href="/#demo" onClick={(e) => handleScrollToDemo(router, e)}>
                  Contact us
                </a>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden p-2 ${hamburgerColor} transition-colors duration-300`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-100 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white">
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src="/nix-full-icon.svg"
                  alt="Neuralix.ai"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="px-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-5 text-xl font-medium text-[#0A2540] border-b border-gray-200"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-8">
                <Button
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-8 py-3 text-base"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a
                    href="/#demo"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      handleScrollToDemo(router, e);
                    }}
                  >
                    Contact us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
