import { createClient } from '@/prismicio';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'
import { ExternalLinkIcon } from "lucide-react"
import { PrismicRichText } from '@prismicio/react';

type Props = {
  id: string;
}

const WorkCard = async ({ id }: Props) => {
  const client = createClient();
  const work = await client.getByID<Content.WorkDocument>(id);
  return (
    <div className="z-10 border border-zinc-200 rounded-lg p-4 bg-white">
      <div className="flex gap-2 items-center">
        <PrismicNextImage alt="" field={work.data.logo} width={50} />
        <div className="flex flex-col">
          <p className="text-sm font-medium">{work.data.company}</p>
          {/* <PrismicNextLink field={project.data.project_link} className="text-xs text-zinc-500 flex items-center gap-1 hover:text-zinc-800">
            Visit Project <ExternalLinkIcon className="w-4 h-4" />
          </PrismicNextLink> */}
        </div>
      </div>
      <div className="mt-4 text-sm text-zinc-800">
          <PrismicRichText field={work.data.description} />
          {/* <PrismicNextImage alt="" field={project.data.screenshot} className="mt-4" /> */}
      </div>
    </div>
  )
}

export default WorkCard;