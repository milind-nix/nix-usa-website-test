export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  order: number;
}

export interface SolutionPhase {
  _key: string;
  title: string;
  items: string[];
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  subtitle: string;
  category: Category;
  tag: string;
  heroImage: SanityImage;
  heroImageUrl?: string;
  cardImage?: SanityImage;
  cardImageUrl?: string;
  overview: string;
  challenges: string[];
  solutionPhases: SolutionPhase[];
  impactItems: string[];
  active: boolean;
  publishedAt: string;
  order: number;
}

export interface CaseStudyListItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  subtitle: string;
  category: Category;
  tag: string;
  heroImageUrl?: string;
  cardImageUrl?: string;
  active: boolean;
  order: number;
}
