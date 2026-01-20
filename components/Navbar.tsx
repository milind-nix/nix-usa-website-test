"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  variant?: "light" | "dark";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = variant === "light";
  const logo = isLight ? "/neuralix-logo.png" : "/neuralix-dark-logo.svg";
  const textColor = isLight ? "text-white" : "text-gray-900";
  const hoverBg = isLight ? "hover:bg-white/10" : "hover:bg-gray-100";
  const hoverText = isLight ? "hover:text-teal-400" : "hover:text-teal-600";
  const hamburgerColor = isLight ? "text-white" : "text-gray-900";

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "#", label: "Our Technologies" },
    { href: "/our-team", label: "Our Team" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/career", label: "Career" },
  ];

  return (
    <>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="Neuralix.ai" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="/about">About</Link>
            </Button>
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="#">Team background</Link>
            </Button>
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="/our-team">Our Team</Link>
            </Button>
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="/case-studies">Case Studies</Link>
            </Button>
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="/career">Career</Link>
            </Button>
            <Button
              variant="ghost"
              className={`${textColor} ${hoverText} ${hoverBg}`}
              asChild
            >
              <Link href="#">Contact</Link>
            </Button>
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-6"
              asChild
            >
              <Link href="#">Speak with us</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden p-2 ${hamburgerColor}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
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
                  src="/neuralix-dark-logo.svg"
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

              {/* Contact Us Button */}
              <div className="pt-8">
                <Button
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-8 py-3 text-base"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
