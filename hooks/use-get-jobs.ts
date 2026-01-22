"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { JobDetailsType } from "@/lib/types/careers";

export const useGetJobs = () => {
  const [jobs, setJobs] = useState<JobDetailsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // GROQ Query to fetch all jobs with resolved references
        const query = `*[_type == 'jobs']{
          _id,
          jobId,
          active,
          jobName,
          department,
          location,
          remote,
          jobType,
          minimumExperience,
          maximumExperience,
          roleDescription,
          qualifications,
          responsibilities,
          technicalSkills,
          companyValues->,
          companyBenefits->
        }`;
        const data = await client.fetch(query);
        setJobs(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data: jobs, loading, error };
};
