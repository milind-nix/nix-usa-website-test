import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

type PointTextProps = {
  title: string;
  text: string | React.ReactNode;
};

function PointText({ title, text }: PointTextProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{text}</div>
    </div>
  );
}

const PrivacyPolicy = () => (
  <div className="flex flex-col gap-y-6">
    <div className="mb-4">
      <p className="text-gray-700 leading-relaxed">
        This Privacy Policy explains how Neuralix collects, uses, discloses, and
        protects personal information.
      </p>
    </div>

    <div className="flex flex-col gap-y-2">
      <h2 className="text-lg font-medium">1. Information We Collect</h2>
      <div className="flex flex-col gap-y-3 text-gray-700 leading-relaxed">
        <div>
          <h3 className="font-medium mb-1">1.1 Information You Provide</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Name, email address, company, job title</li>
            <li>Account registration details</li>
            <li>Communications and inquiries</li>
            <li>Data submitted through the Services</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-1">1.2 Automatically Collected Information</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>IP address, device type, browser information</li>
            <li>Usage data and logs</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </div>
      </div>
    </div>

    <PointText
      title="2. How We Use Information"
      text={
        <>
          We use information to:
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Provide, operate, and improve the Services</li>
            <li>Communicate with you</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
            <li>
              Develop and enhance AI models (in aggregated or de-identified
              form)
            </li>
          </ul>
        </>
      }
    />

    <PointText
      title="3. AI and Data Processing"
      text="Neuralix may process data using automated and AI-driven systems. Personal data is not used to train generalized AI models without appropriate safeguards, anonymization, or consent where required by law."
    />

    <PointText
      title="4. Sharing of Information"
      text={
        <>
          We may share information with:
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Service providers and vendors</li>
            <li>Business partners (as authorized)</li>
            <li>Legal authorities when required by law</li>
            <li>
              In connection with mergers, acquisitions, or corporate transactions
            </li>
          </ul>
          <p className="mt-2">We do not sell personal information.</p>
        </>
      }
    />

    <PointText
      title="5. Data Retention"
      text="We retain personal information only as long as necessary to fulfill the purposes described in this Policy or as required by law."
    />

    <PointText
      title="6. Security"
      text="We implement reasonable administrative, technical, and organizational safeguards to protect information. However, no system is 100% secure."
    />

    <PointText
      title="7. Your Rights"
      text={
        <>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict processing of your personal information.
          <br />
          <br />
          Requests may be submitted to:{" "}
          <a
            href="mailto:info@neuralix.ai"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            info@neuralix.ai
          </a>
        </>
      }
    />

    <PointText
      title="8. Cookies and Tracking"
      text="We use cookies to enhance functionality and analyze usage. You may manage cookie preferences through your browser settings."
    />

    <PointText
      title="9. International Data Transfers"
      text="Information may be processed in the United States or other jurisdictions where we or our service providers operate."
    />

    <PointText
      title="10. Children's Privacy"
      text="The Services are not intended for individuals under 18. We do not knowingly collect personal information from children."
    />

    <PointText
      title="11. Changes to This Privacy Policy"
      text="We may update this Privacy Policy periodically. Updates will be posted on our website with a revised effective date."
    />

    <PointText
      title="12. Contact Us"
      text={
        <>
          If you have questions or concerns about this Privacy Policy, contact:{" "}
          <a
            href="mailto:info@neuralix.ai"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            info@neuralix.ai
          </a>
        </>
      }
    />
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-16 py-12 md:py-20 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Neuralix – Privacy Policy
            </h1>
            <p className="text-gray-600">Last Updated: January 2026</p>
          </div>
          <PrivacyPolicy />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
