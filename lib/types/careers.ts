export type JobDetailsType = {
  _id: string;
  jobId: string;
  active: boolean;
  jobName: string;
  department: string;
  location: string;
  remote: boolean;
  jobType: string;
  minimumExperience: number;
  maximumExperience: number;
  roleDescription: string;
  qualifications: string[];
  responsibilities: string[];
  technicalSkills: string[];
  companyValues?: {
    description: string;
    points: string[];
  };
  companyBenefits?: {
    description: string;
    points: string[];
  };
};

export type JobApplicationType = {
  fullName: string;
  email: string;
  countryCode: string;
  mobile: string;
  experience: string;
  linkedInProfile: string;
  portfolioLink?: string;
  resume: File | null;
  tncAccepted: boolean;
  jobId: string;
};
