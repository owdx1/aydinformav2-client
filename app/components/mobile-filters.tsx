"use client"
import { Color, Size } from '@/types'
import React, { useState } from 'react'
import Button from '@/app/components/ui/button'
import { PlusIcon, XIcon } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'
import IconButton from './ui/icon-button'
import Filter from '../category/[categoryId]/components/filter'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {

  const [open, setOpen] = useState(false); 

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button className='flex items-center gap-2 lg:hidden' onClick={onOpen}>
        Filters
        <PlusIcon size={20}/>
      </Button>

      <Dialog open={open} as='div' className="relative z-40 lg:hidden" onClose={onClose}>
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto h-full w-full max-w-xs flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<XIcon size={15} onClick={onClose}/>}/>
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
              <Filter valueKey="colorId" name="Colors" data={colors}/>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters