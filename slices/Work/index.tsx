import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import WorkCard from "./work-card";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work: FC<WorkProps> = ({ slice }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16">
        <img src="/images/money-left.png" className="w-36 h-auto" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4">
        <img src="/images/money-right.png" className="w-36 h-auto" />
      </div>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="~py-1/2"
      >
        <Heading size="sm" as="h3" className="mb-8 font-extrabold">{slice.primary.heading}</Heading>
        <div className="flex flex-col gap-8 mb-14">
          {slice.primary.work.map(({ company }) => (
            isFilled.contentRelationship(company) && (
              <WorkCard key={company.id} id={company.id} />
            )
          ))}
        </div>
        <img src="/images/011.png" className="w-1/2 mx-auto" />
      </Bounded>
    </div>
  );
};

export default Work;
