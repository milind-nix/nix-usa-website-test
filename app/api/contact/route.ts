import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as postmark from "postmark";

// Validation schema for contact form
const contactSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
  message: z.string().max(500, "Message is too long").optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { status: "failed", reason: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { fullName, email, phone, countryCode, message } = result.data;

    // Check if Postmark API key is configured
    if (!process.env.POSTMARK_API_KEY) {
      console.error("POSTMARK_API_KEY is not configured");
      return NextResponse.json(
        { status: "failed", reason: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Check if recipients are configured
    if (!process.env.CONTACT_US_MAIL_RECIPIENTS) {
      console.error("CONTACT_US_MAIL_RECIPIENTS is not configured");
      return NextResponse.json(
        { status: "failed", reason: "Email recipients not configured" },
        { status: 500 }
      );
    }

    // Initialize Postmark client
    const pmClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

    // Construct phone number if provided
    const phoneNumber = phone ? `${countryCode || ""} ${phone}` : "Not provided";

    // Construct email body
    const emailBody = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Message: ${message || "No message provided"}

---
This email was sent from the Neuralix website contact form.
    `.trim();

    // Send email via Postmark
    await pmClient.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL || "info@neuralix.ai",
      To: process.env.CONTACT_US_MAIL_RECIPIENTS,
      Subject: `Contact Request from ${fullName}`,
      TextBody: emailBody,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Get more specific error message from Postmark
    let errorMessage = "Failed to send message. Please try again.";
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      // In development, show actual error for debugging
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
