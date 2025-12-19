
export interface Agency {
  rank: number;
  name: string;
  location: string;
  description: string;
  highlight: string;
}

export interface Niche {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  agencies: Agency[];
}
