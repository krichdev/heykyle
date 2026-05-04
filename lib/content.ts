import data from "@/content.json";

export type Content = {
  meta: { title: string; description: string };
  hero: {
    heading: string;
    body: string;
    image: string;
    imageAlt?: string;
    linkedin?: string;
    github?: string;
  };
  aboutMe: { heading: string; description: string[] };
  work: {
    heading: string;
    items: { company: string; logo: string; description: string }[];
  };
  projects: {
    heading: string;
    items: {
      name: string;
      image: string;
      link?: string;
      description: string;
    }[];
  };
  footer: { image: string };
};

export const content = data as Content;
