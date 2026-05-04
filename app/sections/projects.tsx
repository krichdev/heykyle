import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { ExternalLinkIcon } from "lucide-react";
import { content } from "@/lib/content";

export function Projects() {
  const { heading, items } = content.projects;
  return (
    <Bounded className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/assembly.png"
        alt=""
        className="absolute h-32 w-32 md:h-40 md:w-40 opacity-25 rotate-[35deg] ~right-6/64 top-12"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/assembly-2.png"
        alt=""
        className="absolute w-24 opacity-25 rotate-[45deg] ~left-3/64 bottom-20"
      />
      <Heading size="sm" as="h3" className="mb-8 font-extrabold">
        {heading}
      </Heading>
      <div className="flex flex-col gap-8 mb-14">
        {items.map((item) => (
          <div
            key={item.name}
            className="border border-zinc-200 rounded-lg p-4 bg-white"
          >
            <div className="flex gap-2 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" width={50} />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{item.name}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-500 flex items-center gap-1 hover:text-zinc-800"
                  >
                    Visit Project <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="mt-4 text-sm text-zinc-800">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/289.png" alt="" className="w-1/2 mx-auto" />
    </Bounded>
  );
}
