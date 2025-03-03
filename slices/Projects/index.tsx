import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { PrismicNextLink } from "@prismicio/next";
import Project from "./project";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects: FC<ProjectsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <img src="/images/assembly.png" className="absolute h-32 w-32 md:h-40 md:w-40 opacity-25 rotate-[35deg] ~right-6/64 top-12" />
      <img src="/images/assembly-2.png" className="absolute w-24 opacity-25 rotate-[45deg] ~left-3/64 bottom-20" />
      <Heading size="sm" as="h3" className="mb-8 font-extrabold">{slice.primary.title}</Heading>
      <div className="flex flex-col gap-8 mb-14">
        {slice.primary.projects.map(({ project }) => (
          isFilled.contentRelationship(project) && (
            <Project key={project.id} id={project.id} />
          )
        ))}
      </div>
      <img src="/images/289.png" className="w-1/2 mx-auto" />
    </Bounded>
  );
};

export default Projects;
