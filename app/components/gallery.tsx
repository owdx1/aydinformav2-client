"use client"
import Image from 'next/image'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import GalleryTab from '@/app/components/ui/gallery-tab'

interface GalleryProps {
  images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as='div' className="flex flex-col">
      <div className='mx-auto w-full sm:block max-w-2xl lg:max-w-none'>
        <TabPanels className="aspect-square w-full">
          {images.map((image) => (
            <TabPanel key={image}>
              <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
                <Image
                  alt=''
                  src={image}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </TabPanel>
          ))}
        </TabPanels>
        <TabList className="grid grid-cols-4 gap-6 pt-4">
          {images.map((image) => (
            <GalleryTab key={image} image={image}/>
          ))}
        </TabList>
      </div>
    </TabGroup>
  )
}

export default Gallery