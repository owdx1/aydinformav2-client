import { Product } from '@/types'
import React from 'react'
import Currency from '@/app/components/ui/currency'
import Button from '@/app/components/ui/button'
import { ShoppingCartIcon } from 'lucide-react'

interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className='mt-3 items-end justify-center'>
        <p className="text-3xl text-gray-900">
          <Currency  value={data.price} />
        </p>
      </div>
      <hr className='my-4'/>
      <div className='flex flex-col gap-y-6'>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data.size.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className='h-6 w-6 rounded-md' style={{ backgroundColor: data.color.value}} />
          <p>{data.color.name}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="text-white flex gap-4">
          Add to cart
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  )
}

export default Info