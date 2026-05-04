import { Metadata } from "next";
import { AboutMe } from "@/app/sections/about-me";
import { Footer } from "@/app/sections/footer";
import { Hero } from "@/app/sections/hero";
import { Projects } from "@/app/sections/projects";
import { Work } from "@/app/sections/work";
import { content } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};
