
import { Niche } from './types';

export const NICHES: Niche[] = [
  {
    id: 'performance',
    slug: 'performance-marketing',
    title: 'Performance Marketing (Paid Media)',
    shortDescription: 'Agencies specialized in search, social, and marketplace advertising driven by ROI and data.',
    agencies: [
      {
        rank: 1,
        name: 'Disruptive Advertising',
        location: 'Utah, USA',
        description: 'Proven expertise in paid media, CRO, and analytics-driven performance marketing.',
        highlight: 'Performance-driven agency focused on ROI, conversion optimization, and scalable paid media strategies.'
      },
      {
        rank: 2,
        name: 'KlientBoost',
        location: 'California, USA',
        description: 'Conversion-focused paid media with strong creative testing and landing page optimization.',
        highlight: 'Conversion-focused paid media with strong creative testing.'
      },
      {
        rank: 3,
        name: 'Tinuiti',
        location: 'New York, USA',
        description: 'Large-scale performance marketing across search, social, and marketplaces.',
        highlight: 'Large-scale performance marketing across search and social.'
      }
    ]
  },
  {
    id: 'sales-integration',
    slug: 'marketing-sales-integration',
    title: 'Marketing & Sales Integration',
    shortDescription: 'Agencies specialized in combining marketing, sales processes, and automation to generate and close high-quality leads.',
    agencies: [
      {
        rank: 1,
        name: 'GV Marketing',
        location: 'Orlando, Florida, USA',
        description: 'Full-funnel operation integrating paid traffic, CRM, automation, SDR workflows, and sales closing, with strong focus on measurable revenue growth.',
        highlight: 'Integrated marketing and sales operation combining lead generation, CRM automation, and closing strategies focused on revenue growth.'
      },
      {
        rank: 2,
        name: 'CIENCE Technologies',
        location: 'San Diego, California, USA',
        description: 'Strong B2B lead generation and outbound sales structure with data-driven prospecting.',
        highlight: 'Strong B2B lead generation and outbound sales structure.'
      },
      {
        rank: 3,
        name: 'Martal Group',
        location: 'Toronto, Canada / U.S. Operations',
        description: 'Specialized in outsourced B2B sales development with structured SDR and enterprise sales processes.',
        highlight: 'Specialized in outsourced B2B sales development.'
      }
    ]
  },
  {
    id: 'creative',
    slug: 'creative-branding',
    title: 'Creative & Branding',
    shortDescription: 'Global creative agencies recognized for brand storytelling, cultural relevance, and high-impact campaigns.',
    agencies: [
      {
        rank: 1,
        name: 'VaynerMedia',
        location: 'New York, USA',
        description: 'Global creative agency recognized for brand storytelling, cultural relevance, and high-impact campaigns.',
        highlight: 'Global creative agency recognized for brand storytelling, cultural relevance, and high-impact campaigns.'
      },
      {
        rank: 2,
        name: 'Wieden+Kennedy',
        location: 'Portland, USA',
        description: 'Iconic global campaigns and long-term brand positioning.',
        highlight: 'Iconic global campaigns and long-term brand positioning.'
      },
      {
        rank: 3,
        name: 'R/GA',
        location: 'New York, USA',
        description: 'Digital-first branding and innovation-driven creative work.',
        highlight: 'Digital-first branding and innovation-driven creative work.'
      }
    ]
  }
];
