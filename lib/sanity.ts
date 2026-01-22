import { createClient } from "next-sanity";

// Sanity client for careers/jobs
export const careersClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_ENV || "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Sanity client for case studies
export const caseStudiesClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_ENV || "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_TOKEN,
});

// Keep 'client' as alias for careersClient for backwards compatibility
export const client = careersClient;
