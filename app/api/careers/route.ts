import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as postmark from "postmark";

// Validation schema for job application
const applicationSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  countryCode: z.string().optional(),
  mobile: z.string().min(1, "Mobile is required"),
  experience: z.string().min(1, "Experience is required"),
  linkedInProfile: z.string().url("Invalid LinkedIn URL"),
  portfolioLink: z.string().url().optional().or(z.literal("")),
  jobId: z.string().min(1, "Job ID is required"),
  jobName: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = applicationSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { status: "failed", reason: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      countryCode,
      mobile,
      experience,
      linkedInProfile,
      portfolioLink,
      jobId,
      jobName,
    } = result.data;

    // Check if Postmark API key is configured
    if (!process.env.POSTMARK_API_KEY) {
      console.error("POSTMARK_API_KEY is not configured");
      return NextResponse.json(
        { status: "failed", reason: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Check if recipients are configured
    const recipients = process.env.CAREERS_MAIL_RECIPIENTS || process.env.CONTACT_US_MAIL_RECIPIENTS;
    if (!recipients) {
      console.error("CAREERS_MAIL_RECIPIENTS is not configured");
      return NextResponse.json(
        { status: "failed", reason: "Email recipients not configured" },
        { status: 500 }
      );
    }

    // Initialize Postmark client
    const pmClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

    // Construct phone number
    const phoneNumber = `${countryCode || ""} ${mobile}`;

    // Construct email body
    const emailBody = `
New Job Application Received

Position: ${jobName || jobId}
Job ID: ${jobId}

Applicant Details:
------------------
Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Experience: ${experience}
LinkedIn: ${linkedInProfile}
${portfolioLink ? `Portfolio: ${portfolioLink}` : ""}

---
This application was submitted via the Neuralix website careers page.
The resume has been uploaded to Sanity CMS.
    `.trim();

    // Send email via Postmark
    await pmClient.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL || "info@neuralix.ai",
      To: recipients,
      Subject: `New Application: ${jobName || jobId} - ${fullName}`,
      TextBody: emailBody,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error processing job application:", error);

    let errorMessage = "Failed to submit application. Please try again.";
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      if (process.env.NODE_ENV === "development") {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      { status: "failed", reason: errorMessage },
      { status: 500 }
    );
  }
}
