"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle } from "lucide-react";
import { useGetJobs } from "@/hooks/use-get-jobs";
import { client } from "@/lib/sanity";

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const { data: jobs, loading, error } = useGetJobs();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    experience: "",
    linkedInProfile: "",
    portfolioLink: "",
    tncAccepted: false,
  });
  const [resume, setResume] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const job = jobs.find((j) => j.jobId === jobId);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.mobile.trim()) errors.mobile = "Mobile number is required";
    if (!formData.experience.trim()) errors.experience = "Experience is required";
    if (!formData.linkedInProfile.trim())
      errors.linkedInProfile = "LinkedIn profile is required";
    if (!formData.tncAccepted)
      errors.tncAccepted = "You must agree to the terms";
    if (!resume) errors.resume = "Resume is required";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      // 1. Upload resume to Sanity
      const resumeDocument = await client.assets.upload("file", resume as File, {
        contentType: resume?.type,
        filename: resume?.name,
      });

      // 2. Create job applicant document in Sanity
      const doc = {
        _id: `${jobId}-${formData.mobile.replace(/\D/g, "")}`,
        _type: "jobApplicants",
        fullName: formData.fullName,
        email: formData.email,
        jobId: jobId,
        countryCode: formData.countryCode,
        mobile: formData.mobile,
        experience: formData.experience,
        linkedInProfile: formData.linkedInProfile,
        portfolioLink: formData.portfolioLink || undefined,
        resume: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: resumeDocument._id,
          },
        },
        tncAccepted: formData.tncAccepted,
      };

      await client.createIfNotExists(doc);

      // 3. Send email notification via API
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          countryCode: formData.countryCode,
          mobile: formData.mobile,
          experience: formData.experience,
          linkedInProfile: formData.linkedInProfile,
          portfolioLink: formData.portfolioLink,
          jobId: jobId,
          jobName: job?.jobName || jobId,
        }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        setSubmitStatus("success");
        setSubmitMessage(
          "Application submitted successfully! We'll be in touch soon."
        );
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+91",
          mobile: "",
          experience: "",
          linkedInProfile: "",
          portfolioLink: "",
          tncAccepted: false,
        });
        setResume(null);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.reason || "Failed to submit application. Please try again."
        );
      }
    } catch (err) {
      console.error("Application submission error:", err);
      setSubmitStatus("error");
      setSubmitMessage("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
          <span className="ml-3 text-gray-600">Loading job details...</span>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold text-gray-900">Job not found</h1>
          <p className="text-gray-600 mt-4">
            The job you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const formatExperience = (min: number, max: number) => {
    if (min === max) return `${min} yrs`;
    return `${min}-${max} yrs`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Side - Job Details (Scrollable) */}
            <div className="lg:col-span-2">
              {/* Job Header */}
              <div className="my-8">
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                  {job.jobName}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium capitalize">
                    {job.location}
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                    {job.remote ? "Remote" : "On-site"}
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                    {formatExperience(
                      job.minimumExperience,
                      job.maximumExperience
                    )}
                  </span>
                </div>
              </div>

              {/* About this role */}
              <section className="mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  About this role
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.roleDescription}
                </p>
              </section>

              {/* Qualifications */}
              {job.qualifications && job.qualifications.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Qualifications
                  </h2>
                  <ul className="space-y-3">
                    {job.qualifications.map((qual: string, index: number) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-teal-500 font-bold shrink-0">
                          •
                        </span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp: string, index: number) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-teal-500 font-bold shrink-0">
                          •
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Expertise and Capabilities */}
              {job.technicalSkills && job.technicalSkills.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Expertise and Capabilities
                  </h2>
                  <ul className="space-y-3">
                    {job.technicalSkills.map((skill: string, index: number) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-teal-500 font-bold shrink-0">
                          •
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Company Values */}
              {job.companyValues && (
                <section className="mb-10">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Company Values
                  </h2>
                  {job.companyValues.description && (
                    <p className="text-gray-700 mb-4">
                      {job.companyValues.description}
                    </p>
                  )}
                  {job.companyValues.points &&
                    job.companyValues.points.length > 0 && (
                      <ul className="space-y-3">
                        {job.companyValues.points.map(
                          (point: string, index: number) => (
                            <li
                              key={index}
                              className="flex gap-3 text-gray-700"
                            >
                              <span className="text-teal-500 font-bold shrink-0">
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </section>
              )}

              {/* Company Benefits */}
              {job.companyBenefits && (
                <section className="mb-10">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Company Benefits
                  </h2>
                  {job.companyBenefits.description && (
                    <p className="text-gray-700 mb-4">
                      {job.companyBenefits.description}
                    </p>
                  )}
                  {job.companyBenefits.points &&
                    job.companyBenefits.points.length > 0 && (
                      <ul className="space-y-3">
                        {job.companyBenefits.points.map(
                          (benefit: string, index: number) => (
                            <li
                              key={index}
                              className="flex gap-3 text-gray-700"
                            >
                              <span className="text-teal-500 font-bold shrink-0">
                                •
                              </span>
                              <span>{benefit}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </section>
              )}
            </div>

            {/* Right Side - Application Form (Fixed on scroll) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="bg-[#F7F7F7] border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    Apply here
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Use the form below to submit your application
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+49">+49</option>
                          <option value="+33">+33</option>
                        </select>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                        />
                      </div>
                      {formErrors.mobile && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Experience <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g., 5 years"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                      {formErrors.experience && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.experience}
                        </p>
                      )}
                    </div>

                    {/* LinkedIn Profile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        LinkedIn Profile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        name="linkedInProfile"
                        value={formData.linkedInProfile}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                      {formErrors.linkedInProfile && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.linkedInProfile}
                        </p>
                      )}
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Portfolio
                      </label>
                      <input
                        type="url"
                        name="portfolioLink"
                        value={formData.portfolioLink}
                        onChange={handleInputChange}
                        placeholder="https://..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Upload CV/Resume */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Upload CV/Resume <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="cv-upload"
                        />
                        <label
                          htmlFor="cv-upload"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                        >
                          <Upload className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">
                            {resume ? resume.name : "Choose File"}
                          </span>
                        </label>
                      </div>
                      {formErrors.resume && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.resume}
                        </p>
                      )}
                      {!resume && (
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, or DOCX (max 5MB)
                        </p>
                      )}
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        name="tncAccepted"
                        checked={formData.tncAccepted}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="terms" className="text-xs text-gray-600">
                        By using this form you agree with the storage and
                        handling of your data by this website.
                      </label>
                    </div>
                    {formErrors.tncAccepted && (
                      <p className="text-red-500 text-sm">
                        {formErrors.tncAccepted}
                      </p>
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
                        {submitStatus === "success" && (
                          <CheckCircle className="w-5 h-5" />
                        )}
                        <p className="text-sm">{submitMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
