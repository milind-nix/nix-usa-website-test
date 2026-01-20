"use client";

import { useState } from "react";
import { ChevronDown, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+81", country: "JP" },
    { code: "+86", country: "CN" },
    { code: "+61", country: "AU" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "This field is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = "Please agree to the privacy policy.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus("idle");
      setSubmitMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            countryCode: formData.countryCode,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (data.status === "ok") {
          setSubmitStatus("success");
          setSubmitMessage("Thank you! We'll be in touch soon.");
          // Reset form
          setFormData({
            fullName: "",
            email: "",
            countryCode: "+1",
            phone: "",
            message: "",
            agreeToPolicy: false,
          });
        } else {
          setSubmitStatus("error");
          setSubmitMessage(data.reason || "Something went wrong. Please try again.");
        }
      } catch {
        setSubmitStatus("error");
        setSubmitMessage("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto items-start">
          {/* Left Side - Text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-6 block">
              GET A PERSONALIZED DEMO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0A2540] leading-tight">
              Ready to see Neuralix in action?
            </h2>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={`w-full border-b-2 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } py-2 text-lg text-gray-900 focus:outline-none focus:border-teal-500 transition-colors bg-transparent`}
                  placeholder=""
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full border-b-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } py-2 text-lg text-gray-900 focus:outline-none focus:border-teal-500 transition-colors bg-transparent`}
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Phone No
                </label>
                <div className="flex items-center border-b-2 border-gray-300 focus-within:border-teal-500 transition-colors">
                  {/* Country Code Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({ ...formData, countryCode: e.target.value })
                      }
                      className="appearance-none bg-transparent py-2 pr-8 text-lg text-gray-900 focus:outline-none cursor-pointer"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <div className="w-px h-6 bg-gray-300 mx-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="flex-1 py-2 text-lg text-gray-900 focus:outline-none bg-transparent"
                    placeholder="Phone No"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  How can we help?
                </label>
                <input
                  type="text"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-300 py-2 text-lg text-gray-900 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
                  placeholder=""
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeToPolicy: e.target.checked })
                  }
                  className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded cursor-pointer accent-teal-500"
                />
                <label
                  htmlFor="agreeToPolicy"
                  className="text-gray-700 text-sm leading-relaxed cursor-pointer"
                >
                  Click &apos;I Agree&apos; to embrace AI for operational success. Explore
                  our{" "}
                  <a href="/privacy-policy" className="underline hover:text-teal-600">
                    Privacy Policy
                  </a>{" "}
                  for details
                </label>
              </div>
              {errors.agreeToPolicy && (
                <p className="text-red-500 text-sm -mt-4">{errors.agreeToPolicy}</p>
              )}

              {/* Submit Status Message */}
              {submitMessage && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus === "success" && <CheckCircle className="w-5 h-5" />}
                  <p>{submitMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-8 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
