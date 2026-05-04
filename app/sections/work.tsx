import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { content } from "@/lib/content";

export function Work() {
  const { heading, items } = content.work;
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/money-left.png" alt="" className="w-36 h-auto" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/money-right.png" alt="" className="w-36 h-auto" />
      </div>
      <Bounded className="~py-1/2">
        <Heading size="sm" as="h3" className="mb-8 font-extrabold">
          {heading}
        </Heading>
        <div className="flex flex-col gap-8 mb-14">
          {items.map((item) => (
            <div
              key={item.company}
              className="z-10 border border-zinc-200 rounded-lg p-4 bg-white"
            >
              <div className="flex gap-2 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt="" width={50} />
                <p className="text-sm font-medium">{item.company}</p>
              </div>
              <div className="mt-4 text-sm text-zinc-800">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/011.png" alt="" className="w-1/2 mx-auto" />
      </Bounded>
    </div>
  );
}
