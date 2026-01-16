"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

// Sample job data (in a real app, this would come from an API or database)
const jobData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Senior Machine Learning Engineer",
    location: "India",
    type: "Remote",
    experience: "5 yrs",
    description:
      "We are seeking an experienced Senior Machine Learning Engineer with a strong background in ML model development to join our growing team. In this role, you will lead the development of key systems, mentor a talented group of engineers, and play a pivotal role in shaping the technical direction of our products.",
    qualifications: [
      "Bachelor's or Master's degree in Computer Science, Machine Learning, or a related field.",
      "5+ years of experience in machine learning and deep learning.",
      "Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch).",
      "Experience with data preprocessing, feature engineering, and model evaluation.",
    ],
    responsibilities: [
      "Model Development: Design, develop, and deploy machine learning models for industrial applications.",
      "Technical Mentorship: Guide and mentor junior and mid-level engineers, fostering a culture of continuous learning and technical excellence.",
      "System Development: Build scalable ML pipelines and integrate models into production systems.",
      "Problem-Solving: Tackle complex technical challenges and ensure the reliability of ML systems.",
      "Collaboration: Work closely with cross-functional teams to deliver impactful solutions.",
      "Innovation: Stay current with industry trends and introduce new technologies to the tech stack.",
    ],
    expertise: [
      "Over 5+ years of experience in machine learning development.",
      "Experience with cloud platforms (AWS, Azure, GCP) and MLOps practices.",
      "Proficiency in model optimization and deployment strategies.",
      "Strong understanding of statistical analysis and data visualization.",
    ],
    benefits: [
      "An opportunity to be at the cutting edge of AI-driven industrial transformation.",
      "A collaborative, growth-oriented environment with hands-on training and mentorship.",
      "Opportunities to work on cutting-edge projects with real-world applications.",
      "Opportunities for continuous learning and professional development.",
      "Competitive compensation and comprehensive benefits package.",
    ],
  },
  "2": {
    id: "2",
    title: "Data Scientist",
    location: "United States",
    type: "Hybrid",
    experience: "3 yrs",
    description:
      "We are looking for a talented Data Scientist to join our team and help transform industrial data into actionable insights. You will work on challenging problems in predictive analytics, anomaly detection, and optimization.",
    qualifications: [
      "Bachelor's or Master's degree in Data Science, Statistics, Computer Science, or related field.",
      "3+ years of experience in data science and analytics.",
      "Strong proficiency in Python, R, and SQL.",
      "Experience with statistical modeling and machine learning algorithms.",
    ],
    responsibilities: [
      "Data Analysis: Analyze complex industrial datasets to extract meaningful insights.",
      "Model Building: Develop predictive models and anomaly detection algorithms.",
      "Visualization: Create compelling data visualizations and dashboards.",
      "Collaboration: Work with engineering and product teams to implement data-driven solutions.",
      "Research: Stay updated with latest trends in data science and AI.",
    ],
    expertise: [
      "Experience with data visualization tools (Tableau, Power BI, or similar).",
      "Knowledge of big data technologies (Spark, Hadoop).",
      "Understanding of industrial IoT and sensor data.",
      "Strong communication and presentation skills.",
    ],
    benefits: [
      "Flexible hybrid work arrangement.",
      "Work on meaningful projects that impact industrial operations.",
      "Collaborative and innovative work environment.",
      "Professional development opportunities.",
      "Comprehensive benefits package.",
    ],
  },
  "3": {
    id: "3",
    title: "Full Stack Developer",
    location: "India",
    type: "Remote",
    experience: "4 yrs",
    description:
      "We are seeking an experienced Senior Software Engineer with a strong background in the Python & React stack to join our growing team. In this role, you will lead the development of key systems, mentor a talented group of engineers, and play a pivotal role in shaping the technical direction of our products.",
    qualifications: [
      "Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field.",
      "4+ years of experience in full-stack development.",
      "Strong proficiency in Python and React.",
      "Experience with modern web technologies and frameworks.",
    ],
    responsibilities: [
      "Architectural Leadership: Lead the design and architecture of complex software systems, ensuring they are scalable, maintainable, and secure.",
      "Technical Mentorship: Guide and mentor junior and mid-level engineers, fostering a culture of continuous learning and technical excellence.",
      "System Development: Develop, test, and deploy high-quality software solutions using Python and related technologies.",
      "Problem-Solving: Tackle complex technical challenges, troubleshoot issues, and ensure the reliability of our systems.",
      "Code Quality: Ensure that all code adheres to high standards of performance, security, and scalability through rigorous code reviews and testing.",
      "Collaboration: Work closely with cross-functional teams, including Product, Design, and Operations, to deliver impactful solutions that align with business objectives.",
      "Documentation: Maintain clear and comprehensive documentation of system architectures, APIs, and development processes.",
      "Innovation: Stay current with industry trends, tools, and technologies, and proactively introduce improvements to our development processes and tech stack.",
    ],
    expertise: [
      "Over 5+ years of experience in software development, including at least 4 years in a senior or staff engineer role, with a focus on Python. At least 2 years of experience with React and a minimum of 1 year working in a data-rich domain",
      "Expertise in Python and associated frameworks (e.g., Django, Flask, FastAPI), Strong understanding of RESTful APIs and working with microservices",
      "Proficiency with front-end technologies (HTML, CSS, AWS, Azure, GCP) and containerization (e.g., Docker, Kubernetes).",
      "Proficiency in both relational and NoSQL databases (e.g., Postgres SQL, MongoDB), and solid understanding of CI/CD practices and tools",
      "Experience with asynchronous programming and event-driven architecture",
      "Experience in building frameworks / libraries in Python is preferred",
      "Preferred experience with ETL and orchestration tools (e.g., Airflow, Airflow) and data lake technologies.",
    ],
    benefits: [
      "Neuralix.ai is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
      "An opportunity to be at the cutting edge of AI-driven sustainability initiatives.",
      "A collaborative, growth-oriented environment. Hands-on training and mentorship to help you sharpen your skills.",
      "Opportunities to work on cutting-edge projects with real-world applications.",
      "Opportunities for continuous learning and professional development.",
      "Dynamic work culture with learning & development opportunities.",
    ],
  },
};

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const job = jobData[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <Navbar />
        </div>
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold text-gray-900">Job not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Side - Job Details (Scrollable) */}
            <div className="lg:col-span-2">
              {/* Job Header */}
              <div className="my-8">
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                    {job.location}
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                    {job.type}
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                    {job.experience}
                  </span>
                </div>
              </div>

              {/* About this role */}
              <section className="mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  About this role
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </section>

              {/* Qualifications */}
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

              {/* Responsibilities */}
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

              {/* Expertise and Capabilities */}
              <section className="mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  Expertise and Capabilities
                </h2>
                <ul className="space-y-3">
                  {job.expertise.map((exp: string, index: number) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-teal-500 font-bold shrink-0">
                        •
                      </span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Company Benefits */}
              <section className="mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  Company Benefits
                </h2>
                <p className="text-gray-700 mb-4">
                  Neuralix.ai is an equal opportunity employer. We celebrate
                  diversity and are committed to creating an inclusive
                  environment for all employees.
                </p>
                <ul className="space-y-3">
                  {job.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-teal-500 font-bold shrink-0">
                        •
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
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

                  <form className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white">
                          <option>+91</option>
                          <option>+1</option>
                          <option>+44</option>
                        </select>
                        <input
                          type="tel"
                          required
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                        />
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Experience <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* LinkedIn Profile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        LinkedIn Profile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Portfolio
                      </label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Upload CV/Resume */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Upload CV/Resume
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="cv-upload"
                        />
                        <label
                          htmlFor="cv-upload"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                        >
                          <Upload className="w-5 h-5 text-gray-600 bg-white" />
                          <span className="text-sm text-gray-600">
                            Choose File
                          </span>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        No file chosen
                      </p>
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="terms" className="text-xs text-gray-600">
                        By using this form you agree with the storage and
                        handling of your data by this website.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-3 text-base font-medium">
                      Submit
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
