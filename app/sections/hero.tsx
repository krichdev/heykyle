import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { Linkedin, Github } from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  const { heading, body, image, linkedin, github } = content.hero;
  return (
    <Bounded>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 max-w-96">
          <Heading size="lg" className="font-bold">
            {heading}
          </Heading>
          <p>{body}</p>
          <div className="flex gap-4">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="text-zinc-600" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <Github className="text-zinc-600" />
              </a>
            )}
          </div>
        </div>
        <div className="md:w-1/2 h-auto mt-8 md:mt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" />
        </div>
      </div>
    </Bounded>
  );
}
