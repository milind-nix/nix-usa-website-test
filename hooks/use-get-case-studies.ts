"use client";

import { useEffect, useState } from "react";
import { caseStudiesClient } from "@/lib/sanity";
import type { CaseStudy, CaseStudyListItem, Category } from "@/lib/types/caseStudies";

// Query for listing page - fetches minimal data
const listQuery = `*[_type == 'caseStudy' && active == true] | order(order asc) {
  _id,
  title,
  slug,
  subtitle,
  category->{
    _id,
    name,
    slug
  },
  tag,
  "heroImageUrl": heroImage.asset->url,
  "cardImageUrl": cardImage.asset->url,
  active,
  order
}`;

// Query for single case study detail page
const detailQuery = `*[_type == 'caseStudy' && slug.current == $slug][0] {
  _id,
  title,
  slug,
  subtitle,
  category->{
    _id,
    name,
    slug
  },
  tag,
  heroImage,
  "heroImageUrl": heroImage.asset->url,
  cardImage,
  "cardImageUrl": cardImage.asset->url,
  overview,
  challenges,
  solutionPhases,
  impactItems,
  active,
  publishedAt,
  order
}`;

// Query for categories
const categoriesQuery = `*[_type == 'category'] | order(order asc) {
  _id,
  name,
  slug,
  description,
  order
}`;

// Query for related case studies (excluding current one)
const relatedQuery = `*[_type == 'caseStudy' && active == true && slug.current != $currentSlug] | order(order asc) [0...3] {
  _id,
  title,
  slug,
  tag,
  "heroImageUrl": heroImage.asset->url,
  "cardImageUrl": cardImage.asset->url
}`;

export function useGetCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        setLoading(true);
        const data = await caseStudiesClient.fetch<CaseStudyListItem[]>(listQuery);
        setCaseStudies(data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching case studies:", err);
        setError("Failed to load case studies");
        setCaseStudies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudies();
  }, []);

  return { caseStudies, loading, error };
}

export function useGetCaseStudyBySlug(slug: string) {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCaseStudy() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await caseStudiesClient.fetch<CaseStudy>(detailQuery, { slug });
        setCaseStudy(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching case study:", err);
        setError("Failed to load case study");
        setCaseStudy(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudy();
  }, [slug]);

  return { caseStudy, loading, error };
}

export function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await caseStudiesClient.fetch<Category[]>(categoriesQuery);
        setCategories(data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

export function useGetRelatedCaseStudies(currentSlug: string) {
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<CaseStudyListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRelated() {
      if (!currentSlug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await caseStudiesClient.fetch<CaseStudyListItem[]>(relatedQuery, { currentSlug });
        setRelatedCaseStudies(data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching related case studies:", err);
        setError("Failed to load related case studies");
        setRelatedCaseStudies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRelated();
  }, [currentSlug]);

  return { relatedCaseStudies, loading, error };
}
