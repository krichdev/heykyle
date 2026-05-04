import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { content } from "@/lib/content";

export function AboutMe() {
  const { heading, description } = content.aboutMe;
  return (
    <Bounded>
      <Heading size="sm" as="h3" className="mb-8 font-extrabold">
        {heading}
      </Heading>
      <div className="z-10 border border-zinc-200 rounded-lg p-4 bg-white">
        <div className="mt-4 text-sm text-zinc-800">
          <p>{description}</p>
        </div>
      </div>
    </Bounded>
  );
}
