"use client"
import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from '@/app/components/ui/icon-button'
import { ExpandIcon, ShoppingCartIcon } from 'lucide-react'
import Currency from '@/app/components/ui/currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'

interface ProductCardProps {
  data: Product

}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)

  }


  return (
    <div onClick={handleClick} className='bg-white cursor-pointer group rounded-xl border p-3 space-y-4'>
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          alt=''
          src={data.images[0]}
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={onPreview}
              icon={<ExpandIcon size={20}/>}
             />
             <IconButton
              onClick={() => {}}
              icon={<ShoppingCartIcon size={20}/>}
             />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm font-light">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price}/>
      </div>
    </div>
  )
}

export default ProductCard