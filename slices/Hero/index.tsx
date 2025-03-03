import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 max-w-96">
          <Heading size="lg" className="font-bold">
            <PrismicText field={slice.primary.heading} />
          </Heading>
          <PrismicRichText field={slice.primary.body} />
          <div className="flex gap-4">
            {slice.primary.linkedin && <Link href={slice.primary.linkedin.url}><Linkedin className="text-zinc-600" /></Link>}
            {slice.primary.github && <Link href={slice.primary.github.url}><Github className="text-zinc-600" /></Link>}
          </div>
        </div>
        <div className="md:w-1/2 h-auto mt-8 md:mt-0">
          <PrismicNextImage field={slice.primary.hero_image} />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
