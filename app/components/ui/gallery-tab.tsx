import { cn } from '@/lib/utils'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

interface GalleryTabProps {
  image: string
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              alt=''
              src={image}
              className="object-cover object-center"
              fill
            />
          </span>
          <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
            selected ? "ring-black" : "ring-transparent"
          )}>

          </span>
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab