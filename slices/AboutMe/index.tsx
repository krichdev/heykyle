import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";

/**
 * Props for `AboutMe`.
 */
export type AboutMeProps = SliceComponentProps<Content.AboutMeSlice>;

/**
 * Component for "AboutMe" Slices.
 */
const AboutMe: FC<AboutMeProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="sm" as="h3" className="mb-8 font-extrabold">{slice.primary.heading}</Heading>
      <div className="z-10 border border-zinc-200 rounded-lg p-4 bg-white">
        <div className="mt-4 text-sm text-zinc-800">
          <PrismicText field={slice.primary.description} />
        </div>
      </div>
    </Bounded>
  );
};

export default AboutMe;
